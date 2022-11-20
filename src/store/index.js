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
        filesArray: [
          {
            title: "chat1.exe",
            active: false,
            src: "http://localhost:8080/img/chat.93c789ef.svg",
            open: false,
            id: 123,
          },
          {
            title: "chat12.exe",
            active: false,
            src: "http://localhost:8080/img/chat.93c789ef.svg",
            open: false,
            id: 321,
          },
        ],
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
      state.files.forEach((item) => {
        item.active = false;
        item.filesArray ? item.filesArray.forEach(i => i.active=false) : 0
      });
    },
  },
  actions: {
    setFilesUnactive({ commit, state }) {
      commit("setFilesUnactive");
    },
    fileActive({ commit, state }, args) {
      const fileId = args[0];
      const arr = args[1];
      state.files.forEach(i=>{
        i.active=false
        i.filesArray ? i.filesArray.forEach(i=>i.active=false) : 0
      })
      const el = arr.find((el) => el.id == fileId);
      el.active = true;
    },
    openFile({ commit, state }, args) {
      const fileId = args[0];
      const arr = args[1];
      let doc = document.getElementById(fileId);
      const found = arr.find((element) => element.id == fileId);
      found.open = true;
      let folders = document.getElementsByClassName("folder");
      for (let item of folders) {
        item.style.zIndex = 1;
      }
      doc.style.zIndex = 999;
    },
  },
  modules: {},
});
