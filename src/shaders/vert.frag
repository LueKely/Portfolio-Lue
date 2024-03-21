#ifdef GL_ES
		precision mediump float;
		#endif
varying vec2 vUv;
	uniform float time;		
  
void main()	{
	vUv = uv;




	gl_Position = projectionMatrix 
		* modelViewMatrix
		* vec4(position.x,position.y,position.z, 1.0);
		}