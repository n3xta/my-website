<template>
    <div class="sketch-container">
        <h1>Generative Art Showcase</h1>
        <canvas ref="canvas" width="800" height="600"></canvas>
    </div>
</template>

<script>
export default {
    name: 'Sketch',
    mounted() {
        this.drawArt();
    },
    methods: {
        drawArt() {
            const canvas = this.$refs.canvas;
            const ctx = canvas.getContext('2d');

            // Example generative art: Random circles
            for (let i = 0; i < 100; i++) {
                const x = Math.random() * canvas.width;
                const y = Math.random() * canvas.height;
                const radius = Math.random() * 50;
                const color = `hsl(${Math.random() * 360}, 100%, 50%)`;

                ctx.beginPath();
                ctx.arc(x, y, radius, 0, Math.PI * 2);
                ctx.fillStyle = color;
                ctx.fill();
            }
        }
    }
}
</script>

<style scoped>
.sketch-container {
    text-align: center;
    margin-top: 20px;
}

canvas {
    border: 1px solid #000;
}
</style>