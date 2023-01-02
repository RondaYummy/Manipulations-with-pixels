<template>
  <div class="cat">
    <span class="ear left-ear"></span>
    <span class="ear right-ear"></span>
    <span class="eyes">
      <span class="eye left-eye"></span>
      <span class="eye right-eye"></span>
    </span>
    <div class="fur">
      <span class="hair hair-1"></span>
      <span class="hair hair-2"></span>
      <span class="hair hair-3"></span>
      <span class="hair hair-4"></span>
      <span class="hair hair-5"></span>
      <span class="hair hair-6"></span>
      <span class="hair hair-7"></span>
    </div>
  </div>
  <div class="container">
    <div class="card">
      <div class="left flex">
        <h1 class="title">Install<br />for perfect experience!</h1>
      </div>
      <div class="right">
        <div class="btn">
          <div class="btn-cntnr" @click="showInstallPrompt">
            <div class="btn-text flex">Install</div>
            <div class="btn-icon">
              <img src="../assets/images/install.png" alt="Install image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {
    const showInstallPrompt = async () => {
      const promptEvent = window.deferredPrompt;
      if (!promptEvent) {
        return;
      }
      promptEvent.prompt();

      const result = await promptEvent.userChoice;
      console.log(result, "result");
      window.deferredPrompt = null;
    };
    const chartsData =
      "Маніпуляції з пікселями на фото без використання бібліотек. Тут зібрані усі приклади моїх робіт. Для навігації між прикладами, використовуйте меню.";

    return {
      showInstallPrompt,
      chartsData,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  width: 100%;
  margin-top: 240px;
}

@media all and (display-mode: standalone) {
  .container {
    display: none;
  }
}

.card {
  background: #131313;
  box-shadow: 0px 0px 20px rgb(0 0 0 / 66%);
  border-radius: 20px;
  padding: 20px 30px;
  width: 100%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  .right {
    padding-left: 20px;
  }

  .title {
    text-transform: uppercase;
    font-size: 20px;
    line-height: 22px;
    font-weight: bold;
    margin: 0;
    color: white;
    text-shadow: 3px 3px rgba(255, 250, 250, 0.24);
  }
}
// HELPERS

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  color: inherit;
  text-decoration: none;
}

.flex {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  box-shadow: 0 7px 17px 0 rgba(0, 0, 0, 0.24);
  border-radius: 600px;
  min-height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7px;
  cursor: pointer;
  position: relative;

  &:active {
    top: 2px;
  }

  .btn-cntnr {
    flex: 1;
    width: 100%;
    background-image: linear-gradient(-180deg, #ffc21c 3%, #ea6e18 100%);
    box-shadow: 0 0 4px 3px #ec6b17, inset 0 0 10px 0 #fdd41e;
    border-radius: 600px;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .btn-text {
      padding: 10px 20px;
      text-transform: uppercase;
      font-weight: bold;
      font-size: 26px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .btn-icon {
      height: 60px;
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 35px;
      opacity: 0.3;
      background: #e5690f;
      color: white;
      text-shadow: 0 2px 4px black;

      img {
        width: 30px;
      }
    }
  }
}

.install-box {
  display: flex;
  justify-content: center;
}

// cat
.cat {
  position: absolute;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  display: block;
  width: 350px;
  height: 300px;
  border-radius: 50%;
  background-color: #000;
  z-index: -1;
}

.eyes {
  display: block;
  position: absolute;
  top: 25%;
  width: 100%;
  height: 50px;
  z-index: 1;
}

.eye {
  position: absolute;
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #000;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  border-bottom: 4px solid #fff;
  border-top: 0;
}

.eye::after {
  content: "";
  display: block;
  position: absolute;
  top: 8px;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: #fff;
}

.eye::before {
  content: "";
  display: block;
  position: absolute;
  top: 20px;
  border-radius: 50%;
  width: 3px;
  height: 3px;
  background-color: #fff;
}

.left-eye {
  left: 80px;
  transform: rotate(20deg);
}

.left-eye::after {
  left: 18px;
  transform: rotate(20deg);
}

.left-eye::before {
  top: 13px;
  left: 32px;
}

.right-eye {
  right: 80px;
  transform: rotate(-20deg);
}

.right-eye::after {
  right: 15px;
}

.right-eye::before {
  top: 20px;
  right: 10px;
}

.ear {
  position: absolute;
  top: -50px;
  width: 150px;
  height: 300px;
  background-color: #000;
}

.left-ear {
  left: 0;
  transform: rotate(-20deg);
  border-radius: 70% 30% 0% 0% / 100% 100% 0% 0%;
}

.right-ear {
  right: 0;
  transform: rotate(20deg);
  border-radius: 30% 70% 0% 0% / 100% 100% 0% 0%;
}

.fur {
  background-color: #000;
}

.hair {
  position: absolute;
  background-color: inherit;
}

.hair-1 {
  left: 0;
  bottom: 50%;
  width: 20px;
  height: 40px;
  transform: rotate(-25deg);
}

.hair-2 {
  left: 10px;
  bottom: 55%;
  width: 10px;
  height: 40px;
  transform: rotate(-50deg);
}
.hair-2::before {
  display: block;
  position: absolute;
  left: 0px;
  top: -5px;
  content: "";
  background-color: #f5e134;
  width: 5px;
  height: 13px;
  transform: rotate(40deg);
}

.hair-3 {
  right: 15px;
  bottom: 60%;
  width: 70px;
  height: 70px;
  transform: rotate(-50deg);
  border-radius: 10px;
  z-index: 0;
}

.hair-4 {
  left: 0;
  bottom: 50%;
  width: 20px;
  height: 40px;
  transform: rotate(-25deg);
}

.hair-5 {
  right: 10px;
  bottom: 55%;
  width: 10px;
  height: 40px;
  transform: rotate(-50deg);
}

.hair-6 {
  right: 15px;
  bottom: 60%;
  width: 70px;
  height: 70px;
  transform: rotate(-50deg);
  border-radius: 10px;
  z-index: 0;
}

.hair-7 {
  top: 0;
  left: 50%;
  width: 25px;
  height: 25px;
}

@media screen and (max-width: 767px) {
  .container {
    max-width: 90%;
    margin-top: 100px;
  }

  .card {
    min-height: 150px;
    width: auto;
    margin-top: 150px;
  }
}
</style>
