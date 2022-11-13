import { createStore } from "vuex";

export default createStore({
  state: {
    files: [
      {
        title: "My project",
        active: false,
        src: "https://eeerik.com/apps/Portfolio/portfolio.svg",
        open: false,
      },
      {
        title: "tetris.exe",
        active: false,
        src: "https://eeerik.com/apps/Portfolio/portfolio.svg",
        open: false,
      },
      {
        title: "Something.config",
        active: false,
        src: "https://eeerik.com/apps/Portfolio/portfolio.svg",
        open: false,
      },
      {
        title: "Something.config",
        active: false,
        src: "https://eeerik.com/apps/Portfolio/portfolio.svg",
        open: false,
      },
      
    ],
  },
  getters: {
  },
  mutations: {},
  actions: {},
  modules: {},
});
