import{o as Ia,a as Ra,i as Na}from"./lifecycle.CZ-asqhk.js";import{$ as Wa,a6 as Oa,aJ as Ya,aK as qa,aL as $e,u as Ie,aM as Ka,ab as Re,aN as Ua,U as Ne,aO as bt,a4 as Ha,aP as Xa,c as it,f as tt,a as W,p as Ga,b as Ja,s as u,m as B,aj as K,g as t,d as vt,h as v,e as s,r as i,n as Va,t as Pt}from"./template.BzsrGijQ.js";import{a as Qa,s as J}from"./render.DCR2qU2Q.js";import{i as z}from"./if.CFPFz1Q6.js";import{e as Za,i as tr}from"./each.CT3OyW7s.js";import{a as O,s as st,c as Se}from"./props.DCbUG9pV.js";import{e as y}from"./utils.DH2xf29x.js";import{I as f}from"./Icon.D-4cGuOY.js";import{m as xt}from"./config.kMwT5NJ0.js";import{I as er}from"./zh_TW.D-6nPIns.js";import{i as ar}from"./translation.Bf_mUO0O.js";const rr=()=>performance.now(),V={tick:o=>requestAnimationFrame(o),now:()=>rr(),tasks:new Set};function We(){const o=V.now();V.tasks.forEach(r=>{r.c(o)||(V.tasks.delete(r),r.f())}),V.tasks.size!==0&&V.tick(We)}function ir(o){let r;return V.tasks.size===0&&V.tick(We),{promise:new Promise(g=>{V.tasks.add(r={c:o,f:g})}),abort(){V.tasks.delete(r)}}}function zt(o,r){Re(()=>{o.dispatchEvent(new CustomEvent(r))})}function sr(o){if(o==="float")return"cssFloat";if(o==="offset")return"cssOffset";if(o.startsWith("--"))return o;const r=o.split("-");return r.length===1?r[0]:r[0]+r.slice(1).map(g=>g[0].toUpperCase()+g.slice(1)).join("")}function je(o){const r={},g=o.split(";");for(const F of g){const[_,p]=F.split(":");if(!_||p===void 0)break;const $=sr(_.trim());r[$]=p.trim()}return r}const nr=o=>o;function lr(o,r,g,F){var _=(o&Ka)!==0,p="both",$,w=r.inert,L=r.style.overflow,d,b;function P(){return Re(()=>$??=g()(r,F?.()??{},{direction:p}))}var A={is_global:_,in(){r.inert=w,zt(r,"introstart"),d=ae(r,P(),b,1,()=>{zt(r,"introend"),d?.abort(),d=$=void 0,r.style.overflow=L})},out(j){r.inert=!0,zt(r,"outrostart"),b=ae(r,P(),d,0,()=>{zt(r,"outroend"),j?.()})},stop:()=>{d?.abort(),b?.abort()}},M=Wa;if((M.transitions??=[]).push(A),Qa){var S=_;if(!S){for(var c=M.parent;c&&(c.f&Oa)!==0;)for(;(c=c.parent)&&(c.f&Ya)===0;);S=!c||(c.f&qa)!==0}S&&$e(()=>{Ie(()=>A.in())})}}function ae(o,r,g,F,_){var p=F===1;if(Ua(r)){var $,w=!1;return Ne(()=>{if(!w){var j=r({direction:p?"in":"out"});$=ae(o,j,g,F,_)}}),{abort:()=>{w=!0,$?.abort()},deactivate:()=>$.deactivate(),reset:()=>$.reset(),t:()=>$.t()}}if(g?.deactivate(),!r?.duration)return _(),{abort:bt,deactivate:bt,reset:bt,t:()=>F};const{delay:L=0,css:d,tick:b,easing:P=nr}=r;var A=[];if(p&&g===void 0&&(b&&b(0,1),d)){var M=je(d(0,1));A.push(M,M)}var S=()=>1-F,c=o.animate(A,{duration:L,fill:"forwards"});return c.onfinish=()=>{c.cancel();var j=g?.t()??1-F;g?.abort();var x=F-j,et=r.duration*Math.abs(x),at=[];if(et>0){var I=!1;if(d)for(var m=Math.ceil(et/16.666666666666668),k=0;k<=m;k+=1){var a=j+x*P(k/m),Q=je(d(a,1-a));at.push(Q),I||=Q.overflow==="hidden"}I&&(o.style.overflow="hidden"),S=()=>{var U=c.currentTime;return j+x*P(U/et)},b&&ir(()=>{if(c.playState!=="running")return!1;var U=S();return b(U,1-U),!0})}c=o.animate(at,{duration:et,fill:"forwards"}),c.onfinish=()=>{S=()=>F,b?.(F,1-F),_()}},{abort:()=>{c&&(c.cancel(),c.effect=null,c.onfinish=bt)},deactivate:()=>{_=bt},reset:()=>{F===0&&b?.(1,0)},t:()=>S()}}function De(o,r){return o===r||o?.[Xa]===r}function Pe(o={},r,g,F){return $e(()=>{var _,p;return Ha(()=>{_=p,p=[],Ie(()=>{o!==g(...p)&&(r(o,...p),_&&De(g(..._),o)&&r(null,..._))})}),()=>{Ne(()=>{p&&De(g(...p),o)&&r(null,...p)})}}),o}function ze(o){return function(...r){var g=r[0];return g.stopPropagation(),o?.apply(this,r)}}function or(o){const r=o-1;return r*r*r+1}function ur(o,{delay:r=0,duration:g=400,easing:F=or,axis:_="y"}={}){const p=getComputedStyle(o),$=+p.opacity,w=_==="y"?"height":"width",L=parseFloat(p[w]),d=_==="y"?["top","bottom"]:["left","right"],b=d.map(x=>`${x[0].toUpperCase()}${x.slice(1)}`),P=parseFloat(p[`padding${b[0]}`]),A=parseFloat(p[`padding${b[1]}`]),M=parseFloat(p[`margin${b[0]}`]),S=parseFloat(p[`margin${b[1]}`]),c=parseFloat(p[`border${b[0]}Width`]),j=parseFloat(p[`border${b[1]}Width`]);return{delay:r,duration:g,easing:F,css:x=>`overflow: hidden;opacity: ${Math.min(x*20,1)*$};${w}: ${x*L}px;padding-${d[0]}: ${x*P}px;padding-${d[1]}: ${x*A}px;margin-${d[0]}: ${x*M}px;margin-${d[1]}: ${x*S}px;border-${d[0]}-width: ${x*c}px;border-${d[1]}-width: ${x*j}px;min-${w}: 0`}}var cr=vt('<div class="fixed bottom-20 right-4 z-[60] max-w-sm"><div class="bg-red-500 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-slide-up"><!> <span class="text-sm flex-1"> </span> <button class="text-white/80 hover:text-white transition-colors"><!></button></div></div>'),dr=vt('<div class="flex space-x-0.5"><div class="w-0.5 h-3 bg-white rounded-full animate-pulse"></div> <div class="w-0.5 h-4 bg-white rounded-full animate-pulse" style="animation-delay: 150ms;"></div> <div class="w-0.5 h-2 bg-white rounded-full animate-pulse" style="animation-delay: 300ms;"></div></div>'),vr=vt('<span class="text-sm text-[var(--content-meta)]"></span>'),fr=vt('<div role="button" tabindex="0"><div class="w-6 h-6 flex items-center justify-center"><!></div> <div class="w-10 h-10 rounded-lg overflow-hidden bg-[var(--btn-regular-bg)] flex-shrink-0"><img class="w-full h-full object-cover"/></div> <div class="flex-1 min-w-0"><div> </div> <div> </div></div></div>'),pr=vt('<div class="playlist-panel float-panel fixed bottom-20 right-4 w-80 max-h-96 overflow-hidden z-50"><div class="playlist-header flex items-center justify-between p-4 border-b border-[var(--line-divider)]"><h3 class="text-lg font-semibold text-90"> </h3> <button class="btn-plain w-8 h-8 rounded-lg"><!></button></div> <div class="playlist-content overflow-y-auto max-h-80"></div></div>'),mr=vt(`<!> <div><div role="button" tabindex="0" aria-label="显示音乐播放器"><!></div> <div role="button" tabindex="0" aria-label="展开音乐播放器"><div class="flex items-center gap-3 cursor-pointer"><div class="cover-container relative w-12 h-12 rounded-full overflow-hidden"><img alt="封面"/> <div class="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"><!></div></div> <div class="flex-1 min-w-0"><div class="text-sm font-medium text-90 truncate"> </div> <div class="text-xs text-50 truncate"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div></div> <div><div class="flex items-center gap-4 mb-4"><div class="cover-container relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0"><img alt="封面"/></div> <div class="flex-1 min-w-0"><div class="song-title text-lg font-bold text-90 truncate mb-1"> </div> <div class="song-artist text-sm text-50 truncate"> </div> <div class="text-xs text-30 mt-1"> </div></div> <div class="flex items-center gap-1"><button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center" title="隐藏播放器"><!></button> <button class="btn-plain w-8 h-8 rounded-lg flex items-center justify-center"><!></button></div></div> <div class="progress-section mb-4"><div class="progress-bar flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="播放进度" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div></div> <div class="controls flex items-center justify-center gap-2 mb-4"><button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button> <button class="btn-plain w-10 h-10 rounded-lg"><!></button> <button><!></button></div> <div class="bottom-controls flex items-center gap-2"><button class="btn-plain w-8 h-8 rounded-lg"><!></button> <div class="flex-1 h-2 bg-[var(--btn-regular-bg)] rounded-full cursor-pointer" role="slider" tabindex="0" aria-label="音量控制" aria-valuemin="0" aria-valuemax="100"><div class="h-full bg-[var(--primary)] rounded-full transition-all duration-100"></div></div> <button><!></button></div></div> <!></div> <style>.orb-player {
	position: relative;
	backdrop-filter: blur(10px);
	-webkit-backdrop-filter: blur(10px);
}
.orb-player::before {
	content: '';
	position: absolute;
	inset: -2px;
	background: linear-gradient(45deg, var(--primary), transparent, var(--primary));
	border-radius: 50%;
	z-index: -1;
	opacity: 0;
	transition: opacity 0.3s ease;
}
.orb-player:hover::before {
	opacity: 0.3;
	animation: rotate 2s linear infinite;
}
.orb-player .animate-pulse {
	animation: musicWave 1.5s ease-in-out infinite;
}
@keyframes rotate {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}
@keyframes musicWave {
	0%, 100% { transform: scaleY(0.5); }
	50% { transform: scaleY(1); }
}
.music-player.hidden-mode {
	width: 48px;
	height: 48px;
}
.music-player {
    max-width: 320px;
    -webkit-user-select: none;
       -moz-user-select: none;
            user-select: none;
}
.mini-player {
    width: 280px;
    position: absolute;
    bottom: 0;
    right: 0;
    /*left: 0;*/
}
.expanded-player {
    width: 320px;
    position: absolute;
    bottom: 0;
    right: 0;
}
.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}
.progress-section div:hover,
.bottom-controls > div:hover {
    transform: scaleY(1.2);
    transition: transform 0.2s ease;
}
@media (max-width: 768px) {
    .music-player {
        max-width: 280px;
        /*left: 8px !important;*/
        bottom: 8px !important;
        right: 8px !important;
    }
    .music-player.expanded {
        width: calc(100vw - 16px);
        max-width: none;
        /*left: 8px !important;*/
        right: 8px !important;
    }
    .playlist-panel {
        width: calc(100vw - 16px) !important;
        /*left: 8px !important;*/
        right: 8px !important;
        max-width: none;
    }
    .controls {
        gap: 8px;
    }
    .controls button {
        width: 36px;
        height: 36px;
    }
    .controls button:nth-child(3) {
        width: 44px;
        height: 44px;
    }
}
@media (max-width: 480px) {
    .music-player {
        max-width: 260px;
    }
    .song-title {
        font-size: 14px;
    }
    .song-artist {
        font-size: 12px;
    }
    .controls {
        gap: 6px;
        margin-bottom: 12px;
    }
    .controls button {
        width: 32px;
        height: 32px;
    }
    .controls button:nth-child(3) {
        width: 40px;
        height: 40px;
    }
    .playlist-item {
        padding: 8px 12px;
    }
    .playlist-item .w-10 {
        width: 32px;
        height: 32px;
    }
}
@keyframes slide-up {
    from {
        transform: translateY(100%);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
}
.animate-slide-up {
    animation: slide-up 0.3s ease-out;
}
@media (hover: none) and (pointer: coarse) {
    .music-player button,
    .playlist-item {
        min-height: 44px;
    }
    .progress-section > div,
    .bottom-controls > div:nth-child(2) {
        height: 12px;
    }
}
/* 自定义旋转动画，停止时保持当前位置 */
@keyframes spin-continuous {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.cover-container img {
    animation: spin-continuous 3s linear infinite;
    animation-play-state: paused;
}
.cover-container img.spinning {
    animation-play-state: running;
}
/* 让主题色按钮更有视觉反馈 */
button.bg-\\[var\\(--primary\\)\\] {
    box-shadow: 0 0 0 2px var(--primary);
    border: none;
}</style>`,1);function Br(o,r){Ja(r,!1);let g=xt.mode??"meting",F=xt.meting_api??"https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&auth=:auth&r=:r",_=xt.id??"14175652304",p=xt.server??"netease",$=xt.type??"playlist",w=B(!1),L=B(!1),d=B(!1),b=B(!1),P=B(0),A=B(0),M=B(.7),S=B(!1),c=B(!1),j=B(!1),x=B(0),et=B(""),at=B(!1),I=B({title:"示例歌曲",artist:"示例艺术家",cover:"/favicon/favicon-light-192.png",url:"",duration:0}),m=B([]),k=B(0),a=B(),Q=B(),U=B();const Oe=[{id:1,title:"ひとり上手",artist:"Kaya",cover:"assets/music/cover/hitori.jpg",url:"assets/music/url/hitori.mp3",duration:240},{id:2,title:"眩耀夜行",artist:"スリーズブーケ",cover:"assets/music/cover/xryx.jpg",url:"assets/music/url/xryx.mp3",duration:180},{id:3,title:"春雷の頃",artist:"22/7",cover:"assets/music/cover/cl.jpg",url:"assets/music/url/cl.mp3",duration:200}];async function Ye(){if(!F||!_)return;u(c,!0);const n=F.replace(":server",p).replace(":type",$).replace(":id",_).replace(":auth","").replace(":r",Date.now().toString());try{const D=await fetch(n);if(!D.ok)throw new Error("meting api error");const H=await D.json();u(m,H.map(N=>{let ft=N.name??N.title??"未知歌曲",Ft=N.artist??N.author??"未知艺术家",R=N.duration??0;return R>1e4&&(R=Math.floor(R/1e3)),(!Number.isFinite(R)||R<=0)&&(R=0),{id:N.id,title:ft,artist:Ft,cover:N.pic??"",url:N.url??"",duration:R}})),t(m).length>0&&It(t(m)[0]),u(c,!1)}catch{Et("Meting 歌单获取失败"),u(c,!1)}}function qe(){!t(a)||!t(I).url||(t(w)?t(a).pause():t(a).play())}function yt(){u(L,!t(L)),t(L)&&(u(b,!1),u(d,!1))}function _t(){u(d,!t(d)),t(d)&&(u(L,!1),u(b,!1))}function re(){u(b,!t(b))}function Ke(){u(j,!t(j))}function Ue(){u(x,(t(x)+1)%3)}function He(){if(t(m).length<=1)return;const n=t(k)>0?t(k)-1:t(m).length-1;wt(n)}function $t(){if(t(m).length<=1)return;let n;if(t(j))do n=Math.floor(Math.random()*t(m).length);while(n===t(k)&&t(m).length>1);else n=t(k)<t(m).length-1?t(k)+1:0;wt(n)}function wt(n){if(n<0||n>=t(m).length)return;const D=t(w);u(k,n),t(a)&&t(a).pause(),It(t(m)[t(k)]),(D||!t(w))&&setTimeout(()=>{t(a)&&(t(a).readyState>=2?t(a).play().catch(()=>{}):t(a).addEventListener("canplay",()=>{t(a).play().catch(()=>{})},{once:!0}))},100)}function kt(n){return n.startsWith("http://")||n.startsWith("https://")||n.startsWith("/")?n:`/${n}`}function It(n){!n||!t(a)||(u(I,{...n}),n.url?(u(c,!0),t(a).pause(),K(a,t(a).currentTime=0),u(P,0),u(A,n.duration??0),t(a).removeEventListener("loadeddata",ie),t(a).removeEventListener("error",se),t(a).removeEventListener("loadstart",ne),t(a).addEventListener("loadeddata",ie,{once:!0}),t(a).addEventListener("error",se,{once:!0}),t(a).addEventListener("loadstart",ne,{once:!0}),K(a,t(a).src=kt(n.url)),t(a).load()):u(c,!1))}function ie(){u(c,!1),t(a)?.duration&&t(a).duration>1&&(u(A,Math.floor(t(a).duration)),t(m)[t(k)]&&K(m,t(m)[t(k)].duration=t(A)),K(I,t(I).duration=t(A)))}function se(n){u(c,!1),Et(`无法播放 "${t(I).title}"，正在尝试下一首...`),t(m).length>1?setTimeout(()=>$t(),1e3):Et("播放列表中没有可用的歌曲")}function ne(){}function Et(n){u(et,n),u(at,!0),setTimeout(()=>{u(at,!1)},3e3)}function Xe(){u(at,!1)}function Ge(n){if(!t(a)||!t(Q))return;const D=t(Q).getBoundingClientRect(),N=(n.clientX-D.left)/D.width*t(A);K(a,t(a).currentTime=N),u(P,N)}function Je(n){if(!t(a)||!t(U))return;const D=t(U).getBoundingClientRect(),H=Math.max(0,Math.min(1,(n.clientX-D.left)/D.width));u(M,H),K(a,t(a).volume=t(M)),u(S,t(M)===0)}function le(){t(a)&&(u(S,!t(S)),K(a,t(a).muted=t(S)))}function oe(n){if(!Number.isFinite(n)||n<0)return"0:00";const D=Math.floor(n/60),H=Math.floor(n%60);return`${D}:${H.toString().padStart(2,"0")}`}function Ve(){t(a)&&(t(a).addEventListener("play",()=>{u(w,!0)}),t(a).addEventListener("pause",()=>{u(w,!1)}),t(a).addEventListener("timeupdate",()=>{u(P,t(a).currentTime)}),t(a).addEventListener("ended",()=>{t(x)===1?(K(a,t(a).currentTime=0),t(a).play().catch(()=>{})):t(x)===2||t(k)<t(m).length-1||t(j)?$t():u(w,!1)}),t(a).addEventListener("error",n=>{u(c,!1)}),t(a).addEventListener("stalled",()=>{}),t(a).addEventListener("waiting",()=>{}))}Ia(()=>{u(a,new Audio),K(a,t(a).volume=t(M)),Ve(),g==="meting"?Ye():(u(m,[...Oe]),t(m).length>0?It(t(m)[0]):Et("本地播放列表为空"))}),Ra(()=>{t(a)&&(t(a).pause(),K(a,t(a).src=""))}),Na();var ue=it(),Qe=tt(ue);{var Ze=n=>{var D=mr(),H=tt(D);{var N=e=>{var h=cr(),E=s(h),C=s(E);f(C,{icon:"material-symbols:error",class:"text-xl flex-shrink-0"});var T=v(C,2),l=s(T,!0);i(T);var X=v(T,2),ct=s(X);f(ct,{icon:"material-symbols:close",class:"text-lg"}),i(X),i(E),i(h),Pt(()=>J(l,t(et))),y("click",X,Xe),W(e,h)};z(H,e=>{t(at)&&e(N)})}var ft=v(H,2);let Ft;var R=s(ft);let ce;var ta=s(R);{var ea=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-lg"})},aa=e=>{var h=it(),E=tt(h);{var C=l=>{var X=dr();W(l,X)},T=l=>{f(l,{icon:"material-symbols:music-note",class:"text-white text-lg"})};z(E,l=>{t(w)?l(C):l(T,!1)},!0)}W(e,h)};z(ta,e=>{t(c)?e(ea):e(aa,!1)})}i(R);var nt=v(R,2);let de;var ve=s(nt),Rt=s(ve),Nt=s(Rt);let fe;var pe=v(Nt,2),ra=s(pe);{var ia=e=>{f(e,{icon:"eos-icons:loading",class:"text-white text-xl"})},sa=e=>{var h=it(),E=tt(h);{var C=l=>{f(l,{icon:"material-symbols:pause",class:"text-white text-xl"})},T=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-white text-xl"})};z(E,l=>{t(w)?l(C):l(T,!1)},!0)}W(e,h)};z(ra,e=>{t(c)?e(ia):e(sa,!1)})}i(pe),i(Rt);var Wt=v(Rt,2),Ot=s(Wt),na=s(Ot,!0);i(Ot);var me=v(Ot,2),la=s(me,!0);i(me),i(Wt);var he=v(Wt,2),At=s(he),oa=s(At);f(oa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(At);var Yt=v(At,2),ua=s(Yt);f(ua,{icon:"material-symbols:expand-less",class:"text-lg"}),i(Yt),i(he),i(ve),i(nt);var Bt=v(nt,2);let ge;var qt=s(Bt),Kt=s(qt),be=s(Kt);let xe;i(Kt);var Ut=v(Kt,2),Ht=s(Ut),ca=s(Ht,!0);i(Ht);var Xt=v(Ht,2),da=s(Xt,!0);i(Xt);var ye=v(Xt,2),va=s(ye);i(ye),i(Ut);var _e=v(Ut,2),Ct=s(_e),fa=s(Ct);f(fa,{icon:"material-symbols:visibility-off",class:"text-lg"}),i(Ct);var Gt=v(Ct,2),pa=s(Gt);f(pa,{icon:"material-symbols:expand-more",class:"text-lg"}),i(Gt),i(_e),i(qt);var Jt=v(qt,2),lt=s(Jt),ma=s(lt);i(lt),Pe(lt,e=>u(Q,e),()=>t(Q)),i(Jt);var Vt=v(Jt,2),ot=s(Vt);let we;var ha=s(ot);f(ha,{icon:"material-symbols:shuffle",class:"text-lg"}),i(ot);var pt=v(ot,2),ga=s(pt);f(ga,{icon:"material-symbols:skip-previous",class:"text-xl"}),i(pt);var ut=v(pt,2);let ke;var ba=s(ut);{var xa=e=>{f(e,{icon:"eos-icons:loading",class:"text-xl"})},ya=e=>{var h=it(),E=tt(h);{var C=l=>{f(l,{icon:"material-symbols:pause",class:"text-xl"})},T=l=>{f(l,{icon:"material-symbols:play-arrow",class:"text-xl"})};z(E,l=>{t(w)?l(C):l(T,!1)},!0)}W(e,h)};z(ba,e=>{t(c)?e(xa):e(ya,!1)})}i(ut);var mt=v(ut,2),_a=s(mt);f(_a,{icon:"material-symbols:skip-next",class:"text-xl"}),i(mt);var Lt=v(mt,2);let Ee;var wa=s(Lt);{var ka=e=>{f(e,{icon:"material-symbols:repeat-one",class:"text-lg"})},Ea=e=>{var h=it(),E=tt(h);{var C=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg"})},T=l=>{f(l,{icon:"material-symbols:repeat",class:"text-lg opacity-50"})};z(E,l=>{t(x)===2?l(C):l(T,!1)},!0)}W(e,h)};z(wa,e=>{t(x)===1?e(ka):e(Ea,!1)})}i(Lt),i(Vt);var Fe=v(Vt,2),Tt=s(Fe),Fa=s(Tt);{var Aa=e=>{f(e,{icon:"material-symbols:volume-off",class:"text-lg"})},Ba=e=>{var h=it(),E=tt(h);{var C=l=>{f(l,{icon:"material-symbols:volume-down",class:"text-lg"})},T=l=>{f(l,{icon:"material-symbols:volume-up",class:"text-lg"})};z(E,l=>{t(M)<.5?l(C):l(T,!1)},!0)}W(e,h)};z(Fa,e=>{t(S)||t(M)===0?e(Aa):e(Ba,!1)})}i(Tt);var rt=v(Tt,2),Ca=s(rt);i(rt),Pe(rt,e=>u(U,e),()=>t(U));var Mt=v(rt,2);let Ae;var La=s(Mt);f(La,{icon:"material-symbols:queue-music",class:"text-lg"}),i(Mt),i(Fe),i(Bt);var Ta=v(Bt,2);{var Ma=e=>{var h=pr(),E=s(h),C=s(E),T=s(C,!0);i(C);var l=v(C,2),X=s(l);f(X,{icon:"material-symbols:close",class:"text-lg"}),i(l),i(E);var ct=v(E,2);Za(ct,5,()=>t(m),tr,(ht,Z,Y)=>{var G=fr();let St;var gt=s(G),Sa=s(gt);{var ja=q=>{f(q,{icon:"material-symbols:graphic-eq",class:"text-[var(--primary)] animate-pulse"})},Da=q=>{var Dt=it(),te=tt(Dt);{var ee=dt=>{f(dt,{icon:"material-symbols:pause",class:"text-[var(--primary)]"})},$a=dt=>{var Me=vr();Me.textContent=Y+1,W(dt,Me)};z(te,dt=>{Y===t(k)?dt(ee):dt($a,!1)},!0)}W(q,Dt)};z(Sa,q=>{Y===t(k)&&t(w)?q(ja):q(Da,!1)})}i(gt);var Qt=v(gt,2),Be=s(Qt);i(Qt);var Ce=v(Qt,2),jt=s(Ce);let Le;var Pa=s(jt,!0);i(jt);var Zt=v(jt,2);let Te;var za=s(Zt,!0);i(Zt),i(Ce),i(G),Pt((q,Dt,te,ee)=>{St=O(G,1,"playlist-item flex items-center gap-3 p-3 hover:bg-[var(--btn-plain-bg-hover)] cursor-pointer transition-colors",null,St,q),st(G,"aria-label",`播放 ${t(Z).title??""} - ${t(Z).artist??""}`),st(Be,"src",Dt),st(Be,"alt",t(Z).title),Le=O(jt,1,"font-medium truncate",null,Le,te),J(Pa,t(Z).title),Te=O(Zt,1,"text-sm text-[var(--content-meta)] truncate",null,Te,ee),J(za,t(Z).artist)},[()=>({"bg-[var(--btn-plain-bg)]":Y===t(k),"text-[var(--primary)]":Y===t(k)}),()=>kt(t(Z).cover),()=>({"text-[var(--primary)]":Y===t(k),"text-90":Y!==t(k)}),()=>({"text-[var(--primary)]":Y===t(k)})]),y("click",G,()=>wt(Y)),y("keydown",G,q=>{(q.key==="Enter"||q.key===" ")&&(q.preventDefault(),wt(Y))}),W(ht,G)}),i(ct),i(h),Pt(ht=>J(T,ht),[()=>ar(er.playlist)]),y("click",l,re),lr(3,h,()=>ur,()=>({duration:300,axis:"y"})),W(e,h)};z(Ta,e=>{t(b)&&e(Ma)})}i(ft),Va(2),Pt((e,h,E,C,T,l,X,ct,ht,Z,Y,G,St,gt)=>{Ft=O(ft,1,"music-player fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out",null,Ft,e),ce=O(R,1,"orb-player w-12 h-12 bg-[var(--primary)] rounded-full shadow-lg cursor-pointer transition-all duration-500 ease-in-out flex items-center justify-center hover:scale-110 active:scale-95",null,ce,h),de=O(nt,1,"mini-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-3 transition-all duration-500 ease-in-out",null,de,E),st(Nt,"src",C),fe=O(Nt,1,"w-full h-full object-cover transition-transform duration-300",null,fe,T),J(na,t(I).title),J(la,t(I).artist),ge=O(Bt,1,"expanded-player card-base bg-[var(--float-panel-bg)] shadow-xl rounded-2xl p-4 transition-all duration-500 ease-in-out",null,ge,l),st(be,"src",X),xe=O(be,1,"w-full h-full object-cover transition-transform duration-300",null,xe,ct),J(ca,t(I).title),J(da,t(I).artist),J(va,`${ht??""} / ${Z??""}`),st(lt,"aria-valuenow",t(A)>0?t(P)/t(A)*100:0),Se(ma,`width: ${t(A)>0?t(P)/t(A)*100:0}%`),we=O(ot,1,"w-10 h-10 rounded-lg",null,we,Y),ot.disabled=t(m).length<=1,pt.disabled=t(m).length<=1,ke=O(ut,1,"btn-regular w-12 h-12 rounded-full",null,ke,G),ut.disabled=t(c),mt.disabled=t(m).length<=1,Ee=O(Lt,1,"w-10 h-10 rounded-lg",null,Ee,St),st(rt,"aria-valuenow",t(M)*100),Se(Ca,`width: ${t(M)*100}%`),Ae=O(Mt,1,"btn-plain w-8 h-8 rounded-lg",null,Ae,gt)},[()=>({expanded:t(L),"hidden-mode":t(d)}),()=>({"opacity-0":!t(d),"scale-0":!t(d),"pointer-events-none":!t(d)}),()=>({"opacity-0":t(L)||t(d),"scale-95":t(L)||t(d),"pointer-events-none":t(L)||t(d)}),()=>kt(t(I).cover),()=>({spinning:t(w)&&!t(c),"animate-pulse":t(c)}),()=>({"opacity-0":!t(L),"scale-95":!t(L),"pointer-events-none":!t(L)}),()=>kt(t(I).cover),()=>({spinning:t(w)&&!t(c),"animate-pulse":t(c)}),()=>oe(t(P)),()=>oe(t(A)),()=>({"btn-regular":t(j),"btn-plain":!t(j)}),()=>({"opacity-50":t(c)}),()=>({"btn-regular":t(x)>0,"btn-plain":t(x)===0}),()=>({"text-[var(--primary)]":t(b)})]),y("click",R,_t),y("keydown",R,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),_t())}),y("click",At,ze(_t)),y("click",Yt,ze(yt)),y("click",nt,yt),y("keydown",nt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),yt())}),y("click",Ct,_t),y("click",Gt,yt),y("click",lt,Ge),y("keydown",lt,e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault(),t(Q).getBoundingClientRect();const E=.5*t(A);t(a)&&(K(a,t(a).currentTime=E),u(P,E))}}),y("click",ot,Ke),y("click",pt,He),y("click",ut,qe),y("click",mt,$t),y("click",Lt,Ue),y("click",Tt,le),y("click",rt,Je),y("keydown",rt,e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),e.key==="Enter"&&le())}),y("click",Mt,re),W(n,D)};z(Qe,n=>{n(Ze)})}W(o,ue),Ga()}export{Br as default};
