<template lang="pug">
div
  include sections/header
  main
    include sections/nav
    include sections/articles
  include sections/footer
</template>
<script>
export default {
  name: 'Ru',
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
    this.$store.dispatch('langRu')
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
