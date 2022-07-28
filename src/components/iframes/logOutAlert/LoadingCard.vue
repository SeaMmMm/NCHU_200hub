<template>
  <div id="LoginWrapper" ref="loading">
    <div id="loginContentWrapper">
      <div id="LoginTextWrapper">
        <span id="Loading">Loading...</span>
      </div>
      <iframe src="https://embed.lottiefiles.com/animation/104673"></iframe>
      <img
        id="Buttomimage"
        src="@/assets/svg/bottomImage.svg"
        alt="bottomImage"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showLoading() {
      this.$refs.loading.style.display = "block";
    },
    shoutDown() {
      this.$refs.loading.style.display = "none";
    },
  },
};
</script>

<style scoped>
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}
@keyframes toShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@-webkit-keyframes toShow {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
iframe {
  border: none;
  width: 300px;
  height: 300px;
}
#LoginWrapper {
  z-index: 1000;
  position: absolute;
  width: 300px;
  height: 400px;

  background: #283149;
  border-radius: 40px;
  overflow: hidden;
  animation: toShow 0.5s;
  animation-fill-mode: both !important;
  -webkit-animation-fill-mode: both !important;
}
#loginContentWrapper {
  position: relative;
  display: grid;
  width: 100%;
  grid-template-rows: auto auto;
  align-items: end;
  justify-items: center;
}
#LoginTextWrapper {
  padding-top: 40px;
}
#Loading {
  font-family: "SF Pro Display";
  font-style: normal;
  font-weight: 900;
  font-size: 45px;
  line-height: 66px;
  display: flex;
  align-items: center;

  color: #f3eddd;
}
#Buttomimage {
  position: absolute;
  width: 150px;
  height: 150px;
  bottom: -30px;
  right: -50px;
}
</style>
