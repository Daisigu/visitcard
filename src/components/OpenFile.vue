<template>
    <div class="folder" :class="{ hide: !file.open }" :id="file.id" @click.stop="upZindex(file.id)">
        <div class="folder-header" @mousedown.prevent="drag(file.id)" @mousemove="draging(file.id)" @mouseup="drop()">
            <div class="filder-header__title">
                <span>{{ file.title }}</span>
            </div>
            <div class="folder-header__func">
                <span>- O <span @click="file.open = false">X</span></span>
            </div>
        </div>
        <div class="folder-body">

        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    props: {
        file: Object,
    },
    data() {
        return {
            dragUp: false
        }
    },
    methods: {
        ...mapActions([
            'setFilesUnactive'
        ]),
        drag() {
            this.dragUp = true
        },
        draging(key) {
            if (this.dragUp) {
                console.log('mouse move');
                let doc = document.getElementById(key);
                doc.style.position = "absolute";
                doc.style.left = event.clientX - 250 + 'px';
                doc.style.top = event.clientY - 20 + 'px';
                let folders = document.getElementsByClassName('folder')
                for (let item of folders) {
                    item.style.zIndex = 1
                }
                doc.style.zIndex = 999
            }
        },
        drop() {
            this.dragUp = false
        },
        upZindex(key) {
            console.log('zindex');
            let doc = document.getElementById(key);
            let folders = document.getElementsByClassName('folder')
            for (let item of folders) {
                item.style.zIndex = 1
            }
            doc.style.zIndex = 999
        }
    },
    computed: {

    }
}
</script>

<style scoped>
.folder-header {
    width: 100%;
    padding: 5px;
    display: flex;
    cursor: pointer;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid lightgray;

}

.folder-header__func {
    align-self: end;
}

.folder {
    width: 500px;
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
}

.hide {
    display: none;
    opacity: 0;
}
</style>