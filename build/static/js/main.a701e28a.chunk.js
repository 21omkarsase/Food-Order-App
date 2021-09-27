(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__1yove",control:"Checkout_control__2tlDq",actions:"Checkout_actions__Z0q2c",submit:"Checkout_submit__1Yh2d",invalid:"Checkout_invalid__2_Apm"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__buOaA",total:"Cart_total__3vpcK",actions:"Cart_actions__3gtH4","button--alt":"Cart_button--alt__3-fQy",button:"Cart_button__wpwjY"}},,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__17_G8",summary:"CartItem_summary__1AilR",price:"CartItem_price__3HwUj",amount:"CartItem_amount__1ZIDv",actions:"CartItem_actions__CrSQr"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2QV7B",icon:"HeaderCartButton_icon__1yYbL",badge:"HeaderCartButton_badge__epvYK",bump:"HeaderCartButton_bump__14tvA"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__17s46",modal:"Modal_modal__4JC8_","slide-down":"Modal_slide-down__1lMll"}},function(e,t,n){e.exports={meals:"Available_meals__1bhTy","meals-appear":"Available_meals-appear__1bElN",mealsLoading:"Available_mealsLoading__1q6ap",httpError:"Available_httpError__Ojsvd"}},function(e,t,n){e.exports={meal:"MealItem_meal__2yVAE",description:"MealItem_description__3FYIc",price:"MealItem_price__b3yeN"}},,function(e,t,n){e.exports={header:"Header_header__1ASdS","main-image":"Header_main-image__3CKnz"}},,function(e,t,n){e.exports={card:"Card_card__x1YDB"}},function(e,t,n){e.exports={input:"Input_input__3-hVm"}},function(e,t,n){e.exports={form:"MealItemForm_form__2eev0"}},function(e,t,n){e.exports={summary:"MealsSummery_summary__1Wq1u"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(8),a=n.n(c),r=(n(27),n(2)),i=n(1),s=n.n(i),o=n(6),l=n.n(o),u=n(12),d=n(4),j=n(13),m=n.n(j),b=n(0),O=function(e){return Object(b.jsx)("div",{className:m.a.backdrop,onClick:e.onClose})},p=function(e){return Object(b.jsx)("div",{className:m.a.modal,children:Object(b.jsx)("div",{className:m.a.content,children:e.children})})},h=document.getElementById("overlay"),x=function(e){return Object(b.jsxs)(b.Fragment,{children:[a.a.createPortal(Object(b.jsx)(O,{onClose:e.onClose}),h),a.a.createPortal(Object(b.jsx)(p,{children:e.children}),h)]})},f=n(5),_=n.n(f),v=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),C=n(7),y=n.n(C),N=function(e){var t=e.price.toFixed(2);return Object(b.jsxs)("li",{className:y.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:y.a.summary,children:[Object(b.jsxs)("span",{className:y.a.price,children:["$",t]}),Object(b.jsxs)("span",{className:y.a.amount,children:["x ",e.amount]})]})]}),Object(b.jsxs)("div",{className:y.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=n(3),A=n.n(g),k=function(e){return""===e.trim()},w=function(e){var t=Object(i.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o=Object(i.useRef)(),l=Object(i.useRef)(),u=Object(i.useRef)(),d="".concat(A.a.control," ").concat(c.name?"":A.a.invalid),j="".concat(A.a.control," ").concat(c.street?"":A.a.invalid),m="".concat(A.a.control," ").concat(c.postalCode?"":A.a.invalid),O="".concat(A.a.control," ").concat(c.city?"":A.a.invalid);return Object(b.jsxs)("form",{className:A.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,r=l.current.value,i=u.current.value,d=!k(n),j=!k(c),m=!k(i),b=!(5!==r.trim().length),O=m&&d&&b&&j;a({name:d,street:j,city:m,postalCode:b}),O&&e.onConfirm({name:n,street:c,city:i,postalCode:r})},children:[Object(b.jsxs)("div",{className:d,children:[Object(b.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(b.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(b.jsx)("p",{children:"please enter a valid name"})]}),Object(b.jsxs)("div",{className:j,children:[Object(b.jsx)("label",{htmlFor:"street",children:"Street"}),Object(b.jsx)("input",{type:"text",id:"street",ref:o}),!c.street&&Object(b.jsx)("p",{children:"please enter a valid street name"})]}),Object(b.jsxs)("div",{className:m,children:[Object(b.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(b.jsx)("input",{type:"number",id:"postal",ref:l}),!c.postalCode&&Object(b.jsx)("p",{children:"please enter a valid postal Code"})]}),Object(b.jsxs)("div",{className:O,children:[Object(b.jsx)("label",{htmlFor:"city",children:"City"}),Object(b.jsx)("input",{type:"text",id:"city",ref:u}),!c.city&&Object(b.jsx)("p",{children:"please enter a valid city name"})]}),Object(b.jsxs)("div",{className:A.a.actions,children:[Object(b.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(b.jsx)("button",{className:A.a.submit,children:"Confirm"})]})]})},I=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useState)(!1),o=Object(r.a)(s,2),j=o[0],m=o[1],O=Object(i.useState)(!1),p=Object(r.a)(O,2),h=p[0],f=p[1],C=Object(i.useContext)(v),y=C.totalAmount.toFixed(2),g=C.items.length>0,A=function(e){C.removeItem(e)},k=function(e){C.addItem(Object(d.a)(Object(d.a)({},e),{},{amount:1}))},I=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://food-order-app-63c95-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:C.items})});case 3:e.sent,m(!1),f(!0),C.clearCart();case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=Object(b.jsx)("ul",{className:_.a["cart-items"],children:C.items.map((function(e){return Object(b.jsx)(N,{name:e.name,amount:e.amount,price:e.price,onRemove:A.bind(null,e.id),onAdd:k.bind(null,e)},e.id)}))}),E=Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{className:_.a["button-alt"],onClick:e.onClose,children:"Close"}),g&&Object(b.jsx)("button",{className:_.a.button,onClick:function(){a(!0)},children:"Order"})]}),F=Object(b.jsxs)(b.Fragment,{children:[S,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:y})]}),c&&Object(b.jsx)(w,{onConfirm:I,onCancel:e.onClose}),!c&&E]}),M=Object(b.jsx)("p",{children:"sending the order..."}),R=Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("p",{children:" Successfully sent the order"}),Object(b.jsx)("div",{className:_.a.actions,children:Object(b.jsx)("button",{className:_.a["button-alt"],onClick:e.onClose,children:"Close"})})]});return Object(b.jsxs)(x,{onClose:e.onClose,children:[!j&&!h&&F,j&&M,h&&!j&&R]})},S=n.p+"static/media/meals.2971f633.jpg",E=n(17),F=n.n(E),M=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},R=n(10),H=n.n(R),D=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useContext)(v),o=s.items.reduce((function(e,t){return e+t.amount}),0),l=s.items,u="".concat(H.a.button," ").concat(c?H.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.items.length){a(!0);setTimeout((function(){a(!1)}),300)}}),[l]),Object(b.jsxs)("button",{className:u,onClick:e.onClick,children:[Object(b.jsx)("span",{className:H.a.icon,children:Object(b.jsx)(M,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:H.a.badge,children:o})]})},B=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("header",{className:F.a.header,children:[Object(b.jsx)("h1",{children:"ReactMeals"}),Object(b.jsx)(D,{onClick:e.onShowCart})]}),Object(b.jsx)("div",{className:F.a["main-image"],children:Object(b.jsx)("img",{src:S,alt:"a Table full of dishes"})})]})},Y=n(19),T=n.n(Y),L=function(e){return Object(b.jsx)("div",{className:T.a.card,children:e.children})},P=n(14),V=n.n(P),q=n(15),z=n.n(q),J=n(20),K=n.n(J),Q=s.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:K.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(d.a)({ref:t},e.input))]})})),Z=n(21),$=n.n(Z),G=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),c=n[0],a=n[1],s=Object(i.useRef)(),o={id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"};return Object(b.jsxs)("form",{className:$.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().lenght||c<1||c>5?a(!1):e.onAddToCart(c)},children:[Object(b.jsx)(Q,{ref:s,label:"Amount",input:o}),Object(b.jsx)("button",{children:"+Add"}),!c&&Object(b.jsx)("p",{children:"Please enter a valid amount(1-5)."})]})},U=function(e){var t=Object(i.useContext)(v),n="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:z.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:z.a.description,children:e.description}),Object(b.jsx)("div",{className:z.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(G,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})},id:e.id})})]})},W=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),s=Object(r.a)(a,2),o=s[0],d=s[1],j=Object(i.useState)(),m=Object(r.a)(j,2),O=m[0],p=m[1];if(Object(i.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,n,a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://food-order-app-63c95-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});c(a),d(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){d(!1),p(e.message)}))}),[]),o)return Object(b.jsx)("section",{className:V.a.mealsLoading,children:Object(b.jsx)("p",{children:"Loading..."})});if(O)return Object(b.jsx)("section",{className:V.a.httpError,children:Object(b.jsx)("p",{children:O})});var h=n.map((function(e){return Object(b.jsx)(U,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:V.a.meals,children:Object(b.jsx)(L,{children:Object(b.jsx)("ul",{children:h})})})},X=n(22),ee=n.n(X),te=function(){return Object(b.jsxs)("section",{className:ee.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},ne=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(te,{}),Object(b.jsx)(W,{})]})},ce=n(18),ae={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[a];if(r){var i=Object(d.a)(Object(d.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ce.a)(e.items))[a]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var j=Object(d.a)(Object(d.a)({},l),{},{amount:l.amount-1});(s=Object(ce.a)(e.items))[o]=j}return{items:s,totalAmount:u}}return"CLEAR"===t.type?{items:[],totalAmount:0}:ae},ie=function(e){var t=Object(i.useReducer)(re,ae),n=Object(r.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(b.jsx)(v.Provider,{value:s,children:e.children})},se=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(b.jsxs)(ie,{children:[n&&Object(b.jsx)(I,{onClose:function(){c(!1)}}),Object(b.jsx)(B,{onShowCart:function(){c(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(ne,{})})]})};a.a.render(Object(b.jsx)(se,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.a701e28a.chunk.js.map