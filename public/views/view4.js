(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{26:function(t,s,a){"use strict";a.r(s);var r={metaInfo:{title:"Register"},data:function(){return{errors:{}}},methods:{register:function(){var t=this;this.$store.state.loading=!0;var s=document.querySelector("#registerForm"),a=new FormData(s);this.$http.post("/api/auth/register",a).then((function(s){t.$store.state.token=localStorage.token=s.data,t.$store.commit("login",s.data)})).catch((function(s){t.errors=s.response.data.errors})).finally((function(){t.$store.state.loading=!1}))}},mounted:function(){}},e=a(0),i=Object(e.a)(r,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center align-content-center almost-full-height"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Register")]),t._v(" "),a("div",{staticClass:"card-body"},[t._l(t.errors,(function(s,r){return a("div",{key:r,staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("strong",[t._v(t._s(s[0]))])])})),t._v(" "),a("form",{attrs:{id:"registerForm",method:"POST",action:"register"},on:{submit:function(s){return s.preventDefault(),t.register(s)}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4)])],2)])])])])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"name"}},[this._v("Name")]),this._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{staticClass:"form-control",attrs:{id:"name",type:"text",name:"name",autofocus:"",autocomplete:"family-name"}}),this._v(" "),s("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[s("strong")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[this._v("E-Mail Address")]),this._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autocomplete:"email"}}),this._v(" "),s("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[s("strong")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[this._v("Password")]),this._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:"",autocomplete:"new-password"}}),this._v(" "),s("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[s("strong")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row"},[s("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password-confirm"}},[this._v("Confirm Password")]),this._v(" "),s("div",{staticClass:"col-md-6"},[s("input",{staticClass:"form-control",attrs:{id:"password-confirm",type:"password",name:"password_confirmation",required:"",autocomplete:"new-password"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"form-group row mb-0"},[s("div",{staticClass:"col-md-6 offset-md-4"},[s("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[this._v("Register")])])])}],!1,null,null,null);s.default=i.exports}}]);