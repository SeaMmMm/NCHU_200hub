<template>
  <div class="WrapperCardLiveIn">
    <div class="ContentWrapperCardLiveIn">
      <iframe
        class="IconBox"
        src="https://embed.lottiefiles.com/animation/112372"
      ></iframe>
      <div class="WelcomTitle">
        <div id="WelcomeText">Thanks</div>
        <div id="WelcomeText">for Using</div>
      </div>
      <div class="Descriptions">
        <div class="DesDescription">
          <div class="topDescription">NCHU_200hub 正因有你，</div>
          <div class="Username">{{ email || "还在裸奔的游客😳" }}</div>
          <div class="footerGrid">
            <div class="footerNormal">相信我们的hub</div>
            <div class="HotelName">越来越好</div>
          </div>
        </div>
      </div>
      <div class="bottomGrid">
        <div class="Bottom">
          <div class="Issuer" id="bottomTxt"></div>
          <div class="Hotel" id="bottomTxtHotel">NCHU_200hub</div>
        </div>
        <div class="Bottom">
          <div class="Number" id="bottomTxt">
            唯一网址：https://nchu200hub.netlify.app/
          </div>
        </div>
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
    };
  },
  created() {
    this.email = localStorage.getItem("email");
  },
};
</script>

<style scoped>
.WrapperCardLiveIn {
  left: 8%;
  position: absolute;
  width: 1200px;
  height: 820px;
  max-width: 1200px;
  max-height: 900px;
  min-width: 600px;
  min-height: 400px;
  z-index: 1000;
  background-image: url("@/assets/svg/Certificate.svg");
  background-size: 100%;
  display: grid;
  grid-template-rows: auto;
  align-items: center;
  justify-items: center;
}
.ContentWrapperCardLiveIn {
  display: grid;
  grid-template-rows: repeat(4, auto);
  align-items: center;
  justify-items: center;
}
.IconBox {
  width: 200px;
  height: 90px;
  border: none;
}
#WelcomeText {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 90px;
  text-align: center;
  color: #ffffff;
}
.Descriptions {
  width: 900px;
  height: 330px;
  max-width: 1200px;
  max-height: 420px;
  background: rgba(255, 255, 255, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
  border-radius: 20px;
}
.DesDescription {
  padding-top: 2%;
  text-align: center;
  display: grid;
  grid-template-rows: repeat(3, auto);
  gap: 40px;
}
.topDescription {
  padding-top: 2%;
  font-family: "ABeeZee";
  font-weight: 400;
  font-size: 15px;
  line-height: 130%;
  color: rgba(0, 0, 0, 0.7);
}
.Username {
  font-family: "ABeeZee";
  font-style: italic;
  font-weight: 400;
  font-size: 50px;
  line-height: 59px;
  color: #007bbb;
}
.footerGrid {
  display: grid;
  grid-template-rows: repeat(3, auto);
  justify-items: center;
  align-items: center;
}
.footerNormal {
  font-family: "ABeeZee";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  color: rgba(0, 0, 0, 0.7);
}
.HotelName {
  font-family: "LingWai SC";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 140%;
  text-align: center;
  color: #10597b;
}
.bottomGrid {
  padding-top: 60px;
  text-align: start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 280px;
}
.Bottom {
  width: 349px;
  height: 70px;
  background: rgba(255, 255, 255, 0.2);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(100px);
  border-radius: 10px;
  padding: 10px;
}
.MoreImformation {
  text-decoration: none;
  font-family: "SF Pro Text";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 130%;
  color: #00cffd;
}
#bottomTxtHotel {
  font-family: "HanziPen SC";
  font-weight: 500;
  font-size: 25px;
  line-height: 130%;
  color: #19448e;
}
#bottomTxt {
  color: #274a78;
}
</style>
