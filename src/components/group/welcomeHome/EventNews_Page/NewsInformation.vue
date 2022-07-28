<template>
  <div class="WrapperNews">
    <div class="topWrapperNews">
      <div class="LeftText">News</div>
    </div>
    <div class="ContentWrapperNews">
      <div class="Description">
        <div class="NewsText">活动消息</div>
        <div class="actionText">hub最新活动介绍</div>
        <div class="description">
          It is updated from time to time, if you need to contact us to put your
          favorite hub, please contact us
          <img class="textCover" src="@/assets/svg/Cover2.svg" alt="Cover" />
        </div>
      </div>
      <div class="ImageBottom">
        <img
          class="woman"
          src="@/assets/svg/WomanFlower.svg"
          alt="WomanFlower"
        />
        <img src="@/assets/svg/splice.svg" alt="splice" class="splice" />
        <div class="BlurRightBack"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
* {
  transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  text-decoration: none;
}
.BlurRightBack {
  background: linear-gradient(
    142.97deg,
    rgba(255, 230, 0, 0.21) 17.43%,
    rgba(239, 60, 210, 0.22) 73.23%
  );
  opacity: 0.7;
  filter: blur(345.36px);
  position: absolute;
}
.WrapperNews {
  background: #ffffff;
  box-shadow: 0px 6px 20px #ffe3de;
  border-radius: 30px;
  padding-bottom: 50px;
  height: 780px;
  width: 100%;
  @media (max-width: 900px) {
    border-radius: 10px;
    height: 600px;
  }
}
.topWrapperNews {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
  justify-items: center;
  padding: 20px;
  @media (max-width: 900px) {
    padding: 10px;
  }
}
.LeftText {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: #000000;
  padding-left: 100px;
  @media (max-width: 900px) {
    padding-left: 30px;
    font-size: 18px;
    line-height: 16px;
  }
}
.ContentWrapperNews {
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  justify-items: center;
  @media (max-width: 900px) {
    grid-template-columns: auto;
    grid-template-rows: repeat(2, auto);
    margin-left: -70px;
  }
}
.Description {
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-items: center;
  @media (max-width: 900px) {
    padding: 20px;
  }
}
.NewsText {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 75px;
  color: #333333;
  @media (max-width: 900px) {
    font-size: 38px;
    line-height: 35px;
    padding-right: 0;
  }

  padding-right: 20%;
}
.actionText {
  width: 300px;
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 75px;
  color: #333333;
  margin-left: 35%;
  margin-top: 10%;
  @media (max-width: 900px) {
    font-size: 26px;
    line-height: 75px;
  }
}
.description {
  width: 402px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;
  color: #333333;
  position: relative;
  @media (max-width: 900px) {
    font-size: 15px;
    width: 200px;
  }
}
.textCover {
  position: absolute;
  top: -100%;
  @media (max-width: 900px) {
    top: -100px;
    left: -10px;
  }
}
.ImageBottom {
  display: grid;
  grid-template-rows: repeat(2, auto);
  gap: 30px;
  position: relative;
}
.woman {
  @media (max-width: 900px) {
    width: 200px;
    margin-left: 100px;
  }
}
.splice {
  @media (max-width: 900px) {
    width: 100vw;
  }
}
.woman:hover {
  transition: 4s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1.1);
  @media (max-width: 900px) {
    transform: scale(1.3);
  }
}
</style>
