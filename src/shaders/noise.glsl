uniform float uTime;
varying vec2 vUv;

// Simple hash function
float hash(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
    vec2 uv = vUv;
    float noise = hash(uv + uTime * 0.1);
    vec3 color = vec3(noise, 0.7, 0.3);
    gl_FragColor = vec4(color, 1.0);
} 