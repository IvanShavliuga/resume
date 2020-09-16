<template lang="pug">
div
  include sections/header
  main
    include sections/nav
    section
      h2 My posts
      .works
        article(v-for="(p,k) in posts" :key="k" style="width:80%" :id="'article-'+k")
          h3 {{p.title}}
          a(@click="pselect(p.link)" rel="noopener" target="_blank") {{p.title}}
          span {{p.category}}
  include sections/footer
  </template>
<script>
export default {
  name: 'Portfolio',
  data() {
    return {
      profile: {},
      education:[],
      work: [],
      portfolio:[],
      creative:[],
      social: [],
      posts: []
    }
  },
  created() {
    this.$store.dispatch('loadPosts')
    this.fl = this.$store.getters.fl;
    this.profile = this.$store.getters.profile;
    this.social = this.$store.getters.links;
    this.work = this.$store.getters.works;
    this.portfolio = this.$store.getters.portfolio;
    this.creative = this.$store.getters.creative;
    this.education = this.$store.getters.edu;
    this.posts = this.$store.getters.postslist;
  },
  methods: {
    pselect(link) {
      this.$store.dispatch('setLink', link);
      this.$router.push('/Post')
    }
  }
}
</script>
