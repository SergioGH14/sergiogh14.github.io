import{g as _,o as c,c as d,b as o,t as r,r as f,m as p,F as m,n as u,d as b,I as g,q as h}from"./DrMk4Amr.js";const v={class:"job-effect"},k=["href"],y={class:"job-container"},x={class:"job-header"},j=["src"],B={class:"job-company-name"},q={class:"job-title"},I={class:"job-description"},S={__name:"jobComponent",props:["logo","company","title","description","link","technologies"],setup(t){return(l,s)=>(c(),d("div",v,[o("a",{class:"job-link",href:t.link,target:"_blank",rel:"noreferrer"},[o("div",y,[o("div",x,[o("img",{class:"job-logo-image",src:t.logo,alt:"logo"},null,8,j),o("div",B,r(t.company),1)]),o("div",q,r(t.title),1),o("div",I,r(t.description),1)])],8,k),s[0]||(s[0]=o("div",{class:"blob"},null,-1)),s[1]||(s[1]=o("div",{class:"fake-blob"},null,-1))]))}},$=_(S,[["__scopeId","data-v-794ae03c"]]),C={class:"all-experience-container"},E={__name:"jobList",setup(t){const l=f();p(()=>{l.value=document.querySelectorAll(".job-effect")});const s=i=>{l.value.forEach(a=>{const e=a.querySelector(".blob"),n=a.querySelector(".fake-blob").getBoundingClientRect();e.style.opacity="1",e.animate([{transform:`translate(${i.clientX-n.left-n.width/2}px,${i.clientY-n.top-n.height/2}px)`}],{duration:300,fill:"forwards"})})};return(i,a)=>(c(),d("div",C,[(c(!0),d(m,null,u(b(g).experience,e=>(c(),h($,{key:e.title,logo:e.logo,title:e.title,description:e.description,link:e.link,company:e.company,technologies:e.technologies,onMousemove:s},null,8,["logo","title","description","link","company","technologies"]))),128))]))}},L=_(E,[["__scopeId","data-v-58d2d1fc"]]);export{L as J};
