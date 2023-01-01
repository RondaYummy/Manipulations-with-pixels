<template>
  <navigation-menu />
  <router-view />
</template>

<script>
import NavigationMenu from "./components/NavigationMenu.vue";

export default {
  components: {
    NavigationMenu,
  },
  setup() {
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      const handler = (e) => {
        if (e.scale !== 1) {
          e.preventDefault();
        }
      };

      window.addEventListener("touchmove", handler, { passive: false });
      window.document.addEventListener("touchmove", handler, {
        passive: false,
      });
    }

    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      window.deferredPrompt = e;
      window.deferredPrompt.prompt();
    });
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-height: 100%;
  height: 100vh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

body {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none !important;
  -webkit-user-callout: none !important;
  -webkit-user-select: none !important;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: none;
  margin: 0;
}

* {
  touch-action: pan-y pan-x;
  -webkit-touch-callout: none !important;
  -webkit-user-callout: none !important;
  -webkit-user-select: none !important;
  -webkit-overflow-scrolling: touch;
  -webkit-text-size-adjust: none !important;
}

/* Cool infinite background scrolling animation.
 * Twitter: @kootoopas
 */

/* Exo thin font from Google. */
@import url(https://fonts.googleapis.com/css?family=Exo:100);

/* Background data (Original source: https://subtlepatterns.com/grid-me/) */
$bg-url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAABnSURBVHja7M5RDYAwDEXRDgmvEocnlrQS2SwUFST9uEfBGWs9c97nbGtDcquqiKhOImLs/UpuzVzWEi1atGjRokWLFi1atGjRokWLFi1atGjRokWLFi1af7Ukz8xWp8z8AAAA//8DAJ4LoEAAlL1nAAAAAElFTkSuQmCC";
$bg-width: 50px;
$bg-height: 50px;

/* Animations */
@-webkit-keyframes bg-scrolling-reverse {
  100% {
    background-position: $bg-width $bg-height;
  }
}
@-moz-keyframes bg-scrolling-reverse {
  100% {
    background-position: $bg-width $bg-height;
  }
}
@-o-keyframes bg-scrolling-reverse {
  100% {
    background-position: $bg-width $bg-height;
  }
}
@keyframes bg-scrolling-reverse {
  100% {
    background-position: $bg-width $bg-height;
  }
}

@-webkit-keyframes bg-scrolling {
  0% {
    background-position: $bg-width $bg-height;
  }
}
@-moz-keyframes bg-scrolling {
  0% {
    background-position: $bg-width $bg-height;
  }
}
@-o-keyframes bg-scrolling {
  0% {
    background-position: $bg-width $bg-height;
  }
}
@keyframes bg-scrolling {
  0% {
    background-position: $bg-width $bg-height;
  }
}

/* Main styles */
.body {
  color: #999;
  font: 400 16px/1.5 exo, ubuntu, "segoe ui", helvetica, arial, sans-serif;
  text-align: center;
  background: url($bg-url) repeat 0 0;
  -webkit-animation: bg-scrolling-reverse 0.92s infinite; /* Safari 4+ */
  -moz-animation: bg-scrolling-reverse 0.92s infinite; /* Fx 5+ */
  -o-animation: bg-scrolling-reverse 0.92s infinite; /* Opera 12+ */
  animation: bg-scrolling-reverse 0.92s infinite; /* IE 10+ */
  -webkit-animation-timing-function: linear;
  -moz-animation-timing-function: linear;
  -o-animation-timing-function: linear;
  animation-timing-function: linear;
}
</style>
