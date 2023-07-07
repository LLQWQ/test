import{e as S,f as k,r as O,N as p,O as z,E as P,b as n,k as T,h as R,l as L,u as U,P as M,g as _,n as V,Q as Y,m as j,R as Q,s as W,S as X,j as q,T as G,U as A,V as J,W as Z,X as ee,Y as te}from"./index.35e1b9dc.js";import{b as ne,p as oe,c as ae,P as le}from"./mount-component.b7f8db3d.js";import{B as x}from"./index.33951877.js";const[N,D]=S("action-bar"),F=Symbol(N),se={placeholder:Boolean,safeAreaInsetBottom:P};var ce=k({name:N,props:se,setup(e,{slots:r}){const o=O(),i=p(o,D),{linkChildren:l}=z(F);l();const f=()=>{var m;return n("div",{ref:o,class:[D(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(m=r.default)==null?void 0:m.call(r)])};return()=>e.placeholder?i(f):f()}});const re=T(ce),[ie,ue]=S("action-bar-button"),de=R({},L,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var fe=k({name:ie,props:de,setup(e,{slots:r}){const o=U(),{parent:i,index:l}=M(F),f=_(()=>{if(i){const s=i.children[l.value-1];return!(s&&"isButton"in s)}}),m=_(()=>{if(i){const s=i.children[l.value+1];return!(s&&"isButton"in s)}});return ne({isButton:!0}),()=>{const{type:s,icon:B,text:g,color:C,loading:v,disabled:w}=e;return n(x,{class:ue([s,{last:m.value,first:f.value}]),size:"large",type:s,icon:B,color:C,loading:v,disabled:w,onClick:o},{default:()=>[r.default?r.default():g]})}}});const E=T(fe),[me,c,b]=S("dialog"),Be=R({},oe,{title:String,theme:String,width:V,message:[String,Function],callback:Function,allowHtml:Boolean,className:Y,transition:j("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:P,closeOnClickOverlay:Boolean}),ge=[...ae,"transition","closeOnPopstate"];var he=k({name:me,props:Be,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:r,slots:o}){const i=O(),l=Q({confirm:!1,cancel:!1}),f=t=>r("update:show",t),m=t=>{var a;f(!1),(a=e.callback)==null||a.call(e,t)},s=t=>()=>{!e.show||(r(t),e.beforeClose?(l[t]=!0,te(e.beforeClose,{args:[t],done(){m(t),l[t]=!1},canceled(){l[t]=!1}})):m(t))},B=s("cancel"),g=s("confirm"),C=G(t=>{var a,u;if(t.target!==((u=(a=i.value)==null?void 0:a.popupRef)==null?void 0:u.value))return;({Enter:e.showConfirmButton?g:A,Escape:e.showCancelButton?B:A})[t.key](),r("keydown",t)},["enter","esc"]),v=()=>{const t=o.title?o.title():e.title;if(t)return n("div",{class:c("header",{isolated:!e.message&&!o.default})},[t])},w=t=>{const{message:a,allowHtml:u,messageAlign:d}=e,h=c("message",{"has-title":t,[d]:d}),y=J(a)?a():a;return u&&typeof y=="string"?n("div",{class:h,innerHTML:y},null):n("div",{class:h},[y])},I=()=>{if(o.default)return n("div",{class:c("content")},[o.default()]);const{title:t,message:a,allowHtml:u}=e;if(a){const d=!!(t||o.title);return n("div",{key:u?1:0,class:c("content",{isolated:!d})},[w(d)])}},K=()=>n("div",{class:[ee,c("footer")]},[e.showCancelButton&&n(x,{size:"large",text:e.cancelButtonText||b("cancel"),class:c("cancel"),style:{color:e.cancelButtonColor},loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(x,{size:"large",text:e.confirmButtonText||b("confirm"),class:[c("confirm"),{[Z]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),$=()=>n(re,{class:c("footer")},{default:()=>[e.showCancelButton&&n(E,{type:"warning",text:e.cancelButtonText||b("cancel"),class:c("cancel"),color:e.cancelButtonColor,loading:l.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(E,{type:"danger",text:e.confirmButtonText||b("confirm"),class:c("confirm"),color:e.confirmButtonColor,loading:l.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),H=()=>o.footer?o.footer():e.theme==="round-button"?$():K();return()=>{const{width:t,title:a,theme:u,message:d,className:h}=e;return n(le,W({ref:i,role:"dialog",class:[c([u]),h],style:{width:q(t)},tabindex:0,"aria-labelledby":a||d,onKeydown:C,"onUpdate:show":f},X(e,ge)),{default:()=>[v(),I(),H()]})}}});const we=T(he);export{we as D,he as s};
