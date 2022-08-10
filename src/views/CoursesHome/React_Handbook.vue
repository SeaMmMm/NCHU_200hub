<template>
  <div>
    <CoursehomeTemplate
      query="reactHookHandbookCollection"
      where="react_handbook_course"
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
