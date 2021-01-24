class Errors {
    constructor() {
        this.errors = {};
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
        else {
            return '';
        }
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        delete this.errors[field];
    }

    any() {
        return Object.keys(this.errors).length > 0
    }
}

class Form {
    constructor(data) {
        this.originalData = data;
        this.errors = new Errors();
        this.isSubmit = false;

        for (let field in data) {
            this[field] = data[field];
        }
    }

    data() {
        let data = {};
        for (let field in this.originalData) {
            data[field] = this[field];
        }

        return data;
    }

    clear() {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }

    submit(requestType, url) {
        this.isSubmit = true;
        axios[requestType](url, this.data())
            .then((response) => {
                this.isSubmit = false;
                this.clear();
                alert('Sccuss');
            })
            .catch((error) => {
                this.isSubmit = false;
                this.errors.record(error.response.data.errors);
            });
    }
}

new Vue({
    el: '#app',

    data: {
        form: new Form({
            name: '',
            description: ''
        })
    },

    methods: {
        onSubmit() {
            console.log('Submit');
            this.form.submit('post', '/projects');
        }
    }
})
