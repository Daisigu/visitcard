<template>
    <div class="main">
        <div class="files-container" @click.self="setFilesUnactive()">
            <File v-for="file, key in files" :file="file" @dblclick="openFile(key, file.id)" @click="fileActive(key)">
                {{ file.title }}
            </File>
           
        </div>
    </div>
</template>

<script>
import File from '@/components/File.vue';
import { mapActions, mapState } from 'vuex';

export default {

    components: { File },
    methods: {
        ...mapActions([
            'setFilesUnactive'
        ]),
        fileActive(key) {
            this.files.forEach((item) => {
                item.active = false
            })
            this.files[key].active = true
        },
        openFile(key, fileId) {
            let doc = document.getElementById(fileId);

            let folders = document.getElementsByClassName('folder')
            for (let item of folders) {
                item.style.zIndex = 1
            }
            doc.style.zIndex = 999
            this.files[key].open = true
        },

    },
    computed: {
        ...mapState([
            'files'
        ])
    },

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