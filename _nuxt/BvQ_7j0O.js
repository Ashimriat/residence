import{N as r,a9 as e,c as a,o as n,r as s,J as u}from"./Lrk-fiIZ.js";import{s as i}from"./CMDZYUtB.js";var p=`
.p-radiobutton-group {
    display: inline-flex;
}
`,d={root:"p-radiobutton-group p-component"},c=r.extend({name:"radiobuttongroup",style:p,classes:d}),m={name:"BaseRadioButtonGroup",extends:i,style:c,provide:function(){return{$pcRadioButtonGroup:this,$parentInstance:this}}},l={name:"RadioButtonGroup",extends:m,inheritAttrs:!1,data:function(){return{groupName:this.name}},watch:{name:function(o){this.groupName=o||e("radiobutton-group-")}},mounted:function(){this.groupName=this.groupName||e("radiobutton-group-")}};function f(t,o,g,h,$,v){return n(),a("div",u({class:t.cx("root")},t.ptmi("root")),[s(t.$slots,"default")],16)}l.render=f;export{l as default};
