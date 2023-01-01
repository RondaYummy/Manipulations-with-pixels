<template>
  <div class="home">
    <preview-main :string-message="chartsData" />
    <install-button />
  </div>
</template>

<script>
import { onBeforeUnmount, onMounted } from "vue";
import PreviewMain from "@/components/PreviewMain.vue";
import InstallButton from "../components/InstallButton.vue";

export default {
  name: "HomeView",
  components: {
    PreviewMain,
    InstallButton,
  },
  setup() {
    const chartsData =
      "Маніпуляції з пікселями на фото без використання бібліотек. Тут зібрані усі приклади моїх робіт. Для навігації між прикладами, використовуйте меню.";
    onBeforeUnmount(() => {
      document.querySelector("body").classList.toggle("body");
    });
    onMounted(() => {
      document.querySelector("body").classList.toggle("body");
    });

    return {
      chartsData,
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

@media screen and (max-width: 767px) {
  .home::v-deep h1 {
    max-width: 90%;
  }
}
</style>
