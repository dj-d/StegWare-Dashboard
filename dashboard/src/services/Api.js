import axios from 'axios'

const url = 'http://127.0.0.1:3333/api';

export default function api() {
	return axios.create({
		baseURL: url
	});
}
