<template>
    <Teleport to="body">
        <div class="folder" :class="{ hide: !file.open }" :id="file.id" @click.stop="upZindex(file.id)"
        @click.self="setFilesUnactive()">
        <div class="folder-header" @mousedown.prevent="drag(file.id)" @mousemove="draging(file.id)" @mouseup="drop()"
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
        <div class="folder-body">
            <slot></slot>
        </div>
    </div>
    </Teleport>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import File from './File.vue';
import FileContainer from './FileContainer.vue';
export default {
    components: { File, FileContainer },
    props: {
        file: Object,
    },
    data() {
        return {
            dragUp: false,
            fullSize: false,
        };
    },
    methods: {
        ...mapActions([
            "setFilesUnactive"
        ]),
        drag() {
            this.dragUp = true;
        },
        draging(fileId) {
            if (this.dragUp) {
                let doc = document.getElementById(fileId);
                doc.style.position = "fixed";
                doc.style.left = event.clientX - 250 + "px";
                doc.style.width = "500px";
                doc.style.height = "500px";
                doc.style.top = event.clientY - 20 + "px";
                doc.style.transition = "none";
                this.fullSize = false;
                this.upZindex(fileId);
            }
        },
        drop() {
            this.dragUp = false;
            let folders = document.getElementsByClassName("folder");
            for (let item of folders) {
                item.style.transition = "all 0.3s ease";
            }
        },
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
    padding: 1rem;
    display: flex;
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
    width: 500px;
    border: 1px solid lightgray;
    top: 150px;
    left: 400px;
    height: 500px;
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