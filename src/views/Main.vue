<template>
    <div class="main">
        <div class="files-container" @click.self="setFilesUnactive()">
            <!--     <File v-for="file in files" :file="file" @dblclick="openFile(file.id)" @click="fileActive(file.id)">
                {{ file.title }}
            </File> -->
            <File :file="files[0]" @dblclick="openFile(files[0].id)" @click="fileActive(files[0].id)">
                <template v-slot:title>
                    {{ files[0].title }}
                </template>
                <template v-slot:content>
                    <File :file="files[4]" @dblclick="openFile(files[4].id)" @click="fileActive(files[4].id)">
                        <template v-slot:title>{{ files[4].title }}</template>
                    </File>
                </template>
            </File>

            <File :file="files[2]" @dblclick="openFile(files[2].id)" @click="fileActive(files[2].id)">
                <template v-slot:title>{{ files[2].title }}</template>
            </File>
            <File :file="files[3]" @dblclick="openFile(files[3].id)" @click="fileActive(files[3].id)">
                <template v-slot:title>{{ files[3].title }}</template>
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
}

.files-container {
    display: flex;
    margin-top: 5rem;
    margin-left: 5rem;
    flex-direction: column;
}
</style>