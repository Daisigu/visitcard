<template>
    <div class="file-container" @dblclick="openFile([file.id, arr])" @click="fileActive([file.id, arr])">
        <div class="file-wrapper">
            <div class="file" :class="{ 'active': file.active }"
                :style="'background-image: url(' + file.src + '); background-size: 70px'">
            </div>
            <div class="file-label">
                <slot name="title"></slot>
            </div>
        </div>
       
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import OpenFile from './OpenFile.vue';

export default {
    name: 'File',
    data() {
        return {};
    },
    props: {
        file: Object,
        arr: Array
    },
    methods: {
        ...mapActions([
            "openFile",
            "fileActive"
        ])
    },
    components: { OpenFile }
}
</script>
<style scoped>
.file-container {
    width: 80px;
    margin-bottom: 40px;
    margin-right: 40px;
    margin-left: 30px;
}

.file {
    cursor: pointer;
    background-position: 50%;
    background-position-y: 30%;
    background-repeat: no-repeat;
    margin: 10px;
    width: 70px;
    height: 70px;
}

.file-wrapper {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 80px;
    align-items: center;
}

.file-label {
    color: black;
    position: absolute;
    top: 95px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    display: block;
    font-size: 13px;
    letter-spacing: 1.06px;
    white-space: nowrap;
    width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.file.active+.file-label {
    color: white;
    white-space: normal;
    overflow-wrap: anywhere;
    text-overflow: none;
    box-shadow: blue 0px 0px 0px 6px;
    background-color: blue;
}

.file.active {
    box-shadow: blue 0px 0px 0px 6px;
    background-color: blue;
}
</style>