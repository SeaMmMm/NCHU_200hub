<template>
  <div class="WrapperPick" ref="letLeft">
    <div class="ContentWrapperPick">
      <div class="ImageWrapperPick">
        <img class="pickIcon" src="@/assets/svg/pick01.svg" alt="pick01" />
        <img class="pickIcon" src="@/assets/svg/pick02.svg" alt="pick02" />
        <img class="pickIcon" src="@/assets/svg/pick03.svg" alt="pick03" />
      </div>
      <div class="PickTitle">似此星辰非昨夜，为谁风露立中宵</div>
      <div class="Description">
        <div class="normal">QQ</div>
        <div class="normal">347552878</div>
        <div class="normal">thanks for</div>
        <div class="Warning normal">VISITING</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goLeft() {
      // console.log("到我往左走了");
      this.$refs.letLeft.style.transform = "translateX(-20vw)";
    },
    goBack() {
      this.$refs.letLeft.style.transform = "translateX(0)";
    },
  },
};
</script>

<style lang="scss" scoped>
.WrapperPick {
  width: 1174px;
  max-width: 1500px;
  background: rgba(47, 24, 147, 1);
  background-image: url("@/assets/img/pickImage.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border-radius: 60px;
  @media (max-width: 900px) {
    width: 360px;
    /* height: 200px; */
    border-radius: 20px;
  }
}
.ContentWrapperPick {
  display: grid;
  grid-template-rows: repeat(3, auto);
  align-items: center;
  justify-content: end;
  justify-items: center;
  gap: 25%;
  padding: 300px;
  @media (max-width: 900px) {
    padding: 30px;
  }
}
.ImageWrapperPick {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-items: end;
  justify-content: end;
  gap: 5%;
  .pickIcon {
    @media (max-width: 900px) {
      width: 20px;
      gap: 20px;
    }
  }
}
.Description {
  display: grid;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  justify-items: start;
  @media (max-width: 900px) {
    justify-items: center;
    grid-template-columns: repeat(4, auto);
    gap: 30px;
  }
}
.PickTitle {
  font-family: "LingWai SC";
  width: 400px;
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 70px;
  letter-spacing: -1px;
  color: #ffffff;
  @media (max-width: 900px) {
    width: 180px;
    font-size: 28px;
    line-height: 40px;
  }
}
.normal {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
  @media (max-width: 900px) {
    font-size: 10px;
    line-height: 10px;
  }
}
.Warning {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #ffff00;
}
</style>
