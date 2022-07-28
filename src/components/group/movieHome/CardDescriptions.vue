<template>
  <div class="text">{{ text }}</div>
</template>

<script>
export default {
  props: ["text"],
};
</script>

<style lang="scss" scoped>
.text {
  z-index: 1000;
  position: absolute;
  margin-top: 100px;
  font-family: "Hannotate SC";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 42px;
  color: #ffffff;
  background: rgba(9, 7, 7, 0.64);
  border-radius: 15px;
  padding: 5px 10px;
  @media (max-width: 900px) {
    font-size: 15px;
    line-height: 15px;
  }
}
</style>
