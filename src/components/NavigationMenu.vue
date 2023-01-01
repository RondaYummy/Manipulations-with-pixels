<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
    rel="stylesheet"
  />
  <link href="//solrainha.github.io/honeybee/honeybee.css" rel="stylesheet" />
  <link
    href="https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap"
    rel="stylesheet"
  />

  <div
    class="navigation-menu"
    :class="showMenu ? 'navigation-menu-show' : 'navigation-menu-hide'"
  >
    <div class="burger-container" :class="!showMenu ? '' : 'open'">
      <div id="burger" @click="animateMenu">
        <span> &nbsp;</span>
        <span> &nbsp;</span>
        <span> &nbsp;</span>
        <span> &nbsp;</span>
      </div>
    </div>
    <div class="container-title" v-if="showTitle">
      <span class="anim-text-flow">
        <span>
          <span>Manipulations</span>
          <span> with</span>
          <span> image</span>
          <span> pixels </span>
        </span>
      </span>
    </div>

    <div
      class="board-list"
      :class="showSubmenu ? 'board-list-show' : 'board-list-hide'"
    >
      <div class="board-list-deco"></div>
      <router-link
        :to="{ name: 'split-by-colors' }"
        class="board-contain"
        id="contain-1"
        @click="animateMenu"
      >
        <img src="../assets/images/Capture.png" />
        <h1>Split by<br />colors</h1>
      </router-link>

      <router-link
        :to="{ name: 'connect-two-images' }"
        class="board-contain"
        id="contain-2"
        @click="animateMenu"
      >
        <img src="../assets/images/plot-fill-v3.png" />
        <h1>Connect <br />images</h1>
      </router-link>
      <router-link
        :to="{ name: 'coming-soon' }"
        class="board-contain"
        id="contain-3"
        @click="animateMenu"
      >
        <img src="../assets/images/track-fill-v3.png" />
        <h1>coming<br />soon</h1>
      </router-link>

      <router-link
        :to="{ name: 'coming-soon' }"
        class="board-contain"
        id="contain-4"
        @click="animateMenu"
      >
        <img src="../assets/images/misc-fill-v5.png" />
        <h1>coming<br />soon</h1>
      </router-link>

      <router-link
        :to="{ name: 'coming-soon' }"
        class="board-contain"
        id="contain-5"
        @click="animateMenu"
      >
        <img src="../assets/images/tech-fill-v3.png" />
        <h1>coming<br />soon</h1>
      </router-link>

      <router-link
        to="/"
        class="board-contain"
        id="contain-6"
        @click="animateMenu"
      >
        <img src="../assets/images/project-fill-v3.png" />
        <h1>Home</h1>
      </router-link>
      <div class="board-contain" id="contain-bugfix"></div>
    </div>
    <div class="bottom-anime-grill">
      <img src="../assets/images/korwa.png" />
    </div>
  </div>

  <div class="feedback__button"></div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const showMenu = ref(false);
    const showSubmenu = ref(false);
    const showTitle = ref(true);

    const animateMenu = () => {
      if (!showMenu.value) {
        showMenu.value = !showMenu.value;
        showSubmenu.value = !showSubmenu.value;
        showTitle.value = !showTitle.value;
      } else {
        showSubmenu.value = !showSubmenu.value;
        setTimeout(() => {
          showMenu.value = !showMenu.value;
          showTitle.value = !showTitle.value;
        }, 600);
      }
    };

    return {
      showMenu,
      showSubmenu,
      showTitle,
      animateMenu,
    };
  },
};
</script>

<style lang="scss" scoped>
.navigation-menu {
  background: #131313;
  padding-bottom: 50px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.66);
  max-height: 100%;
  overflow: hidden;
  transition: height 0.5s ease-in;
}

.navigation-menu-show {
  min-height: 100vh;
  height: 100vh;
}

.navigation-menu-hide {
  height: 0px;
}

.board-list {
  max-width: 750px;
  position: relative;
  z-index: 1;
  margin: auto;
  border-radius: 3px;
  overflow: hidden;
  height: 540px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  transition: width 0.5s ease-in;
}

.board-list-show {
  width: 100%;
}

.board-list-hide {
  width: 0%;
}

.board-contain {
  overflow: hidden;
}
.board-contain img {
  width: 115%;
  mix-blend-mode: overlay;
  filter: grayscale(1) brightness(0.25) contrast(0.5) blur(0px);
  transform: rotate(-14deg) scale(1.25);
  transition: 0.25s ease;
}
.board-contain:hover img {
  filter: grayscale(1) brightness(0.5) contrast(0.75) blur(0px);
  transform: rotate(-7deg) scale(1);
  transition: 0.25s ease;
}
.board-contain h1 {
  margin: 0px;
  font: 900 30px/80% montserrat;
  text-transform: uppercase;
  color: #fafafa;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.25);
}

#contain-1 {
  position: absolute;
  left: 0px;
  top: 30px;
  width: 460px;
  height: 250px;
  clip-path: polygon(0 0, 100% 0, 79.5% 100%, 0% 100%);
}
#contain-1 img {
  margin-top: -40px;
  margin-left: -10px;
}
#contain-1 h1 {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

