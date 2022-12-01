import { createStore } from "vuex";

export default createStore({
  state: {
    files: [
      {
        title: "background.exe",
        active: false,
        src: require("@/assets/dall-e.png"),
        open: false,
        id: Date.now() * Math.random(),
        component: "dall-e",
      },
      {
        title: "My projects",
        active: false,
        src: require("@/assets/project.svg"),
        open: false,
        id: Date.now() * Math.random(),
        filesArray: [
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require("@/assets/project.svg"),
            open: false,
            id: Date.now() * Math.random(),
          },
        ],
      },
      {
        title: "chat.exe",
        active: false,
        src: require("@/assets/chat.svg"),
        open: false,
        id: Date.now() * Math.random(),
        component: "chat",
      },
      {
        title: "aboutMe.docx",
        active: false,
        src: require("@/assets/portfolio.svg"),
        open: false,
        id: Date.now() * Math.random(),
        component: "about-me",
      },
      {
        title: "tetris.exe",
        active: false,
        src: require("@/assets/tetris.svg"),
        open: false,
        id: Date.now() * Math.random(),
        component: "tetris",
        windowed: true,
      },
    ],
  },
  getters: {},
  mutations: {
    setFilesInactive(state) { //set all files  inactive
      state.files.forEach((item) => {
        item.active = false;
        item.filesArray
          ? item.filesArray.forEach((file) => (file.active = false))
          : 0;
      });
    },
    fileActive(state, { fileId, arr }) { //set picked file active and all others files inactive
      state.files.forEach((file) => {
        file.active = false;
        file.filesArray
          ? file.filesArray.forEach((file) => (file.active = false))
          : 0;
      });
      arr.find((el) => el.id == fileId).active = true;
    },
    openFile(state, { fileId, arr }) { //set picked file open
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
  actions: {
    setFilesInactive({ commit }) {
      commit("setFilesInactive");
    },
    fileActive({ commit, state }, { fileId, arr }) {
      commit("fileActive", { fileId, arr });
    },
    openFile({ commit }, { fileId, arr }) {
      commit("openFile", { fileId, arr });
    },
  },
});
