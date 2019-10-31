/*! Pickr 1.4.2 MIT | https://github.com/Simonwep/pickr */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.Pickr=e():t.Pickr=e()}(window,function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=0)}([function(t,e,o){"use strict";o.r(e);var n={};function i(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),o.push.apply(o,n)}return o}function r(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?i(o,!0).forEach(function(e){s(t,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):i(o).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))})}return t}function s(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o.r(n),o.d(n,"on",function(){return c}),o.d(n,"off",function(){return a}),o.d(n,"createElementFromString",function(){return p}),o.d(n,"removeAttribute",function(){return u}),o.d(n,"createFromTemplate",function(){return h}),o.d(n,"eventPath",function(){return d}),o.d(n,"resolveElement",function(){return f}),o.d(n,"adjustableInputNumbers",function(){return m});const c=l.bind(null,"addEventListener"),a=l.bind(null,"removeEventListener");function l(t,e,o,n,i={}){e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);for(const s of e)for(const e of o)s[t](e,n,r({capture:!1},i));return Array.prototype.slice.call(arguments,1)}function p(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function u(t,e){const o=t.getAttribute(e);return t.removeAttribute(e),o}function h(t){return function t(e,o={}){const n=u(e,":obj"),i=u(e,":ref"),r=n?o[n]={}:o;i&&(o[i]=e);for(const o of Array.from(e.children)){const e=u(o,":arr"),n=t(o,e?{}:r);e&&(r[e]||(r[e]=[])).push(Object.keys(n).length?n:o)}return o}(p(t))}function d(t){let e=t.path||t.composedPath&&t.composedPath();if(e)return e;let o=t.target.parentElement;for(e=[t.target,o];o=o.parentElement;)e.push(o);return e.push(document,window),e}function f(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((t,e,o,n)=>(t=t.querySelector(e),o<n.length-1?t.shadowRoot:t),document):null}function m(t,e=(t=>t)){function o(o){const n=[.001,.01,.1][Number(o.shiftKey||2*o.ctrlKey)]*(o.deltaY<0?1:-1);let i=0,r=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(t,o)=>o<=r&&o+t.length>=r?(r=o,e(Number(t),n,i)):(i++,t)),t.focus(),t.setSelectionRange(r,r),o.preventDefault(),t.dispatchEvent(new Event("input"))}c(t,"focus",()=>c(window,"wheel",o,{passive:!1})),c(t,"blur",()=>a(window,"wheel",o))}const{min:v,max:b,floor:g,round:y}=Math;function _(t,e,o){e/=100,o/=100;const n=g(t=t/360*6),i=t-n,r=o*(1-e),s=o*(1-i*e),c=o*(1-(1-i)*e),a=n%6;return[255*[o,s,r,r,c,o][a],255*[c,o,o,s,r,r][a],255*[r,r,c,o,o,s][a]]}function w(t,e,o){const n=(2-(e/=100))*(o/=100)/2;return 0!==n&&(e=1===n?0:n<.5?e*o/(2*n):e*o/(2-2*n)),[t,100*e,100*n]}function C(t,e,o){let n,i,r;const s=v(t/=255,e/=255,o/=255),c=b(t,e,o),a=c-s;if(0===a)n=i=0;else{i=a/c;const r=((c-t)/6+a/2)/a,s=((c-e)/6+a/2)/a,l=((c-o)/6+a/2)/a;t===c?n=l-s:e===c?n=1/3+r-l:o===c&&(n=2/3+s-r),n<0?n+=1:n>1&&(n-=1)}return[360*n,100*i,100*(r=c)]}function A(t,e,o,n){return e/=100,o/=100,[...C(255*(1-v(1,(t/=100)*(1-(n/=100))+n)),255*(1-v(1,e*(1-n)+n)),255*(1-v(1,o*(1-n)+n)))]}function k(t,e,o){return e/=100,[t,2*(e*=(o/=100)<.5?o:1-o)/(o+e)*100,100*(o+e)]}function S(t){return C(...t.match(/.{2}/g).map(t=>parseInt(t,16)))}function O(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000000";const e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000000"===e.fillStyle?null:e.fillStyle}(t):t;const e={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},o=t=>t.map(t=>/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0);let n;t:for(const i in e){if(!(n=e[i].exec(t)))continue;const r=t=>!!n[2]==("number"==typeof t);switch(i){case"cmyk":{const[,t,e,r,s]=o(n);if(t>100||e>100||r>100||s>100)break t;return{values:A(t,e,r,s),type:i}}case"rgba":{const[,,,t,e,s,c]=o(n);if(t>255||e>255||s>255||c<0||c>1||!r(c))break t;return{values:[...C(t,e,s),c],a:c,type:i}}case"hexa":{let[,t]=n;4!==t.length&&3!==t.length||(t=t.split("").map(t=>t+t).join(""));const e=t.substring(0,6);let o=t.substring(6);return o=o?parseInt(o,16)/255:void 0,{values:[...S(e),o],a:o,type:i}}case"hsla":{const[,,,t,e,s,c]=o(n);if(t>360||e>100||s>100||c<0||c>1||!r(c))break t;return{values:[...k(t,e,s),c],a:c,type:i}}case"hsva":{const[,,,t,e,s,c]=o(n);if(t>360||e>100||s>100||c<0||c>1||!r(c))break t;return{values:[t,e,s,c],a:c,type:i}}}}return{values:null,type:null}}function j(t=0,e=0,o=0,n=1){const i=(t,e)=>(o=-1)=>e(~o?t.map(t=>Number(t.toFixed(o))):t),r={h:t,s:e,v:o,a:n,toHSVA(){const t=[r.h,r.s,r.v,r.a];return t.toString=i(t,t=>"hsva(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toHSLA(){const t=[...w(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"hsla(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toRGBA(){const t=[..._(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(r.a,")")),t},toCMYK(){const t=function(t,e,o){const n=_(t,e,o),i=n[0]/255,r=n[1]/255,s=n[2]/255;let c,a,l,p;return[100*(a=1===(c=v(1-i,1-r,1-s))?0:(1-i-c)/(1-c)),100*(l=1===c?0:(1-r-c)/(1-c)),100*(p=1===c?0:(1-s-c)/(1-c)),100*c]}(r.h,r.s,r.v);return t.toString=i(t,t=>"cmyk(".concat(t[0],"%, ").concat(t[1],"%, ").concat(t[2],"%, ").concat(t[3],"%)")),t},toHEXA(){const t=function(t,e,o){return _(t,e,o).map(t=>y(t).toString(16).padStart(2,"0"))}(r.h,r.s,r.v),e=r.a>=1?"":Number((255*r.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=()=>"#".concat(t.join("").toUpperCase()),t},clone:()=>j(r.h,r.s,r.v,r.a)};return r}const x=t=>Math.max(Math.min(t,1),0);function E(t){const e={options:Object.assign({lock:null,onchange:()=>0,onstop:()=>0},t),_keyboard(t){const{type:n,key:i}=t;if(document.activeElement===o.wrapper){const{lock:o}=e.options,r="ArrowUp"===i,s="ArrowRight"===i,c="ArrowDown"===i,a="ArrowLeft"===i;if("keydown"===n&&(r||s||c||a)){let t=0,n=0;"v"===o?t=r||s?1:-1:"h"===o?t=r||s?-1:1:(n=r?-1:c?1:0,t=a?-1:s?1:0),e.update(x(e.cache.x+.01*t),x(e.cache.y+.01*n))}else i.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart(t){c(document,["mouseup","touchend","touchcancel"],e._tapstop),c(document,["mousemove","touchmove"],e._tapmove),t.preventDefault(),e._tapmove(t)},_tapmove(t){const{options:{lock:n},cache:i}=e,{element:r,wrapper:s}=o,c=s.getBoundingClientRect();let a=0,l=0;if(t){const e=t&&t.touches&&t.touches[0];a=t?(e||t).clientX:0,l=t?(e||t).clientY:0,a<c.left?a=c.left:a>c.left+c.width&&(a=c.left+c.width),l<c.top?l=c.top:l>c.top+c.height&&(l=c.top+c.height),a-=c.left,l-=c.top}else i&&(a=i.x*c.width,l=i.y*c.height);"h"!==n&&(r.style.left="calc(".concat(a/c.width*100,"% - ").concat(r.offsetWidth/2,"px)")),"v"!==n&&(r.style.top="calc(".concat(l/c.height*100,"% - ").concat(r.offsetHeight/2,"px)")),e.cache={x:a/c.width,y:l/c.height};const p=x(a/s.offsetWidth),u=x(l/s.offsetHeight);switch(n){case"v":return o.onchange(p);case"h":return o.onchange(u);default:return o.onchange(p,u)}},_tapstop(){e.options.onstop(),a(document,["mouseup","touchend","touchcancel"],e._tapstop),a(document,["mousemove","touchmove"],e._tapmove)},trigger(){e._tapmove()},update(t=0,o=0){const{left:n,top:i,width:r,height:s}=e.options.wrapper.getBoundingClientRect();"h"===e.options.lock&&(o=t),e._tapmove({clientX:n+r*t,clientY:i+s*o})},destroy(){const{options:t,_tapstart:o}=e;a([t.wrapper,t.element],"mousedown",o),a([t.wrapper,t.element],"touchstart",o,{passive:!1})}},{options:o,_tapstart:n,_keyboard:i}=e;return c([o.wrapper,o.element],"mousedown",n),c([o.wrapper,o.element],"touchstart",n,{passive:!1}),c(document,["keydown","keyup"],i),e}function L(t={}){t=Object.assign({onchange:()=>0,className:"",elements:[]},t);const e=c(t.elements,"click",e=>{t.elements.forEach(o=>o.classList[e.target===o?"add":"remove"](t.className)),t.onchange(e)});return{destroy:()=>a(...e)}}function P({el:t,reference:e,padding:o=8}){const n={start:"sme",middle:"mse",end:"ems"},i={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},r=((t={})=>(e,o=t[e])=>{if(o)return o;const[n,i="middle"]=e.split("-"),r="top"===n||"bottom"===n;return t[e]={position:n,variant:i,isVertical:r}})();return{update(s){const{position:c,variant:a,isVertical:l}=r(s),p=e.getBoundingClientRect(),u=t.getBoundingClientRect(),h=t=>t?{t:p.top-u.height-o,b:p.bottom+o}:{r:p.right+o,l:p.left-u.width-o},d=t=>t?{s:p.left+p.width-u.width,m:-u.width/2+(p.left+p.width/2),e:p.left}:{s:p.bottom-u.height,m:p.bottom-p.height/2-u.height/2,e:p.bottom-p.height},f={};function m(e,o,n){const i="top"===n,r=i?u.height:u.width,s=window[i?"innerHeight":"innerWidth"];for(const i of e){const e=o[i],c=f[n]="".concat(e,"px");if(e>0&&e+r<s)return t.style[n]=c,!0}return!1}for(const t of[l,!l]){const e=m(i[c],h(t),t?"top":"left"),o=m(n[a],d(t),t?"left":"top");if(e&&o)return}t.style.left=f.left,t.style.top=f.top}}}var B=({components:t,strings:e,useAsButton:o,inline:n,appClass:i,theme:r,lockOpacity:s})=>{const c=t=>t?"":'style="display:none" hidden',a=h('\n      <div :ref="root" class="pickr">\n\n        '.concat(o?"":'<button type="button" :ref="button" class="pcr-button"></button>','\n\n        <div :ref="app" class="pcr-app ').concat(i||"",'" data-theme="').concat(r,'" ').concat(n?'style="position: unset"':"",' aria-label="color picker dialog" role="window">\n          <div class="pcr-selection" ').concat(c(t.palette),'>\n            <div :obj="preview" class="pcr-color-preview" ').concat(c(t.preview),'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="use previous color"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="color selection area" role="widget"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ').concat(c(t.hue),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="hue selection slider" role="widget"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ').concat(c(t.opacity),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="opacity selection slider" role="widget"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ').concat(t.palette?"":" pcr-last",'" :ref="swatches"></div> \n\n          <div :obj="interaction" class="pcr-interaction" ').concat(c(Object.keys(t.interaction).length),'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ').concat(c(t.interaction.input),'>\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="').concat(s?"HEX":"HEXA",'" type="button" ').concat(c(t.interaction.hex),'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="').concat(s?"RGB":"RGBA",'" type="button" ').concat(c(t.interaction.rgba),'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="').concat(s?"HSL":"HSLA",'" type="button" ').concat(c(t.interaction.hsla),'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="').concat(s?"HSV":"HSVA",'" type="button" ').concat(c(t.interaction.hsva),'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ').concat(c(t.interaction.cmyk),'>\n\n            <input :ref="save" class="pcr-save" value="').concat(e.save||"Save",'" type="button" ').concat(c(t.interaction.save),' aria-label="save and exit">\n            <input :ref="cancel" class="pcr-cancel" value="').concat(e.cancel||"Cancel",'" type="button" ').concat(c(t.interaction.cancel),' aria-label="cancel and exit">\n            <input :ref="clear" class="pcr-clear" value="').concat(e.clear||"Clear",'" type="button" ').concat(c(t.interaction.clear),' aria-label="clear and exit">\n          </div>\n        </div>\n      </div>\n    ')),l=a.interaction;return l.options.find(t=>!t.hidden&&!t.classList.add("active")),l.type=()=>l.options.find(t=>t.classList.contains("active")),a};function R(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class H{constructor(t){R(this,"_initializingActive",!0),R(this,"_recalc",!0),R(this,"_color",j()),R(this,"_lastColor",j()),R(this,"_swatchColors",[]),R(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=t=Object.assign({appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},strings:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"},t);const{swatches:e,components:o,theme:n,sliders:i,lockOpacity:r,padding:s}=t;["nano","monolith"].includes(n)&&!i&&(t.sliders="h"),o.interaction||(o.interaction={});const{preview:c,opacity:a,hue:l,palette:p}=o;o.opacity=!r&&a,o.palette=p||c||a||l,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach(t=>this.addSwatch(t));const{button:u,app:h}=this._root;this._nanopop=P({reference:u,padding:s,el:h}),u.setAttribute("role","button"),u.setAttribute("aria-label","toggle color picker dialog");const d=this;requestAnimationFrame(function e(){if(!h.offsetWidth&&h.parentElement!==t.container)return requestAnimationFrame(e);d.setColor(t.default),d._rePositioningPicker(),t.defaultRepresentation&&(d._representation=t.defaultRepresentation,d.setColorRepresentation(d._representation)),t.showAlways&&d.show(),d._initializingActive=!1,d._emit("init")})}_preBuild(){const t=this.options;for(const e of["el","container"])t[e]=f(t[e]);this._root=B(t),t.useAsButton&&(this._root.button=t.el),t.container.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){const o=t.el.parentElement;t.el.nextSibling?o.insertBefore(e.app,t.el.nextSibling):o.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,o=(t.options.sliders||"v").repeat(2),[n,i]=o.match(/^[vh]+$/g)?o:[],r=()=>this._color||(this._color=this._lastColor.clone()),s={palette:E({element:t._root.palette.picker,wrapper:t._root.palette.palette,onstop:()=>t._emit("changestop",t),onchange(o,n){if(!e.palette)return;const i=r(),{_root:s,options:c}=t;t._recalc&&(i.s=100*o,i.v=100-100*n,i.v<0&&(i.v=0),t._updateOutput());const a=i.toRGBA().toString(0);this.element.style.background=a,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, ".concat(i.a,"), transparent),\n                        linear-gradient(to left, hsla(").concat(i.h,", 100%, 50%, ").concat(i.a,"), rgba(255, 255, 255, ").concat(i.a,"))\n                    "),c.comparison?c.useAsButton||t._lastColor||(s.preview.lastColor.style.color=a):s.button.style.color=a;const l=i.toHEXA().toString();for(const e of t._swatchColors){const{el:t,color:o}=e;t.classList[l===o.toHEXA().toString()?"add":"remove"]("pcr-active")}s.preview.currentColor.style.color=a,t.options.comparison||s.button.classList.remove("clear")}}),hue:E({lock:"v"===i?"h":"v",element:t._root.hue.picker,wrapper:t._root.hue.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.hue||!e.palette)return;const n=r();t._recalc&&(n.h=360*o),this.element.style.backgroundColor="hsl(".concat(n.h,", 100%, 50%)"),s.palette.trigger()}}),opacity:E({lock:"v"===n?"h":"v",element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.opacity||!e.palette)return;const n=r();t._recalc&&(n.a=Math.round(100*o)/100),this.element.style.background="rgba(0, 0, 0, ".concat(n.a,")"),s.palette.trigger()}}),selectable:L({elements:t._root.interaction.options,className:"active",onchange(e){t._representation=e.target.getAttribute("data-type").toUpperCase(),t._recalc&&t._updateOutput()}})};this._components=s}_bindEvents(){const{_root:t,options:e}=this,o=[c(t.interaction.clear,"click",()=>this._clearColor()),c([t.interaction.cancel,t.preview.lastColor],"click",()=>{this._emit("cancel",this),this.setHSVA(...(this._lastColor||this._color).toHSVA(),!0)}),c(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),c(t.interaction.result,["keyup","input"],t=>{this.setColor(t.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),t.stopImmediatePropagation()}),c(t.interaction.result,["focus","blur"],t=>{this._recalc="blur"===t.type,this._recalc&&this._updateOutput()}),c([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0)];if(!e.showAlways){const n=e.closeWithKey;o.push(c(t.button,"click",()=>this.isOpen()?this.hide():this.show()),c(document,"keyup",t=>this.isOpen()&&(t.key===n||t.code===n)&&this.hide()),c(document,["touchstart","mousedown"],e=>{this.isOpen()&&!d(e).some(e=>e===t.app||e===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers){const e={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};m(t.interaction.result,(t,o,n)=>{const i=e[this.getColorRepresentation().toLowerCase()];if(i){const e=i[n],r=t+(e>=100?1e3*o:o);return r<=0?0:Number((r<e?r:e).toPrecision(3))}return t})}if(e.autoReposition&&!e.inline){let t=null;const n=this;o.push(c(window,["scroll","resize"],()=>{n.isOpen()&&(e.closeOnScroll&&n.hide(),null===t?(t=setTimeout(()=>t=null,100),requestAnimationFrame(function e(){n._rePositioningPicker(),null!==t&&requestAnimationFrame(e)})):(clearTimeout(t),t=setTimeout(()=>t=null,100)))},{capture:!0}))}this._eventBindings=o}_rePositioningPicker(){const{options:t}=this;if(!t.inline){const{app:e}=this._root;matchMedia("(max-width: 576px)").matches?Object.assign(e.style,{margin:"auto",height:"".concat(e.getBoundingClientRect().height,"px"),top:0,bottom:0,left:0,right:0}):(Object.assign(e.style,{margin:null,right:null,top:null,bottom:null,left:null,height:null}),this._nanopop.update(t.position))}}_updateOutput(){const{_root:t,_color:e,options:o}=this;if(t.interaction.type()){const n="to".concat(t.interaction.type().getAttribute("data-type"));t.interaction.result.value="function"==typeof e[n]?e[n]().toString(o.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)}_clearColor(t=!1){const{_root:e,options:o}=this;o.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),o.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))}_parseLocalColor(t){const{values:e,type:o,a:n}=O(t),{lockOpacity:i}=this.options,r=void 0!==n&&1!==n;return e&&3===e.length&&(e[3]=void 0),{values:!e||i&&r?null:e,type:o}}_emit(t,...e){this._eventListener[t].forEach(t=>t(...e,this))}on(t,e){return"function"==typeof e&&"string"==typeof t&&t in this._eventListener&&this._eventListener[t].push(e),this}off(t,e){const o=this._eventListener[t];if(o){const t=o.indexOf(e);~t&&o.splice(t,1)}return this}addSwatch(t){const{values:e}=this._parseLocalColor(t);if(e){const{_swatchColors:t,_root:o}=this,n=j(...e),i=p('<button type="button" style="color: '.concat(n.toRGBA().toString(0),'" aria-label="color swatch"/>'));return o.swatches.appendChild(i),t.push({el:i,color:n}),this._eventBindings.push(c(i,"click",()=>{this.setHSVA(...n.toHSVA(),!0),this._emit("swatchselect",n),this._emit("change",n)})),!0}return!1}removeSwatch(t){const e=this._swatchColors[t];if(e){const{el:o}=e;return this._root.swatches.removeChild(o),this._swatchColors.splice(t,1),!0}return!1}applyColor(t=!1){const{preview:e,button:o}=this._root,n=this._color.toRGBA().toString();e.lastColor.style.color=n,this.options.useAsButton||(o.style.color=n),o.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color)}destroy(){this._eventBindings.forEach(t=>a(...t)),Object.keys(this._components).forEach(t=>this._components[t].destroy())}destroyAndRemove(){this.destroy();const{root:t,app:e}=this._root;t.parentElement&&t.parentElement.removeChild(t),e.parentElement.removeChild(e),Object.keys(this).forEach(t=>this[t]=null)}hide(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this}show(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,o=0,n=1,i=!1){const r=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||o<0||o>100||n<0||n>1)return!1;this._color=j(t,e,o,n);const{hue:s,opacity:c,palette:a}=this._components;return s.update(t/360),c.update(n),a.update(e/100,1-o/100),i||this.applyColor(),r&&this._updateOutput(),this._recalc=r,!0}setColor(t,e=!1){if(null===t)return this._clearColor(e),!0;const{values:o,type:n}=this._parseLocalColor(t);if(o){const t=n.toUpperCase(),{options:i}=this._root.interaction,r=i.find(e=>e.getAttribute("data-type")===t);if(r&&!r.hidden)for(const t of i)t.classList[t===r?"add":"remove"]("active");return this.setColorRepresentation(t),this.setHSVA(...o,e)}return!1}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getSelectedColor(){return this._lastColor}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}H.utils=n,H.libs={HSVaColor:j,Moveable:E,Nanopop:P,Selectable:L},H.create=t=>new H(t),H.version="1.4.2";e.default=H}]).default});
//# sourceMappingURL=pickr.min.js.map
(function(bannerEditor, undefined) {

    bannerEditor.Constants = {};
    bannerEditor.Controllers = {};
    bannerEditor.Directives = {};
    bannerEditor.Models = {};
    bannerEditor.Services = {};

}(window.bannerEditor = window.bannerEditor || {}));

