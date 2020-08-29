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
    links: []
  },
  actions: {
    initData({commit}) {
      commit('INIT_DATA');
    }
  },
  mutations: {
   INIT_DATA(state) {
     var xhr = new XMLHttpRequest();
     //profile
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/profile.json", false);
     xhr.send();
     state.profile = window.JSON.parse(xhr.responseText);
     //creative
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/creative.json", false);
     xhr.send();
     state.creative = window.JSON.parse(xhr.responseText);
     //education
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/edu.json", false);
     xhr.send();
     state.edu = window.JSON.parse(xhr.responseText);
     //portfolio
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/portfolio.json", false);
     xhr.send();
     state.portfolio = window.JSON.parse(xhr.responseText);
     //works
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/works.json", false);
     xhr.send();
     state.works = window.JSON.parse(xhr.responseText);
     // liks
     xhr.open("GET", "https://ivanshavliuga.github.io/resume/api/links.json", false);
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
   links: state=>{return state.links}
 }
})
