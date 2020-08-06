import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.cypress.io'
})

instance.defaults.headers.common['Autorization'] = 'AUTH TOKEN from Instance';

export default instance;