import{a as st}from"./D470sFG0.js";import{e as ot,a as it}from"./Cu-_IAfR.js";import{_ as rt}from"./1wHB3SfI.js";import{E,_ as lt}from"./CaxO1kRQ.js";import{_ as ct,s as ut}from"./Cl0WJ6p_.js";import{_ as dt}from"./CVcdgs20.js";import{s as bt}from"./x4RQqsOl.js";import{E as pt,a as H}from"./Dz1hIP-c.js";import{f as M,h as ft,r as F,e as J,i as Q,o as i,k as v,w as m,c as b,n as p,p as o,a as y,q as k,v as V,t as B,F as w,l as L,B as A,al as j,x as g,m as f,N as _,Q as G,ab as z,ad as vt,L as K,aI as R,aJ as q,D as U,aK as ht,aL as N,ap as mt,aM as gt,R as X,ah as Y,C as I,aE as yt,g as $t,u as Tt,M as Bt,aF as kt,a9 as D}from"./DCJqdLXD.js";import{s as wt}from"./DQzC9je5.js";import{u as Ct,_ as Pt}from"./Ci5QgwmF.js";const xt=M({__name:"EventCard",props:{withDetails:{type:Boolean},isAccountMode:{type:Boolean},eventData:{}},emits:["signUp"],setup(e,{emit:t}){const a=t,{isMobile:s}=ft(),r=F(!1),{gameData:n,isAbonWorks:u,currentPlayers:d}=e.eventData,h=J(()=>r.value?E.CLOSE:E.DETAILS);function c(){r.value=!r.value}const l=Q("EventCard");return($,P)=>{const S=bt,O=rt,x=lt,T=ct,C=dt;return i(),v(C,{orientation:"column",class:p(o(l)({account:$.isAccountMode}))},{subContent:m(()=>[$.isAccountMode?B("",!0):(i(),b("div",{key:0,class:p(o(l)("topContainer"))},[y("div",{class:p(o(l)("masterDataBlock"))},[k(S,{label:"UI",shape:"circle"}),y("div",{class:p(o(l)("masterName"))},V(o(n).master),3)],2),y("div",{class:p(o(l)("playersAmount"))},[y("span",null,V(`${o(d).length}/${o(n).maxPlayersAmount}`),1),k(O,{type:o(pt).USERS,size:o(s)?o(H).S:o(H).M},null,8,["type","size"])],2)],2))]),content:m(()=>[k(T,{data:$.eventData,"is-account-mode":$.isAccountMode,"with-abon":o(u)&&!$.isAccountMode},{default:m(()=>[$.withDetails?(i(),b(w,{key:0},[o(r)?(i(),b("div",{key:0,class:p(o(l)("detailsBlock"))},[y("div",null,V(o(n).description),1),y("div",{class:p(o(l)("playersBlock"))},[(i(!0),b(w,null,L(o(d),W=>(i(),v(S,{key:W,label:"UI"}))),128))],2)],2)):B("",!0),y("div",{class:p(o(l)("buttonsBlock"))},[k(x,{type:o(E).ENTER_EVENT,onClick:P[0]||(P[0]=W=>a("signUp"))},null,8,["type"]),k(x,{type:o(h),"omit-icon":"",onClick:c},null,8,["type"]),o(r)?(i(),v(x,{key:0,type:o(E).SHARE},null,8,["type"])):B("",!0)],2)],64)):B("",!0)]),_:1},8,["data","is-account-mode","with-abon"])]),_:1},8,["class"])}}});var Lt=function(t){var a=t.dt;return`
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
    background: `.concat(a("tabs.tablist.background"),`;
    border-style: solid;
    border-color: `).concat(a("tabs.tablist.border.color"),`;
    border-width: `).concat(a("tabs.tablist.border.width"),`;
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
    background: `).concat(a("tabs.nav.button.background"),`;
    color: `).concat(a("tabs.nav.button.color"),`;
    width: `).concat(a("tabs.nav.button.width"),`;
    transition: color `).concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    box-shadow: `).concat(a("tabs.nav.button.shadow"),`;
    outline-color: transparent;
    cursor: pointer;
}

