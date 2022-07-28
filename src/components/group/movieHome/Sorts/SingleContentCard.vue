<template>
  <router-link :to="where">
    <div class="cinematic">
      <img class="videoShow" :src="url" alt="text" />
      <img
        c-show="tared"
        class="star"
        src="@/assets/icons/star.svg"
        alt="star"
      />
      <CardDescriptions :text="description" class="discription" />
    </div>
  </router-link>
</template>

<script>
import CardDescriptions from "@/components/group/movieHome/CardDescriptions.vue";
export default {
  components: {
    CardDescriptions,
  },
  props: ["url", "description", "where", "stared"],
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.cinematic {
  z-index: 1000;
  position: relative;
  &:hover {
    @include hoverChangeUp;
  }
  .videoShow {
    width: 220px;
    @media (max-width: 900px) {
      width: 120px;
    }
  }
  .star {
    width: 40px;
    position: absolute;
    top: 10px;
    left: 10px;
    @media (max-width: 900px) {
      width: 20px;
      top: 5px;
      left: 5px;
    }
  }
  .discription {
    transform: scale(0.8);
    left: -5px;
    bottom: 0;
    @media (max-width: 900px) {
      transform: scale(0.6);
      width: 150px;
      left: -28px;
    }
  }
}
</style>
