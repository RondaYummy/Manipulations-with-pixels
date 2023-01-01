<template>
  <div class="preview-connect">
    <preview-main
      :string-message="'Розділення картинки на пікселі. Завантажте будь-які дві картинки та подивіться на результат.'"
    />
  </div>
  <div class="main-wrapper">
    <main class="main">
      <div class="container-container">
        <div class="row">
          <div class="col">
            <div class="input-holder">
              <input
                @change="changeInput(1, $event)"
                ref="inp1"
                id="imgInput1"
                type="file"
              />
            </div>
            <img
              id="img1"
              crossorigin="anonymous"
              src=""
              width="400"
              height="400"
              alt="First image"
              :class="showFirstImage ? 'show' : ''"
            />
            <canvas ref="cnv1" id="cnv1"></canvas>
          </div>
          <div class="col">
            <div class="input-holder">
              <input
                @change="changeInput(2, $event)"
                ref="inp2"
                id="imgInput2"
                type="file"
              />
            </div>
            <img
              id="img2"
              crossorigin="anonymous"
              src=""
              width="400"
              height="400"
              alt="Second image"
              :class="showSecondImage ? 'show' : ''"
            />
            <canvas ref="cnv2" id="cnv2"></canvas>
          </div>
        </div>
      </div>

      <div class="row-btn">
        <button type="button" @click="moveDown">Move down</button>
        <button type="button" @click="connectImages">Connect</button>
      </div>
    </main>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import PreviewMain from "@/components/PreviewMain.vue";

export default {
  components: {
    PreviewMain,
  },
  setup() {
    const inp1 = ref();
    const inp2 = ref();
    const cnv1 = ref();
    const cnv2 = ref();
    const w = 800;
    const h = 800;

    onMounted(() => {
      cnv1.value.width = cnv2.value.width = w;
      cnv1.value.height = cnv2.value.height = h;
    });

    const showFirstImage = ref(false);
    const showSecondImage = ref(false);
    const changeInput = async (orders, e) => {
      if (orders === 1) {
        showFirstImage.value = true;
      } else {
        showSecondImage.value = true;
      }
      const parentColumn = e.target.closest(".col");
      const image = parentColumn.querySelector("img");
      const ctx = parentColumn.querySelector("canvas").getContext("2d");
      const url = URL.createObjectURL(e.target.files[0]);
      const order = orders === 0 ? "odd" : "even";

      let data = await getImageData(image, url, w, h);
      data = erasePixels(data, order);

      ctx.putImageData(data, 0, 0);
    };

    async function getImageData(img, url, w, h) {
      let cnv = document.createElement("canvas");
      let ctx = cnv.getContext("2d");
      cnv.width = w;
      cnv.height = h;

      return new Promise((res) => {
        img.onload = () => {
          ctx.drawImage(img, 0, 0, w, h);
          const imageData = ctx.getImageData(0, 0, w, h);
          cnv.remove();
          cnv = null;

          res(imageData);
        };

        img.src = url;
      });
    }

    function erasePixels(imageData, order) {
      let step = 4;
      let cellSize = w / 40;

      for (let i = 0; i < imageData.data.length; i += step) {
        const index = i / step;
        const x = index % w;
        const y = Math.floor(index / h);
        const colNumber = Math.floor(x / cellSize);
        const rowNumber = Math.floor(y / cellSize);

        if (order === "odd") {
          if (
            (colNumber % 2 === 0 && rowNumber % 2) ||
            (colNumber % 2 && rowNumber % 2 === 0)
          ) {
            imageData.data[i + 3] = 0;
          }
        } else if (order === "even") {
          if (
            (colNumber % 2 && rowNumber % 2) ||
            (colNumber % 2 === 0 && rowNumber % 2 === 0)
          ) {
            imageData.data[i + 3] = 0;
          }
        }
      }

      return imageData;
    }

    const moveDown = () => {
      document.querySelector(".row").classList.toggle("move-down");
    };
    const connectImages = () => {
      document.querySelector(".row").classList.toggle("connected");
    };

    return {
      inp1,
      inp2,
      cnv1,
      cnv2,
      showFirstImage,
      showSecondImage,
      getImageData,
      erasePixels,
      moveDown,
      connectImages,
      changeInput,
    };
  },
};
</script>

<style lang="scss" scoped>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  list-style: none;
}

.main-wrapper {
  min-height: 100%;
  overflow: hidden;
  position: relative;
}

li {
  list-style-type: decimal-leading-zero;
}

button {
  background-color: transparent;
  border: 0;
}

.container-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 125px 20px 20px 20px;

  @media (min-width: 1120px) {
    padding: 100px 20px 20px 20px;
  }
}

button {
  padding: 10px 25px;
  background-color: tomato;
  margin: 10px 0;
  color: white;
  cursor: pointer;
  height: 40px;
}

input {
  height: 40px;
  padding: 0 10px;
  font-size: 24px;
}

::-webkit-input-placeholder {
  /* Webkit */
  font-size: 10px;
  line-height: 40px !important;
}

.row {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  height: 850px;
}

.row-btn {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 10px;
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
}

.col {
  position: relative;
  width: 400px;
}

.input-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 40px;
  border: 1px solid tomato;
  cursor: pointer;
}

.input-holder::before {
  content: "Upload image";
}

img {
  opacity: 0;
}
.input-holder input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

canvas {
  position: absolute;
  top: 40px;
  left: 0;
  display: block;
  width: 100%;
  height: 400px;
  transition: all 1s;

  .move-down & {
    top: 450px;
  }

  .connected .col:nth-child(1) & {
    left: calc(50% + 5px);
  }

  .connected .col:nth-child(2) & {
    left: calc(-50% - 5px);
  }
}

.show {
  opacity: 1;
}

.preview-connect {
  display: flex;
  justify-content: center;
}

@media screen and (max-width: 767px) {
  .col {
    width: 200px;
  }

  canvas {
    height: 200px;

    .move-down & {
      top: 250px;
    }
  }

  .show {
    width: 200px;
    height: 200px;
  }
}
</style>
