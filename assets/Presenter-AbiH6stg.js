import{o as i,e as _,f as e,d as L,b as $,p as k,q as p,s as C,_ as A,v as y,w as F,x as I,c as N,a as R,y as G,z as M,A as q,B as O,C as U,D as W,E as Z,G as X,H as j,I as J,J as K,K as Q,L as Y,M as ee,g as t,N as te,l as o,t as se,n as h,i as V,O as B,S as P,m as S,P as oe,Q as H,R as T,T as ne,j as le,U as b,V as ae,W as ie,F as re,X as ce,Y as ue,Z as de,$ as D,a0 as _e,a1 as me,a2 as ve,a3 as he}from"./index-tJYw6okP.js";import{N as pe}from"./NoteDisplay-k0sPA1-E.js";import fe from"./DrawingControls-QFPGs_AO.js";const ge={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},xe=e("path",{fill:"currentColor",d:"M8 12h10v2H8z"},null,-1),we=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"},null,-1),ye=[xe,we];function Se(l,r){return i(),_("svg",ge,[...ye])}const be={name:"carbon-zoom-out",render:Se},$e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ke=e("path",{fill:"currentColor",d:"M18 12h-4V8h-2v4H8v2h4v4h2v-4h4z"},null,-1),Ce=e("path",{fill:"currentColor",d:"M21.448 20A10.856 10.856 0 0 0 24 13a11 11 0 1 0-11 11a10.856 10.856 0 0 0 7-2.552L27.586 29L29 27.586ZM13 22a9 9 0 1 1 9-9a9.01 9.01 0 0 1-9 9"},null,-1),ze=[ke,Ce];function Ne(l,r){return i(),_("svg",$e,[...ze])}const Me={name:"carbon-zoom-in",render:Ne},Ve={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Be=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),Pe=[Be];function He(l,r){return i(),_("svg",Ve,[...Pe])}const Te={name:"carbon-renew",render:He},De={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},Le=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4"},null,-1),Ae=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01z"},null,-1),Ee=[Le,Ae];function Fe(l,r){return i(),_("svg",De,[...Ee])}const Ie={name:"carbon-time",render:Fe},Re="/assets/logo-title-horizontal-XSaaVPPu.png",Ge=L({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(l){const r=l,g=$(()=>{var c,u,n;return(n=(u=(c=k.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.note}),x=$(()=>{var c,u,n;return(n=(u=(c=k.value)==null?void 0:c.meta)==null?void 0:u.slide)==null?void 0:n.noteHTML});return(c,u)=>(i(),p(pe,{class:C(r.class),note:g.value,"note-html":x.value},null,8,["class","note","note-html"]))}}),qe=A(Ge,[["__file","G:/总结/2023/slidev/slidev-zhumy-2023/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=l=>(ve("data-v-574fd206"),l=l(),he(),l),Oe={class:"bg-main h-full slidev-presenter"},Ue={class:"grid-section top flex"},We=f(()=>e("img",{src:Re,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2",style:{height:"3.5rem"},alt:"Slidev logo"},null,-1)),Ze=f(()=>e("div",{class:"flex-auto"},null,-1)),Xe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},je=f(()=>e("div",{class:"context"}," current ",-1)),Je=f(()=>e("div",{class:"context"}," next ",-1)),Ke={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Qe={class:"border-t border-main py-1 px-2 text-sm"},Ye={class:"grid-section bottom"},et={class:"progress-bar"},tt=L({__name:"Presenter",setup(l){const r=y();F(),I(r);const g=N.titleTemplate.replace("%s",N.title||"Slidev");R({title:`Presenter - ${g}`}),y(!1);const{timer:x,resetTimer:c}=G(),u=y([]),n=$(()=>M.value<q.value?{route:k.value,clicks:M.value+1}:O.value?{route:U.value,clicks:0}:null);return W(),Z(()=>{const z=r.value.querySelector("#slide-content"),s=X(j()),w=J();K(()=>{if(!w.value||Y.value||!ee.value)return;const d=z.getBoundingClientRect(),m=(s.x-d.left)/d.width*100,v=(s.y-d.top)/d.height*100;if(!(m<0||m>100||v<0||v>100))return{x:m,y:v}},d=>{Q.cursor=d})}),(z,s)=>{const w=Ie,d=Te,m=Me,v=be;return i(),_(re,null,[e("div",Oe,[e("div",{class:C(["grid-container",`layout${t(te)}`])},[e("div",Ue,[We,Ze,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:s[0]||(s[0]=(...a)=>t(c)&&t(c)(...a))},[o(w,{class:"absolute"}),o(d,{class:"absolute opacity-0"})]),e("div",Xe,se(t(x)),1)]),e("div",{ref_key:"main",ref:r,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:h(t(V))},[o(P,{key:"main",class:"h-full w-full"},{default:B(()=>[o(ce,{"render-context":"presenter"})]),_:1}),je],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:h(t(V))},[n.value?(i(),p(P,{key:"next",class:"h-full w-full"},{default:B(()=>{var a;return[o(t(de),{is:(a=n.value.route)==null?void 0:a.component,"clicks-elements":u.value,"onUpdate:clicksElements":s[1]||(s[1]=E=>u.value=E),clicks:n.value.clicks,"clicks-disabled":!1,class:C(t(ue)(n.value.route)),route:n.value.route,"render-context":"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):S("v-if",!0),Je],4),S(" Notes "),(i(),_("div",Ke,[(i(),p(qe,{key:1,class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:h({fontSize:`${t(oe)}em`})},null,8,["style"])),e("div",Qe,[e("button",{class:"slidev-icon-btn",onClick:s[2]||(s[2]=(...a)=>t(H)&&t(H)(...a))},[o(D,{text:"Increase font size"}),o(m)]),e("button",{class:"slidev-icon-btn",onClick:s[3]||(s[3]=(...a)=>t(T)&&t(T)(...a))},[o(D,{text:"Decrease font size"}),o(v)]),S("v-if",!0)])])),e("div",Ye,[o(_e,{persist:!0})]),(i(),p(fe,{key:2}))],2),e("div",et,[e("div",{class:"progress h-2px bg-primary transition-all",style:h({width:`${(t(ne)-1)/(t(le)-1)*100}%`})},null,4)])]),o(me),o(ie,{modelValue:t(b),"onUpdate:modelValue":s[5]||(s[5]=a=>ae(b)?b.value=a:null)},null,8,["modelValue"])],64)}}}),lt=A(tt,[["__scopeId","data-v-574fd206"],["__file","G:/总结/2023/slidev/slidev-zhumy-2023/node_modules/@slidev/client/internals/Presenter.vue"]]);export{lt as default};
