(window.webpackJsonp=window.webpackJsonp||[]).push([[43,110,127],{395:function(e,t,o){"use strict";var r=o(2);r="default"in r?r.default:r;var n="2.2.2";/^2\./.test(r.version)||r.util.warn("VueClickaway 2.2.2 only supports Vue 2.x, and does not support Vue "+r.version);var l="_vue_clickaway_handler";function f(e,t,o){c(e);var r=o.context,n=t.value;if("function"==typeof n){var f=!1;setTimeout((function(){f=!0}),0),e[l]=function(t){var path=t.path||(t.composedPath?t.composedPath():void 0);if(f&&(path?path.indexOf(e)<0:!e.contains(t.target)))return n.call(r,t)},document.documentElement.addEventListener("click",e[l],!1)}}function c(e){document.documentElement.removeEventListener("click",e[l],!1),delete e[l]}var m={bind:f,update:function(e,t){t.value!==t.oldValue&&f(e,t)},unbind:c},d={directives:{onClickaway:m}};t.version=n,t.directive=m,t.mixin=d},399:function(e,t,o){var content=o(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("9b1a1ff2",content,!0,{sourceMap:!1})},418:function(e,t,o){"use strict";t.a={data:function(){return{showMenu:!1}},methods:{openDropdown:function(data){this[this.getDropdownSelector(data)]=!0},closeDropdown:function(data){this[this.getDropdownSelector(data)]=!1},toggleDropdown:function(data){var e=this.getDropdownSelector(data);this[e]=!this[e]},getDropdownSelector:function(e){return"string"==typeof e?e:"showMenu"}}}},423:function(e,t,o){"use strict";o(399)},424:function(e,t,o){var r=o(28),n=o(38),l=o(39),f=o(40),c=o(41),m=o(42),d=o(43),v=o(44),w=o(45),h=o(46),_=o(47),y=r(!1),x=n(l),M=n(f),I=n(c),D=n(m),O=n(d),R=n(v),j=n(w),k=n(h),P=n(_);y.push([e.i,'@font-face{font-family:"Manrope";src:url('+x+') format("woff2"),url('+M+') format("woff");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:"Manrope";src:url('+I+') format("woff2"),url('+D+') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Manrope";src:url('+O+') format("woff2"),url('+R+') format("woff");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:"Manrope";src:url('+j+') format("woff2"),url('+k+') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"Manrope";src:url('+P+') format("woff2"),url('+P+') format("woff");font-weight:800;font-style:normal;font-display:swap}.dropdown[data-v-e04f4ec6]{position:relative;display:flex}.dropdown__content[data-v-e04f4ec6]{position:absolute;min-width:16rem;z-index:20;background-color:#fff;padding:1.3rem 1.5rem;box-shadow:0 .4rem 1.5rem rgba(0,0,0,.07);border-radius:.5rem;font:normal 500 1.4rem "Manrope";color:#1a1a1a;line-height:2.2rem;white-space:nowrap}.dropdown__content.left[data-v-e04f4ec6]{left:0}.dropdown__content.center[data-v-e04f4ec6]{justify-self:center}.dropdown__content.right[data-v-e04f4ec6]{right:0}.dropdown__content.top[data-v-e04f4ec6]{bottom:3rem}.dropdown__content.bottom[data-v-e04f4ec6]{top:3rem}.fade-enter-active[data-v-e04f4ec6],.fade-leave-active[data-v-e04f4ec6]{transition:opacity .2s}.fade-enter[data-v-e04f4ec6],.fade-leave-to[data-v-e04f4ec6]{opacity:0}',""]),e.exports=y},427:function(e,t,o){"use strict";o.r(t);var r={props:{showMenu:{type:Boolean,default:!1},position:{type:String,default:"center"},align:{type:String,default:"bottom"}}},n=(o(423),o(9)),component=Object(n.a)(r,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dropdown",class:{active:e.showMenu}},[e._t("toggle"),e._v(" "),o("client-only",[o("transition",{attrs:{name:"fade"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.showMenu,expression:"showMenu"}],staticClass:"dropdown__content",class:[e.position,e.align]},[e._t("content")],2)])],1)],2)}),[],!1,null,"e04f4ec6",null);t.default=component.exports},613:function(e,t,o){"use strict";o(8);t.a={methods:{getBase64:function(e){return new Promise((function(t,o){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=function(e){return o(e)},r.readAsDataURL(e)}))}}}},617:function(e,t,o){var content=o(740);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(29).default)("d5b61120",content,!0,{sourceMap:!1})},739:function(e,t,o){"use strict";o(617)},740:function(e,t,o){var r=o(28),n=o(38),l=o(39),f=o(40),c=o(41),m=o(42),d=o(43),v=o(44),w=o(45),h=o(46),_=o(47),y=r(!1),x=n(l),M=n(f),I=n(c),D=n(m),O=n(d),R=n(v),j=n(w),k=n(h),P=n(_);y.push([e.i,'@font-face{font-family:"Manrope";src:url('+x+') format("woff2"),url('+M+') format("woff");font-weight:300;font-style:normal;font-display:swap}@font-face{font-family:"Manrope";src:url('+I+') format("woff2"),url('+D+') format("woff");font-weight:400;font-style:normal;font-display:swap}@font-face{font-family:"Manrope";src:url('+O+') format("woff2"),url('+R+') format("woff");font-weight:500;font-style:normal;font-display:swap}@font-face{font-family:"Manrope";src:url('+j+') format("woff2"),url('+k+') format("woff");font-weight:700;font-style:normal;font-display:swap}@font-face{font-family:"Manrope";src:url('+P+') format("woff2"),url('+P+') format("woff");font-weight:800;font-style:normal;font-display:swap}.image[data-v-1f9ad042]{display:grid;grid-template-columns:10rem 1fr;grid-template-rows:auto auto auto;grid-gap:0 2rem;gap:0 2rem;grid-template-areas:"img image-title" "img image-subtitle" "img buttons"}.image__img[data-v-1f9ad042]{grid-area:img;display:flex;align-items:center;justify-content:center;overflow:hidden;width:10rem;height:10rem;border-radius:50%;background-color:#e24343}.image__img img[data-v-1f9ad042]{width:100%;height:auto}.image__title[data-v-1f9ad042]{grid-area:image-title;font:normal 700 1.6rem "Manrope";color:#1a1a1a;line-height:2.2rem;margin:0;align-self:flex-end}.image__subtitle[data-v-1f9ad042]{grid-area:image-subtitle;font:normal 500 1.4rem "Manrope";color:grey;line-height:2.2rem;align-self:flex-start;margin-bottom:-.5rem}.image__buttons[data-v-1f9ad042]{display:flex;align-items:center;align-self:flex-start}.image__replace .replace-btn[data-v-1f9ad042]{color:#e24343;margin-right:2rem}.image__button[data-v-1f9ad042],.image__replace .replace-btn[data-v-1f9ad042]{font:normal 700 1.2rem "Manrope";line-height:1.6rem;letter-spacing:.05em;text-transform:uppercase;padding:0}.image__button[data-v-1f9ad042]{color:grey}.dropdown li[data-v-1f9ad042]:hover,.dropdown li label[data-v-1f9ad042]:hover{cursor:pointer}.no-avatar[data-v-1f9ad042]{font:normal 300 5rem "Manrope";color:#fff}',""]),e.exports=y},876:function(e,t,o){"use strict";o.r(t);o(48),o(23),o(49),o(59),o(33),o(60);var r=o(1),n=o(16),l=(o(14),o(34),o(8),o(20),o(25),o(237),o(24),o(427)),f=o(418),c=o(395),m=o(613),d=o(50);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,o)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var h={components:{Dropdown:l.default},props:{user:{type:Object,require:!0}},mixins:[f.a,c.mixin,m.a],computed:w(w({},Object(d.c)({getFileMaxSize:"files/getFileMaxSize"})),{},{noAvatarLetter:function(){return this.user&&this.user.first_name?this.user.first_name.slice(0,1):""},getPreviewImage:function(){return this.previewImage?this.previewImage:this.user.avatar}}),data:function(){return{previewImage:null,isRemoveImg:!1,useDefault:!0}},methods:w(w(w({},Object(d.b)({getFileRequirements:"files/getFileRequirements"})),Object(d.d)({setRequirements:"files/setRequirements"})),{},{showDefault:function(){this.previewImage=null,this.isRemoveImg=!1,this.useDefault=!0,this.$emit("uploadImg",{isRemoveImg:this.isRemoveImg,useDefault:this.useDefault,avatar:{file:null,name:null}})},removeImg:function(){this.previewImage=null,this.isRemoveImg=!0,this.useDefault=!1,this.$emit("uploadImg",{isRemoveImg:this.isRemoveImg,useDefault:this.useDefault,avatar:{file:null,name:null}})},handleImgUpload:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var img,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return img=e.$refs["avatar-file"].files[0],t.prev=1,t.next=4,e.getFileRequirements();case 4:if(o=t.sent,e.setRequirements(o),!(img.size>e.getFileMaxSize)){t.next=9;break}return e.$toast.error("Your file is too big! Max size of file is ".concat(e.getFileMaxSize/1024/1024,"Mb")),t.abrupt("return");case 9:return e.isRemoveImg=!1,e.useDefault=!1,e.previewImage=URL.createObjectURL(img),t.t0=e,t.t1=e.isRemoveImg,t.t2=e.useDefault,t.next=17,e.getBase64(img);case 17:t.t3=t.sent,t.t4=img.name,t.t5={file:t.t3,name:t.t4},t.t6={isRemoveImg:t.t1,useDefault:t.t2,avatar:t.t5},t.t0.$emit.call(t.t0,"uploadImg",t.t6),t.next=27;break;case 24:t.prev=24,t.t7=t.catch(1),e.$toast.error("Something went wrong!");case 27:case"end":return t.stop()}}),t,null,[[1,24]])})))()}})},_=(o(739),o(9)),component=Object(_.a)(h,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"image"},[o("div",{staticClass:"image__img"},[e.user&&(e.user.avatar||e.previewImage)&&!e.isRemoveImg?o("img",{attrs:{src:e.getPreviewImage,alt:"avatar"}}):o("div",{staticClass:"no-avatar"},[e._v(e._s(e.noAvatarLetter))])]),e._v(" "),o("input",{ref:"avatar-file",attrs:{hidden:"",id:"replace-avatar",type:"file",accept:"image/*",name:"replace-avatar"},on:{change:e.handleImgUpload}}),e._v(" "),o("h6",{staticClass:"image__title"},[e._v("Profile Image")]),e._v(" "),o("p",{staticClass:"image__subtitle"},[e._v("This image will displaying in your resume")]),e._v(" "),o("div",{staticClass:"image__buttons"},[o("Dropdown",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:e.closeDropdown,expression:"closeDropdown"}],staticClass:"image__replace",attrs:{position:"left","show-menu":e.showMenu},nativeOn:{click:function(t){return t.stopPropagation(),e.toggleDropdown.apply(null,arguments)}},scopedSlots:e._u([{key:"toggle",fn:function(){return[o("button",{staticClass:"replace-btn"},[e._v("Replace Image")])]},proxy:!0},{key:"content",fn:function(){return[o("ul",{staticClass:"dropdown"},[o("li",{on:{click:e.showDefault}},[e._v("Use Profile Photo")]),e._v(" "),o("li",[o("label",{attrs:{for:"replace-avatar"}},[e._v("Upload new Image")])])])]},proxy:!0}])}),e._v(" "),o("button",{staticClass:"image__button",on:{click:e.removeImg}},[e._v("Remove")])],1)])}),[],!1,null,"1f9ad042",null);t.default=component.exports}}]);