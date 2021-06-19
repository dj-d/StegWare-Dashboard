import Api from './Api';

export default {
	fetchAttacks() {
		return Api().get('attack')
	},

	fetchAttack(attack_id) {
		return Api().get('attack?attack_id=' + attack_id)
	},

	deleteAttack(attack_id) {
		return Api().delete('attack?attack_id=' + attack_id)
	}
}
