(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{406:function(t,e,o){var content=o(409);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(31).default)("16af6aa7",content,!0,{sourceMap:!1})},407:function(t,e,o){"use strict";o.r(e);o(53);var r=o(0).default.extend({name:"EnquiryPage",data:function(){return{dialogFormVisible:!1,user:"login",form:{},freight_types:["Road Transportation","Air Transportation","Sea Transportation","Warehousing"],incoterms:["EXW","FCA","CPT","CIP","DAT","DAP","DDP","FAS","FOB","CFR","CIF"]}},methods:{}}),n=(o(408),o(23)),component=Object(n.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"support_more"},[e("div",{staticClass:"support_container"},[e("div",{staticClass:"support_inner"},[e("h3",[t._v("Need Support?")]),t._v(" "),e("p",[t._v("We provide first class freight services")]),t._v(" "),e("el-button",{staticClass:"contact_us_btn",on:{click:function(e){return t.$router.push("/contactUs")}}},[t._v("\n        CONTACT US\n      ")])],1)]),t._v(" "),e("div",{staticClass:"support_container support_container_new"},[e("div",{staticClass:"support_inner"},[e("h3",[t._v("For Any Enquiry")]),t._v(" "),e("p",[t._v("We are always available")]),t._v(" "),e("el-button",{staticClass:"contact_us_btn mt-20",on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("\n        CONTACT US\n      ")])],1)]),t._v(" "),e("el-dialog",{attrs:{title:"Freight Details",width:"60%",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[e("el-form",{attrs:{model:t.form}},[e("div",{staticClass:"form_freight_select mb-10"},[e("el-select",{attrs:{placeholder:"Freight Type"},model:{value:t.form.freight_type,callback:function(e){t.$set(t.form,"freight_type",e)},expression:"form.freight_type"}},t._l(t.freight_types,(function(o){return e("el-option",{key:o,attrs:{label:o,value:o}},[t._v("\n            "+t._s(o)+"\n          ")])})),1),t._v(" "),e("el-select",{attrs:{placeholder:"Incoterms"},model:{value:t.form.terms,callback:function(e){t.$set(t.form,"terms",e)},expression:"form.terms"}},t._l(t.incoterms,(function(o){return e("el-option",{key:o,attrs:{label:o,value:o}},[t._v("\n            "+t._s(o)+"\n          ")])})),1)],1),t._v(" "),e("div",[e("el-input",{staticClass:"mb-10",attrs:{placeholder:"City of departure"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),e("el-input",{staticClass:"mb-10",attrs:{placeholder:"Delivery city"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),e("el-input",{staticClass:"mb-10",attrs:{placeholder:"Total gross weight (KG)"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),e("el-input",{staticClass:"mb-10",attrs:{type:"email",placeholder:"Dimension"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),e("el-input",{staticClass:"mb-10",attrs:{placeholder:"Dimension"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),e("el-input",{attrs:{type:"textarea",rows:3,placeholder:"MESSAGE"},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1)]),t._v(" "),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Cancel")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v("Submit")])],1)],1)],1)}),[],!1,null,"205563c4",null);e.default=component.exports},408:function(t,e,o){"use strict";o(406)},409:function(t,e,o){var r=o(30)(!1);r.push([t.i,"@media(min-width:1440px){.support_container_new[data-v-205563c4]{margin-top:30px}}.form_freight_select .el-select[data-v-205563c4]{margin-right:10px}@media(max-width:426px){.form_freight_select[data-v-205563c4]{display:flex;flex-direction:column}}.support_more[data-v-205563c4]{width:100%;margin-left:20px}@media(max-width:769px){.support_more[data-v-205563c4]{display:flex;justify-content:space-around;margin:20px auto}}@media(max-width:426px){.support_more[data-v-205563c4]{display:block}}.support_more .support_container[data-v-205563c4]{height:250px;padding:40px 20px;background:var(--color-primary);margin-bottom:30px;width:340px}@media(max-width:1024px){.support_more .support_container[data-v-205563c4]{width:300px}}@media(max-width:769px){.support_more .support_container[data-v-205563c4]{width:40%;margin-bottom:0}}@media(max-width:426px){.support_more .support_container[data-v-205563c4]{width:80%}}.support_more .support_container .support_inner[data-v-205563c4]{width:90%;text-align:center;margin:0 auto}.support_more .support_container .support_inner h3[data-v-205563c4]{padding-bottom:10px;color:#fff}.support_more .support_container .support_inner p[data-v-205563c4]{color:#fff;padding-bottom:50px}.support_more .support_container .support_inner .contact_us_btn[data-v-205563c4]{color:var(--color-primary)}",""]),t.exports=r}}]);