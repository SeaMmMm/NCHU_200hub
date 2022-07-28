<template>
  <div id="Wrapper03">
    <div id="HeadeText">更多内容，敬请期待</div>
    <div class="ButtonWrapper01">
      <button class="BUtton">
        <span class="back"> 更新中...</span>
      </button>
      <img class="hands" src="@/assets/svg/hand.svg" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>
<style lang="scss" scoped>
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  border: none;
}
#Wrapper03 {
  display: grid;
  grid-template-rows: repeat(3, auto);
  background: #ffffff;
  box-shadow: 0px 13px 45px rgba(166, 167, 236, 0.41),
    inset 7px 0px 51px rgba(166, 167, 236, 0.39),
    inset -9px -9px 75px rgba(229, 229, 229, 0.6);
  border-radius: 90px;
  align-items: center;
  justify-items: center;
  width: 600px;
  height: 400px;
  @media (max-width: 900px) {
    width: 200px;
    height: 100px;
    border-radius: 20px;
    margin-top: -40px;
    padding: 10px;
  }
}
.ButtonWrapper01 {
  @media (max-width: 900px) {
    position: relative;
  }
}
#HeadeText {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 42px;
  align-items: center;
  color: #181818;
  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 22px;
  }
}
.BUtton {
  width: 270px;
  height: 80px;
  background: #a5a6f6;
  box-shadow: 0px 2px 11px #9394db, inset 1px 9px 24px rgba(125, 125, 237, 0.6),
    inset -1px -9px 20px rgba(0, 0, 0, 0.23);
  border-radius: 24px;
  cursor: pointer;
  position: relative;
  @media (max-width: 900px) {
    width: 100px;
    height: 40px;
  }
}
.back {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 28px;
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 14px;
    line-height: 28px;
  }
}
.hands {
  position: absolute;
  left: 30%;
  @media (max-width: 900px) {
    width: 100px;
    left: -60px;
    top: 10px;
  }
}
.BUtton:hover {
  transform: scale(1.1);
}
</style>
