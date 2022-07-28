<template>
  <transition
    name="slide-in-right"
    enter-active-class="animate__animated animate__slideInRight"
  >
    <div
      v-show="show"
      class="request"
      :class="{ 'light-request': isDarkMode, 'dark-request': !isDarkMode }"
    >
      你还没有 NCHU200hub 的账号??🤷🏻‍♀️🤷🏻🤷🏽‍♂️🤷🏻‍♀️
      <router-link to="/request">那就浅注册一个吧</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
.request {
  text-align: start;
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}
</style>
