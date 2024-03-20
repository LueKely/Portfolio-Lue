#ifdef GL_ES
precision mediump float;
#endif


uniform float time; // basically u_time
uniform vec2 u_resolution;
varying vec2 vUv; //the resolution

void main(){
  // choose either of the two
  vec2 coord = vUv;
  // vec2 coord =   gl_FragCoord.xy / u_resolution;
  // gl_FragColor = vec4(sin(len * 2.0), cos(len - 1.0),1.0 , sin(time*2));

  gl_FragColor = vec4(coord,0.0,1.0);

}