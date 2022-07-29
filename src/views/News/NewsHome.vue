<template>
  <div class="manage">
    <div class="backgroundWrap">
      <div class="Background"></div>
      <img
        class="waves"
        src="@/assets/waves/tutorial-wave4.svg"
        style="top: 100px"
      />
      <img
        class="waves"
        src="@/assets/waves/certificate-wave3.svg"
        style="top: 350px"
      />
      <img
        class="waves"
        src="@/assets/waves/certificate-wave2.svg"
        style="top: 550px"
      />
    </div>
    <div class="container">
      <div class="cards">
        <div class="SearchBox">
          <div class="inputWrapper">
            <el-select v-model="value" clearable placeholder="请选择">
              <el-option
                style="color: black"
                v-for="item in options"
                :key="item"
                :value="item"
              >
              </el-option>
            </el-select>
            <input
              style="z-index: 1100"
              type="text"
              v-model="searchText"
              class="SearchButton"
              placeholder="搜索"
            />
            <img
              src="@/assets/icons/search-dark.svg"
              @click="Search"
              alt="search"
            />
          </div>
        </div>
        <template v-for="(content, index) in contents">
          <transition
            :key="content.title"
            appear
            appear-active-class="animate__animated animate__zoomIn"
            leave-active-class="animate__animated animate__zoomOut"
          >
            <a
              v-show="content"
              class="card"
              :style="
                'cursor: pointer; z-index: 1000;' +
                'animation-delay:' +
                (index + 1) * 0.3 +
                's'
              "
              :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
              @click="gotoNews(content.url)"
            >
              <img
                v-if="content.media[0]"
                :src="content.media[0]['media-metadata'][2].url"
                class="card-header"
                :class="{
                  'light-header': !isDarkMode,
                  'dark-header': isDarkMode,
                }"
              />
              <h3
                style="font-size: 30px"
                :class="{ dark: !isDarkMode, light: isDarkMode }"
                class="NewsTitle"
              >
                {{ content.title }}
              </h3>
              <p
                :class="{
                  'light-text': isDarkMode,
                  'dark-text': !isDarkMode,
                }"
                class="NewsDescription"
              >
                {{ content.abstract }}
              </p>
              <div
                :class="{
                  'light-text': isDarkMode,
                  'dark-text': !isDarkMode,
                }"
                style="padding-top: 16px"
              >
                FACET:
              </div>
              <div :key="item" v-for="item in content.des_facet">
                <p
                  :class="{
                    'light-text': isDarkMode,
                    'dark-text': !isDarkMode,
                  }"
                  class="facet"
                >
                  {{ item }}
                </p>
              </div>
              <div class="NewsFooter">
                <p>{{ content.byline }}</p>
                <p>{{ content.published_date }}</p>
              </div>
            </a>
          </transition>
        </template>
        <template v-for="(content, index) in searchContents">
          <transition
            :key="content.title"
            appear
            appear-active-class="animate__animated animate__zoomIn"
            leave-active-class="animate__animated animate__zoomOut"
          >
            <a
              v-show="content"
              class="card"
              :style="
                'cursor: pointer; z-index: 1000;' +
                'animation-delay:' +
                (index + 1) * 0.3 +
                's'
              "
              :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
              @click="gotoNews(content.web_url)"
            >
              <img
                v-if="content.multimedia[0]"
                :src="`https://static01.nyt.com/${content.multimedia[0].url}`"
                class="card-header"
                :class="{
                  'light-header': !isDarkMode,
                  'dark-header': isDarkMode,
                }"
              />
              <h3
                style="font-size: 30px"
                :class="{ dark: !isDarkMode, light: isDarkMode }"
                class="NewsTitle"
              >
                {{ content.headline.main }}
              </h3>
              <p
                :class="{
                  'light-text': isDarkMode,
                  'dark-text': !isDarkMode,
                }"
                class="NewsDescription"
              >
                {{ content.abstract }}
              </p>
              <p
                :class="{
                  'light-text': isDarkMode,
                  'dark-text': !isDarkMode,
                }"
                class="NewsDescription2"
              >
                {{ content.lead_paragraph }}
              </p>
              <div class="NewsFooter">
                <p>{{ content.byline.original }}</p>
                <p>{{ content.pub_date.substring(0, 10) }}</p>
              </div>
            </a>
          </transition>
        </template>
        <template v-for="(content, index) in sortContents">
          <transition
            :key="content.title"
            appear
            appear-active-class="animate__animated animate__zoomIn"
            leave-active-class="animate__animated animate__zoomOut"
          >
            <a
              v-show="content"
              class="card"
              :style="
                'cursor: pointer; z-index: 1000;' +
                'animation-delay:' +
                (index + 1) * 0.3 +
                's'
              "
              :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
              @click="gotoNews(content.web_url)"
            >
              <img
                v-if="content.multimedia[0]"
                :src="content.multimedia[0].url"
                class="card-header"
                :class="{
                  'light-header': !isDarkMode,
                  'dark-header': isDarkMode,
                }"
              />
              <h3
                style="font-size: 30px"
                :class="{ dark: !isDarkMode, light: isDarkMode }"
                class="NewsTitle"
              >
                {{ content.title }}
              </h3>
              <p
                :class="{
                  'light-text': isDarkMode,
                  'dark-text': !isDarkMode,
                }"
                class="NewsDescription"
              >
                {{ content.abstract }}
              </p>
              <div class="NewsFooter">
                <p>{{ content.byline }}</p>
                <p>{{ content.published_date.substring(0, 10) }}</p>
              </div>
            </a>
          </transition>
        </template>
      </div>
    </div>
    <img
      class="waves"
      src="@/assets/waves/courses-wave4.svg"
      style="top: 750px"
    />
  </div>
