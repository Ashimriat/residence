import{_ as G}from"./B8lZA_QO.js";import{_ as it}from"./D9iVZDcm.js";import{d as O,a as H,o as i,c as d,n as p,e as o,i as N,s as X,b as g,f as T,t as D,k as y,w as $,F as k,g as x,h,H as P,U as j,r as m,x as v,I as L,a2 as Y,D as V,G as rt,l as K,a3 as U,a4 as q,L as M,a5 as lt,a6 as S,a7 as ct,a8 as ut,R as J,M as Q,K as E,a9 as dt,aa as bt,ab as pt,j as Z,u as vt,ac as ft,z as W}from"./BP5lhVkG.js";import{E as I,_ as ht}from"./DZVfMyIL.js";import{_ as mt,s as gt}from"./BebbNHf_.js";import{s as yt}from"./OaogT51C.js";import{E as tt}from"./CmywsH7y.js";import{s as $t}from"./D6WcatFj.js";import{u as Tt,_ as kt}from"./MPx7o-ao.js";const Bt=O({__name:"Calendar",setup(e){const t=H();return(a,s)=>(i(),d("div",{class:p(o(t)())},"Календарь",2))}}),wt=O({__name:"EventCard",props:{withDetails:{type:Boolean},isAccountMode:{type:Boolean},eventData:{}},setup(e,{emit:t}){const a=t,s=N(!1),{gameData:l,isAbonWorks:n,currentPlayers:u}=e.eventData,b=X(()=>s.value?I.CLOSE:I.DETAILS);function f(){s.value=!s.value}const r=H();return(c,w)=>{const A=yt,z=G,C=ht,R=mt;return i(),d("div",{class:p(o(r)({account:c.isAccountMode}))},[c.isAccountMode?y("",!0):(i(),d("div",{key:0,class:p(o(r)("topContainer"))},[g("div",{class:p(o(r)("masterDataBlock"))},[T(A,{label:"UI",shape:"circle"}),g("div",{class:p(o(r)("masterName"))},D(o(l).master),3)],2),g("div",{class:p(o(r)("playersAmount"))},[g("span",null,D(`${o(u).length}/${o(l).maxPlayersAmount}`),1),T(z,{type:o(tt).USERS},null,8,["type"])],2)],2)),T(R,{data:c.eventData,"is-account-mode":c.isAccountMode,"with-abon":o(n)&&!c.isAccountMode},{default:$(()=>[c.withDetails?(i(),d(k,{key:0},[o(s)?(i(),d("div",{key:0,class:p(o(r)("detailsBlock"))},[g("div",null,D(o(l).description),1),g("div",{class:p(o(r)("playersBlock"))},[(i(!0),d(k,null,x(o(u),_=>(i(),h(A,{key:_,label:"UI"}))),128))],2)],2)):y("",!0),g("div",{class:p(o(r)("buttonsBlock"))},[T(C,{type:o(I).ENTER_EVENT,onClick:w[0]||(w[0]=_=>a("signUp"))},null,8,["type"]),T(C,{type:o(b),"omit-icon":"",onClick:f},null,8,["type"]),o(s)?(i(),h(C,{key:0,type:o(I).SHARE},null,8,["type"])):y("",!0)],2)],64)):y("",!0)]),_:1},8,["data","is-account-mode","with-abon"])],2)}}});var At=function(t){var a=t.dt;return`
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
`)},Ct={root:function(t){var a=t.props;return["p-tabs p-component",{"p-tabs-scrollable":a.scrollable}]}},xt=P.extend({name:"tabs",theme:At,classes:Ct}),Pt={name:"BaseTabs",extends:L,props:{value:{type:[String,Number],default:void 0},lazy:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},showNavigators:{type:Boolean,default:!0},tabindex:{type:Number,default:0},selectOnFocus:{type:Boolean,default:!1}},style:xt,provide:function(){return{$pcTabs:this,$parentInstance:this}}},et={name:"Tabs",extends:Pt,inheritAttrs:!1,emits:["update:value"],data:function(){return{id:this.$attrs.id,d_value:this.value}},watch:{"$attrs.id":function(t){this.id=t||j()},value:function(t){this.d_value=t}},mounted:function(){this.id=this.id||j()},methods:{updateValue:function(t){this.d_value!==t&&(this.d_value=t,this.$emit("update:value",t))},isVertical:function(){return this.orientation==="vertical"}}};function Lt(e,t,a,s,l,n){return i(),d("div",v({class:e.cx("root")},e.ptmi("root")),[m(e.$slots,"default")],16)}et.render=Lt;var _t={root:"p-tabpanels"},St=P.extend({name:"tabpanels",classes:_t}),Et={name:"BaseTabPanels",extends:L,props:{},style:St,provide:function(){return{$pcTabPanels:this,$parentInstance:this}}},at={name:"TabPanels",extends:Et,inheritAttrs:!1};function It(e,t,a,s,l,n){return i(),d("div",v({class:e.cx("root"),role:"presentation"},e.ptmi("root")),[m(e.$slots,"default")],16)}at.render=It;var Nt={root:function(t){var a=t.instance;return["p-tabpanel",{"p-tabpanel-active":a.active}]}},Dt=P.extend({name:"tabpanel",classes:Nt}),Vt={name:"BaseTabPanel",extends:L,props:{value:{type:[String,Number],default:void 0},as:{type:[String,Object],default:"DIV"},asChild:{type:Boolean,default:!1},header:null,headerStyle:null,headerClass:null,headerProps:null,headerActionProps:null,contentStyle:null,contentClass:null,contentProps:null,disabled:Boolean},style:Dt,provide:function(){return{$pcTabPanel:this,$parentInstance:this}}},nt={name:"TabPanel",extends:Vt,inheritAttrs:!1,inject:["$pcTabs"],computed:{active:function(){var t;return Y((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},ariaLabelledby:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},attrs:function(){return v(this.a11yAttrs,this.ptmi("root",this.ptParams))},a11yAttrs:function(){var t;return{id:this.id,tabindex:(t=this.$pcTabs)===null||t===void 0?void 0:t.tabindex,role:"tabpanel","aria-labelledby":this.ariaLabelledby,"data-pc-name":"tabpanel","data-p-active":this.active}},ptParams:function(){return{context:{active:this.active}}}}};function Kt(e,t,a,s,l,n){var u,b;return n.$pcTabs?(i(),d(k,{key:1},[e.asChild?m(e.$slots,"default",{key:1,class:p(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs}):(i(),d(k,{key:0},[!((u=n.$pcTabs)!==null&&u!==void 0&&u.lazy)||n.active?V((i(),h(K(e.as),v({key:0,class:e.cx("root")},n.attrs),{default:$(function(){return[m(e.$slots,"default")]}),_:3},16,["class"])),[[rt,(b=n.$pcTabs)!==null&&b!==void 0&&b.lazy?!0:n.active]]):y("",!0)],64))],64)):m(e.$slots,"default",{key:0})}nt.render=Kt;var Ot={root:"p-tablist",content:function(t){var a=t.instance;return["p-tablist-content",{"p-tablist-viewport":a.$pcTabs.scrollable}]},tabList:"p-tablist-tab-list",activeBar:"p-tablist-active-bar",prevButton:"p-tablist-prev-button p-tablist-nav-button",nextButton:"p-tablist-next-button p-tablist-nav-button"},zt=P.extend({name:"tablist",classes:Ot}),Rt={name:"BaseTabList",extends:L,props:{},style:zt,provide:function(){return{$pcTabList:this,$parentInstance:this}}},st={name:"TabList",extends:Rt,inheritAttrs:!1,inject:["$pcTabs"],data:function(){return{isPrevButtonEnabled:!1,isNextButtonEnabled:!0}},resizeObserver:void 0,watch:{showNavigators:function(t){t?this.bindResizeObserver():this.unbindResizeObserver()},activeValue:{flush:"post",handler:function(){this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()}),this.showNavigators&&(this.updateButtonState(),this.bindResizeObserver())},updated:function(){this.showNavigators&&this.updateButtonState()},beforeUnmount:function(){this.unbindResizeObserver()},methods:{onScroll:function(t){this.showNavigators&&this.updateButtonState(),t.preventDefault()},onPrevButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),s=U(t)-a,l=Math.abs(t.scrollLeft),n=s*.8,u=l-n,b=Math.max(u,0);t.scrollLeft=q(t)?-1*b:b},onNextButtonClick:function(){var t=this.$refs.content,a=this.getVisibleButtonWidths(),s=U(t)-a,l=Math.abs(t.scrollLeft),n=s*.8,u=l+n,b=t.scrollWidth-s,f=Math.min(u,b);t.scrollLeft=q(t)?-1*f:f},bindResizeObserver:function(){var t=this;this.resizeObserver=new ResizeObserver(function(){return t.updateButtonState()}),this.resizeObserver.observe(this.$refs.list)},unbindResizeObserver:function(){var t;(t=this.resizeObserver)===null||t===void 0||t.unobserve(this.$refs.list),this.resizeObserver=void 0},updateInkBar:function(){var t=this.$refs,a=t.content,s=t.inkbar,l=t.tabs,n=M(a,'[data-pc-name="tab"][data-p-active="true"]');this.$pcTabs.isVertical()?(s.style.height=lt(n)+"px",s.style.top=S(n).top-S(l).top+"px"):(s.style.width=ct(n)+"px",s.style.left=S(n).left-S(l).left+"px")},updateButtonState:function(){var t=this.$refs,a=t.list,s=t.content,l=s.scrollTop,n=s.scrollWidth,u=s.scrollHeight,b=s.offsetWidth,f=s.offsetHeight,r=Math.abs(s.scrollLeft),c=[U(s),ut(s)],w=c[0],A=c[1];this.$pcTabs.isVertical()?(this.isPrevButtonEnabled=l!==0,this.isNextButtonEnabled=a.offsetHeight>=f&&parseInt(l)!==u-A):(this.isPrevButtonEnabled=r!==0,this.isNextButtonEnabled=a.offsetWidth>=b&&parseInt(r)!==n-w)},getVisibleButtonWidths:function(){var t=this.$refs,a=t.prevButton,s=t.nextButton,l=0;return this.showNavigators&&(l=((a==null?void 0:a.offsetWidth)||0)+((s==null?void 0:s.offsetWidth)||0)),l}},computed:{templates:function(){return this.$pcTabs.$slots},activeValue:function(){return this.$pcTabs.d_value},showNavigators:function(){return this.$pcTabs.scrollable&&this.$pcTabs.showNavigators},prevButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.previous:void 0},nextButtonAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.next:void 0}},components:{ChevronLeftIcon:gt,ChevronRightIcon:$t},directives:{ripple:J}},Ft=["aria-label","tabindex"],Ut=["aria-orientation"],Wt=["aria-label","tabindex"];function Mt(e,t,a,s,l,n){var u=Q("ripple");return i(),d("div",v({ref:"list",class:e.cx("root")},e.ptmi("root")),[n.showNavigators&&l.isPrevButtonEnabled?V((i(),d("button",v({key:0,ref:"prevButton",class:e.cx("prevButton"),"aria-label":n.prevButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[0]||(t[0]=function(){return n.onPrevButtonClick&&n.onPrevButtonClick.apply(n,arguments)})},e.ptm("prevButton"),{"data-pc-group-section":"navigator"}),[(i(),h(K(n.templates.previcon||"ChevronLeftIcon"),v({"aria-hidden":"true"},e.ptm("prevIcon")),null,16))],16,Ft)),[[u]]):y("",!0),g("div",v({ref:"content",class:e.cx("content"),onScroll:t[1]||(t[1]=function(){return n.onScroll&&n.onScroll.apply(n,arguments)})},e.ptm("content")),[g("div",v({ref:"tabs",class:e.cx("tabList"),role:"tablist","aria-orientation":n.$pcTabs.orientation||"horizontal"},e.ptm("tabList")),[m(e.$slots,"default"),g("span",v({ref:"inkbar",class:e.cx("activeBar"),role:"presentation","aria-hidden":"true"},e.ptm("activeBar")),null,16)],16,Ut)],16),n.showNavigators&&l.isNextButtonEnabled?V((i(),d("button",v({key:1,ref:"nextButton",class:e.cx("nextButton"),"aria-label":n.nextButtonAriaLabel,tabindex:n.$pcTabs.tabindex,onClick:t[2]||(t[2]=function(){return n.onNextButtonClick&&n.onNextButtonClick.apply(n,arguments)})},e.ptm("nextButton"),{"data-pc-group-section":"navigator"}),[(i(),h(K(n.templates.nexticon||"ChevronRightIcon"),v({"aria-hidden":"true"},e.ptm("nextIcon")),null,16))],16,Wt)),[[u]]):y("",!0)],16)}st.render=Mt;var Ht={root:function(t){var a=t.instance,s=t.props;return["p-tab",{"p-tab-active":a.active,"p-disabled":s.disabled}]}},jt=P.extend({name:"tab",classes:Ht}),qt={name:"BaseTab",extends:L,props:{value:{type:[String,Number],default:void 0},disabled:{type:Boolean,default:!1},as:{type:[String,Object],default:"BUTTON"},asChild:{type:Boolean,default:!1}},style:jt,provide:function(){return{$pcTab:this,$parentInstance:this}}},ot={name:"Tab",extends:qt,inheritAttrs:!1,inject:["$pcTabs","$pcTabList"],methods:{onFocus:function(){this.$pcTabs.selectOnFocus&&this.changeActiveValue()},onClick:function(){this.changeActiveValue()},onKeydown:function(t){switch(t.code){case"ArrowRight":this.onArrowRightKey(t);break;case"ArrowLeft":this.onArrowLeftKey(t);break;case"Home":this.onHomeKey(t);break;case"End":this.onEndKey(t);break;case"PageDown":this.onPageDownKey(t);break;case"PageUp":this.onPageUpKey(t);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(t);break}},onArrowRightKey:function(t){var a=this.findNextTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onHomeKey(t),t.preventDefault()},onArrowLeftKey:function(t){var a=this.findPrevTab(t.currentTarget);a?this.changeFocusedTab(t,a):this.onEndKey(t),t.preventDefault()},onHomeKey:function(t){var a=this.findFirstTab();this.changeFocusedTab(t,a),t.preventDefault()},onEndKey:function(t){var a=this.findLastTab();this.changeFocusedTab(t,a),t.preventDefault()},onPageDownKey:function(t){this.scrollInView(this.findLastTab()),t.preventDefault()},onPageUpKey:function(t){this.scrollInView(this.findFirstTab()),t.preventDefault()},onEnterKey:function(t){this.changeActiveValue(),t.preventDefault()},findNextTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.nextElementSibling;return s?E(s,"data-p-disabled")||E(s,"data-pc-section")==="inkbar"?this.findNextTab(s):M(s,'[data-pc-name="tab"]'):null},findPrevTab:function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=a?t:t.previousElementSibling;return s?E(s,"data-p-disabled")||E(s,"data-pc-section")==="inkbar"?this.findPrevTab(s):M(s,'[data-pc-name="tab"]'):null},findFirstTab:function(){return this.findNextTab(this.$pcTabList.$refs.content.firstElementChild,!0)},findLastTab:function(){return this.findPrevTab(this.$pcTabList.$refs.content.lastElementChild,!0)},changeActiveValue:function(){this.$pcTabs.updateValue(this.value)},changeFocusedTab:function(t,a){dt(a),this.scrollInView(a)},scrollInView:function(t){var a;t==null||(a=t.scrollIntoView)===null||a===void 0||a.call(t,{block:"nearest"})}},computed:{active:function(){var t;return Y((t=this.$pcTabs)===null||t===void 0?void 0:t.d_value,this.value)},id:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tab_").concat(this.value)},ariaControls:function(){var t;return"".concat((t=this.$pcTabs)===null||t===void 0?void 0:t.id,"_tabpanel_").concat(this.value)},attrs:function(){return v(this.asAttrs,this.a11yAttrs,this.ptmi("root",this.ptParams))},asAttrs:function(){return this.as==="BUTTON"?{type:"button",disabled:this.disabled}:void 0},a11yAttrs:function(){return{id:this.id,tabindex:this.active?this.$pcTabs.tabindex:-1,role:"tab","aria-selected":this.active,"aria-controls":this.ariaControls,"data-pc-name":"tab","data-p-disabled":this.disabled,"data-p-active":this.active,onFocus:this.onFocus,onKeydown:this.onKeydown}},ptParams:function(){return{context:{active:this.active}}}},directives:{ripple:J}};function Gt(e,t,a,s,l,n){var u=Q("ripple");return e.asChild?m(e.$slots,"default",{key:1,class:p(e.cx("root")),active:n.active,a11yAttrs:n.a11yAttrs,onClick:n.onClick}):V((i(),h(K(e.as),v({key:0,class:e.cx("root"),onClick:n.onClick},n.attrs),{default:$(function(){return[m(e.$slots,"default")]}),_:3},16,["class","onClick"])),[[u]])}ot.render=Gt;const Xt=O({__name:"BaseTabs",props:bt({tabs:{}},{tab:{required:!0},tabModifiers:{}}),emits:["update:tab"],setup(e){const t=pt(e,"tab");return(a,s)=>{const l=ot,n=st,u=nt,b=at,f=et;return i(),h(f,{value:t.value,"onUpdate:value":s[0]||(s[0]=r=>t.value=r)},{default:$(()=>[T(n,null,{default:$(()=>[(i(!0),d(k,null,x(a.tabs,({label:r,id:c})=>(i(),h(l,{key:c,value:c},{default:$(()=>[Z(D(r),1)]),_:2},1032,["value"]))),128))]),_:1}),T(b,null,{default:$(()=>[m(a.$slots,"tabsCommon"),(i(!0),d(k,null,x(a.tabs,({id:r})=>(i(),h(u,{key:r,value:r},{default:$(()=>[(i(!0),d(k,null,x(a.tabs,({id:c})=>m(a.$slots,`tab-${c}`,{key:c})),128)),m(a.$slots,"commonTab")]),_:2},1032,["value"]))),128)),m(a.$slots,"default")]),_:3})]),_:3},8,["value"])}}}),oe=O({__name:"EventsList",props:{tabsList:{},eventsData:{},filters:{},eventsOnPageAmount:{},withCalendar:{type:Boolean},withPagination:{type:Boolean}},setup(e){const t=N(e.tabsList[0].id);N("");const a=N(""),s=X(()=>{const r=e.tabsList.findIndex(({id:c})=>c===t.value);return console.log("ACTIVE TAB INDEX",r),console.log("EVENTS DATA",e.eventsData[r]),e.eventsData[r]}),{isMobile:l}=vt(),{page:n,itemsAmount:u,displayedItems:b}=Tt(s,e.eventsOnPageAmount);console.log("DISPLAYED ITEMS",b.value);const f=H();return ft(t,()=>{n.value=1}),(r,c)=>{const w=G,A=it,z=Bt,C=wt,R=Xt,_=kt;return i(),d(k,null,[T(R,{tab:o(t),"onUpdate:tab":c[1]||(c[1]=B=>W(t)?t.value=B:null),tabs:r.tabsList},{tabsCommon:$(()=>{var B;return[r.withCalendar&&o(l)?(i(),d("div",{key:0,class:p(o(f)("mobileCalendar"))},[c[3]||(c[3]=Z("Выбрать дату")),T(w,{type:o(tt).CALENDAR},null,8,["type"])],2)):y("",!0),(B=r.filters)!=null&&B.length?(i(),h(A,{key:1,modelValue:o(a),"onUpdate:modelValue":c[0]||(c[0]=F=>W(a)?a.value=F:null),"is-resettable":"",options:r.filters},null,8,["modelValue","options"])):y("",!0),r.withCalendar&&!o(l)?(i(),h(z,{key:2,class:p(o(f)("calendar"))},null,8,["class"])):y("",!0)]}),commonTab:$(()=>[g("div",{class:p(o(f)("eventsCardsContainer"))},[(i(!0),d(k,null,x(o(b),(B,F)=>(i(),h(C,{key:`eventData_${F}`,"event-data":B,class:p(o(f)("eventCard",{withCalendar:r.withCalendar}))},null,8,["event-data","class"]))),128))],2)]),_:1},8,["tab","tabs"]),r.withPagination?(i(),h(_,{key:0,page:o(n),"onUpdate:page":c[2]||(c[2]=B=>W(n)?n.value=B:null),"amount-on-page":r.eventsOnPageAmount,"items-amount":o(u)},null,8,["page","amount-on-page","items-amount"])):y("",!0)],64)}}});export{oe as _};
