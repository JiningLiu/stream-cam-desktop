import{s as Y,d as Z,e as B,n as Q,r as $,o as tt}from"../chunks/scheduler.urFzR-R0.js";import{S as et,i as st,e as p,s as w,b as H,c as h,d as P,g as x,h as S,f as R,m as j,n as e,j as at,k as s,o as X,p as O,l as lt}from"../chunks/index.BMfImeCe.js";function ot(n){let r,a,v,l,t,m,I,T,E,i,k,u,q="Reload Feed",C,c,z="Reconnect Server",y,_,A,N,D,b,F,U,L,g,W="Reboot System",M,G;return{c(){r=p("div"),a=p("iframe"),l=w(),t=p("div"),m=p("span"),I=H("Client "),T=H(n[0]),E=w(),i=p("input"),k=w(),u=p("button"),u.textContent=q,C=w(),c=p("button"),c.textContent=z,y=w(),_=p("button"),A=H("Camera On"),D=w(),b=p("button"),F=H("Camera Off"),L=w(),g=p("button"),g.textContent=W,this.h()},l(f){r=h(f,"DIV",{id:!0,class:!0});var d=P(r);a=h(d,"IFRAME",{id:!0,title:!0,src:!0,frameborder:!0,class:!0}),P(a).forEach(x),l=S(d),t=h(d,"DIV",{id:!0,class:!0});var o=P(t);m=h(o,"SPAN",{});var V=P(m);I=R(V,"Client "),T=R(V,n[0]),V.forEach(x),E=S(o),i=h(o,"INPUT",{type:!0,id:!0,placeholder:!0,class:!0}),k=S(o),u=h(o,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),j(u)!=="svelte-po3z75"&&(u.textContent=q),C=S(o),c=h(o,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),j(c)!=="svelte-2ou9e1"&&(c.textContent=z),y=S(o),_=h(o,"BUTTON",{id:!0,class:!0});var J=P(_);A=R(J,"Camera On"),J.forEach(x),D=S(o),b=h(o,"BUTTON",{id:!0,class:!0});var K=P(b);F=R(K,"Camera Off"),K.forEach(x),L=S(o),g=h(o,"BUTTON",{id:!0,class:!0,"data-svelte-h":!0}),j(g)!=="svelte-foxova"&&(g.textContent=W),o.forEach(x),d.forEach(x),this.h()},h(){e(a,"id","stream"),e(a,"title","Live Stream"),Z(a.src,v="")||e(a,"src",v),e(a,"frameborder","0"),e(a,"class","svelte-xm6iqt"),e(i,"type","text"),e(i,"id","host"),e(i,"placeholder","Camera IP/Hostname"),e(i,"class","svelte-xm6iqt"),e(u,"id","reload"),e(u,"class","svelte-xm6iqt"),e(c,"id","reconnect"),e(c,"class","svelte-xm6iqt"),e(_,"id","on"),e(_,"class",N=B(n[2]?"bg":"")+" svelte-xm6iqt"),e(b,"id","off"),e(b,"class",U=B(n[2]?"":"bg")+" svelte-xm6iqt"),e(g,"id","reboot"),e(g,"class","svelte-xm6iqt"),e(t,"id","buttons"),e(t,"class","svelte-xm6iqt"),e(r,"id","main"),e(r,"class","svelte-xm6iqt")},m(f,d){at(f,r,d),s(r,a),s(r,l),s(r,t),s(t,m),s(m,I),s(m,T),s(t,E),s(t,i),X(i,n[1]),s(t,k),s(t,u),s(t,C),s(t,c),s(t,y),s(t,_),s(_,A),s(t,D),s(t,b),s(b,F),s(t,L),s(t,g),M||(G=[O(i,"input",n[8]),O(u,"click",n[4]),O(c,"click",n[3]),O(_,"click",n[5]),O(b,"click",n[6]),O(g,"click",n[7])],M=!0)},p(f,[d]){d&1&&lt(T,f[0]),d&2&&i.value!==f[1]&&X(i,f[1]),d&4&&N!==(N=B(f[2]?"bg":"")+" svelte-xm6iqt")&&e(_,"class",N),d&4&&U!==(U=B(f[2]?"":"bg")+" svelte-xm6iqt")&&e(b,"class",U)},i:Q,o:Q,d(f){f&&x(r),M=!1,$(G)}}}function nt(n,r,a){let v,l="localhost",t,m=!1;tt(()=>{location.protocol==="https:"&&(alert("HTTPS is not supported. The app will refresh to use HTTP."),location.href=location.href.replace("https","http"));const q=new URLSearchParams(location.search),C=window.localStorage;if(a(0,v=q.get("client")||""),v===""){if(C.length===0){alert("Creating new client. Page will refresh to add new parameter."),location.href="?client=0";return}alert("Attempting last client. Page will refresh to add client parameter."),location.href="?client="+(C.length-1);return}const c=C.getItem(v);c===null?(a(1,l=prompt("Camera IP/Hostname")||""),l!==""&&C.setItem(v,l)):a(1,l=c),T(),I()});function I(){localStorage.setItem(v,l),t=new WebSocket("ws://"+l+":3000"),t.onopen=()=>{t.send("status")},t.onmessage=q=>{q.data==="on"?a(2,m=!0):q.data==="off"&&a(2,m=!1)},t.onclose=()=>{alert("Connection closed.")}}function T(){document.getElementById("stream").src="http://"+l+":8889/cam"}function E(){t.send("on")}function i(){t.send("off")}function k(){t.send("reboot")}function u(){l=this.value,a(1,l)}return[v,l,m,I,T,E,i,k,u]}class ct extends et{constructor(r){super(),st(this,r,nt,ot,Y,{})}}export{ct as component};
