import{_ as D}from"./2kJX6Xv6.js";import{g as M,_ as O}from"./BsGZ8QYy.js";import{s as P}from"./DWwbgUN4.js";import{d as Q,i as I,y as V,a as z,c as p,F as B,g as N,e,f as h,n as s,o as u,C as w,b as l,t as g,h as F,D as K,E as T,G}from"./SYL6cD_r.js";import{L as W}from"./BYKukpQ9.js";import{E as $}from"./CmywsH7y.js";import{E as J}from"./YFsaagnJ.js";import{SECTIONS as y}from"./CZT1M1e5.js";import"./xGJgAwUo.js";import"./umqxLsXu.js";import"./CCzMMiHC.js";import"./CQlxkzOo.js";import"./CtwrIHis.js";import"./Ck4UbySV.js";const X=["onClick"],Y=["onClick"],pe=Q({__name:"FAQ",setup(Z){const f=I(y.reduce((o,{type:a,contents:i})=>{o[a]=!1;for(let r=0;r<i.length;r+=1)o[`${a}_${r}`]=!1;return o},{})),m=I({}),_={};function A(){}function v(o,a){_[o]||(_[o]=a)}function C(o){f.value[o]=!f.value[o]}V(()=>{M(_).forEach(o=>{const a=_[o],i=getComputedStyle(a).height,r=getComputedStyle(a.childNodes[0]).height;m.value[o]={full:i,partial:r}})});const t=z("PageFAQ");return(o,a)=>{const i=D,r=P,U=O;return u(),p("div",{class:s(e(t)())},[(u(!0),p(B,null,N(e(y),({type:n,title:x,contents:L},S)=>{var k,q;return u(),p("section",{key:`faqSection_${S}`,ref_for:!0,ref:d=>v(n,d),class:s(e(t)("section",{open:e(f)[n]})),style:w({"--fullHeight":(k=e(m)[n])==null?void 0:k.full,"--partialHeight":(q=e(m)[n])==null?void 0:q.partial})},[l("div",{class:s(e(t)("upperContainer")),onClick:d=>C(n)},[l("h3",{class:s(e(t)("title"))},g(x),3),h(i,{type:e($).CHEVRON,class:s(e(t)("sectionArrow",{facingUp:e(f)[n]}))},null,8,["type","class"])],10,X),l("div",{class:s(e(t)("questionsWrapper")),onClick:a[0]||(a[0]=T(()=>{},["stop"]))},[(u(!0),p(B,null,N(L,({question:d,answer:R},c)=>{var E,b;return u(),p("div",{key:`faqSection_${S}_question_${c}`,ref_for:!0,ref:H=>v(`${n}_${c}`,H),class:s(e(t)("questionContent",{open:e(f)[`${n}_${c}`]})),style:w({"--fullHeight":(E=e(m)[`${n}_${c}`])==null?void 0:E.full,"--partialHeight":(b=e(m)[`${n}_${c}`])==null?void 0:b.partial})},[l("div",{class:s(e(t)("questionContainer")),onClick:H=>C(`${n}_${c}`)},[l("div",{class:s(e(t)("question"))},[l("span",null,g(d),1),e(f)[`${n}_${c}`]?(u(),F(i,{key:0,type:e($).MINUS,class:s(e(t)("questionIcon"))},null,8,["type","class"])):(u(),F(i,{key:1,type:e($).PLUS,class:s(e(t)("questionIcon"))},null,8,["type","class"]))],2),h(r,{shape:"circle",label:"UI",class:s(e(t)("avatar"))},null,8,["class"])],10,Y),l("div",{class:s(e(t)("answerContainer"))},[l("div",{class:s(e(t)("logoContainer"))},[K(h(e(W),null,null,512),[[G,!1]])],2),l("div",{class:s(e(t)("answer"))},g(R),3)],2)],6)}),128))],2)],6)}),128)),h(U,{title:"Не нашли, что искали?",subtext:"Если все еще остались вопросы, оставьте заявку – мы напишем!","request-text-placeholder":"Кратко опишите вопрос","button-type":e(J).ASK_QUESTION,onSubmit:A},null,8,["button-type"])],2)}}});export{pe as default};