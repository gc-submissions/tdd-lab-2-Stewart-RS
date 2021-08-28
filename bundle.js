(()=>{var e={72:(e,t,n)=>{const{Product:r}=n(132);e.exports={Product:r},e.exports={Cart:class{constructor(){this.items=[]}add(e){return this.items.push(e),e}getItemCount(){return this.items.length}getTotalBeforeTax(){let e=0;for(let t of this.items)e+=t.price;return e}getTotalWithTax(){let e=0;for(let t of this.items)e+=t.getPriceWithTax();return e}getTax(){return this.getTotalWithTax()-this.getTotalBeforeTax()}}}},132:e=>{e.exports={Product:class{constructor(e,t,n){this.name=e,this.price=t,this.taxable=n}getPriceWithTax(){return!0===this.taxable?1.1*this.price:this.price}}}},842:e=>{e.exports={formatCurrency:function e(t){return t<0?"-"+e(-t):"$"+t.toFixed(2)},getCoins:function(e){let t=0,n=0,r=0,i=0,o=e;for(;o>0;)o>=25?(t++,o-=25):o>=10?(n++,o-=10):o>=5?(r++,o-=5):o>=1&&(i++,o-=1);return{quarters:t,dimes:n,nickels:r,pennies:i}}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{const e=n(72),t=n(132);let{formatCurrency:r,getCoins:i}=n(842);r=r||(e=>e);const o=[new t("Candy Bar",1,!0),new t("Bag of Chips",2,!0),new t("Can of Soda",3,!0),new t("Bottle of Milk",3,!1),new t("Box of Cherries",5,!1)];!function(){const t=document.getElementById("menu"),n=document.getElementById("selectedItems"),s=document.getElementById("subtotal"),a=document.getElementById("tax"),d=document.getElementById("total"),c=document.getElementById("cashInput"),u=document.getElementById("cashForm"),l=document.getElementById("changeDue"),m=document.getElementById("cashInserted"),x=document.getElementById("paymentInsufficientMessage"),h=document.getElementById("change"),g=h.querySelectorAll(".change-count"),T=document.getElementById("resetButton");o.forEach(((e,n)=>{t.insertAdjacentHTML("beforeend",`<li>${r(e.price)}${e.taxable?"*":""} - ${e.name}\n        <button data-index="${n}">Buy</button>\n      </li>`)}));let f=new e;function p(){n.innerHTML="";for(const e of f.items)selectedItems.insertAdjacentHTML("beforeend",`<tr>\n        <td>${e.name}</td>\n        <td>${r(e.price)}</td>\n        <td>${r(e.getPriceWithTax())}</td>\n      </tr>`);s.innerText=r(f.getTotalBeforeTax()),a.innerText=r(f.getTax()),d.innerText=r(f.getTotalWithTax())}t.addEventListener("click",(e=>{const t=parseInt(e.target.getAttribute("data-index"));isNaN(t)||(f.add(o[t]),p())})),u.addEventListener("submit",(e=>{e.preventDefault();const t=Number(c.value)||0,n=t-f.getTotalWithTax();if(m.innerText=r(t),l.innerText=r(n),n>=0){const e=i(Math.round(100*n));g[0].innerText=e.quarters,g[1].innerText=e.dimes,g[2].innerText=e.nickels,g[3].innerText=e.pennies,h.hidden=!1,x.hidden=!0}else h.hidden=!0,x.hidden=!1})),T.addEventListener("click",(()=>{f=new e,p(),c.value="",m.innerText="",l.innerText="",h.hidden=!0,x.hidden=!0}))}()})()})();