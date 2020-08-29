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
  name: 'App',
  data() {
    return {
      profile: {},
      name: "Ivan Shavliuga",
      geo:"Republic Belarus, Novopolotsk",
      prof:"junior Frontend developer",
      email:"iva.drakon.nov@gmail.com",
      github:"https://github.com/IvanShavliuga/",
      phone:"+375 ** *** ** 23",
      skills: [
        "html5","css3","scss","less","pug","Angular (beginners)","vue.js (2.x)","Vue-Router","Vuex","npm","Webpack",
        "Bootstrap (4.x)","EcmaScript (2015)","git","adaptive design"
      ],
      education:[{
        years: "2006-2011, 3.5 years",
        caption: "Polotsk state University",
        link:"https://psu.by",
        desc:"information technology software"
      },{
        years: "2018-2019",
        caption: "INTUIT (Free courses)",
        link:"https://intuit.ru",
        desc:"basic JavaScript, HTML, CSS"
      },{
        years: "2019 - now",
        caption: "GeekBrains (Free courses)",
        link:"https://geekbrains.ru",
        desc:"advanced JavaScript, HTML, CSS"
      },{
        years: "2020 - now",
        caption: "ITVDN (Free course landing page)",
        link:"https://itvdn.com",
        desc:"basic Pug, SCSS"
      }],
      work: [],
      portfolio:[],
      creative:[],
      social: []
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
  }
}
</script>

<style>
@import './assets/css/style.less'
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
