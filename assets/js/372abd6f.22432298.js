"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[571],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=i,k=p["".concat(d,".").concat(u)]||p[u]||m[u]||a;return n?r.createElement(k,o(o({ref:t},c),{},{components:n})):r.createElement(k,o({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},53928:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_position:3},d="Breaking changes in V3",s={unversionedId:"limit-order-protocol/v3-migration",id:"limit-order-protocol/v3-migration",isDocsHomePage:!1,title:"Breaking changes in V3",description:"Limit Order Protocol itself changes",source:"@site/docs/limit-order-protocol/v3-migration.mdx",sourceDirName:"limit-order-protocol",slug:"/limit-order-protocol/v3-migration",permalink:"/docs/limit-order-protocol/v3-migration",editUrl:"https://github.com/1inch/1inch-docs/edit/master/docs/limit-order-protocol/v3-migration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Canceling a limit order",permalink:"/docs/limit-order-protocol/utils/guide/rfq-limit-orders/cancel-limit-order-rfq"},next:{title:"LimitOrderProtocol",permalink:"/docs/limit-order-protocol/smart-contract/LimitOrderProtocol"}},c=[{value:"Limit Order Protocol itself changes",id:"limit-order-protocol-itself-changes",children:[]},{value:"<code>limit-order-protocol-utils</code> library changes:",id:"limit-order-protocol-utils-library-changes",children:[{value:"The <code>LimitOrderProtocolFacade</code>",id:"the-limitorderprotocolfacade",children:[]},{value:"The <code>LimitOrderBuilder</code>",id:"the-limitorderbuilder",children:[]},{value:"The <code>LimitOrderPredicateBuilder</code>",id:"the-limitorderpredicatebuilder",children:[]},{value:"The <code>SeriesNonceManagerFacade</code>",id:"the-seriesnoncemanagerfacade",children:[]}]}],m={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"breaking-changes-in-v3"},"Breaking changes in V3"),(0,a.kt)("h2",{id:"limit-order-protocol-itself-changes"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/1inch/limit-order-protocol/"},(0,a.kt)("inlineCode",{parentName:"a"},"Limit Order Protocol"))," itself changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now contract is pubshed to npm as ",(0,a.kt)("inlineCode",{parentName:"li"},"@1inch/limit-order-protocol"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"Order")," struct has changed as following:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"struct Order {\n    uint256 salt;\n    address makerAsset;\n    address takerAsset;\n    address maker;\n    address receiver;\n    address allowedSender;  // equals to Zero address on public orders\n    uint256 makingAmount;\n    uint256 takingAmount;\n\n-   // Was in v2\n-   // bytes makerAssetData;\n-   // bytes takerAssetData;\n-   // bytes getMakingAmount; // this.staticcall(abi.encodePacked(bytes, swapTakerAmount)) => (swapMakerAmount)\n-   // bytes getTakingAmount; // this.staticcall(abi.encodePacked(bytes, swapMakerAmount)) => (swapTakerAmount)\n-   // bytes predicate;       // this.staticcall(bytes) => (bool)\n-   // bytes permit;          // On first fill: permit.1.call(abi.encodePacked(permit.selector, permit.2))\n-   // bytes interaction;\n\n+   // Now in v3\n+   uint256 offsets;\n+   bytes interactions; // concat(makerAssetData, takerAssetData, getMakingAmount, getTakingAmount, predicate, permit, preIntercation, postInteraction)\n}\n")),(0,a.kt)("p",{parentName:"li"},"  where offset is bytes, where every 32's bytes represents offset of the n'ths interaction."),(0,a.kt)("p",{parentName:"li"},"  Eg: for ",(0,a.kt)("inlineCode",{parentName:"p"},"[2, 4, 6]")," offsets:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"(2n << 32n * 0n) + (4n << 32n * 1n) + (6n << 32n * 2n)\n// 0x000000060000000400000002\n")),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"See ",(0,a.kt)("inlineCode",{parentName:"p"},"LimitOrderBuilder.joinStaticCalls()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"LimitOrderBuilder.packInteractions()")," utils for help.")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Order.interaction")," is now ",(0,a.kt)("inlineCode",{parentName:"li"},"Order.postInteraction"),",\nas long as ",(0,a.kt)("inlineCode",{parentName:"li"},"Order.preInteraction")," was added.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"New arguments for ",(0,a.kt)("inlineCode",{parentName:"li"},"fillOrder")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"fillOrderToWithPermit")," methods",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"function fillOrderToWithPermit(\n    OrderLib.Order calldata order,\n    bytes calldata signature,\n+   bytes calldata interaction,\n    uint256 makingAmount,\n    uint256 takingAmount,\n-   uint256 thresholdAmount,\n+   uint256 skipPermitAndThresholdAmount,\n    address target,\n    bytes calldata permit\n)\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interaction")," is pre-interaction in fact."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"skipPermit")," is just 255'th byte of ",(0,a.kt)("inlineCode",{parentName:"li"},"skipPermitAndThresholdAmount"),", when rest of bytes is ",(0,a.kt)("inlineCode",{parentName:"li"},"thresholdAmount"),(0,a.kt)("blockquote",{parentName:"li"},(0,a.kt)("p",{parentName:"blockquote"},"See ",(0,a.kt)("inlineCode",{parentName:"p"},"fillLimitOrder()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"fillOrderToWithPermit()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"packSkipPermitAndThresholdAmount()")," utils methods and helpers.")))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Methods ",(0,a.kt)("inlineCode",{parentName:"li"},"eq"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"lt"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"gt"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"nonceEquals")," no more have address arguments. Use ",(0,a.kt)("inlineCode",{parentName:"li"},"arbitraryStaticCall")," instead in case if you need read value from different smartcontract.")),(0,a.kt)("h2",{id:"limit-order-protocol-utils-library-changes"},(0,a.kt)("inlineCode",{parentName:"h2"},"limit-order-protocol-utils")," library changes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now contract is pubshed to npm as ",(0,a.kt)("inlineCode",{parentName:"li"},"@1inch/limit-order-protocol-utils"))),(0,a.kt)("h3",{id:"the-limitorderprotocolfacade"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"LimitOrderProtocolFacade")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"new ",(0,a.kt)("inlineCode",{parentName:"li"},"chainId")," argument of LimitOrderProtocolFacade",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"import import { ChainId } from '@1inch/limit-order-protocol-utils/model/limit-order-protocol.model';\nnew LimitOrderProtocolFacade(\n    public readonly contractAddress: string,\n+   private readonly chainId: ChainId | number,\n    public readonly providerConnector: ProviderConnector,\n)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LimitOrderProtocolFacade.fillLimitOrder")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"fillOrderToWithPermit")," have more abilities now:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"fillOrderToWithPermit({\n    order,\n    signature,\n\n-   makerAmount,\n+   makingAmount,\n\n-   takerAmount,\n+   takingAmount,\n\n    thresholdAmount,\n    targetAddress,\n    permit,\n\n+   interaction = ZX,\n+   skipPermit = false,\n})\n")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"interaction")," is pre-interaction in fact."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"skipPermit")," wether to skip maker's permit evaluation if it was evaluated before.\nUseful if multiple orders was created with same nonce.","  Tip: you can just check if allowance exsists and then set it to ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),".")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"simulateCalls(addresses[], calldatas[]): Promise<boolean>")," no more avaible.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"simulate(address, calldata): Promise<{ success, rawResult }>")," was introduced insted, so you don't need ",(0,a.kt)("inlineCode",{parentName:"p"},"catch")," block anymore."))),(0,a.kt)("h3",{id:"the-limitorderbuilder"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"LimitOrderBuilder")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LimitOrderBuilder.buildLimitOrder")," have more abilities now:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"buildLimitOrder({\n    makerAssetAddress,\n    takerAssetAddress,\n    makerAddress,\n    receiver = ZERO_ADDRESS,\n-   takerAddress = ZERO_ADDRESS,\n+   allowedSender = ZERO_ADDRESS,\n\n-   makerAmount,\n+   makingAmount,\n\n-   takerAmount,\n+   takingAmount,\n\n    predicate = ZX,\n    permit = ZX,\n\n+   getMakingAmount,\n+   getTakingAmount,\n\n-   interaction = ZX,\n+   postInteraction = ZX,\n\n+   preInteraction = ZX,\n+   salt = this.generateSalt(),\n}: LimitOrderData)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"LimitOrderPredicateBuilder.timestampBelowAndNonceEquals")," was added to reduce gas.",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"-   const predicate = and(\n-       nonceEquals(\n-           walletAddress,\n-           currentNonce,\n-       ),\n-       timestampBelow(timestamp),\n-   );\n\n+   const predicate = timestampBelowAndNonceEquals(\n+       timestamp,\n+       currentNonce,\n+       walletAddress,\n+   );\n")))),(0,a.kt)("h3",{id:"the-limitorderpredicatebuilder"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"LimitOrderPredicateBuilder")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LimitOrderPredicateBuilder.arbitraryStaticCall")," was added to get values from other smartcontract.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"LimitOrderPredicateBuilder")," members ",(0,a.kt)("inlineCode",{parentName:"p"},"eq"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"lt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"gt"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nonceEquals")," no more have address arguments. Use ",(0,a.kt)("inlineCode",{parentName:"p"},"arbitraryStaticCall")," instead in case if you need read value from different smartcontract.\nEg:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"eq(\n    nonce,\n    arbitraryStaticCall(SIDE_NONCE_MANAGER_ADDRESS, callData),\n)\n")))),(0,a.kt)("h3",{id:"the-seriesnoncemanagerfacade"},"The ",(0,a.kt)("inlineCode",{parentName:"h3"},"SeriesNonceManagerFacade")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Was added to help you manage different groups of "cancel all" nonces')))}p.isMDXComponent=!0}}]);