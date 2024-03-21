#ifdef GL_ES
		precision mediump float;
		#endif
varying vec2 vUv;
	uniform float time;		
  
void main()	{
	vUv = uv;
	// projectionMatrix, modelViewMatrix, position -> passed in from Three.js
	float poopX = sin( 4.0*sin(position.z/10.0)+time)+sin(4.0*sin(position.y/10.0)+time) +position.x;
	float poopY = sin( 4.0*sin(position.z/10.0)+time)+sin(4.0*sin(position.x/10.0)+time) +position.y;
	float poopZ = sin(sin(position.z/10.0)+time)+position.z ;


	gl_Position = projectionMatrix 
		* modelViewMatrix
		* vec4(poopX, poopY, poopZ, 1.0);
		}