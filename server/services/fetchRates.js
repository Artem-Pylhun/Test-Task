const axios = require('axios');

async function fetchRates(baseCurrency) {
    const options = {
        method: 'GET',
        url: 'https://exchange-rate-api1.p.rapidapi.com/convert',
        params: {
            base: baseCurrency,
            target: 'UAH' // Specify the target currency as UAH
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
            'X-RapidAPI-Host': 'exchange-rate-api1.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const { base, target, rate } = response.data.convert_result;
        const { time_utc } = response.data.time_update;
        var current_rate = rate;
        const parsedData = {
            base,
            target,
            time_utc,
            current_rate
        };
        return parsedData;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error to be handled by the caller
    }
}

module.exports = fetchRates;