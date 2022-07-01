// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=function(){try{return e({},"x",{}),!0}catch(e){return!1}},t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,f=o.__defineSetter__,u=o.__lookupGetter__,a=o.__lookupSetter__,l=t,c=function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||a.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&f&&f.call(e,r,t.set),e},_=r()?l:c,p=function(e,r,t){_(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=Math.floor;function b(e,r,t){var o,n,i,f,u,a;if(e<=0)return r;if(u=d(e/2),1===t){if(i=e-1,(f=u%3)>0)for(n=0;n<f;n++)o=r[n],r[n]=r[i],r[i]=o,i-=1;if(u<3)return r;for(n=f;n<u;n+=3)o=r[n],r[n]=r[i],r[i]=o,o=r[n+1],r[n+1]=r[i-1],r[i-1]=o,o=r[n+2],r[n+2]=r[i-2],r[i-2]=o,i-=3;return r}for(i=(n=t<0?(1-e)*t:0)+(e-1)*t,a=0;a<u;a++)o=r[n],r[n]=r[i],r[i]=o,n+=t,i-=t;return r}return p(b,"ndarray",(function(e,r,t,o){var n,i,f,u,a,l;if(e<=0)return r;if(a=d(e/2),i=o,1===t){if(f=i+e-1,(u=a%3)>0)for(l=0;l<u;l++)n=r[i],r[i]=r[f],r[f]=n,i+=t,f-=t;if(a<3)return r;for(l=u;l<a;l+=3)n=r[i],r[i]=r[f],r[f]=n,n=r[i+1],r[i+1]=r[f-1],r[f-1]=n,n=r[i+2],r[i+2]=r[f-2],r[f-2]=n,i+=3,f-=3;return r}for(f=i+(e-1)*t,l=0;l<a;l++)n=r[i],r[i]=r[f],r[f]=n,i+=t,f-=t;return r})),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).drev=r();
//# sourceMappingURL=index.js.map
