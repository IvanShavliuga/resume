<template lang="pug">
div
  include sections/header
  span text
  main
    include sections/nav
    include sections/articles
  include sections/footer
</template>
<script>
export default {
  name: 'Home',
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
    this.$store.dispatch('initData')
    this.profile = this.$store.getters.profile;
    this.social = this.$store.getters.links;
    this.work = this.$store.getters.works;
    this.portfolio = this.$store.getters.portfolio;
    this.creative = this.$store.getters.creative;
    this.education = this.$store.getters.edu;
    this.fl = this.$store.getters.fl;
  }
}
</script>
