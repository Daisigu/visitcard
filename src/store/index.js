import { createStore } from "vuex";

export default createStore({
  state: {
    files: [
      {
        title: "My project",
        active: false,
        src: "https://eeerik.com/apps/Portfolio/portfolio.svg",
        open: false,
        id: Date.now()*Math.random(),
      },
      {
        title: "tetris.exe",
        active: false,
        src: "https://eeerik.com/apps/Portfolio/portfolio.svg",
        open: false,
        id: Date.now()*Math.random(),
      },
      {
        title: "Something.config",
        active: false,
        src: "https://eeerik.com/apps/Portfolio/portfolio.svg",
        open: false,
        id: Date.now()*Math.random(),
      },
      {
        title: "Something.config",
        active: false,
        src: "https://eeerik.com/apps/Portfolio/portfolio.svg",
        open: false,
        id: Date.now()*Math.random(),
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
