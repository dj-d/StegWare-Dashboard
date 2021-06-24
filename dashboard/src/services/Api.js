import axios from 'axios'

const url = 'http://0.0.0.0:9999/api';

export default function api() {
	return axios.create({
		baseURL: url
	});
}
