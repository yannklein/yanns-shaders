uniform float uTime;
varying vec2 vUv;

void main() {
    vec2 uv = vUv;
    float wave = sin(uv.x * 10.0 + uTime) * 0.5 + 0.5;
    vec3 color = vec3(wave, 0.5, 0.8);
    gl_FragColor = vec4(color, 1.0);
} 