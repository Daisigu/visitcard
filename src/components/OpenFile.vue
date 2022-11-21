<template>
    <Teleport to="body">
        <div class="folder" :class="{ hide: !file.open }" :id="file.id" @click.stop="upZindex(file.id)"
        @click.self="setFilesUnactive()">
        <Draganddrop :file="file" >
            <div class="folder-header"
            @dblclick="fullSizeWindow(file.id)">
            <div class="filder-header__title">
                <span>{{ file.title }}</span>
            </div>
            <div class="folder-header__app-controlls">
                <span v-if="!fullSize" class="app-controlls-item" @click="fullSizeWindow(file.id)">
                    <i class="bi bi-square"></i>
                </span>
                <span class="app-controlls-item" v-else @click="smallSizeWindow(file.id)">
                    <i class="bi bi-window-stack"></i>
                </span>
                <span class="app-controlls-item x" @click="closeWindow(file.id); file.open=false">
                    <i class="bi bi-x-lg"></i>
                </span>
            </div>
        </div>
        </Draganddrop>
        <div class="folder-body">
            <slot></slot>
            <component :is="file.component"></component>
        </div>
        
    </div>
    
    
    </Teleport>
</template>

<script>

import { mapActions, mapState } from 'vuex';
import AboutMe from '@/files-components/AboutMe/about-me.vue'
import Tetris from '@/files-components/tetris/tetris.vue'

import Chat from '@/files-components/Chat/chat.vue';
import DallE from '@/files-components/Dall-e/dall-e.vue';
import Draganddrop from './draganddrop.vue';
import File from './File.vue';
import FileContainer from './FileContainer.vue';
export default {
    components: { File, FileContainer, Draganddrop, DallE, Chat, AboutMe, Tetris},
    props: {
        file: Object,
    },
    data() {
        return {
            fullSize: false,
        };
    },
    methods: {
        ...mapActions([
            "setFilesUnactive"
        ]),
      
        upZindex(fileId) {
            let doc = document.getElementById(fileId);
            let folders = document.getElementsByClassName("folder");
            for (let item of folders) {
                item.style.zIndex = 1;
            }
            doc.style.zIndex = 999;
        },
        fullSizeWindow(fileId) {
            let doc = document.getElementById(fileId);
            doc.style.width = "100vw";
            doc.style.height = "100vh";
            this.fullSize = true;
            doc.style.left = "0px";
            doc.style.top = "0px";
        },
        smallSizeWindow(fileId) {
            let doc = document.getElementById(fileId);
            doc.style.width = "500px";
            doc.style.height = "500px";
            doc.style.left = "200px";
            doc.style.top = "200px";
            this.fullSize = false;
        },
        closeWindow(fileId){
            let doc = document.getElementById(fileId);
            doc.style.width = "500px";
            doc.style.height = "500px";
        }
    },
    computed: {
        ...mapState([
            "files"
        ])
    },

}
</script>

<style scoped>
.folder-header {
    width: 100%;
    background-color: #c6f1ff;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;

}

.folder-body {
    display: flex;
    height: -webkit-fill-available;
    position: absolute;
    width: 100%;
    flex-direction: row;
}

.filder-header__title {
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.app-controlls-item.x:hover{
    background-color: rgb(238, 93, 93);
}
.app-controlls-item {
    padding: 8px 26px;
}

.app-controlls-item:hover {
    transition: all 0.2s ease;
    background-color: #5cd0f7;
}

.folder-header__app-controlls {
    display: flex;
    align-items: center;
}

.folder {
    min-width: 500px;
    min-height: 500px;
    max-width: 100%;
    max-height: 100%;
    border: 1px solid lightgray;
    top: 150px;
    left: 400px;
   
    position: fixed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: white;
    z-index: 999999;
    transition: all 0.3s ease;
}

.hide {
    z-index: -999;
    bottom: -2500px !important;
    left: -2500px !important;
    transform: translate(-542px, 518px);
    transition: all 0.5s ease;
    opacity: 0;
}
</style>