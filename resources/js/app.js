// import Vue from 'Vue'
import axios from 'axios'
import Form from './core/Form'
import Example from './components/Example'

window.axios = axios
window.Form = Form

Vue.component('coupon', {
    props: ['code'],

    template: `
        <input type="text" :value ="code"
        @input="updateCode($event.target.value)"/>
    `,

    methods: {
        updateCode (code) {
            this.$emit('input', code);
        }
    }
});

new Vue({
    el: '#app',

    data: {
        coupon: 'FREEBIE'
    }
})

// new Vue({
//     el: '#app',

//     components: {
//         Example
//     },

//     data: {
//         form: new Form({
//             name: '',
//             description: ''
//         })
//     },

//     methods: {
//         onSubmit() {
//             console.log('Submit');
//             this.form.submit('post', '/projects')
//                 .then(data => console.log(data))
//                 .catch(errors => console.log(errors));
//         }
//     }
// })
