"use strict";(self.webpackChunkCarent=self.webpackChunkCarent||[]).push([[808],{949:function(e,n,r){r.d(n,{W:function(){return c}});var t="container_container__-K8kO",a=r(184),c=function(e){var n=e.children;return(0,a.jsx)("div",{className:t,children:n})}},493:function(e,n,r){r.d(n,{$:function(){return c}});var t="section_section__7Ggz-",a=r(184),c=function(e){var n=e.children;return(0,a.jsx)("div",{className:t,children:n})}},758:function(e,n,r){r.d(n,{Z:function(){return l}});r(791);var t=r.p+"static/media/sprite.2b9a2ecb64735079720d8c8f5f4be26c.svg",a="categoriesList_categories__muROn",c="categoriesList_category-button__HYVYN",i="categoriesList_active__gAi+e",s="categoriesList_category-icon__ezXdf",o=r(184),l=function(e){var n=e.categories,r=e.activeCategory,l=e.onCategoryClick;return(0,o.jsx)("div",{className:a,children:n.map((function(e){return(0,o.jsxs)("button",{className:"".concat(c," ").concat(e.id===(null===r||void 0===r?void 0:r.id)?i:""),onClick:function(){return l(e)},children:[(0,o.jsx)("svg",{className:s,children:(0,o.jsx)("use",{xlinkHref:"".concat(t,"#icon-").concat(e.name.toLowerCase())})}),e.name]},e.id)}))})}},808:function(e,n,r){r.r(n),r.d(n,{default:function(){return F}});var t=r(942),a=r(413),c=r(861),i=r(439),s=r(757),o=r.n(s),l=r(949),u=r(493),d=r(511),p="carCard_carCard__eVCm1",f="carCard_cardImg__5-5Td",h="carCard_cardInfo__cnm05",v="carCard_cardModel__ZXyay",m="carCard_cardRentalPrice__aREnc",_="carCard_fuelWrapper__pzXHZ",x="carCard_cardButtonsWrapper__nIIY4",j="carCard_cardMoreInfoBtn__AEUEc",y=r(184),g=function(e){var n=e.car,r=(e.categoryId,n.id),t=n.photos,a=n.brand,c=n.model,i=n.year,s=n.fuel_consumption_l_per_100km,o=n.rental_price_per_day,l=n.deposit_price,u=n.fuel_type,g=n.transmission_type,C=(0,d.s0)();return(0,y.jsxs)("li",{className:p,children:[(0,y.jsx)("div",{children:(0,y.jsx)("img",{className:f,src:t[0],alt:"".concat(a," ").concat(c)})}),(0,y.jsxs)("div",{className:h,children:[(0,y.jsxs)("p",{className:v,children:[a," ",c]}),(0,y.jsxs)("div",{className:_,children:[(0,y.jsxs)("p",{children:[g," "]}),(0,y.jsx)("p",{children:i})]}),(0,y.jsxs)("div",{className:_,children:[(0,y.jsx)("p",{children:u}),(0,y.jsxs)("p",{children:[s,"L/100km"]})]}),(0,y.jsxs)("div",{className:_,children:[(0,y.jsxs)("p",{style:{fontWeight:"800"},children:["Deposit $",l]}),(0,y.jsxs)("p",{className:m,children:["$",o,"/day"]})]}),(0,y.jsx)("div",{className:x,children:(0,y.jsx)("button",{type:"button",className:j,onClick:function(){C("/car/".concat(r),{state:{car:n}})},children:"More info"})})]})]})},C=r(758),b=r(791),N=r(16),T=function(){var e=(0,c.Z)(o().mark((function e(n){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,N.Z.get("https://64fee767f8b9eeca9e294103.mockapi.io/api/cars/?categoryId=".concat(n));case 3:return r=e.sent,console.log(r),e.abrupt("return",r.data);case 8:throw e.prev=8,e.t0=e.catch(0),console.error("Error fetching cars with from ".concat(n," category:"),e.t0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),k=r(395),Z="filters_filters__E6E0r",w="filters_filtersLabel__nAni1",S="filters_filtersInput__BitGI",W="filters_filtersSelect__WjwW6",A="filters_resetButton__Cb-o4",E=function(e){var n=e.onFilterChange,r={priceFrom:"",priceTo:"",driveType:"",transmissionType:"",fuelConsumptionTo:"",bodyType:""},c=(0,b.useState)(r),s=(0,i.Z)(c,2),o=s[0],l=s[1],u=function(e){var r=e.target,c=r.name,i=r.value,s=(0,a.Z)((0,a.Z)({},o),{},(0,t.Z)({},c,i));l(s),n(s)};return(0,y.jsxs)("div",{className:Z,children:[(0,y.jsx)("label",{className:w,children:(0,y.jsx)("input",{className:S,type:"number",name:"priceFrom",min:0,max:1e3,step:10,placeholder:"Price from",value:o.priceFrom,onChange:u})}),(0,y.jsx)("label",{className:w,children:(0,y.jsx)("input",{className:S,type:"number",name:"priceTo",min:0,max:1e3,step:10,placeholder:"Price to",value:o.priceTo,onChange:u})}),(0,y.jsx)("label",{className:w,children:(0,y.jsxs)("select",{className:W,name:"driveType",value:o.driveType,onChange:u,children:[(0,y.jsx)("option",{value:"",disabled:!0,children:"Drive type:"}),(0,y.jsx)("option",{value:"",children:"All types"}),(0,y.jsx)("option",{value:"AWD",children:"AWD"}),(0,y.jsx)("option",{value:"FWD",children:"FWD"}),(0,y.jsx)("option",{value:"RWD",children:"RWD"})]})}),(0,y.jsx)("label",{className:w,children:(0,y.jsxs)("select",{className:W,name:"transmissionType",value:o.transmissionType,onChange:u,children:[(0,y.jsx)("option",{value:"",disabled:!0,children:"Transmission:"}),(0,y.jsx)("option",{value:"",children:"All types"}),(0,y.jsx)("option",{value:"Automatic",children:"Automatic"}),(0,y.jsx)("option",{value:"Manual",children:"Manual"})]})}),(0,y.jsx)("label",{className:w,children:(0,y.jsxs)("select",{className:W,name:"bodyType",value:o.bodyType,onChange:u,children:[(0,y.jsx)("option",{value:"",disabled:!0,children:"Body type:"}),(0,y.jsx)("option",{value:"",children:"All types"}),(0,y.jsx)("option",{value:"Coupe",children:"Coupe"}),(0,y.jsx)("option",{value:"Convertible",children:"Convertible"}),(0,y.jsx)("option",{value:"Sedan",children:"Sedan"}),(0,y.jsx)("option",{value:"Station Wagon",children:"Station Wagon"}),(0,y.jsx)("option",{value:"SUV",children:"SUV"}),(0,y.jsx)("option",{value:"Pickup Truck",children:"Pickup Truck"})]})}),(0,y.jsx)("label",{className:w,children:(0,y.jsx)("input",{className:S,type:"number",name:"fuelConsumptionTo",placeholder:"Fuel Consumption To",value:o.fuelConsumptionTo,onChange:u})}),(0,y.jsx)("button",{className:A,type:"button",onClick:function(){l(r),n(r)},children:"Reset"})]})},I="catalogPage_carsList__jtIfQ",F=function(){var e,n=(0,d.UO)().id,r=(0,d.s0)(),s=(0,d.TH)(),p=(0,b.useState)((null===(e=s.state)||void 0===e?void 0:e.categories)||[]),f=(0,i.Z)(p,2),h=f[0],v=f[1],m=(0,b.useState)([]),_=(0,i.Z)(m,2),x=_[0],j=_[1],N=(0,b.useState)({}),Z=(0,i.Z)(N,2),w=Z[0],S=Z[1],W=h.find((function(e){return e.id===n}))||null,A=(0,b.useState)([]),F=(0,i.Z)(A,2),D=F[0],L=F[1],P=(0,b.useState)({}),R=(0,i.Z)(P,2),B=R[0],H=R[1];(0,b.useEffect)((function(){if(!h.length){var e=function(){var e=(0,c.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,k.t)();case 3:n=e.sent,v(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}if(n)if(w[n])j(w[n]);else{var r=function(){var e=(0,c.Z)(o().mark((function e(){var r,c,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,T(n);case 3:c=e.sent,i=(null===(r=c[0])||void 0===r?void 0:r.cars)||[],j(i),S((function(e){return(0,a.Z)((0,a.Z)({},e),{},(0,t.Z)({},n,i))})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error("Error fetching cars by category:",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();r()}}),[n,h,w]),(0,b.useEffect)((function(){!function(){var e=x.filter((function(e){var n=B.priceFrom,r=B.priceTo,t=B.driveType,a=B.transmissionType,c=B.fuelConsumptionTo,i=B.bodyType;return(!n||e.rental_price_per_day>=n)&&(!r||e.rental_price_per_day<=r)&&(!t||e.drive_type===t)&&(!a||e.transmission_type===a)&&(!c||e.fuel_consumption_l_per_100km<=c)&&(!i||e.body_type===i)}));L(e)}()}),[x,B]);return!n&&h.length?(0,y.jsx)(d.Fg,{to:"/catalog/".concat(h[0].id),replace:!0}):(0,y.jsx)(u.$,{children:(0,y.jsx)(l.W,{children:(0,y.jsxs)("div",{style:{paddingTop:"150px",minHeight:"calc(100vh - 100px)"},children:[(0,y.jsx)(C.Z,{categories:h,activeCategory:W,onCategoryClick:function(e){return r("/catalog/".concat(e.id),{state:{categories:h}})}}),(0,y.jsx)(E,{onFilterChange:function(e){H(e)}}),(0,y.jsx)("div",{children:D.length?(0,y.jsx)("ul",{className:I,children:D.map((function(e){return(0,y.jsx)(g,{car:e,categoryId:W.id},e.id)}))}):(0,y.jsx)("p",{style:{fontSize:"36px",textAlign:"center",marginTop:"100px"},children:"Sorry we can't find cars with your criteria"})})]})})})}},395:function(e,n,r){r.d(n,{t:function(){return s}});var t=r(861),a=r(757),c=r.n(a),i=r(16),s=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://64fee767f8b9eeca9e294103.mockapi.io/api/categories");case 3:return n=e.sent,e.abrupt("return",n.data);case 7:throw e.prev=7,e.t0=e.catch(0),console.error("Error fetching categories:",e.t0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=808.a39f251b.chunk.js.map