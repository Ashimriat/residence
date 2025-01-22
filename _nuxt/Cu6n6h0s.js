import{_ as at}from"./ClacO6Ur.js";import{e as nt,f as st}from"./B3MN7jo0.js";import{_ as ot}from"./DRFhpLMI.js";import{E as S,_ as it}from"./DweKTpAM.js";import{_ as rt,s as lt}from"./BzQKOnUT.js";import{I as O,K as M,o as i,c as d,v,d as g,L as p,M as o,r as F,f as q,x as h,y,N as k,D as V,w as T,F as w,A as L,B as x,an as H,m as f,s as _,ai as Q,a9 as D,ab as ct,z as K,aS as U,aR as j,l as W,aT as ut,aQ as E,ar as dt,aU as bt,R as G,al as J,k as N,aE as pt,ac as ft,ad as vt,C as ht,aF as mt,a6 as I}from"./BTFI2hMP.js";import{s as gt}from"./Ceyqkgy2.js";import{E as yt}from"./Bd5TAZbL.js";import{s as $t}from"./CzaIU-3K.js";import{u as Tt,_ as Bt}from"./CdMKNbno.js";const kt=O({__name:"BaseCard",props:{type:{default:"vertical"}},setup(a){const t=M("Card");return(e,n)=>(i(),d("div",{class:p(o(t)([e.type]))},[v(e.$slots,"subContent",{},()=>[n[0]||(n[0]=g("div",null,null,-1))]),g("div",{class:p(o(t)("content"))},[v(e.$slots,"default")],2)],2))}}),wt=O({__name:"EventCard",props:{withDetails:{type:Boolean},isAccountMode:{type:Boolean},eventData:{}},emits:["signUp"],setup(a,{emit:t}){const e=t,n=F(!1),{gameData:l,isAbonWorks:s,currentPlayers:u}=a.eventData,b=q(()=>n.value?S.CLOSE:S.DETAILS);function m(){n.value=!n.value}const r=M();return(c,C)=>{const P=gt,z=ot,A=it,R=rt,$=kt;return i(),h($,{class:p(o(r)({account:c.isAccountMode}))},{subContent:y(()=>[c.isAccountMode?T("",!0):(i(),d("div",{key:0,class:p(o(r)("topContainer"))},[g("div",{class:p(o(r)("masterDataBlock"))},[k(P,{label:"UI",shape:"circle"}),g("div",{class:p(o(r)("masterName"))},V(o(l).master),3)],2),g("div",{class:p(o(r)("playersAmount"))},[g("span",null,V(`${o(u).length}/${o(l).maxPlayersAmount}`),1),k(z,{type:o(yt).USERS},null,8,["type"])],2)],2))]),default:y(()=>[k(R,{data:c.eventData,"is-account-mode":c.isAccountMode,"with-abon":o(s)&&!c.isAccountMode},{default:y(()=>[c.withDetails?(i(),d(w,{key:0},[o(n)?(i(),d("div",{key:0,class:p(o(r)("detailsBlock"))},[g("div",null,V(o(l).description),1),g("div",{class:p(o(r)("playersBlock"))},[(i(!0),d(w,null,L(o(u),B=>(i(),h(P,{key:B,label:"UI"}))),128))],2)],2)):T("",!0),g("div",{class:p(o(r)("buttonsBlock"))},[k(A,{type:o(S).ENTER_EVENT,onClick:C[0]||(C[0]=B=>e("signUp"))},null,8,["type"]),k(A,{type:o(b),"omit-icon":"",onClick:m},null,8,["type"]),o(n)?(i(),h(A,{key:0,type:o(S).SHARE},null,8,["type"])):T("",!0)],2)],64)):T("",!0)]),_:1},8,["data","is-account-mode","with-abon"])]),_:1},8,["class"])}}});var Ct=function(t){var e=t.dt;return`
.p-tabs {
    display: flex;
    flex-direction: column;
}

.p-tablist {
    display: flex;
    position: relative;
}

.p-tabs-scrollable > .p-tablist {
    overflow: hidden;
}

.p-tablist-viewport {
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    scrollbar-width: none;
    overscroll-behavior: contain auto;
}

.p-tablist-viewport::-webkit-scrollbar {
    display: none;
}

.p-tablist-tab-list {
    position: relative;
    display: flex;
    background: `.concat(e("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(e("tabs.tablist.border.color"),`;
    border-width: `).concat(e("tabs.tablist.border.width"),`;
}

.p-tablist-content {
    flex-grow: 1;
}

.p-tablist-nav-button {
    all: unset;
    position: absolute !important;
    flex-shrink: 0;
    inset-block-start: 0;
    z-index: 2;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: `).concat(e("tabs.nav.button.background"),`;
    color: `).concat(e("tabs.nav.button.color"),`;
    width: `).concat(e("tabs.nav.button.width"),`;
    transition: color `).concat(e("tabs.transition.duration"),", outline-color ").concat(e("tabs.transition.duration"),", box-shadow ").concat(e("tabs.transition.duration"),`;
    box-shadow: `).concat(e("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(e("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.nav.button.focus.ring.width")," ").concat(e("tabs.nav.button.focus.ring.style")," ").concat(e("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(e("tabs.nav.button.hover.color"),`;
}

.p-tablist-prev-button {
    inset-inline-start: 0;
}

.p-tablist-next-button {
    inset-inline-end: 0;
}

.p-tablist-prev-button:dir(rtl),
.p-tablist-next-button:dir(rtl) {
    transform: rotate(180deg);
}


.p-tab {
    flex-shrink: 0;
    cursor: pointer;
    user-select: none;
    position: relative;
    border-style: solid;
    white-space: nowrap;
    background: `).concat(e("tabs.tab.background"),`;
    border-width: `).concat(e("tabs.tab.border.width"),`;
    border-color: `).concat(e("tabs.tab.border.color"),`;
    color: `).concat(e("tabs.tab.color"),`;
    padding: `).concat(e("tabs.tab.padding"),`;
    font-weight: `).concat(e("tabs.tab.font.weight"),`;
    transition: background `).concat(e("tabs.transition.duration"),", border-color ").concat(e("tabs.transition.duration"),", color ").concat(e("tabs.transition.duration"),", outline-color ").concat(e("tabs.transition.duration"),", box-shadow ").concat(e("tabs.transition.duration"),`;
    margin: `).concat(e("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(e("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.tab.focus.ring.width")," ").concat(e("tabs.tab.focus.ring.style")," ").concat(e("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(e("tabs.tab.hover.background"),`;
    border-color: `).concat(e("tabs.tab.hover.border.color"),`;
    color: `).concat(e("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(e("tabs.tab.active.background"),`;
    border-color: `).concat(e("tabs.tab.active.border.color"),`;
    color: `).concat(e("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(e("tabs.tabpanel.background"),`;
    color: `).concat(e("tabs.tabpanel.color"),`;
    padding: `).concat(e("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(e("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(e("tabs.tabpanel.focus.ring.width")," ").concat(e("tabs.tabpanel.focus.ring.style")," ").concat(e("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(e("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: `).concat(e("tabs.active.bar.bottom"),`;
    height: `).concat(e("tabs.active.bar.height"),`;
    background: `).concat(e("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},Pt={root:function(t){var e=t.props;return["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]}},At=x.extend({name:"tabs",theme:Ct,classes:Pt}),Lt={name:"BaseTabs",extends:_,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:At,provide:function(){return{$pcTabs:this,$parentInstance:this}}},X={name:"Tabs",extends:Lt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||H()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||H()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function xt(a,t,e,n,l,s){return i(),d("div",f({class:a.cx("root")},a.ptmi("root")),[v(a.$slots,"default")],16)}X.render=xt;var _t={root:"p-tabpanels"},St=x.extend({name:"tabpanels",classes:_t}),Et={name:"BaseTabPanels",extends:_,props:{},style:St,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},Y={name:"TabPanels",extends:Et,inheritAttrs:!1};function Nt(a,t,e,n,l,s){return i(),d("div",f({class:a.cx("root"),role:"presentation"},a.ptmi("root")),[v(a.$slots,"default")],16)}Y.render=Nt;var It={root:function(t){var e=t.instance;return["p-tabpanel",{"p-tabpanel-active":e.active}]}},Vt=x.extend({name:"tabpanel",classes:It}),Dt={name:"BaseTabPanel",extends:_,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Vt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},Z={name:"TabPanel",extends:Dt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return Q((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return f(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Kt(a,t,e,n,l,s){var u,b;return s.$pcTabs?(i(),d(w,{key:1},[a.asChild?v(a.$slots,"default",{key:1,class:p(a.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs}):(i(),d(w,{key:0},[!((u=s.$pcTabs)!==null&&u!==void 0&&u.lazy)||s.active?D((i(),h(K(a.as),f({key:0,class:a.cx("root")},s.attrs),{default:y(function(){return[v(a.$slots,"default")]}),_:3},16,["class"])),[[ct,(b=s.$pcTabs)!==null&&b!==void 0&&b.lazy?!0:s.active]]):T("",!0)],64))],64)):v(a.$slots,"default",{key:0})}Z.render=Kt;var Ot={root:"p-tablist",content:function(t){var e=t.instance;return["p-tablist-content",{"p-tablist-viewport":e.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},zt=x.extend({name:"tablist",classes:Ot}),Rt={name:"BaseTabList",extends:_,props:{},style:zt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},tt={name:"TabList",extends:Rt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,e=this.getVisibleButtonWidths(),n=U(t)-e,l=Math.abs(t.scrollLeft),s=n*.8,u=l-s,b=Math.max(u,0);t.scrollLeft=j(t)?-1*b:b},onNextButtonClick:function(){var t=this.$refs.content,e=this.getVisibleButtonWidths(),n=U(t)-e,l=Math.abs(t.scrollLeft),s=n*.8,u=l+s,b=t.scrollWidth-n,m=Math.min(u,b);t.scrollLeft=j(t)?-1*m:m},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,e=t.content,n=t.inkbar,l=t.tabs,s=W(e,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(n.style.height=ut(s)+"px",n.style.top=E(s).top-E(l).top+"px"):(n.style.width=dt(s)+"px",n.style.left=E(s).left-E(l).left+"px")},updateButtonState:function(){var t=this.$refs,e=t.list,n=t.content,l=n.scrollTop,s=n.scrollWidth,u=n.scrollHeight,b=n.offsetWidth,m=n.offsetHeight,r=Math.abs(n.scrollLeft),c=[U(n),bt(n)],C=c[0],P=c[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=l!==0,this.isNextButtonEnabled=e.offsetHeight>=m&&parseInt(l)!==u-P):(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=e.offsetWidth>=b&&parseInt(r)!==s-C)},getVisibleButtonWidths:function(){var t=this.$refs,e=t.prevButton,n=t.nextButton,l=0;return this.showNavigators&&(l=((e==null?void 0:e.offsetWidth)||0)+((n==null?void 0:n.offsetWidth)||0)),l}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:lt,ChevronRightIcon:$t},directives:{ripple:G}},Ut=["aria-label","tabindex"],Ft=["aria-orientation"],Wt=["aria-label","tabindex"];function Mt(a,t,e,n,l,s){var u=J("ripple");return i(),d("div",f({ref:"list",class:a.cx("root")},a.ptmi("root")),[s.showNavigators&&l.isPrevButtonEnabled?D((i(),d("button",f({key:0,ref:"prevButton",class:a.cx("prevButton"),"aria-label":s.prevButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return s.onPrevButtonClick&&s.onPrevButtonClick.apply(s,arguments)})},a.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(i(),h(K(s.templates.previcon||"ChevronLeftIcon"),f({"aria-hidden":"true"},a.ptm("prevIcon")),null,16))],16,Ut)),[[u]]):T("",!0),g("div",f({ref:"content",class:a.cx("content"),onScroll:t[1]||(t[1]=function(){return s.onScroll&&s.onScroll.apply(s,arguments)})},a.ptm("content")),[g("div",f({ref:"tabs",class:a.cx("tabList"),role:"tablist","aria-orientation":s.$pcTabs.orientation||"horizontal"},a.ptm("tabList")),[v(a.$slots,"default"),g("span",f({ref:"inkbar",class:a.cx("activeBar"),role:"presentation","aria-hidden":"true"},a.ptm("activeBar")),null,16)],16,Ft)],16),s.showNavigators&&l.isNextButtonEnabled?D((i(),d("button",f({key:1,ref:"nextButton",class:a.cx("nextButton"),"aria-label":s.nextButtonAriaLabel,tabindex:s.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return s.onNextButtonClick&&s.onNextButtonClick.apply(s,arguments)})},a.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(i(),h(K(s.templates.nexticon||"ChevronRightIcon"),f({"aria-hidden":"true"},a.ptm("nextIcon")),null,16))],16,Wt)),[[u]]):T("",!0)],16)}tt.render=Mt;var Ht={root:function(t){var e=t.instance,n=t.props;return["p-tab",{"p-tab-active":e.active,"p-disabled":n.disabled}]}},jt=x.extend({name:"tab",classes:Ht}),qt={name:"BaseTab",extends:_,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:jt,provide:function(){return{$pcTab:this,$parentInstance:this}}},et={name:"Tab",extends:qt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var e=this.findNextTab(t.currentTarget);e?this.changeFocusedTab(t,e):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var e=this.findPrevTab(t.currentTarget);e?this.changeFocusedTab(t,e):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var e=this.findFirstTab();this.changeFocusedTab(t,e),t.preventDefault()},onEndKey:function(t){var e=this.findLastTab();this.changeFocusedTab(t,e),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e?t:t.nextElementSibling;return n?N(n,"data-p-disabled")||N(n,"data-pc-section")==="inkbar"?this.findNextTab(n):W(n,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=e?t:t.previousElementSibling;return n?N(n,"data-p-disabled")||N(n,"data-pc-section")==="inkbar"?this.findPrevTab(n):W(n,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,e){pt(e),this.scrollInView(e)},scrollInView:function(t){var e;t==null||(e=t.scrollIntoView)===null||e===void 0||e.call(t,{block:"nearest"})}},computed:{active:function(){var t;return Q((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return f(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:G}};function Qt(a,t,e,n,l,s){var u=J("ripple");return a.asChild?v(a.$slots,"default",{key:1,class:p(a.cx("root")),active:s.active,a11yAttrs:s.a11yAttrs,onClick:s.onClick}):D((i(),h(K(a.as),f({key:0,class:a.cx("root"),onClick:s.onClick},s.attrs),{default:y(function(){return[v(a.$slots,"default")]}),_:3},16,["class","onClick"])),[[u]])}et.render=Qt;const Gt=O({__name:"BaseTabs",props:ft({tabs:{}},{tab:{required:!0},tabModifiers:{}}),emits:["update:tab"],setup(a){const t=vt(a,"tab");return(e,n)=>{const l=et,s=tt,u=Z,b=Y,m=X;return i(),h(m,{value:t.value,"onUpdate:value":n[0]||(n[0]=r=>t.value=r)},{default:y(()=>[k(s,null,{default:y(()=>[(i(!0),d(w,null,L(e.tabs,({label:r,id:c})=>(i(),h(l,{key:c,value:c},{default:y(()=>[ht(V(r),1)]),_:2},1032,["value"]))),128))]),_:1}),k(b,null,{default:y(()=>[v(e.$slots,"tabsCommon"),(i(!0),d(w,null,L(e.tabs,({id:r})=>(i(),h(u,{key:r,value:r},{default:y(()=>[(i(!0),d(w,null,L(e.tabs,({id:c})=>v(e.$slots,`tab-${c}`,{key:c})),128)),v(e.$slots,"commonTab")]),_:2},1032,["value"]))),128)),v(e.$slots,"default")]),_:3})]),_:3},8,["value"])}}}),ie=O({__name:"EventsList",props:{tabsList:{},eventsData:{},filters:{},eventsOnPageAmount:{},withCalendar:{type:Boolean},withPagination:{type:Boolean}},setup(a){const t=F(a.tabsList[0].id),e=nt(),n=F(""),l=q(()=>{const r=a.tabsList.findIndex(({id:c})=>c===t.value);return a.eventsData[r]}),{page:s,itemsAmount:u,displayedItems:b}=Tt(l,a.eventsOnPageAmount),m=M("EventsList");return mt(t,()=>{s.value=1}),(r,c)=>{const C=at,P=st,z=wt,A=Gt,R=Bt;return i(),d("div",{class:p(o(m)({calendar:r.withCalendar}))},[k(A,{tab:o(t),"onUpdate:tab":c[2]||(c[2]=$=>I(t)?t.value=$:null),tabs:r.tabsList},{tabsCommon:y(()=>{var $;return[($=r.filters)!=null&&$.length?(i(),h(C,{key:0,modelValue:o(n),"onUpdate:modelValue":c[0]||(c[0]=B=>I(n)?n.value=B:null),"is-resettable":"",options:r.filters},null,8,["modelValue","options"])):T("",!0),r.withCalendar?(i(),h(P,{key:1,modelValue:o(e),"onUpdate:modelValue":c[1]||(c[1]=B=>I(e)?e.value=B:null),class:p(o(m)("calendar"))},null,8,["modelValue","class"])):T("",!0)]}),commonTab:y(()=>[g("div",{class:p(o(m)("eventsCardsContainer",{calendar:r.withCalendar}))},[(i(!0),d(w,null,L(o(b),($,B)=>(i(),h(z,{key:`eventData_${B}`,"event-data":$,class:p(o(m)("eventCard",{calendar:r.withCalendar}))},null,8,["event-data","class"]))),128))],2)]),_:1},8,["tab","tabs"]),r.withPagination?(i(),h(R,{key:0,page:o(s),"onUpdate:page":c[3]||(c[3]=$=>I(s)?s.value=$:null),"amount-on-page":r.eventsOnPageAmount,"items-amount":o(u)},null,8,["page","amount-on-page","items-amount"])):T("",!0)],2)}}});export{ie as _,kt as a};
