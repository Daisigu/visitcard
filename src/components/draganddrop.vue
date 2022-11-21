<template>
    <div @mousedown.prevent="drag(file.id)" @mousemove="draging(file.id)" @mouseup="drop()">
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dragUp: false,
            
        }
    },
    props: {
        file: Object,
    },
    methods: {
        drag() {
            this.dragUp = true;
        },
        upZindex(fileId) {
            let doc = document.getElementById(fileId);
            let folders = document.getElementsByClassName("folder");
            for (let item of folders) {
                item.style.zIndex = 1;
            }
            doc.style.zIndex = 999;
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
                this.upZindex(fileId);
               this.$parent.fullSize=false;
            }
        },
        drop() {
            this.dragUp = false;
            let folders = document.getElementsByClassName("folder");
            for (let item of folders) {
                item.style.transition = "all 0.3s ease";
            }
        },
    }
}
</script>

<style lang="scss" scoped>

</style>