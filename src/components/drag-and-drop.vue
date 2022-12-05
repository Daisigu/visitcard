<template>
    <div @mousedown.prevent="drag()" @mousemove="dragging($event)" @mouseup="drop()">
        <slot>
        
        </slot>
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
        upZIndex() {
            let doc = document.getElementById(this.file.id);
            let folders = document.getElementsByClassName("folder");
            for (let item of folders) {
                item.style.zIndex = 1;
            }
            doc.style.zIndex = 999;
        },
        dragging(e) {
            if (this.dragUp) {
                let doc = document.getElementById(this.file.id);
                doc.style.position = "fixed";
                doc.style.left = e.clientX - 250 + "px";
                doc.classList.remove('fullSizeWindow')
                doc.style.top = e.clientY - 20 + "px";
                this.upZIndex(this.file.id);
               this.$parent.fullSize=false;
            }
        },
        drop() {
            this.dragUp = false;
        },
    }
}
</script>

<style  scoped>

</style>