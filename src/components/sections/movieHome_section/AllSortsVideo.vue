<template>
  <div class="SortWrapper">
    <div class="SortContent">
      <div class="cinematic">
        <div v-for="(item, index) in movies" :key="index">
          <CinematicMovie
            :sortText="item.sortText"
            :cardURL="item.cardURL"
            :descriptions="item.descriptions"
            :where="item.where"
            :stared="item.stard"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CinematicMovie from "@/components/group/movieHome/Sorts/CinematicMovie.vue";
export default {
  components: {
    CinematicMovie,
  },
  data() {
    return {
      movies: [
        {
          sortText: "new cinematic movies",
          cardURL: require("@/assets/img/zshz.png"),
          descriptions: "doraemon: nobita no little war",
          where: "/",
          stared: "true",
        },
        {
          sortText: "romance",
          cardURL: require("@/assets/img/animal.png"),
          descriptions: "Fantastic Beasts: The Secrets of Dumbledore",
          where: "/",
          stared: "true",
        },
        {
          sortText: "marvel",
          cardURL: require("@/assets/img/spider.png"),
          descriptions: "spider man: no way home",
          where: "/",
          stared: "true",
        },
        {
          sortText: "DC",
          cardURL: require("@/assets/img/joker.png"),
          descriptions: "joker",
          where: "/",
          stared: "true",
        },
      ],
    };
  },
  props: ["isOnComputer"],
};
</script>
<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.SortWrapper {
  z-index: 1000;
}
</style>
