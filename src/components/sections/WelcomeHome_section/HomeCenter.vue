<template>
  <div class="AboutWrapper">
    <div class="AboutContent">
      <div class="aboutTop">
        <router-link v-show="!isLogged" to="/signin" class="search">
          <img src="@/assets/svg/search.svg" alt="search" />
          <div class="signText">注册</div>
        </router-link>
        <router-link v-show="!isLogged" to="/signin" class="signIn">
          <img src="@/assets/svg/user.svg" alt="user" />
          <div class="signText">登录</div>
        </router-link>
        <div
          v-show="isLogged"
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          class="signText"
        >
          Welcome
        </div>
      </div>
      <div class="aboutCenter">
        <div class="title">CanCanNeed</div>
        <div class="description">
          在这里，你可以看到我们 精心挑选出来，好康的 **😍
        </div>
        <div class="text">Do you Love Or .....?</div>
      </div>
      <div class="footer">
        <div v-for="(text, index) in texts" :key="index" class="footerText">
          {{ text }}
        </div>
      </div>
      <img
        src="@/assets/svg/helloCard.svg"
        alt="cardHello"
        class="illustration"
      />
      <div class="poText">建议少冲</div>
      <iframe
        src="https://embed.lottiefiles.com/animation/5306"
        class="rock"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem("email") === null) {
      this.isLogged = false;
    } else {
      this.isLogged = true;
    }
  },
  data() {
    return {
      texts: ["Have fun!", "take easy", "wdnmd"],
      isLogged: null,
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.rock {
  position: absolute;
  top: 0;
  left: 40vw;
  @media (max-width: 900px) {
    transform: scale(0.6);
    top: 100px;
  }
}
.AboutWrapper {
  height: 150vh;
  display: grid;
  overflow: auto;
  align-items: center;
  @media (max-width: 900px) {
    height: 900px;
    overflow-x: hidden;
  }
  .illustration {
    width: 600px;
    position: absolute;
    bottom: -20px;
    right: 10px;
    z-index: 100;
    @media (max-width: 900px) {
      transform: scale(0.3);
      bottom: -120px;
      left: -80px;
    }
  }
  .illustration:hover {
    @include hoverScale(0.8);
    @media (max-width: 900px) {
      @include hoverScale(0.4);
    }
  }

  .AboutContent {
    background: linear-gradient(258.48deg, #09192b 0%, #012146 100%);
    border-radius: 50px;
    position: relative;
    height: 740px;
    @media (max-width: 900px) {
      border-radius: 25px;
    }
    .aboutTop {
      display: grid;
      grid-template-columns: repeat(2, 200px);
      justify-items: center;
      align-items: center;
      padding: 100px;
      @media (max-width: 900px) {
        padding: 20px;
        grid-template-columns: repeat(2, 100px);
        gap: 80px;
      }
    }
    .search {
      padding: 15px;
      display: grid;
      grid-template-columns: repeat(2, auto);
      align-items: center;
      justify-items: center;
      gap: 20px;
      &:hover {
        @include hoverButtom;
      }
      @media (max-width: 900px) {
        padding: 0;
        transform: scale(0.6);
      }
    }
    .signText {
      font-family: "GB18030 Bitmap";
      font-style: normal;
      font-weight: 400;
      font-size: 32px;
      line-height: 32px;
      @media (max-width: 900px) {
        font-weight: 400;
        font-size: 22px;
      }
    }
    .signIn {
      display: grid;
      grid-template-columns: repeat(2, 70px);
      align-items: center;
      justify-items: center;
      padding: 15px;
      &:hover {
        @include hoverButtom;
      }
      @media (max-width: 900px) {
        padding: 0;
        transform: scale(0.6);
      }
    }
    .aboutCenter {
      display: grid;
      grid-template-rows: repeat(2, auto);
      align-items: center;
      gap: 60px;
      margin-top: 80px;
      margin-left: 10vw;
      .title {
        font-family: "Wawati SC";
        font-style: normal;
        font-weight: 400;
        font-size: 70px;
        line-height: 70px;
        color: #ffffff;
        @media (max-width: 900px) {
          font-size: 30px;
        }
      }
      .description {
        font-family: "GB18030 Bitmap";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 30px;
        width: 330px;
        color: rgba(255, 255, 255, 0.5);
        @media (max-width: 900px) {
          font-size: 20px;
        }
      }
      .text {
        font-family: "Wawati SC";
        font-style: normal;
        font-weight: 400;
        font-size: 22px;
        line-height: 32px;
        color: rgba(255, 255, 255, 0.5);
        @media (max-width: 900px) {
          font-size: 10px;
        }
      }
    }

    .footer {
      display: grid;
      grid-template-columns: repeat(3, 200px);
      align-items: center;
      justify-items: center;
      padding: 30px;
      @media (max-width: 900px) {
        padding: 15px;
        grid-template-columns: auto;
        grid-template-rows: repeat(3, auto);
        gap: 60px;
        justify-items: start;
      }

      .footerText {
        font-family: "Wawati SC";
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 110%;
        letter-spacing: 0.1em;
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
  .poText {
    padding: 50px;
    font-family: "Wawati SC";
    font-style: normal;
    font-weight: 400;
    font-size: 71px;
    line-height: 71px;
    color: #775ada;
    text-shadow: -2px 2px 0px rgba(119, 90, 218, 0.4);
    transform: rotate(45deg);
    @media (max-width: 900px) {
      font-size: 31px;
      top: 300px;
      right: -30px;
    }

    position: absolute;
    top: 60px;
    right: 120px;
    &:hover {
      transform: rotate(30deg);
      cursor: default;
    }
  }
}
</style>