</template>

<script>
import axios from "axios";

import Courses from "@/views/Courses/ReactCourses.vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
export default {
  name: "Team",
  components: {
    Courses,
  },
  data() {
    return {
      value: "",
      options: [
        "arts",
        "automobiles",
        "books",
        "business",
        "fashion",
        "food",
        "health",
        "home",
        "insider",
        "magazine",
        "movies",
        "nyregion",
        "obituaries",
        "opinion",
        "politics",
        "realestate",
        "science",
        "sports",
        "sundayreview",
        "technology",
        "theater",
        "t-magazine",
        "travel",
        "upshot",
        "us",
        "world",
      ],
      searchText: "",
      currentScroll: 0,
      contents: [],
      searchContents: [],
      sortContents: [],
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  created() {
    this.$message({
      message: "本网页需 vpn 才能正常访问",
      type: "warning",
    });
    axios
      .get(
        "https://api.nytimes.com/svc/mostpopular/v2/emailed/30.json?api-key=eco48CkOZ9zfzvSUDH5AMeUcvFUdmP7V"
      )
      .then((res) => {
        this.contents = res.data.results;
        // console.log("===contents===", this.contents);
      })
      .catch((error) => {
        this.$notify.error({
          title: "错误",
          message: error.message,
        });
      });
  },
  watch: {
    value(newValue) {
      this.contents = null;
      this.searchContents = null;
      axios
        .get(
          `https://api.nytimes.com/svc/topstories/v2/${newValue}.json?api-key=eco48CkOZ9zfzvSUDH5AMeUcvFUdmP7V`
        )
        .then((res) => {
          this.sortContents = res.data.results;
        })
        .catch((error) => {
          this.$notify.error({
            title: "错误",
            message: error.message,
          });
        });
    },
  },
  methods: {
    gotoNews(url) {
      window.open(url);
    },
    Search() {
      this.contents = null;
      this.sortContents = null;
      this.searchContents = null;
      const searchText = this.searchText;
      axios
        .get(
          `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchText}&api-key=eco48CkOZ9zfzvSUDH5AMeUcvFUdmP7V`
        )
        .then((res) => {
          this.searchContents = res.data.response.docs;
          console.log(this.searchContents);
        })
        .catch((error) => {
          this.$notify.error({
            title: "错误",
            message: error.message,
          });
        });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

.NewsFooter {
  display: grid;
  grid-template-rows: auto auto;
  padding: 16px;
}
.NewsTitle {
  font-family: nyt-cheltenham-cond, nyt-cheltenham, georgia, "times new roman",
    times, serif;
}
.NewsDescription {
  font-family: nyt-imperial, georgia, "times new roman", times, serif;
}
.NewsDescription2 {
  font-family: nyt-imperial, georgia, "times new roman", times, serif;
  font-size: 10px;
  font-weight: normal;
}
.facet {
  font-size: 10px;
}
.SearchBox {
  z-index: 900;
  position: absolute;
  right: 0;
  .SearchButton {
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
    &:focus {
      box-shadow: 0px 20px 40px rgba(147, 231, 221, 0.3);
      border-radius: 30px;
      border: 0.5px solid #9eecd9;
    }
  }
}

.inputWrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 100px 160px 30px;
    align-items: default;
    justify-items: default;
    gap: 15px;
  }
  gap: 20px;
  img {
    transform: scale(0.8);
    padding: 20px;
    border-radius: 50px;
    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border: 0.5px solid rgba(255, 255, 255, 0.2);
      box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }
}

.backgroundWrap {
  position: relative;
  .waves {
    position: absolute;
    z-index: 10;
  }
  .Background {
    position: absolute;
    width: 100%;
    height: 100vh;
    background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
    z-index: 10;
  }
}
.illustration {
  width: 700px;
  @media (max-width: 900px) {
    width: 350px;
  }
}
.manage {
  height: 100vh;
  overflow-x: hidden;
}
.container {
  padding-left: 15%;
  padding-right: 10%;
  z-index: 1000;
}

.cards {
  margin: 0 -20px;
  margin-top: 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
  position: relative;
}

.card {
  width: 100%;
  max-width: 330px;
  border-radius: 10px;
  margin: 20px;
  margin-top: 100px;
}

.light-card {
  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(103, 110, 144, 0.15);
  &:hover {
    box-shadow: 0 4px 4px rgba(103, 110, 144, 0.05),
      0 2px 2px rgba(103, 110, 144, 0.05);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 20px 40px;
  &:hover {
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25);
  }
}

.card-header {
  width: 100%;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-gray;
}

.dark-header {
  background: #283049;
}

h1 {
  margin-top: 40px;
}

h3 {
  margin-bottom: 16px;
}

h3.dark {
  @include heading-3($black);
}

h3.light {
  @include heading-3($white);
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}
</style>
