<template>
  <div class="home">
    <preview-main :string-message="chartsData" />
    <install-button />
  </div>
</template>

<script>
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
</style>
