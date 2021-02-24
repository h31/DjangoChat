var app = new Vue({
    el: '#app',
    data: {
        messages: [],
        nickname: "",
        text: ""
    },
    methods: {
        timeFromDate: function (date) {
            // Source: https://stackoverflow.com/a/32741450
            return new Date(date).toLocaleTimeString(navigator.language, {
                hour: '2-digit',
                minute: '2-digit'
            })
        },
        sendMessage: function () {
            axios
                .post('/messages/', {
                    nickname: this.nickname,
                    text: this.text,
                    date: new Date().toJSON()
                })
            this.updateFunc()
        }
    },
    mounted() {
        this.updateFunc = () => axios
            .get('/messages/')
            .then(response => (this.messages = response.data))
            .catch(error => (alert(error)));
        this.updateFunc()
        this.intervalID = setInterval(this.updateFunc, 1000)
    },
    beforeDestroy() {
        clearInterval(this.intervalID)
    }
})