#contain-2 {
  position: absolute;
  right: -2px;
  top: 30px;
  width: calc(50% + 2px);
  height: 250px;
  clip-path: polygon(25% 0, 100% 0, 100% 100%, 0% 100%);
}
#contain-2 img {
  margin-top: -25px;
  margin-left: 50px;
}
#contain-2 h1 {
  position: absolute;
  bottom: 10px;
  right: 10px;
  text-align: right;
}

#contain-3 {
  position: absolute;
  bottom: 0px;
  left: 0px;
  height: 250px;
  width: 50%;
  clip-path: polygon(0 0, 100% 0, 50% 100%, 0% 100%);
}
#contain-3 img {
  margin-top: -50px;
  margin-left: -15px;
}
#contain-3 h1 {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 24px;
}

#contain-4 {
  height: 250px;
  width: 350px;
  position: absolute;
  clip-path: polygon(50% 6%, 0% 100%, 100% 100%);
  bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#contain-4 img {
  width: 400px;
  margin-top: 50px;
  margin-left: 15px;
}
#contain-4 h1 {
  position: absolute;
  bottom: 10px;
  font-size: 24px;
}

#contain-5 {
  position: absolute;
  height: 250px;
  width: calc(50% + 2px);
  right: -2px;
  bottom: 0px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 50% 100%);
}
#contain-5 img {
  margin-top: -20px;
  margin-left: 15px;
}
#contain-5 h1 {
  position: absolute;
  bottom: 10px;
  right: 10px;
  text-align: right;
  font-size: 24px;
}

#contain-6 {
  position: absolute;
  z-index: 1;
  height: 300px;
  width: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: circle(50% at 50% 50%);
  background: #232526;
  background-image: linear-gradient(to right, #232526, #414345);
}
#contain-6 img {
  margin-top: 0px;
  margin-left: 0px;
}
#contain-6 h1 {
  position: absolute;
  text-align: right;
  font-size: 45px;
}
/* LOOK, BORDER-RADIUS IS BEING WEIRD */
#contain-bugfix {
  position: absolute;
  z-index: 0;
  height: 320px;
  width: 320px;
  background: #0a0a0a;
  clip-path: circle(50% at 50% 50%);
}

.bottom-anime-grill {
  z-index: -1;
  filter: brightness(0.9);
  position: absolute;
  top: 760px;
  width: 100%;
  height: 770px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.bottom-anime-grill img {
  position: absolute;
  bottom: -40px;
  left: 10px;
}

.bottom-deco {
  position: absolute;
  right: -250px;
  top: 600px;
  height: 100%;
  overflow: hidden;
  filter: invert(1);
  z-index: -1;
  opacity: 0.075;
}

.feedback__button {
  right: 30px;
  bottom: 30px;
  transition: 0.3s ease all;
  display: block;
  text-align: center;
  position: fixed;
  cursor: pointer;
  width: 46px;
  height: 46px;
  background: #b9bfcc;
  border-radius: 3px;

  &:after {
    content: "?";
    font-size: 18px;
    font-weight: 600;
    color: white;
    line-height: 46px;
  }

  &:hover {
    background: #525466;
  }

  &.in-view {
    bottom: 82px;
  }
}

.router-link-active {
  background-image: linear-gradient(315deg, #ef5734 0%, #ffcc2f 74%) !important;
}

/*
 * Animation module with all animation code
 */
.anim-text-flow,
.anim-text-flow-hover:hover {
  /*
   * Animation variables
   */
  $animationSteps: 20;
  $animationDuration: 50;
  $animationElement: span;
  $animationElementsCount: 100;
  $delayBetweenLetters: 0.3;

  /*
   * Elements settings
   */
  #{$animationElement} {
    animation-name: anim-text-flow-keys;
    animation-duration: #{$animationDuration}s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-fill-mode: forwards;
  }

  /*
   * Keyframe loop
   */
  @keyframes anim-text-flow-keys {
    @for $i from 0 through $animationSteps {
      #{percentage($i * (1 / $animationSteps))} {
        color: hsla(random(365), 60, 60, 1);
      }
    }
  }

  /*
   * Element animation delay loop
   */
  $totalDelayTime: $animationElementsCount * $delayBetweenLetters;

  @for $i from 1 through $animationElementsCount {
    #{$animationElement}:nth-of-type(#{$i}) {
      animation-delay: #{($i * $delayBetweenLetters) - $totalDelayTime}s;
    }
  }
}

.container-title {
  position: absolute;
  top: 25px;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);

  span {
    text-transform: uppercase;
    font-weight: 900;
  }
}

.burger-container {
  margin-top: 10px;
  margin-left: 10px;
  width: 40px;
  position: absolute;
  top: 3px;
  z-index: 1;
}

#burger {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-right: 10px;
}

#burger span {
  background: #ff216a;
  display: block;
  width: 30px;
  height: 3px;
  margin-bottom: 4px;
  margin-left: 20px;
  position: relative;
  top: 0;
  transition: all ease-in-out 0.4s;
}

.burger-container.open span:nth-child(2),
.burger-container.open span:nth-child(3) {
  width: 0;
  opacity: 0;
}

.burger-container.open span:nth-child(1) {
  transform: rotate(-45deg);
  top: 13px !important;
}

.burger-container.open span:nth-child(4) {
  transform: rotate(45deg);
  top: -7px !important;
}
</style>
