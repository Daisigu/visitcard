<template>
    <div class="folder" :class="{ hide: !open }">
        open folder
    </div>
</template>

<script>
export default {
    props: {
        open: Boolean
    }
}
</script>

<style scoped>
.folder {
    width: 500px;
    top: 150px;
    left: 400px;
    height: 500px;
    position: fixed;
    background-color: white;
}

.hide {
    display: none;
    opacity: 0;
}
</style>