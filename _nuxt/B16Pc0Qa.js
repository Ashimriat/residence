import{N as t,aB as n,a2 as o,c as s,o as l,r as d,b as i,J as a}from"./Lrk-fiIZ.js";var p=({dt:e})=>`
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
    outline-width: ${e("overlaybadge.outline.width")};
    outline-style: solid;
    outline-color: ${e("overlaybadge.outline.color")};
}

.p-overlaybadge .p-badge:dir(rtl) {
    transform: translate(-50%, -50%);
}
`,v={root:"p-overlaybadge"},c=t.extend({name:"overlaybadge",style:p,classes:v}),g={name:"OverlayBadge",extends:n,style:c,provide:function(){return{$pcOverlayBadge:this,$parentInstance:this}}},y={name:"OverlayBadge",extends:g,inheritAttrs:!1,components:{Badge:n}};function m(e,u,b,B,$,f){var r=o("Badge");return l(),s("div",a({class:e.cx("root")},e.ptmi("root")),[d(e.$slots,"default"),i(r,a(e.$props,{pt:e.ptm("pcBadge")}),null,16,["pt"])],16)}y.render=m;export{y as default};
