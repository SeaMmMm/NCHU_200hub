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
      <div ref="Blur" id="pop" style="display: none"></div>
      <LoadingCard ref="Load" style="display: none" class="onPhoneLoaing" />
      <Notification v-if="hasText" :text="text" />
      <div class="login">
        <RequestAccount />
        <img src="@/assets/svg/DCHQ.svg" v-show="isDarkMode" />
        <img src="@/assets/svg/DCHQ-dark.svg" v-show="!isDarkMode" />
        <h4 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
          登录到 NCHU_200hub
        </h4>
        <form @submit.prevent="onSubmit">
          <input
            type="email"
            placeholder="邮箱"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="email"
            required
          />
          <input
            type="password"
            placeholder="密码"
            :class="{ 'light-field': isDarkMode, 'dark-field': !isDarkMode }"
            v-model="password"
            required
          />
          <button style="cursor: pointer">Sign In</button>
        </form>
        <router-link
          to="/recover"
          :class="{ 'light-link': isDarkMode, 'dark-link': !isDarkMode }"
          >哟，又忘密码了</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import RequestAccount from '@/components/group/signIn/RequestAccount.vue'
import Notification from '@/components/iframes/logOutAlert/Notification.vue'
import Header from '@/components/Headers/Header.vue'
import LoadingCard from '@/components/iframes/logOutAlert/LoadingCard.vue'

import { auth } from '@/main'

export default {
  name: 'SignIn',
  components: {
    RequestAccount,
    Notification,
    Header,
    LoadingCard,
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: '',
    }
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode
    },
  },
  methods: {
    onSubmit() {
      const email = this.email
      const password = this.password
      this.hasText = false

      this.$refs.Load.showLoading()
      this.$refs.Blur.style.display = 'block'

      auth
        .login(email, password, true)
        .then(() => {
          window.localStorage.setItem('email', email)

          this.$refs.Load.shoutDown()
          this.$refs.Blur.style.display = 'none'

          this.$notify({
            title: '登陆成功',
            message: 'Welcome Home!!! 💃',
            type: 'success',
            duration: 1500,
          })

          this.$router.go(-1)
        })
        .catch(() => {
          this.$refs.Load.shoutDown()
          this.$refs.Blur.style.display = 'none'
          this.hasText = true
          this.text = '账号/密码有误 or 账号不存在'
        })
    },
  },
  mounted() {
    const params = this.$route.params

    if (params.userLoggedOut) {
      this.hasText = true
      this.text = '一曲离歌两行泪，不知何地再逢君👋🏿'
    } else if (params.userRecoveredAccount) {
      this.hasText = true
      this.text = `恢复邮件已发送给${params.email}`
    } else if (params.userRequestedAccount) {
      this.hasText = true
      this.text = `邮箱已发送，请前往${params.email}验证`
    }
  },
}
</script>

<style scoped lang="scss">
@import '@/global-styles/colors.scss';
@import '@/global-styles/typography.scss';
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding-top: 16px;
  padding-bottom: 24px;
  position: relative;
}
.onPhoneLoaing {
  @media (max-width: 900px) {
    transform: scale(0.9);
  }
}

.login {
  width: 400px;
  text-align: center;
  margin-left: 16px;
  margin-right: 16px;
  margin-top: 150px;
}

.github-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
#pop {
  background: rgba(52, 58, 65, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
