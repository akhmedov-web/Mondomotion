"use strict";


const app = Vue.createApp({

    data() {
        return {count: 0}
    },

    methods: {
        sendMessage() {
            console.log(this.count)
        }
    },

    mounted() {
        this.sendMessage();
    }


});


app.mount('#root')
