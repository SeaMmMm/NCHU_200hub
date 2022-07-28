<template>
  <div id="LoginWrapper" ref="signUp">
    <div id="loginContentWrapper">
      <div id="LoginTextWrapper">
        <span id="Loading">SUCCESS</span>
        <span id="Tips">即将跳转界面...</span>
      </div>
      <iframe src="https://embed.lottiefiles.com/animation/76649"></iframe>
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
      this.$refs.signUp.style.display = "block";
    },
    shoutDown() {
      this.$refs.signUp.style.display = "none";
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
  width: 250px;
  height: 250px;
}
#LoginWrapper {
  z-index: 1000;
  position: absolute;
  width: 300px;
  height: 400px;

  background: linear-gradient(107.87deg, #1cadff 0.94%, #dbff00 98%);
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
  display: grid;
  grid-template-rows: repeat(2, auto);
  text-align: center;
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
#Tips {
  color: black;
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 56px;
}
#Buttomimage {
  position: absolute;
  width: 150px;
  height: 150px;
  bottom: -30px;
  right: -50px;
}
</style>
