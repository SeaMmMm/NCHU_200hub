<template>
  <div class="cardWrapper">
    <img :src="url" alt="cartoon" />
  </div>
</template>

<script>
export default {
  props: ["url"],
};
</script>

<style lang="scss" scoped>
.cardWrapper {
  margin-top: 5vh;
  :hover {
    transform: translateY(-20px) scale(1.05);
    filter: hue-rotate(10deg) brightness(150%) saturate(120%);
  }
  img {
    @media (max-width: 900px) {
      width: 200px;
    }
  }
}
</style>
