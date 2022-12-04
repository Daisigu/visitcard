<template>
    <div class="chat">
        <div class="empty-messages" v-if="messages.length == 0">
            <h1>Type something to get response</h1>
        </div>
        <div v-else class="messages scrollGray" ref="messagesEl">
            <transition-group name="list">
                <div v-for="message in messages" class="message-bubble" :key="message.id"
                    :class="[{ 'message-text-left': message.label == 'left' }, { 'message-text-right': message.label == 'right' }]">
                    <div class="message-text">
                        {{ message.message }}
                    </div>
                </div>
            </transition-group>
            <div class="typing message-text-left" v-if="loading">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>

        <div class="new-message-wrapper">
            <input ref="messageInput" placeholder="Message..." class="new-message-input" v-model.trim="messageQuery"
                type="text" @keyup.enter="send()">
            <button :disabled="messageQuery < 1" class="new-message-send-button" @click="send()"><i
                    class="bi bi-send"></i></button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {

    data() {
        return {
            messageQuery: '',
            messages: [],
            loading: false,
        }
    },
    methods: {
        async send() {
            try {
                if (this.messageQuery.length > 0) {
                    let query = this.messageQuery
                    this.messageQuery = ''
                    this.messages.push({
                        label: 'right',
                        message: query,
                        id: Date.now() * Math.random()
                    })
                        this.scrollDown();
                    this.loading = true;
                    this.messageQuery = '';
                    const res = await axios({
                        method: 'POST',
                        url: 'https://yandex.ru/lab/api/yalm/text3',
                        headers: {
                            Accept: '*/*',
                            'Content-Type': 'application/json',
                        },
                        data: {
                            filter: 1,
                            intro: 0,
                            query: query
                        }
                    })
                    this.messages.push({
                        label: 'left',
                        message: res.data.text,
                        id: Date.now() * Math.random()
                    })
                    this.loading = false;
                    this.scrollDown()
                }

            } catch (e) {
                alert(e);
                this.loading = false;
            }
        },
        scrollDown() {
            setTimeout(() => {
                const el = this.$refs.messagesEl
                console.log(el);
                el.scroll({ top: el.scrollHeight, behavior: "smooth" })
            })
        }
    },
}

</script>
<style scoped>
.chat {

    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(66, 66, 66);
    padding: 1rem 1rem 1rem 1rem;
}

.typing {
    align-items: center;
    display: flex;
    height: 17px;
    top: -39px;
    left: 10px;
    background-color: rgb(82, 87, 219);
    padding: 1rem;
    border-radius: 15px 15px 15px 0;
}

.typing .dot {
    animation: mercuryTypingAnimation 1.8s infinite ease-in-out;
    background-color: #ffffff;
    border-radius: 50%;
    height: 7px;
    margin-right: 4px;
    vertical-align: middle;
    width: 7px;
    display: inline-block;
}

.typing .dot:nth-child(1) {
    animation-delay: 200ms;
}

.typing .dot:nth-child(2) {
    animation-delay: 300ms;
}

.typing .dot:nth-child(3) {
    animation-delay: 400ms;
}

.typing .dot:last-child {
    margin-right: 0;
}

@keyframes mercuryTypingAnimation {
    0% {
        transform: translateY(0px);
        background-color: #9e9e9e;
    }

    28% {
        transform: translateY(-7px);
        background-color: #656565;
    }

    44% {
        transform: translateY(0px);
        background-color: #323232;
    }
}

.messages {
    display: flex;
    flex-direction: column;
    overflow: auto;
    overflow-x: hidden;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    padding-right: 1rem
}

.empty-messages {
    color: rgba(255, 255, 255, 0.625);
    text-align: center;
    margin-top: 5rem;
    font-size: 25px;
}

.message-bubble {
    margin: 0.5rem 0;
    display: flex;
    width: fit-content;
    line-height: 1.25;
    max-width: 75%;
    padding: 0.5rem 0.875rem;
    position: relative;
    word-wrap: break-word;
}

.message-text-left {
    display: flex;
    border-radius: 1.15rem 1.15rem 1.15rem 0;
    align-self: flex-start;
    background-color: rgb(82, 87, 219);
}


.message-text-right {
    display: flex;
    align-self: flex-end;
    border-radius: 1.15rem 1.15rem 0 1.15rem;
    background-color: rgb(41, 41, 41);
}

.message-text {
    color: white;
    overflow-wrap: anywhere;
}


.new-message-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    position: sticky;
    bottom: 0;
}

.new-message-input {
    height: 45px;
    padding: 0.5rem;
    border: none;
    border-radius: 15px;
    color: white;
    outline: inherit;
    margin-right: 1rem;
    flex: 1 1 auto;
    background: rgb(98, 94, 94);
}

.new-message-send-button {
    height: 45px;
    background-color: rgb(150, 103, 194);
    color: white;
    width: 50px;
    border-radius: 50px;
    border: none;
    outline: none;

}

.new-message-send-button:disabled {
    opacity: 0.6;
    pointer-events: none;
}

.new-message-send-button:hover {
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: rgb(115, 71, 156);
}

.bi-send {
    font-size: 20px;
}

.scrollGray::-webkit-scrollbar {
    width: 5px;
    background: #64646452;
}

.scrollGray::-webkit-scrollbar-track {
    border-radius: 15px;
    -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 50%);
    background: #9b9b9b;
}

.scrollGray::-webkit-scrollbar-thumb {
    border-radius: 15px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    background: white;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>