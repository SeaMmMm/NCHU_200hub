<template>
  <div class="purchaseButton" @click="goSignIn">
    <div class="IconWrapper">
      <img src="@/assets/svg/credit.svg" class="icon" />
      <img src="@/assets/svg/icon-ring.svg" class="Ring" />
    </div>
    <div class="TextWrapper">
      <div class="Title">你不是vip😅</div>
      <div class="Subtital">Click me to log in</div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goSignIn() {
      this.$router.push("/signin");
    },
  },
};
</script>

<style lang="scss" scoped>
.purchaseButton {
  width: 250px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
    .icon {
      transform: scale(1.2);
    }
    .IconWrapper {
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
    .Ring {
      transform: rotate(30deg) scale(1.2) translate(1px, 1px);
    }
  }
}
.TextWrapper {
  display: grid;
  gap: 4px;
}
.Title {
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
  color: black;
}
.Subtital {
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
  color: black;
  opacity: 0.7;
  @media (max-width: 900px) {
    font-size: 10px;
  }
}
.Ring {
  position: absolute;
  top: -15px;
  left: -16px;
}
.IconWrapper {
  width: 45px;
  height: 45px;
  background: linear-gradient(200.44deg, #4316db 13.75%, #9076e7 98.38%);
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center; //设置元素位置-常见的
  justify-self: center;
  position: relative;
}
</style>
