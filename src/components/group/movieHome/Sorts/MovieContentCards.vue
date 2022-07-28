<template>
  <div class="contentCard">
    <div class="cinematicErapper">
      <div v-for="item in 10" :key="item">
        <SingleContentCard
          :url="url"
          :description="description"
          where="where"
          :stared="stared"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardDescriptions from "@/components/group/movieHome/CardDescriptions.vue";
import SingleContentCard from "@/components/group/movieHome/Sorts/SingleContentCard.vue";
export default {
  components: {
    CardDescriptions,
    SingleContentCard,
  },
  props: ["url", "description", "where", "stared"],
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.contentCard {
  .cinematicErapper {
    @include gridCenter(20);
    gap: 20px;
  }
}
</style>
