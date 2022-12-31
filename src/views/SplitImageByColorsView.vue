<template>
  <div class="split">
    <split-image-by-colors />
  </div>
</template>

<script>
import SplitImageByColors from "../components/SplitImageByColors.vue";

export default {
  name: "HomeView",
  components: {
    SplitImageByColors,
  },
};
</script>
