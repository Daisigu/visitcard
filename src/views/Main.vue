<template>
    <div class="main">
        <FileContainer @click.self="setFilesUnactive()">
            <File :file="files[0]" @dblclick="openFile(files[0].id)" @click="fileActive(files[0].id)">
                <template v-slot:title>
                    {{ files[0].title }}
                </template>
            </File>
            <File :file="files[2]" @dblclick="openFile(files[2].id)" @click="fileActive(files[2].id)">
                <template v-slot:title>{{ files[2].title }}</template>
            </File>
            <File :file="files[3]" @dblclick="openFile(files[3].id)" @click="fileActive(files[3].id)">
                <template v-slot:title>{{ files[3].title }}</template>
            </File>
        </FileContainer>
    </div>
</template>

<script>
import File from '@/components/File.vue';
import FileContainer from '@/components/FileContainer.vue';
import { mapActions, mapState } from 'vuex';

export default {

    components: { File, FileContainer },
    methods: {
        ...mapActions([
            'setFilesUnactive'
        ]),
        fileActive(fileId) {
            this.files.forEach((item) => {
                item.active = false
            })
            const el = this.files.find(el => el.id == fileId)
            el.active = true
        },
        openFile(fileId) {
            let doc = document.getElementById(fileId);
            const found = this.files.find(element => element.id == fileId);
            found.open = true
            let folders = document.getElementsByClassName('folder')
            for (let item of folders) {
                item.style.zIndex = 1
            }
            doc.style.zIndex = 999
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
    margin-top: 5rem;
    margin-left: 5rem;
}
</style>