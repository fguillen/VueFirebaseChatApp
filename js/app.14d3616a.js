(function(){"use strict";var e={722:function(e,n,t){var o=t(9242),s=t(3396);function r(e,n,t,o,r,i){const a=(0,s.up)("FaviconComponent"),u=(0,s.up)("NavComponent"),c=(0,s.up)("ChatComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(a),(0,s.Wm)(u),(0,s.Wm)(c)],64)}const i=(0,s._)("h1",null,[(0,s._)("strong",{class:"text-red-400"},"Lovely"),(0,s.Uk)(" Chat App")],-1),a={key:0,class:"login"};function u(e,n,t,o,r,u){const c=(0,s.up)("AvatarComponent");return(0,s.wg)(),(0,s.iD)("nav",null,[(0,s._)("div",null,[i,o.isLogin?((0,s.wg)(),(0,s.iD)("div",a,[(0,s.Wm)(c,{src:o.user.photoURL},null,8,["src"]),(0,s._)("button",{class:"text-gray-400 hover:text-white",onClick:n[0]||(n[0]=(...e)=>o.signOut&&o.signOut(...e))}," Sign Out ")])):((0,s.wg)(),(0,s.iD)("button",{key:1,class:"bg-green-500 hover:bg-green-600",onClick:n[1]||(n[1]=(...e)=>o.signIn&&o.signIn(...e))}," Sign in "))])])}const c=["src"];function l(e,n,t,o,r,i){return(0,s.wg)(),(0,s.iD)("img",{class:"avatar",src:t.src},null,8,c)}var d={props:{src:{type:String,default:""}}},g=t(89);const p=(0,g.Z)(d,[["render",l]]);var f=p,v=t(6780),m=(t(4406),t(410),t(4870));v.Z.initializeApp({apiKey:"AIzaSyC0gCrWMo5HIofgTUiS8FsDCgpCpLVSfjM",authDomain:"test---vue-chat.firebaseapp.com",projectId:"test---vue-chat",storageBucket:"test---vue-chat.appspot.com",messagingSenderId:"13267053198",appId:"1:13267053198:web:0e0bf415fb6fb783ef77df"});const h=v.Z.auth();function b(){const e=(0,m.iH)(null),n=h.onAuthStateChanged((n=>e.value=n));(0,s.Ah)(n);const t=(0,s.Fl)((()=>null!==e.value)),o=async()=>{const e=new v.Z.auth.GoogleAuthProvider;try{await h.signInWithPopup(e)}catch(n){console.error(n)}},r=()=>{console.log("SignOut"),h.signOut()};return{user:e,isLogin:t,signIn:o,signOut:r}}const w=v.Z.firestore(),y=w.collection("messages"),C=y.orderBy("createdAt","desc").limit(100);function _(){const e=(0,m.iH)([]),n=C.onSnapshot((n=>{e.value=n.docs.map((e=>({id:e.id,...e.data()}))).reverse()}));(0,s.Ah)(n);const{user:t,isLogin:o}=b(),r=e=>{if(!o.value)return;const{photoURL:n,uid:s,displayName:r}=t.value;y.add({userName:r,userId:s,userPhotoURL:n,text:e,createdAt:v.Z.firestore.FieldValue.serverTimestamp()})},i=e=>{console.log("deleteMessage: "+e),o.value&&y.doc(e).delete()};return{messages:e,sendMessage:r,deleteMessage:i}}var k={components:{AvatarComponent:f},setup(){const{user:e,isLogin:n,signOut:t,signIn:o}=b();return{user:e,isLogin:n,signOut:t,signIn:o}}};const x=(0,g.Z)(k,[["render",u]]);var O=x,S=t(7139);const I={class:"container-sm mt-20"},L={class:"mx-5"},D={class:"mx-5"},M={ref:"bottom",class:"mt-20"},A={class:"bottom"},W={class:"container-sm"},j={type:"submit"};function Z(e,n,t,r,i,a){const u=(0,s.up)("MessageComponent"),c=(0,s.up)("SendIconComponent");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",I,[(0,s._)("div",L,[(0,s._)("div",D,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.messages,(e=>((0,s.wg)(),(0,s.j4)(u,{key:e.id,name:e.userName,"photo-url":e.userPhotoURL,sender:e.userId===r.user?.uid,onDelete:n=>r.del(e)},{default:(0,s.w5)((()=>[(0,s.Uk)((0,S.zw)(e.text),1)])),_:2},1032,["name","photo-url","sender","onDelete"])))),128))])])]),(0,s._)("div",M,null,512),(0,s._)("div",A,[(0,s._)("div",W,[r.isLogin?((0,s.wg)(),(0,s.iD)("form",{key:0,onSubmit:n[1]||(n[1]=(0,o.iM)(((...e)=>r.send&&r.send(...e)),["prevent"]))},[(0,s.wy)((0,s._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>r.message=e),placeholder:"Message",required:""},null,512),[[o.nr,r.message]]),(0,s._)("button",j,[(0,s.Wm)(c)])],32)):(0,s.kq)("",!0)])])],64)}const P={class:"message"},U={key:0},H={key:0,class:"text text-4xl w-3/4 bg-red-400 font-black"};function F(e,n,t,o,r,i){const a=(0,s.up)("AvatarComponent"),u=(0,s.up)("font-awesome-icon");return(0,s.wg)(),(0,s.iD)("div",P,[t.sender?(0,s.kq)("",!0):((0,s.wg)(),(0,s.iD)("span",U,(0,S.zw)(t.name),1)),(0,s._)("div",{class:(0,S.C_)(["flex",t.sender?"flex-row-reverse":""])},[(0,s.Wm)(a,{class:"mt-1",src:t.photoUrl},null,8,["src"]),o.isMimi?((0,s.wg)(),(0,s.iD)("div",H,[(0,s.WI)(e.$slots,"default")])):((0,s.wg)(),(0,s.iD)("div",{key:1,class:(0,S.C_)(["text w-3/4",t.sender?"bg-green-800":"bg-gray-700"])},[(0,s.WI)(e.$slots,"default")],2)),t.sender?((0,s.wg)(),(0,s.iD)("button",{key:2,onClick:n[0]||(n[0]=n=>e.$emit("delete")),type:"button",class:"h-9 text-white bg-gray-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"},[(0,s.Wm)(u,{icon:["fa","fa-circle-xmark"]})])):(0,s.kq)("",!0)],2)])}var N={components:{AvatarComponent:f},props:{name:{type:String,default:""},photoUrl:{type:String,default:""},sender:{type:Boolean,default:!1}},setup(e,n){const t=(0,s.Fl)((()=>n.slots.default()[0].children.trim().match(/^[\smi]+$/i)));return{isMimi:t}}};const T=(0,g.Z)(N,[["render",F]]);var Y=T;const z={class:"icon-send hover:text-green-500 hover:text-green-500","aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},B=(0,s._)("path",{fill:"currentColor",d:"M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z"},null,-1),q=[B];function R(e,n){return(0,s.wg)(),(0,s.iD)("svg",z,q)}const V={},$=(0,g.Z)(V,[["render",R]]);var E=$,G={components:{MessageComponent:Y,SendIconComponent:E},setup(){const{messages:e,sendMessage:n,deleteMessage:t}=_(),{user:o,isLogin:r}=b(),i=(0,m.iH)(null);(0,s.YP)(e,(()=>{(0,s.Y3)((()=>{i.value?.scrollIntoView({behavior:"smooth"})}))}),{deep:!0});const a=(0,m.iH)(""),u=()=>{n(a.value),a.value=""},c=e=>{t(e.id)};return{isLogin:r,user:o,messages:e,send:u,del:c,message:a,bottom:i}}};const K=(0,g.Z)(G,[["render",Z]]);var J=K,Q={setup(){const e=document.getElementById("favicon"),{messages:n}=_();let t=!1;const o=()=>{e.href=e.href.replace(/favicon.*\.png/,"favicon.png")},r=()=>{e.href=e.href.replace(/favicon.*\.png/,"favicon_read.png")},i=()=>{t=!0,r()},a=()=>{t=!1},u=()=>{"visible"===document.visibilityState?i():a()};(0,s.YP)(n,(()=>{t||o()})),(0,s.bv)((()=>{document.addEventListener("visibilitychange",u),i()}))}};const X=Q;var ee=X,ne={name:"App",components:{ChatComponent:J,NavComponent:O,FaviconComponent:ee}};const te=(0,g.Z)(ne,[["render",r]]);var oe=te,se=t(8125),re=t(8321),ie=t(7749);console.log("LovelyChatApp v0.0.2"),se.vI.add(re.WA2);const ae=(0,o.ri)(oe);ae.component("font-awesome-icon",ie.GN),ae.mount("#app")}},n={};function t(o){var s=n[o];if(void 0!==s)return s.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,function(){var e=[];t.O=function(n,o,s,r){if(!o){var i=1/0;for(l=0;l<e.length;l++){o=e[l][0],s=e[l][1],r=e[l][2];for(var a=!0,u=0;u<o.length;u++)(!1&r||i>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(a=!1,r<i&&(i=r));if(a){e.splice(l--,1);var c=s();void 0!==c&&(n=c)}}return n}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[o,s,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var s,r,i=o[0],a=o[1],u=o[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(s in a)t.o(a,s)&&(t.m[s]=a[s]);if(u)var l=u(t)}for(n&&n(o);c<i.length;c++)r=i[c],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(l)},o=self["webpackChunkvue_firebase_chat_app"]=self["webpackChunkvue_firebase_chat_app"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(722)}));o=t.O(o)})();
//# sourceMappingURL=app.14d3616a.js.map