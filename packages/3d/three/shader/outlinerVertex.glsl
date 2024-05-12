uniform float u_time;

varying vec2 vUv;

void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

  gl_Position = projectedPosition;
}

