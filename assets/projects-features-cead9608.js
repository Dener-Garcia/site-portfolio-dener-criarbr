import{A as s,C as n,s as o}from"./scale-text-9bbb82df.js";import{R as i}from"./animation-reveral-6b326b36.js";s();n();o();const l=document.querySelectorAll("img");i(l,-300);const t=document.querySelector(".btn-return"),c=document.querySelector("h1"),e=document.querySelector("#btn-to-top");function r(){c.getBoundingClientRect().top<-600?(t.classList.add("ps-fixed"),e.style.display="flex",e.classList.add("ps-fixed"),e.classList.add("btnReturnPosition")):(t.classList.remove("ps-fixed"),e.style.display="none",e.classList.remove("btnReturnPosition"))}window.addEventListener("scroll",r);
