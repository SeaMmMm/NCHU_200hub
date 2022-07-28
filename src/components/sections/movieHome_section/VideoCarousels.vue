<template>
  <div class="videoWrapper">
    <ShowCard :isOnComputer="isOnComputer" class="OpAnimate" />
    <DescriptionVideo text="popular" />
    <PopularCards />
  </div>
</template>

<script>
import ShowCard from "@/components/group/movieHome/Carousel_and_Showcase/ShowCard.vue";
import DescriptionVideo from "@/components/group/movieHome/DescriptionVideo.vue";
import CardDescriptions from "@/components/group/movieHome/CardDescriptions.vue";
import PopularCards from "@/components/group/movieHome/Carousel_and_Showcase/PopularCards.vue";

export default {
  components: {
    ShowCard,
    DescriptionVideo,
    CardDescriptions,
    PopularCards,
  },
  props: ["isOnComputer"],
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.videoWrapper {
  overflow-x: auto;
  z-index: 1000;
  @include gridRowsCenter(3);
  justify-items: start;
  padding: 40px;
  @media (max-width: 900px) {
    padding: 20px;
  }
  .OpAnimate {
    @include OpAnimate(0.2s);
  }
}
</style>
