<template lang="pug">
div
  include sections/header
  main
    iframe(width="100%" height="500px" src="https://ivanshavliuga.github.io/daisy/index.html")
  include sections/footer
</template>
<script>
export default {
  name: 'Post',
  data() {
    return {
      profile: {},
      education:[],
      work: [],
      portfolio:[],
      creative:[],
      social: [],
      fl:"none"
    }
  },
  created() {
    this.$store.dispatch('setLink', 'https://ivanshavliuga.github.io/daisy/index.html');
    this.$store.dispatch('loadPage')
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
