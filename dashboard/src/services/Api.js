import axios from 'axios'

const url = 'http://localhost:9999/api';

export default function api() {
	return axios.create({
		baseURL: url
	});
}
