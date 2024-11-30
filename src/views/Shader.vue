<template>
    <div id="app">
        <canvas ref="canvas"></canvas>
    </div>
</template>

<script>
export default {
    name: 'Shader',
    mounted() {
        this.initWebGL();
    },
    methods: {
        initWebGL() {
            const canvas = this.$refs.canvas;
            const gl = canvas.getContext('webgl');

            if (!gl) {
                console.error('WebGL not supported');
                return;
            }

            const vertexShaderSource = `
                attribute vec4 a_position;
                void main() {
                    gl_Position = a_position;
                }
            `;

            const fragmentShaderSource = `
                precision mediump float;
                uniform float u_time;
                void main() {
                    vec2 uv = gl_FragCoord.xy / vec2(800.0, 600.0);
                    vec3 color = 0.5 + 0.5 * cos(u_time + uv.xyx + vec3(0, 2, 4));
                    gl_FragColor = vec4(color, 1.0);
                }
            `;

            const vertexShader = this.createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
            const fragmentShader = this.createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

            const program = this.createProgram(gl, vertexShader, fragmentShader);
            gl.useProgram(program);

            const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
            const timeUniformLocation = gl.getUniformLocation(program, 'u_time');

            const positionBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            const positions = [
                -1, -1,
                 1, -1,
                -1,  1,
                -1,  1,
                 1, -1,
                 1,  1,
            ];
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

            gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);
            gl.clearColor(0, 0, 0, 0);
            gl.clear(gl.COLOR_BUFFER_BIT);

            gl.enableVertexAttribArray(positionAttributeLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

            const render = (time) => {
                time *= 0.001; // convert to seconds
                gl.uniform1f(timeUniformLocation, time);
                gl.drawArrays(gl.TRIANGLES, 0, 6);
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        },
        createShader(gl, type, source) {
            const shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (success) {
                return shader;
            }
            console.error(gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
        },
        createProgram(gl, vertexShader, fragmentShader) {
            const program = gl.createProgram();
            gl.attachShader(program, vertexShader);
            gl.attachShader(program, fragmentShader);
            gl.linkProgram(program);
            const success = gl.getProgramParameter(program, gl.LINK_STATUS);
            if (success) {
                return program;
            }
            console.error(gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
        }
    }
};
</script>

<style>
#app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000;
}

canvas {
    width: 800px;
    height: 600px;
}
</style>