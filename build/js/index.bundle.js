!function(){"use strict";(function(){const e=document.querySelectorAll(".brands-card:nth-of-type(1n+18)"),t=document.querySelector(".brands__link");t.addEventListener("click",(function(){e.forEach((function(e){e.style.display="block"})),t.style.display="none"}))})(),function(){const e=document.querySelector(".header"),t=document.querySelector(".header2div");let l=window.scrollY;function a(l){l>0?(e.style.display="none",t.style.display="block"):(e.style.display="block",t.style.display="none")}a(l),window.addEventListener("scroll",(()=>{let e=window.scrollY;a(e),l=e}))}(),document.querySelectorAll(".volume-range-control").forEach((e=>{const t=e.querySelector(".min-volume"),l=e.querySelector(".max-volume"),a=e.querySelector(".min-value"),n=e.querySelector(".max-value"),o=e.querySelector(".slider-track"),c=parseFloat(e.dataset.min),s=parseFloat(e.dataset.max);function i(e,o){const c=parseFloat(t.value),s=parseFloat(l.value);"min"===o&&c>=s?t.value=s-.1:"max"===o&&s<=c&&(l.value=c+.1),a.value=t.value,n.value=l.value,u()}function r(e,o){let i=parseFloat(a.value),r=parseFloat(n.value);"min"===o?(i<c&&(i=c),i>=r&&(i=r-.1),t.value=i,a.value=i):"max"===o&&(r>s&&(r=s),r<=i&&(r=i+.1),l.value=r,n.value=r),u()}function u(){const e=parseFloat(t.value),a=parseFloat(l.value),n=(e-c)/(s-c)*100,i=(a-c)/(s-c)*100;o.style.setProperty("--min-value",n/100),o.style.setProperty("--max-value",i/100),o.classList.add("active")}t.min=c,t.max=s,l.min=c,l.max=s,a.min=c,a.max=s,n.min=c,n.max=s,t.addEventListener("input",(()=>i(t.value,"min"))),l.addEventListener("input",(()=>i(l.value,"max"))),a.addEventListener("input",(()=>r(a.value,"min"))),n.addEventListener("input",(()=>r(n.value,"max"))),u()})),function e(){document.querySelectorAll(".filter").forEach((function(e){const t=e.querySelector(".filter__link"),l=e.querySelector(".filter__link-hide"),a=e.querySelector(".filter__items-hidden");t&&l&&a&&(t.addEventListener("click",(e=>{e.preventDefault(),t.style.display="none",l.style.display="block",a.style.display="block"})),l.addEventListener("click",(e=>{e.preventDefault(),l.style.display="none",t.style.display="block",a.style.display="none"})))})),document.addEventListener("DOMContentLoaded",(()=>{e()}))}(),function(){const e=document.querySelector(".catalog__items-icon-tile"),t=document.querySelector(".catalog__items-icon-row"),l=document.querySelector(".catalog__items-icon-tile-svg"),a=document.querySelector(".catalog__items-icon-row-svg"),n=document.querySelector(".catalog__item"),o=document.querySelector(".catalog__item-2");e.addEventListener("click",(()=>{n.classList.remove("hide"),o.classList.add("hide"),a.classList.remove("scale"),l.classList.add("scale")})),t.addEventListener("click",(()=>{n.classList.add("hide"),o.classList.remove("hide"),l.classList.remove("scale"),a.classList.add("scale")}))}()}();