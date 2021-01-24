(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/0/v":
/*!****************************************************!*\
  !*** ./src/app/services/billetera-main.service.ts ***!
  \****************************************************/
/*! exports provided: BilleteraMainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilleteraMainService", function() { return BilleteraMainService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");




class BilleteraMainService {
    constructor(http) {
        this.http = http;
        this.url = "https://localhost:44300/api/billetera";
        console.log("consultaSaldo service is running");
    }
    getSaldo(id) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this.http.get(this.url + '/' + id);
    }
}
BilleteraMainService.ɵfac = function BilleteraMainService_Factory(t) { return new (t || BilleteraMainService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
BilleteraMainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: BilleteraMainService, factory: BilleteraMainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BilleteraMainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Windows 10\Documents\GitHub\proyecto-clip-money-b-g1b\billeterafront\src\main.ts */"zUnb");


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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6SOM":
/*!**********************************************************!*\
  !*** ./src/app/models/transaction/transaction.module.ts ***!
  \**********************************************************/
/*! exports provided: TransactionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionModule", function() { return TransactionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class TransactionModule {
}
TransactionModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransactionModule });
TransactionModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TransactionModule_Factory(t) { return new (t || TransactionModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransactionModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


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








function ResetpasswordComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "El Email es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetpasswordComponent_div_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Debe tener formato de Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ResetpasswordComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ResetpasswordComponent_div_9_div_1_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ResetpasswordComponent_div_9_div_2_Template, 2, 0, "div", 10);
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
ResetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetpasswordComponent, selectors: [["app-resetpassword"]], decls: 12, vars: 4, consts: [[1, "container"], [1, "segment"], [1, "register-img"], [1, "page-title"], ["id", "resetpassword-form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "text-form"], ["formControlName", "email", "id", "email", "type", "email", "placeholder", "Email", "ngModel", "", "email", "true", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-3", 3, "disabled"], [1, "alert", "alert-danger"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function ResetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00BFOlvidaste tu Contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ResetpasswordComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(ctx.selectedLogin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ingres\u00E1 el email asociado a tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ResetpasswordComponent_Template_input_ngModelChange_8_listener($event) { return ctx.selectedLogin.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ResetpasswordComponent_div_9_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Recuperar Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedLogin.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.f.email.touched && ctx.f.email.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n[_nghost-%COMP%] {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    display: block;\n}\nh1.page-title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    font-size: 42px;\n    font-weight: 800;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #2f2f2f;\n}\n.text-form[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 3rem 0rem 2rem 0rem;\n    padding-left: 2rem;\n}\n.text[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 0.5rem;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    \n}\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: none;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.welcome[_ngcontent-%COMP%] {\n    width: 60%;\n}\n.actions[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: left;\n}\n.segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin: 1%;\n    display: block;\n}\n.segment-myaccount[_ngcontent-%COMP%], .segment-transaction[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2%;\n}\n.form-myaccount[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    height: 50px;\n    color: #fff;\n    border-radius: 12px;\n    margin-bottom: 4%;\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n}\n.link-text[_ngcontent-%COMP%] {\n    display: inline;\n    width: 100%;\n    color: #7db6e7;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    \n}\n.segment[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 2%;\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    flex-grow: 1;\n    margin: 3%;\n}\n.alert-danger[_ngcontent-%COMP%] {\n    color: #e23141;\n    background-color: #fff;\n    border-color: #f5c6cb;\n    width: 90%;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 10px;\n}\n.nav.flex-column.flex-nowrap.vh-100.overflow-auto.text-white.p-2.mt-5[_ngcontent-%COMP%] {\n    background-color: #9ac1f757;\n}\ndiv#main[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (min-width: 576px) {}\n@media (min-width: 768px) {\n    .segment[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media (min-width: 992px) {\n    img.logo[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .actions[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n}\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,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QXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMS5wYWdlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udGV4dC1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cbn1cblxuaW1nLmxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWxjb21lIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlZ21lbnQtbXlhY2NvdW50LCAuc2VnbWVudC10cmFuc2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xufVxuXG4uZm9ybS1teWFjY291bnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcbn1cblxuLnNlZ21lbnQgaW5wdXQsXG4uc2VnbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjN2RiNmU3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xufVxuXG4uc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5zZWdtZW50IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZ21lbnQgYTpob3Zlcixcbi5saW5rLXRleHQsXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdGVyLWltZyxcbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDMlO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2UyMzE0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbi5mbGV4LW5vd3JhcC52aC0xMDAub3ZlcmZsb3ctYXV0by50ZXh0LXdoaXRlLnAtMi5tdC01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjMWY3NTc7XG59XG5kaXYjbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge31cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fSJdfQ== */"] });
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
MyaccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MyaccountComponent, selectors: [["app-myaccount"]], decls: 47, vars: 14, consts: [[1, "container"], [1, "page-title"], ["id", "register-form", 1, "form"], [1, "form-myaccount"], [1, "segment-myaccount"], [1, "form-group"], ["type", "text", "name", "Nombre", "placeholder", "Nombre", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Apellido", "placeholder", "Apellido", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Dni", "placeholder", "N\u00BA DNI", "maxlength", "8", "pattern", "[0-9]", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["for", "frente-dni"], [1, "form-check"], ["type", "radio", "name", "gender", "id", "female", "value", "female", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "female", 1, "form-check-label"], ["type", "radio", "name", "gender", "id", "male", "value", "male", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "male", 1, "form-check-label"], ["type", "radio", "name", "gender", "id", "others", "value", "others", 1, "form-check-input", 3, "ngModel", "ngModelChange"], ["for", "others", 1, "form-check-label"], ["type", "date", "name", "fechaNacimiento", "placeholder", "Fecha de Nacimiento", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "Cuil_Cuit", "placeholder", "Cuil-Cuit", "maxlength", "11", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "telefono", "placeholder", "Numero de telefono", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "calle", "placeholder", "Calle", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "numero_de_calle", "placeholder", "Numero de Calle", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "barrio", "placeholder", "Barrio", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "codigo_postal", "placeholder", "Codigo Postal", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "name", "ciudad", "placeholder", "Ciudad", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "mt-3", 3, "click"]], template: function MyaccountComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_32_listener($event) { return ctx.selectedUsuario.telefono = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_35_listener($event) { return ctx.selectedUsuario.calle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_37_listener($event) { return ctx.selectedUsuario.numero_de_calle = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_39_listener($event) { return ctx.selectedUsuario.barrio = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_41_listener($event) { return ctx.selectedUsuario.codigo_postal = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function MyaccountComponent_Template_input_ngModelChange_43_listener($event) { return ctx.selectedUsuario.ciudad = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MyaccountComponent_Template_button_click_45_listener() { return ctx.onSubmit(ctx.selectedUsuario); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Enviar");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedUsuario.telefono);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RadioControlValueAccessor"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n[_nghost-%COMP%] {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    display: block;\n}\nh1.page-title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    font-size: 42px;\n    font-weight: 800;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #2f2f2f;\n}\n.text-form[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 3rem 0rem 2rem 0rem;\n    padding-left: 2rem;\n}\n.text[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 0.5rem;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    \n}\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: none;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.welcome[_ngcontent-%COMP%] {\n    width: 60%;\n}\n.actions[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: left;\n}\n.segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin: 1%;\n    display: block;\n}\n.segment-myaccount[_ngcontent-%COMP%], .segment-transaction[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2%;\n}\n.form-myaccount[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    height: 50px;\n    color: #fff;\n    border-radius: 12px;\n    margin-bottom: 4%;\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n}\n.link-text[_ngcontent-%COMP%] {\n    display: inline;\n    width: 100%;\n    color: #7db6e7;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    \n}\n.segment[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 2%;\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    flex-grow: 1;\n    margin: 3%;\n}\n.alert-danger[_ngcontent-%COMP%] {\n    color: #e23141;\n    background-color: #fff;\n    border-color: #f5c6cb;\n    width: 90%;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 10px;\n}\n.nav.flex-column.flex-nowrap.vh-100.overflow-auto.text-white.p-2.mt-5[_ngcontent-%COMP%] {\n    background-color: #9ac1f757;\n}\ndiv#main[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (min-width: 576px) {}\n@media (min-width: 768px) {\n    .segment[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media (min-width: 992px) {\n    img.logo[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .actions[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n}\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,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QXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMS5wYWdlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udGV4dC1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cbn1cblxuaW1nLmxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWxjb21lIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlZ21lbnQtbXlhY2NvdW50LCAuc2VnbWVudC10cmFuc2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xufVxuXG4uZm9ybS1teWFjY291bnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcbn1cblxuLnNlZ21lbnQgaW5wdXQsXG4uc2VnbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjN2RiNmU3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xufVxuXG4uc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5zZWdtZW50IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZ21lbnQgYTpob3Zlcixcbi5saW5rLXRleHQsXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdGVyLWltZyxcbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDMlO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2UyMzE0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbi5mbGV4LW5vd3JhcC52aC0xMDAub3ZlcmZsb3ctYXV0by50ZXh0LXdoaXRlLnAtMi5tdC01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjMWY3NTc7XG59XG5kaXYjbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge31cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fSJdfQ== */"] });
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

/***/ "BYgT":
/*!*****************************************************************!*\
  !*** ./src/app/components/transaction/transaction.component.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionComponent", function() { return TransactionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_models_aux_class_aux_class_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/aux-class/aux-class.module */ "RGTG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_tranferencia_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/tranferencia.service */ "m6FN");







class TransactionComponent {
    constructor(router, fb, transferencia) {
        this.router = router;
        this.fb = fb;
        this.transferencia = transferencia;
        this.aux = new src_app_models_aux_class_aux_class_module__WEBPACK_IMPORTED_MODULE_2__["AuxClassModule"]();
        //diferencia con singupxej crea usuarios/deberiamos crear auxs?
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({});
    }
    ngOnInit() {
        let id = parseInt(localStorage.getItem('id'));
        this.form = this.fb.group({
            operacion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            cvu: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            monto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            descripcion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    get f() {
        return this.form.controls;
    }
    onSubmit(aux) {
        if (this.form.invalid) {
            alert("Este formulario es invalido");
            return;
        }
        this.aux = new src_app_models_aux_class_aux_class_module__WEBPACK_IMPORTED_MODULE_2__["AuxClassModule"]();
        this.aux.idCuenta = JSON.parse(localStorage.getItem('id'));
        //console.log(this.aux);
        this.transferencia.createTransaction(aux).subscribe(data => {
            console.log(data);
            alert('la operacion fue exitosa');
            this.router.navigateByUrl('/main');
        });
        return this.aux;
    }
}
TransactionComponent.ɵfac = function TransactionComponent_Factory(t) { return new (t || TransactionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_tranferencia_service__WEBPACK_IMPORTED_MODULE_4__["TranferenciaService"])); };
TransactionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransactionComponent, selectors: [["app-transaction"]], decls: 17, vars: 6, consts: [[1, "container"], [1, "segment"], [1, "register-img"], [1, "page-title"], ["id", "transfer-form", 1, "form", 3, "formGroup", "ngSubmit"], ["formulario", "ngForm"], [1, "form-group"], ["formControlName", "operacion", "id", "operacion", "placeholder", "tipo de operacion", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "cvu", "id", "cvu", "placeholder", "CVU Destino", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "monto", "id", "monto", "placeholder", "Monto", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "descripcion", "id", "descripcion", "placeholder", "Descripcion", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-3", 3, "disabled"]], template: function TransactionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Ingrese datos requeridos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TransactionComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(ctx.aux); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionComponent_Template_input_ngModelChange_8_listener($event) { return ctx.aux.operacion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionComponent_Template_input_ngModelChange_10_listener($event) { return ctx.aux.cvu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionComponent_Template_input_ngModelChange_12_listener($event) { return ctx.aux.monto = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TransactionComponent_Template_input_ngModelChange_14_listener($event) { return ctx.aux.descripcion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Transferir ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aux.operacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aux.cvu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aux.monto);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.aux.descripcion);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n[_nghost-%COMP%] {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    display: block;\n}\nh1.page-title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    font-size: 42px;\n    font-weight: 800;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #2f2f2f;\n}\n.text-form[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 3rem 0rem 2rem 0rem;\n    padding-left: 2rem;\n}\n.text[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 0.5rem;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    \n}\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: none;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.welcome[_ngcontent-%COMP%] {\n    width: 60%;\n}\n.actions[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: left;\n}\n.segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin: 1%;\n    display: block;\n}\n.segment-myaccount[_ngcontent-%COMP%], .segment-transaction[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2%;\n}\n.form-myaccount[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    height: 50px;\n    color: #fff;\n    border-radius: 12px;\n    margin-bottom: 4%;\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n}\n.link-text[_ngcontent-%COMP%] {\n    display: inline;\n    width: 100%;\n    color: #7db6e7;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    \n}\n.segment[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 2%;\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    flex-grow: 1;\n    margin: 3%;\n}\n.alert-danger[_ngcontent-%COMP%] {\n    color: #e23141;\n    background-color: #fff;\n    border-color: #f5c6cb;\n    width: 90%;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 10px;\n}\n.nav.flex-column.flex-nowrap.vh-100.overflow-auto.text-white.p-2.mt-5[_ngcontent-%COMP%] {\n    background-color: #9ac1f757;\n}\ndiv#main[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (min-width: 576px) {}\n@media (min-width: 768px) {\n    .segment[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media (min-width: 992px) {\n    img.logo[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .actions[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n}\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,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QXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMS5wYWdlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udGV4dC1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cbn1cblxuaW1nLmxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWxjb21lIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlZ21lbnQtbXlhY2NvdW50LCAuc2VnbWVudC10cmFuc2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xufVxuXG4uZm9ybS1teWFjY291bnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcbn1cblxuLnNlZ21lbnQgaW5wdXQsXG4uc2VnbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjN2RiNmU3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xufVxuXG4uc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5zZWdtZW50IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZ21lbnQgYTpob3Zlcixcbi5saW5rLXRleHQsXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdGVyLWltZyxcbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDMlO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2UyMzE0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbi5mbGV4LW5vd3JhcC52aC0xMDAub3ZlcmZsb3ctYXV0by50ZXh0LXdoaXRlLnAtMi5tdC01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjMWY3NTc7XG59XG5kaXYjbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge31cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransactionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-transaction',
                templateUrl: './transaction.component.html',
                styleUrls: ['../../app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_services_tranferencia_service__WEBPACK_IMPORTED_MODULE_4__["TranferenciaService"] }]; }, null); })();


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
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n[_nghost-%COMP%] {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    display: block;\n}\nh1.page-title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    font-size: 42px;\n    font-weight: 800;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #2f2f2f;\n}\n.text-form[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 3rem 0rem 2rem 0rem;\n    padding-left: 2rem;\n}\n.text[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 0.5rem;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    \n}\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: none;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.welcome[_ngcontent-%COMP%] {\n    width: 60%;\n}\n.actions[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: left;\n}\n.segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin: 1%;\n    display: block;\n}\n.segment-myaccount[_ngcontent-%COMP%], .segment-transaction[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2%;\n}\n.form-myaccount[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    height: 50px;\n    color: #fff;\n    border-radius: 12px;\n    margin-bottom: 4%;\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n}\n.link-text[_ngcontent-%COMP%] {\n    display: inline;\n    width: 100%;\n    color: #7db6e7;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    \n}\n.segment[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 2%;\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    flex-grow: 1;\n    margin: 3%;\n}\n.alert-danger[_ngcontent-%COMP%] {\n    color: #e23141;\n    background-color: #fff;\n    border-color: #f5c6cb;\n    width: 90%;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 10px;\n}\n.nav.flex-column.flex-nowrap.vh-100.overflow-auto.text-white.p-2.mt-5[_ngcontent-%COMP%] {\n    background-color: #9ac1f757;\n}\ndiv#main[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (min-width: 576px) {}\n@media (min-width: 768px) {\n    .segment[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media (min-width: 992px) {\n    img.logo[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .actions[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n}\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,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QXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMS5wYWdlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udGV4dC1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cbn1cblxuaW1nLmxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWxjb21lIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlZ21lbnQtbXlhY2NvdW50LCAuc2VnbWVudC10cmFuc2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xufVxuXG4uZm9ybS1teWFjY291bnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcbn1cblxuLnNlZ21lbnQgaW5wdXQsXG4uc2VnbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjN2RiNmU3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xufVxuXG4uc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5zZWdtZW50IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZ21lbnQgYTpob3Zlcixcbi5saW5rLXRleHQsXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdGVyLWltZyxcbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDMlO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2UyMzE0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbi5mbGV4LW5vd3JhcC52aC0xMDAub3ZlcmZsb3ctYXV0by50ZXh0LXdoaXRlLnAtMi5tdC01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjMWY3NTc7XG59XG5kaXYjbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge31cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['../../app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "IURz":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_saldo_models_saldo_models_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/saldo-models/saldo-models.module */ "rhcY");
/* harmony import */ var src_app_models_billetera_billetera_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/billetera/billetera.module */ "r9wS");
/* harmony import */ var _services_billetera_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/billetera-main.service */ "/0/v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class MainComponent {
    constructor(billeteraMainService, router) {
        this.billeteraMainService = billeteraMainService;
        this.router = router;
        this.saldoModelsModule = new _models_saldo_models_saldo_models_module__WEBPACK_IMPORTED_MODULE_1__["SaldoModelsModule"]();
        this.billeteraModelsModule = new src_app_models_billetera_billetera_module__WEBPACK_IMPORTED_MODULE_2__["BilleteraModule"]();
    }
    ngOnInit() {
        let id = JSON.parse(localStorage.getItem('id'));
        console.log(id);
        this.billeteraMainService.getSaldo(id).subscribe(data => {
            this.billeteraModelsModule = data;
            console.log(data);
        });
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_billetera_main_service__WEBPACK_IMPORTED_MODULE_3__["BilleteraMainService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 79, vars: 3, consts: [[1, "container-fluid"], [1, "row"], ["id", "sticky-sidebar", 1, "col-2", "px-1", "bg-light", "position-fixed", "pt-5", "text"], [1, "nav", "flex-column", "flex-nowrap", "vh-100", "overflow-auto", "text-white", "p-2", "mt-5"], ["href", "./", 1, "nav-link", "text-dark"], ["href", "./transaccion", 1, "nav-link", "text-dark"], ["id", "main", 1, "col-7", "offset-2", "mt-5", "pt-5"], [1, "cuenta"], [1, "title-home"], [1, "table"], ["scope", "col p-2"], ["scope", "col p-2 "], [1, "mis-movimientos"], [1, "title-home", "pt-3"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Transferencia");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pagos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Tarjetas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "D\u00F3lares");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "CBU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Alias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "th", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Saldo diponible");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u00DAltimos movimientos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Descripcion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Monto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "10/10/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "15:20");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Extracci\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "$1500");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "10/10/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "16:30");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Dep\u00F3sito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "$5000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "10/10/2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "20:05");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Dep\u00F3sito");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "$7000");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.billeteraModelsModule.Cvu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.billeteraModelsModule.Alias);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.billeteraModelsModule.Saldo);
    } }, styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n[_nghost-%COMP%] {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    display: block;\n}\nh1.page-title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    font-size: 42px;\n    font-weight: 800;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #2f2f2f;\n}\n.text-form[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 3rem 0rem 2rem 0rem;\n    padding-left: 2rem;\n}\n.text[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 0.5rem;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    \n}\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: none;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.welcome[_ngcontent-%COMP%] {\n    width: 60%;\n}\n.actions[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: left;\n}\n.segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin: 1%;\n    display: block;\n}\n.segment-myaccount[_ngcontent-%COMP%], .segment-transaction[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2%;\n}\n.form-myaccount[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    height: 50px;\n    color: #fff;\n    border-radius: 12px;\n    margin-bottom: 4%;\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n}\n.link-text[_ngcontent-%COMP%] {\n    display: inline;\n    width: 100%;\n    color: #7db6e7;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    \n}\n.segment[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 2%;\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    flex-grow: 1;\n    margin: 3%;\n}\n.alert-danger[_ngcontent-%COMP%] {\n    color: #e23141;\n    background-color: #fff;\n    border-color: #f5c6cb;\n    width: 90%;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 10px;\n}\n.nav.flex-column.flex-nowrap.vh-100.overflow-auto.text-white.p-2.mt-5[_ngcontent-%COMP%] {\n    background-color: #9ac1f757;\n}\ndiv#main[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (min-width: 576px) {}\n@media (min-width: 768px) {\n    .segment[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media (min-width: 992px) {\n    img.logo[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .actions[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n}\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,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QXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMS5wYWdlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udGV4dC1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cbn1cblxuaW1nLmxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWxjb21lIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlZ21lbnQtbXlhY2NvdW50LCAuc2VnbWVudC10cmFuc2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xufVxuXG4uZm9ybS1teWFjY291bnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcbn1cblxuLnNlZ21lbnQgaW5wdXQsXG4uc2VnbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjN2RiNmU3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xufVxuXG4uc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5zZWdtZW50IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZ21lbnQgYTpob3Zlcixcbi5saW5rLXRleHQsXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdGVyLWltZyxcbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDMlO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2UyMzE0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbi5mbGV4LW5vd3JhcC52aC0xMDAub3ZlcmZsb3ctYXV0by50ZXh0LXdoaXRlLnAtMi5tdC01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjMWY3NTc7XG59XG5kaXYjbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge31cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['../../app.component.css']
            }]
    }], function () { return [{ type: _services_billetera_main_service__WEBPACK_IMPORTED_MODULE_3__["BilleteraMainService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "RGTG":
/*!******************************************************!*\
  !*** ./src/app/models/aux-class/aux-class.module.ts ***!
  \******************************************************/
/*! exports provided: AuxClassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuxClassModule", function() { return AuxClassModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class AuxClassModule {
}
AuxClassModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AuxClassModule });
AuxClassModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AuxClassModule_Factory(t) { return new (t || AuxClassModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuxClassModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuxClassModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


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
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n[_nghost-%COMP%] {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    display: block;\n}\nh1.page-title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    font-size: 42px;\n    font-weight: 800;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #2f2f2f;\n}\n.text-form[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 3rem 0rem 2rem 0rem;\n    padding-left: 2rem;\n}\n.text[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 0.5rem;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    \n}\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: none;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.welcome[_ngcontent-%COMP%] {\n    width: 60%;\n}\n.actions[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: left;\n}\n.segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin: 1%;\n    display: block;\n}\n.segment-myaccount[_ngcontent-%COMP%], .segment-transaction[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2%;\n}\n.form-myaccount[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    height: 50px;\n    color: #fff;\n    border-radius: 12px;\n    margin-bottom: 4%;\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n}\n.link-text[_ngcontent-%COMP%] {\n    display: inline;\n    width: 100%;\n    color: #7db6e7;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    \n}\n.segment[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 2%;\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    flex-grow: 1;\n    margin: 3%;\n}\n.alert-danger[_ngcontent-%COMP%] {\n    color: #e23141;\n    background-color: #fff;\n    border-color: #f5c6cb;\n    width: 90%;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 10px;\n}\n.nav.flex-column.flex-nowrap.vh-100.overflow-auto.text-white.p-2.mt-5[_ngcontent-%COMP%] {\n    background-color: #9ac1f757;\n}\ndiv#main[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (min-width: 576px) {}\n@media (min-width: 768px) {\n    .segment[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media (min-width: 992px) {\n    img.logo[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .actions[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n}\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,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QXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMS5wYWdlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udGV4dC1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cbn1cblxuaW1nLmxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWxjb21lIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlZ21lbnQtbXlhY2NvdW50LCAuc2VnbWVudC10cmFuc2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xufVxuXG4uZm9ybS1teWFjY291bnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcbn1cblxuLnNlZ21lbnQgaW5wdXQsXG4uc2VnbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjN2RiNmU3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xufVxuXG4uc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5zZWdtZW50IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZ21lbnQgYTpob3Zlcixcbi5saW5rLXRleHQsXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdGVyLWltZyxcbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDMlO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2UyMzE0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbi5mbGV4LW5vd3JhcC52aC0xMDAub3ZlcmZsb3ctYXV0by50ZXh0LXdoaXRlLnAtMi5tdC01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjMWY3NTc7XG59XG5kaXYjbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge31cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fSJdfQ== */"] });
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









function LoginComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "El Email es requerido");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Debe tener formato de Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_8_div_1_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, LoginComponent_div_8_div_2_Template, 2, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.f.email.invalid);
} }
function LoginComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Se requiere una contrase\u00F1a.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_div_11_div_1_Template, 2, 0, "div", 17);
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
                this.router.navigateByUrl('/main');
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
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 22, vars: 6, consts: [[1, "container"], [1, "segment"], [1, "register-img"], [1, "page-title"], ["id", "login-form", 1, "form", 3, "formGroup", "ngSubmit"], ["formulario", "ngForm"], ["formControlName", "email", "id", "email", "type", "email", "placeholder", "Email", "ngModel", "", "email", "true", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], [1, "form-group"], ["formControlName", "password", "id", "password", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-3", 3, "disabled"], ["href", "/resetpassword"], [1, "link-text"], [1, "actions"], [1, "text"], ["href", "/registrarse", 1, "link-text"], [1, "alert", "alert-danger"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Hola de nuevo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(ctx.selectedLogin); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_7_listener($event) { return ctx.selectedLogin.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_10_listener($event) { return ctx.selectedLogin.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Ingresar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u00BFOlvidaste tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "No ten\u00E9s una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Registrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n[_nghost-%COMP%] {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    display: block;\n}\nh1.page-title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    font-size: 42px;\n    font-weight: 800;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #2f2f2f;\n}\n.text-form[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 3rem 0rem 2rem 0rem;\n    padding-left: 2rem;\n}\n.text[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 0.5rem;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    \n}\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: none;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.welcome[_ngcontent-%COMP%] {\n    width: 60%;\n}\n.actions[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: left;\n}\n.segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin: 1%;\n    display: block;\n}\n.segment-myaccount[_ngcontent-%COMP%], .segment-transaction[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2%;\n}\n.form-myaccount[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    height: 50px;\n    color: #fff;\n    border-radius: 12px;\n    margin-bottom: 4%;\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n}\n.link-text[_ngcontent-%COMP%] {\n    display: inline;\n    width: 100%;\n    color: #7db6e7;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    \n}\n.segment[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 2%;\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    flex-grow: 1;\n    margin: 3%;\n}\n.alert-danger[_ngcontent-%COMP%] {\n    color: #e23141;\n    background-color: #fff;\n    border-color: #f5c6cb;\n    width: 90%;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 10px;\n}\n.nav.flex-column.flex-nowrap.vh-100.overflow-auto.text-white.p-2.mt-5[_ngcontent-%COMP%] {\n    background-color: #9ac1f757;\n}\ndiv#main[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (min-width: 576px) {}\n@media (min-width: 768px) {\n    .segment[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media (min-width: 992px) {\n    img.logo[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .actions[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n}\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,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QXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMS5wYWdlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udGV4dC1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cbn1cblxuaW1nLmxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWxjb21lIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlZ21lbnQtbXlhY2NvdW50LCAuc2VnbWVudC10cmFuc2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xufVxuXG4uZm9ybS1teWFjY291bnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcbn1cblxuLnNlZ21lbnQgaW5wdXQsXG4uc2VnbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjN2RiNmU3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xufVxuXG4uc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5zZWdtZW50IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZ21lbnQgYTpob3Zlcixcbi5saW5rLXRleHQsXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdGVyLWltZyxcbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDMlO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2UyMzE0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbi5mbGV4LW5vd3JhcC52aC0xMDAub3ZlcmZsb3ctYXV0by50ZXh0LXdoaXRlLnAtMi5tdC01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjMWY3NTc7XG59XG5kaXYjbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge31cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fSJdfQ== */"] });
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
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWNyZXRhbnN3ZXIuY29tcG9uZW50LmNzcyJ9 */"] });
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
/* harmony import */ var _services_billetera_main_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/billetera-main.service */ "/0/v");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/transaction/transaction.component */ "BYgT");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/auth.service */ "lGQG");
/* harmony import */ var _services_tranferencia_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/tranferencia.service */ "m6FN");
























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"], _services_usuario_login_service__WEBPACK_IMPORTED_MODULE_17__["UsuarioLoginService"], _services_billetera_main_service__WEBPACK_IMPORTED_MODULE_18__["BilleteraMainService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_tranferencia_service__WEBPACK_IMPORTED_MODULE_22__["TranferenciaService"]], imports: [[
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
        _components_secretanswer_secretanswer_component__WEBPACK_IMPORTED_MODULE_16__["SecretanswerComponent"],
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
        _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_20__["TransactionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
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
                    _components_main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"],
                    _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_20__["TransactionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
                ],
                providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"], _services_usuario_login_service__WEBPACK_IMPORTED_MODULE_17__["UsuarioLoginService"], _services_billetera_main_service__WEBPACK_IMPORTED_MODULE_18__["BilleteraMainService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _services_tranferencia_service__WEBPACK_IMPORTED_MODULE_22__["TranferenciaService"]],
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









function SingupComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Format email is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingupComponent_div_8_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SingupComponent_div_8_div_2_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.f.email.invalid);
} }
function SingupComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingupComponent_div_11_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.f.password.errors.required);
} }
function SingupComponent_div_14_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Password and Confirm Password must be match.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingupComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingupComponent_div_14_div_1_Template, 2, 0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SingupComponent_div_14_div_2_Template, 2, 0, "div", 14);
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
SingupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingupComponent, selectors: [["app-singup"]], decls: 21, vars: 8, consts: [[1, "container"], [1, "segment"], [1, "register-img"], [1, "page-title"], ["id", "register-form", 1, "form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["formControlName", "email", "id", "email", "type", "email", "placeholder", "Email", "ngModel", "", "email", "true", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "alert alert-danger", 4, "ngIf"], ["formControlName", "password", "id", "password", "type", "password", "placeholder", "Password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "confirm_password", "id", "confirm_password", "type", "password", "placeholder", "Repetir password", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-primary", "mt-3", "mb-3", 3, "disabled"], [1, "text"], ["href", "/ingresar", 1, "link-text"], [1, "alert", "alert-danger"], ["class", "error", 4, "ngIf"], [1, "error"]], template: function SingupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Crea tu cuenta!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SingupComponent_Template_form_ngSubmit_5_listener() { return ctx.onSubmit(ctx.selectedUsuario); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingupComponent_Template_input_ngModelChange_7_listener($event) { return ctx.selectedUsuario.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SingupComponent_div_8_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingupComponent_Template_input_ngModelChange_10_listener($event) { return ctx.selectedUsuario.password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SingupComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SingupComponent_Template_input_ngModelChange_13_listener($event) { return ctx.selectedUsuario.confirm_password = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SingupComponent_div_14_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Crear Cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u00BFYa tienes una?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
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
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n[_nghost-%COMP%] {\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 14px;\n    color: #333;\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\n.container[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    display: block;\n}\nh1.page-title[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    padding-bottom: 2rem;\n    padding-top: 0.5rem;\n    font-size: 42px;\n    font-weight: 800;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #2f2f2f;\n}\n.text-form[_ngcontent-%COMP%] {\n    text-align: left;\n    margin: 3rem 0rem 2rem 0rem;\n    padding-left: 2rem;\n}\n.text[_ngcontent-%COMP%] {\n    display: inline;\n    padding-right: 0.5rem;\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    \n}\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: none;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.welcome[_ngcontent-%COMP%] {\n    width: 60%;\n}\n.actions[_ngcontent-%COMP%] {\n    width: 90%;\n    margin-top: 1rem;\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    text-align: left;\n}\n.segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin: 1%;\n    display: block;\n}\n.segment-myaccount[_ngcontent-%COMP%], .segment-transaction[_ngcontent-%COMP%] {\n    width: 50%;\n    display: block;\n    margin: 2%;\n}\n.form-myaccount[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n    width: 90%;\n    height: 50px;\n    color: #fff;\n    border-radius: 12px;\n    margin-bottom: 4%;\n    box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n    background-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right: auto;\n    margin-bottom: 2%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n}\n.link-text[_ngcontent-%COMP%] {\n    display: inline;\n    width: 100%;\n    color: #7db6e7;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    \n}\n.segment[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 60px;\n    margin-left: auto;\n    margin-right: auto;\n    text-align: center;\n    margin-bottom: 2%;\n    font-family: 'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n    text-decoration: none;\n}\n.form[_ngcontent-%COMP%] {\n    width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%] {\n    padding: 3%;\n    align-items: center;\n    flex-grow: 1;\n    margin: 3%;\n}\n.alert-danger[_ngcontent-%COMP%] {\n    color: #e23141;\n    background-color: #fff;\n    border-color: #f5c6cb;\n    width: 90%;\n    align-items: center;\n    margin-left: auto;\n    margin-right: auto;\n    font-size: 10px;\n}\n.nav.flex-column.flex-nowrap.vh-100.overflow-auto.text-white.p-2.mt-5[_ngcontent-%COMP%] {\n    background-color: #9ac1f757;\n}\ndiv#main[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    padding: 0;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (min-width: 576px) {}\n@media (min-width: 768px) {\n    .segment[_ngcontent-%COMP%] {\n        display: flex;\n    }\n    .form[_ngcontent-%COMP%] {\n        width: 70%;\n    }\n}\n@media (min-width: 992px) {\n    img.logo[_ngcontent-%COMP%] {\n        display: block;\n    }\n    .actions[_ngcontent-%COMP%] {\n        text-align: left;\n    }\n}\n@media (min-width: 1200px) {}\n/*# sourceMappingURL=data:application/json;base64,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QXFCO0lBQ3JCLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7QUFFQSwyQkFBMkI7QUFFM0I7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKO0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBRUEsNEJBQTRCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TnVuaXRvK1NhbnM6d2dodEA4MDAmZGlzcGxheT1zd2FwJyk7XG46aG9zdCB7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuXG4vKiBCaWxsZXRlcmEgVmlydHVhbCBTdHlsZSAqL1xuXG4uY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5oMS5wYWdlLXRpdGxlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy1ib3R0b206IDJyZW07XG4gICAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDQycHg7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjMmYyZjJmO1xufVxuXG4udGV4dC1mb3JtIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbjogM3JlbSAwcmVtIDJyZW0gMHJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG59XG5cbi50ZXh0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgcGFkZGluZy1yaWdodDogMC41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzJmMmYyZjtcbiAgICAvKiBwYWRkaW5nLXJpZ2h0OiAyJTsgKi9cbn1cblxuaW1nLmxvZ28ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi53ZWxjb21lIHtcbiAgICB3aWR0aDogNjAlO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAxJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlZ21lbnQtbXlhY2NvdW50LCAuc2VnbWVudC10cmFuc2FjdGlvbiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDIlO1xufVxuXG4uZm9ybS1teWFjY291bnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgY29sb3I6ICNmZmY7XG59XG5cbi5zZWdtZW50IGJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTZweCAwIHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yNSk7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcbn1cblxuLnNlZ21lbnQgaW5wdXQsXG4uc2VnbWVudCBidXR0b24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2YxZjFmMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIHBhZGRpbmctbGVmdDogMiU7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICBjb2xvcjogIzc3Nzc3Nztcbn1cblxuLmxpbmstdGV4dCB7XG4gICAgZGlzcGxheTogaW5saW5lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiAjN2RiNmU3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgICAvKiB0ZXh0LWFsaWduOiBsZWZ0OyAqL1xufVxuXG4uc2VnbWVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cbi5zZWdtZW50IGEge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNlZ21lbnQgYTpob3Zlcixcbi5saW5rLXRleHQsXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJlZ2lzdGVyLWltZyxcbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBtYXJnaW46IDMlO1xufVxuXG4uYWxlcnQtZGFuZ2VyIHtcbiAgICBjb2xvcjogI2UyMzE0MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLm5hdi5mbGV4LWNvbHVtbi5mbGV4LW5vd3JhcC52aC0xMDAub3ZlcmZsb3ctYXV0by50ZXh0LXdoaXRlLnAtMi5tdC01IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWFjMWY3NTc7XG59XG5kaXYjbWFpbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge31cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnNlZ21lbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbiAgICAuZm9ybSB7XG4gICAgICAgIHdpZHRoOiA3MCU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICBpbWcubG9nbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuYWN0aW9ucyB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7fSJdfQ== */"] });
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
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 14, vars: 0, consts: [["rel", "stylesheet", "href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"]("https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"), "integrity", "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-lg", "navbar-light", "fixed-top"], ["href", "/", 1, "navbar-brand"], ["id", "navbarlogo", "src", "https://github.com/pgClipfs/proyecto-clip-money-b-g1b/blob/master/billeterafront/src/assets/images/logobitcoin.png?raw=true", "alt", "logo Bitcoin", "width", "75", "height", "75", "loading", "lazy", 1, "d-inline-block", "align-top"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarNav", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "navbar-nav", "collapse", "navbar-collapse"], [1, "nav", "navbar-nav", "bg-light", "m-0", "ml-lg-auto", "p-3", "p-lg-0"], [1, "nav-item", "p-2"], ["href", "/ingresar", 1, "nav-link"], ["href", "/registrarse", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"]], styles: ["#navbarlogo[_ngcontent-%COMP%] {\n    opacity: 0.7;\n}\n\nimg.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: block;\n    align-items: center;\n    margin: auto;\n    padding: 5%;\n    opacity: 0.7;\n}\n\n.navbar-collapse.collapsing[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: -75%;\n    transition: all 0.2s ease;\n}\n\n.navbar-collapse.show[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    flex-direction: column;\n    height: auto;\n    width: 50%;\n    transition: left 0.35s ease;\n    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);\n}\n\nli.nav-item.p-2[_ngcontent-%COMP%] {\n    background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsTUFBTTtJQUNOLFNBQVM7SUFDVCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixTQUFTO0lBQ1QsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osVUFBVTtJQUNWLDJCQUEyQjtJQUMzQiw2Q0FBNkM7QUFDakQ7O0FBRUE7SUFDSSx1QkFBdUI7QUFDM0IiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2YmFybG9nbyB7XG4gICAgb3BhY2l0eTogMC43O1xufVxuXG5pbWcubG9nbyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiA1JTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5uYXZiYXItY29sbGFwc2UuY29sbGFwc2luZyAubmF2YmFyLW5hdiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLTc1JTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xufVxuXG4ubmF2YmFyLWNvbGxhcHNlLnNob3cgLm5hdmJhci1uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBsZWZ0IDAuMzVzIGVhc2U7XG4gICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSByZ2JhKDAsIDAsIDAsIDAuMTUpO1xufVxuXG5saS5uYXYtaXRlbS5wLTIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSAiXX0= */"] });
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

