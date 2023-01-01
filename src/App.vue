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

    return {};
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
</style>
