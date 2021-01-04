(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Gimena\source\repos\proyectobilletera\proyecto-clip-money-b-g1b\billeterafront\src\main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HeaderComponent {
    constructor() {
        this.title = 'Billetera Virtual';
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 1, template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6z/x":
/*!*********************************************************************!*\
  !*** ./src/app/components/resetpassword/resetpassword.component.ts ***!
  \*********************************************************************/
/*! exports provided: ResetpasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetpasswordComponent", function() { return ResetpasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_login_usuario_login_usuario_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/login-usuario/login-usuario.module */ "jC9z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_usuario_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/usuario-login.service */ "ANRG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ResetpasswordComponent_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El Email es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetpasswordComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe tener formato de Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetpasswordComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetpasswordComponent_div_10_div_1_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetpasswordComponent_div_10_div_2_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.invalid);
} }
class ResetpasswordComponent {
    constructor(router, usuarioLoginService, fb) {
        this.router = router;
        this.usuarioLoginService = usuarioLoginService;
        this.fb = fb;
        this.selectedLogin = new src_app_models_login_usuario_login_usuario_module__WEBPACK_IMPORTED_MODULE_2__["LoginUsuarioModule"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    get f() {
        return this.form.controls;
    }
    onSubmit(login) {
        if (this.form.invalid) {
            return;
        }
        else {
            console.log(login);
            this.usuarioLoginService.allowPasswordChange(login).subscribe(data => {
                console.log(data);
            });
            /*
            if (data){
              this.router.navigateByUrl('/secretanswer');
            }else{
              alert("El correo suministrado no existe en el registro...")
            }*/
        }
        return this.selectedLogin;
    }
}
ResetpasswordComponent.ɵfac = function ResetpasswordComponent_Factory(t) { return new (t || ResetpasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_usuario_login_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
ResetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetpasswordComponent, selectors: [["app-resetpassword"]], decls: 13, vars: 4, consts: [[1, "container"], [1, "segment"], [1, "register-img"], ["src", "https://www.flaticon.es/svg/static/icons/svg/2506/2506463.svg", "alt", "logo Bitcoin", 1, "logo"], [1, "page-title"], ["id", "resetpassword-form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "text-form"], ["formControlName", "email", "id", "email", "type", "email", "placeholder", "Email", "ngModel", "", "email", "true", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-3", 3, "disabled"], [1, "alert", "alert-danger"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function ResetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00BFOlvidaste tu Contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetpasswordComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.selectedLogin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ingres\u00E1 el email asociado a tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetpasswordComponent_Template_input_ngModelChange_9_listener($event) { return ctx.selectedLogin.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ResetpasswordComponent_div_10_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Recuperar Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedLogin.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.email.touched && ctx.f.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\r\n[_nghost-%COMP%] {\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    display: block;\r\n}\r\nh1.page-title[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-bottom: 2rem;\r\n    padding-top: 0.5rem;\r\n    font-size: 42px;\r\n    font-weight: 800;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n}\r\n.text-form[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin: 3rem 0rem 2rem 0rem;\r\n    padding-left: 2rem;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    padding-right: 0.5rem;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n    \r\n}\r\nimg.logo[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: none;\r\n    align-items: center;\r\n    margin: auto;\r\n    padding: 3%;\r\n    opacity: 0.7;\r\n}\r\n.welcome[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: auto;\r\n    padding: 10px 23px 30px 24px;\r\n    padding: 2%;\r\n    background-color: #ffffff;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin: 1%;\r\n    display: block;\r\n}\r\n.segment-myaccount[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: block;\r\n    margin: 2%;\r\n}\r\n.form-myaccount[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 90%;\r\n    height: 50px;\r\n    color: #fff;\r\n    border-radius: 12px;\r\n    margin-bottom: 4%;\r\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\r\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\r\n}\r\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 2%;\r\n    border-radius: 6px;\r\n    border: solid 1px #f1f1f1;\r\n    background-color: #fafafa;\r\n    padding-left: 2%;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #777777;\r\n}\r\n.link-text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    width: 100%;\r\n    color: #7db6e7;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    \r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin-bottom: 2%;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 16px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    margin: 3%;\r\n}\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    color: #e23141;\r\n    background-color: #fff;\r\n    border-color: #f5c6cb;\r\n    width: 90%;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 10px;\r\n}\r\n@media (min-width: 576px) {}\r\n@media (min-width: 768px) {\r\n    .segment[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    .form[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n    img.logo[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .actions[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\r\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGO0FBQ3pGO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFHQSw0QkFBNEI7QUFFNUI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrREFBa0Q7SUFDbEQsNkRBQTZEO0FBQ2pFO0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBOzs7SUFHSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnKTtcclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcblxyXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEucGFnZS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuLnRleHQtZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzcmVtIDByZW0gMnJlbSAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMyZjJmMmY7XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cclxufVxyXG5cclxuaW1nLmxvZ28ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHggMzBweCAyNHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWdtZW50LW15YWNjb3VudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uZm9ybS1teWFjY291bnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5Lm10LTMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWdtZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDEyMTY5ZDEsICM1NDg5ZmYpO1xyXG59XHJcblxyXG4uc2VnbWVudCBpbnB1dCxcclxuLnNlZ21lbnQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLmxpbmstdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjN2RiNmU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG59XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlZ21lbnQgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWdtZW50IGE6aG92ZXIsXHJcbi5saW5rLXRleHQsXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWltZyxcclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2UyMzE0MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZWdtZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgaW1nLmxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetpassword',
                templateUrl: './resetpassword.component.html',
                styleUrls: ['../../app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_usuario_login_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioLoginService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AKBL":
/*!*************************************************************!*\
  !*** ./src/app/components/myaccount/myaccount.component.ts ***!
  \*************************************************************/
/*! exports provided: MyaccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyaccountComponent", function() { return MyaccountComponent; });
/* harmony import */ var _models_modificar_usuario_modificar_usuario_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/modificar-usuario/modificar-usuario.module */ "i/CN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class MyaccountComponent {
    constructor(usuarioService, route) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.selectedUsuario = new _models_modificar_usuario_modificar_usuario_module__WEBPACK_IMPORTED_MODULE_0__["ModificarUsuarioModule"]();
    }
    ngOnInit() {
        let id = parseInt(localStorage.getItem('id'));
    }
    onSubmit(usuario) {
        usuario.id = parseInt(localStorage.getItem('id'));
        if (usuario.id) {
            console.log(usuario.id);
            this.usuarioService.onUpdateUsuario(usuario).subscribe(resp => {
                this.usuarios.push(resp);
                console.log(resp);
            });
        }
        console.log(this.selectedUsuario);
        this.selectedUsuario = new _models_modificar_usuario_modificar_usuario_module__WEBPACK_IMPORTED_MODULE_0__["ModificarUsuarioModule"]();
        console.log(this.selectedUsuario.fechaNacimiento);
        alert('Datos completados correctamente');
        this.route.navigateByUrl('');
        return this.selectedUsuario;
    }
}
MyaccountComponent.ɵfac = function MyaccountComponent_Factory(t) { return new (t || MyaccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
MyaccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyaccountComponent, selectors: [["app-myaccount"]], decls: 45, vars: 13, consts: [[1, "container"], [1, "page-title"], ["id", "register-form", 1, "form"], [1, "form-myaccount"], [1, "segment-myaccount"], [1, "form-group"], ["type", "text", "name", "Nombre", "placeholder", "Nombre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Apellido", "placeholder", "Apellido", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Dni", "placeholder", "N\u00BA DNI", "maxlength", "8", "pattern", "[0-9]", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "frente-dni"], [1, "form-check"], ["type", "radio", "name", "gender", "id", "female", "value", "female", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "female", 1, "form-check-label"], ["type", "radio", "name", "gender", "id", "male", "value", "male", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "male", 1, "form-check-label"], ["type", "radio", "name", "gender", "id", "others", "value", "others", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "others", 1, "form-check-label"], ["type", "date", "name", "fechaNacimiento", "placeholder", "Fecha de Nacimiento", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Cuil_Cuit", "placeholder", "Cuil-Cuit", "maxlength", "11", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "calle", "placeholder", "Calle", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "numero_de_calle", "placeholder", "Numero de Calle", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "barrio", "placeholder", "Barrio", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "codigo_postal", "placeholder", "Codigo Postal", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "ciudad", "placeholder", "Ciudad", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "mt-3", 3, "click"]], template: function MyaccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Complet\u00E1 tus datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_7_listener($event) { return ctx.selectedUsuario.nombre = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_9_listener($event) { return ctx.selectedUsuario.apellido = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_11_listener($event) { return ctx.selectedUsuario.dni = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Selecciona el g\u00E9nero con el que te identificas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_16_listener($event) { return ctx.selectedUsuario.genero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Femenino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_20_listener($event) { return ctx.selectedUsuario.genero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Masculino ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_24_listener($event) { return ctx.selectedUsuario.genero = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Otro ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_28_listener($event) { return ctx.selectedUsuario.fechaNacimiento = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_30_listener($event) { return ctx.selectedUsuario.cuil_cuit = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_33_listener($event) { return ctx.selectedUsuario.calle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_35_listener($event) { return ctx.selectedUsuario.numero_de_calle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_37_listener($event) { return ctx.selectedUsuario.barrio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_39_listener($event) { return ctx.selectedUsuario.codigo_postal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_41_listener($event) { return ctx.selectedUsuario.ciudad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyaccountComponent_Template_button_click_43_listener() { return ctx.onSubmit(ctx.selectedUsuario); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.nombre);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.apellido);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.dni);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.genero);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.fechaNacimiento);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.cuil_cuit);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.calle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.numero_de_calle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.barrio);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.codigo_postal);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.ciudad);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\r\n[_nghost-%COMP%] {\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    display: block;\r\n}\r\nh1.page-title[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-bottom: 2rem;\r\n    padding-top: 0.5rem;\r\n    font-size: 42px;\r\n    font-weight: 800;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n}\r\n.text-form[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin: 3rem 0rem 2rem 0rem;\r\n    padding-left: 2rem;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    padding-right: 0.5rem;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n    \r\n}\r\nimg.logo[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: none;\r\n    align-items: center;\r\n    margin: auto;\r\n    padding: 3%;\r\n    opacity: 0.7;\r\n}\r\n.welcome[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: auto;\r\n    padding: 10px 23px 30px 24px;\r\n    padding: 2%;\r\n    background-color: #ffffff;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin: 1%;\r\n    display: block;\r\n}\r\n.segment-myaccount[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: block;\r\n    margin: 2%;\r\n}\r\n.form-myaccount[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 90%;\r\n    height: 50px;\r\n    color: #fff;\r\n    border-radius: 12px;\r\n    margin-bottom: 4%;\r\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\r\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\r\n}\r\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 2%;\r\n    border-radius: 6px;\r\n    border: solid 1px #f1f1f1;\r\n    background-color: #fafafa;\r\n    padding-left: 2%;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #777777;\r\n}\r\n.link-text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    width: 100%;\r\n    color: #7db6e7;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    \r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin-bottom: 2%;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 16px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    margin: 3%;\r\n}\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    color: #e23141;\r\n    background-color: #fff;\r\n    border-color: #f5c6cb;\r\n    width: 90%;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 10px;\r\n}\r\n@media (min-width: 576px) {}\r\n@media (min-width: 768px) {\r\n    .segment[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    .form[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n    img.logo[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .actions[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\r\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGO0FBQ3pGO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFHQSw0QkFBNEI7QUFFNUI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrREFBa0Q7SUFDbEQsNkRBQTZEO0FBQ2pFO0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBOzs7SUFHSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnKTtcclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcblxyXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEucGFnZS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuLnRleHQtZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzcmVtIDByZW0gMnJlbSAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMyZjJmMmY7XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cclxufVxyXG5cclxuaW1nLmxvZ28ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHggMzBweCAyNHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWdtZW50LW15YWNjb3VudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uZm9ybS1teWFjY291bnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5Lm10LTMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWdtZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDEyMTY5ZDEsICM1NDg5ZmYpO1xyXG59XHJcblxyXG4uc2VnbWVudCBpbnB1dCxcclxuLnNlZ21lbnQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLmxpbmstdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjN2RiNmU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG59XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlZ21lbnQgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWdtZW50IGE6aG92ZXIsXHJcbi5saW5rLXRleHQsXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWltZyxcclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2UyMzE0MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZWdtZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgaW1nLmxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MyaccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-myaccount',
                templateUrl: './myaccount.component.html',
                styleUrls: ['../../app.component.css']
            }]
    }], function () { return [{ type: src_app_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "ANRG":
/*!***************************************************!*\
  !*** ./src/app/services/usuario-login.service.ts ***!
  \***************************************************/
/*! exports provided: UsuarioLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioLoginService", function() { return UsuarioLoginService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UsuarioLoginService {
    constructor(http) {
        this.http = http;
        this.url = "https://localhost:44300/api/usuarioLogin";
        console.log("UsuarioLogin service is running");
    }
    getIdUsuario(login) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.url, login);
    }
    allowPasswordChange(login) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.get(this.url);
    }
}
UsuarioLoginService.ɵfac = function UsuarioLoginService_Factory(t) { return new (t || UsuarioLoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
UsuarioLoginService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsuarioLoginService, factory: UsuarioLoginService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsuarioLoginService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BuFo":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() {
        this.Image = '/assets/images/phone.png';
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 0, consts: [[1, "container"], [1, "page-title", "text-center"], [1, "container", "text-center"], ["src", "https://github.com/pgClipfs/proyecto-clip-money-b-g1b/blob/Felisa-tareas/billeterafront/src/assets/images/phone.png?raw=true", "alt", "imagen de bienvenida", 1, "welcome", "img-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bienvenidos ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\r\n[_nghost-%COMP%] {\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    display: block;\r\n}\r\nh1.page-title[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-bottom: 2rem;\r\n    padding-top: 0.5rem;\r\n    font-size: 42px;\r\n    font-weight: 800;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n}\r\n.text-form[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin: 3rem 0rem 2rem 0rem;\r\n    padding-left: 2rem;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    padding-right: 0.5rem;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n    \r\n}\r\nimg.logo[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: none;\r\n    align-items: center;\r\n    margin: auto;\r\n    padding: 3%;\r\n    opacity: 0.7;\r\n}\r\n.welcome[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: auto;\r\n    padding: 10px 23px 30px 24px;\r\n    padding: 2%;\r\n    background-color: #ffffff;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin: 1%;\r\n    display: block;\r\n}\r\n.segment-myaccount[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: block;\r\n    margin: 2%;\r\n}\r\n.form-myaccount[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 90%;\r\n    height: 50px;\r\n    color: #fff;\r\n    border-radius: 12px;\r\n    margin-bottom: 4%;\r\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\r\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\r\n}\r\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 2%;\r\n    border-radius: 6px;\r\n    border: solid 1px #f1f1f1;\r\n    background-color: #fafafa;\r\n    padding-left: 2%;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #777777;\r\n}\r\n.link-text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    width: 100%;\r\n    color: #7db6e7;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    \r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin-bottom: 2%;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 16px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    margin: 3%;\r\n}\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    color: #e23141;\r\n    background-color: #fff;\r\n    border-color: #f5c6cb;\r\n    width: 90%;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 10px;\r\n}\r\n@media (min-width: 576px) {}\r\n@media (min-width: 768px) {\r\n    .segment[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    .form[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n    img.logo[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .actions[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\r\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGO0FBQ3pGO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFHQSw0QkFBNEI7QUFFNUI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrREFBa0Q7SUFDbEQsNkRBQTZEO0FBQ2pFO0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBOzs7SUFHSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnKTtcclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcblxyXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEucGFnZS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuLnRleHQtZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzcmVtIDByZW0gMnJlbSAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMyZjJmMmY7XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cclxufVxyXG5cclxuaW1nLmxvZ28ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHggMzBweCAyNHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWdtZW50LW15YWNjb3VudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uZm9ybS1teWFjY291bnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5Lm10LTMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWdtZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDEyMTY5ZDEsICM1NDg5ZmYpO1xyXG59XHJcblxyXG4uc2VnbWVudCBpbnB1dCxcclxuLnNlZ21lbnQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLmxpbmstdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjN2RiNmU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG59XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlZ21lbnQgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWdtZW50IGE6aG92ZXIsXHJcbi5saW5rLXRleHQsXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWltZyxcclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2UyMzE0MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZWdtZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgaW1nLmxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['../../app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FooterComponent {
    constructor() {
        this.text = 'Clip';
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 1, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppComponent {
    constructor() {
        this.title = 'billeterafront';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\r\n[_nghost-%COMP%] {\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    display: block;\r\n}\r\nh1.page-title[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-bottom: 2rem;\r\n    padding-top: 0.5rem;\r\n    font-size: 42px;\r\n    font-weight: 800;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n}\r\n.text-form[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin: 3rem 0rem 2rem 0rem;\r\n    padding-left: 2rem;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    padding-right: 0.5rem;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n    \r\n}\r\nimg.logo[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: none;\r\n    align-items: center;\r\n    margin: auto;\r\n    padding: 3%;\r\n    opacity: 0.7;\r\n}\r\n.welcome[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: auto;\r\n    padding: 10px 23px 30px 24px;\r\n    padding: 2%;\r\n    background-color: #ffffff;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin: 1%;\r\n    display: block;\r\n}\r\n.segment-myaccount[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: block;\r\n    margin: 2%;\r\n}\r\n.form-myaccount[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 90%;\r\n    height: 50px;\r\n    color: #fff;\r\n    border-radius: 12px;\r\n    margin-bottom: 4%;\r\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\r\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\r\n}\r\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 2%;\r\n    border-radius: 6px;\r\n    border: solid 1px #f1f1f1;\r\n    background-color: #fafafa;\r\n    padding-left: 2%;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #777777;\r\n}\r\n.link-text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    width: 100%;\r\n    color: #7db6e7;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    \r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin-bottom: 2%;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 16px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    margin: 3%;\r\n}\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    color: #e23141;\r\n    background-color: #fff;\r\n    border-color: #f5c6cb;\r\n    width: 90%;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 10px;\r\n}\r\n@media (min-width: 576px) {}\r\n@media (min-width: 768px) {\r\n    .segment[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    .form[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n    img.logo[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .actions[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\r\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGO0FBQ3pGO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFHQSw0QkFBNEI7QUFFNUI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrREFBa0Q7SUFDbEQsNkRBQTZEO0FBQ2pFO0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBOzs7SUFHSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnKTtcclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcblxyXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEucGFnZS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuLnRleHQtZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzcmVtIDByZW0gMnJlbSAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMyZjJmMmY7XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cclxufVxyXG5cclxuaW1nLmxvZ28ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHggMzBweCAyNHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWdtZW50LW15YWNjb3VudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uZm9ybS1teWFjY291bnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5Lm10LTMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWdtZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDEyMTY5ZDEsICM1NDg5ZmYpO1xyXG59XHJcblxyXG4uc2VnbWVudCBpbnB1dCxcclxuLnNlZ21lbnQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLmxpbmstdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjN2RiNmU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG59XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlZ21lbnQgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWdtZW50IGE6aG92ZXIsXHJcbi5saW5rLXRleHQsXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWltZyxcclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2UyMzE0MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZWdtZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgaW1nLmxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "W3Zi":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _models_login_usuario_login_usuario_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/login-usuario/login-usuario.module */ "jC9z");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "lGQG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_usuario_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/usuario-login.service */ "ANRG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function LoginComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El Email es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Debe tener formato de Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_9_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_9_div_2_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.email.invalid);
} }
function LoginComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Se requiere una contrase\u00F1a.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_12_div_1_Template, 2, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.f.password.errors.required);
} }
class LoginComponent {
    constructor(authService, router, usuarioLoginService, fb) {
        this.authService = authService;
        this.router = router;
        this.usuarioLoginService = usuarioLoginService;
        this.fb = fb;
        this.selectedLogin = new _models_login_usuario_login_usuario_module__WEBPACK_IMPORTED_MODULE_0__["LoginUsuarioModule"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
    }
    ngOnInit() {
        localStorage.removeItem('token');
        localStorage.removeItem('login');
        localStorage.removeItem('id');
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    get f() {
        return this.form.controls;
    }
    onSubmit(login) {
        if (this.form.invalid) {
            return;
        }
        else {
            this.authService.getToken(login).subscribe(resp => {
                localStorage.setItem('token', resp);
                localStorage.setItem('login', JSON.stringify(login));
                this.router.navigateByUrl('/micuenta');
                console.log(resp);
            }, err => {
                if (err.status == 401)
                    alert("Compruebe su email o contraseña...");
            });
        }
        //console.log("Selected Login", this.selectedLogin);
        this.usuarioLoginService.getIdUsuario(login).subscribe(data => {
            let list = [];
            list = Object.values(data);
            localStorage.setItem('id', list[0]);
        });
        return this.selectedLogin;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_usuario_login_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioLoginService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 23, vars: 6, consts: [[1, "container"], [1, "segment"], [1, "register-img"], ["src", "https://www.flaticon.es/svg/static/icons/svg/2506/2506463.svg", "alt", "Billetera virtual", 1, "logo"], [1, "page-title"], ["id", "login-form", 1, "form", 3, "formGroup", "ngSubmit"], ["formulario", "ngForm"], ["formControlName", "email", "id", "email", "type", "email", "placeholder", "Email", "ngModel", "", "email", "true", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["formControlName", "password", "id", "password", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-3", 3, "disabled"], ["href", "/resetpassword"], [1, "link-text"], [1, "actions"], [1, "text"], ["href", "/registrarse", 1, "link-text"], [1, "alert", "alert-danger"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Hola de nuevo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "form", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.selectedLogin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) { return ctx.selectedLogin.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_11_listener($event) { return ctx.selectedLogin.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, LoginComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Ingresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "\u00BFOlvidaste tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "No ten\u00E9s una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Registrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedLogin.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.email.touched && ctx.f.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedLogin.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.f.password.touched && ctx.f.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\r\n[_nghost-%COMP%] {\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    display: block;\r\n}\r\nh1.page-title[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-bottom: 2rem;\r\n    padding-top: 0.5rem;\r\n    font-size: 42px;\r\n    font-weight: 800;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n}\r\n.text-form[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin: 3rem 0rem 2rem 0rem;\r\n    padding-left: 2rem;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    padding-right: 0.5rem;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n    \r\n}\r\nimg.logo[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: none;\r\n    align-items: center;\r\n    margin: auto;\r\n    padding: 3%;\r\n    opacity: 0.7;\r\n}\r\n.welcome[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: auto;\r\n    padding: 10px 23px 30px 24px;\r\n    padding: 2%;\r\n    background-color: #ffffff;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin: 1%;\r\n    display: block;\r\n}\r\n.segment-myaccount[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: block;\r\n    margin: 2%;\r\n}\r\n.form-myaccount[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 90%;\r\n    height: 50px;\r\n    color: #fff;\r\n    border-radius: 12px;\r\n    margin-bottom: 4%;\r\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\r\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\r\n}\r\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 2%;\r\n    border-radius: 6px;\r\n    border: solid 1px #f1f1f1;\r\n    background-color: #fafafa;\r\n    padding-left: 2%;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #777777;\r\n}\r\n.link-text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    width: 100%;\r\n    color: #7db6e7;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    \r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin-bottom: 2%;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 16px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    margin: 3%;\r\n}\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    color: #e23141;\r\n    background-color: #fff;\r\n    border-color: #f5c6cb;\r\n    width: 90%;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 10px;\r\n}\r\n@media (min-width: 576px) {}\r\n@media (min-width: 768px) {\r\n    .segment[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    .form[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n    img.logo[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .actions[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\r\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGO0FBQ3pGO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFHQSw0QkFBNEI7QUFFNUI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrREFBa0Q7SUFDbEQsNkRBQTZEO0FBQ2pFO0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBOzs7SUFHSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnKTtcclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcblxyXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEucGFnZS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuLnRleHQtZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzcmVtIDByZW0gMnJlbSAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMyZjJmMmY7XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cclxufVxyXG5cclxuaW1nLmxvZ28ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHggMzBweCAyNHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWdtZW50LW15YWNjb3VudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uZm9ybS1teWFjY291bnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5Lm10LTMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWdtZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDEyMTY5ZDEsICM1NDg5ZmYpO1xyXG59XHJcblxyXG4uc2VnbWVudCBpbnB1dCxcclxuLnNlZ21lbnQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLmxpbmstdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjN2RiNmU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG59XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlZ21lbnQgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWdtZW50IGE6aG92ZXIsXHJcbi5saW5rLXRleHQsXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWltZyxcclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2UyMzE0MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZWdtZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgaW1nLmxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['../../app.component.css']
            }]
    }], function () { return [{ type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _services_usuario_login_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioLoginService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "WKnR":
/*!*******************************************************************!*\
  !*** ./src/app/components/secretanswer/secretanswer.component.ts ***!
  \*******************************************************************/
/*! exports provided: SecretanswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecretanswerComponent", function() { return SecretanswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SecretanswerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SecretanswerComponent.ɵfac = function SecretanswerComponent_Factory(t) { return new (t || SecretanswerComponent)(); };
SecretanswerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SecretanswerComponent, selectors: [["app-secretanswer"]], decls: 2, vars: 0, template: function SecretanswerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "secretanswer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VjcmV0YW5zd2VyL3NlY3JldGFuc3dlci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecretanswerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-secretanswer',
                templateUrl: './secretanswer.component.html',
                styleUrls: ['./secretanswer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/usuario.service */ "on2l");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/singup/singup.component */ "gpVp");
/* harmony import */ var _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/myaccount/myaccount.component */ "AKBL");
/* harmony import */ var _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/resetpassword/resetpassword.component */ "6z/x");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_secretanswer_secretanswer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/secretanswer/secretanswer.component */ "WKnR");
/* harmony import */ var _services_usuario_login_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/usuario-login.service */ "ANRG");



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"], _services_usuario_login_service__WEBPACK_IMPORTED_MODULE_17__["UsuarioLoginService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_11__["SingupComponent"],
        _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_12__["MyaccountComponent"],
        _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_13__["ResetpasswordComponent"],
        _components_secretanswer_secretanswer_component__WEBPACK_IMPORTED_MODULE_16__["SecretanswerComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_11__["SingupComponent"],
                    _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_12__["MyaccountComponent"],
                    _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_13__["ResetpasswordComponent"],
                    _components_secretanswer_secretanswer_component__WEBPACK_IMPORTED_MODULE_16__["SecretanswerComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                ],
                providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"], _services_usuario_login_service__WEBPACK_IMPORTED_MODULE_17__["UsuarioLoginService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ey4F":
/*!********************************************************************!*\
  !*** ./src/app/components/singup/confirmed.validator.component.ts ***!
  \********************************************************************/
/*! exports provided: ConfirmedValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedValidator", function() { return ConfirmedValidator; });
function ConfirmedValidator(controlName, matchingControlName) {
    return (formGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        }
        else {
            matchingControl.setErrors(null);
        }
    };
}


/***/ }),

/***/ "gpVp":
/*!*******************************************************!*\
  !*** ./src/app/components/singup/singup.component.ts ***!
  \*******************************************************/
/*! exports provided: SingupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingupComponent", function() { return SingupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_usuario_usuario_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/usuario/usuario.module */ "hj7I");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _confirmed_validator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirmed.validator.component */ "ey4F");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/usuario.service */ "on2l");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function SingupComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Format email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingupComponent_div_9_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SingupComponent_div_9_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.invalid);
} }
function SingupComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingupComponent_div_12_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function SingupComponent_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password and Confirm Password must be match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingupComponent_div_15_div_1_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SingupComponent_div_15_div_2_Template, 2, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.confirm_password.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.confirm_password.errors.confirmedValidator);
} }
class SingupComponent {
    constructor(usuarioService, route, fb) {
        this.usuarioService = usuarioService;
        this.route = route;
        this.fb = fb;
        this.selectedUsuario = new _models_usuario_usuario_module__WEBPACK_IMPORTED_MODULE_1__["UsuarioModule"]();
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({});
    }
    ngOnInit() {
        this.form = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            confirm_password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        }, {
            validator: Object(_confirmed_validator_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmedValidator"])('password', 'confirm_password'),
        });
    }
    get f() {
        return this.form.controls;
    }
    onSubmit(usuario) {
        if (usuario.id == 0) {
            this.usuarioService.onCreateUsuario(usuario).subscribe(resp => {
                this.usuarios.push(resp);
                console.log(resp);
            });
        }
        else {
            this.usuarioService.onUpdateUsuario(usuario).subscribe(resp => {
            });
        }
        console.log(this.selectedUsuario);
        this.selectedUsuario = new _models_usuario_usuario_module__WEBPACK_IMPORTED_MODULE_1__["UsuarioModule"]();
        console.log(this.selectedUsuario.id);
        alert('Se creo tu cuenta correctamente');
        this.route.navigateByUrl('/ingresar');
    }
}
SingupComponent.ɵfac = function SingupComponent_Factory(t) { return new (t || SingupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
SingupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingupComponent, selectors: [["app-singup"]], decls: 22, vars: 8, consts: [[1, "container"], [1, "segment"], [1, "register-img"], ["src", "https://www.flaticon.es/svg/static/icons/svg/2506/2506463.svg", "alt", "Billetera virtual", 1, "logo"], [1, "page-title"], ["id", "register-form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "email", "id", "email", "type", "email", "placeholder", "Email", "ngModel", "", "email", "true", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["formControlName", "password", "id", "password", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "confirm_password", "id", "confirm_password", "type", "password", "placeholder", "Repetir password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-3", 3, "disabled"], [1, "text"], ["href", "/ingresar", 1, "link-text"], [1, "alert", "alert-danger"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function SingupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Crea tu cuenta!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SingupComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(ctx.selectedUsuario); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingupComponent_Template_input_ngModelChange_8_listener($event) { return ctx.selectedUsuario.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SingupComponent_div_9_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingupComponent_Template_input_ngModelChange_11_listener($event) { return ctx.selectedUsuario.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, SingupComponent_div_12_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingupComponent_Template_input_ngModelChange_14_listener($event) { return ctx.selectedUsuario.confirm_password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SingupComponent_div_15_Template, 3, 2, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Crear Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u00BFYa tienes una?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.email.touched && ctx.f.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.password.touched && ctx.f.password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.confirm_password);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.confirm_password.touched && ctx.f.confirm_password.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\r\n[_nghost-%COMP%] {\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 14px;\r\n    color: #333;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    display: block;\r\n}\r\nh1.page-title[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-bottom: 2rem;\r\n    padding-top: 0.5rem;\r\n    font-size: 42px;\r\n    font-weight: 800;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n}\r\n.text-form[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n    margin: 3rem 0rem 2rem 0rem;\r\n    padding-left: 2rem;\r\n}\r\n.text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    padding-right: 0.5rem;\r\n    width: 100%;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    color: #2f2f2f;\r\n    \r\n}\r\nimg.logo[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: none;\r\n    align-items: center;\r\n    margin: auto;\r\n    padding: 3%;\r\n    opacity: 0.7;\r\n}\r\n.welcome[_ngcontent-%COMP%] {\r\n    width: 60%;\r\n}\r\n.actions[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    margin-top: 1rem;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    text-align: left;\r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: auto;\r\n    padding: 10px 23px 30px 24px;\r\n    padding: 2%;\r\n    background-color: #ffffff;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin: 1%;\r\n    display: block;\r\n}\r\n.segment-myaccount[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    display: block;\r\n    margin: 2%;\r\n}\r\n.form-myaccount[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    display: flex;\r\n}\r\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\r\n    color: #fff;\r\n}\r\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: block;\r\n    width: 90%;\r\n    height: 50px;\r\n    color: #fff;\r\n    border-radius: 12px;\r\n    margin-bottom: 4%;\r\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\r\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\r\n}\r\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n    width: 90%;\r\n    height: 50px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 2%;\r\n    border-radius: 6px;\r\n    border: solid 1px #f1f1f1;\r\n    background-color: #fafafa;\r\n    padding-left: 2%;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n    color: #777777;\r\n}\r\n.link-text[_ngcontent-%COMP%] {\r\n    display: inline;\r\n    width: 100%;\r\n    color: #7db6e7;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: 1.71;\r\n    letter-spacing: normal;\r\n    \r\n}\r\n.segment[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    height: 60px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    text-align: center;\r\n    margin-bottom: 2%;\r\n    font-family: 'Nunito Sans', sans-serif;\r\n    font-size: 16px;\r\n    font-stretch: normal;\r\n    font-style: normal;\r\n    line-height: normal;\r\n    letter-spacing: normal;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n}\r\n.form[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\r\n    padding: 3%;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    margin: 3%;\r\n}\r\n.alert-danger[_ngcontent-%COMP%] {\r\n    color: #e23141;\r\n    background-color: #fff;\r\n    border-color: #f5c6cb;\r\n    width: 90%;\r\n    align-items: center;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    font-size: 10px;\r\n}\r\n@media (min-width: 576px) {}\r\n@media (min-width: 768px) {\r\n    .segment[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    .form[_ngcontent-%COMP%] {\r\n        width: 70%;\r\n    }\r\n}\r\n@media (min-width: 992px) {\r\n    img.logo[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n    .actions[_ngcontent-%COMP%] {\r\n        text-align: left;\r\n    }\r\n}\r\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGO0FBQ3pGO0lBQ0ksc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7QUFDdEM7QUFHQSw0QkFBNEI7QUFFNUI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQixrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxVQUFVO0FBQ2Q7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLFVBQVU7QUFDZDtBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7QUFDakI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrREFBa0Q7SUFDbEQsNkRBQTZEO0FBQ2pFO0FBRUE7O0lBRUksVUFBVTtJQUNWLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsY0FBYztBQUNsQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBOzs7SUFHSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLFdBQVc7QUFDZjtBQUVBOztJQUVJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUVBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1OdW5pdG8rU2Fuczp3Z2h0QDgwMCZkaXNwbGF5PXN3YXAnKTtcclxuOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMztcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuXHJcblxyXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAzJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuaDEucGFnZS10aXRsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XHJcbiAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzJmMmYyZjtcclxufVxyXG5cclxuLnRleHQtZm9ybSB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOiAzcmVtIDByZW0gMnJlbSAwcmVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgY29sb3I6ICMyZjJmMmY7XHJcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cclxufVxyXG5cclxuaW1nLmxvZ28ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi53ZWxjb21lIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5hY3Rpb25zIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5zZWdtZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHggMzBweCAyNHB4O1xyXG4gICAgcGFkZGluZzogMiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5zZWdtZW50LW15YWNjb3VudCB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDIlO1xyXG59XHJcblxyXG4uZm9ybS1teWFjY291bnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLmJ0bi1wcmltYXJ5Lm10LTMge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5zZWdtZW50IGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDEyMTY5ZDEsICM1NDg5ZmYpO1xyXG59XHJcblxyXG4uc2VnbWVudCBpbnB1dCxcclxuLnNlZ21lbnQgYnV0dG9uIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICBjb2xvcjogIzc3Nzc3NztcclxufVxyXG5cclxuLmxpbmstdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGNvbG9yOiAjN2RiNmU3O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xyXG59XHJcblxyXG4uc2VnbWVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuLnNlZ21lbnQgYSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWdtZW50IGE6aG92ZXIsXHJcbi5saW5rLXRleHQsXHJcbmEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJlZ2lzdGVyLWltZyxcclxuLmZvcm0ge1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgbWFyZ2luOiAzJTtcclxufVxyXG5cclxuLmFsZXJ0LWRhbmdlciB7XHJcbiAgICBjb2xvcjogI2UyMzE0MTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWM2Y2I7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHt9XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5zZWdtZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLmZvcm0ge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgaW1nLmxvZ28ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-singup',
                templateUrl: './singup.component.html',
                styleUrls: ['../../app.component.css']
            }]
    }], function () { return [{ type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "hj7I":
/*!**************************************************!*\
  !*** ./src/app/models/usuario/usuario.module.ts ***!
  \**************************************************/
/*! exports provided: UsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioModule", function() { return UsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class UsuarioModule {
    constructor() {
        this.id = 0;
    }
}
UsuarioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UsuarioModule });
UsuarioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UsuarioModule_Factory(t) { return new (t || UsuarioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsuarioModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 0, consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css", "integrity", "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top"], ["href", "/", 1, "navbar-brand"], ["id", "navbarlogo", "src", "https://www.flaticon.es/svg/static/icons/svg/2506/2506463.svg", "alt", "logo Bitcoin", "width", "50", "height", "50", "alt", "", "loading", "lazy", 1, "d-inline-block", "align-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "navbar-nav", "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "bg-light", "m-0", "ml-lg-auto", "p-3", "p-lg-0"], [1, "nav-item", "p-2"], ["href", "/ingresar", 1, "nav-link"], ["href", "/registrarse", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: ["#navbarlogo[_ngcontent-%COMP%] {\r\n    opacity: 0.7;\r\n}\r\n\r\nimg.logo[_ngcontent-%COMP%] {\r\n    width: 30%;\r\n    display: block;\r\n    align-items: center;\r\n    margin: auto;\r\n    padding: 3%;\r\n    opacity: 0.7;\r\n}\r\n\r\n.navbar-collapse.collapsing[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -75%;\r\n    transition: all 0.2s ease;\r\n}\r\n\r\n.navbar-collapse.show[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    flex-direction: column;\r\n    height: auto;\r\n    width: 50%;\r\n    transition: left 0.35s ease;\r\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1Asc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLDZDQUE2QztBQUNqRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhcmxvZ28ge1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG5pbWcubG9nbyB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMyU7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2UuY29sbGFwc2luZyAubmF2YmFyLW5hdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IC03NSU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG59XHJcblxyXG4ubmF2YmFyLWNvbGxhcHNlLnNob3cgLm5hdmJhci1uYXYge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogbGVmdCAwLjM1cyBlYXNlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "i/CN":
/*!**********************************************************************!*\
  !*** ./src/app/models/modificar-usuario/modificar-usuario.module.ts ***!
  \**********************************************************************/
/*! exports provided: ModificarUsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificarUsuarioModule", function() { return ModificarUsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ModificarUsuarioModule {
}
ModificarUsuarioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ModificarUsuarioModule });
ModificarUsuarioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ModificarUsuarioModule_Factory(t) { return new (t || ModificarUsuarioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ModificarUsuarioModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModificarUsuarioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "jC9z":
/*!**************************************************************!*\
  !*** ./src/app/models/login-usuario/login-usuario.module.ts ***!
  \**************************************************************/
/*! exports provided: LoginUsuarioModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginUsuarioModule", function() { return LoginUsuarioModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class LoginUsuarioModule {
}
LoginUsuarioModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoginUsuarioModule });
LoginUsuarioModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoginUsuarioModule_Factory(t) { return new (t || LoginUsuarioModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoginUsuarioModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginUsuarioModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lGQG":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class AuthService {
    constructor(http) {
        this.http = http;
        this.url = 'https://localhost:44300/api/login/authenticate';
        this.isLogged = false;
        console.log('Auth Service Running');
    }
    ngOnInit() {
    }
    getToken(login) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'aplication/json');
        return this.http.post(this.url, login);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "on2l":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class UsuarioService {
    constructor(http) {
        this.http = http;
        this.url = "https://localhost:44300/api/usuario"; //cambiar url //revision
        console.log("UsuarioModule service is running");
    }
    getUsuarios() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.get(this.url);
    }
    onDeleteUsuario(id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.delete(this.url + "/" + id);
    }
    onCreateUsuario(usuario) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.post(this.url, usuario);
    }
    onUpdateUsuario(usuario) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.put(this.url, usuario);
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsuarioService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/resetpassword/resetpassword.component */ "6z/x");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/myaccount/myaccount.component */ "AKBL");
/* harmony import */ var _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/singup/singup.component */ "gpVp");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_secretanswer_secretanswer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/secretanswer/secretanswer.component */ "WKnR");










const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'ingresar', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'registrarse', component: _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_3__["SingupComponent"] },
    { path: 'micuenta', component: _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_2__["MyaccountComponent"] },
    { path: 'resetpassword', component: _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_0__["ResetpasswordComponent"] },
    { path: 'secretanswer', component: _components_secretanswer_secretanswer_component__WEBPACK_IMPORTED_MODULE_7__["SecretanswerComponent"] },
    { path: '**', redirectTo: '' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map