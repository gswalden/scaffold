function setup(){canvas=createCanvas(windowWidth,windowHeight),textFont("Roboto Mono")}function draw(){background(0),noFill();var t=new Date,e=t.getMilliseconds(),o=t.getSeconds()+e/1e3,n=t.getMinutes()+o/60,i=t.getHours()+n/60,a=i/24,r=n/60,s=o/60;translate(width/2,height/2);var c=.9*Math.min(width,height),d=.9*c,w=.8*c;strokeCap(SQUARE),strokeWeight(.03*c),textAlign(CENTER,CENTER),push(),rotate(-HALF_PI),stroke("#53DF83"),arc(0,0,c,c,0,TAU*a),stroke("#47D2E9"),arc(0,0,d,d,0,TAU*r),stroke("#FFF"),arc(0,0,w,w,0,TAU*s),pop(),noStroke(),fill("#FFF"),textSize(.1*c),text([floor(i),floor(n),floor(o)].map(function(t){return("0"+t).slice(-2)}).join(":"),0,0)}function windowResized(){resizeCanvas(windowWidth,windowHeight)}var canvas;
//# sourceMappingURL=maps/scripts.js.map
