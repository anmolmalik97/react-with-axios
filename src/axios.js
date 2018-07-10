import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://jsonplaceholder.typicode.com/'
})
//also interceptors use instance.interceptors--- so on

export default instance;