.p-tablist-nav-button:focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.nav.button.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.nav.button.focus.ring.width")," ").concat(a("tabs.nav.button.focus.ring.style")," ").concat(a("tabs.nav.button.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.nav.button.focus.ring.offset"),`;
}

.p-tablist-nav-button:hover {
    color: `).concat(a("tabs.nav.button.hover.color"),`;
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
    background: `).concat(a("tabs.tab.background"),`;
    border-width: `).concat(a("tabs.tab.border.width"),`;
    border-color: `).concat(a("tabs.tab.border.color"),`;
    color: `).concat(a("tabs.tab.color"),`;
    padding: `).concat(a("tabs.tab.padding"),`;
    font-weight: `).concat(a("tabs.tab.font.weight"),`;
    transition: background `).concat(a("tabs.transition.duration"),", border-color ").concat(a("tabs.transition.duration"),", color ").concat(a("tabs.transition.duration"),", outline-color ").concat(a("tabs.transition.duration"),", box-shadow ").concat(a("tabs.transition.duration"),`;
    margin: `).concat(a("tabs.tab.margin"),`;
    outline-color: transparent;
}

.p-tab:not(.p-disabled):focus-visible {
    z-index: 1;
    box-shadow: `).concat(a("tabs.tab.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tab.focus.ring.width")," ").concat(a("tabs.tab.focus.ring.style")," ").concat(a("tabs.tab.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tab.focus.ring.offset"),`;
}

.p-tab:not(.p-tab-active):not(.p-disabled):hover {
    background: `).concat(a("tabs.tab.hover.background"),`;
    border-color: `).concat(a("tabs.tab.hover.border.color"),`;
    color: `).concat(a("tabs.tab.hover.color"),`;
}

.p-tab-active {
    background: `).concat(a("tabs.tab.active.background"),`;
    border-color: `).concat(a("tabs.tab.active.border.color"),`;
    color: `).concat(a("tabs.tab.active.color"),`;
}

.p-tabpanels {
    background: `).concat(a("tabs.tabpanel.background"),`;
    color: `).concat(a("tabs.tabpanel.color"),`;
    padding: `).concat(a("tabs.tabpanel.padding"),`;
    outline: 0 none;
}

.p-tabpanel:focus-visible {
    box-shadow: `).concat(a("tabs.tabpanel.focus.ring.shadow"),`;
    outline: `).concat(a("tabs.tabpanel.focus.ring.width")," ").concat(a("tabs.tabpanel.focus.ring.style")," ").concat(a("tabs.tabpanel.focus.ring.color"),`;
    outline-offset: `).concat(a("tabs.tabpanel.focus.ring.offset"),`;
}

