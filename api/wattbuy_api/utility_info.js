const axios = require('axios');

module.exports = async function get_utility(address) {
    console.log('address', address)
    const options = {
        method: 'GET',
        url: 'https://apis.wattbuy.com/v3/electricity/info',
        params: {
            address: address.address,
            state: address.state,
            city: address.city,
            zip: address.zip
        },
        headers: {
            accept: 'application/json',
            'x-api-key': 'TcU5NGguAq5IxtuTjAlpIaGMTDujAHbJ4QmgRwkz'
        }
    };
    let result = await axios.request(options).then(function (response) {
        console.log('response -> ', response.data);
        return response.data;
    }).catch(function (err) {
        console.error(err);
        return {'error': err}
    });
    return result;
}