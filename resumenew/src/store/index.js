import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    profile: {},
    creative: [],
    edu: [],
    portfolio: [],
    works: [],
    links: [],
    postslist: [],
    postlink:"",
    fl:'bn'
  },
  actions: {
    initData({commit}) {
      commit('INIT_DATA');
    },
    langEn({commit}) {
      commit('LANG_EN')
    },
    langRu({commit}) {
      commit('LANG_RU')
    },
    loadPage({commit}) {
      commit('LOAD_PAGE')
    },
    loadPosts({commit}) {
      commit('LOAD_POSTS')
    },
    setLink({commit}, link) {
      commit('SET_LINK', link)
    }
  },
  mutations: {
    SET_LINK(state, link) {
      state.postlink = link;
    },
    LOAD_POSTS(state) {
      var xhr = new XMLHttpRequest();
      //posts list
      xhr.open("GET", "https://ivanshavliuga.github.io/pages/pages.json", false);
      xhr.send();
      state.postslist =  window.JSON.parse(xhr.responseText);
    },
    LOAD_PAGE(state) {
      var xhr = new XMLHttpRequest();
      //page
      xhr.open("GET", state.postlink, false);
      xhr.send();
      state.fl = xhr.responseText;
    },
    LANG_RU(state) {
      var xhr = new XMLHttpRequest();
      //profile
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/profile.json", false);
      xhr.send();
      state.profile = window.JSON.parse(xhr.responseText);
      //creative
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/creative.json", false);
      xhr.send();
      state.creative = window.JSON.parse(xhr.responseText);
      //education
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/edu.json", false);
      xhr.send();
      state.edu = window.JSON.parse(xhr.responseText);
      //portfolio
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/portfolio.json", false);
      xhr.send();
      state.portfolio = window.JSON.parse(xhr.responseText);
      //works
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/works.json", false);
      xhr.send();
      state.works = window.JSON.parse(xhr.responseText);
      // liks
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/links.json", false);
      xhr.send();
      state.links = window.JSON.parse(xhr.responseText);
    },
    LANG_EN(state) {
      var xhr = new XMLHttpRequest();
      //profile
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/en/profile.json", false);
      xhr.send();
      state.profile = window.JSON.parse(xhr.responseText);
      //creative
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/en/creative.json", false);
      xhr.send();
      state.creative = window.JSON.parse(xhr.responseText);
      //education
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/en/edu.json", false);
      xhr.send();
      state.edu = window.JSON.parse(xhr.responseText);
      //portfolio
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/en/portfolio.json", false);
      xhr.send();
      state.portfolio = window.JSON.parse(xhr.responseText);
      //works
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/en/works.json", false);
      xhr.send();
      state.works = window.JSON.parse(xhr.responseText);
      // liks
      xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/en/links.json", false);
      xhr.send();
      state.links = window.JSON.parse(xhr.responseText);
    },
   INIT_DATA(state) {
     var xhr = new XMLHttpRequest();
     //profile
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/profile.json", false);
     xhr.send();
     state.profile = window.JSON.parse(xhr.responseText);
     //creative
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/creative.json", false);
     xhr.send();
     state.creative = window.JSON.parse(xhr.responseText);
     //education
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/edu.json", false);
     xhr.send();
     state.edu = window.JSON.parse(xhr.responseText);
     //portfolio
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/portfolio.json", false);
     xhr.send();
     state.portfolio = window.JSON.parse(xhr.responseText);
     //works
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/works.json", false);
     xhr.send();
     state.works = window.JSON.parse(xhr.responseText);
     // liks
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/ru/links.json", false);
     xhr.send();
     state.links = window.JSON.parse(xhr.responseText);
   }
 },
 getters: {
   profile: state=>{return state.profile},
   creative: state=>{return state.creative},
   edu: state=>{return state.edu},
   portfolio: state=>{return state.portfolio},
   works: state=>{return state.works},
   links: state=>{return state.links},
   postslist: state=>{return state.postslist},
   fl: state=>{return state.fl}
 }
})
