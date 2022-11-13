<template>
    <div class="main">
        <div class="files-container">
            <File v-for="file, key in files" :open="file.open" :img="file.src" :fileActive="file.active" @click="fileActive(key)">
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
                    src: 'https://eeerik.com/apps/Portfolio/portfolio.svg',
                    open: false,
                },
                {
                    title: 'tetris.exe',
                    active: false,
                    src: 'https://eeerik.com/apps/Portfolio/portfolio.svg',
                    open: false,
                },
                {
                    title: 'Something.config',
                    active: false,
                    src: 'https://eeerik.com/apps/Portfolio/portfolio.svg',
                    open: false,
                },
                {
                    title: 'Something.config',
                    active: false,
                    src: 'https://eeerik.com/apps/Portfolio/portfolio.svg',
                    open: false,
                },

            ]
        }
    },
    components: { File },
    methods: {
        fileActive(key) {
            this.files.forEach((item) => {
                item.active = false
                item.open = false
            })
            this.files[key].active = true
            this.files[key].open = true

        }
    }
}
</script>

<style scoped>
.main {
    width: 100%;
}

.files-container {
    display: flex;
    margin-top: 5rem;
    margin-left: 5rem;
    flex-direction: column;
}
</style>