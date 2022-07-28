<template>
  <div class="ALL">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Headers/Header.vue";

export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.ALL {
  background-image: url("@/assets/img/Mountain-7.jpg");
  height: 100%;
  @media (max-width: 900px) {
    overflow-x: hidden;
  }
}
</style>
