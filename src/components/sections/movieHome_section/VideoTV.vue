<template>
  <div class="tvCardsWrapper">
    <div v-show="isOnComputer" class="tvCardsContent">
      <DescriptionVideo text="new TV SERIES" />
      <div class="tvScaleWrapper">
        <TVcards
          :url="require('@/assets/img/coverCard.png')"
          name="MovieName"
          description="this is the movie description"
          where="/"
          style="margin-top: 200px; margin-left: 300px"
        />
        <div style="z-index: 1000" v-for="item in 2" :key="item">
          <TVcards
            :url="require('@/assets/img/coverCard.png')"
            name="MovieName"
            description="this is the movie description"
            where="/"
            style="margin-top: 200px"
          />
        </div>
      </div>
    </div>
    <div v-show="!isOnComputer" class="phoneTvCenter">
      <DescriptionVideo text="new TV SERIES" />
      <div class="phoneCardsLoop">
        <div v-for="item in 10" :key="item">
          <SingleContentCard
            :url="require('@/assets/img/daxiong.png')"
            description="doraemon: nobita no little war"
            where="/"
            :stared="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TVcards from "@/components/group/movieHome/TV/TVcards.vue";
import DescriptionVideo from "@/components/group/movieHome/DescriptionVideo.vue";
import SingleContentCard from "@/components/group/movieHome/Sorts/SingleContentCard.vue";
export default {
  components: {
    TVcards,
    DescriptionVideo,
    SingleContentCard,
  },
  props: ["isOnComputer"],
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.tvCardsWrapper {
  z-index: 1000;
  .tvCardsContent {
    @include gridRowsStart(2);
    padding-left: 30px;

    .tvScaleWrapper {
      @include gridCenter(3);
      gap: 100px;
    }
  }
  .phoneTvCenter {
    overflow-x: auto;
    margin-top: -100px;
    @include gridRowsStart(2);
    padding: 20px 10px;
    gap: 20px;
    .phoneCardsLoop {
      @include gridCenter(20);
      gap: 20px;
    }
  }
}
</style>
