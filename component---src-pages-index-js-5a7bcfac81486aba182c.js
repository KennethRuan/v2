"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{5194:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(7294),l=(n(5444),"home-module--section--Kzy+q"),r=1440,m=240,c=[[0,"#0a0c10"],[244.8,"#1a222b"],[302.4,"#8291b3"],[518.4,"#7cbbeb"],[864,"#7cbbeb"],[936,"#f8ce9c"],[1065.6,"#f08784"],[1123.2,"#8b666e"],[1238.4,"#323039"],[1440,"#0a0c10"]];function i(e){return e*(Math.PI/180)}console.log(c);var o=function(e){for(var t=e.time,n=parseInt(t),l=n+m,o=[],s=0;s<c.length;s++)if(n<=c[s][0]&&c[s][0]<=l){var u=(c[s][0]-n)/m*100;o.push([u,c[s][1]])}for(var g=c.length-1;g>=0;g--)if(n>c[g][0]){u=(c[g][0]-n)/m*100;o.unshift([u,c[g][1]]);break}for(var d=0;d<c.length;d++){if(l<c[d][0]){u=(c[d][0]-n)/m*100;o.push([u,c[d][1]]);break}if(l%r<c[d][0]){u=(1440+c[d][0]-n)/m*100;o.push([u,c[d][1]]);break}}console.log(o);for(var f="-webkit-linear-gradient("+String((n+120)/1440*180-90)+"deg",h=0;h<o.length;h++)f+=", "+o[h][1]+" "+o[h][0]+"%";f+=")";var v=(n+120)/1440*360-90,E=(n+120)/1440*360+90;return a.createElement(a.Fragment,null,a.createElement("div",{className:"home-module--cityContainer--YbrTA",style:{background:f}},a.createElement("div",{className:"home-module--title--YXpKz"},a.createElement("img",{src:"/title.svg",alt:"Title"})),a.createElement("img",{className:"home-module--city4--TPUMJ",src:"/city-4.svg",alt:"City Component 4"}),a.createElement("img",{className:"home-module--city3--OT-Xk",src:"/city-3.svg",alt:"City Component 3"}),a.createElement("img",{className:"home-module--city2--3LPNd",src:"/city-2.svg",alt:"City Component 2"}),a.createElement("img",{className:"home-module--city1--ogFHu",src:"/city-1.svg",alt:"City Component 1"}),a.createElement("img",{className:"home-module--moon--B5vk3",src:"/moon.svg",alt:"Moon",style:{top:100+100*Math.sin(i(-E))+"%",left:50+50*Math.cos(i(-E))+"%",transform:"translate(-50%, -50%)"}}),a.createElement("img",{className:"home-module--sun--s-++o",src:"/sun.svg",alt:"Sun",style:{top:100+100*Math.sin(i(-v))+"%",left:50+50*Math.cos(i(-v))+"%",transform:"translate(-50%, -50%)"}})))},s=function(e){var t=e.initialTime,n=e.minTime,l=e.maxTime,r=(0,a.useState)(t),m=r[0],c=r[1];return a.createElement("div",null,a.createElement(o,{time:m}),a.createElement("div",{className:"home-module--sliderContainer--IIypZ"},a.createElement("input",{type:"range",className:"home-module--slider--ROVPQ",min:n,max:l,value:m,onChange:function(e){c(e.target.value)}})))},u=function(){return a.createElement("div",{className:l},a.createElement("h1",null,"jobs"))},g=function(){return a.createElement("div",null)},d=function(){return a.createElement("div",null)},f=function(){return a.createElement("div",{className:l,style:{"background-color":"red"}},a.createElement("p",null,"yee"))},h=n(3751),v=new Date,E=60*v.getHours()+v.getMinutes(),y=function(){return a.createElement("div",null,a.createElement(h.Z,{title:"Home"}),a.createElement(s,{initialTime:E,minTime:1,maxTime:1440}),a.createElement(f,null),a.createElement(u,null),a.createElement(g,null),a.createElement(d,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-5a7bcfac81486aba182c.js.map