<template>
    <div class="main">
        <div class="files-container">
            <File v-for="file, key in files" :file="file" :open="file.open" :img="file.src" :fileActive="file.active"
                @dblclick="openFile(key)" @click="fileActive(key)">
                {{ file.title }}
            </File>
        </div>
    </div>
</template>

<script>
import File from '@/components/File.vue';
import { mapState } from 'vuex';

export default {
    data() {
        return {

        }
    },
    components: { File },
    methods: {
        fileActive(key) {
            this.files.forEach((item) => {
                item.active = false
            })
            this.files[key].active = true
        },
        openFile(key) {
            this.files[key].open = true
        }
    },
    computed: {
        ...mapState([
            'files'
        ])
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