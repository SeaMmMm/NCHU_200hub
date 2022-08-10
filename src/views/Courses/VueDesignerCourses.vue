<template>
  <CourseTemplate :contents="contents" where="vue_desingers_course">
    <Video
      src="https://www.youtube.com/embed/0oRcEBuEf5Y?list=PLn8_GKQGufjmi28UPM72xqcDjg46na88t"
    />
  </CourseTemplate>
</template>

<script>
import CourseTemplate from "@/views/Courses/CourseTemplate.vue";
import Video from "@/views/Courses/Video.vue";

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
  components: { CourseTemplate, Video },
  data() {
    return {
      contents: [],
    };
  },
  methods: {
    async getcartoonUrl() {
      const index = this.$route.query.index;
      this.index = Number(index);
      const query = `{
        vueForDesignerCollection(where: {AND: [{index: ${index} }]}) {
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
        return response.data.vueForDesignerCollection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
  },
};
</script>
