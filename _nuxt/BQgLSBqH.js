import{_ as M}from"./Btv-5LNS.js";import{_ as K}from"./D3m3TXYd.js";import{G as k,f as N,I as $,o as t,c,d as r,a9 as x,K as o,D as m,J as s,B as w,m as a,v as f,w as u,s as z,b as B,x as g,z as C,y as V,C as Z,O as y,aE as j,aF as O}from"./BU1ATpM-.js";import{E as W}from"./Bd5TAZbL.js";const F={isAbonWorks:!0,oldPrice:400,price:300,gameData:{title:"Городская мафия",description:"Cоберитесь вместе для того, чтобы вычислить коварную мафию! Красные городские жители или же чёрная мафиозная команда - кто останется победителем, а кто покинет город?",master:"Александр",maxPlayersAmount:10,date:"10 марта",time:"18:00"},currentPlayers:["фывфыв","йцайцайц","фыайцайца","ывафафы","цукпцукп","ывапывап","авпвапва","пывапывуа"],locationData:{address:"Ул. Пушкина, д. Колотушкина 14 кв. 88",subway:{branchType:"standard5",station:"Октябрьская"},mapLink:"https://ololo.ru"}},G=e=>Array.from({length:e},()=>F),hn=(e,i)=>Array.from({length:e},()=>G(i)),J=k({__name:"SubwayStation",props:{branchType:{},station:{}},setup(e){const i=N(()=>({"--backgroundColor":"#805441"})),n=$();return(v,d)=>(t(),c("div",{class:s(o(n)())},[r("span",{style:x(o(i))},null,4),r("span",null,m(v.station),1)],2))}});var R=function(i){var n=i.dt;return`
.p-divider-horizontal {
    display: flex;
    width: 100%;
    position: relative;
    align-items: center;
    margin: `.concat(n("divider.horizontal.margin"),`;
    padding: `).concat(n("divider.horizontal.padding"),`;
}

.p-divider-horizontal:before {
    position: absolute;
    display: block;
    inset-block-start: 50%;
    inset-inline-start: 0;
    width: 100%;
    content: "";
    border-block-start: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider-horizontal .p-divider-content {
    padding: `).concat(n("divider.horizontal.content.padding"),`;
}

.p-divider-vertical {
    min-height: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: `).concat(n("divider.vertical.margin"),`;
    padding: `).concat(n("divider.vertical.padding"),`;
}

.p-divider-vertical:before {
    position: absolute;
    display: block;
    inset-block-start: 0;
    inset-inline-start: 50%;
    height: 100%;
    content: "";
    border-inline-start: 1px solid `).concat(n("divider.border.color"),`;
}

.p-divider.p-divider-vertical .p-divider-content {
    padding: `).concat(n("divider.vertical.content.padding"),`;
}

.p-divider-content {
    z-index: 1;
    background: `).concat(n("divider.content.background"),`;
    color: `).concat(n("divider.content.color"),`;
}

.p-divider-solid.p-divider-horizontal:before {
    border-block-start-style: solid;
}

.p-divider-solid.p-divider-vertical:before {
    border-inline-start-style: solid;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-block-start-style: dashed;
}

.p-divider-dashed.p-divider-vertical:before {
    border-inline-start-style: dashed;
}

.p-divider-dotted.p-divider-horizontal:before {
    border-block-start-style: dotted;
}

.p-divider-dotted.p-divider-vertical:before {
    border-inline-start-style: dotted;
}

.p-divider-left:dir(rtl),
.p-divider-right:dir(rtl) {
    flex-direction: row-reverse;
}
`)},_={root:function(i){var n=i.props;return{justifyContent:n.layout==="horizontal"?n.align==="center"||n.align===null?"center":n.align==="left"?"flex-start":n.align==="right"?"flex-end":null:null,alignItems:n.layout==="vertical"?n.align==="center"||n.align===null?"center":n.align==="top"?"flex-start":n.align==="bottom"?"flex-end":null:null}}},q={root:function(i){var n=i.props;return["p-divider p-component","p-divider-"+n.layout,"p-divider-"+n.type,{"p-divider-left":n.layout==="horizontal"&&(!n.align||n.align==="left")},{"p-divider-center":n.layout==="horizontal"&&n.align==="center"},{"p-divider-right":n.layout==="horizontal"&&n.align==="right"},{"p-divider-top":n.layout==="vertical"&&n.align==="top"},{"p-divider-center":n.layout==="vertical"&&(!n.align||n.align==="center")},{"p-divider-bottom":n.layout==="vertical"&&n.align==="bottom"}]},content:"p-divider-content"},H=w.extend({name:"divider",theme:R,classes:q,inlineStyles:_}),Q={name:"BaseDivider",extends:z,props:{align:{type:String,default:null},layout:{type:String,default:"horizontal"},type:{type:String,default:"solid"}},style:H,provide:function(){return{$pcDivider:this,$parentInstance:this}}},S={name:"Divider",extends:Q,inheritAttrs:!1},U=["aria-orientation"];function X(e,i,n,v,d,l){return t(),c("div",a({class:e.cx("root"),style:e.sx("root"),role:"separator","aria-orientation":e.layout},e.ptmi("root")),[e.$slots.default?(t(),c("div",a({key:0,class:e.cx("content")},e.ptm("content")),[f(e.$slots,"default")],16)):u("",!0)],16,U)}S.render=X;var I={name:"TimesCircleIcon",extends:B};function Y(e,i,n,v,d,l){return t(),c("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),i[0]||(i[0]=[r("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7 14C5.61553 14 4.26215 13.5895 3.11101 12.8203C1.95987 12.0511 1.06266 10.9579 0.532846 9.67879C0.00303296 8.3997 -0.13559 6.99224 0.134506 5.63437C0.404603 4.2765 1.07129 3.02922 2.05026 2.05026C3.02922 1.07129 4.2765 0.404603 5.63437 0.134506C6.99224 -0.13559 8.3997 0.00303296 9.67879 0.532846C10.9579 1.06266 12.0511 1.95987 12.8203 3.11101C13.5895 4.26215 14 5.61553 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14ZM7 1.16667C5.84628 1.16667 4.71846 1.50879 3.75918 2.14976C2.79989 2.79074 2.05222 3.70178 1.61071 4.76768C1.16919 5.83358 1.05367 7.00647 1.27876 8.13803C1.50384 9.26958 2.05941 10.309 2.87521 11.1248C3.69102 11.9406 4.73042 12.4962 5.86198 12.7212C6.99353 12.9463 8.16642 12.8308 9.23232 12.3893C10.2982 11.9478 11.2093 11.2001 11.8502 10.2408C12.4912 9.28154 12.8333 8.15373 12.8333 7C12.8333 5.45291 12.2188 3.96918 11.1248 2.87521C10.0308 1.78125 8.5471 1.16667 7 1.16667ZM4.66662 9.91668C4.58998 9.91704 4.51404 9.90209 4.44325 9.87271C4.37246 9.84333 4.30826 9.8001 4.2544 9.74557C4.14516 9.6362 4.0838 9.48793 4.0838 9.33335C4.0838 9.17876 4.14516 9.0305 4.2544 8.92113L6.17553 7L4.25443 5.07891C4.15139 4.96832 4.09529 4.82207 4.09796 4.67094C4.10063 4.51982 4.16185 4.37563 4.26872 4.26876C4.3756 4.16188 4.51979 4.10066 4.67091 4.09799C4.82204 4.09532 4.96829 4.15142 5.07887 4.25446L6.99997 6.17556L8.92106 4.25446C9.03164 4.15142 9.1779 4.09532 9.32903 4.09799C9.48015 4.10066 9.62434 4.16188 9.73121 4.26876C9.83809 4.37563 9.89931 4.51982 9.90198 4.67094C9.90464 4.82207 9.84855 4.96832 9.74551 5.07891L7.82441 7L9.74554 8.92113C9.85478 9.0305 9.91614 9.17876 9.91614 9.33335C9.91614 9.48793 9.85478 9.6362 9.74554 9.74557C9.69168 9.8001 9.62748 9.84333 9.55669 9.87271C9.4859 9.90209 9.40996 9.91704 9.33332 9.91668C9.25668 9.91704 9.18073 9.90209 9.10995 9.87271C9.03916 9.84333 8.97495 9.8001 8.9211 9.74557L6.99997 7.82444L5.07884 9.74557C5.02499 9.8001 4.96078 9.84333 4.88999 9.87271C4.81921 9.90209 4.74326 9.91704 4.66662 9.91668Z",fill:"currentColor"},null,-1)]),16)}I.render=Y;var nn=function(i){var n=i.dt;return`
.p-chip {
    display: inline-flex;
    align-items: center;
    background: `.concat(n("chip.background"),`;
    color: `).concat(n("chip.color"),`;
    border-radius: `).concat(n("chip.border.radius"),`;
    padding-block: `).concat(n("chip.padding.y"),`;
    padding-inline: `).concat(n("chip.padding.x"),`;
    gap: `).concat(n("chip.gap"),`;
}

.p-chip-icon {
    color: `).concat(n("chip.icon.color"),`;
    font-size: `).concat(n("chip.icon.font.size"),`;
    width: `).concat(n("chip.icon.size"),`;
    height: `).concat(n("chip.icon.size"),`;
}

.p-chip-image {
    border-radius: 50%;
    width: `).concat(n("chip.image.width"),`;
    height: `).concat(n("chip.image.height"),`;
    margin-inline-start: calc(-1 * `).concat(n("chip.padding.y"),`);
}

.p-chip:has(.p-chip-remove-icon) {
    padding-inline-end: `).concat(n("chip.padding.y"),`;
}

.p-chip:has(.p-chip-image) {
    padding-block-start: calc(`).concat(n("chip.padding.y"),` / 2);
    padding-block-end: calc(`).concat(n("chip.padding.y"),` / 2);
}

.p-chip-remove-icon {
    cursor: pointer;
    font-size: `).concat(n("chip.remove.icon.size"),`;
    width: `).concat(n("chip.remove.icon.size"),`;
    height: `).concat(n("chip.remove.icon.size"),`;
    color: `).concat(n("chip.remove.icon.color"),`;
    border-radius: 50%;
    transition: outline-color `).concat(n("chip.transition.duration"),", box-shadow ").concat(n("chip.transition.duration"),`;
    outline-color: transparent;
}

.p-chip-remove-icon:focus-visible {
    box-shadow: `).concat(n("chip.remove.icon.focus.ring.shadow"),`;
    outline: `).concat(n("chip.remove.icon.focus.ring.width")," ").concat(n("chip.remove.icon.focus.ring.style")," ").concat(n("chip.remove.icon.focus.ring.color"),`;
    outline-offset: `).concat(n("chip.remove.icon.focus.ring.offset"),`;
}
`)},en={root:"p-chip p-component",image:"p-chip-image",icon:"p-chip-icon",label:"p-chip-label",removeIcon:"p-chip-remove-icon"},on=w.extend({name:"chip",theme:nn,classes:en}),tn={name:"BaseChip",extends:z,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:on,provide:function(){return{$pcChip:this,$parentInstance:this}}},D={name:"Chip",extends:tn,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(i){(i.key==="Enter"||i.key==="Backspace")&&this.close(i)},close:function(i){this.visible=!1,this.$emit("remove",i)}},components:{TimesCircleIcon:I}},rn=["aria-label"],an=["src"];function cn(e,i,n,v,d,l){return d.visible?(t(),c("div",a({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[f(e.$slots,"default",{},function(){return[e.image?(t(),c("img",a({key:0,src:e.image},e.ptm("image"),{class:e.cx("image")}),null,16,an)):e.$slots.icon?(t(),g(C(e.$slots.icon),a({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(t(),c("span",a({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):u("",!0),e.label?(t(),c("div",a({key:3,class:e.cx("label")},e.ptm("label")),m(e.label),17)):u("",!0)]}),e.removable?f(e.$slots,"removeicon",{key:0,removeCallback:l.close,keydownCallback:l.onKeydown},function(){return[(t(),g(C(e.removeIcon?"span":"TimesCircleIcon"),a({class:[e.cx("removeIcon"),e.removeIcon],onClick:l.close,onKeydown:l.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):u("",!0)],16,rn)):u("",!0)}D.render=cn;const mn=k({__name:"EventInfo",props:{data:{},withAbon:{type:Boolean},isAccountMode:{type:Boolean}},setup(e){const{gameData:i,locationData:n,isAbonWorks:v,price:d,oldPrice:l}=e.data,p=$("EventInfo");return(h,b)=>{const A=D,L=M,E=S,P=K,T=J;return t(),c("div",{class:s(o(p)({account:h.isAccountMode}))},[h.withAbon?(t(),g(A,{key:0,label:"Действует абонемент"})):u("",!0),r("div",{class:s(o(p)("gameNamePriceBlock"))},[(t(),g(C(h.isAccountMode?"h6":"h4"),{class:s(o(p)("gameTitle"))},{default:V(()=>[Z(m(o(i).title),1)]),_:1},8,["class"])),h.isAccountMode?u("",!0):(t(),g(L,{key:0,value:o(d),"old-value":o(l)},null,8,["value","old-value"]))],2),r("div",{class:s(o(p)("gameDataBlock"))},[r("div",{class:s(o(p)("dateTimeBlock"))},[r("span",null,m(o(i).date),1),y(E,{layout:"horizontal",class:s(o(p)("divider"))},null,8,["class"]),y(P,{type:o(W).CLOCK},null,8,["type"]),r("span",null,m(o(i).time),1)],2),r("div",{class:s(o(p)("locationBlock"))},[b[0]||(b[0]=r("span",null,"Адрес",-1)),y(T,j(O(o(n).subway)),null,16)],2)],2),f(h.$slots,"default")],2)}}});var ln={name:"ChevronLeftIcon",extends:B};function sn(e,i,n,v,d,l){return t(),c("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),i[0]||(i[0]=[r("path",{d:"M9.61296 13C9.50997 13.0005 9.40792 12.9804 9.3128 12.9409C9.21767 12.9014 9.13139 12.8433 9.05902 12.7701L3.83313 7.54416C3.68634 7.39718 3.60388 7.19795 3.60388 6.99022C3.60388 6.78249 3.68634 6.58325 3.83313 6.43628L9.05902 1.21039C9.20762 1.07192 9.40416 0.996539 9.60724 1.00012C9.81032 1.00371 10.0041 1.08597 10.1477 1.22959C10.2913 1.37322 10.3736 1.56698 10.3772 1.77005C10.3808 1.97313 10.3054 2.16968 10.1669 2.31827L5.49496 6.99022L10.1669 11.6622C10.3137 11.8091 10.3962 12.0084 10.3962 12.2161C10.3962 12.4238 10.3137 12.6231 10.1669 12.7701C10.0945 12.8433 10.0083 12.9014 9.91313 12.9409C9.81801 12.9804 9.71596 13.0005 9.61296 13Z",fill:"currentColor"},null,-1)]),16)}ln.render=sn;export{mn as _,hn as m,ln as s};
