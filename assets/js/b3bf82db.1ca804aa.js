"use strict";(self.webpackChunkreact_native_leaflet_bridge=self.webpackChunkreact_native_leaflet_bridge||[]).push([[734],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=n,d=u["".concat(l,".").concat(m)]||u[m]||f[m]||o;return r?a.createElement(d,i(i({ref:t},s),{},{components:r})):a.createElement(d,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1002:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},i="Create a Map",p={unversionedId:"tutorials/create-a-map",id:"tutorials/create-a-map",title:"Create a Map",description:"Before all: add React Native Leaflet Bridge to your project. How to install?",source:"@site/docs/tutorials/create-a-map.md",sourceDirName:"tutorials",slug:"/tutorials/create-a-map",permalink:"/react-native-leaflet-bridge/docs/tutorials/create-a-map",draft:!1,editUrl:"https://github.com/dev-pavel/react-native-leaflet-bridge/docs/tutorials/create-a-map.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Tutorials",permalink:"/react-native-leaflet-bridge/docs/category/tutorials"},next:{title:"Create a Document",permalink:"/react-native-leaflet-bridge/docs/tutorials/create-a-document"}},l={},c=[{value:"Create your first Leaflet Map",id:"create-your-first-leaflet-map",level:3}],s={toc:c},u="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-a-map"},"Create a Map"),(0,n.kt)("p",null,"Before all: add ",(0,n.kt)("strong",{parentName:"p"},"React Native Leaflet Bridge")," to your project. ",(0,n.kt)("a",{parentName:"p",href:"/docs/introduction/getting-started"},"How to install?")),(0,n.kt)("h3",{id:"create-your-first-leaflet-map"},"Create your first Leaflet Map"),(0,n.kt)("p",null,"Open your file or file at ",(0,n.kt)("inlineCode",{parentName:"p"},"src/App.tsx"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},"import React, { useRef } from 'react';\nimport { FC, SafeAreaView } from 'react-native';\nimport LeafletWebview, { ILeafletProxy } from 'react-native-leaflet-bridge';\n\nconst App: FC = () => {\n  const mapRef = useRef<ILeafletProxy>();\n\n  const onLoad = () => {\n    const L = mapRef.current?.L;\n\n    if (L) {\n      const map = L.map('map').setView([51.505, -0.09], 13);\n\n      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {\n        attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\n      }).addTo(map);\n\n      L.marker([51.5, -0.09]).addTo(map)\n        .bindPopup('A pretty CSS popup.<br> Easily customizable.')\n        .openPopup();\n    }\n  };\n\n  return (\n    <SafeAreaView style={{ flex: 1 }}>\n      <LeafletWebview\n        mapRef={mapRef}\n        onLoad={onLoad}\n        style={{ flex: 1 }}\n      />\n    </SafeAreaView>\n  );\n};\n\nexport default; \n")),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",{parentName:"p",href:"https://leafletjs.com/"},"Leaflet API"),"."))}f.isMDXComponent=!0}}]);