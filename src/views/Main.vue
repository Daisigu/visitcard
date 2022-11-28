<template>
    <div class="main">
        <FileContainer :direction="'column'" @click.self="setFilesUnactive()">
            <File v-for="file in files" :key="file.id" :file="file" :arr="files">
                <template v-slot:title>
                    {{ file.title }}
                </template>
            </File>
        </FileContainer>

        <OpenFile v-for="file in files" :file="file" :key="file.id">

            <File v-for="f in file.filesArray" :file="f" :arr="file.filesArray" :key="f.id">
                <template v-slot:title>
                    {{ f.title }}
                </template>
            </File>

            <OpenFile v-for="f in file.filesArray" :file="f" :key="f.id">

            </OpenFile>
        </OpenFile>
    </div>

</template>

<script>
import File from '@/components/File.vue';
import FileContainer from '@/components/FileContainer.vue';
import OpenFile from '@/components/OpenFile.vue';
import Spinner from '@/components/UI-elements/spinner.vue';
import { mapActions, mapState } from 'vuex';

export default {

    components: { File, FileContainer, OpenFile, Spinner },
    methods: {
        ...mapActions([
            'setFilesUnactive',
            'fileActive',
        ]),


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
</style>