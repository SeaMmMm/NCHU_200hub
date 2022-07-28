<template>
  <div class="cinematicWrapper">
    <div class="cinematicContent">
      <DescriptionVideo :text="sortText" />
      <MovieContentCards
        :url="cardURL"
        :description="descriptions"
        where="where"
        :stared="stared"
      />
    </div>
  </div>
</template>

<script>
import DescriptionVideo from "@/components/group/movieHome/DescriptionVideo.vue";
import MovieContentCards from "@/components/group/movieHome/Sorts/MovieContentCards.vue";
export default {
  components: {
    DescriptionVideo,
    MovieContentCards,
  },
  props: ["sortText", "cardURL", "descriptions", "where", "stared"],
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.cinematicWrapper {
  z-index: 1000;
  margin-top: -100px;
  padding: 50px;
  @media (max-width: 900px) {
    margin-top: -60px;
    padding: 20px 10px;
  }
  .cinematicContent {
    overflow-x: auto;
    @include gridRowsStart(2);
    gap: 60px;
    @media (max-width: 900px) {
      gap: 40px;
    }
  }
}
</style>
