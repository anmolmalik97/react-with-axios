import axios from 'axios';

const instance = axios.create({
	baseURL: 'helloworld'
})
//also interceptors use instance.interceptors--- so on

export default instance;