const vt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const y of p.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&u(y)}).observe(document,{childList:!0,subtree:!0});function o(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerpolicy&&(p.referrerPolicy=f.referrerpolicy),f.crossorigin==="use-credentials"?p.credentials="include":f.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(f){if(f.ep)return;f.ep=!0;const p=o(f);fetch(f.href,p)}};vt();function P(){}function wt(t){return t()}function ct(){return Object.create(null)}function K(t){t.forEach(wt)}function xt(t){return typeof t=="function"}function $t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function kt(t){return Object.keys(t).length===0}function D(t,e){t.appendChild(e)}function ht(t,e,o){t.insertBefore(e,o||null)}function at(t){t.parentNode.removeChild(t)}function _t(t,e){for(let o=0;o<t.length;o+=1)t[o]&&t[o].d(e)}function A(t){return document.createElement(t)}function rt(t){return document.createTextNode(t)}function E(){return rt(" ")}function L(t,e,o){o==null?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function Mt(t){return Array.from(t.childNodes)}let st;function J(t){st=t}const B=[],ft=[],G=[],dt=[],St=Promise.resolve();let it=!1;function Dt(){it||(it=!0,St.then(mt))}function ot(t){G.push(t)}const nt=new Set;let X=0;function mt(){const t=st;do{for(;X<B.length;){const e=B[X];X++,J(e),zt(e.$$)}for(J(null),B.length=0,X=0;ft.length;)ft.pop()();for(let e=0;e<G.length;e+=1){const o=G[e];nt.has(o)||(nt.add(o),o())}G.length=0}while(B.length);for(;dt.length;)dt.pop()();it=!1,nt.clear(),J(t)}function zt(t){if(t.fragment!==null){t.update(),K(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ot)}}const Ot=new Set;function jt(t,e){t&&t.i&&(Ot.delete(t),t.i(e))}function Tt(t,e,o,u){const{fragment:f,on_mount:p,on_destroy:y,after_update:k}=t.$$;f&&f.m(e,o),u||ot(()=>{const x=p.map(wt).filter(xt);y?y.push(...x):K(x),t.$$.on_mount=[]}),k.forEach(ot)}function At(t,e){const o=t.$$;o.fragment!==null&&(K(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(B.push(t),Dt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ct(t,e,o,u,f,p,y,k=[-1]){const x=st;J(t);const d=t.$$={fragment:null,ctx:null,props:p,update:P,not_equal:f,bound:ct(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(x?x.$$.context:[])),callbacks:ct(),dirty:k,skip_bound:!1,root:e.target||x.$$.root};y&&y(d.root);let z=!1;if(d.ctx=o?o(t,e.props||{},(h,j,...g)=>{const b=g.length?g[0]:j;return d.ctx&&f(d.ctx[h],d.ctx[h]=b)&&(!d.skip_bound&&d.bound[h]&&d.bound[h](b),z&&Lt(t,h)),j}):[],d.update(),z=!0,K(d.before_update),d.fragment=u?u(d.ctx):!1,e.target){if(e.hydrate){const h=Mt(e.target);d.fragment&&d.fragment.l(h),h.forEach(at)}else d.fragment&&d.fragment.c();e.intro&&jt(t.$$.fragment),Tt(t,e.target,e.anchor,e.customElement),mt()}J(x)}class Nt{$destroy(){At(this,1),this.$destroy=P}$on(e,o){const u=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return u.push(o),()=>{const f=u.indexOf(o);f!==-1&&u.splice(f,1)}}$set(e){this.$$set&&!kt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Yt=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},gt={exports:{}};(function(t,e){(function(o,u){t.exports=u()})(Yt,function(){var o=1e3,u=6e4,f=36e5,p="millisecond",y="second",k="minute",x="hour",d="day",z="week",h="month",j="quarter",g="year",b="date",Y="Invalid Date",_=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,bt={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},Q=function(c,i,n){var a=String(c);return!a||a.length>=i?c:""+Array(i+1-a.length).join(n)+c},yt={s:Q,z:function(c){var i=-c.utcOffset(),n=Math.abs(i),a=Math.floor(n/60),r=n%60;return(i<=0?"+":"-")+Q(a,2,"0")+":"+Q(r,2,"0")},m:function c(i,n){if(i.date()<n.date())return-c(n,i);var a=12*(n.year()-i.year())+(n.month()-i.month()),r=i.clone().add(a,h),l=n-r<0,s=i.clone().add(a+(l?-1:1),h);return+(-(a+(n-r)/(l?r-s:s-r))||0)},a:function(c){return c<0?Math.ceil(c)||0:Math.floor(c)},p:function(c){return{M:h,y:g,w:z,d,D:b,h:x,m:k,s:y,ms:p,Q:j}[c]||String(c||"").toLowerCase().replace(/s$/,"")},u:function(c){return c===void 0}},F="en",H={};H[F]=bt;var tt=function(c){return c instanceof V},q=function c(i,n,a){var r;if(!i)return F;if(typeof i=="string"){var l=i.toLowerCase();H[l]&&(r=l),n&&(H[l]=n,r=l);var s=i.split("-");if(!r&&s.length>1)return c(s[0])}else{var w=i.name;H[w]=i,r=w}return!a&&r&&(F=r),r||!a&&F},M=function(c,i){if(tt(c))return c.clone();var n=typeof i=="object"?i:{};return n.date=c,n.args=arguments,new V(n)},m=yt;m.l=q,m.i=tt,m.w=function(c,i){return M(c,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var V=function(){function c(n){this.$L=q(n.locale,null,!0),this.parse(n)}var i=c.prototype;return i.parse=function(n){this.$d=function(a){var r=a.date,l=a.utc;if(r===null)return new Date(NaN);if(m.u(r))return new Date;if(r instanceof Date)return new Date(r);if(typeof r=="string"&&!/Z$/i.test(r)){var s=r.match(_);if(s){var w=s[2]-1||0,$=(s[7]||"0").substring(0,3);return l?new Date(Date.UTC(s[1],w,s[3]||1,s[4]||0,s[5]||0,s[6]||0,$)):new Date(s[1],w,s[3]||1,s[4]||0,s[5]||0,s[6]||0,$)}}return new Date(r)}(n),this.$x=n.x||{},this.init()},i.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},i.$utils=function(){return m},i.isValid=function(){return this.$d.toString()!==Y},i.isSame=function(n,a){var r=M(n);return this.startOf(a)<=r&&r<=this.endOf(a)},i.isAfter=function(n,a){return M(n)<this.startOf(a)},i.isBefore=function(n,a){return this.endOf(a)<M(n)},i.$g=function(n,a,r){return m.u(n)?this[a]:this.set(r,n)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(n,a){var r=this,l=!!m.u(a)||a,s=m.p(n),w=function(I,O){var N=m.w(r.$u?Date.UTC(r.$y,O,I):new Date(r.$y,O,I),r);return l?N:N.endOf(d)},$=function(I,O){return m.w(r.toDate()[I].apply(r.toDate("s"),(l?[0,0,0,0]:[23,59,59,999]).slice(O)),r)},v=this.$W,S=this.$M,C=this.$D,T="set"+(this.$u?"UTC":"");switch(s){case g:return l?w(1,0):w(31,11);case h:return l?w(1,S):w(0,S+1);case z:var W=this.$locale().weekStart||0,U=(v<W?v+7:v)-W;return w(l?C-U:C+(6-U),S);case d:case b:return $(T+"Hours",0);case x:return $(T+"Minutes",1);case k:return $(T+"Seconds",2);case y:return $(T+"Milliseconds",3);default:return this.clone()}},i.endOf=function(n){return this.startOf(n,!1)},i.$set=function(n,a){var r,l=m.p(n),s="set"+(this.$u?"UTC":""),w=(r={},r[d]=s+"Date",r[b]=s+"Date",r[h]=s+"Month",r[g]=s+"FullYear",r[x]=s+"Hours",r[k]=s+"Minutes",r[y]=s+"Seconds",r[p]=s+"Milliseconds",r)[l],$=l===d?this.$D+(a-this.$W):a;if(l===h||l===g){var v=this.clone().set(b,1);v.$d[w]($),v.init(),this.$d=v.set(b,Math.min(this.$D,v.daysInMonth())).$d}else w&&this.$d[w]($);return this.init(),this},i.set=function(n,a){return this.clone().$set(n,a)},i.get=function(n){return this[m.p(n)]()},i.add=function(n,a){var r,l=this;n=Number(n);var s=m.p(a),w=function(S){var C=M(l);return m.w(C.date(C.date()+Math.round(S*n)),l)};if(s===h)return this.set(h,this.$M+n);if(s===g)return this.set(g,this.$y+n);if(s===d)return w(1);if(s===z)return w(7);var $=(r={},r[k]=u,r[x]=f,r[y]=o,r)[s]||1,v=this.$d.getTime()+n*$;return m.w(v,this)},i.subtract=function(n,a){return this.add(-1*n,a)},i.format=function(n){var a=this,r=this.$locale();if(!this.isValid())return r.invalidDate||Y;var l=n||"YYYY-MM-DDTHH:mm:ssZ",s=m.z(this),w=this.$H,$=this.$m,v=this.$M,S=r.weekdays,C=r.months,T=function(O,N,et,R){return O&&(O[N]||O(a,l))||et[N].slice(0,R)},W=function(O){return m.s(w%12||12,O,"0")},U=r.meridiem||function(O,N,et){var R=O<12?"AM":"PM";return et?R.toLowerCase():R},I={YY:String(this.$y).slice(-2),YYYY:this.$y,M:v+1,MM:m.s(v+1,2,"0"),MMM:T(r.monthsShort,v,C,3),MMMM:T(C,v),D:this.$D,DD:m.s(this.$D,2,"0"),d:String(this.$W),dd:T(r.weekdaysMin,this.$W,S,2),ddd:T(r.weekdaysShort,this.$W,S,3),dddd:S[this.$W],H:String(w),HH:m.s(w,2,"0"),h:W(1),hh:W(2),a:U(w,$,!0),A:U(w,$,!1),m:String($),mm:m.s($,2,"0"),s:String(this.$s),ss:m.s(this.$s,2,"0"),SSS:m.s(this.$ms,3,"0"),Z:s};return l.replace(Z,function(O,N){return N||I[O]||s.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(n,a,r){var l,s=m.p(a),w=M(n),$=(w.utcOffset()-this.utcOffset())*u,v=this-w,S=m.m(this,w);return S=(l={},l[g]=S/12,l[h]=S,l[j]=S/3,l[z]=(v-$)/6048e5,l[d]=(v-$)/864e5,l[x]=v/f,l[k]=v/u,l[y]=v/o,l)[s]||v,r?S:m.a(S)},i.daysInMonth=function(){return this.endOf(h).$D},i.$locale=function(){return H[this.$L]},i.locale=function(n,a){if(!n)return this.$L;var r=this.clone(),l=q(n,a,!0);return l&&(r.$L=l),r},i.clone=function(){return m.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},c}(),lt=V.prototype;return M.prototype=lt,[["$ms",p],["$s",y],["$m",k],["$H",x],["$W",d],["$M",h],["$y",g],["$D",b]].forEach(function(c){lt[c[1]]=function(i){return this.$g(i,c[0],c[1])}}),M.extend=function(c,i){return c.$i||(c(i,V,M),c.$i=!0),M},M.locale=q,M.isDayjs=tt,M.unix=function(c){return M(1e3*c)},M.en=H[F],M.Ls=H,M.p={},M})})(gt);var Ht=gt.exports;function ut(t,e,o){const u=t.slice();return u[2]=e[o],u}function pt(t){let e,o=t[1].add(90*t[2]+15,"minutes").format("h:mm A")+"",u,f,p,y,k,x,d;return{c(){e=A("div"),u=rt(o),f=E(),p=A("span"),y=rt("Suggested"),x=E(),L(p,"class",k="suggetion "+(t[2]>=5?"flex":"hidden")+" svelte-lf3wf2"),L(e,"class",d="sleeptime "+(t[2]>=5?"twospan":"onespan")+" svelte-lf3wf2")},m(z,h){ht(z,e,h),D(e,u),D(e,f),D(e,p),D(p,y),D(e,x)},p:P,d(z){z&&at(e)}}}function It(t){let e,o,u,f,p,y,k,x,d,z,h,j=t[0],g=[];for(let b=0;b<j.length;b+=1)g[b]=pt(ut(t,j,b));return{c(){e=A("main"),o=A("div"),u=A("center"),u.innerHTML='<img src="/logo.svg" alt="" class="logo svelte-lf3wf2"/>',f=E(),p=A("p"),p.innerHTML=`The average human takes 15 minutes to fall asleep. <br/> If you go to sleep
      right now, you should try to wake up at one of the following times:`,y=E(),k=A("div");for(let b=0;b<g.length;b+=1)g[b].c();x=E(),d=A("p"),d.textContent=`If you wake up at one of these times, you\u2019ll rise in between 90-minute
      sleep cycles. A good night\u2019s sleep consists of 5-6 complete sleep cycles.`,z=E(),h=A("p"),h.innerHTML=`This is replicate of
      <a href="https://sleepcalculator.com/" class="svelte-lf3wf2">Sleep Calculator</a>
      created by
      <a href="https://andronasef.github.io" class="svelte-lf3wf2">@andronasef</a>`,L(u,"class","svelte-lf3wf2"),L(p,"class","svelte-lf3wf2"),L(k,"class","grid grid-cols-2 gap-4 md:grid-cols-4 svelte-lf3wf2"),L(d,"class","svelte-lf3wf2"),L(h,"class","footer svelte-lf3wf2"),L(o,"class","container svelte-lf3wf2"),L(e,"class","main svelte-lf3wf2")},m(b,Y){ht(b,e,Y),D(e,o),D(o,u),D(o,f),D(o,p),D(o,y),D(o,k);for(let _=0;_<g.length;_+=1)g[_].m(k,null);D(o,x),D(o,d),D(o,z),D(o,h)},p(b,[Y]){if(Y&3){j=b[0];let _;for(_=0;_<j.length;_+=1){const Z=ut(b,j,_);g[_]?g[_].p(Z,Y):(g[_]=pt(Z),g[_].c(),g[_].m(k,null))}for(;_<g.length;_+=1)g[_].d(1);g.length=j.length}},i:P,o:P,d(b){b&&at(e),_t(g,b)}}}function Et(t){let e=Array.from({length:6},(u,f)=>f+1).reverse();var o=Ht();return[e,o]}class Ft extends Nt{constructor(e){super(),Ct(this,e,Et,It,$t,{})}}new Ft({target:document.getElementById("app")});