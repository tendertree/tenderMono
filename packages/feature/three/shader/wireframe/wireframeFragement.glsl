varying vec2 vUv;
uniform float uThickness;

float gridPattern(vec2 uv) {
    vec2 grid = abs(fract(uv - 0.5) - 0.5) / fwidth(uv);
    return min(grid.x, grid.y);
}

void main() {
    float line = gridPattern(vUv * 10.0);
    float alpha = 1.0 - min(line, 1.0);
    
    vec3 color = vec3(1.0, 0.0, 0.0);  // 빨간색
    
    gl_FragColor = vec4(color, alpha);
}
