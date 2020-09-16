<template lang="pug">
div
  include sections/header
  span(style="color: #df45a1; background-color: #ccc") Device:  w={{w}} | h={{h}}
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
      h: 0,
      w: 0,
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
    this.h= window.innerHeight;
    this.w=window.innerWidth;
  }
}
</script>
