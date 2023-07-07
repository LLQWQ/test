import{n as b,v as O,y as M,r as d,T as ae,U,V as F,W as $,X as le,p as H,e as A,h as D,Y as V,b as u,Z as G,f as Z,$ as se,a0 as R,R as N,S as W,i as Y,m as z,j as J,a1 as q,a2 as re,a3 as ce,a4 as ie,a5 as ue,N as de,a6 as ve,a7 as T,A as _,J as fe,a8 as he,I as Q,a9 as p,l as B,K as ye,aa as me}from"./index.140fe4bf.js";import{a as ee,u as Ie}from"./use-lazy-render.081f2cfb.js";const oe={show:Boolean,zIndex:b,overlay:O,duration:b,teleport:[String,Object],lockScroll:O,lazyRender:O,beforeClose:Function,overlayStyle:Object,overlayClass:M,transitionAppear:Boolean,closeOnClickOverlay:O},De=Object.keys(oe);function ge(e,n){return e>n?"horizontal":n>e?"vertical":""}function we(){const e=d(0),n=d(0),s=d(0),r=d(0),t=d(0),l=d(0),a=d(""),i=()=>a.value==="vertical",g=()=>a.value==="horizontal",h=()=>{s.value=0,r.value=0,t.value=0,l.value=0,a.value=""};return{move:m=>{const f=m.touches[0];s.value=(f.clientX<0?0:f.clientX)-e.value,r.value=f.clientY-n.value,t.value=Math.abs(s.value),l.value=Math.abs(r.value);const I=10;(!a.value||t.value<I&&l.value<I)&&(a.value=ge(t.value,l.value))},start:m=>{h(),e.value=m.touches[0].clientX,n.value=m.touches[0].clientY},reset:h,startX:e,startY:n,deltaX:s,deltaY:r,offsetX:t,offsetY:l,direction:a,isVertical:i,isHorizontal:g}}let C=0;const K="van-overflow-hidden";function be(e,n){const s=we(),r="01",t="10",l=v=>{s.move(v);const y=s.deltaY.value>0?t:r,m=le(v.target,e.value),{scrollHeight:f,offsetHeight:I,scrollTop:P}=m;let o="11";P===0?o=I>=f?"00":"01":P+I>=f&&(o="10"),o!=="11"&&s.isVertical()&&!(parseInt(o,2)&parseInt(y,2))&&H(v,!0)},a=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",l,{passive:!1}),C||document.body.classList.add(K),C++},i=()=>{C&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",l),C--,C||document.body.classList.remove(K))},g=()=>n()&&a(),h=()=>n()&&i();ae(g),U(h),F(h),$(n,v=>{v?a():i()})}const[Oe,Pe]=A("overlay"),Se={show:Boolean,zIndex:b,duration:b,className:M,lockScroll:O,lazyRender:O,customStyle:Object};var ke=D({name:Oe,props:Se,setup(e,{slots:n}){const s=d(),r=ee(()=>e.show||!e.lazyRender),t=a=>{e.lockScroll&&H(a,!0)},l=r(()=>{var a;const i=Z(se(e.zIndex),e.customStyle);return R(e.duration)&&(i.animationDuration=`${e.duration}s`),N(u("div",{ref:s,style:i,class:[Pe(),e.className]},[(a=n.default)==null?void 0:a.call(n)]),[[W,e.show]])});return V("touchmove",t,{target:s}),()=>u(G,{name:"van-fade",appear:!0},{default:l})}});const Ce=Y(ke),ze=Z({},oe,{round:Boolean,position:z("center"),closeIcon:z("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:z("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[xe,X]=A("popup");var Le=D({name:xe,inheritAttrs:!1,props:ze,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:n,attrs:s,slots:r}){let t,l;const a=d(),i=d(),g=ee(()=>e.show||!e.lazyRender),h=J(()=>{const c={zIndex:a.value};if(R(e.duration)){const w=e.position==="center"?"animationDuration":"transitionDuration";c[w]=`${e.duration}s`}return c}),v=()=>{t||(t=!0,a.value=e.zIndex!==void 0?+e.zIndex:ve(),n("open"))},y=()=>{t&&fe(e.beforeClose,{done(){t=!1,n("close"),n("update:show",!1)}})},m=c=>{n("clickOverlay",c),e.closeOnClickOverlay&&y()},f=()=>{if(e.overlay)return u(Ce,{show:e.show,class:e.overlayClass,zIndex:a.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:m},{default:r["overlay-content"]})},I=c=>{n("clickCloseIcon",c),y()},P=()=>{if(e.closeable)return u(Q,{role:"button",tabindex:0,name:e.closeIcon,class:[X("close-icon",e.closeIconPosition),he],classPrefix:e.iconPrefix,onClick:I},null)},o=()=>n("opened"),S=()=>n("closed"),x=c=>n("keydown",c),ne=g(()=>{var c;const{round:w,position:L,safeAreaInsetTop:E,safeAreaInsetBottom:te}=e;return N(u("div",_({ref:i,style:h.value,role:"dialog",tabindex:0,class:[X({round:w,[L]:L}),{"van-safe-area-top":E,"van-safe-area-bottom":te}],onKeydown:x},s),[(c=r.default)==null?void 0:c.call(r),P()]),[[W,e.show]])}),j=()=>{const{position:c,transition:w,transitionAppear:L}=e,E=c==="center"?"van-fade":`van-popup-slide-${c}`;return u(G,{name:w||E,appear:L,onAfterEnter:o,onAfterLeave:S},{default:ne})};return $(()=>e.show,c=>{c&&!t&&(v(),s.tabindex===0&&T(()=>{var w;(w=i.value)==null||w.focus()})),!c&&t&&(t=!1,n("close"))}),Ie({popupRef:i}),be(i,()=>e.show&&e.lockScroll),V("popstate",()=>{e.closeOnPopstate&&(y(),l=!1)}),q(()=>{e.show&&v()}),re(()=>{l&&(n("update:show",!0),l=!1)}),U(()=>{e.show&&e.teleport&&(y(),l=!0)}),ce(ie,()=>e.show),()=>e.teleport?u(ue,{to:e.teleport},{default:()=>[f(),j()]}):u(de,null,[f(),j()])}});const Re=Y(Le);let Ee=0;function Ne(){const e=p(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++Ee}`}const[Be,k]=A("image"),Te={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:b,height:b,radius:b,lazyLoad:Boolean,iconSize:b,showError:O,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:O,loadingIcon:z("photo")};var _e=D({name:Be,props:Te,emits:["load","error"],setup(e,{emit:n,slots:s}){const r=d(!1),t=d(!0),l=d(),{$Lazyload:a}=p().proxy,i=J(()=>{const o={width:B(e.width),height:B(e.height)};return R(e.radius)&&(o.overflow="hidden",o.borderRadius=B(e.radius)),o});$(()=>e.src,()=>{r.value=!1,t.value=!0});const g=o=>{t.value&&(t.value=!1,n("load",o))},h=()=>{const o=new Event("load");Object.defineProperty(o,"target",{value:l.value,enumerable:!0}),g(o)},v=o=>{r.value=!0,t.value=!1,n("error",o)},y=(o,S,x)=>x?x():u(Q,{name:o,size:e.iconSize,class:S,classPrefix:e.iconPrefix},null),m=()=>{if(t.value&&e.showLoading)return u("div",{class:k("loading")},[y(e.loadingIcon,k("loading-icon"),s.loading)]);if(r.value&&e.showError)return u("div",{class:k("error")},[y(e.errorIcon,k("error-icon"),s.error)])},f=()=>{if(r.value||!e.src)return;const o={alt:e.alt,class:k("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?N(u("img",_({ref:l},o),null),[[me("lazy"),e.src]]):u("img",_({ref:l,src:e.src,onLoad:g,onError:v},o),null)},I=({el:o})=>{const S=()=>{o===l.value&&t.value&&h()};l.value?S():T(S)},P=({el:o})=>{o===l.value&&!r.value&&v()};return a&&ye&&(a.$on("loaded",I),a.$on("error",P),F(()=>{a.$off("loaded",I),a.$off("error",P)})),q(()=>{T(()=>{var o;(o=l.value)!=null&&o.complete&&h()})}),()=>{var o;return u("div",{class:k({round:e.round,block:e.block}),style:i.value},[f(),m(),(o=s.default)==null?void 0:o.call(s)])}}});const Ye=Y(_e);export{Ye as I,Re as P,De as a,we as b,oe as p,Ne as u};
