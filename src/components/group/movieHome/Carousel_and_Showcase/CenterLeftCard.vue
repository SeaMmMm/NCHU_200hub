<template>
  <div class="CardsWrapper">
    <div class="leftCard">
      <CardDescriptions :text="description" class="cardDescription" />
      <CardDescriptions :text="content" class="right" />
      <img class="left" :src="url" alt="imgtext" />
      <img
        v-show="stared"
        class="star"
        src="@/assets/icons/star.svg"
        alt="star"
      />
    </div>
  </div>
</template>

<script>
import CardDescriptions from "@/components/group/movieHome/CardDescriptions.vue";
export default {
  props: ["url", "description", "content", "stared"],
  components: { CardDescriptions },
};
</script>

<style lang="scss" scoped>
.CardsWrapper {
  display: grid;
  grid-template-columns: auto auto;
  justify-items: center;
  align-items: center;
  gap: 30px;
  .leftCard {
    position: relative;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px) scale(1.05);
    }
    .left {
      width: 520px;
      @media (max-width: 900px) {
        width: 310px;
      }
    }
    .cardDescription {
      bottom: 10px;
    }
    .star {
      position: absolute;
      width: 50px;
      top: 20px;
      left: 20px;
      @media (max-width: 900px) {
        width: 35px;
      }
    }
    .right {
      right: 10px;
      bottom: 10px;
    }
  }
}
</style>
