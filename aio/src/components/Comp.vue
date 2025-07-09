<template>
    <div>
        <canvas ref="canvas"></canvas>
    </div>
</template>
<script>
import { Chart } from 'chart.js/auto'
export default {
    name: 'MyChart',
    mounted() {
        const ctx = this.$refs.canvas.getContext('2d')

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [{
                    label: 'Value',
                    data: [40000, 32000, 45000, 48000, 53000, 32000, 39000],
                    backgroundColor: 'black'
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
    min-width: 100%;
    height: 300px;
}
</style>