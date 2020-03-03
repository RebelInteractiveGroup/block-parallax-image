!function(e){var t={};function n(a){if(t[a])return t[a].exports;var l=t[a]={i:a,l:!1,exports:{}};return e[a].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var l in e)n.d(a,l,function(t){return e[t]}.bind(null,l));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=6)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t){!function(){e.exports=this.wp.blockEditor}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.blocks}()},,function(e,t,n){"use strict";n.r(t);var a=n(0),l=n(4),o=n(2),r=n(1),i=n(3);Object(l.registerBlockType)("mwd/parallax-images",{title:Object(i.__)("Parallax Image","create-block"),description:Object(i.__)("","create-block"),category:"layout",icon:"format-gallery",supports:{html:!1},attributes:{scale:{type:"integer",default:1.5},delay:{type:"integer",default:0},maxTransition:{type:"integer",default:100},orientation:{type:"string",default:"up"},overflow:{type:"boolean",default:0}},edit:function(e){var t=e.className,n=e.attributes,l=e.setAttributes;return Object(a.createElement)("div",{className:t},Object(a.createElement)(o.InspectorControls,null,Object(a.createElement)(r.PanelBody,{title:"Parallax Configuration",icon:"",initialOpen:!0},Object(a.createElement)(r.RangeControl,{label:"Speed",help:"The higher the speed is set, the more visible the parallax effect will be.",value:n.scale,min:0,max:3,step:.25,onChange:function(e){l({scale:e})}}),Object(a.createElement)(r.RangeControl,{label:"Delay (seconds)",help:"When a delay is set, the translation of the image will continue during that delay when the user stops scrolling. That gives a very nice effect. The delay is in seconds.",value:n.delay,min:0,max:10,step:.25,onChange:function(e){l({delay:e})}}),Object(a.createElement)(r.SelectControl,{label:"Direction",help:"The orientation (or direction) of the parallax effect.",value:n.orientation,options:[{label:"Up",value:"up"},{label:"Down",value:"down"},{label:"Left",value:"left"},{label:"Right",value:"right"},{label:"Up Left",value:"up left"},{label:"Up Right",value:"up right"},{label:"Down Left",value:"down left"},{label:"Down Right",value:"down rights"}],onChange:function(e){l({orientation:e})}}),Object(a.createElement)(r.ToggleControl,{label:"Overflow",help:n.overflow?"Image will overflow.":"Image will not overflow.",checked:n.overflow,onChange:function(e){l({overflow:e})}}),Object(a.createElement)(r.RangeControl,{label:"Max Transition",help:"Used to stop the parallax animation after a given percentage. By default, it translates from 0% to 100% of the user viewport.",value:n.maxTransition,min:0,max:100,onChange:function(e){l({maxTransition:e})}}))),Object(a.createElement)(o.InnerBlocks,{template:[["core/image"]],templateLock:"true"}))},save:function(e){e.className;var t=e.attributes;return Object(a.createElement)("div",{"data-scale":t.scale,"data-delay":t.delay,"data-orientation":t.orientation,"data-overflow":t.overflow,"data-maxtransition":t.maxTransition},Object(a.createElement)(o.InnerBlocks.Content,null))}})}]);