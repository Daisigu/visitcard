<template>
    <div class="file-container">

        <div class="file-wrapper">
            <div class="file" :class="{ 'active': file.active }" :style="'background-image: url(' + file.src + ');'">
            </div>
            <div class="file-label">
                <slot name="title"></slot>
            </div>
        </div>
        <OpenFile :file="file">
            <slot name="content"></slot>
        </OpenFile>
    </div>
</template>

<script>
import OpenFile from './OpenFile.vue';

export default {
    data() {
        return {};
    },
    props: {
        file: Object,
    },
    components: { OpenFile },

}
</script>


<style scoped>
.file-container {
    width: 80px;
    margin-bottom: 40px;
    margin-right: 20px;
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
    top: 80px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-align: center;
    font-size: 13px;
    padding: 6px 6px 4px 6px;
    letter-spacing: 1.06px;
    line-height: 1px;
    margin-top: 15px;
    white-space: nowrap;
}

.file.active+.file-label {
    color: white;
    box-shadow: blue 0px 0px 0px 6px;
    background-color: blue;
}

.file.active {
    box-shadow: blue 0px 0px 0px 6px;
    background-color: blue;
}
</style>