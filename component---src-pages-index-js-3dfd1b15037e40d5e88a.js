(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{8385:function(e,t,n){var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,l=/^0o[0-7]+$/i,s=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,f=u||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,h=Math.min,m=function(){return f.Date.now()};function v(e,t,n){var r,i,a,l,s,u,c=0,f=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=r,o=i;return r=i=void 0,c=t,l=e.apply(o,n)}function w(e){return c=e,s=setTimeout(O,t),f?b(e):l}function E(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=a}function O(){var e=m();if(E(e))return C(e);s=setTimeout(O,function(e){var n=t-(e-u);return d?h(n,a-(e-c)):n}(e))}function C(e){return s=void 0,v&&r?b(e):(r=i=void 0,l)}function S(){var e=m(),n=E(e);if(r=arguments,i=this,u=e,n){if(void 0===s)return w(u);if(d)return s=setTimeout(O,t),b(u)}return void 0===s&&(s=setTimeout(O,t)),l}return t=g(t)||0,y(n)&&(f=!!n.leading,a=(d="maxWait"in n)?p(g(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==s&&clearTimeout(s),c=0,r=u=i=s=void 0},S.flush=function(){return void 0===s?l:C(m())},S}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=a.test(e);return n||l.test(e)?s(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})}},7290:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=a(n(7294)),i=a(n(5907));function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),t}(r.default.Component);t.default=(0,i.default)(u)},1957:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=s(n(7294)),a=s(n(7371)),l=s(n(5697));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=function(e){function t(){return u(this,t),c(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this,t=o({},this.props);return t.parentBindings&&delete t.parentBindings,i.default.createElement("div",o({},t,{ref:function(t){e.props.parentBindings.domNode=t}}),this.props.children)}}]),t}(i.default.Component);f.propTypes={name:l.default.string,id:l.default.string},t.default=(0,a.default)(f)},5883:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n(7294)),r=i(n(5907));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var s=function(e){function t(){var e,n,r;a(this,t);for(var i=arguments.length,s=Array(i),u=0;u<i;u++)s[u]=arguments[u];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},l(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t}(o.default.Component);t.default=(0,r.default)(s)},2349:function(e,t,n){"use strict";t.rU=void 0;var o=p(n(5883)),r=p(n(7290)),i=p(n(1957)),a=p(n(332)),l=p(n(8638)),s=p(n(7614)),u=p(n(1450)),c=p(n(5907)),f=p(n(7371)),d=p(n(4627));function p(e){return e&&e.__esModule?e:{default:e}}t.rU=o.default,r.default,i.default,a.default,l.default,s.default,u.default,c.default,f.default,d.default,o.default,r.default,i.default,a.default,l.default,s.default,u.default,c.default,f.default,d.default},4627:function(e,t,n){"use strict";var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(7294),u=(n(3935),n(1719),n(7614)),c=n(332),f=n(5697),d=n(1521),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number},h={Scroll:function(e,t){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=t||c,f=function(t){function c(e){i(this,c);var t=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,e));return h.call(t),t.state={active:!1},t}return l(c,t),r(c,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();u.isMounted(e)||u.mount(e,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,e)),this.props.spy&&u.addStateHandler(this.stateHandler),u.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){u.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,s.createElement(e,n)}}]),c}(s.Component),h=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.stateHandler=function(){n.getActiveLink()!==e.props.to&&(null!==e.state&&e.state.active&&e.props.onSetInactive&&e.props.onSetInactive(),e.setState({active:!1}))},this.spyHandler=function(t){var o=e.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var r=e.props.to,i=null,a=0,l=0,s=0;if(o.getBoundingClientRect)s=o.getBoundingClientRect().top;if(!i||e.props.isDynamic){if(!(i=n.get(r)))return;var c=i.getBoundingClientRect();l=(a=c.top-s+t)+c.height}var f=t-e.props.offset,p=f>=Math.floor(a)&&f<Math.floor(l),h=f<Math.floor(a)||f>=Math.floor(l),m=n.getActiveLink();return h?(r===m&&n.setActiveLink(void 0),e.props.hashSpy&&d.getHash()===r&&d.changeHash(),e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive()),u.updateStates()):p&&m!==r?(n.setActiveLink(r),e.props.hashSpy&&d.changeHash(r),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(r)),u.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(e){console.warn("Helpers.Element is deprecated since v1.7.0");var t=function(t){function n(e){i(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return l(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(e){c.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return s.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(s.Component);return t.propTypes={name:f.string,id:f.string},t}};e.exports=h},1450:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=(l(n(1719)),l(n(9239))),i=l(n(8150)),a=l(n(8638));function l(e){return e&&e.__esModule?e:{default:e}}var s=function(e){return r.default[e.smooth]||r.default.defaultEasing},u=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(e,t,n){window.setTimeout(e,n||1e3/60,(new Date).getTime())},c=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollLeft;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},d=function e(t,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:t(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var i=e.bind(null,t,n);u.call(window,i)}else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPosition);else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPositionY)},p=function(e){e.data.containerElement=e?e.containerId?document.getElementById(e.containerId):e.container&&e.container.nodeType?e.container:document:null},h=function(e,t,n,o){if(t.data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(t.data.delayTimeout),i.default.subscribe((function(){t.data.cancel=!0})),p(t),t.data.start=null,t.data.cancel=!1,t.data.startPosition=t.horizontal?c(t):f(t),t.data.targetPosition=t.absolute?e:e+t.data.startPosition,t.data.startPosition!==t.data.targetPosition){var r;t.data.delta=Math.round(t.data.targetPosition-t.data.startPosition),t.data.duration=("function"==typeof(r=t.duration)?r:function(){return r})(t.data.delta),t.data.duration=isNaN(parseFloat(t.data.duration))?1e3:parseFloat(t.data.duration),t.data.to=n,t.data.target=o;var l=s(t),h=d.bind(null,l,t);t&&t.delay>0?t.data.delayTimeout=window.setTimeout((function(){a.default.registered.begin&&a.default.registered.begin(t.data.to,t.data.target),u.call(window,h)}),t.delay):(a.default.registered.begin&&a.default.registered.begin(t.data.to,t.data.target),u.call(window,h))}else a.default.registered.end&&a.default.registered.end(t.data.to,t.data.target,t.data.currentPosition)},m=function(e){return(e=o({},e)).data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},e.absolute=!0,e};t.default={animateTopScroll:h,getAnimationType:s,scrollToTop:function(e){h(0,m(e))},scrollToBottom:function(e){e=m(e),p(e),h(e.horizontal?function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollWidth-t.offsetWidth;var n=document.body,o=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)}(e):function(e){var t=e.data.containerElement;if(t&&t!==document&&t!==document.body)return t.scrollHeight-t.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(e),e)},scrollTo:function(e,t){h(e,m(t))},scrollMore:function(e,t){t=m(t),p(t);var n=t.horizontal?c(t):f(t);h(e+n,t)}}},8150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8139),r=["mousedown","mousewheel","touchmove","keydown"];t.default={subscribe:function(e){return"undefined"!=typeof document&&r.forEach((function(t){return(0,o.addPassiveEventListener)(document,t,e)}))}}},8139:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.addPassiveEventListener=function(e,t,n){var o=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t)}catch(n){}return e}();e.addEventListener(t,n,!!o&&{passive:!0})},t.removePassiveEventListener=function(e,t,n){e.removeEventListener(t,n)}},7371:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=s(n(7294)),a=(s(n(3935)),s(n(332))),l=s(n(5697));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.childBindings={domNode:null},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(e){this.props.name!==e.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;a.default.unregister(this.props.name)}},{key:"registerElems",value:function(e){a.default.register(e,this.childBindings.domNode)}},{key:"render",value:function(){return i.default.createElement(e,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(i.default.Component);return t.propTypes={name:l.default.string,id:l.default.string},t}},8638:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(e,t){n.registered[e]=t},remove:function(e){n.registered[e]=null}}};t.default=n},1521:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(8139);var o,r=n(1719),i=(o=r)&&o.__esModule?o:{default:o};var a={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(e){this.scroller=e,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(e,t){this.containers[e]=t},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var e=this,t=this.getHash();t?window.setTimeout((function(){e.scrollTo(t,!0),e.initialized=!0}),10):this.initialized=!0},scrollTo:function(e,t){var n=this.scroller;if(n.get(e)&&(t||e!==n.getActiveLink())){var o=this.containers[e]||document;n.scrollTo(e,{container:o})}},getHash:function(){return i.default.getHash()},changeHash:function(e,t){this.isInitialized()&&i.default.getHash()!==e&&i.default.updateHash(e,t)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};t.default=a},5907:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=c(n(7294)),a=c(n(7614)),l=c(n(332)),s=c(n(5697)),u=c(n(1521));function c(e){return e&&e.__esModule?e:{default:e}}var f={to:s.default.string.isRequired,containerId:s.default.string,container:s.default.object,activeClass:s.default.string,spy:s.default.bool,horizontal:s.default.bool,smooth:s.default.oneOfType([s.default.bool,s.default.string]),offset:s.default.number,delay:s.default.number,isDynamic:s.default.bool,onClick:s.default.func,duration:s.default.oneOfType([s.default.number,s.default.func]),absolute:s.default.bool,onSetActive:s.default.func,onSetInactive:s.default.func,ignoreCancelEvents:s.default.bool,hashSpy:s.default.bool,saveHashHistory:s.default.bool,spyThrottle:s.default.number};t.default=function(e,t){var n=t||l.default,s=function(t){function l(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(l.__proto__||Object.getPrototypeOf(l)).call(this,e));return c.call(t),t.state={active:!1},t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(l,t),r(l,[{key:"getScrollSpyContainer",value:function(){var e=this.props.containerId,t=this.props.container;return e&&!t?document.getElementById(e):t&&t.nodeType?t:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var e=this.getScrollSpyContainer();a.default.isMounted(e)||a.default.mount(e,this.props.spyThrottle),this.props.hashSpy&&(u.default.isMounted()||u.default.mount(n),u.default.mapContainer(this.props.to,e)),a.default.addSpyHandler(this.spyHandler,e),this.setState({container:e})}}},{key:"componentWillUnmount",value:function(){a.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var t="";t=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in f)n.hasOwnProperty(r)&&delete n[r];return n.className=t,n.onClick=this.handleClick,i.default.createElement(e,n)}}]),l}(i.default.PureComponent),c=function(){var e=this;this.scrollTo=function(t,r){n.scrollTo(t,o({},e.state,r))},this.handleClick=function(t){e.props.onClick&&e.props.onClick(t),t.stopPropagation&&t.stopPropagation(),t.preventDefault&&t.preventDefault(),e.scrollTo(e.props.to,e.props)},this.spyHandler=function(t,o){var r=e.getScrollSpyContainer();if(!u.default.isMounted()||u.default.isInitialized()){var i=e.props.horizontal,a=e.props.to,l=null,s=void 0,c=void 0;if(i){var f=0,d=0,p=0;if(r.getBoundingClientRect)p=r.getBoundingClientRect().left;if(!l||e.props.isDynamic){if(!(l=n.get(a)))return;var h=l.getBoundingClientRect();d=(f=h.left-p+t)+h.width}var m=t-e.props.offset;s=m>=Math.floor(f)&&m<Math.floor(d),c=m<Math.floor(f)||m>=Math.floor(d)}else{var v=0,y=0,g=0;if(r.getBoundingClientRect)g=r.getBoundingClientRect().top;if(!l||e.props.isDynamic){if(!(l=n.get(a)))return;var b=l.getBoundingClientRect();y=(v=b.top-g+o)+b.height}var w=o-e.props.offset;s=w>=Math.floor(v)&&w<Math.floor(y),c=w<Math.floor(v)||w>=Math.floor(y)}var E=n.getActiveLink();if(c){if(a===E&&n.setActiveLink(void 0),e.props.hashSpy&&u.default.getHash()===a){var O=e.props.saveHashHistory,C=void 0!==O&&O;u.default.changeHash("",C)}e.props.spy&&e.state.active&&(e.setState({active:!1}),e.props.onSetInactive&&e.props.onSetInactive(a,l))}if(s&&(E!==a||!1===e.state.active)){n.setActiveLink(a);var S=e.props.saveHashHistory,T=void 0!==S&&S;e.props.hashSpy&&u.default.changeHash(a,T),e.props.spy&&(e.setState({active:!0}),e.props.onSetActive&&e.props.onSetActive(a,l))}}}};return s.propTypes=f,s.defaultProps={offset:0},s}},7614:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,r=n(8385),i=(o=r)&&o.__esModule?o:{default:o},a=n(8139);var l={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(e,t){if(e){var n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,i.default)(e,t)}((function(t){l.scrollHandler(e)}),t);l.scrollSpyContainers.push(e),(0,a.addPassiveEventListener)(e,"scroll",n)}},isMounted:function(e){return-1!==l.scrollSpyContainers.indexOf(e)},currentPositionX:function(e){if(e===document){var t=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return e.scrollLeft},currentPositionY:function(e){if(e===document){var t=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return t?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return e.scrollTop},scrollHandler:function(e){(l.scrollSpyContainers[l.scrollSpyContainers.indexOf(e)].spyCallbacks||[]).forEach((function(t){return t(l.currentPositionX(e),l.currentPositionY(e))}))},addStateHandler:function(e){l.spySetState.push(e)},addSpyHandler:function(e,t){var n=l.scrollSpyContainers[l.scrollSpyContainers.indexOf(t)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(e),e(l.currentPositionX(t),l.currentPositionY(t))},updateStates:function(){l.spySetState.forEach((function(e){return e()}))},unmount:function(e,t){l.scrollSpyContainers.forEach((function(e){return e.spyCallbacks&&e.spyCallbacks.length&&e.spyCallbacks.splice(e.spyCallbacks.indexOf(t),1)})),l.spySetState&&l.spySetState.length&&l.spySetState.splice(l.spySetState.indexOf(e),1),document.removeEventListener("scroll",l.scrollHandler)},update:function(){return l.scrollSpyContainers.forEach((function(e){return l.scrollHandler(e)}))}};t.default=l},332:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=l(n(1719)),i=l(n(1450)),a=l(n(8638));function l(e){return e&&e.__esModule?e:{default:e}}var s={},u=void 0;t.default={unmount:function(){s={}},register:function(e,t){s[e]=t},unregister:function(e){delete s[e]},get:function(e){return s[e]||document.getElementById(e)||document.getElementsByName(e)[0]||document.getElementsByClassName(e)[0]},setActiveLink:function(e){return u=e},getActiveLink:function(){return u},scrollTo:function(e,t){var n=this.get(e);if(n){var l=(t=o({},t,{absolute:!1})).containerId,s=t.container,u=void 0;u=l?document.getElementById(l):s&&s.nodeType?s:document,t.absolute=!0;var c=t.horizontal,f=r.default.scrollOffset(u,n,c)+(t.offset||0);if(!t.smooth)return a.default.registered.begin&&a.default.registered.begin(e,n),u===document?t.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):u.scrollTop=f,void(a.default.registered.end&&a.default.registered.end(e,n));i.default.animateTopScroll(f,t,e,n)}else console.warn("target Element not found")}}},9239:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={defaultEasing:function(e){return e<.5?Math.pow(2*e,2)/2:1-Math.pow(2*(1-e),2)/2},linear:function(e){return e},easeInQuad:function(e){return e*e},easeOutQuad:function(e){return e*(2-e)},easeInOutQuad:function(e){return e<.5?2*e*e:(4-2*e)*e-1},easeInCubic:function(e){return e*e*e},easeOutCubic:function(e){return--e*e*e+1},easeInOutCubic:function(e){return e<.5?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1},easeInQuart:function(e){return e*e*e*e},easeOutQuart:function(e){return 1- --e*e*e*e},easeInOutQuart:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e},easeInQuint:function(e){return e*e*e*e*e},easeOutQuint:function(e){return 1+--e*e*e*e*e},easeInOutQuint:function(e){return e<.5?16*e*e*e*e*e:1+16*--e*e*e*e*e}}},1719:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t){for(var n=e.offsetTop,o=e.offsetParent;o&&!t(o);)n+=o.offsetTop,o=o.offsetParent;return{offsetTop:n,offsetParent:o}};t.default={updateHash:function(e,t){var n=0===e.indexOf("#")?e.substring(1):e,o=n?"#"+n:"",r=window&&window.location,i=o?r.pathname+r.search+o:r.pathname+r.search;t?history.pushState(history.state,"",i):history.replaceState(history.state,"",i)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(e){return function(t){return e.contains?e!=t&&e.contains(t):!!(16&e.compareDocumentPosition(t))}},scrollOffset:function(e,t,o){if(o)return e===document?t.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(e).position?t.offsetLeft:t.offsetLeft-e.offsetLeft;if(e===document)return t.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(e).position){if(t.offsetParent!==e){var r=n(t,(function(t){return t===e||t===document})),i=r.offsetTop;if(r.offsetParent!==e)throw new Error("Seems containerElement is not an ancestor of the Element");return i}return t.offsetTop}if(t.offsetParent===e.offsetParent)return t.offsetTop-e.offsetTop;var a=function(e){return e===document};return n(t,a).offsetTop-n(e,a).offsetTop}}},66:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return C}});var o=n(7294),r=(n(5444),n(7198),n(1721)),i=1440,a=240,l=[[0,"#0a0c10"],[244.8,"#1a222b"],[302.4,"#8291b3"],[518.4,"#7cbbeb"],[864,"#7cbbeb"],[936,"#f8ce9c"],[1065.6,"#f08784"],[1123.2,"#8b666e"],[1238.4,"#323039"],[1440,"#0a0c10"]];function s(e){return e*(Math.PI/180)}console.log(l);var u=function(e){function t(t){var n,r=(n=e.call(this,t)||this).props,i=r.initialTime;r.minTime,r.maxTime;return n.state={curTime:i,isClient:(!1).valueOf,offsetY:0},n.heroRef=o.createRef(),n}(0,r.Z)(t,e);var n=t.prototype;return n.handleChange=function(e){this.setState({curTime:e.target.value}),console.log("change handled")},n.render=function(){var e=this.props;e.initialTime,e.minTime,e.maxTime;return o.createElement("div",{id:"hero",ref:this.heroRef},o.createElement(o.Fragment,{key:this.state.isClient},o.createElement(c,{time:this.state.curTime,offsetY:this.state.offsetY})))},n.componentDidMount=function(){var e=this.props,t=e.initialTime;e.minTime,e.maxTime;window.addEventListener("scroll",this.handleScroll.bind(this)),this.setState({curTime:t,isClient:!0})},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll.bind(this))},n.handleScroll=function(){var e=document.documentElement.scrollTop;window.innerHeight;this.setState({offsetY:e})},t}(o.Component),c=function(e){for(var t=e.time,n=e.offsetY,r=parseInt(t),u=r+a,c=[],f=0;f<l.length;f++)if(r<=l[f][0]&&l[f][0]<=u){var d=(l[f][0]-r)/a*100;c.push([d,l[f][1]])}for(var p=l.length-1;p>=0;p--)if(r>l[p][0]){d=(l[p][0]-r)/a*100;c.unshift([d,l[p][1]]);break}for(var h=0;h<l.length;h++){if(u<l[h][0]){d=(l[h][0]-r)/a*100;c.push([d,l[h][1]]);break}if(u%i<l[h][0]){d=(1440+l[h][0]-r)/a*100;c.push([d,l[h][1]]);break}}for(var m="-webkit-linear-gradient("+String((r+120)/1440*180-90)+"deg",v=0;v<c.length;v++)m+=", "+c[v][1]+" "+c[v][0]+"%";m+=")";var y=r/1440*360-90,g=r/1440*360+90;return o.createElement(o.Fragment,null,o.createElement("div",{className:"hero-module--cityContainer--dx9M0",style:{background:m}},o.createElement("div",{className:"hero-module--title--tQ3nC"},o.createElement("img",{src:"./title.svg",alt:"Title"})),o.createElement("img",{className:"hero-module--city4--GNu4D",src:"./city-4.svg",alt:"City Component 4",style:{transform:"translateY("+.8*n+"px)"}}),o.createElement("img",{className:"hero-module--city3--rOCjJ",src:"./city-3.svg",alt:"City Component 3",style:{transform:"translateY("+.3*n+"px)"}}),o.createElement("img",{className:"hero-module--city2--+5jeB",src:"./city-2.svg",alt:"City Component 2",style:{transform:"translateY("+.5*n+"px)"}}),o.createElement("img",{className:"hero-module--city1--672sC",src:"./city-1.svg",alt:"City Component 1"}),o.createElement("img",{className:"hero-module--moon--i0jZ5",src:"./moon.svg",alt:"Moon",style:{top:100+100*Math.sin(s(-g))+"%",left:50+50*Math.cos(s(-g))+"%",transform:"translate(-50%, -50%) translateY("+.1*n+"px)"}}),o.createElement("img",{className:"hero-module--sun--3nRnN",src:"./sun.svg",alt:"Sun",style:{top:100+100*Math.sin(s(-y))+"%",left:50+50*Math.cos(s(-y))+"%",transform:"translate(-50%, -50%) translateY("+.1*n+"px)"}})))},f=u,d=n(7227),p=n(2349),h="navbar-module--activeTab--B0DFC",m="navbar-module--tabs--L+yL5",v=(n(3935),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={section:0,opacity:0,active:0},n.sections=["about","jobs","projects","gallery","contact"],n.idToState={about:1,jobs:2,projects:3,gallery:4,contact:5},n}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.addEventListener("scroll",this.handleScroll.bind(this));var t=new IntersectionObserver((function(t,n){t.forEach((function(t){t.isIntersecting&&(t.target.id in e.idToState?(e.setState({active:e.idToState[t.target.id]}),console.log("smth happened")):console.log("key not found"))}))}),{threshold:.5});document.querySelectorAll(".section").forEach((function(e){t.observe(e)})),console.log(document.querySelectorAll(".section"))},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll.bind(this))},n.handleScroll=function(){var e=document.documentElement.scrollTop/window.innerHeight*-30+25,t=1/(1+Math.pow(Math.E,e));this.setState({opacity:t})},n.render=function(){return o.createElement("div",{className:"navbar-module--navbarContainer--ZyUEE",style:{opacity:""+this.state.opacity}},o.createElement("ul",{className:"navbar-module--navbarList--UV+74"},o.createElement("li",null,o.createElement("button",{className:1===this.state.active?h:m},o.createElement(p.rU,{to:"about",spy:!0,smooth:!0,offset:-80,duration:500}," ABOUT "))),o.createElement("li",null,o.createElement("button",{className:2===this.state.active?h:m},o.createElement(p.rU,{to:"jobs",spy:!0,smooth:!0,offset:-80,duration:500}," EXPERIENCE "))),o.createElement("li",null,o.createElement("button",{className:3===this.state.active?h:m},o.createElement(p.rU,{to:"projects",spy:!0,smooth:!0,offset:-80,duration:500}," PROJECTS "))),o.createElement("li",null,o.createElement("button",{className:4===this.state.active?h:m},o.createElement(p.rU,{to:"gallery",spy:!0,smooth:!0,offset:-80,duration:500}," GALLERY "))),o.createElement("li",null,o.createElement("button",{className:5===this.state.active?h:m},o.createElement(p.rU,{to:"contact",spy:!0,smooth:!0,offset:-80,duration:500}," CONTACT ")))))},t}(o.Component)),y=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"jobs"},o.createElement("h1",null,"Experience"))},g=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"gallery"},o.createElement("h1",null,"Gallery"))},b=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"contact"},o.createElement("h1",null,"Contact"))},w=function(){return o.createElement("div",{className:"section about-module--aboutContainer--Vh1+I",id:"about"},o.createElement("h1",null,"About Me"),o.createElement("p",null,"Hello! I'm Kenneth, a MaCS student at William Mackenzie CI."),o.createElement("p",null,"I love innovating and bringing new ideas to the table. Anything that involves creativity is my cup of tea! Whether it be graphic design, creating events or doing hackathons. My goal is always to build inventive and impactful projects."),o.createElement("p",null,"Coding is a passion of mine. You can often find me participating in coding competitions and hackathons. The atmosphere and amazing people you meet is a special experience in itself."),o.createElement("p",null,"Outside of tech, I spend my free-time playing badminton or I may be sitting down to watch an NBA game. I adore both sports and I even compete in the ",o.createElement("a",{href:"http://www.badmintonontario.ca/",target:"_blank",className:"bio-link"}," Ontario Badminton League! ")),o.createElement("p",null,"Here are a few technologies I've worked with before:"),o.createElement("ul",{className:"about-module--skillsList--AKfAw"},o.createElement("li",null," Python "),o.createElement("li",null," Java "),o.createElement("li",null," C & C++ "),o.createElement("li",null," Tensorflow "),o.createElement("li",null," Flask "),o.createElement("li",null," React "),o.createElement("li",null," HTML & CSS "),o.createElement("li",null," 8085 Assembly ")))},E=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"projects"},o.createElement("h1",null,"Projects"))},O=n(3751),C=function(){var e=new Date,t=60*e.getHours()+e.getMinutes();return o.createElement("div",null,o.createElement(O.Z,{title:"Home"}),o.createElement(f,{initialTime:t,minTime:1,maxTime:1440,id:"hero"}),o.createElement(d.Z,null),o.createElement(w,null),o.createElement(y,null),o.createElement(E,null),o.createElement(g,null),o.createElement(b,null),o.createElement(v,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-3dfd1b15037e40d5e88a.js.map