"use strict";var s=function(u,r){return function(){try{return r||u((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var q=s(function(D,p){
var E=require('@stdlib/math-base-special-floor/dist'),o=3;function M(u,r,i,_){var v,e,a,f,n,t;if(u<=0)return r;if(n=E(u/2),e=_,i===1){if(f=n%o,a=e+u-1,f>0)for(t=0;t<f;t++)v=r[e],r[e]=r[a],r[a]=v,e+=i,a-=i;if(n<o)return r;for(t=f;t<n;t+=o)v=r[e],r[e]=r[a],r[a]=v,v=r[e+1],r[e+1]=r[a-1],r[a-1]=v,v=r[e+2],r[e+2]=r[a-2],r[a-2]=v,e+=o,a-=o;return r}for(a=e+(u-1)*i,t=0;t<n;t++)v=r[e],r[e]=r[a],r[a]=v,e+=i,a-=i;return r}p.exports=M
});var m=s(function(F,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=q();function g(u,r,i){return b(u,r,i,O(u,i))}y.exports=g
});var l=s(function(G,j){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=m(),k=q();h(d,"ndarray",k);j.exports=d
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),c,R=z(w(__dirname,"./native.js"));A(R)?c=B:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
