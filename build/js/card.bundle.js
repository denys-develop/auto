!function(){"use strict";function e(e){const t=document.getElementById("large-image"),c=e.cloneNode(!0);t.innerHTML=c.innerHTML;const o=t.querySelector("img");o&&(o.style.width="774px"),document.querySelectorAll(".card__img-2").forEach((e=>{const t=e.querySelector("picture");if(t){const e=t.querySelector("img");e&&e.classList.remove("active")}})),e.classList.add("active")}document.querySelectorAll(".card__img-2").forEach((t=>{t.addEventListener("mouseover",(function(){e(t)}))}));var t=e;document.querySelectorAll(".auto-card").forEach((function(e){e.addEventListener("click",(t=>{const c=e.querySelector(".btn-favorite");if(t.target.classList.contains("icon-favorite-btn")){const t=e.querySelector(".fav-btn-modal");c.classList.toggle("btn-favorite--selected"),e.querySelector(".btn-favorite--selected")&&(t.style.display="block",setTimeout((function(){t.style.display="none"}),1200))}}))})),function(){const e=document.querySelector(".mobile-nav-btn2"),t=document.querySelector(".mobile-nav2"),c=document.querySelector(".nav-icon2");e.onclick=function(){t.classList.toggle("mobile-nav--open"),c.classList.toggle("nav-icon--active")}}(),t()}();