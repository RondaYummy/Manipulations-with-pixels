<template>
  <h1>
    <template v-for="(item, index) of chartsArray" :key="index">
      <span>{{ item }}</span>
    </template>
  </h1>
</template>

<script>
import { onMounted } from "vue";

export default {
  props: {
    stringMessage: String,
  },
  setup(props) {
    const chartsArray = props.stringMessage.split(" ");

    onMounted(() => {
      const allSpans = document.querySelectorAll("span");
      allSpans.forEach((item, i) => {
        if (i > 9) {
          const number = `${i}`.split("")[0] + "." + `${i}`.split("")[1];
          item.style["animation-delay"] = `${number}s`;
        } else {
          item.style["animation-delay"] = `0.${i}s`;
        }
      });
    });

    return {
      chartsArray,
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  max-width: 40ch;
  text-align: center;
  transform: scale(0.94);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
}
@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
  margin-right: 5px;
  margin-left: 5px;
}

span {
  animation: fade-in 0.8s 1000s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}
</style>
