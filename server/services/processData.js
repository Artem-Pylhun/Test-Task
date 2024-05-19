const fetchRates = require('./fetchRates');
const Rate = require('../models/rate');

async function processData() {
    try {
        // Fetch data for USD to UAH
        const usdToUahData = await fetchRates('USD');
        console.log('USD to UAH data:', usdToUahData);

        await Rate.create({
            currency: usdToUahData.base,
            date: usdToUahData.time_utc,
            rate: usdToUahData.current_rate
        });

        // Fetch data for EUR to UAH
        const eurToUahData = await fetchRates('EUR');
        console.log('EUR to UAH data:', eurToUahData);

        await Rate.create({
            currency: eurToUahData.base,
            date: eurToUahData.time_utc,
            rate: eurToUahData.current_rate
        });

        console.log('Data stored successfully.');
    } catch (error) {
        console.error('Error storing data:', error);
    }
}

module.exports = processData;
