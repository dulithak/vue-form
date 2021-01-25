import Errors from './Errors'

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

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }

        this.errors.clear();
    }

    submit(requestType, url) {
        this.isSubmit = true;

        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data.errors);
                    reject(error.response.data.errors);
                });
        });
    }

    onSuccess(data) {
        this.isSubmit = false;
        this.reset();
        alert('Success');
    }

    onFail(errors) {
        this.isSubmit = false;
        this.errors.record(errors);
    }
}

export default Form
