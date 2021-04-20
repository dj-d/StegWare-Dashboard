import Api from "./Api";

export default {
	fetchDevices () {
		return Api().get('devices')
	},
	activate (device, payload_id) {
		let data = {
			payload_id: payload_id,
			device: device
		};
		return Api().post('devices', data)
	}
}
