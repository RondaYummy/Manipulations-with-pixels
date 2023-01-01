<template>
  <div class="container">
    <div class="card">
      <div class="left flex">
        <h1 class="title">Install<br />for perfect experience!</h1>
      </div>
      <div class="right">
        <div class="btn">
          <div class="btn-cntnr" @click="showInstallPrompt">
            <div class="btn-text flex">Install App</div>
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

    return {
      showInstallPrompt,
    };
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 700px;
  width: 100%;
  margin-top: 50px;
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

a {
  color: inherit;
  text-decoration: none;
}

.flex {
  flex: 1;
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

@media screen and (max-width: 767px) {
  .container {
    max-width: 90%;
  }

  .card {
    min-height: 150px;
    width: auto;
  }
}
</style>