/***/ "m6FN":
/*!**************************************************!*\
  !*** ./src/app/services/tranferencia.service.ts ***!
  \**************************************************/
/*! exports provided: TranferenciaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranferenciaService", function() { return TranferenciaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _models_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/transaction/transaction.module */ "6SOM");





class TranferenciaService {
    constructor(http) {
        this.http = http;
        this.url = "https://localhost:44300/api/transaccion";
        this.transaccion = new _models_transaction_transaction_module__WEBPACK_IMPORTED_MODULE_2__["TransactionModule"]();
        console.log("transaction service is running");
    }
    createTransaction(aux) {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log(this.url + aux);
        return this.http.post(this.url, aux);
    }
}
TranferenciaService.ɵfac = function TranferenciaService_Factory(t) { return new (t || TranferenciaService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
TranferenciaService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TranferenciaService, factory: TranferenciaService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TranferenciaService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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

/***/ "r9wS":
/*!******************************************************!*\
  !*** ./src/app/models/billetera/billetera.module.ts ***!
  \******************************************************/
/*! exports provided: BilleteraModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BilleteraModule", function() { return BilleteraModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class BilleteraModule {
}
BilleteraModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BilleteraModule });
BilleteraModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BilleteraModule_Factory(t) { return new (t || BilleteraModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BilleteraModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BilleteraModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rhcY":
/*!************************************************************!*\
  !*** ./src/app/models/saldo-models/saldo-models.module.ts ***!
  \************************************************************/
/*! exports provided: SaldoModelsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaldoModelsModule", function() { return SaldoModelsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class SaldoModelsModule {
}
SaldoModelsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SaldoModelsModule });
SaldoModelsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SaldoModelsModule_Factory(t) { return new (t || SaldoModelsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SaldoModelsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SaldoModelsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/main.component */ "IURz");
/* harmony import */ var _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/transaction/transaction.component */ "BYgT");












const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'ingresar', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'registrarse', component: _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_3__["SingupComponent"] },
    { path: 'micuenta', component: _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_2__["MyaccountComponent"] },
    { path: 'resetpassword', component: _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_0__["ResetpasswordComponent"] },
    { path: 'secretanswer', component: _components_secretanswer_secretanswer_component__WEBPACK_IMPORTED_MODULE_7__["SecretanswerComponent"] },
    { path: 'main', component: _components_main_main_component__WEBPACK_IMPORTED_MODULE_8__["MainComponent"] },
    { path: 'transaccion', component: _components_transaction_transaction_component__WEBPACK_IMPORTED_MODULE_9__["TransactionComponent"] },
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