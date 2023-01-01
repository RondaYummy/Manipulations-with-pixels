<template>
  <div class="preview-colors">
    <preview-main
      :string-message="'Виділити з картинки основні кольора RGBA, та показати це наглядно. RGBA - це 3 основні кольора: Red, Green, Blue. A - альфа-канал.'"
    />
  </div>
  <main class="main">
    <div class="container">
      <div class="row">
        <div class="col">
          <img ref="img" src="" crossorigin="anonymous" />
        </div>
        <div class="col" data-color="RED"></div>
        <div class="col" data-color="GREEN"></div>
        <div class="col" data-color="BLUE"></div>
      </div>
      <div class="column">
        <div class="row-btn">
          <div class="input-holder">
            <input
              @change="uploadFile"
              ref="fileInput"
              type="file"
              accept="image/*"
            />
          </div>
          <button
            class="button-style"
            id="btn"
            type="button"
            @click="toggleImages"
          >
            Split images
          </button>
        </div>
        <button
          class="button-style"
          id="btn"
          type="button"
          v-if="clickedBtn"
          @click="showAnimation"
        >
          Show animation
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, watch, onBeforeUnmount } from "vue";
import { toDataURL } from "../utils/additionall";
import preview from "../assets/images/preview.jpeg";
import PreviewMain from "@/components/PreviewMain.vue";

export default {
  components: {
    PreviewMain,
  },
  setup() {
    const red = ref(false);
    const green = ref(false);
    const blue = ref(false);
    const clickedBtn = ref(false);

    const fileInput = ref();
    const src = ref();
    toDataURL(preview, (data) => {
      src.value = data;
    });

    let w, h;
    const images = {
      r: null,
      g: null,
      b: null,
    };
    const row = ref();
    const columns = ref();
    const img = ref();

    const image = () => {
      row.value = document.querySelector(".row");
      columns.value = document.querySelectorAll("[data-color]");

      img.value.onload = () => {
        const cnv = document.createElement("canvas");
        const ctx = cnv.getContext("2d");
        w = cnv.width = img.value.width;
        h = cnv.height = img.value.height;

        ctx.drawImage(img.value, 0, 0, w, h);
        const { data } = ctx.getImageData(0, 0, w, h);

        images.r = new Uint8ClampedArray(data.length);
        images.g = new Uint8ClampedArray(data.length);
        images.b = new Uint8ClampedArray(data.length);

        for (let i = 0; i < data.length; i += 4) {
          if (data[i] < 255) {
            let r = data[i];
            let g = data[i + 1];
            let b = data[i + 2];
            let a = data[i + 3];

            images.r[i] = r;
            images.r[i + 1] = 0;
            images.r[i + 2] = 0;
            images.r[i + 3] = a;

            images.g[i] = 0;
            images.g[i + 1] = g;
            images.g[i + 2] = 0;
            images.g[i + 3] = a;

            images.b[i] = 0;
            images.b[i + 1] = 0;
            images.b[i + 2] = b;
            images.b[i + 3] = a;
          }
        }

        Object.keys(images).forEach((key) => {
          images[key] = new ImageData(images[key], w, h);
        });
        window.dispatchEvent(new Event("imagesReady"));
        cnv.remove();
      };
      img.value.src = src.value;
    };

    watch(src, () => {
      image();
    });

    window.addEventListener("imagesReady", () => {
      Object.keys(images).forEach((key, i) => {
        let cnv = document.createElement("canvas");
        let ctx = cnv.getContext("2d");
        cnv.width = w;
        cnv.height = h;
        columns.value[i].replaceChildren();
        columns.value[i].appendChild(cnv);
        ctx.putImageData(images[key], 0, 0);
      });
      row.value.classList.toggle("is-gathered");
    });

    const toggleImages = () => {
      row.value.classList.toggle("is-gathered");
      row.value.classList.toggle("is-active-red");
      row.value.classList.toggle("is-active-green");
      row.value.classList.toggle("is-active-blue");
      clickedBtn.value = !clickedBtn.value;
    };

    const uploadFile = () => {
      const file = fileInput.value?.files[0];
      const reader = new FileReader();
      reader.onloadend = function () {
        images.r = null;
        images.g = null;
        images.b = null;
        row.value.classList.toggle("is-gathered");
        src.value = reader.result;
        image();
      };
      reader.readAsDataURL(file);
    };

    const showAnimation = () => {
      row.value.classList.toggle("is-gathered");
      row.value.classList.toggle("is-active-red");
      row.value.classList.toggle("is-active-green");

      setTimeout(() => {
        row.value.classList.toggle("is-gathered");
        row.value.classList.toggle("is-active-red");
        row.value.classList.toggle("is-active-green");
      }, 3000);

      setTimeout(() => {
        row.value.classList.toggle("is-gathered");
        row.value.classList.toggle("is-active-red");
        row.value.classList.toggle("is-active-blue");
      }, 3000);

      setTimeout(() => {
        row.value.classList.toggle("is-gathered");
        row.value.classList.toggle("is-active-red");
        row.value.classList.toggle("is-active-blue");
      }, 6000);

      setTimeout(() => {
        row.value.classList.toggle("is-gathered-green");
        row.value.classList.toggle("is-active-green");
      }, 9000);

      setTimeout(() => {
        row.value.classList.toggle("is-gathered-top");
        img.value.classList.toggle("display-none");
      }, 12000);

      setTimeout(() => {
        row.value.classList.toggle("is-gathered-left");
        row.value.classList.toggle("go-left-top");
        row.value.classList.toggle("go-to-middle");
        row.value.classList.toggle("go-right-bottom");
      }, 15000);
    };

    const body = document.querySelector("body");
    const bg = body.style.background;
    body.style.background = "none";
    onBeforeUnmount(() => {
      body.style.background = bg;
    });

    return {
      toggleImages,
      uploadFile,
      showAnimation,
      clickedBtn,
      row,
      fileInput,
      img,
      red,
      green,
      blue,
    };
  },
};
</script>

