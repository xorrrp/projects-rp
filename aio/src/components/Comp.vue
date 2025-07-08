<template>
    <canvas ref="canvas"></canvas>
</template>
<script>
import { Chart } from 'chart.js/auto'
export default {
    name: 'MyChart',
    mounted() {
        const ctx = this.$refs.canvas.getContext('2d')

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Sales',
                    data: [12, 19, 13, 24, 16, 14, 7],
                    backgroundColor: 'rgba(75, 192, 192, 0.5)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true
            }
        })
    }
}
</script>
<style scoped>
canvas {
    max-width: 500px;
    max-height: 200px;
}
</style>