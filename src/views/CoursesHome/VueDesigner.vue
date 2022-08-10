<template>
  <div>
    <CoursehomeTemplate
      query="vueForDesignerCollection"
      where="vue_desingers_course"
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
