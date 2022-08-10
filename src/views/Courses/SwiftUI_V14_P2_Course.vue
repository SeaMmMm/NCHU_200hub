<template>
  <CourseTemplate :contents="contents" where="swiftui_v14_02_course" />
</template>

<script>
import CourseTemplate from "@/views/Courses/CourseTemplate.vue";

export default {
  async created() {
    this.contents = await this.getcartoonUrl();
  },
  components: { CourseTemplate },
  data() {
    return {
      contents: [],
    };
  },
  methods: {
    async getcartoonUrl() {
      const index = Number(this.$route.query.index);
      this.index = index;
      const query = `{
        swiftUiV14P2Collection(where: {AND: [{index: ${index} }]}) {
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
        return response.data.swiftUiV14P2Collection.items;
      } catch (error) {
        throw new Error("Could not receive the data from Contentful!");
      }
    },
  },
};
</script>
