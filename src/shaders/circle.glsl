uniform float uTime;
varying vec2 vUv;

void main() {
    vec2 uv = vUv * 2.0 - 1.0;
    float dist = length(uv);
    float circle = smoothstep(0.5, 0.4, abs(dist - 0.5 + sin(uTime) * 0.1));
    vec3 color = vec3(circle, 0.2, 0.6);
    gl_FragColor = vec4(color, 1.0);
} 