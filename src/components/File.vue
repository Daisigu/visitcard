<template>
    <div class="file-wrapper">
        <div class="file" :class="{ 'active': fileActive }"
            :style="'background: url('+img+');'">

        </div>
        <div class="file-label">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        fileActive: Boolean,
        img: String,
    }
}
</script>

<style scoped>
.file {
    cursor: pointer;
    background: blue;

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
    width: 150px;
    height: 150px;
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
    font-size: 10px;
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