.p-tablist-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    inset-block-end: `).concat(a("tabs.active.bar.bottom"),`;
    height: `).concat(a("tabs.active.bar.height"),`;
    background: `).concat(a("tabs.active.bar.background"),`;
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}
`)},At={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},_t=A.extend({name:"tabs",theme:Lt,classes:At}),St={name:"BaseTabs",extends:_,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:_t,provide:function(){return{$pcTabs:this,$parentInstance:this}}},Z={name:"Tabs",extends:St,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||j()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||j()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Et(e,t,a,s,r,n){return i(),b("div",f({class:e.cx("root")},e.ptmi("root")),[g(e.$slots,"default")],16)}Z.render=Et;var Nt={root:"p-tabpanels"},It=A.extend({name:"tabpanels",classes:Nt}),Dt={name:"BaseTabPanels",extends:_,props:{},style:It,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},tt={name:"TabPanels",extends:Dt,inheritAttrs:!1};function Vt(e,t,a,s,r,n){return i(),b("div",f({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[g(e.$slots,"default")],16)}tt.render=Vt;var zt={root:function(t){var a=t.instance;return["p-tabpanel",{"p-tabpanel-active":a.active}]}},Kt=A.extend({name:"tabpanel",classes:zt}),Ot={name:"BaseTabPanel",extends:_,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Kt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},et={name:"TabPanel",extends:Ot,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return G((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return f(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Rt(e,t,a,s,r,n){var u,d;return n.$pcTabs?(i(),b(w,{key:1},[e.asChild?g(e.$slots,"default",{key:1,class:p(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(i(),b(w,{key:0},[!((u=n.$pcTabs)!==null&&u!==void 0&&u.lazy)||n.active?z((i(),v(K(e.as),f({key:0,class:e.cx("root")},n.attrs),{default:m(function(){return[g(e.$slots,"default")]}),_:3},16,["class"])),[[vt,(d=n.$pcTabs)!==null&&d!==void 0&&d.lazy?!0:n.active]]):B("",!0)],64))],64)):g(e.$slots,"default",{key:0})}et.render=Rt;var Ft={root:"p-tablist",content:function(t){var a=t.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},Ut=A.extend({name:"tablist",classes:Ft}),Mt={name:"BaseTabList",extends:_,props:{},style:Ut,provide:function(){return{$pcTabList:this,$parentInstance:this}}},at={name:"TabList",extends:Mt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),s=R(t)-a,r=Math.abs(t.scrollLeft),n=s*.8,u=r-n,d=Math.max(u,0);t.scrollLeft=q(t)?-1*d:d},onNextButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),s=R(t)-a,r=Math.abs(t.scrollLeft),n=s*.8,u=r+n,d=t.scrollWidth-s,h=Math.min(u,d);t.scrollLeft=q(t)?-1*h:h},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,s=t.inkbar,r=t.tabs,n=U(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=ht(n)+"px",s.style.top=N(n).top-N(r).top+"px"):(s.style.width=mt(n)+"px",s.style.left=N(n).left-N(r).left+"px")},updateButtonState:function(){var t=this.$refs,a=t.list,s=t.content,r=s.scrollTop,n=s.scrollWidth,u=s.scrollHeight,d=s.offsetWidth,h=s.offsetHeight,c=Math.abs(s.scrollLeft),l=[R(s),gt(s)],$=l[0],P=l[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=a.offsetHeight>=h&&parseInt(r)!==u-P):(this.isPrevButtonEnabled=c!==0,this.isNextButtonEnabled=a.offsetWidth>=d&&parseInt(c)!==n-$)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevButton,s=t.nextButton,r=0;return this.showNavigators&&(r=((a==null?void 0:a.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),r}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:ut,ChevronRightIcon:wt},directives:{ripple:X}},Wt=["aria-label","tabindex"],Ht=["aria-orientation"],jt=["aria-label","tabindex"];function qt(e,t,a,s,r,n){var u=Y("ripple");return i(),b("div",f({ref:"list",class:e.cx("root")},e.ptmi("root")),[n.showNavigators&&r.isPrevButtonEnabled?z((i(),b("button",f({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(i(),v(K(n.templates.previcon||"ChevronLeftIcon"),f({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Wt)),[[u]]):B("",!0),y("div",f({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},e.ptm("content")),[y("div",f({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[g(e.$slots,"default"),y("span",f({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Ht)],16),n.showNavigators&&r.isNextButtonEnabled?z((i(),b("button",f({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(i(),v(K(n.templates.nexticon||"ChevronRightIcon"),f({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,jt)),[[u]]):B("",!0)],16)}at.render=qt;var Jt={root:function(t){var a=t.instance,s=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},Qt=A.extend({name:"tab",classes:Jt}),Gt={name:"BaseTab",extends:_,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:Qt,provide:function(){return{$pcTab:this,$parentInstance:this}}},nt={name:"Tab",extends:Gt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.nextElementSibling;return s?I(s,"data-p-disabled")||I(s,"data-pc-section")==="inkbar"?this.findNextTab(s):U(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.previousElementSibling;return s?I(s,"data-p-disabled")||I(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):U(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){yt(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return G((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return f(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:X}};function Xt(e,t,a,s,r,n){var u=Y("ripple");return e.asChild?g(e.$slots,"default",{key:1,class:p(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):z((i(),v(K(e.as),f({key:0,class:e.cx("root"),onClick:n.onClick},n.attrs),{default:m(function(){return[g(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[u]])}nt.render=Xt;const Yt=M({__name:"BaseTabs",props:$t({tabs:{}},{tab:{required:!0},tabModifiers:{}}),emits:["update:tab"],setup(e){const t=Tt(e,"tab");return(a,s)=>{const r=nt,n=at,u=et,d=tt,h=Z;return i(),v(h,{value:t.value,"onUpdate:value":s[0]||(s[0]=c=>t.value=c)},{default:m(()=>[k(n,null,{default:m(()=>[(i(!0),b(w,null,L(a.tabs,({label:c,id:l})=>(i(),v(r,{key:l,value:l},{default:m(()=>[Bt(V(c),1)]),_:2},1032,["value"]))),128))]),_:1}),k(d,null,{default:m(()=>[g(a.$slots,"tabsCommon"),(i(!0),b(w,null,L(a.tabs,({id:c})=>(i(),v(u,{key:c,value:c},{default:m(()=>[(i(!0),b(w,null,L(a.tabs,({id:l})=>g(a.$slots,`tab-${l}`,{key:l})),128)),g(a.$slots,"commonTab")]),_:2},1032,["value"]))),128)),g(a.$slots,"default")]),_:3})]),_:3},8,["value"])}}}),ue=M({__name:"EventsList",props:{tabsList:{},eventsData:{},filters:{},eventsOnPageAmount:{},withCalendar:{type:Boolean},withPagination:{type:Boolean}},setup(e){const t=F(e.tabsList[0].id),{selectedDate:a}=ot(),s=F(""),r=J(()=>{const c=e.tabsList.findIndex(({id:l})=>l===t.value);return e.eventsData[c]}),{page:n,itemsAmount:u,displayedItems:d}=Ct(r,e.eventsOnPageAmount),h=Q("EventsList");return kt(t,()=>{n.value=1}),(c,l)=>{const $=st,P=it,S=xt,O=Yt,x=Pt;return i(),b("div",{class:p(o(h)({calendar:c.withCalendar}))},[k(O,{tab:o(t),"onUpdate:tab":l[2]||(l[2]=T=>D(t)?t.value=T:null),tabs:c.tabsList},{tabsCommon:m(()=>{var T;return[(T=c.filters)!=null&&T.length?(i(),v($,{key:0,modelValue:o(s),"onUpdate:modelValue":l[0]||(l[0]=C=>D(s)?s.value=C:null),"is-resettable":"",options:c.filters},null,8,["modelValue","options"])):B("",!0),c.withCalendar?(i(),v(P,{key:1,date:o(a),"onUpdate:date":l[1]||(l[1]=C=>D(a)?a.value=C:null),class:p(o(h)("calendar"))},null,8,["date","class"])):B("",!0)]}),commonTab:m(()=>[y("div",{class:p(o(h)("eventsCardsContainer",{calendar:c.withCalendar}))},[(i(!0),b(w,null,L(o(d),(T,C)=>(i(),v(S,{key:`eventData_${C}`,"event-data":T,class:p(o(h)("eventCard",{calendar:c.withCalendar}))},null,8,["event-data","class"]))),128))],2)]),_:1},8,["tab","tabs"]),c.withPagination?(i(),v(x,{key:0,page:o(n),"onUpdate:page":l[3]||(l[3]=T=>D(n)?n.value=T:null),"amount-on-page":c.eventsOnPageAmount,"items-amount":o(u)},null,8,["page","amount-on-page","items-amount"])):B("",!0)],2)}}});export{ue as _};
