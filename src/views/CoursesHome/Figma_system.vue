<template>
  <div>
    <CoursehomeTemplate
      query="figmaSystemCollection"
      where="figma_system_course"
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
