const axios = require('axios');

module.exports = async function get_electricy_usage_estimate(user_data) {
    const options = {
        method: 'GET',
        url: 'https://apis.wattbuy.com/v3/electricity/estimation',
        params: {
            address: user_data.address,
            city: user_data.city,
            state: user_data.state,
            zip: user_data.zip,
            year_built: user_data.year_built,
            bedrooms: user_data.bedrooms,
            bathrooms: user_data.bathrooms,
            sq_ft: user_data.area,
            stories: user_data.stories,
            house_type: user_data.house_type
        },
        headers: {
            accept: 'application/json',
            'x-api-key': 'TcU5NGguAq5IxtuTjAlpIaGMTDujAHbJ4QmgRwkz'
        }
    };

    let result = await axios.request(options).then(function (response) {
        console.log(response.data);
        return response.data;
    }).catch(function (err) {
        console.error(err);
        return { 'error': err };
    });
    return result;
}