(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3niX":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var i,s=n("q1tI");function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function a(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((i=n("SevZ"))&&i.__esModule?i:{default:i}).default),h=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=a(this,l(t).call(this,e))).prevProps={},n}var n,i,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,s.Component),n=t,r=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],n=e[1];return u.computeId(t,n)}).join(" ")}}],(i=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&o(n.prototype,i),r&&o(n,r),t}();t.default=h},"8oxB":function(e,t){var n,i,s=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"===typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,c=[],u=!1,h=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):h=-1,c.length&&d())}function d(){if(!u){var e=a(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++h<t;)l&&l[h].run();h=-1,t=c.length}l=null,u=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new f(e,t)),1!==c.length||u||a(d)},f.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=m,s.addListener=m,s.once=m,s.off=m,s.removeListener=m,s.removeAllListeners=m,s.emit=m,s.prependListener=m,s.prependOnceListener=m,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},"9kyW":function(e,t,n){"use strict";e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},CafY:function(e,t,n){"use strict";var i=n("q1tI"),s=n.n(i),r=n("MX0m"),o=n.n(r),a=n("YFqc"),l=n.n(a),c=s.a.createElement,u=function(){return c("header",{className:"jsx-2405817251"},c("ul",{className:"jsx-2405817251"},c("li",{className:"jsx-2405817251 logo"},c("img",{src:"/logo.svg",alt:"logo",className:"jsx-2405817251"})),c("li",{className:"jsx-2405817251"},c(l.a,{href:"/index"},c("a",{className:"jsx-2405817251 index"},"\u9996\u9875"))),c("li",{className:"jsx-2405817251"},c(l.a,{href:"/hosting"},c("a",{className:"jsx-2405817251 mine-h dark"},"\u77ff\u673a\u6258\u7ba1"))),c("li",{className:"jsx-2405817251"},c(l.a,{href:"/unfind"},c("a",{className:"jsx-2405817251 cloud-a dark"},"\u4e91\u7b97\u529b"))),c("li",{className:"jsx-2405817251"},c(l.a,{href:"/unfind"},c("a",{className:"jsx-2405817251 mine-r dark"},"\u77ff\u673a\u79df\u8d41")))),c(o.a,{id:"2405817251"},["header.jsx-2405817251{width:100%;height:60px;background:rgba(18,77,255,1);}","ul.jsx-2405817251{list-style-type:none;margin:0;padding:0;overflow:hidden;}","li.jsx-2405817251{float:left;}","li.jsx-2405817251 a.jsx-2405817251{display:block;text-align:center;padding:19px 60px;-webkit-text-decoration:none;text-decoration:none;}",".logo.jsx-2405817251 img.jsx-2405817251{width:166px;height:24px;padding:18px 0px 18px 120px;}",".index.jsx-2405817251{width:32px;height:22px;font-size:16px;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:rgba(255,255,255,1);line-height:22px;padding:19px 0px 19px 60px;}",".dark.jsx-2405817251{font-size:16px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(255,255,255,0.65);}"]))},h=s.a.createElement,p=function(){return h("footer",{className:"jsx-2922910786"},h("div",{className:"jsx-2922910786 f-left"},h("div",{className:"jsx-2922910786 f-l-top"},h("ul",{className:"jsx-2922910786"},h("li",{className:"jsx-2922910786 f-logo"},h("img",{src:"/f-logo.svg",alt:"",className:"jsx-2922910786"})),h("li",{className:"jsx-2922910786 f-item f-phone"},h("img",{src:"/icon/phone.svg",alt:"",className:"jsx-2922910786"}),h("span",{className:"jsx-2922910786 f-font"},"\u8054\u7cfb\u7535\u8bdd 186 8888 8888")),h("li",{className:"jsx-2922910786 f-item"},h("img",{src:"/icon/email.svg",alt:"",className:"jsx-2922910786"}),h("span",{className:"jsx-2922910786 f-font"},"\u8054\u7cfb\u90ae\u7bb1 BTC@word.com")),h("li",{className:"jsx-2922910786 f-item f-telegram"},h("img",{src:"/icon/telegram.svg",alt:"",className:"jsx-2922910786"}),h("span",{className:"jsx-2922910786 f-font"},"Telegram "),h("button",{className:"jsx-2922910786"},"\u52a0\u5165\u7fa4\u7ec4")))),h("div",{className:"jsx-2922910786 f-l-bottom"},h("div",{className:"jsx-2922910786 f-line"}),h("span",{className:"jsx-2922910786 f-b"},"Copyright \xa9 2019 RabbitPool - \u9102ICP\u590716005435\u53f7-1 \u9102\u516c\u7f51\u5b89\u5907 \u9102\u516c\u7f51\u5b89\u5907 42018502001134\u53f7"),h("div",{className:"jsx-2922910786"}))),h("div",{className:"jsx-2922910786 f-right"}),h(o.a,{id:"2922910786"},["footer.jsx-2922910786{width:100%;height:217px;background:rgba(246,249,252,1);box-shadow:0px 1px 0px 0px rgba(0,0,0,0.04);}","ul.jsx-2922910786{list-style-type:none;margin:0;padding:0;overflow:hidden;}","li.jsx-2922910786{float:left;}",".f-left.jsx-2922910786{padding:64px 0px 60px 120px;}",".f-item.jsx-2922910786{padding:0px 23px 0px 77px;}",".f-font.jsx-2922910786{height:24px;font-size:12px;font-family:PingFangSC-Medium,PingFang SC;font-weight:500;color:rgba(138,148,166,1);line-height:24px;}",".f-logo.jsx-2922910786 img.jsx-2922910786{width:166px;height:24px;}",".f-telegram.jsx-2922910786 button.jsx-2922910786{width:68px;height:24px;background:rgba(248,68,68,1);box-shadow:0px 12px 25px -13px rgba(0,75,255,0.58);border-radius:4px;}","li.jsx-2922910786 a.jsx-2922910786{display:block;text-align:center;padding:19px 60px;-webkit-text-decoration:none;text-decoration:none;}",".f-line.jsx-2922910786{width:945px;height:1px;background:rgba(0,0,0,0.06);}",".f-b.jsx-2922910786{width:539px;height:24px;font-size:12px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(138,148,166,1);line-height:24px;padding-top:20px;display:block;}"]))},d=s.a.createElement,f={};t.a=function(e){return d("div",{style:f},d(u,null),e.children,d(p,null),d("style",null,"\n    body {\n      margin: 0;\n    }\n  "))}},MX0m:function(e,t,n){e.exports=n("3niX")},SevZ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n("9kyW")),s=r(n("bVZc"));function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.styleSheet,i=void 0===n?null:n,r=t.optimizeForSpeed,o=void 0!==r&&r,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=i||new s.default({name:"styled-jsx",optimizeForSpeed:o}),this._sheet.inject(),i&&"boolean"===typeof o&&(this._sheet.setOptimizeForSpeed(o),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,n,r;return t=e,(n=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var n=this.getIdAndRules(e),i=n.styleId,s=n.rules;if(i in this._instancesCounts)this._instancesCounts[i]+=1;else{var r=s.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[i]=r,this._instancesCounts[i]=1}}},{key:"remove",value:function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(n in this._instancesCounts,"styleId: `".concat(n,"` not found")),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var i=this._fromServer&&this._fromServer[n];i?(i.parentNode.removeChild(i),delete this._fromServer[n]):(this._indices[n].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[n]),delete this._instancesCounts[n]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return n[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,n){if(!n)return"jsx-".concat(t);var s=String(n),r=t+s;return e[r]||(e[r]="jsx-".concat((0,i.default)("".concat(t,"-").concat(s)))),e[r]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(n,i){this._isBrowser||(i=i.replace(/\/style/gi,"\\/style"));var s=n+i;return t[s]||(t[s]=i.replace(e,n)),t[s]}}},{key:"getIdAndRules",value:function(e){var t=this,n=e.children,i=e.dynamic,s=e.id;if(i){var r=this.computeId(s,i);return{styleId:r,rules:Array.isArray(n)?n.map(function(e){return t.computeSelector(r,e)}):[this.computeSelector(r,n)]}}return{styleId:this.computeId(s),rules:Array.isArray(n)?n:[n]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&o(t.prototype,n),r&&o(t,r),e}();t.default=a},bVZc:function(e,t,n){"use strict";(function(e){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=e.env&&!0,s=function(e){return"[object String]"===Object.prototype.toString.call(e)},r=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.name,r=void 0===n?"stylesheet":n,a=t.optimizeForSpeed,l=void 0===a?i:a,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o(s(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#".concat(r,"-deleted-rule____{}"),o("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var h=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=h?h.getAttribute("content"):null}var t,r,a;return t=e,(r=[{key:"setOptimizeForSpeed",value:function(e){o("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),o(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(o(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(o(s(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(a){return i||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(r){i||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),n.insertRule(this._deletedRulePlaceholder,e)}}else{var s=this._tags[e];o(s,"old rule at index `".concat(e,"` not found")),s.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];o(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,n){return n?t=t.concat(e.getSheetForTag(n).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,n){t&&o(s(t),"makeStyleTag acceps only strings as second parameter");var i=document.createElement("style");this._nonce&&i.setAttribute("nonce",this._nonce),i.type="text/css",i.setAttribute("data-".concat(e),""),t&&i.appendChild(document.createTextNode(t));var r=document.head||document.getElementsByTagName("head")[0];return n?r.insertBefore(i,n):r.appendChild(i),i}},{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,r),a&&n(t,a),e}();function o(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=r}).call(this,n("8oxB"))},c6rJ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hosting",function(){return n("vMZa")}])},vMZa:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),s=n.n(i),r=n("CafY"),o=n("MX0m"),a=n.n(o),l=s.a.createElement,c=function(){return l("powerbar",{className:"jsx-3168308291"},l("div",{className:"jsx-3168308291 pban"},l("div",{className:"jsx-3168308291 pban-reg"},l("div",{className:"jsx-3168308291 pban-title"},"\u56fd\u5185\u77ff\u673a\u6258\u7ba1\u7535\u4ef7"),l("div",{className:"jsx-3168308291 pban-sum"},l("div",{className:"jsx-3168308291"},"\u4e30\u6c34\u671f\uff1a0.25/\u5ea6"),l("div",{className:"jsx-3168308291"},"\u5168\u5e74\u7535\uff1a0.38/\u5ea6"),l("div",{className:"jsx-3168308291"},"\u5408\u540c\u8981\u6c42: \u9884\u4ed8\u4e00\u4e2a\u6708\u5ea6\u7535\u8d39"),l("div",{className:"jsx-3168308291 content"},"\u56fd\u5185\u9ad8\u7b97\u529b\u77ff\u673a\u6258\u7ba1\uff1a\u8682\u8681\u77ff\u673a\u6258\u7ba1\uff0c\u963f\u74e6\u9686\u77ff\u673a\uff0c\u795e\u9a6c\u77ff\u673a\uff0c\u82af\u52a8\u77ff\u673a\u6258\u7ba1")))),l(a.a,{id:"3168308291"},[".pban.jsx-3168308291{height:480px;background:url('/banner.jpg') no-repeat;overflow:hidden;background-size:100% 480px;}",".pban-reg.jsx-3168308291{padding:70px 0px 0px 120px;}",".pban-title.jsx-3168308291{width:400px;height:60px;font-size:48px;font-family:PingFangSC-Semibold,PingFang SC;font-weight:600;color:rgba(255,255,255,1);line-height:60px;-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}",".pban-sum.jsx-3168308291{height:34px;font-size:24px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(255,255,255,1);line-height:34px;padding-top:60px;}",".pban-sum.jsx-3168308291 .content.jsx-3168308291{width:436px;height:52px;font-size:16px;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(255,255,255,1);line-height:26px;}"]))},u=s.a.createElement,h=function(e){var t=e.leftCoin,n=e.rightCoin,i=e.titleCol,s=e.title,r=e.style;return u("div",{className:"t-reg",style:r},u("img",{className:"t-leftCoin",src:t,alt:""}),u("span",{className:"t-title",style:i},s),u("img",{className:"t-rightCoin",src:n,alt:""}),u("div",{className:"t-summary"},e.summary),u("style",null,"\n        body {\n          margin: 0;\n        }\n        .t-leftCoin {\n           height:23px;\n           width:29px;\n        }\n         .t-rightCoin {\n           height:22px;\n           width:27px;\n        }\n        .t-reg {\n           width:293px;\n           height:82px;\n           display: block;\n           margin:0 auto;\n        }\n        .t-title {\n          height:50px;\n          font-size:36px;\n          font-family:PingFangSC-Medium,PingFang SC;\n          font-weight:500;\n          line-height:50px;\n          letter-spacing:1px;\n        }\n        .t-summary {\n            height:22px;\n            font-size:16px;\n            font-family:PingFangSC-Regular,PingFang SC;\n            font-weight:400;\n            color:rgba(153,153,153,1);\n            line-height:22px;\n            padding-top:10px;\n            text-align:center;\n        }\n      "))},p=s.a.createElement,d=function(e){var t=e.data,n=t.mainCoin,i=t.mainTitle,s=t.summary,r=t.style,o=t.isShowGuide;return p("div",null,p("div",{className:"wi-reg",style:r},p("img",{className:"wi-coin",src:n,alt:""}),p("div",{className:"wi-title"},i),p("div",{className:"wi-summary"},s)),function(e){if(e)return p("div",{className:"guide"},p("img",{src:"/icon/guide.svg",alt:"guide"}))}(o),p("style",null,"\n        body {\n          margin: 0;\n        }\n        .wi-coin {\n          width:80px;\n          height:80px;\n          margin: 0 auto;\n          display: block;\n        }\n        .wi-reg {\n          height:155px;\n          width:235px;\n        }\n        .wi-title {\n          height:25px;\n          font-size:18px;\n          font-family:PingFangSC-Medium,PingFang SC;\n          font-weight:500;\n          color:rgba(51,51,51,1);\n          padding-top:20px;\n          text-align:center;\n        }\n        .wi-summary {\n          height:20px;\n          font-size:14px;\n          font-family:PingFangSC-Regular,PingFang SC;\n          font-weight:400;\n          color:rgba(153,153,153,1);\n          padding-top:10px;\n          text-align:center;\n        }\n        .guide {\n          float:left;\n          width:60px;\n          height:155px;\n          text-align: center;\n          vertical-align:middle;\n          line-height:200px;\n        }\n        .guide img{\n          width:60px;\n          height:60px;\n          vertical-align: middle\n          display: inline-block; \n        }\n      "))},f=(s.a.createElement,s.a.createElement),m={color:"rgba(96,90,254,1)"},g={paddingTop:"100px"},x=[{mainCoin:"/icon/workfall1.svg",mainTitle:"\u8d2d\u4e70\u77ff\u673a",summary:"\u9009\u62e9\u77ff\u673a\u7684\u6258\u7ba1\u670d\u52a1",isShowGuide:!0,style:{float:"left"}},{mainCoin:"/icon/workfall2.svg",mainTitle:"\u7b49\u5f85\u53d1\u8d27",summary:"\u7b49\u5f85\u77ff\u673a\u8fd0\u5230\u77ff\u573a",isShowGuide:!0,style:{float:"left"}},{mainCoin:"/icon/workfall3.svg",mainTitle:"\u77ff\u673a\u5230\u8d27",summary:"\u7531\u6280\u672f\u4eba\u5458\u90e8\u7f72\u77ff\u673a\u6258\u7ba1\u4e0a\u67b6",isShowGuide:!0,style:{float:"left"}},{mainCoin:"/icon/workfall4.svg",mainTitle:"\u5f00\u59cb\u6316\u77ff",summary:"\u83b7\u5f97\u77ff\u673a\u6316\u77ff\u6536\u76ca",style:{float:"left"}}],v=function(){return f("hosting",{className:"jsx-1814528972"},f("div",{className:"jsx-1814528972"},f("div",{className:"jsx-1814528972"},f(h,{leftCoin:"/1-right.png",rightCoin:"1-left.png",title:"\u77ff\u673a\u6258\u7ba1\u6d41\u7a0b",summary:"\u7b80\u5355\u56db\u6b65\uff0c\u8f7b\u677e\u6258\u7ba1\u77ff\u673a",titleCol:m,style:g}),f("div",{className:"jsx-1814528972 content"},x.map(function(e,t){return f(d,{data:e})})))),f(a.a,{id:"1814528972"},["hosting.jsx-1814528972{width:1440px;height:477px;background:rgba(246,249,252,1);box-shadow:0px -1px 0px 0px rgba(0,0,0,0.04);}","hosting.jsx-1814528972 .content.jsx-1814528972{width:1120px;height:155px;padding:40px 160px 100px 160px;clear:both;}"]))},y=s.a.createElement,_={color:"rgba(62,207,142,1)"},w={paddingTop:"100px"},b=function(e){return y("div",null,y(h,{leftCoin:"/3-right.png",rightCoin:"3-left.png",title:"\u77ff\u573a\u5b9e\u666f\u56fe",summary:"\u5927\u578b\u77ff\u573a,\u4e13\u4e1a\u7684\u77ff\u673a\u6258\u7ba1\u4e2d\u5fc3",titleCol:_,style:w}),y("div",{className:"view-list"},y("img",{src:"/img/view01.png",alt:""}),y("img",{src:"/img/view02.png",alt:""}),y("img",{src:"/img/view03.png",alt:""}),y("img",{src:"/img/view04.png",alt:""}),y("img",{src:"/img/view05.png",alt:""}),y("img",{src:"/img/view06.png",alt:""})),y("style",null,"\n    .view-list {\n      padding-left: 160px;\n    }\n    .view-list img {\n       margin:40px 20px 20px 20px;\n    }\n    .view-list img {\n        width:348px;\n        height:200px;\n        box-shadow:0px 19px 96px -32px rgba(0,0,0,0.41);\n        border-radius:22px;\n        border:1px solid rgba(0,0,0,0.04);\n    }\n  "))};n.d(t,"default",function(){return j});var S=s.a.createElement;function j(){return S(r.a,null,S(c,null),S(v,null),S(b,null))}}},[["c6rJ",1,0]]]);