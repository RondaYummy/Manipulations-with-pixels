<template>
  <div class="home">
    <install-button />
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted } from "vue";
import InstallButton from "../components/InstallButton.vue";

export default {
  name: "HomeView",
  components: {
    InstallButton,
  },
  setup() {
    onBeforeUnmount(() => {
      document.querySelector("body").classList.toggle("body");
    });
    onMounted(() => {
      document.querySelector("body").classList.toggle("body");
    });

    return {};
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

@media screen and (max-width: 767px) {
  .home::v-deep h1 {
    max-width: 90%;
  }
}
</style>
