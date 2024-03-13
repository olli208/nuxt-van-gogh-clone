<template>
  <div>
    <!-- page content transtition stuff -->
    <ScrollContainer :artObjects="loadedArtObjects" />
  </div>
</template>

<script>
import ScrollContainer from "@/components/ScrollContainer.vue";

export default {
  name: "HomePage",
  components: {
    ScrollContainer,
  },
  computed: {
    loadedArtObjects() {
      return this.$store.getters.loadedArtObjects;
    },
  },
};
</script>
