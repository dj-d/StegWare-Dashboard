import api from "./Api";

function fetchPayloads() {
    return api().get('/payload');
}

function fetchPayload(payload_id) {
    return api().get('/payload?payload_id=' + payload_id);
}

function createPayload(newPayload) {
    return api().post('/payload', newPayload);
}

function editPayload(payload_id, newPayload) {
    return api().put('/payload?payload_id=' + payload_id, newPayload);
}

function deletePayload(payload_id) {
    return api().delete('/payload?payload_id=' + payload_id);
}

const PayloadService = {
    fetchPayloads,
    fetchPayload,
    createPayload,
    editPayload,
    deletePayload
};

export default PayloadService;
