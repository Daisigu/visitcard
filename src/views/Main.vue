<template>
    <div class="main">
        <div class="files-container">
            <File v-for="file, key in files" :img="file.src" :fileActive="file.active" @click="fileActive(key)">
                {{ file.title }}
            </File>
        </div>
    </div>
</template>

<script>
import File from '@/components/File.vue';

export default {
    data() {
        return {
            files: [
                {
                    title: 'My project',
                    active: false,
                    src: 'https://eeerik.com/apps/Portfolio/portfolio.svg'
                },
                {
                    title: 'tetris.exe',
                    active: false,
                    src: 'https://eeerik.com/apps/Portfolio/portfolio.svg'
                },
                {
                    title: 'Something.config',
                    active: false,
                    src: 'https://eeerik.com/apps/Portfolio/portfolio.svg'
                },

            ]
        }
    },
    components: { File },
    methods: {
        fileActive(key) {
            this.files.forEach((item) => {
                item.active = false
            })
            this.files[key].active = true

        }
    }
}
</script>

<style scoped>
.main {
    width: 100%;
    height: 100vh;
}

.files-container {
    display: flex;
    flex-direction: column;
}
</style>