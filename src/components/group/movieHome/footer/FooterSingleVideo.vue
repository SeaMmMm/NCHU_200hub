<template>
  <div class="cardSingleFooter">
    <img class="showCard" src="@/assets/img/cartoon.png" alt="text" />
    <CardDescriptions text="cartoon" class="descriptionFooter" />
  </div>
</template>

<script>
import CardDescriptions from "@/components/group/movieHome/CardDescriptions.vue";
export default {
  components: {
    CardDescriptions,
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.cardSingleFooter {
  position: relative;
  z-index: 1000;
  .showCard {
    width: 300px;
    @media (max-width: 900px) {
      width: 180px;
    }
  }
  .descriptionFooter {
    top: -85px;
    left: 10px;
  }
  &:hover {
    @include hoverChangeUp;
  }
}
</style>
