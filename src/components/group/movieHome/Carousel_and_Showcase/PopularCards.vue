<template>
  <div class="centerCards">
    <transition appear appear-active-class="animate__animated animate__flipInX">
      <CenterLeftCard
        :url="textLeftCard.url"
        :description="textLeftCard.description"
        :content="textLeftCard.content"
        :stared="true"
        style="animation-delay: 1s"
      />
    </transition>
    <div class="LoopCards">
      <div v-for="(item, index) in 4" :key="index">
        <transition
          appear
          appear-active-class="animate__animated animate__zoomInUp"
        >
          <CenterRightCards
            :url="textRightCard.url"
            :description="textRightCard.description"
            :content="textRightCard.content"
            :stared="true"
            :style="{ 'animation-delay': index / 2 + 's' }"
          />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import CenterLeftCard from "@/components/group/movieHome/Carousel_and_Showcase/CenterLeftCard.vue";
import CenterRightCards from "@/components/group/movieHome/Carousel_and_Showcase/CenterRightCards.vue";
export default {
  components: { CenterLeftCard, CenterRightCards },
  data() {
    return {
      textLeftCard: {
        url: require("@/assets/img/leftCardtext.png"),
        description: "ms.marvel",
        content: "1/6",
      },
      textRightCard: {
        url: require("@/assets/img/rightCardText.png"),
        description: "agent of shield: ss7",
        content: "1/13",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.centerCards {
  z-index: 1000;
  padding-top: 60px;
  @media (max-width: 900px) {
    padding-top: 40px;
  }
  @include gridCenter(2);
  gap: 60px;
  @media (max-width: 900px) {
    gap: 0;
  }
}
.LoopCards {
  @include gridCenter(2);
}
</style>
