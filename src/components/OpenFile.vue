<template>
    <div class="folder" :class="{ hide: !file.open }">
        <div class="folder-header">
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
export default {
    props: {
        file: Object
    }
}
</script>

<style scoped>
.folder-header {
    width: 100%;
    padding: 5px;
    cursor: pointer;
    display: flex;
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
}

.hide {
    display: none;
    opacity: 0;
}
</style>