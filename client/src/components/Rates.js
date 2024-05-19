import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Rates.css';

const Rates = () => {
    const [usdRates, setUsdRates] = useState([]);
    const [eurRates, setEurRates] = useState([]);

    useEffect(() => {
        const fetchRates = async () => {
            try {
                const apiUrl = `${process.env.REACT_APP_API_URL}:${process.env.REACT_APP_API_PORT}/${process.env.REACT_APP_API_ENDPOINT}`;
                const response = await axios.get(apiUrl);
                const data = response.data;
                console.log('API URL:', apiUrl);
                setUsdRates(data.filter(rate => rate.currency === 'USD'));
                setEurRates(data.filter(rate => rate.currency === 'EUR'));
            } catch (error) {
                console.error('Error fetching rates:', error);
            }
        };

        fetchRates();
    }, []);

    return (
        <div className="rates-container">
            <div className="table-container">
                <h2>USD to UAH Rates</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Currency</th>
                        <th>Date</th>
                        <th>Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {usdRates.map((rate, index) => (
                        <tr key={rate.id}>
                            <td>{index + 1}</td>
                            <td>{rate.currency}</td>
                            <td>{new Date(rate.date).toLocaleString()}</td>
                            <td>{rate.rate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <div className="table-container">
                <h2>EUR to UAH Rates</h2>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Currency</th>
                        <th>Date</th>
                        <th>Rate</th>
                    </tr>
                    </thead>
                    <tbody>
                    {eurRates.map((rate, index) => (
                        <tr key={rate.id}>
                            <td>{index + 1}</td> {/* Display row number */}
                            <td>{rate.currency}</td>
                            <td>{new Date(rate.date).toLocaleString()}</td>
                            <td>{rate.rate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Rates;
