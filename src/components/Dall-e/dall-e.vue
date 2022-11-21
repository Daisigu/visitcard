<template>
    <div class="dall-e-file">

        <textarea type="text" v-model="inp">
        </textarea>
        <button @click="generateImage()"> gen</button>
        <img :src="imageUrl" alt="" class="resultImage">
    </div>
</template>

<script>
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
export default {
    data() {
        return {
            inp: '',
            imageUrl: '',
        }
    },
    methods: {
        async generateImage() {
            const res = await openai.createImage({
                prompt: this.inp,
                n: 1,
                size: "1024x1024",
            });
            this.imageUrl = res.data.data[0].url
            document.body.style.backgroundImage = 'url(' + this.imageUrl + ')'
            document.body.style.backgroundPosition = "center"
            document.body.style.backgroundSize = "cover"
        }
    }
}
</script>


<style  scoped>
.dall-e-file {
    width: 100%;
    height: 100%;
    background-color: aqua;
}
</style>