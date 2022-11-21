<template>
    <div :class="{'fullscreen': fullscreen}" v-if="show">
        <div class="loader show " >
        <svg class="circular" viewBox="25 25 50 50">
            <circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    </div>
    </div>
</template>

<script>
export default {
    props: {
        fullscreen: Boolean,
        show: Boolean,
    }
}
</script>

<style  scoped>
.loader {
    position: fixed;
    margin: 0 auto;
    width: 100px;
    display: none;

}
.fullscreen{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #ffffffd1;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.show{
    display: block;
}
.loader:before {
    content: '';
    display: block;
    padding-top: 100%;
}

.circular {
    animation: rotate 2s linear infinite;
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

.path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}

@keyframes dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }

    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }

    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}

@keyframes color {

    100%,
    0% {
        stroke: red;
    }

    40% {
        stroke: blue;
    }

    66% {
        stroke: green;
    }

    80%,
    90% {
        stroke: yellow;
    }
}
</style>