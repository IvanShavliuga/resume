<template lang="pug">
div
  include sections/header
  main
    include sections/nav
    section(v-html="fl")
  include sections/footer
</template>
<script>
export default {
  name: 'Post',
  data() {
    return {
      fl:"none"
    }
  },
  created() {
    this.fl = this.$store.getters.fl;
    this.profile = this.$store.getters.profile;
    this.social = this.$store.getters.links;
    this.work = this.$store.getters.works;
    this.portfolio = this.$store.getters.portfolio;
    this.creative = this.$store.getters.creative;
    this.education = this.$store.getters.edu;
  }
}
</script>
