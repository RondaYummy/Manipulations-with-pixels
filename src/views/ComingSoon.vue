<template>
  <main class="body">
    <h2>Coming soon<br /><br /><router-link to="/">Home</router-link></h2>
    <div class="pixel-1"></div>
    <div class="pixel-2"></div>
    <img src="../assets/images/comming-soon.jpg" alt="" />
  </main>
</template>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Press+Start+2P);

.body {
  background-color: #5a4855;
  background-position: bottom center;
  background-repeat: no-repeat;
  position: relative;
  line-height: 1;
}

h2 {
  background: #ccc;
  color: #5a4855;
  font-size: 22px;
  font-family: "Press Start 2P", cursive;
  padding: 5%;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  z-index: 5;
}

@media only screen and (max-width: 480px) {
  html {
    background-size: 100%;
  }

  .pixel-1 {
    left: 0 !important;
  }
  .pixel-1:after {
    left: 30px !important;
  }
  .pixel-1:before {
    left: 100px !important;
  }
  .pixel-2 {
    right: 0 !important;
  }
  .pixel-2:after {
    right: 30px !important;
  }
  .pixel-2:before {
    right: 100px !important;
  }
}

/** CSS Animations **/

.pixel-1 {
  width: 19px;
  height: 19px;
  background: #272526;
  position: absolute;
  z-index: 1;
  bottom: 101%;
  left: 34%;
  /* Chrome, Safari, Opera */
  -webkit-animation-name: Moving;
  -webkit-animation-duration: 2s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 1s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-play-state: running;
  -webkit-animation-fill-mode: forwards;
  /* Standard syntax */
  animation-name: Moving;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 1s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}
.pixel-1:after {
  content: "";
  width: 19px;
  height: 19px;
  background: #272526;
  position: absolute;
  z-index: 2;
  bottom: 101%;
  left: 105px;
  /* Chrome, Safari, Opera */
  -webkit-animation-name: Moving;
  -webkit-animation-duration: 2s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 3s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-play-state: running;
  -webkit-animation-fill-mode: forwards;
  /* Standard syntax */
  animation-name: Moving;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 3s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}
.pixel-1:before {
  content: "";
  width: 19px;
  height: 19px;
  background: #272526;
  position: absolute;
  z-index: 2;
  bottom: 101%;
  left: 40px;
  /* Chrome, Safari, Opera */
  -webkit-animation-name: Moving;
  -webkit-animation-duration: 2s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 3.5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-play-state: running;
  -webkit-animation-fill-mode: forwards;
  /* Standard syntax */
  animation-name: Moving;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 3.5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

.pixel-2 {
  width: 19px;
  height: 19px;
  background: #272526;
  position: absolute;
  z-index: 1;
  bottom: 101%;
  right: 33%;
  /* Chrome, Safari, Opera */
  -webkit-animation-name: Moving;
  -webkit-animation-duration: 2s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 2s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-play-state: running;
  -webkit-animation-fill-mode: forwards;
  /* Standard syntax */
  animation-name: Moving;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}
.pixel-2:after {
  content: "";
  width: 19px;
  height: 19px;
  background: #272526;
  position: absolute;
  z-index: 2;
  bottom: 101%;
  right: 120px;
  /* Chrome, Safari, Opera */
  -webkit-animation-name: Moving;
  -webkit-animation-duration: 2s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 1.5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-play-state: running;
  -webkit-animation-fill-mode: forwards;
  /* Standard syntax */
  animation-name: Moving;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}
.pixel-2:before {
  content: "";
  width: 19px;
  height: 19px;
  background: #272526;
  position: absolute;
  z-index: 2;
  bottom: 101%;
  right: 50px;
  /* Chrome, Safari, Opera */
  -webkit-animation-name: Moving;
  -webkit-animation-duration: 2s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-delay: 2.5s;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-direction: normal;
  -webkit-animation-play-state: running;
  -webkit-animation-fill-mode: forwards;
  /* Standard syntax */
  animation-name: Moving;
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 2.5s;
  animation-iteration-count: infinite;
  animation-direction: normal;
  animation-play-state: running;
  animation-fill-mode: forwards;
}

/* Chrome, Safari, Opera */
@-webkit-keyframes Moving {
  0% {
    bottom: 100%;
  }
  25% {
    bottom: 75%;
  }
  50% {
    bottom: 50%;
  }
  75% {
    bottom: 25%;
  }
  100% {
    bottom: 0;
  }
}

/* Standard syntax */
@keyframes Moving {
  0% {
    bottom: 100%;
  }
  25% {
    bottom: 75%;
  }
  50% {
    bottom: 50%;
  }
  75% {
    bottom: 25%;
  }
  100% {
    bottom: 0;
  }
}
</style>
