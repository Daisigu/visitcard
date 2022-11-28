import { createStore } from "vuex";

export default createStore({
  state: {
    files: [
      {
        title: "background.exe",
        active: false,
        src: require('@/assets/project.svg'),
        open: false,
        id: Date.now() * Math.random(),
        component: 'dall-e'
      },
      {
        title: "My projects",
        active: false,
        src: require('@/assets/project.svg'),
        open: false,
        id: Date.now() * Math.random(),
        filesArray: [
          
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
          {
            title: "MyProjectV2.docx",
            active: false,
            src: require('@/assets/project.svg'),
            open: false,
            id: Date.now() * Math.random(),
          },
        ],
      },
      {
        title: "chat.exe",
        active: false,
        src: require('@/assets/chat.svg'),
        open: false,
        id: Date.now() * Math.random(),
        component: 'chat'
      },
      {
        title: "aboutme.docx",
        active: false,
        src: require('@/assets/portfolio.svg'),
        open: false,
        id: Date.now() * Math.random(),
        component: 'about-me'
      },
      {
        title: "tetris.exe",
        active: false,
        src: require('@/assets/tetris.svg'),
        open: false,
        id: Date.now() * Math.random(),
        component: 'tetris',
        windowed: true,
      },
      
    ],
  },
  getters: {},
  mutations: {
    setFilesUnactive(state) {
      state.files.forEach((item) => {
        item.active = false;
        item.filesArray
          ? item.filesArray.forEach((i) => (i.active = false))
          : 0;
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
      state.files.forEach((i) => {
        i.active = false;
        i.filesArray ? i.filesArray.forEach((i) => (i.active = false)) : 0;
      });
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
