import{_}from"./2eYUjlFR.js";import{_ as B}from"./Dmm8PWJn.js";import{B as h,aj as m,u as b,o as s,c as $,v as k,I as u,m as c,G as w,a7 as x,H as E,x as r,y as p,K as n,J as L}from"./aB8ygRKp.js";import{E as d}from"./Bd5TAZbL.js";import{u as O}from"./PckHJOla.js";var S=function(o){var t=o.dt;return`
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
`)},C={root:"p-overlaybadge"},I=h.extend({name:"overlaybadge",theme:S,classes:C}),N={name:"OverlayBadge",extends:m,style:I,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},v={name:"OverlayBadge",extends:N,inheritAttrs:!1,components:{Badge:m}};function P(e,o,t,i,l,f){var a=b("Badge");return s(),$("div",c({class:e.cx("root")},e.ptmi("root")),[k(e.$slots,"default"),u(a,c(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}v.render=P;const H=w({__name:"Notifications",props:{withBg:{type:Boolean}},setup(e){const o=O(),{providedData:t}=x(o),i=E("Notifications");return(l,f)=>{const a=_,g=v,y=B;return s(),r(y,{class:L(n(i)({colored:l.withBg})),to:"/account/notifications"},{default:p(()=>[n(t).notifications.length?(s(),r(g,{key:1,value:n(t).notifications.length},{default:p(()=>[u(a,{type:n(d).BELL},null,8,["type"])]),_:1},8,["value"])):(s(),r(a,{key:0,type:n(d).BELL},null,8,["type"]))]),_:1},8,["class"])}}});export{H as _};
