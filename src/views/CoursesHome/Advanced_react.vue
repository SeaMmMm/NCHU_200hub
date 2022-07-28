<template>
  <div class="manage">
    <div class="backgroundWrap">
      <div class="Background"></div>
      <img
        class="waves"
        src="@/assets/waves/hero-wave1.svg"
        style="top: 100px; filter: blur(60px)"
      />
      <img
        class="waves"
        src="@/assets/waves/hero-wave2.svg"
        style="top: 350px"
      />
      <img
        class="waves"
        src="@/assets/waves/hero-wave3.svg"
        style="top: 550px"
      />
    </div>
    <div class="container">
      <div class="cards">
        <div class="SearchBox">
          <input
            style="z-index: 1100"
            type="text"
            v-model="searchText"
            class="SearchButton"
            placeholder="搜索"
          />
        </div>
        <template v-for="(content, index) in contentsTemplate">
          <a
            :key="content.title"
            class="card"
            :style="
              'cursor: pointer; z-index: 1000;' +
              'animation-delay:' +
              (index + 1) * 0.5 +
              's'
            "
            :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
            @click="goTeams(content.index, contents.length)"
          >
            <img
              :src="content.illustration.url"
              class="card-header"
              :class="{
                'light-header': !isDarkMode,
                'dark-header': isDarkMode,
              }"
            />
            <h3 :class="{ dark: !isDarkMode, light: isDarkMode }">
              {{ content.title }}
            </h3>
            <p
              :class="{
                'light-text': isDarkMode,
                'dark-text': !isDarkMode,
              }"
            >
              {{ content.description }}
            </p>
          </a>
        </template>
      </div>
    </div>
    <img
      class="waves"
      src="@/assets/waves/footer-wave1.svg"
      style="top: 750px"
    />
  </div>
</template>

<script>
import Courses from "@/views/Courses/ReactCourses.vue";
import "markdown-it-vue/dist/markdown-it-vue.css";
export default {
  name: "Team",
  components: {
    Courses,
  },
  data() {
    return {
      searchText: "",
      currentScroll: 0,
      contents: [],
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
    contentsTemplate() {
      if (this.searchText === "") {
        return this.contents;
      } else {
        return this.contents.filter((item) => {
          const lower = item.title.toLowerCase();
          return lower.includes(this.searchText.toLowerCase());
        });
      }
    },
  },
  async created() {
    this.contents = await this.getcartoonUrl();
    this.contents.sort((a, b) => {
      return a.index - b.index;
    });
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.currentScroll = window.pageYOffset; //表示当前滚动的位置
    },
    goTeams(index, total) {
      this.$router.push({
        name: "advanced_react_course",
        query: {
          index: index,
          total: total,
        },
      });
    },
    getcartoonUrl: async () => {
      const query = `{
        advancedReactCollection{
          items{
            illustration{
              url
            }
            index,
            title,
            description,
          }
        }
      }`;
      const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.VUE_APP_CONTENTFUL_SPACE_ID}/`;

      const fetchOptions = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      };

      try {
        const response = await fetch(fetchUrl, fetchOptions).then((response) =>
          response.json()
        );
        return response.data.advancedReactCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/global-styles/colors.scss";
@import "@/global-styles/typography.scss";

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
  max-width: 300px;
  height: 480px;
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
