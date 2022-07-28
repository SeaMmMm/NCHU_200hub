<template>
  <div class="footerVideo">
    <div class="footerVideoContent">
      <DescriptionVideo text="other genre" />
      <div class="footerCards">
        <div v-for="item in 8" :key="item">
          <FooterSingleVideo />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DescriptionVideo from "@/components/group/movieHome/DescriptionVideo.vue";
import FooterSingleVideo from "@/components/group/movieHome/footer/FooterSingleVideo.vue";
export default {
  components: {
    DescriptionVideo,
    FooterSingleVideo,
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.footerVideo {
  z-index: 1000;
  .footerVideoContent {
    overflow-x: auto;
    @include gridRowsStart(2);
    gap: 30px;
    padding: 10px;

    .footerCards {
      @include gridCenter(4);
      gap: 40px;
      @media (max-width: 900px) {
        gap: 20px;
      }
    }
  }
}
</style>
