import axios from 'axios'

export default() => {
	return axios.create({
		baseURL: 'http://192.168.0.246:9999/api'
	})
}
