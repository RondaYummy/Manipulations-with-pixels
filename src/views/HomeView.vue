<template>
  <div class="home">
    <preview-main />
  </div>
</template>

<script>
import PreviewMain from "@/components/PreviewMain.vue";

export default {
  name: "HomeView",
  components: {
    PreviewMain,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
