import{e as O,v as P,h as V,s as z,b as f,aq as A,i as E,f as H,n as $,r as y,x as D,j as S,W as j,aF as q,C as I,A as F,R as K,S as M,a7 as U,as as W,_ as Y,o as G,c as J,w,ad as Q,ae as X,a as s}from"./index.140fe4bf.js";import{c as T,C as Z}from"./index.1b539740.js";import{u as B,a as ee}from"./use-lazy-render.081f2cfb.js";const[L,ae]=O("collapse"),N=Symbol(L),se={border:P,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}};var te=V({name:L,props:se,emits:["change","update:modelValue"],setup(a,{emit:n,slots:l}){const{linkChildren:i,children:u}=z(N),o=e=>{n("change",e),n("update:modelValue",e)},v=(e,d)=>{const{accordion:r,modelValue:m}=a;o(r?e===m?"":e:d?m.concat(e):m.filter(b=>b!==e))},c=(e={})=>{if(a.accordion)return;typeof e=="boolean"&&(e={expanded:e});const{expanded:d,skipDisabled:r}=e,b=u.filter(p=>p.disabled&&r?p.expanded.value:d!=null?d:!p.expanded.value).map(p=>p.itemName.value);o(b)},_=e=>{const{accordion:d,modelValue:r}=a;return d?r===e:r.includes(e)};return B({toggleAll:c}),i({toggle:v,isExpanded:_}),()=>{var e;return f("div",{class:[ae(),{[A]:a.border}]},[(e=l.default)==null?void 0:e.call(l)])}}});const le=E(te),[ne,g]=O("collapse-item"),oe=["icon","title","value","label","right-icon"],ce=H({},T,{name:$,isLink:P,disabled:Boolean,readonly:Boolean,lazyRender:P});var de=V({name:ne,props:ce,setup(a,{slots:n}){const l=y(),i=y(),{parent:u,index:o}=D(N);if(!u)return;const v=S(()=>{var t;return(t=a.name)!=null?t:o.value}),c=S(()=>u.isExpanded(v.value)),_=y(c.value),e=ee(()=>_.value||!a.lazyRender),d=()=>{c.value?l.value&&(l.value.style.height=""):_.value=!1};j(c,(t,x)=>{if(x===null)return;t&&(_.value=!0),(t?U:W)(()=>{if(!i.value||!l.value)return;const{offsetHeight:h}=i.value;if(h){const R=`${h}px`;l.value.style.height=t?"0":R,q(()=>{l.value&&(l.value.style.height=t?R:"0")})}else d()})});const r=(t=!c.value)=>{u.toggle(v.value,t)},m=()=>{!a.disabled&&!a.readonly&&r()},b=()=>{const{border:t,disabled:x,readonly:k}=a,h=I(a,Object.keys(T));return k&&(h.isLink=!1),(x||k)&&(h.clickable=!1),f(Z,F({role:"button",class:g("title",{disabled:x,expanded:c.value,borderless:!t}),"aria-expanded":String(c.value),onClick:m},h),I(n,oe))},p=e(()=>{var t;return K(f("div",{ref:l,class:g("wrapper"),onTransitionend:d},[f("div",{ref:i,class:g("content")},[(t=n.default)==null?void 0:t.call(n)])]),[[M,_.value]])});return B({toggle:r,expanded:c,itemName:v}),()=>f("div",{class:[g({border:o.value&&a.border})]},[b(),p()])}});const re=E(de);const C=a=>(Q("data-v-8aa1a5bc"),a=a(),X(),a),ie={style:{"background-color":"#f4f4f4"}},ue=C(()=>s("h2",{style:{margin:"6px 0",padding:"0"}},"\u5386\u53F2\u8BB0\u5F55",-1)),ve=C(()=>s("div",{class:"warp"},[s("div",{class:"userInfo"},[s("div",{class:"nameOrPhone"},"\u5F20\u4E09 (138........)"),s("div",{class:"hospital"},"\u4E0A\u6D77\u5E02\u4EBA\u6C11\u533B\u9662")]),s("div",{class:"time"},"\u5B8C\u6210\u63A2\u89C6")],-1)),pe=C(()=>s("div",{class:"warp"},[s("div",{class:"userInfo"},[s("div",{class:"nameOrPhone"},"\u5F20\u4E09 (138........)"),s("div",{class:"hospital"},"\u4E0A\u6D77\u5E02\u4EBA\u6C11\u533B\u9662")]),s("div",{class:"time"},"\u5B8C\u6210\u63A2\u89C6")],-1)),fe=C(()=>s("div",{class:"warp"},[s("div",{class:"userInfo"},[s("div",{class:"nameOrPhone"},"\u5F20\u4E09 (138........)"),s("div",{class:"hospital"},"\u4E0A\u6D77\u5E02\u4EBA\u6C11\u533B\u9662")]),s("div",{class:"time"},"\u5B8C\u6210\u63A2\u89C6")],-1)),_e={setup(a){const n=y(["1"]);return(l,i)=>{const u=re,o=le;return G(),J("div",ie,[f(o,{modelValue:n.value,"onUpdate:modelValue":i[0]||(i[0]=v=>n.value=v)},{default:w(()=>[f(u,{name:"1"},{title:w(()=>[ue]),default:w(()=>[ve,pe,fe]),_:1})]),_:1},8,["modelValue"])])}}},xe=Y(_e,[["__scopeId","data-v-8aa1a5bc"]]);export{xe as default};
