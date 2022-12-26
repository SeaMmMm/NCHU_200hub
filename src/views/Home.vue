<template>
  <div class="ALL">
    <Header />
    <router-view v-if="isRouter" />
  </div>
</template>

<script>
import Header from "@/components/Headers/Header.vue";

export default {
  components: {
    Header,
  },
  data() {
    return {
      isRouter: true,
    };
  },
  provide() {
    return {
      // 注入重新加载函数
      reload: this.reload,
    };
  },
  methods: {
    /**
     * 自定义刷新函数
     * 本质上就是修改 v-if 中所绑定的Boolean值
     */
    reload() {
      this.isRouter = false;
      this.$nextTick(function () {
        this.isRouter = true;
      });
    },
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
