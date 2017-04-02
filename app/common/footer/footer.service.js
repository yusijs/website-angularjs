export class FooterService {
    constructor($http) {
        'ngInject';
        this.$http = $http;
    }

    postForm(message) {
        return this.$http.post('/api/mail').then(response => response.data);
    }
}