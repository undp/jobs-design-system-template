!function(){var e={802:function(e,t,r){"use strict";r.r(t),r.d(t,{desktopView:function(){return i}});var n=window.UNDP||{};n.keyCode={TAB:9,RETURN:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40},n.breakpoints={TINY:320,SMALL:767,MEDIUM:768,LARGE:1024,EXTRALARGE:1440,MEDIUMTAB:1439,TABLET:834},window.UNDP=window.UNDP||n;var i=window.innerWidth>1439},560:function(){jQuery.fn.isInViewport=function(){var e=jQuery(this).offset().top,t=e+jQuery(this).outerHeight(),r=jQuery(window).scrollTop(),n=r+jQuery(window).height();return t>r&&e<n},jQuery(window).on("resize scroll load",(function(){jQuery("[data-viewport=true]").each((function(){jQuery(this).isInViewport()&&jQuery(this).addClass("inviewport")}))}))}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function t(t,r){for(var n=0;n<r.length;n++){var i=r[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(s=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!==e(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key),"symbol"===e(s)?s:String(s)),i)}var s}jQuery;var n,i,s,a,o,c,u,l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.classOpen="open",this.$window=jQuery(window),this.$currentSelect=jQuery(t),this.$selectTrigger=this.$currentSelect.find("button").first()}var r,n;return r=e,(n=[{key:"init",value:function(){this.addListeners(),this.listenerWindowClick()}},{key:"addListeners",value:function(){var e=this;this.$selectTrigger.click((function(t){t.stopImmediatePropagation(),e.toggleSelect()})),this.$currentSelect.on("click","input[type=checkbox]",(function(e){e.stopImmediatePropagation();var t=jQuery(e.target);t.closest("li[role=option]").attr("aria-selected",t.is(":checked"))})),this.$currentSelect.on("click",".has-submenu > .checkbox-item",(function(e){if(e.stopImmediatePropagation(),!jQuery(e.target).hasClass("checkmark")){e.preventDefault();var t=jQuery(e.currentTarget).closest("li.has-submenu"),r=t.find("button.caret");t.toggleClass("open"),"true"===t.attr("aria-expanded")?(t.attr("aria-expanded","false"),r.attr("aria-expanded","false")):(t.attr("aria-expanded","true"),r.attr("aria-expanded","true"))}})),this.$currentSelect.on("click",".has-submenu > button.caret",(function(e){jQuery(e.currentTarget).siblings(".checkbox-item").trigger("click")}))}},{key:"listenerWindowClick",value:function(){var e=this;this.$window.click((function(t){e.$currentSelect&&!e.$currentSelect.is(t.target)&&0===e.$currentSelect.has(t.target).length&&e.$currentSelect.hasClass(e.classOpen)&&(e.$currentSelect.removeClass(e.classOpen),e.$selectTrigger.attr("aria-expanded","false"))}))}},{key:"toggleSelect",value:function(){this.$currentSelect.toggleClass(this.classOpen),"true"===this.$selectTrigger.attr("aria-expanded")?this.$selectTrigger.attr("aria-expanded","false"):this.$selectTrigger.attr("aria-expanded","true")}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}();r(560),r(802),n=jQuery(".expand-search"),(i=jQuery(".expand-search input")).on("input",(function(){jQuery(this).val().length>=1?jQuery(this).parent(n).find(".close-button").addClass("show"):jQuery(this).parent(n).find(".close-button").removeClass("show")})),jQuery(document).on("click",".expand-button",(function(){jQuery(this).siblings("input").val().length>=1&&jQuery(this).siblings(".close-button").addClass("show"),jQuery(this).parent(n).toggleClass("open"),jQuery(this).parent(n).hasClass("open")?jQuery(this).siblings("input").focus():(jQuery(this).siblings(i).focusout(),jQuery(this).siblings(".close-button").removeClass("show"))})),jQuery(document).on("click",".expand-search .close-button",(function(){jQuery(this).siblings("input").val(""),jQuery(this).removeClass("show")})),jQuery(document).mouseup((function(e){var t=jQuery(".expand-search"),r=t.find("input");(r.length<1||r.val().length<1)&&(t.is(e.target)||0!==t.has(e.target).length||t.removeClass("open"))})),function(e){jQuery(".multi-select").each((function(e){var t=jQuery(this).find("input:checkbox:checked").length;t>0&&(jQuery(this).find("button").first().find("span").remove(),jQuery(this).find("button").first().append("<span> ("+t+") </span>"))}));var t=jQuery(".multi-select li input:checkbox");jQuery(t).on("click",(function(){var e=jQuery(this).parents(".multi-select").find("input:checkbox:checked").length,t=jQuery(this).parents("ul").not(".sub-menu").siblings();e>0?(t.find("span").remove(),t.append("<span> ("+e+") </span>")):t.find("span").remove()})),jQuery("[data-multi-select]").each((function(e,t){new l(t).init()}))}(jQuery),c=jQuery(".multi-select li input:checkbox"),u=jQuery(".search-filter .selected-chips"),jQuery(".multi-select").each((function(e){var t=jQuery(this).find("input:checkbox:checked").length;t>0&&(jQuery(this).find("button").first().find("span").remove(),jQuery(this).find("button").first().append("<span> ("+t+") </span>"))})),jQuery(c).on("click",(function(e){e.stopImmediatePropagation();var t=jQuery(this),r=t.parents(".select-wrapper").find(".selected-chips"),n=t.attr("id"),i=jQuery(this).parents(".multi-select").find("input:checkbox:checked").length,s=jQuery(this).parents("ul").not(".sub-menu").siblings();if(i>0?(s.find("span").remove(),s.append("<span> ("+i+") </span>")):s.find("span").remove(),t.is(":checked")){var a=jQuery(this).siblings().text(),o=jQuery('<span class="chip chip__cross" tabindex="0" role="button"></span>').clone();o.text(a),o.attr({"option-name":n}),jQuery(r).append(o),r.find(".chip__cross").length>0&&r.siblings(".clear-search-filter").addClass("show-clear").siblings(".active-filter").addClass("show-activefilter")}else r.find(".chip__cross").length<2&&r.siblings(".clear-search-filter").removeClass("show-clear").siblings(".active-filter").removeClass("show-activefilter"),jQuery(t).parents(".select-wrapper").find("[option-name='".concat(n,"']")).remove()})),jQuery(u).on("click",".chip__cross",(function(e){e.preventDefault();var t=jQuery(this),r=t.parents(".select-wrapper").find(".selected-chips");jQuery(r).find(".chip__cross").length<2&&(t.parents(".select-wrapper").find(".clear-search-filter").removeClass("show-clear"),t.parents(".select-wrapper").find(".active-filter").removeClass("show-activefilter"));var n=jQuery(this).attr("option-name"),i=jQuery(this).parents(".select-wrapper").find("#".concat(n));i.prop("checked",!1);var s=i.parents(".multi-select").find("input:checkbox:checked").length,a=i.parents("ul").not(".sub-menu").siblings();s>0?(a.find("span").remove(),a.append("<span> ("+s+") </span>")):a.find("span").remove(),jQuery(this).remove()})),jQuery(document).on("click",".clear-search-filter",(function(){var e=jQuery(this),t=e.parents(".select-wrapper").find(".selected-chips");jQuery(t).find(".chip").remove(),e.parents(".select-wrapper").find(".clear-search-filter").removeClass("show-clear"),e.parents(".select-wrapper").find(".active-filter").removeClass("show-activefilter"),e.parents(".select-wrapper").find("input[type='checkbox']").prop("checked",!1),e.parents(".select-wrapper").find("button").find("span").remove()})),jQuery(document).on("click",".sort-filter-search",(function(){jQuery(this).toggleClass("close"),jQuery(this).next(".search-filter").toggleClass("show-filter")})),s=jQuery(".select-box button"),a=jQuery(".select-box li"),s.on("click",(function(){jQuery(this).parent().toggleClass("expanded").find("ul").toggleClass("active")})),a.on("click keypress",(function(){jQuery(this).parent().siblings().text(jQuery(this).find("span").text()),jQuery(this).parent().removeClass("active").parents().removeClass("expanded")})),jQuery(document).mouseup((function(e){s.is(e.target)||0!==s.has(e.target).length||s.parent().removeClass("expanded").find("ul").removeClass("active")})),o=".pagehero-fulll",jQuery(window).scroll((function(){jQuery(this).scrollTop()>50?jQuery(o).addClass("expand-to-size"):jQuery(o).removeClass("expand-to-size")})),jQuery(".dropdown-language").click((function(){jQuery(".dropdown-language").toggleClass("active"),jQuery(".dropdown-language").hasClass("active")?jQuery(".dropdown-language").find("a").attr("tabIndex","0"):jQuery(".dropdown-language").find("a").attr("tabIndex","-1")})),jQuery(document).on("click",(function(e){var t=jQuery(".dropdown-language");t===e.target||t.has(e.target).length||jQuery(".dropdown-language").removeClass("active")}))}()}();