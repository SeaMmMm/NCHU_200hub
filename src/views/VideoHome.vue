<template>
  <div
    class="videoTopWrapper"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div style="overflow-x: hidden">
      <div class="backgroundWrap">
        <img
          class="waves"
          src="@/assets/waves/certificate-wave4.svg"
          style="top: 100px"
        />
        <img
          class="waves"
          src="@/assets/waves/certificate-wave2.svg"
          style="top: 100px; filter: blur(60px)"
        />
        <img
          class="waves"
          src="@/assets/waves/courses-wave4.svg"
          style="top: 550px"
        />
      </div>
      <VideoTopMenu :isOnComputer="isOnComputer" />
      <VideoCarousels style="margin-top: 100px" :isOnComputer="isOnComputer" />
      <div class="backgroundWrap">
        <img
          class="waves"
          src="@/assets/waves/hero-wave2.svg"
          style="top: 100px; filter: blur(60px)"
        />
        <img
          class="waves"
          src="@/assets/waves/certificate-lines.svg"
          style="top: 250px; filter: blur(60px)"
        />
        <img
          class="waves lines"
          src="@/assets/waves/testimonial-wave6.svg"
          style="top: 300px"
        />
        <img
          class="waves"
          src="@/assets/waves/cube1.svg"
          style="top: 100px; left: 400px"
        />
        <img
          class="waves"
          src="@/assets/waves/cube2.svg"
          style="top: 90px; left: 800px"
        />
        <img
          class="waves"
          src="@/assets/waves/cube3.svg"
          style="top: 40px; left: 920px"
        />
      </div>
      <VideoTV :isOnComputer="isOnComputer" />
      <div class="backgroundWrap">
        <img
          class="waves"
          src="@/assets/waves/courses-wave3.svg"
          style="top: 100px"
        />
        <img
          class="waves"
          src="@/assets/waves/footer-wave1.svg"
          style="top: 220px; filter: blur(30px)"
        />
        <img
          class="waves"
          src="@/assets/waves/footer-wave1.svg"
          style="top: 400px"
        />
      </div>
      <AllSortsVideo :isOnComputer="isOnComputer" />
      <div class="backgroundWrap">
        <img class="waves" src="@/assets/waves/cube1.svg" style="top: 190px" />
        <img
          class="waves"
          src="@/assets/waves/footer-wave1.svg"
          style="top: 50px"
        />
        <img
          class="waves"
          src="@/assets/waves/cube1.svg"
          style="top: 190px; left: 200px; filter: blur(60%)"
        />
        <img
          class="waves"
          src="@/assets/waves/cube2.svg"
          style="top: 120px:left:500px"
        />
        <img
          class="waves"
          src="@/assets/waves/cube3.svg"
          style="top: 100px; left: 420px"
        />
      </div>
      <FooterVideoHome />
    </div>
  </div>
</template>

<script>
import VideoTopMenu from "@/components/sections/movieHome_section/VideoTopMenu.vue";
import VideoCarousels from "@/components/sections/movieHome_section/VideoCarousels.vue";
import VideoTV from "@/components/sections/movieHome_section/VideoTV.vue";
import AllSortsVideo from "@/components/sections/movieHome_section/AllSortsVideo.vue";
import FooterVideoHome from "@/components/group/movieHome/footer/FooterVideoHome.vue";

export default {
  components: {
    VideoTopMenu,
    VideoCarousels,
    AllSortsVideo,
    VideoTV,
    FooterVideoHome,
  },
  created() {
    const params = this.$route.params;
    if (document.body.clientWidth <= 900) {
      this.isOnComputer = false;
    }
    if (params.hasLogin) {
      this.hasLogin = true;
    }
  },

  data() {
    return {
      isOnComputer: true,
    };
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scopde>
@import "@/global-styles/mixin.scss";
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.backgroundWrap {
  position: relative;
  .waves {
    position: absolute;
    z-index: 10;
    @media (max-width: 900px) {
      transform: scale(0.6);
      left: -400px;
    }
  }
  .Background {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
    z-index: 10;
  }
}

.light-background {
  background: rgb(242, 246, 255);
}
.dark-background {
  background: $dark-blue;
}
</style>