(function(models, undefined) {

	/**
	* @class TextOverImage
	* @this TextOverImage
	* @param {JSON} data
	* @param {bannerEditor.Models.MediaItem[]} data.media
    * @param {string} data.headline - A text headline that will overlap the 
    * image.
    * @param {string} data.height - "short", "mid", or "tall"; class names for 
    * the height of the banner div.
    * @param {string} data.subheadline - A text subheadline that will overlap 
    * the image.
	* @param {string} data.position - tl, tc, tr, ml, mc, mr, bl, bm, br.
    * @description Class defining a Text Over Image Editor, which displays a 
    * selectable image, headline, sub-headline, and text position.
	*/
	models.BannerEditor = function(data) {
		var self = this;
        self.headline = "";
        self.headlineColor = "";
		self.height = "mid";
        self.link = new bannerEditor.Models.Link();
        self.linkColor = "";
        self.media = [
            new bannerEditor.Models.MediaItem({key: "desktop"}),
            new bannerEditor.Models.MediaItem({key: "tablet"}),
            new bannerEditor.Models.MediaItem({key: "mobile"})
        ];
        self.overlayColor = "";
        self.position = "mc";
        self.subheadline = "";
        self.subheadlineColor = "";
        self.video = new bannerEditor.Models.Video();
		if (data !== undefined) {
			if (data.headline !== undefined) {
				self.headline = data.headline;
            }
            if (data.headlineColor !== undefined) {
                self.headlineColor = data.headlineColor;
            }
			if (data.height !== undefined) {
				self.height = data.height;
			}
			if (data.link !== undefined) {
				self.link = new bannerEditor.Models.Link(data.link);
            }
            if (data.linkColor !== undefined) {
                self.linkColor = data.linkColor;
            }
			if (data.media !== undefined) {
                if (Array.isArray(data.media)) {
                    self.media = [
                        new bannerEditor.Models.MediaItem(data.media[0]),
                        new bannerEditor.Models.MediaItem(data.media[1]),
                        new bannerEditor.Models.MediaItem(data.media[2])
                    ];
                } else {
                    self.media = [
                        new bannerEditor.Models.MediaItem(data.media),
                        new bannerEditor.Models.MediaItem({key: "tablet"}),
                        new bannerEditor.Models.MediaItem({key: "mobile"})
                    ];
                }
                self.media[0].key = !!self.media[0].key ? self.media[0].key : "desktop";
                self.media[1].key = !!self.media[1].key ? self.media[1].key : "tablet";
                self.media[2].key = !!self.media[2].key ? self.media[2].key : "mobile";
            }
            if (data.overlayColor !== undefined) {
                self.overlayColor = data.overlayColor;
            }
			if (data.position !== undefined) {
				self.position = data.position;
            }
            if (data.subheadline !== undefined) {
				self.subheadline = data.subheadline;
            }
            if (data.subheadlineColor !== undefined) {
                self.subheadlineColor = data.subheadlineColor;
            }
            if (data.video !== undefined) {
                self.video = new bannerEditor.Models.Video(data.video);
            }
		}
    };
    
	/**
	 * @class Link
	 * @this Link
	 * @param {JSON} data
	 * @param {integer} data.id
	 * @param {string} data.url
	 */
	models.Link = function(data) {
		var self = this;
		self.id = 0;
		self.name = "";
		self.target = "_self";
		self.url = "";
		if (data !== undefined) {
			if (data.id !== undefined) {
				self.id = data.id;
			}
			if (data.name !== undefined) {
				self.name = data.name;
			}
			if (data.target !== undefined) {
				self.target = data.target;
			}
			if (data.url !== undefined) {
				self.url = data.url;
			}
		}
    };

	/**
	* @class MediaItem
	* @this Media
	* @param {JSON} data
	* @param {integer} data.id
	* @param {string} data.url
	* @param {integer} data.width
	* @param {integer} data.height
	* @param {string} data.altText
	* @description Class definining a media object for the text over image.
	*/
	models.MediaItem = function(data) {
		var self = this;
		self.altText = "";
        self.height = 0;
		self.id = 0;
        self.key = "";
		self.url = "";
		self.width = 0;
		if (data !== undefined) {
			if (data.altText !== undefined) {
				self.altText = data.altText;
			}
			if (data.height !== undefined) {
				self.height = data.height;
            }
			if (data.id !== undefined) {
				self.id = data.id;
            }
            if (data.key !== undefined) {
                self.key = data.key;
            }
			if (data.url !== undefined) {
				self.url = data.url;
			}
			if (data.width !== undefined) {
				self.width = data.width;
			}
		}
	};
    
    /**
     * @class Video
     * @this Video
     */
    models.Video = function(data) {
        var self = this;
        self.id = 0;
        self.name = "";
        self.url = "";
        if (data !== undefined) {
            if (data.id !== undefined) {
                self.id = data.id;
            }
            if (data.name !== undefined) {
                self.name = data.name;
            }
            if (data.url !== undefined) {
                self.url = data.url;
            }
        }
    };

}(window.bannerEditor.Models = window.bannerEditor.Models || {}));

