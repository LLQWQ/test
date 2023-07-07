import{h as p,G as T,n as S,E as O,Q as _,r as i,Z as Q,$ as B,K as W,J as z,a0 as q,p as L,e as R,f as N,a1 as Y,b as m,a2 as $,a3 as ee,H as K,C as M,D as X,k as H,m as g,g as te,a4 as ne,a5 as oe,a6 as ae,a7 as se,a8 as le,F as ce,a9 as re,M as ie,Y as ue,s as de,aa as ve,I as fe,ab as me,R as ye}from"./index.35e1b9dc.js";function j(e){const t=T();t&&p(t.proxy,e)}const F={show:Boolean,zIndex:S,overlay:O,duration:S,teleport:[String,Object],lockScroll:O,lazyRender:O,beforeClose:Function,overlayStyle:Object,overlayClass:_,transitionAppear:Boolean,closeOnClickOverlay:O},Ae=Object.keys(F);function he(e,t){return e>t?"horizontal":t>e?"vertical":""}function Ie(){const e=i(0),t=i(0),n=i(0),l=i(0),o=i(0),c=i(0),a=i(""),r=()=>a.value==="vertical",w=()=>a.value==="horizontal",y=()=>{n.value=0,l.value=0,o.value=0,c.value=0,a.value=""};return{move:v=>{const d=v.touches[0];n.value=(d.clientX<0?0:d.clientX)-e.value,l.value=d.clientY-t.value,o.value=Math.abs(n.value),c.value=Math.abs(l.value);const I=10;(!a.value||o.value<I&&c.value<I)&&(a.value=he(o.value,c.value))},start:v=>{y(),e.value=v.touches[0].clientX,t.value=v.touches[0].clientY},reset:y,startX:e,startY:t,deltaX:n,deltaY:l,offsetX:o,offsetY:c,direction:a,isVertical:r,isHorizontal:w}}let b=0;const E="van-overflow-hidden";function Ce(e,t){const n=Ie(),l="01",o="10",c=u=>{n.move(u);const h=n.deltaY.value>0?o:l,v=q(u.target,e.value),{scrollHeight:d,offsetHeight:I,scrollTop:k}=v;let C="11";k===0?C=I>=d?"00":"01":k+I>=d&&(C="10"),C!=="11"&&n.isVertical()&&!(parseInt(C,2)&parseInt(h,2))&&L(u,!0)},a=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",c,{passive:!1}),b||document.body.classList.add(E),b++},r=()=>{b&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",c),b--,b||document.body.classList.remove(E))},w=()=>t()&&a(),y=()=>t()&&r();Q(w),B(y),W(y),z(t,u=>{u?a():r()})}function G(e){const t=i(!1);return z(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const[Oe,we]=R("overlay"),be={show:Boolean,zIndex:S,duration:S,className:_,lockScroll:O,lazyRender:O,customStyle:Object};var ke=N({name:Oe,props:be,setup(e,{slots:t}){const n=i(),l=G(()=>e.show||!e.lazyRender),o=a=>{e.lockScroll&&L(a,!0)},c=l(()=>{var a;const r=p(ee(e.zIndex),e.customStyle);return K(e.duration)&&(r.animationDuration=`${e.duration}s`),M(m("div",{ref:n,style:r,class:[we(),e.className]},[(a=t.default)==null?void 0:a.call(t)]),[[X,e.show]])});return Y("touchmove",o,{target:n}),()=>m($,{name:"van-fade",appear:!0},{default:c})}});const Pe=H(ke),Se=p({},F,{round:Boolean,position:g("center"),closeIcon:g("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:g("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[pe,D]=R("popup");var xe=N({name:pe,inheritAttrs:!1,props:Se,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:t,attrs:n,slots:l}){let o,c;const a=i(),r=i(),w=G(()=>e.show||!e.lazyRender),y=te(()=>{const s={zIndex:a.value};if(K(e.duration)){const f=e.position==="center"?"animationDuration":"transitionDuration";s[f]=`${e.duration}s`}return s}),u=()=>{o||(o=!0,a.value=e.zIndex!==void 0?+e.zIndex:re(),t("open"))},h=()=>{o&&ue(e.beforeClose,{done(){o=!1,t("close"),t("update:show",!1)}})},v=s=>{t("clickOverlay",s),e.closeOnClickOverlay&&h()},d=()=>{if(e.overlay)return m(Pe,{show:e.show,class:e.overlayClass,zIndex:a.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:v},{default:l["overlay-content"]})},I=s=>{t("clickCloseIcon",s),h()},k=()=>{if(e.closeable)return m(fe,{role:"button",tabindex:0,name:e.closeIcon,class:[D("close-icon",e.closeIconPosition),ve],classPrefix:e.iconPrefix,onClick:I},null)},C=()=>t("opened"),U=()=>t("closed"),V=s=>t("keydown",s),Z=w(()=>{var s;const{round:f,position:P,safeAreaInsetTop:x,safeAreaInsetBottom:J}=e;return M(m("div",de({ref:r,style:y.value,role:"dialog",tabindex:0,class:[D({round:f,[P]:P}),{"van-safe-area-top":x,"van-safe-area-bottom":J}],onKeydown:V},n),[(s=l.default)==null?void 0:s.call(l),k()]),[[X,e.show]])}),A=()=>{const{position:s,transition:f,transitionAppear:P}=e,x=s==="center"?"van-fade":`van-popup-slide-${s}`;return m($,{name:f||x,appear:P,onAfterEnter:C,onAfterLeave:U},{default:Z})};return z(()=>e.show,s=>{s&&!o&&(u(),n.tabindex===0&&ie(()=>{var f;(f=r.value)==null||f.focus()})),!s&&o&&(o=!1,t("close"))}),j({popupRef:r}),Ce(r,()=>e.show&&e.lockScroll),Y("popstate",()=>{e.closeOnPopstate&&(h(),c=!1)}),ne(()=>{e.show&&u()}),oe(()=>{c&&(t("update:show",!0),c=!1)}),B(()=>{e.show&&e.teleport&&(h(),c=!0)}),ae(se,()=>e.show),()=>e.teleport?m(le,{to:e.teleport},{default:()=>[d(),A()]}):m(ce,null,[d(),A()])}});const Ee=H(xe);let ge=0;function De(){const e=T(),{name:t="unknown"}=(e==null?void 0:e.type)||{};return`${t}-${++ge}`}function Te(){const e=ye({show:!1}),t=o=>{e.show=o},n=o=>{p(e,o,{transitionAppear:!0}),t(!0)},l=()=>t(!1);return j({open:n,close:l,toggle:t}),{open:n,close:l,state:e,toggle:t}}function _e(e){const t=me(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}export{Ee as P,Te as a,j as b,Ae as c,Ie as d,_e as m,F as p,De as u};
