(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[678],{8385:function(t,e,n){var o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,c="object"==typeof self&&self&&self.Object===Object&&self,f=u||c||Function("return this")(),d=Object.prototype.toString,p=Math.max,h=Math.min,m=function(){return f.Date.now()};function v(t,e,n){var r,i,a,s,l,u,c=0,f=!1,d=!1,v=!0;if("function"!=typeof t)throw new TypeError(o);function b(e){var n=r,o=i;return r=i=void 0,c=e,s=t.apply(o,n)}function w(t){return c=t,l=setTimeout(C,e),f?b(t):s}function E(t){var n=t-u;return void 0===u||n>=e||n<0||d&&t-c>=a}function C(){var t=m();if(E(t))return O(t);l=setTimeout(C,function(t){var n=e-(t-u);return d?h(n,a-(t-c)):n}(t))}function O(t){return l=void 0,v&&r?b(t):(r=i=void 0,s)}function S(){var t=m(),n=E(t);if(r=arguments,i=this,u=t,n){if(void 0===l)return w(u);if(d)return l=setTimeout(C,e),b(u)}return void 0===l&&(l=setTimeout(C,e)),s}return e=g(e)||0,y(n)&&(f=!!n.leading,a=(d="maxWait"in n)?p(g(n.maxWait)||0,e):a,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=u=i=l=void 0},S.flush=function(){return void 0===l?s:O(m())},S}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function g(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=a.test(t);return n||s.test(t)?l(t.slice(2),n?2:8):i.test(t)?NaN:+t}t.exports=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(t,e,{leading:r,maxWait:e,trailing:i})}},7290:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=a(n(7294)),i=a(n(5907));function a(t){return t&&t.__esModule?t:{default:t}}function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function l(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var u=function(t){function e(){return s(this,e),l(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"render",value:function(){return r.default.createElement("input",this.props,this.props.children)}}]),e}(r.default.Component);e.default=(0,i.default)(u)},1957:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=l(n(7294)),a=l(n(7371)),s=l(n(5697));function l(t){return t&&t.__esModule?t:{default:t}}function u(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var f=function(t){function e(){return u(this,e),c(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"render",value:function(){var t=this,e=o({},this.props);return e.parentBindings&&delete e.parentBindings,i.default.createElement("div",o({},e,{ref:function(e){t.props.parentBindings.domNode=e}}),this.props.children)}}]),e}(i.default.Component);f.propTypes={name:s.default.string,id:s.default.string},e.default=(0,a.default)(f)},5883:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(n(7294)),r=i(n(5907));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=function(t){function e(){var t,n,r;a(this,e);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=r=s(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),r.render=function(){return o.default.createElement("a",r.props,r.props.children)},s(r,n)}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(o.default.Component);e.default=(0,r.default)(l)},2349:function(t,e,n){"use strict";e.rU=void 0;var o=p(n(5883)),r=p(n(7290)),i=p(n(1957)),a=p(n(332)),s=p(n(8638)),l=p(n(7614)),u=p(n(1450)),c=p(n(5907)),f=p(n(7371)),d=p(n(4627));function p(t){return t&&t.__esModule?t:{default:t}}e.rU=o.default,r.default,i.default,a.default,s.default,l.default,u.default,c.default,f.default,d.default,o.default,r.default,i.default,a.default,s.default,l.default,u.default,c.default,f.default,d.default},4627:function(t,e,n){"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var l=n(7294),u=(n(3935),n(1719),n(7614)),c=n(332),f=n(5697),d=n(1521),p={to:f.string.isRequired,containerId:f.string,container:f.object,activeClass:f.string,spy:f.bool,smooth:f.oneOfType([f.bool,f.string]),offset:f.number,delay:f.number,isDynamic:f.bool,onClick:f.func,duration:f.oneOfType([f.number,f.func]),absolute:f.bool,onSetActive:f.func,onSetInactive:f.func,ignoreCancelEvents:f.bool,hashSpy:f.bool,spyThrottle:f.number},h={Scroll:function(t,e){console.warn("Helpers.Scroll is deprecated since v1.7.0");var n=e||c,f=function(e){function c(t){i(this,c);var e=a(this,(c.__proto__||Object.getPrototypeOf(c)).call(this,t));return h.call(e),e.state={active:!1},e}return s(c,e),r(c,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();u.isMounted(t)||u.mount(t,this.props.spyThrottle),this.props.hashSpy&&(d.isMounted()||d.mount(n),d.mapContainer(this.props.to,t)),this.props.spy&&u.addStateHandler(this.stateHandler),u.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){u.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in p)n.hasOwnProperty(r)&&delete n[r];return n.className=e,n.onClick=this.handleClick,l.createElement(t,n)}}]),c}(l.Component),h=function(){var t=this;this.scrollTo=function(e,r){n.scrollTo(e,o({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.stateHandler=function(){n.getActiveLink()!==t.props.to&&(null!==t.state&&t.state.active&&t.props.onSetInactive&&t.props.onSetInactive(),t.setState({active:!1}))},this.spyHandler=function(e){var o=t.getScrollSpyContainer();if(!d.isMounted()||d.isInitialized()){var r=t.props.to,i=null,a=0,s=0,l=0;if(o.getBoundingClientRect)l=o.getBoundingClientRect().top;if(!i||t.props.isDynamic){if(!(i=n.get(r)))return;var c=i.getBoundingClientRect();s=(a=c.top-l+e)+c.height}var f=e-t.props.offset,p=f>=Math.floor(a)&&f<Math.floor(s),h=f<Math.floor(a)||f>=Math.floor(s),m=n.getActiveLink();return h?(r===m&&n.setActiveLink(void 0),t.props.hashSpy&&d.getHash()===r&&d.changeHash(),t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive()),u.updateStates()):p&&m!==r?(n.setActiveLink(r),t.props.hashSpy&&d.changeHash(r),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(r)),u.updateStates()):void 0}}};return f.propTypes=p,f.defaultProps={offset:0},f},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var e=function(e){function n(t){i(this,n);var e=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return s(n,e),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;c.unregister(this.props.name)}},{key:"registerElems",value:function(t){c.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return l.createElement(t,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(l.Component);return e.propTypes={name:f.string,id:f.string},e}};t.exports=h},1450:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=(s(n(1719)),s(n(9239))),i=s(n(8150)),a=s(n(8638));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(t){return r.default[t.smooth]||r.default.defaultEasing},u=function(){if("undefined"!=typeof window)return window.requestAnimationFrame||window.webkitRequestAnimationFrame}()||function(t,e,n){window.setTimeout(t,n||1e3/60,(new Date).getTime())},c=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollLeft;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageXOffset:o?document.documentElement.scrollLeft:document.body.scrollLeft},f=function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollTop;var n=void 0!==window.pageXOffset,o="CSS1Compat"===(document.compatMode||"");return n?window.pageYOffset:o?document.documentElement.scrollTop:document.body.scrollTop},d=function t(e,n,o){var r=n.data;if(n.ignoreCancelEvents||!r.cancel)if(r.delta=Math.round(r.targetPosition-r.startPosition),null===r.start&&(r.start=o),r.progress=o-r.start,r.percent=r.progress>=r.duration?1:e(r.progress/r.duration),r.currentPosition=r.startPosition+Math.ceil(r.delta*r.percent),r.containerElement&&r.containerElement!==document&&r.containerElement!==document.body?n.horizontal?r.containerElement.scrollLeft=r.currentPosition:r.containerElement.scrollTop=r.currentPosition:n.horizontal?window.scrollTo(r.currentPosition,0):window.scrollTo(0,r.currentPosition),r.percent<1){var i=t.bind(null,e,n);u.call(window,i)}else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPosition);else a.default.registered.end&&a.default.registered.end(r.to,r.target,r.currentPositionY)},p=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},h=function(t,e,n,o){if(e.data=e.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},window.clearTimeout(e.data.delayTimeout),i.default.subscribe((function(){e.data.cancel=!0})),p(e),e.data.start=null,e.data.cancel=!1,e.data.startPosition=e.horizontal?c(e):f(e),e.data.targetPosition=e.absolute?t:t+e.data.startPosition,e.data.startPosition!==e.data.targetPosition){var r;e.data.delta=Math.round(e.data.targetPosition-e.data.startPosition),e.data.duration=("function"==typeof(r=e.duration)?r:function(){return r})(e.data.delta),e.data.duration=isNaN(parseFloat(e.data.duration))?1e3:parseFloat(e.data.duration),e.data.to=n,e.data.target=o;var s=l(e),h=d.bind(null,s,e);e&&e.delay>0?e.data.delayTimeout=window.setTimeout((function(){a.default.registered.begin&&a.default.registered.begin(e.data.to,e.data.target),u.call(window,h)}),e.delay):(a.default.registered.begin&&a.default.registered.begin(e.data.to,e.data.target),u.call(window,h))}else a.default.registered.end&&a.default.registered.end(e.data.to,e.data.target,e.data.currentPosition)},m=function(t){return(t=o({},t)).data=t.data||{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null},t.absolute=!0,t};e.default={animateTopScroll:h,getAnimationType:l,scrollToTop:function(t){h(0,m(t))},scrollToBottom:function(t){t=m(t),p(t),h(t.horizontal?function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollWidth-e.offsetWidth;var n=document.body,o=document.documentElement;return Math.max(n.scrollWidth,n.offsetWidth,o.clientWidth,o.scrollWidth,o.offsetWidth)}(t):function(t){var e=t.data.containerElement;if(e&&e!==document&&e!==document.body)return e.scrollHeight-e.offsetHeight;var n=document.body,o=document.documentElement;return Math.max(n.scrollHeight,n.offsetHeight,o.clientHeight,o.scrollHeight,o.offsetHeight)}(t),t)},scrollTo:function(t,e){h(t,m(e))},scrollMore:function(t,e){e=m(e),p(e);var n=e.horizontal?c(e):f(e);h(t+n,e)}}},8150:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(8139),r=["mousedown","mousewheel","touchmove","keydown"];e.default={subscribe:function(t){return"undefined"!=typeof document&&r.forEach((function(e){return(0,o.addPassiveEventListener)(document,e,t)}))}}},8139:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.addPassiveEventListener=function(t,e,n){var o=function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(n){}return t}();t.addEventListener(e,n,!!o&&{passive:!0})},e.removePassiveEventListener=function(t,e,n){t.removeEventListener(e,n)}},7371:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=l(n(7294)),a=(l(n(3935)),l(n(332))),s=l(n(5697));function l(t){return t&&t.__esModule?t:{default:t}}e.default=function(t){var e=function(e){function n(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e.childBindings={domNode:null},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(n,e),r(n,[{key:"componentDidMount",value:function(){if("undefined"==typeof window)return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(t){this.props.name!==t.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if("undefined"==typeof window)return!1;a.default.unregister(this.props.name)}},{key:"registerElems",value:function(t){a.default.register(t,this.childBindings.domNode)}},{key:"render",value:function(){return i.default.createElement(t,o({},this.props,{parentBindings:this.childBindings}))}}]),n}(i.default.Component);return e.propTypes={name:s.default.string,id:s.default.string},e}},8638:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={registered:{},scrollEvent:{register:function(t,e){n.registered[t]=e},remove:function(t){n.registered[t]=null}}};e.default=n},1521:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(8139);var o,r=n(1719),i=(o=r)&&o.__esModule?o:{default:o};var a={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,e){this.containers[t]=e},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,e=this.getHash();e?window.setTimeout((function(){t.scrollTo(e,!0),t.initialized=!0}),10):this.initialized=!0},scrollTo:function(t,e){var n=this.scroller;if(n.get(t)&&(e||t!==n.getActiveLink())){var o=this.containers[t]||document;n.scrollTo(t,{container:o})}},getHash:function(){return i.default.getHash()},changeHash:function(t,e){this.isInitialized()&&i.default.getHash()!==t&&i.default.updateHash(t,e)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};e.default=a},5907:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=c(n(7294)),a=c(n(7614)),s=c(n(332)),l=c(n(5697)),u=c(n(1521));function c(t){return t&&t.__esModule?t:{default:t}}var f={to:l.default.string.isRequired,containerId:l.default.string,container:l.default.object,activeClass:l.default.string,spy:l.default.bool,horizontal:l.default.bool,smooth:l.default.oneOfType([l.default.bool,l.default.string]),offset:l.default.number,delay:l.default.number,isDynamic:l.default.bool,onClick:l.default.func,duration:l.default.oneOfType([l.default.number,l.default.func]),absolute:l.default.bool,onSetActive:l.default.func,onSetInactive:l.default.func,ignoreCancelEvents:l.default.bool,hashSpy:l.default.bool,saveHashHistory:l.default.bool,spyThrottle:l.default.number};e.default=function(t,e){var n=e||s.default,l=function(e){function s(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,s);var e=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,t));return c.call(e),e.state={active:!1},e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(s,e),r(s,[{key:"getScrollSpyContainer",value:function(){var t=this.props.containerId,e=this.props.container;return t&&!e?document.getElementById(t):e&&e.nodeType?e:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var t=this.getScrollSpyContainer();a.default.isMounted(t)||a.default.mount(t,this.props.spyThrottle),this.props.hashSpy&&(u.default.isMounted()||u.default.mount(n),u.default.mapContainer(this.props.to,t)),a.default.addSpyHandler(this.spyHandler,t),this.setState({container:t})}}},{key:"componentWillUnmount",value:function(){a.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var e="";e=this.state&&this.state.active?((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():this.props.className;var n=o({},this.props);for(var r in f)n.hasOwnProperty(r)&&delete n[r];return n.className=e,n.onClick=this.handleClick,i.default.createElement(t,n)}}]),s}(i.default.PureComponent),c=function(){var t=this;this.scrollTo=function(e,r){n.scrollTo(e,o({},t.state,r))},this.handleClick=function(e){t.props.onClick&&t.props.onClick(e),e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),t.scrollTo(t.props.to,t.props)},this.spyHandler=function(e,o){var r=t.getScrollSpyContainer();if(!u.default.isMounted()||u.default.isInitialized()){var i=t.props.horizontal,a=t.props.to,s=null,l=void 0,c=void 0;if(i){var f=0,d=0,p=0;if(r.getBoundingClientRect)p=r.getBoundingClientRect().left;if(!s||t.props.isDynamic){if(!(s=n.get(a)))return;var h=s.getBoundingClientRect();d=(f=h.left-p+e)+h.width}var m=e-t.props.offset;l=m>=Math.floor(f)&&m<Math.floor(d),c=m<Math.floor(f)||m>=Math.floor(d)}else{var v=0,y=0,g=0;if(r.getBoundingClientRect)g=r.getBoundingClientRect().top;if(!s||t.props.isDynamic){if(!(s=n.get(a)))return;var b=s.getBoundingClientRect();y=(v=b.top-g+o)+b.height}var w=o-t.props.offset;l=w>=Math.floor(v)&&w<Math.floor(y),c=w<Math.floor(v)||w>=Math.floor(y)}var E=n.getActiveLink();if(c){if(a===E&&n.setActiveLink(void 0),t.props.hashSpy&&u.default.getHash()===a){var C=t.props.saveHashHistory,O=void 0!==C&&C;u.default.changeHash("",O)}t.props.spy&&t.state.active&&(t.setState({active:!1}),t.props.onSetInactive&&t.props.onSetInactive(a,s))}if(l&&(E!==a||!1===t.state.active)){n.setActiveLink(a);var S=t.props.saveHashHistory,T=void 0!==S&&S;t.props.hashSpy&&u.default.changeHash(a,T),t.props.spy&&(t.setState({active:!0}),t.props.onSetActive&&t.props.onSetActive(a,s))}}}};return l.propTypes=f,l.defaultProps={offset:0},l}},7614:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,r=n(8385),i=(o=r)&&o.__esModule?o:{default:o},a=n(8139);var s={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,e){if(t){var n=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:66;return(0,i.default)(t,e)}((function(e){s.scrollHandler(t)}),e);s.scrollSpyContainers.push(t),(0,a.addPassiveEventListener)(t,"scroll",n)}},isMounted:function(t){return-1!==s.scrollSpyContainers.indexOf(t)},currentPositionX:function(t){if(t===document){var e=void 0!==window.pageYOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageXOffset:n?document.documentElement.scrollLeft:document.body.scrollLeft}return t.scrollLeft},currentPositionY:function(t){if(t===document){var e=void 0!==window.pageXOffset,n="CSS1Compat"===(document.compatMode||"");return e?window.pageYOffset:n?document.documentElement.scrollTop:document.body.scrollTop}return t.scrollTop},scrollHandler:function(t){(s.scrollSpyContainers[s.scrollSpyContainers.indexOf(t)].spyCallbacks||[]).forEach((function(e){return e(s.currentPositionX(t),s.currentPositionY(t))}))},addStateHandler:function(t){s.spySetState.push(t)},addSpyHandler:function(t,e){var n=s.scrollSpyContainers[s.scrollSpyContainers.indexOf(e)];n.spyCallbacks||(n.spyCallbacks=[]),n.spyCallbacks.push(t),t(s.currentPositionX(e),s.currentPositionY(e))},updateStates:function(){s.spySetState.forEach((function(t){return t()}))},unmount:function(t,e){s.scrollSpyContainers.forEach((function(t){return t.spyCallbacks&&t.spyCallbacks.length&&t.spyCallbacks.splice(t.spyCallbacks.indexOf(e),1)})),s.spySetState&&s.spySetState.length&&s.spySetState.splice(s.spySetState.indexOf(t),1),document.removeEventListener("scroll",s.scrollHandler)},update:function(){return s.scrollSpyContainers.forEach((function(t){return s.scrollHandler(t)}))}};e.default=s},332:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=s(n(1719)),i=s(n(1450)),a=s(n(8638));function s(t){return t&&t.__esModule?t:{default:t}}var l={},u=void 0;e.default={unmount:function(){l={}},register:function(t,e){l[t]=e},unregister:function(t){delete l[t]},get:function(t){return l[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return u=t},getActiveLink:function(){return u},scrollTo:function(t,e){var n=this.get(t);if(n){var s=(e=o({},e,{absolute:!1})).containerId,l=e.container,u=void 0;u=s?document.getElementById(s):l&&l.nodeType?l:document,e.absolute=!0;var c=e.horizontal,f=r.default.scrollOffset(u,n,c)+(e.offset||0);if(!e.smooth)return a.default.registered.begin&&a.default.registered.begin(t,n),u===document?e.horizontal?window.scrollTo(f,0):window.scrollTo(0,f):u.scrollTop=f,void(a.default.registered.end&&a.default.registered.end(t,n));i.default.animateTopScroll(f,e,t,n)}else console.warn("target Element not found")}}},9239:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={defaultEasing:function(t){return t<.5?Math.pow(2*t,2)/2:1-Math.pow(2*(1-t),2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:(4-2*t)*t-1},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}}},1719:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){for(var n=t.offsetTop,o=t.offsetParent;o&&!e(o);)n+=o.offsetTop,o=o.offsetParent;return{offsetTop:n,offsetParent:o}};e.default={updateHash:function(t,e){var n=0===t.indexOf("#")?t.substring(1):t,o=n?"#"+n:"",r=window&&window.location,i=o?r.pathname+r.search+o:r.pathname+r.search;e?history.pushState(history.state,"",i):history.replaceState(history.state,"",i)},getHash:function(){return window.location.hash.replace(/^#/,"")},filterElementInContainer:function(t){return function(e){return t.contains?t!=e&&t.contains(e):!!(16&t.compareDocumentPosition(e))}},scrollOffset:function(t,e,o){if(o)return t===document?e.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):"static"!==getComputedStyle(t).position?e.offsetLeft:e.offsetLeft-t.offsetLeft;if(t===document)return e.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if("static"!==getComputedStyle(t).position){if(e.offsetParent!==t){var r=n(e,(function(e){return e===t||e===document})),i=r.offsetTop;if(r.offsetParent!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return i}return e.offsetTop}if(e.offsetParent===t.offsetParent)return e.offsetTop-t.offsetTop;var a=function(t){return t===document};return n(e,a).offsetTop-n(t,a).offsetTop}}},9571:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return S}});var o=n(7294),r=n(5444),i=(n(7198),n(1721)),a=1440,s=240,l=[[0,"#0a0c10"],[244.8,"#1a222b"],[302.4,"#8291b3"],[518.4,"#7cbbeb"],[864,"#7cbbeb"],[936,"#f8ce9c"],[1065.6,"#f08784"],[1123.2,"#8b666e"],[1238.4,"#323039"],[1440,"#0a0c10"]];function u(t){return t*(Math.PI/180)}console.log(l);var c=function(t){function e(e){var n,r=(n=t.call(this,e)||this).props,i=r.initialTime;r.minTime,r.maxTime;return n.state={curTime:i,isClient:(!1).valueOf,offsetY:0},n.heroRef=o.createRef(),n}(0,i.Z)(e,t);var n=e.prototype;return n.handleChange=function(t){this.setState({curTime:t.target.value}),console.log("change handled")},n.render=function(){var t=this.props;t.initialTime,t.minTime,t.maxTime;return o.createElement("div",{id:"hero",ref:this.heroRef},o.createElement(o.Fragment,{key:this.state.isClient},o.createElement(f,{time:this.state.curTime,offsetY:this.state.offsetY})))},n.componentDidMount=function(){var t=this.props,e=t.initialTime;t.minTime,t.maxTime;window.addEventListener("scroll",this.handleScroll.bind(this)),this.setState({curTime:e,isClient:!0}),console.log("component mounted"),console.log(this.heroRef.current.scrollHeight)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll.bind(this))},n.handleScroll=function(){var t=document.documentElement.scrollTop;window.innerHeight;this.setState({offsetY:t}),console.log(this.state.offsetY)},e}(o.Component),f=function(t){for(var e=t.time,n=t.offsetY,r=parseInt(e),i=r+s,c=[],f=0;f<l.length;f++)if(r<=l[f][0]&&l[f][0]<=i){var d=(l[f][0]-r)/s*100;c.push([d,l[f][1]])}for(var p=l.length-1;p>=0;p--)if(r>l[p][0]){d=(l[p][0]-r)/s*100;c.unshift([d,l[p][1]]);break}for(var h=0;h<l.length;h++){if(i<l[h][0]){d=(l[h][0]-r)/s*100;c.push([d,l[h][1]]);break}if(i%a<l[h][0]){d=(1440+l[h][0]-r)/s*100;c.push([d,l[h][1]]);break}}console.log(c);for(var m="-webkit-linear-gradient("+String((r+120)/1440*180-90)+"deg",v=0;v<c.length;v++)m+=", "+c[v][1]+" "+c[v][0]+"%";m+=")";var y=r/1440*360-90,g=r/1440*360+90;return o.createElement(o.Fragment,null,o.createElement("div",{className:"hero-module--cityContainer--dx9M0",style:{background:m}},o.createElement("div",{className:"hero-module--title--tQ3nC"},o.createElement("img",{src:"./title.svg",alt:"Title"})),o.createElement("img",{className:"hero-module--city4--GNu4D",src:"./city-4.svg",alt:"City Component 4",style:{transform:"translateY("+.8*n+"px)"}}),o.createElement("img",{className:"hero-module--city3--rOCjJ",src:"./city-3.svg",alt:"City Component 3",style:{transform:"translateY("+.3*n+"px)"}}),o.createElement("img",{className:"hero-module--city2--+5jeB",src:"./city-2.svg",alt:"City Component 2",style:{transform:"translateY("+.5*n+"px)"}}),o.createElement("img",{className:"hero-module--city1--672sC",src:"./city-1.svg",alt:"City Component 1"}),o.createElement("img",{className:"hero-module--moon--i0jZ5",src:"./moon.svg",alt:"Moon",style:{top:100+100*Math.sin(u(-g))+"%",left:50+50*Math.cos(u(-g))+"%",transform:"translate(-50%, -50%) translateY("+.1*n+"px)"}}),o.createElement("img",{className:"hero-module--sun--3nRnN",src:"./sun.svg",alt:"Sun",style:{top:100+100*Math.sin(u(-y))+"%",left:50+50*Math.cos(u(-y))+"%",transform:"translate(-50%, -50%) translateY("+.1*n+"px)"}})))},d=c,p=n(7227),h=n(2349),m="navbar-module--activeTab--B0DFC",v="navbar-module--tabs--L+yL5",y=(n(3935),function(t){function e(e){var n;return(n=t.call(this,e)||this).state={section:0,opacity:0,active:0},n.sections=["about","jobs","projects","gallery","contact"],n.sectionScrolls=[],console.log(n.sectionScrolls),n}(0,i.Z)(e,t);var n=e.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.handleScroll.bind(this))},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll.bind(this))},n.handleScroll=function(){var t=document.documentElement.scrollTop,e=window.innerHeight;console.log(t);var n=t/e*-30+25,o=1/(1+Math.pow(Math.E,n));this.setState({opacity:o})},n.handleClick=function(t){this.setState({active:t}),console.log(t)},n.render=function(){var t=this;return o.createElement("div",{className:"navbar-module--navbarContainer--ZyUEE",style:{opacity:""+this.state.opacity}},o.createElement("ul",{className:"navbar-module--navbarList--UV+74"},o.createElement("li",{onClick:function(){return t.handleClick(1)}},o.createElement("button",{className:1===this.state.active?m:v},o.createElement(h.rU,{to:"about",spy:!0,smooth:!0,offset:-80,duration:500}," About "))),o.createElement("li",{onClick:function(){return t.handleClick(2)}},o.createElement("button",{className:2===this.state.active?m:v},o.createElement(h.rU,{to:"jobs",spy:!0,smooth:!0,offset:-80,duration:500}," Experience "))),o.createElement("li",{onClick:function(){return t.handleClick(3)}},o.createElement("button",{className:3===this.state.active?m:v},o.createElement(h.rU,{to:"projects",spy:!0,smooth:!0,offset:-80,duration:500}," Projects "))),o.createElement("li",{onClick:function(){return t.handleClick(4)}},o.createElement("button",{className:4===this.state.active?m:v},o.createElement(h.rU,{to:"gallery",spy:!0,smooth:!0,offset:-80,duration:500}," Gallery "))),o.createElement("li",{onClick:function(){return t.handleClick(5)}},o.createElement("button",{className:5===this.state.active?m:v},o.createElement(h.rU,{to:"contact",spy:!0,smooth:!0,offset:-80,duration:500}," Contact ")))))},e}(o.Component)),g=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"jobs"},o.createElement("h1",null,"Experience"))},b=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"gallery"},o.createElement("h1",null,"Gallery"))},w=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"contact"},o.createElement("h1",null,"Contact"))},E=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"about"},o.createElement(r.Link,{to:"/page-2/"},"yee"),o.createElement("h1",null,"About"))},C=function(){return o.createElement("div",{className:"section",style:{height:"50vw"},id:"projects"},o.createElement("h1",null,"Projects"))},O=n(3751),S=function(){var t=new Date,e=60*t.getHours()+t.getMinutes();return o.createElement("div",null,o.createElement(O.Z,{title:"Home"}),o.createElement(d,{initialTime:e,minTime:1,maxTime:1440,id:"hero"}),o.createElement(p.Z,null),o.createElement(E,null),o.createElement(g,null),o.createElement(C,null),o.createElement(b,null),o.createElement(w,null),o.createElement(y,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-82cfc944501bfd8783d4.js.map