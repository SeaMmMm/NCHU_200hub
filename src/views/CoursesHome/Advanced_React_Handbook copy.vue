<template>
  <div>
    <CoursehomeTemplate
      query="advancedReactHandbookCollection"
      where="advanced_react_handbook_course"
    />
  </div>
</template>

<script>
import CoursehomeTemplate from "@/views/CoursesHome/CoursehomeTemplate.vue";
export default {
  components: {
    CoursehomeTemplate,
  },
};
</script>
