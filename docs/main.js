!function(t){var s={};function i(e){if(s[e])return s[e].exports;var h=s[e]={i:e,l:!1,exports:{}};return t[e].call(h.exports,h,h.exports,i),h.l=!0,h.exports}i.m=t,i.c=s,i.d=function(t,s,e){i.o(t,s)||Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:e})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var s=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(s,"a",s),s},i.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},i.p="./",i(i.s=0)}({0:function(t,s,i){"use strict";i.r(s);class e{constructor(t,s={},i={}){this.el=document.createElement(t);for(const t in s)this.el.setAttribute(t,s[t]);for(const t in i)this.el[t]=i[t]}}i(5);const h=(t,s,i)=>{const{width:e,height:h,left:n,top:o}=t.getBoundingClientRect();return{x:(s-n)*(t.width/e),y:(i-o)*(t.height/h)}};new class{constructor(){var t,s,i;this.log=new e("div").el,document.body.appendChild(this.log),this.canvas=new e("canvas",{width:1e3,height:500,style:"position: relative; background: red;"}).el,this.ctx=this.canvas.getContext("2d"),this.canvas.addEventListener("touchstart",t=>this.touchDownHandler(t)),this.canvas.addEventListener("touchmove",t=>this.touchMoveHandler(t)),this.canvas.addEventListener("mousedown",t=>this.mouseDownHandler(t)),this.canvas.addEventListener("mousemove",t=>this.mouseMoveHandler(t)),this.canvas.addEventListener("mouseup",t=>this.mouseUpHandler(t)),this.border=[0,0,this.canvas.width,this.canvas.height],this.cx=0,this.cy=0,this.cr=1,(t=>new Promise(s=>{const i=new Image;i.onload=(()=>s(i)),i.src=t}))("https://thumbs.gfycat.com/CandidClumsyGypsymoth-max-1mb.gif").then(t=>this.photo=t).then(()=>{window.onresize(),this.init()}),window.onresize=(()=>{t=this.canvas,s=innerWidth,i=innerHeight,t.width=s,t.height=i,this.border=[0,0,this.canvas.width,this.canvas.height]}),document.body.appendChild(this.canvas)}init(){this.cx=this.photo.width/2,this.cy=this.photo.height/2;const t=this.photo.width*this.cr,s=this.photo.height*this.cr;this.draw(this.photo,this.cx,this.cy,t,s)}test(){}getTouchesLength(t){const{changedTouches:s,touches:i}=t;return[s.length,i.length]}touchToPosition(t){return[t.pageX,t.pageY]}getDistance(t,s,i,e){return{x:(t+i)/2,y:(s+e)/2,distance:Math.sqrt(Math.pow(i-t,2)+Math.pow(e-s,2))}}isPinching(t){const[s,i]=this.getTouchesLength(t);return 2===i}isDragging(t){const[s,i]=this.getTouchesLength(t);return 1===s&&1===i}touchDownHandler(t){if(t.preventDefault(),this.isDragging(t)){const{pageX:s,pageY:i}=t.touches[0];this.drawdown(h(this.canvas,s,i))}if(this.isPinching(t)){const[s,i]=t.touches,e=h(this.canvas,...this.touchToPosition(s)),n=h(this.canvas,...this.touchToPosition(i));this.drawdown(this.getDistance(e.x,e.y,n.x,n.y))}}touchMoveHandler(t){if(t.preventDefault(),this.isDragging(t)){const{pageX:s,pageY:i}=t.touches[0];this.drawmove(h(this.canvas,s,i))}if(this.isPinching(t)){const[s,i]=t.touches,e=h(this.canvas,...this.touchToPosition(s)),n=h(this.canvas,...this.touchToPosition(i));this.drawmove(this.getDistance(e.x,e.y,n.x,n.y))}}mouseDownHandler(t){this.mousePushed=!0;const{pageX:s,pageY:i}=t;this.drawdown(h(this.canvas,s,i))}mouseMoveHandler(t){if(!this.mousePushed)return;const{pageX:s,pageY:i}=t;this.drawmove(h(this.canvas,s,i))}mouseUpHandler(t){this.mousePushed=!1}moveGuard(t,s,i,e,h,n){const[o,a,c,r]=n,d=Math.min((c-o)/e,(r-a)/h),u=Math.min(i,d),g=e*u,v=h*u;let l=t,p=s;return l=Math.max(l,o+g/2),p=Math.max(p,a+v/2),{cx:l=Math.min(l,c-g/2),cy:p=Math.min(p,r-v/2),cr:u}}drawdown({x:t,y:s,distance:i}){this.ox=t,this.oy=s,i&&(this.od=i)}drawmove({x:t,y:s,distance:i}){this.od&&!i&&(this.od=null,this.ox=t,this.oy=s);const e=t-this.ox,h=s-this.oy;if(this.cx+=e,this.cy+=h,this.oy=s,this.ox=t,i){const t=i/this.od;this.cr*=t,this.od=i}const{cx:n,cy:o,cr:a}=this.moveGuard(this.cx,this.cy,this.cr,this.photo.width,this.photo.height,this.border);this.cx=n,this.cy=o,this.cr=a;const c=this.photo.width*this.cr,r=this.photo.height*this.cr;this.draw(this.photo,this.cx,this.cy,c,r)}draw(t,s,i,e,h){var n;(n=this.canvas)instanceof HTMLCanvasElement&&n.getContext("2d").clearRect(0,0,n.width,n.height),n instanceof CanvasRenderingContext2D&&n.clearRect(0,0,n.canvas.width,n.canvas.height),this.ctx.drawImage(t,0,0,t.width,t.height,s-e/2,i-h/2,e,h)}}},5:function(t,s){}});