"use strict";(self.webpackChunkmyblog=self.webpackChunkmyblog||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="\u81ea\u6211\u4ecb\u7ecd",c={unversionedId:"intro",id:"intro",title:"\u81ea\u6211\u4ecb\u7ecd",description:"\u5de8\u87f9\u5ea7",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"java\u5165\u95e8",permalink:"/docs/Java/java01"}},l={},s=[{value:"\u5de8\u87f9\u5ea7",id:"\u5de8\u87f9\u5ea7",level:3},{value:"\u7231\u597d",id:"\u7231\u597d",level:2},{value:"\u7406\u5ff5",id:"\u7406\u5ff5",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u81ea\u6211\u4ecb\u7ecd"},"\u81ea\u6211\u4ecb\u7ecd"),(0,o.kt)("h3",{id:"\u5de8\u87f9\u5ea7"},"\u5de8\u87f9\u5ea7"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://renshen-wjy.oss-cn-shenzhen.aliyuncs.com/img1/%E5%B7%A8%E8%9F%B9.jpg",alt:"img"})),(0,o.kt)("h2",{id:"\u7231\u597d"},"\u7231\u597d"),(0,o.kt)("p",null,"\u5386\u53f2\u3001\u7b56\u7565\u3001\u653f\u6cbb\u3001\u601d\u60f3 "),(0,o.kt)("h2",{id:"\u7406\u5ff5"},"\u7406\u5ff5"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"1.\u4e2d\u4e0d\u504f\uff0c\u5eb8\u4e0d\u6613\u3002\u662f\u6307\u4eba\u751f\u4e0d\u504f\u79bb\uff0c\u4e0d\u53d8\u6362\u81ea\u5df1\u7684\u76ee\u6807\u548c\u4e3b\u5f20\u3002\u8fd9\u5c31\u662f\u4e00\u4e2a\u6301\u4e4b\u4ee5\u6052\u7684\u6210\u529f\u4e4b\u9053\u3002\u5b54\u5b50\u6709\u66f0\uff1a\u201c\u4e2d\u5eb8\u4e4b\u4e3a\u5fb7\u4e5f\uff0c\u5176\u81f3\u77e3\u4e4e!\u6c11\u9c9c\u4e45\u77e3\u3002\u201d\n2.\u4e2d\u6b63\u3001\u5e73\u548c\u3002\u4eba\u9700\u8981\u4fdd\u6301\u4e2d\u6b63\u5e73\u548c\uff0c\u5982\u679c\u5931\u53bb\u4e2d\u6b63\u3001\u5e73\u548c\u4e00\u5b9a\u662f\u559c\u3001\u6012\u3001\u54c0\u3001\u4e50\u592a\u8fc7\uff0c\u6cbb\u6012\u552f\u6709\u4e50\uff0c\u6cbb\u8fc7\u559c\u83ab\u8fc7\u793c\uff0c\u5b88\u793c\u7684\u65b9\u6cd5\u5728\u4e8e\u656c\u3002\u53ea\u8981\u4fdd\u6301\u4e00\u9897\u656c\u91cd\u6216\u8005\u656c\u754f\u7684\u5fc3\uff0c\u4e2d\u6b63\u3001\u5e73\u548c\u5c31\u5f97\u4ee5\u957f\u5b58\uff0c\u4eba\u7684\u5065\u5eb7\u5c31\u5f97\u4ee5\u4fdd\u969c\u3002\n3.\u4e2d\u6307\u597d\u7684\u610f\u601d\uff0c\u5eb8\u540c\u7528\uff0c\u4e2d\u7528\u7684\u610f\u601d\u3002\u6307\u4eba\u8981\u62e5\u6709\u4e00\u6280\u4e4b\u957f\uff0c\u505a\u4e00\u4e2a\u6709\u7528\u7684\u4eba\u624d\uff1b\u53c8\u6307\u4eba\u8981\u575a\u5b88\u81ea\u5df1\u7684\u5c97\u4f4d\uff0c\u8981\u5728\u5176\u4f4d\u8c0b\u5176\u804c\u3002\n4.\u4e2d\u5eb8\u4e4b\u4e3a\u5fb7\u4e5f\uff0c\u5176\u81f3\u77e3\u4e4e!\u6c11\u9c9c\u4e45\u77e3\u3002\u4e2d\u5eb8\u662f\u8bf4\u4eba\u7684\u9053\u5fb7\u5982\u679c\u80fd\u8fbe\u5230\u4e2d\u5eb8\uff0c\u5c31\u662f\u6700\u9ad8\u7684\u9053\u5fb7\uff0c\u767e\u59d3\u4e00\u76f4\u5728\u52aa\u529b\u8ffd\u6c42\u3002\u4e2d\u5eb8\u4e0d\u662f\u4e0d\u80fd\u5b9e\u73b0\uff0c\u800c\u662f\u5f88\u96be\u5b9e\u73b0\u3002\u4e3a\u4ec0\u4e48\uff1f\u56e0\u4e3a\u4e2d\u5eb8\u6ca1\u6709\u91cf\u5316\u7684\u6807\u51c6\uff0c\u53ea\u80fd\u9760\u6211\u4eec\u81ea\u5df1\u6765\u611f\u609f\u3002\u5982\u679c\u5c06\u4e2d\u5eb8\u8fdb\u884c\u91cf\u5316\u5904\u7406\uff0c\u90a3\u4e2d\u5eb8\u5c31\u5bb9\u6613\u5b9e\u73b0\u4e86\u3002\n")))}u.isMDXComponent=!0}}]);