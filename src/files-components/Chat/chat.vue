<template>
    <div class="chat">
        <div class="messages">
            <div v-for="message in messages">
                {{ message }}
            </div>
        </div>
        <div class="new-message-wrapper">
            <input placeholder="Message..." class="new-message-input" v-model.trim="messageQuery" type="text">
            <button class="new-message-send-button" @click="send()"><i class="bi bi-send"></i></button>
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
        }
    },
    methods: {
        async send() {
            try {
                this.messages.push({
                    label: 'right',
                    message: this.messageQuery
                })
                this.loading = true;
                const res = await axios({
                    method: 'POST',
                    url: 'https://yandex.ru/lab/api/yalm/text3',
                    headers: {
                        Accept: '*/*',
                        'Content-Type': 'application/json',
                        Origin: 'https://yandex.ru',
                        Referer: 'https://yandex.ru/',
                    },
                    data: {
                        filter: 1,
                        intro: 0,
                        query: this.messageQuery
                    }
                })
                this.messageQuery = '';
                this.messages.push({
                    label: 'left',
                    message: res.data.text
                })
                this.loading = false;

            } catch (e) {
                alert(e);
                this.loading = false;
            }
        }
    }
}

</script>
<style scoped>
.chat {
    background-color: #424242;
    width: 100%;
    overflow: auto;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.new-message-wrapper {
    width: 100%;
    padding: 15px;
}

.new-message-input {
    width: 90%;
    height: 30px;
}

.new-message-send-button {
    width: 10%;
}
</style>