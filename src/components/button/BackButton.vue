<template>
  <div id="Wrapper" @click="prev">
    <div id="ContentWrapper">
      <div id="Text">返回</div>
      <img src="@/img/cheked.svg" alt="return" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    prev() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
#Wrapper {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  text-decoration: none;
  cursor: pointer;
  width: 180px;
  padding: 10px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(30px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 20px;
}
#Wrapper:hover {
  width: 240px;
}
#ContentWrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  gap: 20px;
}
#Text {
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 130%;
}
</style>
