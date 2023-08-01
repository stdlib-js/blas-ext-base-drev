// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,o=Object.prototype,n=o.toString,i=o.__defineGetter__,a=o.__defineSetter__,f=o.__lookupGetter__,u=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,_,p;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===n.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(f.call(e,r)||u.call(e,r)?(l=e.__proto__,e.__proto__=o,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),_="get"in t,p="set"in t,c&&(_||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return _&&i&&i.call(e,r,t.get),p&&a&&a.call(e,r,t.set),e};var l=e,c=Math.floor;function _(e,r,t){var o,n,i,a,f,u;if(e<=0)return r;if(f=c(e/2),1===t){if(i=e-1,(a=f%3)>0)for(n=0;n<a;n++)o=r[n],r[n]=r[i],r[i]=o,i-=1;if(f<3)return r;for(n=a;n<f;n+=3)o=r[n],r[n]=r[i],r[i]=o,o=r[n+1],r[n+1]=r[i-1],r[i-1]=o,o=r[n+2],r[n+2]=r[i-2],r[i-2]=o,i-=3;return r}for(i=(n=t<0?(1-e)*t:0)+(e-1)*t,u=0;u<f;u++)o=r[n],r[n]=r[i],r[i]=o,n+=t,i-=t;return r}return l(_,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:function(e,r,t,o){var n,i,a,f,u,l;if(e<=0)return r;if(u=c(e/2),i=o,1===t){if(a=i+e-1,(f=u%3)>0)for(l=0;l<f;l++)n=r[i],r[i]=r[a],r[a]=n,i+=t,a-=t;if(u<3)return r;for(l=f;l<u;l+=3)n=r[i],r[i]=r[a],r[a]=n,n=r[i+1],r[i+1]=r[a-1],r[a-1]=n,n=r[i+2],r[i+2]=r[a-2],r[a-2]=n,i+=3,a-=3;return r}for(a=i+(e-1)*t,l=0;l<u;l++)n=r[i],r[i]=r[a],r[a]=n,i+=t,a-=t;return r}}),_},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).drev=r();
//# sourceMappingURL=index.js.map
