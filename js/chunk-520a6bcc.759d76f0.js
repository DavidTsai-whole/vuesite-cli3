(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-520a6bcc"],{1717:function(t,a,e){"use strict";e("4e74")},"1a43":function(t,a,e){},"1dde":function(t,a,e){var s=e("d039"),r=e("b622"),o=e("2d00"),l=r("species");t.exports=function(t){return o>=51||!s((function(){var a=[],e=a.constructor={};return e[l]=function(){return{foo:1}},1!==a[t](Boolean).foo}))}},"4e74":function(t,a,e){},"7cb4":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("CartLogo"),e("div",{staticClass:"container mb-5"},[e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-md-8"},[t._m(0),e("div",{staticClass:"mt-5"},[t.allcart.total<1e3&&0!==t.allcart.total?e("div",{staticClass:"text-center"},[e("h4",{staticClass:"font-weight-bold"},[t._v(" 消費總金額 "),e("span",{staticClass:"h2 text-success"},[t._v(" NT$"+t._s(Math.round(t.allcart.final_total+60)))])])]):e("div",{staticClass:"text-center"},[e("h4",{staticClass:"font-weight-bold"},[t._v(" 消費總金額 "),e("span",{staticClass:"h2 text-success"},[t._v(" NT$"+t._s(Math.round(t.allcart.final_total)))])])]),0!==t.allcart.total?e("div",{staticClass:"text-center"},[e("h4",{staticClass:"totalTitle font-weight-bold",on:{click:function(a){a.preventDefault(),t.hide=!t.hide}}},[t._v(" 總計"+t._s(t.cartnum)+"件商品"),1==t.hide?e("i",{staticClass:"fas fa-angle-down"}):e("i",{staticClass:"fas fa-angle-up"})]),e("div",{staticClass:"input-group w-50 ml-auto mr-auto mt-3"},[0!==t.allcart.total?e("input",{directives:[{name:"model",rawName:"v-model",value:t.couponcode,expression:"couponcode"}],staticClass:"inputCoupon form-control",attrs:{type:"text","aria-label":"Recipient's username",placeholder:"請輸入優惠卷","aria-describedby":"button-addon2"},domProps:{value:t.couponcode},on:{input:function(a){a.target.composing||(t.couponcode=a.target.value)}}}):t._e(),e("div",{staticClass:"input-group-append"},[0!==t.allcart.total?e("button",{staticClass:"btn btn-dark1 btn-sm",attrs:{type:"button",id:"button-addon2"},on:{click:t.useCoupon}},[t._v(" 傳送 ")]):t._e()])]),0!==t.allcart.total?e("table",{staticClass:"table mt-5 table-borderless bg-dark1 text-white",class:{"d-none":t.hide}},[t._m(1),e("tbody",t._l(t.allcart.carts,(function(a){return e("tr",{key:a.id,staticClass:"checkBorder"},[a.final_total!==a.total?e("td",{staticClass:"text-center pt-4"},[t._v(" "+t._s(a.product.title)),e("br"),e("span",{staticClass:"text-danger"},[t._v("(已套用優惠卷)")])]):e("td",{staticClass:"text-center pt-4"},[t._v(t._s(a.product.title))]),e("td",{staticClass:"text-center"},[e("img",{staticClass:"checkImg",attrs:{src:""+a.product.imageUrl,alt:""}})]),e("td",{staticClass:"text-center pt-4"},[t._v(t._s(a.qty))]),e("td",{staticClass:"text-center pt-4"},[t._v(t._s(a.product.price))])])})),0),e("tfoot",[e("tr",[t.allcart.total>=1e3?e("td",{staticClass:"text-right free",attrs:{colspan:"4"}},[t._v(" (滿1000免運) ")]):t._e()]),e("tr",[e("td",{staticClass:"text-right free",attrs:{colspan:"3"}},[t._v("小計:")]),e("td",{staticClass:"text-right free"},[t._v("$"+t._s(t.allcart.total))])]),e("tr",{staticClass:"tableBorder"},[e("td",{staticClass:"text-right free ",attrs:{colspan:"3"}},[t._v("運費:")]),t.allcart.total>=1e3||0===t.allcart.total?e("td",{staticClass:"text-right free"},[t._v(" $0 ")]):e("td",{staticClass:"text-right free"},[t._v("$60")])]),e("tr",[e("td",{staticClass:"text-right totalPrice",attrs:{colspan:"3"}},[t._v("總計:")]),t.allcart.total>=1e3||0===t.allcart.total?e("td",{staticClass:"totalPrice text-right"},[t._v(" $"+t._s(t.allcart.total)+" ")]):e("td",{staticClass:"totalPrice text-right"},[t._v("$"+t._s(t.allcart.total+60))])]),t.allcart.total!==t.allcart.final_total&&t.allcart.total<1e3?e("tr",[e("td",{staticClass:"text-right totalPrice text-success",attrs:{colspan:"3"}},[t._v("折扣價:")]),e("td",{staticClass:"totalPrice text-right text-success"},[t._v(" $"+t._s(Math.round(t.allcart.final_total+60))+" ")])]):t._e(),t.allcart.total!==t.allcart.final_total&&t.allcart.total>=1e3?e("tr",[e("td",{staticClass:"text-right totalPrice text-success",attrs:{colspan:"3"}},[t._v("折扣價:")]),e("td",{staticClass:"totalPrice text-right text-success"},[t._v(" $"+t._s(Math.round(t.allcart.final_total))+" ")])]):t._e()])]):t._e()]):t._e()]),0!==t.allcart.total?e("div",{staticClass:"my-5 row justify-content-center bg-dark1 text-white"},[e("validation-observer",{staticClass:"col-md-10 p-3",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.submitorder(a)}}},[e("validation-provider",{staticClass:"form-group",attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"email"}},[t._v("Email"),e("span",{staticClass:"text-danger"},[t._v("(必填)")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.email,expression:"form.user.email"}],staticClass:"form-control",class:r,attrs:{id:"email",type:"email",name:"電子信箱"},domProps:{value:t.form.user.email},on:{input:function(a){a.target.composing||t.$set(t.form.user,"email",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)}),e("validation-provider",{staticClass:"form-group",attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"name"}},[t._v("姓名"),e("span",{staticClass:"text-danger"},[t._v("(必填)")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.name,expression:"form.user.name"}],staticClass:"form-control",class:r,attrs:{id:"name",type:"text",name:"姓名"},domProps:{value:t.form.user.name},on:{input:function(a){a.target.composing||t.$set(t.form.user,"name",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)}),e("validation-provider",{staticClass:"form-group",attrs:{rules:"required|min:8|max:10"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"tel"}},[t._v("電話"),e("span",{staticClass:"text-danger"},[t._v("(必填)")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.tel,expression:"form.user.tel"}],staticClass:"form-control",class:r,attrs:{id:"tel",type:"tel",name:"電話"},domProps:{value:t.form.user.tel},on:{input:function(a){a.target.composing||t.$set(t.form.user,"tel",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)}),e("validation-provider",{staticClass:"form-group",attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,r=a.classes;return[e("label",{attrs:{for:"address"}},[t._v("地址"),e("span",{staticClass:"text-danger"},[t._v("(必填)")])]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.user.address,expression:"form.user.address"}],staticClass:"form-control",class:r,attrs:{id:"address",type:"tel",name:"地址"},domProps:{value:t.form.user.address},on:{input:function(a){a.target.composing||t.$set(t.form.user,"address",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)}),e("validation-provider",{staticClass:"form-group",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors;return[e("label",{attrs:{for:"comment"}},[t._v("留言"),e("span",{staticClass:"text-success"},[t._v("(選填)")])]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{name:"留言",id:"comment",cols:"30",rows:"10"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}}),e("span",{staticClass:"invalid-feedback"},[t._v(t._s(s[0]))])]}}],null,!0)}),e("div",{staticClass:"text-right pb-3 pt-3"},[s?e("button",{staticClass:"notAllowed btn btn-danger",attrs:{disabled:s}},[t._v(" 送出訂單 ")]):t._e(),s?t._e():e("button",{staticClass:"btn btn-danger",attrs:{disabled:s}},[t._v(" 送出訂單 ")])])],1)]}}],null,!1,3421387033)})],1):e("div",{staticClass:"text-center mt-5"},[e("h2",{staticClass:"text-danger font-weight-bold"},[t._v("請重新選購商品!!")]),t._m(2)])])])])],1)},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"list-unstyled d-flex justify-content-around"},[e("li",{staticClass:"topLogo2 d-flex align-items-center justify-content-center h3"},[t._v(" 購物車 ")]),e("li",[e("i",{staticClass:"fas fa-arrow-right fa-4x text-danger ml-2 mr-2"})]),e("li",{staticClass:"topLogo1 d-flex align-items-center justify-content-center h3 text-white bg-dark1"},[t._v(" 結帳 ")]),e("li",[e("i",{staticClass:"fas fa-arrow-right fa-4x text-danger ml-2 mr-2"})]),e("li",{staticClass:"topLogo2 d-flex align-items-center justify-content-center h3"},[t._v(" 訂單完成 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"smth thead-dark"},[e("th",{staticClass:"text-center"},[t._v("品名")]),e("th",{staticClass:"text-center"},[t._v("圖片")]),e("th",{staticClass:"text-center"},[t._v("數量")]),e("th",{staticClass:"text-center"},[t._v("價錢")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"d-flex justify-content-around mt-5"},[e("a",{staticClass:"h3 cartin font-weight-bold",attrs:{href:"#/product"}},[e("i",{staticClass:"fas fa-arrow-circle-left"}),t._v("回首頁")]),e("a",{staticClass:"h3 cartin font-weight-bold",attrs:{href:"#/"}},[e("i",{staticClass:"fas fa-arrow-circle-right"}),t._v("前往購物")])])}],o=(e("99af"),e("a882")),l={components:{CartLogo:o["a"]},data:function(){return{isLoading:!1,allcart:[],cartnum:0,hide:!0,couponcode:"",form:{user:{name:"",email:"",tel:"",address:""},message:""},cartData:JSON.parse(localStorage.getItem("cartData"))||[],LocalData:[]}},methods:{getcart:function(){var t=this;t.isLoading=!0;var a="".concat("https://vue-course-api.hexschool.io","/api/").concat("asdsadas","/cart");t.$http.get(a).then((function(a){t.isLoading=!1,t.allcart=a.data.data,t.cartnum=t.cartData.length}))},useCoupon:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("asdsadas","/coupon");t.isLoading=!0;var e={code:t.couponcode};t.$http.post(a,{data:e}).then((function(a){t.isLoading=!1,t.coupondata=a.data.data,!0===a.data.success?t.$bus.$emit("message:push","已使用優惠卷","light"):t.$bus.$emit("message:push","此序號不存在","danger"),t.getcart()}))},submitorder:function(){var t=this,a="".concat("https://vue-course-api.hexschool.io","/api/").concat("asdsadas","/order");t.isLoading=!0,t.$http.post(a,{data:t.form}).then((function(a){t.cartData=[],localStorage.removeItem("cartData"),t.isLoading=!1,t.$bus.$emit("number"),t.$router.push("/checkoutFinal/".concat(a.data.orderId))}))}},created:function(){var t=this;t.getcart(),t.$bus.$on("getLocalData",(function(a){t.LocalData.push(a)}))}},c=l,n=(e("1717"),e("2877")),i=Object(n["a"])(c,s,r,!1,null,"5deba7b2",null);a["default"]=i.exports},8418:function(t,a,e){"use strict";var s=e("c04e"),r=e("9bf2"),o=e("5c6c");t.exports=function(t,a,e){var l=s(a);l in t?r.f(t,l,o(0,e)):t[l]=e}},"91b6":function(t,a,e){"use strict";e("1a43")},"99af":function(t,a,e){"use strict";var s=e("23e7"),r=e("d039"),o=e("e8b5"),l=e("861d"),c=e("7b0b"),n=e("50c4"),i=e("8418"),u=e("65f0"),d=e("1dde"),f=e("b622"),m=e("2d00"),v=f("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",_=m>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=d("concat"),C=function(t){if(!l(t))return!1;var a=t[v];return void 0!==a?!!a:o(t)},b=!_||!h;s({target:"Array",proto:!0,forced:b},{concat:function(t){var a,e,s,r,o,l=c(this),d=u(l,0),f=0;for(a=-1,s=arguments.length;a<s;a++)if(o=-1===a?l:arguments[a],C(o)){if(r=n(o.length),f+r>p)throw TypeError(g);for(e=0;e<r;e++,f++)e in o&&i(d,f,o[e])}else{if(f>=p)throw TypeError(g);i(d,f++,o)}return d.length=f,d}})},a882:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cartlogo"},[t._m(0),0!==t.cartNum?e("span",{staticClass:"number d-flex align-items-center justify-content-center text-white"},[t._v(t._s(t.cartNum))]):t._e()])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("a",{staticClass:"logocart d-flex align-items-center justify-content-center",attrs:{href:"#/cart"}},[e("i",{staticClass:"fas fa-shopping-cart fa-2x text-white"})])}],o={data:function(){return{cartData:[],cartNum:0}},methods:{number:function(){var t=this;t.cartNum=t.cartData.length}},created:function(){var t=this;t.cartData=JSON.parse(localStorage.getItem("cartData"))||[],t.cartNum=t.cartData.length,t.$bus.$on("number",(function(){t.cartData=JSON.parse(localStorage.getItem("cartData"))||[],t.number()}))}},l=o,c=(e("91b6"),e("2877")),n=Object(c["a"])(l,s,r,!1,null,null,null);a["a"]=n.exports}}]);
//# sourceMappingURL=chunk-520a6bcc.759d76f0.js.map