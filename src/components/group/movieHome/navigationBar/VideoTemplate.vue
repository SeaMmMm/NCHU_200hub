<template>
  <div class="iconTopWrapper">
    <div class="iconTopContent">
      <img :src="url" alt="home" />
      <div
        :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        class="title"
      >
        {{ title }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["url", "title"],
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
.dark-text {
  color: #1a2151;
}
.light-text {
  color: #e3e8ff;
}
.iconTopWrapper {
  cursor: pointer;
  &:hover {
    @include hoverButtom;
  }
  .iconTopContent {
    display: grid;
    grid-template-columns: 20px 40px;
    align-items: center;
    justify-items: center;
    padding: 10px 20px;
    @media (max-width: 900px) {
      grid-template-columns: 10px 40px;
      gap: 10px;
    }
    .title {
      font-family: "SF Pro";
      font-style: normal;
      font-weight: 590;
      font-size: 16px;
      line-height: 20px;
      @media (max-width: 900px) {
        line-height: 10px;
      }
    }
  }
}
</style>
