(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const l=document.querySelector(".settings-ui button"),s=document.querySelector(".ui-options"),h=()=>{l.addEventListener("click",r=>{s.classList.toggle("d-grid"),document.onclick=function(t){console.log(s.contains(t.target),l.contains(t.target)),!s.contains(t.target)&&!l.contains(t.target)&&s.classList.remove("d-grid")}})},a=()=>{const r=document.querySelectorAll("button"),t=document.querySelectorAll("a");localStorage.getItem("ui-theme")=="high-contrast"?(c(t,e),c(r,e)):(c(t,o),c(r,o));function c(i,u){i.forEach(d=>{u(d.classList)})}function e(i){i.add("highLight")}function o(i){i.remove("highLight")}},m=()=>{const r=document.querySelectorAll(".ui-options input[name='ui-theme']");localStorage.getItem("ui-theme")&&(document.documentElement.setAttribute("ui-theme",localStorage.getItem("ui-theme")),r[localStorage.getItem("nr-input")].checked=!0);function t(n,c){document.documentElement.setAttribute("ui-theme",n),localStorage.setItem("ui-theme",n),localStorage.setItem("nr-input",c)}for(let n of r)n.addEventListener("click",function(){switch(n.value){case"light-theme":t("light",0),a();break;case"dark-theme":t("dark",1),a();break;case"high-contrast":t("high-contrast",2),a();break}})},g=()=>{document.querySelector("#scale-text").addEventListener("change",()=>{document.querySelectorAll("body > h1, h2, h3, h4, h5, h6, p, label, input, summary, span, button, a, blockquote, i, textarea").forEach(n=>{n.classList.toggle("scaleFont")})})};export{h as A,m as C,g as s};