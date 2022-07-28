<template>
  <div class="CenterRightCards">
    <div class="rightCardsContent">
      <div class="singleCard">
        <img class="showImage" :src="url" alt="right" />
        <CardDescriptions :text="description" class="rightDescription" />
        <CardDescriptions :text="content" class="rightContent" />
        <img
          v-show="stared"
          class="star"
          src="@/assets/icons/star.svg"
          alt="star"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardDescriptions from "@/components/group/movieHome/CardDescriptions.vue";
export default {
  components: {
    CardDescriptions,
  },
  props: ["url", "description", "content", "stared"],
};
</script>

<style scoped lang="scss">
@import "@/global-styles/mixin.scss";
.CenterRightCards {
  .rightCardsContent {
    @include gridCenter(2);
    grid-template-rows: auto auto;
    gap: 30px;
    @media (max-width: 900px) {
      gap: 20px;
    }
  }
  .singleCard {
    position: relative;
    &:hover {
      transform: translateY(-10px) scale(1.05);
      cursor: pointer;
    }
    .showImage {
      width: 340px;
      @media (max-width: 900px) {
        width: 220px;
      }
    }
  }
  .rightDescription {
    top: 0;
    @media (max-width: 900px) {
      top: -25px;
    }
  }
  .rightContent {
    right: 10px;
    top: 0;
    @media (max-width: 900px) {
      top: -25px;
    }
  }
  .star {
    position: absolute;
    width: 35px;
    top: 10px;
    left: 10px;
    @media (max-width: 900px) {
      width: 25px;
    }
  }
}
</style>
