<script>
import { onMounted, ref } from 'vue';
import { getCryptoPrices } from '../services/coinmarketcap.js';

const prices = ref({});

onMounted(async () => {
    prices.value = await getCryptoPrices('BTC,ETH,SOL');
});
</script>

<template>
    <div v-if="Object.keys(prices).length">
        <div v-for="(coin, key) in prices" :key="key">
            <h2>{{ coin.name }} ({{ coin.symbol }})</h2>
            <p>Price: ${{ coin.quote.USD.price.toFixed(2) }}</p>
        </div>
    </div>
</template>
