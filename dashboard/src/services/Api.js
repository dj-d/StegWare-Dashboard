import axios from 'axios'

const url = 'http://192.168.0.246:9999/api';

export default function api() {
	return axios.create({
		baseURL: url
	});
}
