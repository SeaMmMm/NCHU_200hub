<template>
  <div>
    <Header />
    <div
      class="container"
      :class="{
        'light-background': !isDarkMode,
        'dark-background': isDarkMode,
      }"
    >
      <Notification v-if="hasText" :text="text" />
      <!-- <RequestAccount /> -->
      <div class="recover">
        <MessionCard ref="mession" class="mession" />
        <div ref="Blur" id="pop" style="display: none"></div>
        <img src="@/assets/svg/DCHQ.svg" v-show="isDarkMode" />
        <img src="@/assets/svg/DCHQ-dark.svg" v-show="!isDarkMode" />
        <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
          重置账户
        </h4>
        <form @submit.prevent="onSubmit">
          <input
            type="email"
            placeholder="Email"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="email"
            required
          />
          <button style="cursor: pointer">发送邮件</button>
        </form>
        <router-link
          to="/signin"
          :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
          >已经有一个账号啦?🤩 戳我登陆</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// import RequestAccount from "@/components/RequestAccount";
import Header from "@/components/Headers/Header.vue";
import MessionCard from "@/components/iframes/logOutAlert/MessionCard.vue";
import Notification from "@/components/iframes/logOutAlert/Notification.vue";
import { auth } from "@/main";

export default {
  name: "Recover",
  components: {
    Header,
    MessionCard,
    Notification,
    // RequestAccount,
  },
  data() {
    return {
      email: null,
      hasText: false,
      text: "",
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    onSubmit() {
      const email = this.email;
      this.hasText = false;

      this.$refs.mession.showLoading();
      this.$refs.Blur.style.display = "block";

      auth
        .requestPasswordRecovery(email)
        .then(() => {
          this.$router.push({
            name: "signin",
            params: {
              userRecoveredAccount: true,
              email: email,
            },
          });
        })
        .catch((error) => {
          this.$refs.mession.shoutDown();
          this.$refs.Blur.style.display = "none";
          this.hasText = true;
          this.text = "sorry，邮箱不存在/请求出错";
        });
    },
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.recover {
  width: 400px;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
  position: relative;
}
.mession {
  position: absolute;
  display: none;
  @media (max-width: 1800px) {
    top: -60px;
    left: 60px;
  }
  @media (max-width: 900px) {
    transform: scale(0.8);
    left: 6px;
    top: -100px;
  }
}
</style>
