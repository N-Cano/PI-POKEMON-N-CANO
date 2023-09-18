const validate = (payload) => {
    if (!Array.isArray(payload.type)) {
        throw new Error('type debe ser array');
    }
}

module.exports = validate