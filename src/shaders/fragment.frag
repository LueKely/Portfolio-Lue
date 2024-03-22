#ifdef GL_ES
precision mediump float;
#endif


uniform float time; // basically u_time
uniform vec2 u_resolution;
varying vec2 vUv; //the resolution

#define M_PI 3.14159265358979323846

float rand(vec2 co){return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);}
float rand (vec2 co, float l) {return rand(vec2(rand(co), l));}
float rand (vec2 co, float l, float t) {return rand(vec2(rand(co, l), t));}

float perlin(vec2 p, float dim, float time) {
	vec2 pos = floor(p * dim);
	vec2 posx = pos + vec2(1.0, 0.0);
	vec2 posy = pos + vec2(0.0, 1.0);
	vec2 posxy = pos + vec2(1.0);
	
	float c = rand(pos, dim, time);
	float cx = rand(posx, dim, time);
	float cy = rand(posy, dim, time);
	float cxy = rand(posxy, dim, time);
	
	vec2 d = fract(p * dim);
	d = -0.5 * cos(d * M_PI) + 0.5;
	
	float ccx = mix(c, cx, d.x);
	float cycxy = mix(cy, cxy, d.x);
	float center = mix(ccx, cycxy, d.y);
	
	return center * 2.0 - 1.0;
}

// p must be normalized!
float perlin(vec2 p, float dim) {
	
	vec2 pos = floor(p * dim);
	vec2 posx = pos + vec2(1.0, 0.0);
	vec2 posy = pos + vec2(0.0, 1.0);
	vec2 posxy = pos + vec2(1.0);
	
	// For exclusively black/white noise
	/*float c = step(rand(pos, dim), 0.5);
	float cx = step(rand(posx, dim), 0.5);
	float cy = step(rand(posy, dim), 0.5);
	float cxy = step(rand(posxy, dim), 0.5);*/
	
	float c = rand(pos, dim);
	float cx = rand(posx, dim);
	float cy = rand(posy, dim);
	float cxy = rand(posxy, dim);
	
	vec2 d = fract(p * dim);
	d = -0.5 * cos(d * M_PI) + 0.5;
	
	float ccx = mix(c, cx, d.x);
	float cycxy = mix(cy, cxy, d.x);
	float center = mix(ccx, cycxy, d.y);
	
	return center * 2.0 - 1.0;
	// return perlin(p, dim, 0.0);
}


void main() {

    vec2 uv = vUv;
    // uv.x -=time/2.0;
    // uv.y += sin(uv.x + uv.y )  + (time / 20.0) ;

     
   uv.y += perlin(uv.xy-time/10.,5.,10.) +time/10. ;
    vec3 color = vec3(0.0);


    float frequency = 21.0;
    float checkerY = floor(uv.y * frequency);
    // float checkerX = floor(uv.x * frequency);
    float checker = mod(checkerY,3.0);



    if (checker == 0.0) {
        color =vec3(0.2157, 0.1765, 0.0706);
    } else {
        color = vec3(0.9647, 0.9294, 0.8431);// Blue
    }

    gl_FragColor = vec4(vec3(color),1.0);
}