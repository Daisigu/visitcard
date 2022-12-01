<template>
    <Teleport to="body">
        <div class="folder" :class="{ hide: !file.open }" :id="file.id" @click.stop="upZIndex(file.id)"
            @click.self="setFilesInactive()">
            <drag-and-drop :file="file">
                <div class="folder-header" @dblclick="fullSizeWindow(file.id)">
                    <div class="folder-header__title">
                        <span>{{ file.title }}</span>
                    </div>
                    <div class="folder-header__app-controls">
                        <div v-if="!file.windowed">
                            <span v-if="!fullSize" class="app-controls-item" @click="fullSizeWindow(file.id)">
                                <i class="bi bi-square"></i>
                            </span>
                            <span class="app-controls-item" v-else @click="smallSizeWindow(file.id)">
                                <i class="bi bi-window-stack"></i>
                            </span>
                        </div>
                        <span class="app-controls-item x" @click="closeWindow(file.id);">
                            <i class="bi bi-x-lg"></i>
                        </span>
                    </div>
                </div>
            </drag-and-drop>
            <div class="folder-body" @click.self="setFilesInactive()">
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
import DragAndDrop from './DragAndDrop.vue';
import File from './File.vue';
import FileContainer from './FileContainer.vue';
export default {
    components: { File, FileContainer, DragAndDrop, DallE, Chat, AboutMe, Tetris },
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
            "setFilesInactive"
        ]),

        upZIndex() {
            let doc = document.getElementById(this.file.id);
            let folders = document.getElementsByClassName("folder");
            for (let item of folders) {
                item.style.zIndex = 1;
            }
            doc.style.zIndex = 999;
        },
        fullSizeWindow() {
            if (!this.file.windowed) {
                let doc = document.getElementById(this.file.id);
                this.fullSize = true;
                doc.classList.add('fullSizeWindow')
            }
        },
        smallSizeWindow() {
            let doc = document.getElementById(this.file.id);
            doc.classList.remove('fullSizeWindow')
            this.fullSize = false;
        },
        closeWindow() {
            this.file.open = false;
        }
    },
    computed: {
        ...mapState([
            "files"
        ])
    },
    mounted() {

    }

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

.fullSizeWindow {
    width: 100vw !important;
    height: 100vh !important;
    top: 0 !important;
    left: 0 !important;
}

.folder-body {
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    align-content: flex-start;
    position: absolute;
    width: 100%;
    padding-bottom: 2rem;
    overflow: auto;
    flex-direction: row;
}

.folder-header__title {
    display: flex;
    align-items: center;
    margin-left: 10px;
}

.app-controls-item.x:hover {
    background-color: rgb(238, 93, 93);
}

.app-controls-item {
    padding: 8px 26px;
}

.app-controls-item:hover {
    transition: all 0.2s ease;
    background-color: #5cd0f7;
}

.folder-header__app-controls {
    display: flex;
    align-items: center;
}

.folder:has(.tetris) {
    width: 800px;
    height: 770px;
    resize: none;
}

.folder {
    min-width: 500px;
    min-height: 500px;
    max-width: 100%;
    max-height: 100%;
    border: 1px solid lightgray;
    top: 150px;
    left: 400px;
    overflow: hidden;
    resize: auto;

    position: fixed;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: white;
    z-index: 999999;
}

.hide {
    z-index: -999;
    transform: translate(-642px, 818px);
    transition: all 0.5s ease;
    opacity: 0;
}
</style>