import axios from 'axios';

const API_KEY = import.meta.env.VITE_CMC_API_KEY;
const BASE_URL = 'https://pro-api.coinmarketcap.com/v2';

export const getCryptoPrices = async (symbols = 'BTC,ETH') => {
    try {
        const response = await axios.get(`${BASE_URL}/cryptocurrency/quotes/latest`, {
            headers: {
                'X-CMC_PRO_API_KEY': API_KEY
            },
            params: {
                symbol: symbols
            }
        });
        return response.data.data;
    } catch (err) {
        console.error('CMC API error:', err);
        return null;
    }
};
