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
    fl:'bn'
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
     //profile
     xhr.open("GET", "https://ivanshavliuga.github.io/pages/gulp-first.html", false);
     xhr.send();
     state.fl = xhr.responseText;
   }
 },
 getters: {
   profile: state=>{return state.profile},
   creative: state=>{return state.creative},
   edu: state=>{return state.edu},
   portfolio: state=>{return state.portfolio},
   works: state=>{return state.works},
   links: state=>{return state.links},
   fl: state=>{return state.fl}
 }
})
