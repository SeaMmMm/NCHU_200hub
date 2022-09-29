<template>
  <div class="pageButton">
    <img :src="url" alt="page" />
  </div>
</template>

<script>
export default {
  props: ['url'],
}
</script>

<style lang="scss" scoped>
.pageButton {
  z-index: 2000;
  padding: 20px 30px;
  align-items: center;
  justify-items: center;
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 50px;
  position: absolute;
  @media (max-width: 900px) {
    transform: scale(0.6);
  }
}
</style>
