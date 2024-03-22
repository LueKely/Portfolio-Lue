#ifdef GL_ES
precision mediump float;
#endif


uniform float time; // basically u_time
uniform vec2 u_resolution;
varying vec2 vUv; //the resolution

float rand(vec2 n) { 
	return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
}
float pnoise(vec2 p){
	vec2 ip = floor(p);
	vec2 u = fract(p);
	u = u*u*(3.0-2.0*u);
	
	float res = mix(
		mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
		mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
	return res*res;
}

void main() {

    vec2 uv = vUv;
    // uv.x -=time/2.0;
    // uv.y += sin(uv.x + uv.y )  + (time / 20.0) ;

   uv.y += sin(uv.x + pnoise(uv+time/10.0))   ;
   uv.x += sin(uv.y  + pnoise(uv+time/10.0))   ;
    vec3 color = vec3(0.0);


    float frequency = 21.0;
    float checkerY = floor(uv.y * frequency);
    // float checkerX = floor(uv.x * frequency);
    float checker = mod(checkerY,2.0);



    if (checker == 0.0) {
        color =vec3(0.2157, 0.1765, 0.0706);
    } else {
        color = vec3(0.9647, 0.9294, 0.8431);// Blue
    }

    gl_FragColor = vec4(vec3(color),1.0);
}