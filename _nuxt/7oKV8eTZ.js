import{_}from"./pxeRVdun.js";import{_ as B}from"./DRMFpE2R.js";import{B as h,aj as m,u as b,o as s,c as $,v as k,N as u,m as c,I as E,a7 as L,K as w,x as r,y as p,M as n,L as x}from"./BMg6GqhK.js";import{E as d}from"./Bd5TAZbL.js";import{u as N}from"./DaWAtv1C.js";var O=function(o){var t=o.dt;return`
.p-overlaybadge {
    position: relative;
}

.p-overlaybadge .p-badge {
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
    outline-width: `.concat(t("overlaybadge.outline.width"),`;
    outline-style: solid;
    outline-color: `).concat(t("overlaybadge.outline.color"),`;
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`)},S={root:"p-overlaybadge"},C=h.extend({name:"overlaybadge",theme:O,classes:S}),I={name:"OverlayBadge",extends:m,style:C,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},v={name:"OverlayBadge",extends:I,inheritAttrs:!1,components:{Badge:m}};function M(e,o,t,i,l,f){var a=b("Badge");return s(),$("div",c({class:e.cx("root")},e.ptmi("root")),[k(e.$slots,"default"),u(a,c(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}v.render=M;const K=E({__name:"Notifications",props:{withBg:{type:Boolean}},setup(e){const o=N(),{providedData:t}=L(o),i=w("Notifications");return(l,f)=>{const a=_,g=v,y=B;return s(),r(y,{class:x(n(i)({colored:l.withBg})),to:"/account/notifications"},{default:p(()=>[n(t).notifications.length?(s(),r(g,{key:1,value:n(t).notifications.length},{default:p(()=>[u(a,{type:n(d).BELL},null,8,["type"])]),_:1},8,["value"])):(s(),r(a,{key:0,type:n(d).BELL},null,8,["type"]))]),_:1},8,["class"])}}});export{K as _};
