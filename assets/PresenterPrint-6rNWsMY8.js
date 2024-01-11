import{d,u as _,a as u,c as m,b as h,r as p,o as a,e as n,f as t,t as s,g as r,F as f,h as v,n as g,i as x,j as y,k as b,l as N,m as k,_ as P}from"./index-QNutP6vt.js";import{N as w}from"./NoteDisplay-vElKawpd.js";const V={class:"m-4"},B={class:"mb-10"},D={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},T={class:"font-bold flex gap-2"},z={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},C=d({__name:"PresenterPrint",setup(E){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),u({title:`Notes - ${m.title}`});const i=h(()=>p.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(a(),n("div",{id:"page-root",style:g(r(x))},[t("div",V,[t("div",B,[t("h1",D,s(r(m).title),1),t("div",L,s(new Date().toLocaleString()),1)]),(a(!0),n(f,null,v(i.value,(e,c)=>(a(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",S,[t("div",T,[t("div",z,s(e==null?void 0:e.no)+"/"+s(r(y)),1),b(" "+s(e==null?void 0:e.title)+" ",1),H])]),N(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(a(),n("hr",j)):k("v-if",!0)]))),128))])],4))}}),A=P(C,[["__file","G:/总结/2023/slidev/slidev-zhumy-2023/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{A as default};
