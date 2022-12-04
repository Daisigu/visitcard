<template>
    <div class="chat">
        <div class="messages">
            <div v-for="message in messages" class="message-bubble" :class="[{ 'message-text-left': message.label == 'left' }]">
              <div class="message-text" >
                  {{ message.message }}
              </div>
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
  
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgb(66, 66, 66);
    padding: 1rem;
}
.messages{
    display: flex;
    flex-direction: column;
    overflow: auto;

}
.message-bubble{
    display: flex;
    justify-content: flex-end;
}
.message-text-left{
    justify-content: flex-start;
}
.message-text{
    color: white;
}
.message-bubble{
width: 100%;
}
.new-message-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
    background-color: rgb(150, 103, 194);    color: white;
    width: 50px;
    border-radius: 50px;
    border: none;

}
.new-message-send-button:hover{
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: rgb(115, 71, 156);
}
.bi-send{
    font-size: 20px;
}
</style>