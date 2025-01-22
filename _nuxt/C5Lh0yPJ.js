import{_ as st}from"./KBUwpIuo.js";import{e as ot,f as it}from"./B8ZyPKeY.js";import{_ as rt}from"./B6U-L1vQ.js";import{E,_ as lt}from"./DuTWrHDA.js";import{_ as ct,s as ut}from"./DhE7xUDi.js";import{I as O,K as W,o as i,c as b,v,d as g,L as p,M as o,a4 as dt,r as F,f as G,x as h,y,N as k,D,w as B,F as w,A as L,B as x,an as j,m as f,s as _,ai as J,a9 as z,ab as bt,z as K,aS as U,aR as q,l as M,aT as pt,aQ as N,ar as ft,aU as vt,R as X,al as Y,k as I,aE as ht,ac as mt,ad as gt,C as yt,aF as $t,a6 as V}from"./BaUA2V8M.js";import{s as Tt}from"./bURBxb_K.js";import{E as Bt,a as Q}from"./Bd5TAZbL.js";import{s as kt}from"./SuxKOeDo.js";import{u as wt,_ as Ct}from"./BzLHhQS4.js";const Pt=O({__name:"BaseCard",props:{type:{default:"vertical"}},setup(a){const t=W("Card");return(e,s)=>(i(),b("div",{class:p(o(t)([e.type]))},[v(e.$slots,"subContent",{},()=>[s[0]||(s[0]=g("div",null,null,-1))]),g("div",{class:p(o(t)("content"))},[v(e.$slots,"default")],2)],2))}}),At=O({__name:"EventCard",props:{withDetails:{type:Boolean},isAccountMode:{type:Boolean},eventData:{}},emits:["signUp"],setup(a,{emit:t}){const e=t,{isMobile:s}=dt(),r=F(!1),{gameData:n,isAbonWorks:u,currentPlayers:d}=a.eventData,m=G(()=>r.value?E.CLOSE:E.DETAILS);function c(){r.value=!r.value}const l=W("EventCard");return($,P)=>{const S=Tt,R=rt,A=lt,T=ct,C=Pt;return i(),h(C,{class:p(o(l)({account:$.isAccountMode}))},{subContent:y(()=>[$.isAccountMode?B("",!0):(i(),b("div",{key:0,class:p(o(l)("topContainer"))},[g("div",{class:p(o(l)("masterDataBlock"))},[k(S,{label:"UI",shape:"circle"}),g("div",{class:p(o(l)("masterName"))},D(o(n).master),3)],2),g("div",{class:p(o(l)("playersAmount"))},[g("span",null,D(`${o(d).length}/${o(n).maxPlayersAmount}`),1),k(R,{type:o(Bt).USERS,size:o(s)?o(Q).S:o(Q).M},null,8,["type","size"])],2)],2))]),default:y(()=>[k(T,{data:$.eventData,"is-account-mode":$.isAccountMode,"with-abon":o(u)&&!$.isAccountMode},{default:y(()=>[$.withDetails?(i(),b(w,{key:0},[o(r)?(i(),b("div",{key:0,class:p(o(l)("detailsBlock"))},[g("div",null,D(o(n).description),1),g("div",{class:p(o(l)("playersBlock"))},[(i(!0),b(w,null,L(o(d),H=>(i(),h(S,{key:H,label:"UI"}))),128))],2)],2)):B("",!0),g("div",{class:p(o(l)("buttonsBlock"))},[k(A,{type:o(E).ENTER_EVENT,onClick:P[0]||(P[0]=H=>e("signUp"))},null,8,["type"]),k(A,{type:o(m),"omit-icon":"",onClick:c},null,8,["type"]),o(r)?(i(),h(A,{key:0,type:o(E).SHARE},null,8,["type"])):B("",!0)],2)],64)):B("",!0)]),_:1},8,["data","is-account-mode","with-abon"])]),_:1},8,["class"])}}});var Lt=function(t){var e=t.dt;return`
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
`)},xt={root:function(t){var e=t.props;return["p-tabs p-component",{"p-tabs-scrollable":e.scrollable}]}},_t=x.extend({name:"tabs",theme:Lt,classes:xt}),St={name:"BaseTabs",extends:_,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:_t,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Z={name:"Tabs",extends:St,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||j()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||j()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Et(a,t,e,s,r,n){return i(),b("div",f({class:a.cx("root")},a.ptmi("root")),[v(a.$slots,"default")],16)}Z.render=Et;var Nt={root:"p-tabpanels"},It=x.extend({name:"tabpanels",classes:Nt}),Vt={name:"BaseTabPanels",extends:_,props:{},style:It,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},tt={name:"TabPanels",extends:Vt,inheritAttrs:!1};function Dt(a,t,e,s,r,n){return i(),b("div",f({class:a.cx("root"),role:"presentation"},a.ptmi("root")),[v(a.$slots,"default")],16)}tt.render=Dt;var zt={root:function(t){var e=t.instance;return["p-tabpanel",{"p-tabpanel-active":e.active}]}},Kt=x.extend({name:"tabpanel",classes:zt}),Ot={name:"BaseTabPanel",extends:_,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Kt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},et={name:"TabPanel",extends:Ot,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return J((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return f(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Rt(a,t,e,s,r,n){var u,d;return n.$pcTabs?(i(),b(w,{key:1},[a.asChild?v(a.$slots,"default",{key:1,class:p(a.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(i(),b(w,{key:0},[!((u=n.$pcTabs)!==null&&u!==void 0&&u.lazy)||n.active?z((i(),h(K(a.as),f({key:0,class:a.cx("root")},n.attrs),{default:y(function(){return[v(a.$slots,"default")]}),_:3},16,["class"])),[[bt,(d=n.$pcTabs)!==null&&d!==void 0&&d.lazy?!0:n.active]]):B("",!0)],64))],64)):v(a.$slots,"default",{key:0})}et.render=Rt;var Ut={root:"p-tablist",content:function(t){var e=t.instance;return["p-tablist-content",{"p-tablist-viewport":e.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Ft=x.extend({name:"tablist",classes:Ut}),Mt={name:"BaseTabList",extends:_,props:{},style:Ft,provide:function(){return{$pcTabList:this,$parentInstance:this}}},at={name:"TabList",extends:Mt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,e=this.getVisibleButtonWidths(),s=U(t)-e,r=Math.abs(t.scrollLeft),n=s*.8,u=r-n,d=Math.max(u,0);t.scrollLeft=q(t)?-1*d:d},onNextButtonClick:function(){var t=this.$refs.content,e=this.getVisibleButtonWidths(),s=U(t)-e,r=Math.abs(t.scrollLeft),n=s*.8,u=r+n,d=t.scrollWidth-s,m=Math.min(u,d);t.scrollLeft=q(t)?-1*m:m},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,e=t.content,s=t.inkbar,r=t.tabs,n=M(e,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=pt(n)+"px",s.style.top=N(n).top-N(r).top+"px"):(s.style.width=ft(n)+"px",s.style.left=N(n).left-N(r).left+"px")},updateButtonState:function(){var t=this.$refs,e=t.list,s=t.content,r=s.scrollTop,n=s.scrollWidth,u=s.scrollHeight,d=s.offsetWidth,m=s.offsetHeight,c=Math.abs(s.scrollLeft),l=[U(s),vt(s)],$=l[0],P=l[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=e.offsetHeight>=m&&parseInt(r)!==u-P):(this.isPrevButtonEnabled=c!==0,this.isNextButtonEnabled=e.offsetWidth>=d&&parseInt(c)!==n-$)},getVisibleButtonWidths:function(){var t=this.$refs,e=t.prevButton,s=t.nextButton,r=0;return this.showNavigators&&(r=((e==null?void 0:e.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:ut,ChevronRightIcon:kt},directives:{ripple:X}},Wt=["aria-label","tabindex"],Ht=["aria-orientation"],jt=["aria-label","tabindex"];function qt(a,t,e,s,r,n){var u=Y("ripple");return i(),b("div",f({ref:"list",class:a.cx("root")},a.ptmi("root")),[n.showNavigators&&r.isPrevButtonEnabled?z((i(),b("button",f({key:0,ref:"prevButton",class:a.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},a.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(i(),h(K(n.templates.previcon||"ChevronLeftIcon"),f({"aria-hidden":"true"},a.ptm("prevIcon")),null,16))],16,Wt)),[[u]]):B("",!0),g("div",f({ref:"content",class:a.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},a.ptm("content")),[g("div",f({ref:"tabs",class:a.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},a.ptm("tabList")),[v(a.$slots,"default"),g("span",f({ref:"inkbar",class:a.cx("activeBar"),role:"presentation","aria-hidden":"true"},a.ptm("activeBar")),null,16)],16,Ht)],16),n.showNavigators&&r.isNextButtonEnabled?z((i(),b("button",f({key:1,ref:"nextButton",class:a.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},a.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(i(),h(K(n.templates.nexticon||"ChevronRightIcon"),f({"aria-hidden":"true"},a.ptm("nextIcon")),null,16))],16,jt)),[[u]]):B("",!0)],16)}at.render=qt;var Qt={root:function(t){var e=t.instance,s=t.props;return["p-tab",{"p-tab-active":e.active,"p-disabled":s.disabled}]}},Gt=x.extend({name:"tab",classes:Qt}),Jt={name:"BaseTab",extends:_,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Gt,provide:function(){return{$pcTab:this,$parentInstance:this}}},nt={name:"Tab",extends:Jt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var e=this.findNextTab(t.currentTarget);e?this.changeFocusedTab(t,e):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var e=this.findPrevTab(t.currentTarget);e?this.changeFocusedTab(t,e):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var e=this.findFirstTab();this.changeFocusedTab(t,e),t.preventDefault()},onEndKey:function(t){var e=this.findLastTab();this.changeFocusedTab(t,e),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=e?t:t.nextElementSibling;return s?I(s,"data-p-disabled")||I(s,"data-pc-section")==="inkbar"?this.findNextTab(s):M(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=e?t:t.previousElementSibling;return s?I(s,"data-p-disabled")||I(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):M(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,e){ht(e),this.scrollInView(e)},scrollInView:function(t){var e;t==null||(e=t.scrollIntoView)===null||e===void 0||e.call(t,{block:"nearest"})}},computed:{active:function(){var t;return J((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return f(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:X}};function Xt(a,t,e,s,r,n){var u=Y("ripple");return a.asChild?v(a.$slots,"default",{key:1,class:p(a.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):z((i(),h(K(a.as),f({key:0,class:a.cx("root"),onClick:n.onClick},n.attrs),{default:y(function(){return[v(a.$slots,"default")]}),_:3},16,["class","onClick"])),[[u]])}nt.render=Xt;const Yt=O({__name:"BaseTabs",props:mt({tabs:{}},{tab:{required:!0},tabModifiers:{}}),emits:["update:tab"],setup(a){const t=gt(a,"tab");return(e,s)=>{const r=nt,n=at,u=et,d=tt,m=Z;return i(),h(m,{value:t.value,"onUpdate:value":s[0]||(s[0]=c=>t.value=c)},{default:y(()=>[k(n,null,{default:y(()=>[(i(!0),b(w,null,L(e.tabs,({label:c,id:l})=>(i(),h(r,{key:l,value:l},{default:y(()=>[yt(D(c),1)]),_:2},1032,["value"]))),128))]),_:1}),k(d,null,{default:y(()=>[v(e.$slots,"tabsCommon"),(i(!0),b(w,null,L(e.tabs,({id:c})=>(i(),h(u,{key:c,value:c},{default:y(()=>[(i(!0),b(w,null,L(e.tabs,({id:l})=>v(e.$slots,`tab-${l}`,{key:l})),128)),v(e.$slots,"commonTab")]),_:2},1032,["value"]))),128)),v(e.$slots,"default")]),_:3})]),_:3},8,["value"])}}}),ce=O({__name:"EventsList",props:{tabsList:{},eventsData:{},filters:{},eventsOnPageAmount:{},withCalendar:{type:Boolean},withPagination:{type:Boolean}},setup(a){const t=F(a.tabsList[0].id),e=ot(),s=F(""),r=G(()=>{const c=a.tabsList.findIndex(({id:l})=>l===t.value);return a.eventsData[c]}),{page:n,itemsAmount:u,displayedItems:d}=wt(r,a.eventsOnPageAmount),m=W("EventsList");return $t(t,()=>{n.value=1}),(c,l)=>{const $=st,P=it,S=At,R=Yt,A=Ct;return i(),b("div",{class:p(o(m)({calendar:c.withCalendar}))},[k(R,{tab:o(t),"onUpdate:tab":l[2]||(l[2]=T=>V(t)?t.value=T:null),tabs:c.tabsList},{tabsCommon:y(()=>{var T;return[(T=c.filters)!=null&&T.length?(i(),h($,{key:0,modelValue:o(s),"onUpdate:modelValue":l[0]||(l[0]=C=>V(s)?s.value=C:null),"is-resettable":"",options:c.filters},null,8,["modelValue","options"])):B("",!0),c.withCalendar?(i(),h(P,{key:1,modelValue:o(e),"onUpdate:modelValue":l[1]||(l[1]=C=>V(e)?e.value=C:null),class:p(o(m)("calendar"))},null,8,["modelValue","class"])):B("",!0)]}),commonTab:y(()=>[g("div",{class:p(o(m)("eventsCardsContainer",{calendar:c.withCalendar}))},[(i(!0),b(w,null,L(o(d),(T,C)=>(i(),h(S,{key:`eventData_${C}`,"event-data":T,class:p(o(m)("eventCard",{calendar:c.withCalendar}))},null,8,["event-data","class"]))),128))],2)]),_:1},8,["tab","tabs"]),c.withPagination?(i(),h(A,{key:0,page:o(n),"onUpdate:page":l[3]||(l[3]=T=>V(n)?n.value=T:null),"amount-on-page":c.eventsOnPageAmount,"items-amount":o(u)},null,8,["page","amount-on-page","items-amount"])):B("",!0)],2)}}});export{ce as _,Pt as a};
