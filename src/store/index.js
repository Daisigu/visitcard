import { createStore } from "vuex";

export default createStore({
  state: {
    files: [
      {
        title: "My project",
        active: false,
        src: "http://localhost:8080/img/project.898c0b61.svg",
        open: false,
        id: Date.now() * Math.random(),
      },
      {
        title: "chat.exe",
        active: false,
        src: "http://localhost:8080/img/chat.93c789ef.svg",
        open: false,
        id: Date.now() * Math.random(),
      },
      {
        title: "aboutme.docx",
        active: false,
        src: "http://localhost:8080/img/portfolio.4a8b87ea.svg",
        open: false,
        id: Date.now() * Math.random(),
      },
      {
        title: "tetris.exe",
        active: false,
        src: "http://localhost:8080/img/tetris.c7c1fc5f.svg",
        open: false,
        id: Date.now() * Math.random(),
      },
      {
        title: "doom.exe",
        active: false,
        src: "https://freepngimg.com/download/doom/35079-1-doom-file.png",
        open: false,
        id: Date.now() * Math.random(),
      },
    ],
  },
  getters: {},
  mutations: {
    setFilesUnactive(state) {
      state.files = state.files
    },
  },
  actions: {
    setFilesUnactive({ commit, state }) {
     state.files.forEach((item) => {
        item.active = false;
      });
      commit("setFilesUnactive");
    },
  },
  modules: {},
});
