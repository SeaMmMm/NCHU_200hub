<template>
  <div class="WrapperTop2">
    <img class="cackes" :src="src" :alt="src" />
    <div class="rightWrapper">
      <div class="Name">{{ name }}</div>
      <div class="Description">{{ description }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "description", "src"],
};
</script>

<style lang="scss" scoped>
.WrapperTop2 {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-content: start;
  gap: 30px;
  .cackes {
    @media (max-width: 900px) {
      width: 120px;
    }
    &:hover {
      transform: scale(1.15);
    }
  }
}
.rightWrapper {
  display: grid;
  grid-template-rows: repeat(2, auto);
  align-items: center;
  justify-items: start;
}
.Name {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 32px;
  color: #1e0e62;
  @media (max-width: 900px) {
    font-size: 20px;
  }
}
.Description {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: rgba(21, 20, 57, 0.4);
  width: 250px;
  @media (max-width: 900px) {
    font-size: 10px;
    width: 120px;
  }
}
</style>
