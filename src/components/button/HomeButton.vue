<template>
  <router-link :to="where" class="HomeButton">
    <div
      :class="!isColorReversed ? 'PurpleTangle' : 'BlackTangle'"
      style="position: relative"
    >
      {{ description }}
      <div
        :class="isColorReversed ? 'PurpleTangle' : 'BlackTangle'"
        style="
          position: absolute;
          z-index: -10;
          left: 5px;
          top: -10px;
          width: 120px;
          height: 55px;
        "
      ></div>
    </div>
  </router-link>
</template>

<script>
import "@/global-styles/mixin.scss";
export default {
  name: "HomeButton",
  props: ["isColorReversed", "description", "where"],
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.HomeButton {
  :hover {
    .PurpleTangle {
      @include hoverChange;
    }
    .BlackTangle {
      @include hoverChange;
    }
  }
  .PurpleTangle {
    @include buttonDefault;
    background: #5400dc;
    @media (max-width: 900px) {
      font-size: 16px !important;
    }
  }
  .BlackTangle {
    @include buttonDefault;
    background: #75e0e6;
    @media (max-width: 900px) {
      font-size: 16px !important;
    }
  }
}
</style>
