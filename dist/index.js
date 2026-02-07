"use strict";var s=function(v,r){return function(){return r||v((r={exports:{}}).exports,r),r.exports}};var q=s(function(D,p){
var E=require('@stdlib/math-base-special-floor/dist'),o=3;function M(v,r,u,_){var i,e,a,f,n,t;if(v<=0)return r;if(n=E(v/2),e=_,u===1){if(f=n%o,a=e+v-1,f>0)for(t=0;t<f;t++)i=r[e],r[e]=r[a],r[a]=i,e+=u,a-=u;if(n<o)return r;for(t=f;t<n;t+=o)i=r[e],r[e]=r[a],r[a]=i,i=r[e+1],r[e+1]=r[a-1],r[a-1]=i,i=r[e+2],r[e+2]=r[a-2],r[a-2]=i,e+=o,a-=o;return r}for(a=e+(v-1)*u,t=0;t<n;t++)i=r[e],r[e]=r[a],r[a]=i,e+=u,a-=u;return r}p.exports=M
});var m=s(function(F,y){
var O=require('@stdlib/strided-base-stride2offset/dist'),b=q();function g(v,r,u){return b(v,r,u,O(v,u))}y.exports=g
});var l=s(function(G,j){
var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=m(),k=q();h(d,"ndarray",k);j.exports=d
});var w=require("path").join,z=require('@stdlib/utils-try-require/dist'),A=require('@stdlib/assert-is-error/dist'),B=l(),c,R=z(w(__dirname,"./native.js"));A(R)?c=B:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
