<template>
    <div class="dall-e-file">
        <Spinner :fullscreen="true" :show="true"></Spinner>
        <h1 class="dall-e-title">Generate your background </h1>
        <textarea class="dall-e-textarea" type="text" v-model="promptValue">
        </textarea>
        <div>
            <button class="dall-e-button" @click="generateImage()">Set background</button>
            <button class="dall-e-button" @click="resetBackground()">Reset</button>
        </div>
    </div>
</template>

<script>
import { Configuration, OpenAIApi } from "openai";
import Spinner from "../UI-elements/spinner.vue";
const configuration = new Configuration({
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
export default {
    data() {
        return {
            promptValue: "",
            imageUrl: "",
        };
    },
    methods: {
        async generateImage() {
            const res = await openai.createImage({
                prompt: this.promptValue,
                n: 1,
                size: "1024x1024",
            });
            this.imageUrl = res.data.data[0].url;
            document.body.style.backgroundImage = "url(" + this.imageUrl + ")";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundSize = "cover";
            this.promptValue = "";
        },
        resetBackground() {
            document.body.style.backgroundImage = "";
        }
    },
    components: { Spinner }
}
</script>


<style  scoped>
.dall-e-file {
    width: 100%;
    height: 100%;
    background-color: #424242;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: hsl(230, 100%, 95%);
    background: linear-gradient(135deg, hsl(230, 40%, 12%), hsl(230, 20%, 7%));
}

.dall-e-textarea {
    --outline-color: #ab79d6;
    background-color: #424242;
    border: 2px solid;
    border-radius: 4px;
    color: #c5c5ce;
    font: inherit;
    padding: 0 0.5em;
    width: 90%;
    height: 30%;
    font-size: 25px;
    resize: none;
}

.dall-e-button {
    margin-top: 1rem;
    cursor: pointer;
    margin-right: 1rem;
}

.dall-e-title {
    animation: lights 5s 750ms linear infinite;
    margin-bottom: 1rem;
}

@keyframes lights {
    0% {
        color: hsl(230, 40%, 80%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.2),
            0 0 0.125em hsla(320, 100%, 60%, 0.3),
            -1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
            1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

    30% {
        color: hsl(230, 80%, 90%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.5),
            0 0 0.125em hsla(320, 100%, 60%, 0.5),
            -0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
            0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    40% {
        color: hsl(230, 100%, 95%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.5),
            0 0 0.125em hsla(320, 100%, 90%, 0.5),
            -0.25em -0.125em 0.125em hsla(40, 100%, 60%, 0.2),
            0.25em 0.125em 0.125em hsla(200, 100%, 60%, 0.4);
    }

    70% {
        color: hsl(230, 80%, 90%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.5),
            0 0 0.125em hsla(320, 100%, 60%, 0.5),
            0.5em -0.125em 0.25em hsla(40, 100%, 60%, 0.2),
            -0.5em 0.125em 0.25em hsla(200, 100%, 60%, 0.4);
    }

    100% {
        color: hsl(230, 40%, 80%);
        text-shadow:
            0 0 1em hsla(320, 100%, 50%, 0.2),
            0 0 0.125em hsla(320, 100%, 60%, 0.3),
            1em -0.125em 0.5em hsla(40, 100%, 60%, 0),
            -1em 0.125em 0.5em hsla(200, 100%, 60%, 0);
    }

}

button,
button::after {
    width: 169px;
    height: 56px;
    font-size: 17px;
    background: linear-gradient(45deg, transparent 5%, #FF013C 5%);
    border: 0;
    font-family: 'Nova', monospace;
    color: #fff;
    letter-spacing: 2px;
    line-height: 17px;
    box-shadow: 6px 0px 0px #00e6f6;
    outline: transparent;
    position: relative;
}

button::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: '1234124124124';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 3%, #00E6F6 3%, #00E6F6 5%, #FF013C 5%);
    text-shadow: -3px -3px 0px #F8F005, 3px 3px 0px #00E6F6;
    clip-path: var(--slice-0);
}

button:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
}

@keyframes glitch {
    0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
    }

    10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
    }

    20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
    }

    30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
    }

    40% {
        clip-path: var(--slice-2);
        transform: translate(-5px, 0px);
    }

    50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0px);
    }

    60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
    }

    70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
    }

    80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
    }

    90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
    }

    100% {
        clip-path: var(--slice-1);
        transform: translate(0);
    }
}
</style>