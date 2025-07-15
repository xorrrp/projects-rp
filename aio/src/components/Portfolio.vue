<template>
    <div v-if="Object.keys(prices).length">
        <div v-for="(coin, symbol) in prices" :key="symbol">
            <h2>{{ coin.name }} ({{ coin.symbol }})</h2>
            <p>Price: ${{ coin.quote.USD.price.toFixed(2) }}</p>
        </div>
    </div>
    <div v-else>Loading prices...</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const prices = ref({});
const API_BASE = import.meta.env.VITE_API_URL;

onMounted(async () => {
    try {
        const response = await fetch(`${API_BASE}/prices?symbols=BTC,ETH`);
        if (!response.ok) throw new Error('API error');
        const data = await response.json();
        prices.value = data.data;
    } catch (err) {
        console.error('Error fetching prices:', err);
    }
});
</script>
