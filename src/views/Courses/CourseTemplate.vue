<template>
  <div
    class="reactC"
    :class="{
      'light-background': !isDarkMode,
      'dark-background': isDarkMode,
    }"
  >
    <div class="backgroundWrap">
      <div class="Background"></div>
      <img
        class="waves course1"
        :src="
          require('@/assets/waves/certificate-wave' + this.randomWave5 + '.svg')
        "
        style="top: -40px; filter: blur(60px)"
      />
      <img
        class="waves course2"
        :src="require('@/assets/waves/hero-wave' + this.randomWave3 + '.svg')"
        style="top: 200px"
      />
      <img
        class="waves course3"
        :src="
          require('@/assets/waves/testimonial-wave' + this.randomWave5 + '.svg')
        "
        style="top: 300px"
      />
      <img
        class="waves course4"
        src="@/assets/waves/certificate-lines.svg"
        style="top: 450px"
      />
    </div>
    <div class="CourseWrapper">
      <div class="CourseHeroWrapper">
        <div
          v-show="this.index !== 1"
          style="position: absolute"
          class="prevPageButton"
          @click="prevPage"
        >
          <ChangePage :url="require('@/assets/icons/previous_page.svg')" />
        </div>
        <div
          v-show="this.index !== this.total"
          style="position: absolute"
          class="nextPageButton"
          @click="nextPage"
        >
          <ChangePage :url="require('@/assets/icons/next_page.svg')" />
        </div>
        <img
          v-if="contents[0].illustration"
          :src="contents[0].illustration.url"
          :alt="url"
          class="Illustration"
        />
        <h1
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          class="Title"
        >
          {{ contents[0].title }}
        </h1>
        <p
          :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }"
          class="Description"
        >
          {{ contents[0].description }}
        </p>
        <PurchaseButton v-show="!isPro" style="margin: 40px" />
        <div class="UpperButton" @click="gotoHeader">
          <ChangePage :url="require('@/assets/icons/previous_page.svg')" />
        </div>
      </div>
    </div>
    <div v-show="isPro" class="Coding">
      <slot></slot>
      <markdown-it-vue :content="contents[0].content" />
    </div>
  </div>
</template>

<script>
import MarkdownItVue from "markdown-it-vue";

import PurchaseButton from "@/components/button/PurchaseButton.vue";
import ChangePage from "@/components/button/ChangePage.vue";

export default {
  inject: ["reload"],
  async created() {
    this.total = Number(this.$route.query.total);
    this.index = Number(this.$route.query.index);

    if (window.localStorage.getItem("email") !== null) {
      this.isPro = true;
    }

    this.randomWave3 = Math.floor(Math.random() * 3 + 1);
    this.randomWave5 = Math.floor(Math.random() * 4 + 1);

    if (document.body.clientWidth < 900) {
      this.isOnComputer = false;
    }
  },
  components: { MarkdownItVue, PurchaseButton, ChangePage },
  props: {
    contents: Array,
    where: String,
  },
  data() {
    return {
      index: 0,
      total: 0,
      isPro: false,
      randomWave3: 1,
      randomWave5: 1,
      isOnComputer: true,
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    gotoHeader() {
      window.scrollTo(0, 0);
    },
    prevPage() {
      if (this.index > 1) {
        this.index--;
        this.$router.push({
          place: this.where,
          query: {
            index: this.index,
            total: this.total,
          },
        });
        this.reload();
      }
    },
    nextPage() {
      if (this.index < this.total) {
        this.index++;
        this.$router.push({
          name: this.where,
          query: {
            index: this.index,
            total: this.total,
          },
        });
        location.reload();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/global-styles/mixin.scss";
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.UpperButton {
  transform: rotate(90deg);
  position: fixed;
  right: 40px;
  bottom: 100px;
  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
  @media (max-width: 900px) {
    right: 0px;
    bottom: 100px;
    transform: scale(0.9) rotate(90deg);
  }
}

.ChangePageButton {
  visibility: hidden;
}
.prevPageButton {
  z-index: 1200;
  left: -50%;
  top: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
    top: 40%;
    left: 0;
  }
}
.nextPageButton {
  z-index: 1000;
  right: -40%;
  top: 50%;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (max-width: 900px) {
    top: 40%;
    left: 80%;
  }
}

.reactC {
  overflow-x: hidden;
}

.backgroundWrap {
  position: relative;
  .waves {
    position: absolute;
    width: 100%;
    z-index: 10;
  }
  .Background {
    position: absolute;
    width: 100vw;
    height: 400px;
    background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
    z-index: 10;
  }
  .course1 {
    @media (max-width: 900px) {
      top: 0px !important;
      transform: scale(0.5);
      left: -430px;
    }
  }
  .course2 {
    @media (max-width: 900px) {
      top: 200px !important;
      transform: scale(0.5);
      filter: blur(30px);
      left: -430px;
    }
  }
  .course3 {
    @media (max-width: 900px) {
      top: 300px !important;
      transform: scale(0.5);
      left: -430px;
    }
  }
  .course4 {
    @media (max-width: 900px) {
      top: 350px !important;
      transform: scale(0.5);
      left: -540px;
    }
  }
}
.Coding {
  z-index: 1100;
  margin-top: 20%;
  @media (max-width: 900px) {
    margin-top: 120px;
  }
}

.CourseWrapper {
  margin-top: 100px;
  display: grid;
  justify-content: center;
  text-align: center;
}
.CourseHeroWrapper {
  z-index: 1000;
  display: grid;
  justify-items: center;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 40px;
  position: relative;
}
.Illustration {
  padding-top: 140px;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}
.Title {
  max-width: 500px;
  margin: 0 auto;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  @media (max-width: 900px) {
    font-size: 30px;
    line-height: 35px;
  }
  line-height: 72px;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.3);
}
.Description {
  max-width: 600px;
  margin: 0 auto;
  font-style: normal;
  font-size: 20px;
  line-height: 140%;
  mix-blend-mode: normal;
  @media (max-width: 900px) {
    font-size: 15px;
  }
}
</style>
