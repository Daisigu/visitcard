<template>
    <div v-if="show" class="loading-screen">
        <video src="@/assets/loading.mp4" autoplay muted></video>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: true
        }
    },
    mounted() {
        if (localStorage.getItem('loaded')) {
            this.show = false
        }
        setTimeout(() => {
            this.show = false
            localStorage.setItem('loaded', 'true');
        }, 13801)
    }
}
</script>

<style scoped>
.loading-screen {
    width: 100%;
    height: 100%;
}

.loading-screen video {
    width: 100%;
    height: 100%;
    object-fit: fill;
}

video::-webkit-media-controls {
    display: none !important;
}
</style>