angular.module("umbraco").directive("contenteditable", function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ctrl) {
      // view -> model
      element.bind('blur', function() {
        scope.$apply(function() {
          ctrl.$setViewValue(element.html());
        });
      }); 

      // model -> view
      ctrl.$render = function() {
        element.html(ctrl.$viewValue);
      };

    }
  };
});

angular.module('umbraco').controller('confirmation.dialog.controller',
    function($scope) {
		$scope.model = {
			message: "Are you sure?" 
		};
		if ($scope.dialogData && $scope.dialogData.message) {
    		$scope.model.message = $scope.dialogData.message;
    	}
    });

angular.module("umbraco").controller("orc.banner.editor.controller", function($scope, dialogService, notificationsService) {

	// Initialization Methods ////////////////////////////////////////////////////

	/**
	* @method init
    * @description Triggered on the controller loaded, kicks off any 
    * initialization functions.
	*/
	$scope.init = function() {
        $scope.setVariables();
	};

    /**
    * @method setVariables
    * @description Sets up the initial variables for the view.
    */
    $scope.setVariables = function() {
        $scope.model.value = $scope.getPropertyValue();
        $scope.maxWidth = $scope.getMaxWidth();
		$scope.propertyEditorMode = "edit";
        $scope.shouldShowBannerWithoutImage = false;
        $scope.pointlessPing = 0;
    };

	// Event Handler Methods /////////////////////////////////////////////////////

	/**
	* @method changeHeight
    * @description Changes $scope.model.value.height in a rotation to the next 
    * of the three valid values for classNames: "short", "mid", "tall".
	*/
	$scope.changeHeight = function() {
		var height = $scope.model.value.height;
		switch (height) {
			case "short":
				height = "mid";
				break;
			case "mid":
				height = "tall";
				break;
			case "tall":
			default:
				height = "short";
				break;
		}
		$scope.model.value.height = height;
	};

	/**
	* @method changePos
	* @param {string} position - tl, tc, tr, ml, mc, mr, bl, bm, br
	* @description Changes the position of the text over the image.
	*/
	$scope.changePos = function(position) {
		if (position) {
			$scope.model.value.position = position;
		}
		$scope.toggleMode('edit');
    };

    $scope.createColorPicker = function(key) {
        var currentColor = $scope.model.value[key];
        var pickr = Pickr.create({
            default: !!currentColor ? 'rgba(' + currentColor + ')' : 'rgba(48,48,51,1)',
            el: '.pickr-container-' + key,
            theme: 'nano',
            swatches: [],
            defaultRepresentation: 'HEXA',
            components: {
                preview: true,
                opacity: true,
                hue: true,

                interaction: {
                    hex: false,
                    rgba: false,
                    hsva: false,
                    input: true,
                    clear: true,
                    save: true
                }
            }
        });
        pickr.on('save', function(color, instance) {
            var newColor = '';
            if (!!color) {
                newColor = color.toRGBA().join(',');
            }
            $scope.$apply(function() {
                $scope.model.value[key] = newColor;
            });
        });
        if (key == "overlayColor") {
            $scope.overlayPicker = pickr;
        }
    };    
    
    $scope.deleteLink = function() {
        $scope.model.value.link.id = ''; 
        $scope.model.value.link.name = '';
        $scope.model.value.link.target = '';
        $scope.model.value.link.url = '';        
    };

    $scope.getHeadlineColorStyle = function() {
        var styles = {};
        if ($scope.model.value.headlineColor) {
            styles = {
                color: "rgba(" + $scope.model.value.headlineColor + ")"
            };
        } else {
            if (!!$scope.model.value.headline && $scope.model.value.headline !== '<br>') {
                styles = {
                    background: "rgba(255,255,255, .8)"
                };
            }
        }
        return styles; 
    }

    $scope.getSubheadlineColorStyle = function() { 
        var styles = {};
        if ($scope.model.value.subheadlineColor) {
            styles = {
                color: "rgba(" + $scope.model.value.subheadlineColor + ")"
            };
        } else {
            if (!!$scope.model.value.subheadline && $scope.model.value.subheadline !== '<br>') {
                styles = {
                    background: "rgba(255,255,255, .8)"
                };
            }
        }
        return styles; 

    }

    /**
    * @method $scope.handleMediaPickerSelection
    * @param {Object} data - modal object returned by dialogService.mediaPicker().
    * @description Event handler triggered by a media picker dialog. If there is 
    * an image selected, updates the $scope.model.value with the image's information.
    */
    $scope.handleMediaPickerSelection = function(data, index) {
        if (data && data.id && !!data.image) {
            const isVideo = data.image.indexOf('.mp4') > -1;
            if (isVideo && index == 0) {
                $scope.handleMediaPickerForVideoSelection(data);
            } else {
                var media = $scope.getMediaClone($scope.model.value.media);
                media[index].id = data.id;
                media[index].url = data.image;
                media[index].width = data.originalWidth;
                media[index].height = data.originalHeight;
                media[index].altText = data.name;
                //$scope.shouldShowBannerWithoutImage = true;
                if (data.properties) {
                    data.properties.forEach(function(property) {
                        if(property.alias == "altText") {
                            if(property.value != "") {
                                media[0].altText = property.value;
                            }
                        }
                    });
                } else if (!!data.metaData) {
                    if (!!data.metaData.Text) {
                        media[index].altText = data.metaData.Text;
                    }
                }
                $scope.model.value.media = media;
                if (index == 0) {
                    window.setTimeout(function() {
                        document.querySelector('.orc-be-media-item-sizer-' + data.id).onload = function() {
                            $scope.$apply(function() {
                                $scope.pointlessPing++;
                            });
                        }
                    }, 100);                    
                }
            }
        }
    };

    $scope.handleMediaPickerForVideoSelection = function(data) {
        if (data && data.id && !!data.image) {
            const isVideo = data.image.indexOf('.mp4') > -1;
            if (isVideo) {
                $scope.model.value.video = new bannerEditor.Models.Video({
                    id: data.id,
                    name: data.name,
                    url: data.image
                });
                window.setTimeout(function() {
                    document.querySelector('.orc-be-video-' + data.id).onloadedmetadata = function() {
                        $scope.$apply(function() {
                            $scope.pointlessPing++;
                        });
                    }
                }, 100);
            } else {
                notificationsService.error("Incorrect Video Format", "You can only select videos with the .mp4 format for use with the banner editor.");
            }
        }
    };

	/**
	 * @method $scope.handleLinkPickerSelection
	 * @param {Object} data - modal object returned by dialogService.linkPicker()
	 * @description Event handler triggered by a link picker dialog. If there is 
     * a link selected, updates $scope.model.value with the link's information.
	 */
	$scope.handleLinkPickerSelection = function(data) {
		if (data) {
			$scope.model.value.link.id = data.id; 
			$scope.model.value.link.name = data.name;
			$scope.model.value.link.target = data.target;
			$scope.model.value.link.url = data.url;
        }
	};

	/**
	* @method onRemoveImageConfirmation
    * @description Handles callback from remove image confirmation dialog, 
    * deleting the media item from the model's value.
	*/
	$scope.onRemoveImageConfirmation = function(index) {
        var media = $scope.getMediaClone($scope.model.value.media);
        var video = new bannerEditor.Models.Video($scope.model.value.video);
        if (index < 0 || (index == 0 && !!video.url)) {
            $scope.model.value.video = new bannerEditor.Models.Video();
        } else {
            var key = "desktop";
            switch (index) {
                case 1:
                    key = "tablet";
                case 2:
                    key = "mobile";
            }
            media[index] = new bannerEditor.Models.MediaItem({key: key});
            $scope.model.value.media = media;
        }
    };
    
	/**
	* @method openConfirmRemoveDialog
    * @description Using Umbraco's dialogService, opens confirmation dialog, 
    * asking user to confirm they want to remove the image from the banner. Dialog 
    * result is passed to $scope.onRemoveImageConfirmation
	*/
	$scope.openConfirmRemoveDialog = function(index) {
        dialogService.open({
			template: "/App_plugins/BannerEditor/views/ConfirmationDialogView.html",
			dialogData: {
                message: "Are you sure you want to remove the selected " + (index > -1 ? "image?" : "video?")
			},
			callback: function() {
                $scope.onRemoveImageConfirmation(index);
            }
        });
    };

    /**
    * @method openMediaPicker
    * @description Opens the media picker dialog, showing only images, and sends 
    * the data returned to $scope.handleMediaPickerSelection.
    */
    $scope.openMediaPicker = function(index) {
        var options = {
            onlyImages: false,
            callback: function(data) {
                $scope.handleMediaPickerSelection(data, index);
            }
        };
        dialogService.mediaPicker(options);
    };

    $scope.openMediaPickerForVideo = function(index) {
        var options = {
            onlyImages: false,
            callback: function(data) {
                $scope.handleMediaPickerForVideoSelection(data);
            }
        };
        dialogService.mediaPicker(options);
    }

	/**
    * @method openLinkPicker
    * @description Opens the content picker dialog, showing only images, and 
    * sends the data returned to $scope.handleLinkPickerSelection.
    */
    $scope.openLinkPicker = function () {
		var link = {
            name: $scope.model.value.link.name,
            url:  $scope.model.value.link.url,
            target: $scope.model.value.link.target,
             // Check to see if it's media and remove id as it attempts resolve 
             // as content causing error
            id: $scope.model.value.link.isMedia ? null : $scope.model.value.link.id
        }
        dialogService.linkPicker({
            currentTarget: link,
            callback: $scope.handleLinkPickerSelection
        });
    };

    $scope.openOverlayPicker = function() {
        if ($scope.overlayPicker) {
            $scope.overlayPicker.show();
        }
    }

    /**
     * @method renderAddLinkText
     * @returns {string}
     * @description If a link with a link name exists, returns the link name, 
     * otherwise returns '+ Add A Link'
     */
	$scope.renderAddLinkText = function() {
		return $scope.model.value.link.url == "" ? "+ Add a Link" : $scope.model.value.link.name == "" ? $scope.model.value.link.url : $scope.model.value.link.name;
	};

	/**
	* @method showBannerWithoutImage
    * @description Shows the banner without an image, for text on a single-color 
    * background.
	*/
	$scope.showBannerWithoutImage = function() {
		$scope.shouldShowBannerWithoutImage = true;
	};

	/**
	* @method toggleMode
	* @param {optional string} mode
    * @description If a mode is provided, switch to that. Otherwise, toggle 
    * between edit and select.
	*/
	$scope.toggleMode = function(mode) {
		if (mode) {
			$scope.propertyEditorMode = mode;
		} else {
			if ($scope.propertyEditorMode === "edit") {
				$scope.propertyEditorMode = "select";
			} else {
				$scope.propertyEditorMode = "edit";
			}
		}
	};

	// Helper Methods ////////////////////////////////////////////////////////////

    /**
    * @method getBackgroundStyle
    * @returns {array of styles}
    * @description Provides styles for the background image of the text over 
    * image editor view.
    */
    $scope.getBackgroundStyle = function() {
        var styles = {
            width: "800px",
            height: "400px",
            background: "#333",
            position: "relative",
            display: "block",
            overflow: "hidden"
        };
        var media = $scope.getMediaClone($scope.model.value.media);
        var video = new bannerEditor.Models.Video($scope.model.value.video);
        var mediaItem = media[0];

        if (mediaItem.url !== "" || video.url !== "") {
            var width = 0;
            var height = 0;
            // 1. Get natural dimensions
            if (video.url) {
                var videoSizer = document.querySelector('.orc-be-video-' + $scope.model.value.video.id);
                width = !!videoSizer ? videoSizer.videoWidth : 800;
                height = !!videoSizer ? videoSizer.videoHeight : 400;
            } else if (mediaItem.url) {
                var sizer = document.querySelector('.orc-be-media-item-sizer-' + mediaItem.id);
                width = !!sizer ? sizer.naturalWidth : mediaItem.width;
                height = !!sizer ? sizer.naturalHeight : mediaItem.height;
            }

            var ratio = height / width;

            // 2. Adjust for selected height type.
            switch ($scope.model.value.height) {
                case "short":
                    height = 200;
                    break;
                case "mid":
                    height = 400;
                    break;
                case "tall":
                    height = 600;
                    break;
            }
            //width = height / ratio; 

            // 3. Fix if too wide for container.
            if (width > $scope.maxWidth) {
                width = $scope.maxWidth;
                //height = ratio * width;
            }

            styles = {
                width: width + "px",
                height: height + "px",
                background: "url(" + mediaItem.url + ") center center no-repeat",
                'background-size': "cover",
                position: "relative",
                display: "block",
                overflow: "hidden"         
            };
        } 
        
        return styles;
    };

	/**
	* @method getFrameStyle
	* @returns {array of styles}
	* @description Provides styles for the controller's div wrapper to set its width.
	*/
	$scope.getFrameStyle = function() {
		var styles = {
			width: "800px"
		}
		if ($scope.model.value.media) {
		    var media = $scope.getMediaClone($scope.model.value.media);
            if (media[0].width > 0) {
                var sizer = document.querySelector('.orc-be-media-item-sizer-' + media[0].id);
                width = !!sizer ? sizer.naturalWidth : media[0].width;
                if (width > $scope.maxWidth && $scope.maxWidth > 0) {
                    width = $scope.maxWidth;
                }
                styles = {
                    width: width + "px"
                };
            }
		}
		return styles;
	};

	/**
	* @method getImageWrapperClasses
	* @returns {string}
    * @description Provides the styles for the wrapper div that represents the 
    * banner for the property editor.
	*/
	$scope.getImageWrapperClasses = function() {
		var classes = "image " + $scope.model.value.height + " ";
		if ($scope.propertyEditorMode === "select") {
			classes += "selectMode";
		}
		return classes
	};

    /**
    * @method getMaxWidth
    * @returns {integer}
    * @description If $scope.model.config has a maxWidth value, return that. 
    * Otherwise, return 800.
    */
    $scope.getMaxWidth = function() {
        var value = 800;
        if ($scope.model && $scope.model.config) {
            if ($scope.model.config.maxWidth != undefined) {
                value = parseInt($scope.model.config.maxWidth, 10);
            }
        }
        return value;
    };

    $scope.getMediaClone = function(media) {
        return [
            new bannerEditor.Models.MediaItem(media[0]),
            new bannerEditor.Models.MediaItem(media[1]),
            new bannerEditor.Models.MediaItem(media[2])
        ];
    }

    /**
    * @method getPropertyValue
    * @returns {bannerEditor.Models.BannerEditor}
    * @description If the $scope.model.value already exists, filter it through 
    * the model and return it. Elsewise, create a new, default model.
    */
    $scope.getPropertyValue = function() {
        var value = new bannerEditor.Models.BannerEditor();
        if ($scope.model) {
            if ($scope.model.value != undefined) {
                value = new bannerEditor.Models.BannerEditor($scope.model.value);
            }
        }
        return value;
    };

    /**
    * @method hasImageSelected
    * @returns {bool}
    * @description Returns `true` if there is a selected media image, otherwise 
    * returns `false`.
    */
    $scope.hasImageSelected = function() {
        var hasImageSelected = false;
        if (($scope.model && $scope.model.value)) {
            var mediaItem = new bannerEditor.Models.MediaItem($scope.model.value.media[0]);
            if (mediaItem.id != 0) {
                hasImageSelected = true;
            }
            if ($scope.model.value.video.id !== 0) {
                hasImageSelected = true;
            }
			if ((!!$scope.model.value.headline && $scope.model.value.headline !== '<br>') || (!!$scope.model.value.subheadline && $scope.model.value.subheadline !== '<br>')) {
				hasImageSelected = true;
			}
        }
		if ($scope.shouldShowBannerWithoutImage) {
			hasImageSelected = true;
		}
        return hasImageSelected;
    };

    /**
     * @method hasLinkSelected
     * @returns {bool}
     * @description Returns true if the user has selected a link.
     */
    $scope.hasLinkSelected = function() {
        return $scope.model && $scope.model.value && $scope.model.value.link.url !== '';
    };

	// Call $scope.init() ////////////////////////////////////////////////////////

	$scope.init();

});
