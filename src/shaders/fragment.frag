#ifdef GL_ES
precision mediump float;
#endif


uniform float time; // basically u_time
uniform vec2 u_resolution;
varying vec2 vUv; //the resolution

void main() {
       vec2 uv = vUv;
   // Define the number of stripes and their width
    float numStripes = 5.0;
    float stripeWidth = 0.1;

    // Calculate the position within the stripe pattern
    float stripePosition =  mod((uv.y + sin(time/12.0)) * numStripes, 1.0);
 
    vec3 color = vec3(0.2157, 0.1765, 0.0706);
    vec3 secColor =vec3(0.9647, 0.9294, 0.8431);
    // Set the color based on whether the fragment is within a stripe or not
    vec3 stripeColor = mod(floor(stripePosition / stripeWidth), 2.0) > 0.0 ? color : secColor;

    gl_FragColor = vec4(stripeColor, 1.0);
}