<style scoped lang="scss">
.column {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0px;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

button {
  background-color: transparent;
  border: 0;
}

.container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1600px;
  padding: 125px 20px 20px 20px;
  margin: 0 auto;

  @media screen and (max-width: 420px) {
    height: 250px;
  }
}

.row {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  height: 800px;
  flex: 1 1 800px;

  @media screen and (max-width: 767px) {
    width: 420px;
    height: 420px;
    flex: 1 1 420px;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    height: auto;
    flex: 1 1 auto;
  }
}

.col {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 50%;
  overflow: hidden;

  &::before {
    content: attr(datwa-color);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    padding: 3px;
    font-size: 10px;
    background-color: white;
    opacity: 0;
    transition: opacity 0.5s 0.3s;
  }

  &:not([data-color]) {
    &:before {
      content: "Original";
    }
  }

  .is-active &,
  .is-gathered & {
    &::before {
      opacity: 1;
    }
  }
}

[data-color] {
  position: absolute;
  mix-blend-mode: difference;
  transition: all 1.5s;
  transition-property: top, left;
  top: 0;
  left: 0;
  z-index: -1;

  .is-gathered & {
    top: 0%;
    left: 50%;
  }

  .is-gathered-green & {
    top: 50%;
    left: 50%;
  }

  .row.is-gathered-top & {
    top: 0%;
  }

  .is-gathered-left {
    left: 0%;
  }
}

[data-color="RED"] {
  color: red;

  .is-active-red & {
    top: 0;
    left: 50%;
  }

  .row.go-left-top & {
    left: 0%;
    top: 0%;
  }
}

[data-color="GREEN"] {
  color: green;

  .is-active-green & {
    top: 50%;
    left: 0;
  }

  .is-gathered-left {
    left: 0%;
  }

  .row.go-to-middle & {
    left: 25%;
    top: 25%;
  }
}

[data-color="BLUE"] {
  color: blue;

  .is-active-blue & {
    top: 50%;
    left: 50%;
  }

  .row.go-right-bottom & {
    left: 50%;
    top: 50%;
  }
}

canvas {
  display: block;
  max-width: 100%;
  height: auto;
}

img {
  max-width: 100%;
  max-height: 100%;
  height: 100%;
  width: 500px;

  @media screen and (max-width: 767px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 420px) {
    width: 100%;
    height: 100%;
  }
}

.button-style {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 40px;
  border: 1px solid tomato;
  cursor: pointer;
  margin: 10px 0px;
}

input[type="file"] {
  display: none;
}

.checkbox-box {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;

  .checkbox {
    display: flex;
    align-items: center;

    input {
      margin-right: 5px;
    }
  }
}

.display-none {
  display: none;
  transition: display 0.3s;
}

.row-btn {
  display: flex;
  justify-content: space-between;
  width: 320px;
}

.input-holder {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 150px;
  height: 40px;
  border: 1px solid tomato;
  cursor: pointer;
  margin: 10px 0px;
}

.input-holder::before {
  content: "Upload image";
}

.input-holder input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}

.preview-colors {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 20px 0px;
}
</style>
