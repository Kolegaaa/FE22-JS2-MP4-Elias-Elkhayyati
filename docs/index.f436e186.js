document.addEventListener("DOMContentLoaded",(()=>{const t=document.querySelector(".display");let e="",n="",o="",r=!1;document.querySelectorAll("button").forEach((c=>{c.addEventListener("click",(()=>{const a=c.textContent;a&&(/\d/.test(a)||"."===a?r?(o+=a,t.textContent=o):(n+=a,t.textContent=n):["+","-","*","/"].includes(a)?(e=a,r=!0):"="===a&&n&&o&&e&&(t.textContent=function(t,e,n){switch(n){case"+":return t+e;case"-":return t-e;case"*":return t*e;case"/":return t/e;default:return 0}}(parseFloat(n),parseFloat(o),e).toString(),n="",o="",e="",r=!1),"C"===a&&(t.textContent="",n="",o="",e=""))}))}))}));
//# sourceMappingURL=index.f436e186.js.map
