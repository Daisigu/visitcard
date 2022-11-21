<template>
    <div :style="'flex-direction:' + direction + ';'" class="files-container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        direction: String
    }
}
</script>
<style  scoped>
.files-container {
    display: flex;
    margin-top: 1rem;
    margin-left: 1rem;
    flex-direction: column;
}
</style>