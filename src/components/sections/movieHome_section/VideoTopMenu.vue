<template>
  <div style="margin-top: 100px" v-show="!isOnComputer">
    <!-- 下面的都是在手机上显示的东西 ==> v-show="!isOnComputer" -->
    <transition
      name="zoomIn"
      enter-active-class="animate__animated animate__zoomInDown"
    >
      <div v-show="!isOnComputer && show" class="phoneButton">
        <div class="LogContent">
          <HomeButton
            v-show="!hasLogin"
            :isColorReversed="false"
            description="Log In"
            where="/signin"
          />
          <HomeButton
            v-show="!hasLogin"
            :isColorReversed="true"
            description="Sign Up"
            where="/signin"
          />
          <div
            v-show="hasLogin"
            :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
            class="loginText"
          >
            Welcome NCHU_200hub!🥳
          </div>
        </div>
        <img
          class="smile"
          v-show="!isOnComputer"
          src="@/assets/svg/smile.svg"
          alt="smile"
          :class="{ moretop: hasLogin }"
        />
      </div>
    </transition>
  </div>
</template>

<script>
import VideoTemplate from "@/components/group/movieHome/navigationBar/VideoTemplate.vue";
import AccountButton from "@/components/group/movieHome/navigationBar/AccountButton.vue";
import HomeButton from "@/components/button/HomeButton.vue";
import ThemeSwitch from "@/components/button/ThemeSwitch.vue";
export default {
  props: ["isOnComputer"],
  components: {
    VideoTemplate,
    AccountButton,
    HomeButton,
    ThemeSwitch,
  },
  data() {
    return {
      hasLogin: false,
      show: false,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  mounted() {
    this.show = true;
  },
  created() {
    if (window.localStorage.getItem("email") !== null) {
      this.hasLogin = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.Wrap {
  overflow-x: hidden;
}

.loginText {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 70px;
  text-align: center;
}
.videoContentWrapper {
  @include gridStart(4);
  @media (max-width: 900px) {
    @include gridStart(2);
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    padding: 0;
  }
  padding: 20px;
  .icon {
    width: 60px;
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      filter: hue-rotate(10deg) brightness(150%) saturate(120%);
    }
    @media (max-width: 900px) {
      width: 60px;
    }
  }
}
.menuButtons {
  @include gridCenter(3);
  padding: 20px 0;
  animation-delay: 0.2s;
  @media (max-width: 900px) {
  }
}
.input {
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-items: center;
  gap: 10px;
  .search {
    &:focus {
      filter: drop-shadow(0px 30px 30px rgba(0, 0, 0, 0.25));
      transform: translateX(20px);
    }
    outline: none;
    background: linear-gradient(
      180deg,
      rgba(99, 106, 150, 0.4) 0%,
      rgba(182, 186, 214, 0.25) 100%
    );
    border: 0.5px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(40px);
    border-radius: 30px;
    height: 40px;
    width: 300px;
    padding-left: 20px;
    margin-top: -5px;

    font-family: "SF Pro Text";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    color: #ffffff;
  }
}
.sort {
  width: 40px;
  padding: 12px;
  right: 16px;
  top: 5px;
  cursor: pointer;
  &:hover {
    @include hoverButtom;
  }
}
.User {
  @include gridCenter(2);
  gap: 10px;
  animation-delay: 0.6s;
}
.phoneButton {
  position: relative;
  z-index: 1000;
  .LogContent {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(4px);
    border-radius: 60px 0px 60px 60px;
    padding: 20px;
    display: grid;
    grid-template-columns: auto auto;
    gap: 50px;
    transform: scale(0.8);
  }
  .smile {
    position: absolute;
    width: 150px;
    left: 100px;
    top: 120px;
  }
  .moretop {
    top: 250px;
  }
}
</style>
