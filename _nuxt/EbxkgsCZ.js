import{_ as L,E as c}from"./DV6-ITZN.js";import{m as k,_ as R}from"./Ccfk1HoX.js";import{u as T,a as D,b as S}from"./C3meiP6G.js";import{u as I,_ as U}from"./Ctm-EXAY.js";import"./CQmmrYkN.js";import{u as b}from"./PckHJOla.js";import{G as x,r as O,H as z,c as i,d as n,J as s,K as t,x as C,F as g,A as y,I as r,a6 as B,w as F,o,D as N}from"./aB8ygRKp.js";import"./2eYUjlFR.js";import"./Bd5TAZbL.js";import"./Ck4UbySV.js";import"./CgQ7o3ik.js";import"./DpMMJ1IU.js";import"./DbCR8B0k.js";import"./cfk8qS3U.js";import"./y7jn3q4Y.js";import"./DXv1HGzH.js";import"./CUiTI0xw.js";import"./Bgfz2bbu.js";import"./ChnqAE4L.js";import"./4tlFL0ic.js";import"./DlAUqK2U.js";import"./CFvUfcT_.js";import"./CqC8AqT3.js";import"./DkLopEmf.js";const A=4,dt=x({__name:"Clans",setup(G){const _=k(40,20),m=O(""),{providedData:d}=b(),{page:u,displayedItems:v}=I(_,A),{createClan:f,showClanRequestSent:E,seeClanParticipants:h}=T(),a=z("ClansPage");return(H,l)=>{const p=L,$=R,P=D,V=S,w=U;return o(),i("section",{class:s(t(a)())},[n("h1",{class:s(t(a)("title"))},"Кланы",2),t(d).clans.owner.length?(o(),i("div",{key:1,class:s(t(a)("userClans"))},[l[2]||(l[2]=n("h3",null,"Ваши кланы",-1)),(o(!0),i(g,null,y(t(k)(1,20,!1),e=>(o(),C($,{key:e.id,"is-clan-owner":!0,data:e},null,8,["data"]))),128))],2)):(o(),C(p,{key:0,class:s(t(a)("createClanButton")),type:t(c).CREATE_OWN_CLAN,onClick:t(f)},null,8,["class","type","onClick"])),n("div",{class:s(t(a)("topContainer"))},[r(P,{modelValue:t(m),"onUpdate:modelValue":l[0]||(l[0]=e=>B(m)?m.value=e:null),class:s(t(a)("search")),placeholder:"Название клана"},null,8,["modelValue","class"]),t(d).clans.owner.length?(o(),C(p,{key:0,class:s(t(a)("createClanButton")),type:t(c).CREATE_CLAN,onClick:t(f)},null,8,["class","type","onClick"])):F("",!0)],2),n("div",{class:s(t(a)("clansList"))},[(o(!0),i(g,null,y(t(v),e=>(o(),i("div",{key:e.id,class:s(t(a)("clan"))},[n("div",{class:s(t(a)("upperContainer"))},[r(V,{"header-size":"small",title:e.title,"participants-amount":e.participants.length},null,8,["title","participants-amount"]),n("h6",null,N(`#${e.rating}`),1)],2),n("span",{class:s(t(a)("description"))},N(e.description),3),n("div",{class:s(t(a)("buttonsContainer"))},[r(p,{type:t(c).ENTER_CLAN,onClick:t(E)},null,8,["type","onClick"]),r(p,{type:t(c).CLAN_PARTICIPANTS,onClick:M=>t(h)(e)},null,8,["type","onClick"])],2)],2))),128))],2),r(w,{page:t(u),"onUpdate:page":l[1]||(l[1]=e=>B(u)?u.value=e:null),"amount-on-page":A,"items-amount":t(_).length},null,8,["page","items-amount"])],2)}}});export{dt as default};