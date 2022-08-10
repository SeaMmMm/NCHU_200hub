<template>
  <div>
    <div v-show="!showVideo" @click="showVideoToggle" class="palyVideo">
      <img src="@/assets/icons/Polygon.svg" alt="Polygon" />
    </div>
    <div class="iframe" v-show="showVideo">
      <iframe
        height="400"
        :src="src"
        title="Can Can Need"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        allowDrop
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ["src"],
  data() {
    return {
      showVideo: false,
    };
  },
  methods: {
    showVideoToggle() {
      this.showVideo = true;
      // console.log("clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
iframe {
  @media (max-width: 900px) {
    height: 230px;
  }
}
.palyVideo {
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 50px;
  @media (max-width: 900px) {
    transform: scale(0.6);
  }
  img {
    position: absolute;
    top: -5px;
    left: 4px;
  }
}
</style>
