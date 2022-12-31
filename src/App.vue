<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'split-by-colors' }">Split by colors</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
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
