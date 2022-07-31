<template>
  <CourseTemplate :contents="contents" where="react_hooks">
    <div v-show="!showVideo" @click="showVideoToggle" class="palyVideo">
      <img class="playButton" src="@/assets/icons/Polygon.svg" alt="Polygon" />
    </div>
    <div v-show="showVideo">
      <iframe
        width="834"
        height="469"
        src="https://www.youtube.com/embed/40gzi4WbFk4?list=PLn8_GKQGufjkNQq7FGDggxxDWx-5Ujjhs"
        title="1  Intro to Advanced React Hooks"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        allowDrop
      ></iframe>
    </div>
  </CourseTemplate>
</template>

<script>
import CourseTemplate from "@/views/Courses/CourseTemplate.vue";

export default {
  async created() {
    this.contents = await this.getcartoonUrl();

    this.total = Number(this.$route.query.total);

    if (window.localStorage.getItem("email") !== null) {
      this.isPro = true;
    }

    this.randomWave3 = Math.floor(Math.random() * 3 + 1);
    this.randomWave5 = Math.floor(Math.random() * 4 + 1);

    if (document.body.clientWidth < 900) {
      this.isOnComputer = false;
    }
  },
  components: { CourseTemplate },
  data() {
    return {
      contents: [],
      showVideo: false,
    };
  },
  methods: {
    async getcartoonUrl() {
      const index = Number(this.$route.query.index);
      this.index = index;
      const query = `{
        reactHooksCollection(where: {AND: [{index: ${index} }]}) {
          items {
            title
            index
            description
            illustration{
              url
            }
            content
          }
        }
      }
      `;
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
        return response.data.reactHooksCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
    showVideoToggle() {
      this.showVideo = true;
      // console.log("clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.palyVideo {
  position: relative;
  width: 100px;
  height: 100px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  background: linear-gradient(
    180deg,
    rgba(24, 32, 79, 0.4) 0%,
    rgba(24, 32, 79, 0.25) 100%
  );
  border: 0.5px solid rgba(0, 0, 0, 0.3);
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  border-radius: 50px;
  @media (max-width: 900px) {
    transform: scale(0.6);
  }
  img {
    position: absolute;
    top: -5px;
    left: auto;
  }
}
</style>
