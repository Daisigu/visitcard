<template>
    <div class="main">
        <FileContainer :direction="'column'" @click.self="setFilesUnactive()">
            <File v-for="file in files" :file="file" :arr="files">
                <template v-slot:title>
                    {{ file.title }}
                </template>
            </File>
        </FileContainer>

        <OpenFile v-for="file in files" :file="file">
        
                <File v-for="f in file.filesArray" :file="f" :arr="file.filesArray">
                    <template v-slot:title>
                        {{ f.title }}
                    </template>
                </File>
          
            <OpenFile v-for="f in file.filesArray" :file="f">

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
            'openFile'
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
    margin-top: 5rem;
    margin-left: 5rem;
}
</style>