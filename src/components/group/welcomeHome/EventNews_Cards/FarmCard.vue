<template>
  <div ref="wrapper" class="WrapperFarmCard">
    <div class="ContentWrapperFarmCard">
      <div class="TopWrapperFarmCard">
        <img class="farmIcon" src="@/assets/svg/farmIcon.svg" alt="farmIcon" />
        <div class="Title">正缺人手....</div>
      </div>
      <div class="CenterWrapperFarmCard">
        <div class="description">
          <div class="TextAddimage">
            <img class="N" src="@/assets/svg/N.svg" alt="N" />
            <div class="newsLeft">ews</div>
          </div>
          <div class="Action">好的网站😏<br />需要大家共同维护</div>
          <div class="activedescription">
            <div class="topdescription">加入NCHU_200hub</div>
            <div class="topdescription">强强联手，源于我们，服务我们</div>
          </div>
          <router-link to="/pay" class="ButtonWrapperFarmCard">
            <div class="ButtonContentWrapperFarmCard">
              <div class="showMore">感谢金主😍</div>
              <img src="@/assets/svg/to.svg" alt="to" />
            </div>
          </router-link>
        </div>
        <img class="right" src="@/assets/svg/rightFarmImage.svg" alt="right" />
      </div>
      <img src="@/assets/svg/hoverWave.svg" alt="hoverWave" class="Hover" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    letDowm() {
      this.$refs.wrapper.style.marginTop = "100px";
    },
    letTop() {
      // console.log("我 letUp 了");
      if (document.body.clientWidth <= 900) {
        this.$refs.wrapper.style.marginTop = "-120px";
      } else {
        this.$refs.wrapper.style.marginTop = "-400px";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  transition: 2s ease;
}
.WrapperFarmCard {
  width: 1140px;
  height: 650px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 50px;
  position: relative;
  @media (max-width: 900px) {
    width: 360px;
    height: 240px;
    border-radius: 20px;
  }
}
.ContentWrapperFarmCard {
  display: grid;
  grid-template-rows: auto auto;
}
.TopWrapperFarmCard {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  padding: 5%;
  @media (max-width: 900px) {
    padding: 2%;
  }
  .farmIcon {
    @media (max-width: 900px) {
      width: 45px;
    }
  }
}
.Title {
  font-family: "Wawati SC";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 71px;
  color: #7391e0;
  @media (max-width: 900px) {
    font-size: 28px;
    line-height: 11px;
  }
}
.CenterWrapperFarmCard {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 250px 100px;
    margin-top: -100px;
  }
}
.description {
  display: grid;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  justify-items: start;
  padding: 5%;
}
.TextAddimage {
  display: grid;
  grid-template-columns: auto auto;
  align-items: start;
  justify-items: end;
  gap: 5px;
  padding-left: 15%;
  .N {
    @media (max-width: 900px) {
      width: 30px;
    }
  }
}
.newsLeft {
  padding: 10px;
  font-family: "Rowdies";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  line-height: 71px;
  color: #7391e0;
  @media (max-width: 900px) {
    font-size: 28px;
    line-height: 10px;
  }
}
.Action {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 67px;
  color: #000000;
  padding: 20px;
  @media (max-width: 900px) {
    font-size: 16px;
    line-height: 17px;
    padding: 10px;
  }
}
.activedescription {
  padding: 2%;
}
.topdescription {
  font-family: "Saira";
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 31px;
  color: #838383;
  @media (max-width: 900px) {
    font-size: 15px;
    line-height: 15px;
  }
}
.ButtonWrapperFarmCard {
  width: 210px;
  height: 40px;
  border: 2px solid #7391e0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 10px;
  margin-top: 2%;
  z-index: 1000;
  cursor: pointer;
  @media (max-width: 900px) {
    width: 120px;
    height: 30px;
  }
}
.ButtonContentWrapperFarmCard {
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  padding: 1%;
  @media (max-width: 900px) {
    margin-top: -3px;
  }
}
.showMore {
  font-family: "Rounded Mplus 1c Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #7391e0;
  @media (max-width: 900px) {
    font-size: 15px;
  }
}
.right {
  width: 400px;
  height: 400px;
  z-index: 1000;
  @media (max-width: 900px) {
    width: 150px;
  }
}
.Hover {
  position: absolute;
  top: -19%;
  left: -4%;
  @media (max-width: 900px) {
    width: 300px;
    top: 45px;
    left: 60px;
  }
}
.right:hover {
  transform: scale(1.2);
}
.ButtonWrapperFarmCard:hover {
  transition: 1s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform: scale(1.1) rotate(-2deg);
}
</style>
