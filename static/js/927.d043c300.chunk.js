"use strict";(self.webpackChunkCarent=self.webpackChunkCarent||[]).push([[927],{949:function(e,t,r){r.d(t,{W:function(){return a}});var n="container_container__-K8kO",s=r(184),a=function(e){var t=e.children;return(0,s.jsx)("div",{className:n,children:t})}},493:function(e,t,r){r.d(t,{$:function(){return a}});var n="section_section__7Ggz-",s=r(184),a=function(e){var t=e.children;return(0,s.jsx)("div",{className:n,children:t})}},758:function(e,t,r){r.d(t,{Z:function(){return l}});r(791);var n=r.p+"static/media/sprite.2b9a2ecb64735079720d8c8f5f4be26c.svg",s="categoriesList_categories__muROn",a="categoriesList_category-button__HYVYN",c="categoriesList_active__gAi+e",i="categoriesList_category-icon__ezXdf",o=r(184),l=function(e){var t=e.categories,r=e.activeCategory,l=e.onCategoryClick;return(0,o.jsx)("div",{className:s,children:t.map((function(e){return(0,o.jsxs)("button",{className:"".concat(a," ").concat(e.id===(null===r||void 0===r?void 0:r.id)?c:""),onClick:function(){return l(e)},children:[(0,o.jsx)("svg",{className:i,children:(0,o.jsx)("use",{xlinkHref:"".concat(n,"#icon-").concat(e.name.toLowerCase())})}),e.name]},e.id)}))})}},658:function(e,t,r){r.r(t),r.d(t,{default:function(){return ee}});var n="homePage_section__pw+Vu",s="homePage_container__KQUO7",a="homePage_logo__Q65CK",c=r(493),i=r(949),o="sectionTitle_title__O+AVq",l=r(184),u=function(e){var t=e.titleText,r=e.margin;return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("h1",{className:o,style:r={margin:r},children:t})})},d="featuresCard_cardWrapper__jsQj1",x="featuresCard_bigText__7tD2U",h="featuresCard_smallText__ehqBM",f="featuresCard_accentText__41Log",p=function(e){var t=e.symbol,r=e.number,n=e.text;return(0,l.jsxs)("div",{className:d,children:[(0,l.jsxs)("p",{className:x,children:[(0,l.jsxs)("span",{className:f,children:[t,"\xa0"]}),r]}),(0,l.jsx)("p",{className:h,children:n})]})},m=r.p+"static/media/labmorghini-image.845b648c866f717d820e.png",g="sectionAbout_contentWrapper__F5iO6",v="sectionAbout_featuresCardsWrapper__aHWi1",j="sectionAbout_sectionText__a4BEn",A=function(){return(0,l.jsx)(c.$,{children:(0,l.jsxs)(i.W,{children:[(0,l.jsx)(u,{titleText:"about us",margin:"0px 0px 85px 0px"}),(0,l.jsxs)("div",{className:g,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{className:j,children:"Reliable car rental service offering a diverse fleet, flexible options, and competitive rates for all your travel needs."}),(0,l.jsx)("img",{src:m,alt:"lamborghini"})]}),(0,l.jsxs)("div",{className:v,children:[(0,l.jsx)(p,{symbol:"+",number:"10",text:"Years of expierence"}),(0,l.jsx)(p,{symbol:"+",number:"200",text:"Satisfied customers"}),(0,l.jsx)(p,{symbol:"+",number:"150",text:"Customers returned"}),(0,l.jsx)(p,{symbol:"+",number:"100",text:"Cars available"})]})]})]})})},E=r(861),C=r(439),b=r(757),w=r.n(b),H=r(791),W=r(986),y=r(705),B=r(758),N=r(395),R=(r(497),"sectionCars_section-cars__UYPoJ"),O="sectionCars_car-slider__CShxi",z="sectionCars_car-details__zNe-7",X="sectionCars_detailsTextWrapper__VyYxU",k="sectionCars_car-title__Wzy4T",Q="sectionCars_car-description__OZAlW",S="sectionCars_car-image__E0eU3",V="sectionCars_sideText__aZh9L",I=r(511),Z="seeMoreBtn_seeMoreButton__84kfs";var G=function(e){var t=e.id,r=e.onSeeMoreClick;return(0,l.jsx)("button",{className:Z,onClick:function(){r&&r(t)},children:"SEE MORE"})};function L(){var e=(0,H.useState)(null),t=(0,C.Z)(e,2),r=t[0],n=t[1],s=(0,H.useState)([]),a=(0,C.Z)(s,2),o=a[0],u=a[1],d=(0,H.useState)(null),x=(0,C.Z)(d,2),h=x[0],f=x[1],p=(0,I.s0)();(0,H.useEffect)((function(){var e=function(){var e=(0,E.Z)(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,N.t)();case 3:t=e.sent,u(t),f(t[0]),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var m=function(e){p("/catalog/".concat(e),{state:{categories:o}})};return(0,l.jsx)(c.$,{children:(0,l.jsx)(i.W,{children:(0,l.jsxs)("div",{className:R,children:[(0,l.jsx)(B.Z,{categories:o,activeCategory:h,onCategoryClick:function(e){f(e);var t=o.findIndex((function(t){return t.id===e.id}));r.slideToLoop(t,500)}}),(0,l.jsx)("div",{className:O,children:(0,l.jsx)(y.tq,{onSwiper:n,effect:"coverflow",allowTouchMove:!1,modules:[W.lI],slidesPerView:1,centeredSlides:!0,spaceBetween:1e3,coverflowEffect:{rotate:20,stretch:0,depth:2500,modifier:1.5,slideShadows:!0},children:o.map((function(e){return(0,l.jsx)(y.o5,{children:(0,l.jsxs)("div",{className:z,children:[(0,l.jsxs)("div",{style:{position:"relative",overflow:"hidden"},children:[(0,l.jsx)("img",{src:e.photo,alt:e.name,className:S,width:"550px"}),(0,l.jsxs)("span",{className:V,children:[e.name,"\xa0-\xa0",e.name,"\xa0-\xa0",e.name,"\xa0-\xa0",e.name]})]}),(0,l.jsxs)("div",{className:X,children:[(0,l.jsxs)("h2",{className:k,children:[e.name," CLASS"]}),(0,l.jsx)("p",{className:Q,children:e.description}),(0,l.jsx)(G,{id:e.id,onSeeMoreClick:m})]})]})},e.id)}))})})]})})})}r(593);var _="sectionGallery_swiper__4XnGA",P="sectionGallery_swiperItem__uI6DA",T="sectionGallery_swiperItemImage__kp7PE",Y=r(16),q=function(){var e=(0,E.Z)(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y.Z.get("https://64fee767f8b9eeca9e294103.mockapi.io/api/cars");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=(0,H.useState)([]),t=(0,C.Z)(e,2),r=t[0],n=t[1];return(0,H.useEffect)((function(){var e=function(){var e=(0,E.Z)(w().mark((function e(){var t;return w().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q();case 3:t=e.sent,n(t[t.length-1].galleryImages),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(c.$,{children:(0,l.jsxs)(i.W,{children:[(0,l.jsx)(u,{titleText:"Gallery",margin:"0px 0px 40px 0px"}),(0,l.jsx)(y.tq,{spaceBetween:10,slidesPerView:1,autoplay:{delay:1500,disableOnInteraction:!1},scrollbar:{hide:!0},breakpoints:{769:{slidesPerView:2}},modules:[W.LW,W.pt],loop:!0,className:"mySwiper ".concat(_),children:r.map((function(e,t){return(0,l.jsx)(y.o5,{className:P,children:(0,l.jsx)("img",{src:e,alt:e,className:T})},t)}))})]})})})},F="sectionContacts_contactsWrapper__W+4Xs",K="sectionContacts_contactInfo__ozw-O",U="sectionContacts_listWrapper__U9K4D",M="sectionContacts_title__ujSU5",J="sectionContacts_map__C9VWe",$=function(){return(0,l.jsx)(c.$,{children:(0,l.jsx)(i.W,{children:(0,l.jsxs)("div",{className:F,children:[(0,l.jsxs)("div",{className:K,children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:M,children:"Contacts"}),(0,l.jsx)("a",{href:"https://maps.app.goo.gl/hZzQ3qimeQYsnLA5A",children:"Click here to open google maps"})]}),(0,l.jsxs)("ul",{className:U,children:[(0,l.jsx)("li",{children:(0,l.jsx)("p",{children:"Open now: 9AM - 10PM"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"https://www.youtube.com/",children:"YouTube chanel"})}),(0,l.jsx)("li",{children:(0,l.jsx)("a",{href:"tel:+380991333801",children:"+38 099 13 33 802"})})]})]}),(0,l.jsx)("iframe",{title:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2231.0672432539363!2d-122.2173056891008!3d37.73832163478565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f85b579729a7b%3A0x6fbc7055c9f6d934!2sRent%20A%20Car%20Airport%20Oakland!5e0!3m2!1suk!2sua!4v1735833631184!5m2!1suk!2sua",className:J,loading:"lazy"})]})})})},ee=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:n,children:(0,l.jsx)("div",{className:s,children:(0,l.jsx)("img",{src:"data:image/png;base64,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",alt:"logo",className:a})})}),(0,l.jsx)(A,{}),(0,l.jsx)(L,{}),(0,l.jsx)(D,{}),(0,l.jsx)($,{})]})}},395:function(e,t,r){r.d(t,{t:function(){return i}});var n=r(861),s=r(757),a=r.n(s),c=r(16),i=function(){var e=(0,n.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.Z.get("https://64fee767f8b9eeca9e294103.mockapi.io/api/categories");case 3:return t=e.sent,e.abrupt("return",t.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=927.d043c300.chunk.js.map