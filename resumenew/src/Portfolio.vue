<template lang="pug">
div
  include sections/header
  main
    include sections/nav
    section
      h2 Portfolio
      .works
        article(v-for="(p,k) in portfolio" :key="k" :id="'article-'+k")
          h3 {{p.title}}
          a(:href="p.sitelink" target="_blank") {{p.sitetitle}}
          span.linkprint {{p.sitelink}}
          p {{p.desc}}
          ul.skills
            li(v-for="(t,k1) in p.tech" :key="k+'_'+k1" :id="'tech-'+k1+'_'+k1") {{t}}
  include sections/footer
  </template>
<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      portfolio:[]
    }
  },
  created() {
    this.$store.dispatch('initData')
    this.portfolio = this.$store.getters.portfolio;
    this.profile = this.$store.getters.profile;
    this.social = this.$store.getters.links;
    this.work = this.$store.getters.works;
    this.creative = this.$store.getters.creative;
    this.education = this.$store.getters.edu;
  }
}
</script>
