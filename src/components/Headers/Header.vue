<template>
  <div id="nav" :class="{ 'nav-light': !isDarkMode, 'nav-dark': isDarkMode }">
    <div
      v-show="isOnComputer"
      :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
      style="font-family: 'HanziPen SC'; font-weight: 400"
    >
      NCHU_200hub
    </div>
    <div class="nav-1">
      <img
        @click="
          () => {
            this.$router.replace('/');
          }
        "
        src="@/assets/svg/DCHQ-small.svg"
        v-show="isDarkMode"
      />
      <img
        @click="
          () => {
            this.$router.replace('/');
          }
        "
        src="@/assets/svg/DCHQ-small-dark.svg"
        v-show="!isDarkMode"
      />
      <router-link
        to="/welcome"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover modeText"
        >🏠 首页</router-link
      >
      <!-- <router-link
        to="/video"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover modeText"
        >🥵 开冲</router-link
      > -->
      <router-link
        to="/other"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover modeText"
        >👾 其他</router-link
      >
      <router-link
        to="/team"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover modeText"
        >👩🏼‍🤝‍👨🏿 课程</router-link
      >
      <router-link
        v-if="!hasLogin"
        to="/signin"
        :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
        class="buttonHover modeText"
        >🎢 登陆·注册</router-link
      >
      <a
        v-else
        :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
        class="buttonHover modeText"
        style="cursor: pointer"
        @click="logOut"
      >
        退出登录👋🏿
      </a>
    </div>
    <div v-show="!isOnComputer">
      <div class="phone">
        <div
          :class="{ menuWrapper: !isDarkMode, 'menuWrapper-dark': isDarkMode }"
          @click="changeOpen"
        >
          <img
            class="menuIcon"
            v-show="!isDarkMode"
            src="@/assets/svg/lines.svg"
            alt="menu"
          />
          <img
            class="menuIcon"
            v-show="isDarkMode"
            src="@/assets/svg/lines-light.svg"
            alt="menu"
          />
        </div>
        <div
          class="phoneMenuWrapper"
          :class="{
            'show-visibale': isOpen,
            'show-hidden': !isOpen,
            'nav-light': !isDarkMode,
            'nav-dark': isDarkMode,
          }"
        >
          <router-link
            to="/welcome"
            :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
            class="modeText"
            >🏠 首页</router-link
          >
          <!-- <router-link
            to="/video"
            :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
            class="modeText"
            >🥵 开冲</router-link
          > -->
          <router-link
            to="/other"
            :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
            class="buttonHover modeText"
            >👾 其他</router-link
          >
          <router-link
            to="/team"
            :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
            class="modeText"
            >👩🏼‍🤝‍👨🏿 课程</router-link
          >
          <router-link
            v-if="!hasLogin"
            to="/signin"
            :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
            class="modeText"
            >🎢 登陆·注册</router-link
          >
          <a
            v-else
            :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
            class="modeText"
            style="cursor: pointer"
            @click="logOut"
          >
            退出登录👋🏿
          </a>
          <a
            :class="{ 'light-nav': !isDarkMode, 'dark-nav': isDarkMode }"
            class="modeText"
            @click="toggleDarkMode"
          >
            💡Dark Mode: {{ isDarkMode ? "on" : "off" }}
          </a>
        </div>
      </div>
    </div>
    <ThemeSwitch v-show="isOnComputer" style="transform: scale(0.8)" />
  </div>
</template>

<script>
import ThemeSwitch from "@/components/button/ThemeSwitch.vue";
import { auth } from "@/main";

export default {
  components: { ThemeSwitch },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  mounted() {
    document.addEventListener("click", (e) => {
      if (e.target.className !== "menuIcon") {
        this.isOpen = false;
      }
    });
  },
  data() {
    return {
      isOnComputer: true,
      hasLogin: false,
      isOpen: false,
    };
  },
  created() {
    if (document.body.clientWidth < 900) {
      this.isOnComputer = false;
    }
    if (window.localStorage.getItem("email") !== null) {
      this.hasLogin = true;
    }
  },
  methods: {
    logOut() {
      this.$notify({
        title: "成功退出🫠",
        message: "页面即将跳转，请握好扶手🏃🏻",
        type: "success",
        duration: 1500,
      });
      const user = auth.currentUser();
      window.localStorage.clear();

      user.logout().then(() => {
        this.$router
          .push({
            name: "signin",
            params: { userLoggedOut: true },
          })
          .catch((err) => {
            console.error("===logOutErr===", err);
          });
      });
    },
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
    changeOpen() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen);
    },
  },
  beforeDestroy() {
    window.removeEventListener("click", () => {}, true);
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";
@import "@/global-styles/mixin.scss";

.show-visible {
  transform: skewY(0) rotate(0) translateY(0);
  opacity: 1;
  visibility: visible;
}
.show-hidden {
  transform: skewY(-5deg) rotate(5deg) translateY(-30px);
  opacity: 0;
  visibility: hidden;
}
.phone {
  position: relative;
  z-index: 1100;
}
.menuWrapper {
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25), 0px 20px 40px rgba(0, 0, 0, 0.25);
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(40px);
  padding: 10px;
  border-radius: 50px;
}
.menuWrapper-dark {
  background: rgba(15, 14, 71, 0.3);
  border: 0.5px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(40px);
  padding: 10px;
  border-radius: 50px;
}
.phoneMenuWrapper {
  position: absolute;
  z-index: 1;
  top: 50px;
  right: -20px;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(200px);
  border-radius: 20px;
  padding: 20px;
  display: grid;
  grid-template-columns: 150px;
  gap: 10px;
  transition: 0.3s ease-in-out;
}
.buttonHover {
  padding: 10px;
  &:hover {
    @include hoverButtom;
    transform: scale(1.1);
  }
}
.modeText {
  font-family: "HanziPen SC";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  @media (max-width: 900px) {
    font-size: 18px;
  }
  line-height: 22px;
  color: black;
}
.dengl {
  @include gridCenter(2);
  padding: 10px;
  &:hover {
    @include hoverButtom;
  }
  gap: 3px;
}
.nav-light {
  background: #f0f3f5;
  box-shadow: 1px 3px 20px 4px #c6d0eb59;
}

.nav-dark {
  background: $super-dark-blue;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
}

#nav {
  z-index: 1100;
  padding: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  padding: 15px 15%;
  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: auto auto;
  }
  position: fixed;

  a {
    font-weight: bold;
    color: $dark-gray;
    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-nav {
      color: $middle-blue;
    }
  }

  a,
  img {
    &:hover {
      cursor: pointer;
    }
  }
}

.nav-1 {
  display: flex;
  align-items: center;
  z-index: 1100;
  a {
    margin-left: 20px;
    margin-right: 20px;
    @media all and (max-width: 767px) {
      display: none;
    }
  }

  img {
    margin-right: 20px;
  }
}
</style>
