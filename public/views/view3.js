(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{25:function(t,s,a){"use strict";a.r(s);var e={data:function(){return{error:!1,message:null,attempts:0}},methods:{login:function(){var t=this;this.$store.state.loading=!0;var s=document.querySelector("#loginForm"),a=new FormData(s);this.$http.post("/api/auth/login",a).then((function(s){t.$store.state.token=localStorage.token=s.data,t.$store.commit("login",s.data)})).catch((function(s){t.message=s.response.data.message,t.error=!0})).finally((function(){t.$store.state.loading=!1,setTimeout((function(){t.error=!1}),3e3)}))}}},r=a(0),o=Object(r.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("navigation-bar",[a("div",{staticClass:"container"},[a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[t._v("Login")]),t._v(" "),a("div",{staticClass:"card-body"},[t.error?a("div",{staticClass:"alert alert-danger",attrs:{role:"alert"}},[a("strong",[t._v(t._s(t.message))])]):t._e(),t._v(" "),a("form",{attrs:{id:"loginForm",method:"POST",action:"/login"},on:{submit:function(s){return s.preventDefault(),t.login(s)}}},[a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"email"}},[t._v("E-Mail Address")]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("input",{staticClass:"form-control",attrs:{id:"email",type:"email",name:"email",value:"",required:"",autocomplete:"email",autofocus:""}}),t._v(" "),a("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[a("strong")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("label",{staticClass:"col-md-4 col-form-label text-md-right",attrs:{for:"password"}},[t._v("Password")]),t._v(" "),a("div",{staticClass:"col-md-6"},[a("input",{staticClass:"form-control",attrs:{id:"password",type:"password",name:"password",required:"",autocomplete:"current-password"}}),t._v(" "),a("span",{staticClass:"invalid-feedback",attrs:{role:"alert"}},[a("strong")])])]),t._v(" "),a("div",{staticClass:"form-group row"},[a("div",{staticClass:"col-md-6 offset-md-4"},[a("div",{staticClass:"form-check"},[a("input",{staticClass:"form-check-input",attrs:{type:"checkbox",name:"remember",id:"remember"}}),t._v(" "),a("label",{staticClass:"form-check-label",attrs:{for:"remember"}},[t._v("Remember Me")])])])]),t._v(" "),a("div",{staticClass:"form-group row mb-0"},[a("div",{staticClass:"col-md-8 offset-md-4"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Login")]),t._v(" "),a("router-link",{staticClass:"btn btn-link",attrs:{to:"/password/reset"}},[t._v("Forgot Your Password?")])],1)])])])])])])])])}),[],!1,null,null,null);s.default=o.exports}}]);