"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[2166],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},19375:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={sidebar_position:4},c="Resolver\u2019s setup script example",l={unversionedId:"fusion-swap/becoming-a-resolver/resolver-setup-script-example",id:"fusion-swap/becoming-a-resolver/resolver-setup-script-example",isDocsHomePage:!1,title:"Resolver\u2019s setup script example",description:"The following script executes the steps to become a resolver:",source:"@site/docs/fusion-swap/becoming-a-resolver/resolver-setup-script-example.mdx",sourceDirName:"fusion-swap/becoming-a-resolver",slug:"/fusion-swap/becoming-a-resolver/resolver-setup-script-example",permalink:"/docs/fusion-swap/becoming-a-resolver/resolver-setup-script-example",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/fusion-swap/becoming-a-resolver/resolver-setup-script-example.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Resolver verification",permalink:"/docs/fusion-swap/becoming-a-resolver/resolver-verification"},next:{title:"Contract interaction",permalink:"/docs/fusion-swap/becoming-a-resolver/contracts-interaction"}},p=[{value:"Setup script example",id:"setup-script-example",children:[]}],u={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"resolvers-setup-script-example"},"Resolver\u2019s setup script example"),(0,a.kt)("p",null,"The following script executes the steps to become a resolver:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Approve staking 1inch for 1inch contract."),(0,a.kt)("li",{parentName:"ol"},"Stake 1inch to gain unicorn power."),(0,a.kt)("li",{parentName:"ol"},"Add a delegation pod to enable power delegation."),(0,a.kt)("li",{parentName:"ol"},"Register yourself to be a resolver."),(0,a.kt)("li",{parentName:"ol"},"(Optional) Change the default farm to a new farm."),(0,a.kt)("li",{parentName:"ol"},"Delegate available unicorn power to yourself."),(0,a.kt)("li",{parentName:"ol"},"Register a resolver at the whitelist."),(0,a.kt)("li",{parentName:"ol"},"Set up a worker to settle fusion orders.")),(0,a.kt)("h2",{id:"setup-script-example"},"Setup script example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"const { ether, time } = require('@1inch/solidity-utils');\nconst { ethers } = require('hardhat');\n\n// Setup envirement\nconst inch = await ethers.getContractAt('IERC20', '0x111111111117dc0aa78b770fa6a738034120c302');\nconst st1inch = await ethers.getContractAt('IERC20', '0x9a0c8ff858d273f57072d714bca7411d717501d7');\nconst powerPod = await ethers.getContractAt('IERC20', '0xaccfac2339e16dc80c50d2fa81b5c2b049b4f947');\nconst whitelist = await ethers.getContractAt('WhitelistRegistry', '0xcb8308fcB7BC2f84ed1bEa2C016991D34de5cc77');\n\nconst stakeAmount = ether('1000000');\nconst lockTime = time.duration.years('2');\nconst myShareToken = {\n    name: 'MyShareTokenName',\n    symbol: 'MST',\n};\nconst worker = '...'; // Address of wallet which send transaction\nconst [resolver] = await ethers.getSigners();\n\n// Ethers setup script\n\n// approve 1inch staking\nawait (await inch.connect(resolver).approve(st1inch.address, stakeAmount));\n// stake 1inch token\nawait (await st1inch.connect(resolver).deposit(stakeAmount, lockTime)).wait();\n// add delegation pod to\n// 1. make it possible for any user to delegate staking power to\n// the resolver's account\n// 2. make it possible for a resolver to allocate its staking power for itself\nawait (await st1inch.connect(resolver).addPod(powerPod.address)).wait();\n\n// register resolver's delegation token to count stakers' shares and rewards\nawait (\n    await powerPod\n        .connect(resolver)\n        .functions['register(string,string)'](\n            myShareToken.name,\n            myShareToken.symbol,\n        )\n).wait();\n\n// Delegate staked power to self\nawait (await powerPod.connect(resolver).delegate(resolver.address)).wait();\n\n// Whitelist resolver (there should be enough unicorn power to be in top 10)\nawait (await whitelist.connect(resolver).register()).wait();\n\n// Add worker address from which order settlement will be executed\nawait (await whitelist.connect(resolver).promote(1, worker)).wait();\n")))}d.isMDXComponent=!0}}]);