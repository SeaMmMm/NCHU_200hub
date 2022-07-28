<template>
  <div class="videoContentWrapper">
    <el-carousel
      v-show="isOnComputer"
      indicator-position="outside"
      type="card"
      style="width: 90vw"
      height="355px"
    >
      <el-carousel-item v-for="item in 4" :key="item">
        <div style="position: relative">
          <img class="loopImage" :src="url" />
          <CardDescriptions
            text="this is the video description"
            class="leftBottom"
          />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
import CardDescriptions from "@/components/group/movieHome/CardDescriptions.vue";
export default {
  components: {
    CardDescriptions,
  },
  props: ["isOnComputer"],
  data() {
    return {
      url: require("@/assets/img/strangeDoctor.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";

.videoContentWrapper {
  z-index: 1000;
  display: grid;
  padding-top: 40px;
  @media (max-width: 900px) {
    padding-top: 20px;
  }
  .loopImage {
    width: 100%;
    height: inherit;
  }
  .leftBottom {
    bottom: 16px;
    left: 10px;
  }
}
</style>
