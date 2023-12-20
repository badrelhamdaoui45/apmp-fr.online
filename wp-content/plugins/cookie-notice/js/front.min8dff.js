!function(){if("function"==typeof window.CustomEvent)return!1;function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}e.prototype=window.Event.prototype,window.CustomEvent=e}(),function(){var e=function(e){return RegExp("(^| )"+e+"( |$)")},t=function(e,t,n){for(var i=0;i<e.length;i++)t.call(n,e[i])};function n(e){this.element=e}n.prototype={add:function(){t(arguments,function(e){this.contains(e)||(this.element.className+=this.element.className.length>0?" "+e:e)},this)},remove:function(){t(arguments,function(t){this.element.className=this.element.className.replace(e(t),"")},this)},toggle:function(e){return this.contains(e)?(this.remove(e),!1):(this.add(e),!0)},contains:function(t){return e(t).test(this.element.className)},replace:function(e,t){this.remove(e),this.add(t)}},"classList"in Element.prototype||Object.defineProperty(Element.prototype,"classList",{get:function(){return new n(this)}}),window.DOMTokenList&&null==DOMTokenList.prototype.replace&&(DOMTokenList.prototype.replace=n.prototype.replace)}(),function(e,t,n){var i=new function(){this.cookiesAccepted=null,this.noticeContainer=null,this.setStatus=function(n){var i=this,o="",s="",c=new Date,a=new Date;cnArgs.onScroll&&e.removeEventListener("scroll",this.handleScroll),"accept"===n?(n="true",a.setTime(parseInt(c.getTime())+1e3*parseInt(cnArgs.cookieTime))):(n="false",a.setTime(parseInt(c.getTime())+1e3*parseInt(cnArgs.cookieTimeRejected))),cnArgs.globalCookie&&(o=this.getDomain(t.location.hostname)),"localhost"===t.location.hostname&&(s=t.location.pathname.split("../../index.html")[1]);var r="";"https:"===t.location.protocol&&(r=";secure"),t.cookie=cnArgs.cookieName+"="+n+";expires="+a.toUTCString()+";path=/"+s+";domain="+o+r,this.cookiesAccepted="true"===n;var d=new CustomEvent("setCookieNotice",{detail:{value:n,time:c,expires:a,data:cnArgs}});if(t.dispatchEvent(d),this.setBodyClass(["cookies-set","true"===n?"cookies-accepted":"cookies-refused"]),this.hideCookieNotice(),"automatic"===cnArgs.revokeCookiesOpt&&(this.noticeContainer.addEventListener("animationend",function e(){i.noticeContainer.removeEventListener("animationend",e),i.showRevokeNotice()}),this.noticeContainer.addEventListener("webkitAnimationEnd",function e(){i.noticeContainer.removeEventListener("webkitAnimationEnd",e),i.showRevokeNotice()})),cnArgs.redirection&&("true"===n&&null===this.cookiesAccepted||n!==this.cookiesAccepted&&null!==this.cookiesAccepted)){var l=e.location.protocol+"//",h=e.location.host+"/"+e.location.pathname;cnArgs.cache?(l=l+h.replace("//","../../index.html")+(""===e.location.search?"?":e.location.search+"&")+"cn-reloaded=1"+e.location.hash,e.location.href=l):(l=l+h.replace("//","../../index.html")+e.location.search+e.location.hash,e.location.reload(!0));return}},this.getDomain=function(e){RegExp(/https?:\/\//).test(e)||(e="http://"+e);var t=new URL(../espace-membre/index.html).hostname.split(".");return t.slice(0).slice(-(4===t.length?3:2)).join(".")},this.getStatus=function(e){var n=("; "+t.cookie).split("; cookie_notice_accepted=");if(2!==n.length)return null;var i=n.pop().split(";").shift();return e?"true"===i:i},this.showCookieNotice=function(){var e=this,n=new CustomEvent("showCookieNotice",{detail:{data:cnArgs}});t.dispatchEvent(n),this.noticeContainer.classList.remove("cookie-notice-hidden"),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.add("cookie-notice-visible"),this.noticeContainer.addEventListener("animationend",function t(){e.noticeContainer.removeEventListener("animationend",t),e.noticeContainer.classList.remove("cn-animated")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function t(){e.noticeContainer.removeEventListener("webkitAnimationEnd",t),e.noticeContainer.classList.remove("cn-animated")})},this.hideCookieNotice=function(){var e=this,n=new CustomEvent("hideCookieNotice",{detail:{data:cnArgs}});t.dispatchEvent(n),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.remove("cookie-notice-visible"),this.noticeContainer.addEventListener("animationend",function t(){e.noticeContainer.removeEventListener("animationend",t),e.noticeContainer.classList.remove("cn-animated"),e.noticeContainer.classList.add("cookie-notice-hidden")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function t(){e.noticeContainer.removeEventListener("webkitAnimationEnd",t),e.noticeContainer.classList.remove("cn-animated"),e.noticeContainer.classList.add("cookie-notice-hidden")})},this.showRevokeNotice=function(){var e=this,n=new CustomEvent("showRevokeNotice",{detail:{data:cnArgs}});t.dispatchEvent(n),this.noticeContainer.classList.remove("cookie-revoke-hidden"),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.add("cookie-revoke-visible"),this.noticeContainer.addEventListener("animationend",function t(){e.noticeContainer.removeEventListener("animationend",t),e.noticeContainer.classList.remove("cn-animated")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function t(){e.noticeContainer.removeEventListener("webkitAnimationEnd",t),e.noticeContainer.classList.remove("cn-animated")})},this.hideRevokeNotice=function(){var e=this,n=new CustomEvent("hideRevokeNotice",{detail:{data:cnArgs}});t.dispatchEvent(n),this.noticeContainer.classList.add("cn-animated"),this.noticeContainer.classList.remove("cookie-revoke-visible"),this.noticeContainer.addEventListener("animationend",function t(){e.noticeContainer.removeEventListener("animationend",t),e.noticeContainer.classList.remove("cn-animated"),e.noticeContainer.classList.add("cookie-revoke-hidden")}),this.noticeContainer.addEventListener("webkitAnimationEnd",function t(){e.noticeContainer.removeEventListener("webkitAnimationEnd",t),e.noticeContainer.classList.remove("cn-animated"),e.noticeContainer.classList.add("cookie-revoke-hidden")})},this.setBodyClass=function(e){t.body.classList.remove("cookies-revoke"),t.body.classList.remove("cookies-accepted"),t.body.classList.remove("cookies-refused"),t.body.classList.remove("cookies-set"),t.body.classList.remove("cookies-not-set");for(var n=0;n<e.length;n++)t.body.classList.add(e[n])},this.handleScroll=function(){(e.pageYOffset||(t.documentElement||t.body.parentNode||t.body).scrollTop)>parseInt(cnArgs.onScrollOffset)&&this.setStatus("accept")},this.getClosest=function(e,n){for(Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1});e&&e!==t;e=e.parentNode)if(e.matches(n))return e;return null},this.inIframe=function(){try{return e.self!==e.top}catch(t){return!0}},this.init=function(){var n=this;if(!0!==this.inIframe()&&(this.cookiesAccepted=this.getStatus(!0),this.noticeContainer=t.getElementById("cookie-notice"),this.noticeContainer)){var i=t.getElementsByClassName("cn-set-cookie"),o=t.getElementsByClassName("cn-revoke-cookie"),s=t.getElementById("cn-close-notice");this.noticeContainer.classList.add("cn-effect-"+cnArgs.hideEffect),null===this.cookiesAccepted?(cnArgs.onScroll&&e.addEventListener("scroll",function(e){n.handleScroll()}),cnArgs.onClick&&e.addEventListener("click",function(e){null===n.getClosest(e.target,"#cookie-notice")&&n.setStatus("accept")},!0),this.setBodyClass(["cookies-not-set"]),this.showCookieNotice()):(this.setBodyClass(["cookies-set",!0===this.cookiesAccepted?"cookies-accepted":"cookies-refused"]),cnArgs.revokeCookies&&"automatic"===cnArgs.revokeCookiesOpt&&this.showRevokeNotice());for(var c=0;c<i.length;c++)i[c].addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),n.setStatus(this.dataset.cookieSet)});null!==s&&s.addEventListener("click",function(e){e.preventDefault(),e.stopPropagation(),n.setStatus("reject")});for(var c=0;c<o.length;c++)o[c].addEventListener("click",function(e){e.preventDefault(),n.noticeContainer.classList.contains("cookie-revoke-visible")?(n.hideRevokeNotice(),n.noticeContainer.addEventListener("animationend",function e(){n.noticeContainer.removeEventListener("animationend",e),n.showCookieNotice()}),n.noticeContainer.addEventListener("webkitAnimationEnd",function e(){n.noticeContainer.removeEventListener("webkitAnimationEnd",e),n.showCookieNotice()})):n.noticeContainer.classList.contains("cookie-notice-hidden")&&n.noticeContainer.classList.contains("cookie-revoke-hidden")&&n.showCookieNotice()})}}};e.addEventListener("load",function(){i.init()},!1)}(window,document,void 0);