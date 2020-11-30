(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Eze Heredia\Source\Repos\billeterafront\src\main.ts */"zUnb");


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


class ResetpasswordComponent {
    constructor() { }
    ngOnInit() {
    }
    submit(email) {
    }
}
ResetpasswordComponent.ɵfac = function ResetpasswordComponent_Factory(t) { return new (t || ResetpasswordComponent)(); };
ResetpasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResetpasswordComponent, selectors: [["app-resetpassword"]], decls: 12, vars: 0, consts: [[1, "container"], [1, "reset-segment"], ["id", "logoBilletera", "src", "https://www.flaticon.es/svg/static/icons/svg/2506/2506463.svg", "alt", "logo Bitcoin", 1, "logo"], [1, "page-title"], ["id", "login-form", 1, "form", 3, "submit"], [1, "text"], ["type", "email", "placeholder", "Email", "required", ""], ["email", ""], [1, "btn", "btn-primary", "mt-3"]], template: function ResetpasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00BFOlvidaste tu Contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function ResetpasswordComponent_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.submit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ingres\u00E1 el email asociado a tu cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Recuperar Contrase\u00F1a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\n  padding: 1%;\n  align-items: center;\n  display: block;\n}\n.page-title[_ngcontent-%COMP%]{\n  margin-left: auto;\n  margin-right:auto;\n  padding-bottom: 4%;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 42px;\n  font-weight: 800;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing:normal;\n  color: #2f2f2f;\n\n}\n.reset-segment[_ngcontent-%COMP%]{\n  width: 100%;\n  height: auto;\n  padding: 2%;\n  background-color: #ffffff;\n  margin-left: auto;\n  margin-right:auto;\n  text-align: center;\n  margin : 1%;\n}\n.reset-segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n.reset-segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n.form[_ngcontent-%COMP%]{\n  width: 100%;\n  display: block;\n}\nimg#logoBilletera[_ngcontent-%COMP%] {\n    display: none;\n    width: 30%;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n  }\n.reset-segment[_ngcontent-%COMP%] {\n    width: 90%;\n    height: auto;\n    padding: 10px 23px 30px 24px;\n    padding: 2%;\n    background-color: #ffffff;\n    margin-left: auto;\n    margin-right:auto;\n    text-align: center;\n    margin : 1%;\n  }\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    color: #fff;\n}\n.reset-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  margin-left: auto;\n  margin-right:auto;\n  display: block;\n  width: 90%;\n  height: 50px;\n  color:#fff;\n  border-radius: 12px;\n  margin-bottom: 4%;\n  box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n  background-image: linear-gradient(to top, #012169d1, #5489ff);\n  }\n.reset-segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .reset-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n    width: 90%;\n    height: 50px;\n    margin-left: auto;\n    margin-right:auto;\n    margin-bottom: 3%;\n    border-radius: 6px;\n    border: solid 1px #f1f1f1;\n    background-color: #fafafa;\n    padding-left: 2%;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #777777;\n  }\n.text[_ngcontent-%COMP%]{\n    width: 100%;\n    margin-left: auto;\n    margin-right:auto;\n    font-family:'Nunito Sans', sans-serif;\n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: 1.71;\n    letter-spacing: normal;\n    color: #2f2f2f;\n    text-align: center;\n    padding-bottom: 3%;\n  }\n@media (min-width: 576px) {\n    .reset-segment[_ngcontent-%COMP%]{\n      width: 70%;\n      margin-left: auto;\n      margin-right:auto;\n    }\n  }\n@media (min-width: 992px) {\n    .reset-segment[_ngcontent-%COMP%]{\n      width: 50%;\n      margin-left: auto;\n      margin-right:auto;\n    }\n    img#logoBilletera[_ngcontent-%COMP%] {\n      display: block;\n\n  }\n  button.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n   }\n@media (min-width: 1200px) {\n    .reset-segment[_ngcontent-%COMP%]{\n      width: 40%;\n      margin-left: auto;\n      margin-right:auto;\n    }\n   }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXNldHBhc3N3b3JkL3Jlc2V0cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjOztBQUVoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUVFO0lBQ0UsYUFBYTtJQUNiLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLFVBQVU7SUFDVixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0FBQ0E7SUFDRSxXQUFXO0FBQ2Y7QUFDRTtFQUNBLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0VBQ1osVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0RBQWtEO0VBQ2xELDZEQUE2RDtFQUM3RDtBQUNBOztJQUVFLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGNBQWM7RUFDaEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGlCQUFpQjtJQUNuQjtFQUNGO0FBQ0E7SUFDRTtNQUNFLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxjQUFjOztFQUVsQjtFQUNBO0lBQ0UscUJBQXFCO0VBQ3ZCO0dBQ0M7QUFDQTtJQUNDO01BQ0UsVUFBVTtNQUNWLGlCQUFpQjtNQUNqQixpQkFBaUI7SUFDbkI7R0FDRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVzZXRwYXNzd29yZC9yZXNldHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250YWluZXJ7XG4gIHBhZGRpbmc6IDElO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYWdlLXRpdGxle1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA0JTtcbiAgZm9udC1mYW1pbHk6J051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzpub3JtYWw7XG4gIGNvbG9yOiAjMmYyZjJmO1xuXG59XG4ucmVzZXQtc2VnbWVudHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4gOiAxJTtcbn1cbi5yZXNldC1zZWdtZW50IGF7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5yZXNldC1zZWdtZW50IGE6aG92ZXIsIC5saW5rLXRleHQsIGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5mb3Jte1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiAgaW1nI2xvZ29CaWxsZXRlcmEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAucmVzZXQtc2VnbWVudCB7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgICBwYWRkaW5nOiAyJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4gOiAxJTtcbiAgfVxuICBidXR0b24uYnRuLmJ0bi1wcmltYXJ5Lm10LTMge1xuICAgIGNvbG9yOiAjZmZmO1xufVxuICAucmVzZXQtc2VnbWVudCBidXR0b257XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6I2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMjUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDEyMTY5ZDEsICM1NDg5ZmYpO1xuICB9XG4gIC5yZXNldC1zZWdtZW50IGlucHV0ICxcbiAgLnJlc2V0LXNlZ21lbnQgYnV0dG9ue1xuICAgIHdpZHRoOiA5MCU7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIG1hcmdpbi1ib3R0b206IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZjFmMWYxO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gICAgcGFkZGluZy1sZWZ0OiAyJTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIGNvbG9yOiAjNzc3Nzc3O1xuICB9XG4gIC50ZXh0e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgY29sb3I6ICMyZjJmMmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAucmVzZXQtc2VnbWVudHtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgICAucmVzZXQtc2VnbWVudHtcbiAgICAgIHdpZHRoOiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICAgIH1cbiAgICBpbWcjbG9nb0JpbGxldGVyYSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcblxuICB9XG4gIGJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG4gICB9XG4gICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLnJlc2V0LXNlZ21lbnR7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgICB9XG4gICB9XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResetpasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resetpassword',
                templateUrl: './resetpassword.component.html',
                styleUrls: ['./resetpassword.component.css']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MyaccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyaccountComponent.ɵfac = function MyaccountComponent_Factory(t) { return new (t || MyaccountComponent)(); };
MyaccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyaccountComponent, selectors: [["app-myaccount"]], decls: 26, vars: 0, consts: [[1, "container"], [1, "register-segment"], [1, "register-img"], ["id", "title-myaccount", 1, "page-title"], [1, "text-left"], ["id", "register-form", 1, "form"], [1, "segment"], ["type", "text", "id", "usuario", "placeholder", "Usuario", "required", ""], ["usuario", ""], ["placeholder", "Contrase\u00F1a", "type", "password", "maxlength", "8", "required", ""], ["password", ""], ["type", "email", "id", "email", "placeholder", "Email", "required", ""], ["email", ""], ["type", "text", "id", "name", "placeholder", "Nombre", "required", ""], ["name", ""], ["type", "text", "id", "surname", "placeholder", "Apellido", "required", ""], ["surname", ""], ["type", "text", "name", "dni", "pattern", "[0-9]+", "placeholder", "dni", "required", "required", "maxlength", "8", "required", ""], ["type", "Date", "id", "date", "placeholder", "Fecha de Nacimiento", "required", ""], ["date", ""], ["type", "text", "id", "cuil-cuit", "placeholder", "Cuit - Cuil ", "maxlength", "11", "pattern", "[0-9] *", "required", ""], ["cuilcuit", ""], [1, "btn", "btn-primary", "mt-3"]], template: function MyaccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Gracias por elegirnos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\n  padding: 3%;\n  align-items: center;\n  display: block;\n}\n.register-segment[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  padding: 10px 23px 30px 24px;\n  padding: 2%;\n  background-color: #ffffff;\n  margin-left: auto;\n  margin-right:auto;\n  text-align: center;\n  margin : 1%;\n  display: block;\n}\n.page-title[_ngcontent-%COMP%]{\n  margin-left: auto;\n  margin-right:auto;\n  padding-bottom: 1%;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 42px;\n  font-weight: 800;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing:normal;\n  color: #2f2f2f;\n}\nimg.logo[_ngcontent-%COMP%] {\n  width: 30%;\n  display: none;\n  align-items: center;\n  margin: auto;\n  padding: 3%;\n  opacity: 0.7;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]{\n  \n  \n  flex-grow: 1;\n  width: 100%;\n  \n\n}\n.form[_ngcontent-%COMP%]{\n  width: 100%;\n  height: auto;\n  padding: 10px 23px 30px 24px;\n  padding: 2%;\n  background-color: #ffffff;\n  margin-left: auto;\n  margin-right:auto;\n  text-align: center;\n  margin : 1%;\n  display: block;\n}\n.register-segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\n{\n  width: 90%;\n  height: 50px;\n  margin-left: auto;\n  margin-right:auto;\n  margin-bottom: 2%;\n  border-radius: 6px;\n  border: solid 1px #f1f1f1;\n  background-color: #fafafa;\n  padding-left: 2%;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #777777;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.register-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  margin-left: auto;\n  margin-right:auto;\n  display: block;\n  width: 90%;\n  height: 50px;\n  color:#fff;\n  border-radius: 12px;\n  margin-bottom: 4%;\n  box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n  background-image: linear-gradient(to top, #012169d1, #5489ff);\n\n  }\n.form[_ngcontent-%COMP%]{\n    width:90%;\n    display: block;\n    padding: 2%;\n    flex-grow: 3;\n  }\n.segment[_ngcontent-%COMP%]{\n    flex-grow: 1;\n    width: 90%;\n\n  }\n.text-left[_ngcontent-%COMP%]{\n    display: inline-block;\n    width: auto;\n    padding-bottom: 1%;\n    \n    font-size: 16px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n    color: #777777;\n    margin-top: 2rem;\n    font-weight: lighter;\n  }\n#title-myaccount[_ngcontent-%COMP%]{\n    padding-bottom: 1%;\n    display: inline;\n  }\n.register-img[_ngcontent-%COMP%]{\n    display: block;\n    width: 100%;\n    align-items: center;\n    padding: 2%;\n  }\nimg.logo[_ngcontent-%COMP%] {\n  width: 30%;\n  display: none;\n  align-items: center;\n  margin: auto;\n  padding: 3%;\n  opacity: 0.7;\n}\n@media (min-width: 768px) {\n  .register-segment[_ngcontent-%COMP%]{\n    display:flex;\n  }\n  .form[_ngcontent-%COMP%]{\n    width: 60%;\n    display: flex;\n  }\n  .segment[_ngcontent-%COMP%]{\n    width: 50%;\n  }\n  .register-img[_ngcontent-%COMP%]{\n    display: block;\n    width: 30%;\n    align-items: center;\n    padding: 2%;\n}\n}\n@media (min-width: 992px) {\n  img.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: block;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teWFjY291bnQvbXlhY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjO0FBQ2hCO0FBQ0E7OztFQUdFLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsVUFBVTtFQUNWLFlBQVk7RUFDWixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrREFBa0Q7RUFDbEQsNkRBQTZEOztFQUU3RDtBQUNBO0lBQ0UsU0FBUztJQUNULGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTs7RUFFWjtBQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0QjtBQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7QUFDQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLFdBQVc7RUFDYjtBQUVGO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFO0lBQ0UsWUFBWTtFQUNkO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsYUFBYTtFQUNmO0VBQ0E7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDVixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL215YWNjb3VudC9teWFjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIHBhZGRpbmc6IDMlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yZWdpc3Rlci1zZWdtZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBweCAyM3B4IDMwcHggMjRweDtcbiAgcGFkZGluZzogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4gOiAxJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGFnZS10aXRsZXtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogMSU7XG4gIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6bm9ybWFsO1xuICBjb2xvcjogIzJmMmYyZjtcbn1cbmltZy5sb2dvIHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzJTtcbiAgb3BhY2l0eTogMC43O1xufVxuLnJlZ2lzdGVyLWltZywgLmZvcm17XG4gIC8qIHBhZGRpbmc6IDMlOyAqL1xuICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiBtYXJnaW46MyU7ICovXG5cbn1cbi5mb3Jte1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDIzcHggMzBweCAyNHB4O1xuICBwYWRkaW5nOiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbiA6IDElO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yZWdpc3Rlci1zZWdtZW50IGlucHV0LFxuLnJlZ2lzdGVyLXNlZ21lbnQgYnV0dG9uXG57XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjFmMWYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuYnV0dG9uLmJ0bi5idG4tcHJpbWFyeS5tdC0zIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucmVnaXN0ZXItc2VnbWVudCBidXR0b257XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6I2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMjUpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMDEyMTY5ZDEsICM1NDg5ZmYpO1xuXG4gIH1cbiAgLmZvcm17XG4gICAgd2lkdGg6OTAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDIlO1xuICAgIGZsZXgtZ3JvdzogMztcbiAgfVxuICAuc2VnbWVudHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgd2lkdGg6IDkwJTtcblxuICB9XG4gIC50ZXh0LWxlZnR7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiAxJTtcbiAgICAvKiBtYXJnaW46IDIxcHggMTMuNXB4IDU3cHggMDsgKi9cbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzc3Nzc3NztcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB9XG4gICN0aXRsZS1teWFjY291bnR7XG4gICAgcGFkZGluZy1ib3R0b206IDElO1xuICAgIGRpc3BsYXk6IGlubGluZTtcbiAgfVxuICAucmVnaXN0ZXItaW1ne1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMiU7XG4gIH1cblxuaW1nLmxvZ28ge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBub25lO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDMlO1xuICBvcGFjaXR5OiAwLjc7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJlZ2lzdGVyLXNlZ21lbnR7XG4gICAgZGlzcGxheTpmbGV4O1xuICB9XG4gIC5mb3Jte1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAuc2VnbWVudHtcbiAgICB3aWR0aDogNTAlO1xuICB9XG4gIC5yZWdpc3Rlci1pbWd7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDIlO1xufVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIGltZy5sb2dvIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIG9wYWNpdHk6IDAuNztcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MyaccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-myaccount',
                templateUrl: './myaccount.component.html',
                styleUrls: ['./myaccount.component.css']
            }]
    }], function () { return []; }, null); })();


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
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, consts: [[1, "cointainer"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".container[_ngcontent-%COMP%]{\n  padding: 1%;\n  align-items: center;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICBwYWRkaW5nOiAxJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
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
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@800&display=swap');\n\n[_nghost-%COMP%] {\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\n\n\n\n.container[_ngcontent-%COMP%]{\n  padding: 3%;\n  align-items: center;\n  display: block;\n}\n\n.page-title[_ngcontent-%COMP%]{\n  margin-left: auto;\n  margin-right:auto;\n  padding-bottom: 7%;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 42px;\n  font-weight: 800;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing:normal;\n  color: #2f2f2f;\n}\n\nimg.logo[_ngcontent-%COMP%] {\n  width: 30%;\n  display: block;\n  align-items: center;\n  margin: auto;\n  padding: 3%;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGOztBQUV6RjtFQUNFLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDOztBQUVBOzs7Ozs7RUFNRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBR0E7OztFQUdFLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUEsNEJBQTRCOztBQUM1QjtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU51bml0bytTYW5zOndnaHRAODAwJmRpc3BsYXk9c3dhcCcpO1xuXG46aG9zdCB7XG4gIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweCAwO1xufVxuXG5wIHtcbiAgbWFyZ2luOiAwO1xufVxuXG5cbmEsXG5hOnZpc2l0ZWQsXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogQmlsbGV0ZXJhIFZpcnR1YWwgU3R5bGUgKi9cbi5jb250YWluZXJ7XG4gIHBhZGRpbmc6IDMlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5wYWdlLXRpdGxle1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA3JTtcbiAgZm9udC1mYW1pbHk6J051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzpub3JtYWw7XG4gIGNvbG9yOiAjMmYyZjJmO1xufVxuaW1nLmxvZ28ge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzJTtcbiAgb3BhY2l0eTogMC43O1xufSJdfQ== */"] });
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class LoginComponent {
    constructor(router) {
        this.router = router;
        this.userArray = [];
    }
    ngOnInit() {
    }
    submit(email, password) {
        let isActive = false;
        let currentEmail = email.value;
        let currentPassword = password.value;
        for (let i = 0; i < this.userArray.length; i++) {
            if (this.userArray[i].email == currentEmail && this.userArray[i].password == currentPassword) {
                isActive = true;
            }
        }
        if (isActive) {
            this.router.navigate(['/micuenta']);
        }
        else {
            alert(" usuario o contraseña incorrecta");
        }
        //blanquear input researt
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "login-segment"], ["id", "logoBilletera", "src", "https://www.flaticon.es/svg/static/icons/svg/2506/2506463.svg", "alt", "logo Bitcoin", 1, "logo"], [1, "page-title"], ["id", "login-form", 1, "form", 3, "submit"], ["type", "email", "id", "email", "placeholder", "Email", "required", ""], ["email", ""], ["type", "text", "id", "password", "placeholder", "password", "type", "password", "required", ""], ["password", ""], [1, "btn", "btn-primary", "mt-3"], ["href", "/resetpassword"], [1, "link-text"], [1, "sign-up-segment"], [1, "text"], ["href", "/registrarse", 1, "text-style-1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Hola de nuevo!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function LoginComponent_Template_form_submit_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return ctx.submit(_r0, _r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u00BFOlvidaste tu contrase\u00F1a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "No ten\u00E9s una cuenta?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Registrate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\n  padding: 1%;\n  align-items: center;\n  display: block;\n}\n.login-segment[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  padding: 2%;\n  background-color: #ffffff;\n  margin-left: auto;\n  margin-right:auto;\n  text-align: center;\n  margin : 1%;\n}\n.login-segment[_ngcontent-%COMP%]:hover{\n  filter:brightness(105%);\n}\n.login-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  color:#fff;\n}\n.login-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\nmargin-left: auto;\nmargin-right:auto;\ndisplay: block;\nwidth: 100%;\nheight: 50px;\ncolor:#fff;\nborder-radius: 12px;\nmargin-bottom: 4%;\nbox-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\nbackground-image: linear-gradient(to top, #012169d1, #5489ff);\n}\n.login-segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .login-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n  width: 90%;\n  height: 50px;\n  margin-left: auto;\n  margin-right:auto;\n  margin-bottom: 3%;\n  border-radius: 6px;\n  border: solid 1px #f1f1f1;\n  background-color: #fafafa;\n  padding-left: 2%;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #777777;\n}\n.page-title[_ngcontent-%COMP%]{\n  margin-left: auto;\n  margin-right:auto;\n  padding-bottom: 4%;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 42px;\n  font-weight: 800;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing:normal;\n  color: #2f2f2f;\n}\n.link-text[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right:auto;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #2f2f2f;\n  cursor: pointer;\n  flex-grow: 1;\n}\n.link-text[_ngcontent-%COMP%]:hover{\n  color:  #7db6e7;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n  color: #fff;\n  margin-bottom: 5rem\n}\n.logo[_ngcontent-%COMP%] {\n  display: none;\n  width: 30%;\n  display: block;\n  align-items: center;\n  margin: auto;\n  padding: 3%;\n  opacity: 0.7;\n}\nimg#logoBilletera[_ngcontent-%COMP%] {\n    display: none;\n    width: 30%;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n}\n.text-style-1[_ngcontent-%COMP%]{\n  width: 100%;\n  color:  #7db6e7;\n  flex-grow: 1;\n  margin-left: auto;\n  margin-right:auto;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  text-align: left;\n\n}\n.sign-up-segment[_ngcontent-%COMP%]{\n  width: 80%;\n  display: block;\n  margin-left: auto;\n  margin-right:auto;\n\n}\n.sign-up-segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n.sign-up-segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n.text[_ngcontent-%COMP%]{\n  display: inline;\n  width: 100%;\n  margin-left: auto;\n  margin-right:auto;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #2f2f2f;\n  text-align: center;\n  padding-right: 2%;\n}\n@media (min-width: 576px) {\n  .login-segment[_ngcontent-%COMP%]{\n    width: 70%;\n    margin-left: auto;\n    margin-right:auto;\n  }\n\n\n}\n@media (min-width: 992px) {\n  .login-segment[_ngcontent-%COMP%]{\n    width: 50%;\n    margin-left: auto;\n    margin-right:auto;\n  }\n  .text[_ngcontent-%COMP%]{\n    text-align: left;\n  }\n  img#logoBilletera[_ngcontent-%COMP%] {\n    display: block;\n\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n\n  @media(max-width: 992px){\n  }\n }\n@media (min-width: 1200px) {\n  .login-segment[_ngcontent-%COMP%]{\n    width: 40%;\n    margin-left: auto;\n    margin-right:auto;\n }\n\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsV0FBVztBQUNYLFlBQVk7QUFDWixVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrREFBa0Q7QUFDbEQsNkRBQTZEO0FBQzdEO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxXQUFXO0VBQ1g7QUFDRjtBQUNBO0VBQ0UsYUFBYTtFQUNiLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjs7QUFFbkI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHFDQUFxQztFQUNyQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjs7O0FBR0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYzs7QUFFbEI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2Qjs7O0VBR0U7RUFDQTtDQUNEO0FBQ0E7RUFDQztJQUNFLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsaUJBQWlCO0NBQ3BCOztDQUVBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgcGFkZGluZzogMSU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLmxvZ2luLXNlZ21lbnQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbiA6IDElO1xufVxuLmxvZ2luLXNlZ21lbnQ6aG92ZXJ7XG4gIGZpbHRlcjpicmlnaHRuZXNzKDEwNSUpO1xufVxuLmxvZ2luLXNlZ21lbnQgYnV0dG9ue1xuICBjb2xvcjojZmZmO1xufVxuXG4ubG9naW4tc2VnbWVudCBidXR0b257XG5tYXJnaW4tbGVmdDogYXV0bztcbm1hcmdpbi1yaWdodDphdXRvO1xuZGlzcGxheTogYmxvY2s7XG53aWR0aDogMTAwJTtcbmhlaWdodDogNTBweDtcbmNvbG9yOiNmZmY7XG5ib3JkZXItcmFkaXVzOiAxMnB4O1xubWFyZ2luLWJvdHRvbTogNCU7XG5ib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjI1KTtcbmJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICMwMTIxNjlkMSwgIzU0ODlmZik7XG59XG4ubG9naW4tc2VnbWVudCBpbnB1dCAsXG4ubG9naW4tc2VnbWVudCBidXR0b257XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjFmMWYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBwYWRkaW5nLWxlZnQ6IDIlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjNzc3Nzc3O1xufVxuXG4ucGFnZS10aXRsZXtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICBwYWRkaW5nLWJvdHRvbTogNCU7XG4gIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6bm9ybWFsO1xuICBjb2xvcjogIzJmMmYyZjtcbn1cbi5saW5rLXRleHQge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMmYyZjJmO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5saW5rLXRleHQ6aG92ZXJ7XG4gIGNvbG9yOiAgIzdkYjZlNztcbn1cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1cmVtXG59XG4ubG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAzMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmc6IDMlO1xuICBvcGFjaXR5OiAwLjc7XG59XG5cbmltZyNsb2dvQmlsbGV0ZXJhIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMyU7XG4gICAgb3BhY2l0eTogMC43O1xufVxuLnRleHQtc3R5bGUtMXtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAgIzdkYjZlNztcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbi5zaWduLXVwLXNlZ21lbnR7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG5cbn1cblxuLnNpZ24tdXAtc2VnbWVudCBhe1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc2lnbi11cC1zZWdtZW50IGE6aG92ZXIsIC5saW5rLXRleHQsIGF7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLnRleHR7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgZm9udC1mYW1pbHk6J051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy1yaWdodDogMiU7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAubG9naW4tc2VnbWVudHtcbiAgICB3aWR0aDogNzAlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDphdXRvO1xuICB9XG5cblxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5sb2dpbi1zZWdtZW50e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIH1cbiAgLnRleHR7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICBpbWcjbG9nb0JpbGxldGVyYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbn1cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbn1cblxuXG4gIEBtZWRpYShtYXgtd2lkdGg6IDk5MnB4KXtcbiAgfVxuIH1cbiBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC5sb2dpbi1zZWdtZW50e1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gfVxuXG4gfVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/usuario.service */ "on2l");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/footer/footer.component */ "LmEr");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "W3Zi");
/* harmony import */ var _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/usuario/usuario.component */ "a4zc");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "BuFo");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "hrlM");
/* harmony import */ var _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/singup/singup.component */ "gpVp");
/* harmony import */ var _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/myaccount/myaccount.component */ "AKBL");
/* harmony import */ var _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/resetpassword/resetpassword.component */ "6z/x");















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__["UsuarioService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
        _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_8__["UsuarioComponent"],
        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
        _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_11__["SingupComponent"],
        _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_12__["MyaccountComponent"],
        _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_13__["ResetpasswordComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                    _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                    _components_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_8__["UsuarioComponent"],
                    _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                    _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_11__["SingupComponent"],
                    _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_12__["MyaccountComponent"],
                    _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_13__["ResetpasswordComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ],
                providers: [_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__["UsuarioService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "a4zc":
/*!*********************************************************!*\
  !*** ./src/app/components/usuario/usuario.component.ts ***!
  \*********************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/usuario.service */ "on2l");



class UsuarioComponent {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    ngOnInit() {
        this.usuarioService.getUsuarios().subscribe(resp => {
            console.log(resp);
        });
    }
    login() {
        alert(" hacer función para ingresar");
        //TOMAR VALOR DE INPUT USUARIO
        //TOMAR VAVAOR DE INPUT CONTRASEÑA
    }
    nuevoUsuario() {
        alert(" hacer función para ingresar");
    }
}
UsuarioComponent.ɵfac = function UsuarioComponent_Factory(t) { return new (t || UsuarioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"])); };
UsuarioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsuarioComponent, selectors: [["app-usuario"]], decls: 5, vars: 0, consts: [[1, "container-fluid"], [1, "btn", "btn-info", "mt-3", 3, "click"]], template: function UsuarioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Aqui no va el login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsuarioComponent_Template_button_click_3_listener() { return ctx.nuevoUsuario(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Nuevo Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".login[_ngcontent-%COMP%]{\n  display: block;\n\n}\n.form[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{\n  display: block;\n\n\n}\ninput[type=\"text\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n\n  display: block;\n  padding: 2%;\n  margin: 5%;\n}\ninput[type=\"text\"][_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  width: 327px;\n  height: 60px;\n  margin: 16px 0 15px 1px;\n  padding: 19px 226px 19px 19px;\n  border-radius: 8px;\n  border: solid 1px #f1f1f1;\n  background-color: #fafafa;\n}\nbutton[_ngcontent-%COMP%]{\n  width: 327px;\n  height: 60px;\n  margin: 15px 1px 26px 0;\n  padding: 19px 133px 19px 132px;\n  border-radius: 12px;\n  box-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\n  background-image: linear-gradient(to top, #012169, #5489ff);\n}\nbutton.btn.btn-info.mt-3[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7O0FBRWhCO0FBQ0E7RUFDRSxjQUFjOzs7QUFHaEI7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7QUFDWjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGtEQUFrRDtFQUNsRCwyREFBMkQ7QUFDN0Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy91c3VhcmlvL3VzdWFyaW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcbiAgZGlzcGxheTogYmxvY2s7XG5cbn1cbi5mb3JtLCBidXR0b24sIGlucHV0e1xuICBkaXNwbGF5OiBibG9jaztcblxuXG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcblxuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMiU7XG4gIG1hcmdpbjogNSU7XG59XG5pbnB1dFt0eXBlPVwidGV4dFwiXSwgYnV0dG9uIHtcbiAgd2lkdGg6IDMyN3B4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIG1hcmdpbjogMTZweCAwIDE1cHggMXB4O1xuICBwYWRkaW5nOiAxOXB4IDIyNnB4IDE5cHggMTlweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IHNvbGlkIDFweCAjZjFmMWYxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuXG5idXR0b257XG4gIHdpZHRoOiAzMjdweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW46IDE1cHggMXB4IDI2cHggMDtcbiAgcGFkZGluZzogMTlweCAxMzNweCAxOXB4IDEzMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IDAgcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjI1KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OSwgIzU0ODlmZik7XG59XG5idXR0b24uYnRuLmJ0bi1pbmZvLm10LTMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsuarioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usuario',
                templateUrl: './usuario.component.html',
                styleUrls: ['./usuario.component.css']
            }]
    }], function () { return [{ type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_1__["UsuarioService"] }]; }, null); })();


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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SingupComponent {
    constructor(router) {
        this.router = router;
        this.userArray = [];
    }
    ngOnInit() {
    }
    submit(email, password, passwordrepetead) {
        let currentEmail = email.value;
        let currentPassword = password.value;
        for (let i = 0; i < this.userArray.length; i++) {
            if (this.userArray[i].email == currentEmail) {
                alert("Existe un usuario registrado con esta cuenta de correo");
                console.log(currentEmail);
            }
            else if (currentPassword == passwordrepetead.value) {
                alert("las contraseñas coinciden");
                //validacion de contraseña
            }
        }
    }
}
SingupComponent.ɵfac = function SingupComponent_Factory(t) { return new (t || SingupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SingupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingupComponent, selectors: [["app-singup"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "register-segment"], [1, "register-img"], ["id", "logoBilletera", "src", "https://www.flaticon.es/svg/static/icons/svg/2506/2506463.svg", "alt", "noseve", 1, "logo"], [1, "page-title"], ["id", "register-form", 1, "form", 3, "submit"], ["type", "email", "id", "email", "placeholder", "Email", "required", ""], ["email", ""], ["placeholder", "Contase\u00F1a", "type", "password", "maxlength", "8", "required", ""], ["password", ""], ["placeholder", "Repite la contrase\u00F1a", "type", "password", "maxlength", "8", "required", ""], ["passwordrepetead", ""], [1, "btn", "btn-primary", "mt-3"], [1, "login-segment"], [1, "text"], ["href", "/ingresar", 1, "text-style-1"]], template: function SingupComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Crea tu cuenta!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function SingupComponent_Template_form_submit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12); return ctx.submit(_r0, _r1, _r2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Crear cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00BFYa tienes una?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".container[_ngcontent-%COMP%]{\n  padding: 3%;\n  align-items: center;\n  display: block;\n}\n.register-segment[_ngcontent-%COMP%] {\n  width: 90%;\n  height: auto;\n  padding: 10px 23px 30px 24px;\n  padding: 2%;\n  background-color: #ffffff;\n  margin-left: auto;\n  margin-right:auto;\n  text-align: center;\n  margin : 1%;\n  display: block;\n}\nbutton.btn.btn-primary.mt-3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.register-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\nmargin-left: auto;\nmargin-right:auto;\ndisplay: block;\nwidth: 90%;\nheight: 50px;\ncolor:#fff;\nborder-radius: 12px;\nmargin-bottom: 4%;\nbox-shadow: 0 4px 16px 0 rgba(158, 158, 158, 0.25);\nbackground-image: linear-gradient(to top, #012169d1, #5489ff);\n\n}\n.register-segment[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .register-segment[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]\n{\n  width: 90%;\n  height: 50px;\n  margin-left: auto;\n  margin-right:auto;\n  margin-bottom: 2%;\n  border-radius: 6px;\n  border: solid 1px #f1f1f1;\n  background-color: #fafafa;\n  padding-left: 2%;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #777777;\n}\n.page-title[_ngcontent-%COMP%]{\n  margin-left: auto;\n  margin-right:auto;\n  padding-bottom: 7%;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 42px;\n  font-weight: 800;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing:normal;\n  color: #2f2f2f;\n}\nimg.logo[_ngcontent-%COMP%] {\n  width: 30%;\n  display: none;\n  align-items: center;\n  margin: auto;\n  padding: 3%;\n  opacity: 0.7;\n}\n.text-style-1[_ngcontent-%COMP%]{\n  width: 100%;\n  color:  #7db6e7;\n  flex-grow: 1;\n  margin-left: auto;\n  margin-right:auto;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  text-align: left;\n\n}\n.register-segment[_ngcontent-%COMP%]{\n  display:block;\n  width: 100%;\n  height: 60px;\n  margin-left: auto;\n  margin-right:auto;\n  text-align: center;\n  margin-bottom: 2%;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 16px;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n\n}\n.register-segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n  cursor: pointer;\n}\n.register-segment[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .link-text[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{\n  text-decoration: none;\n}\n.text[_ngcontent-%COMP%]{\n  width: 100%;\n  margin-left: auto;\n  margin-right:auto;\n  font-family:'Nunito Sans', sans-serif;\n  font-size: 16px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.71;\n  letter-spacing: normal;\n  color: #2f2f2f;\n  text-align: center;\n}\n.form[_ngcontent-%COMP%]{\n  width: 100%;\n}\n.register-img[_ngcontent-%COMP%], .form[_ngcontent-%COMP%]{\n  padding: 3%;\n  align-items: center;\n  flex-grow: 1;\n  margin:3%;\n\n}\n@media (min-width: 576px) {\n\n}\n@media (min-width: 768px) {\n  .register-segment[_ngcontent-%COMP%]{\n    display:flex;\n  }\n  .form[_ngcontent-%COMP%]{\n    width: 70%;\n  }\n}\n@media (min-width: 992px) {\n  img.logo[_ngcontent-%COMP%] {\n    width: 30%;\n    display: block;\n    align-items: center;\n    margin: auto;\n    padding: 3%;\n    opacity: 0.7;\n  }\n }\n@media (min-width: 1200px) {\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaW5ndXAvc2luZ3VwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUVBO0FBQ0EsaUJBQWlCO0FBQ2pCLGlCQUFpQjtBQUNqQixjQUFjO0FBQ2QsVUFBVTtBQUNWLFlBQVk7QUFDWixVQUFVO0FBQ1YsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixrREFBa0Q7QUFDbEQsNkRBQTZEOztBQUU3RDtBQUNBOzs7RUFHRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjtBQUdBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGdCQUFnQjs7QUFFbEI7QUFDQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLHNCQUFzQjs7QUFFeEI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osU0FBUzs7QUFFWDtBQUNBOztBQUVBO0FBQ0E7RUFDRTtJQUNFLFlBQVk7RUFDZDtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2Q7Q0FDRDtBQUNBO0NBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Npbmd1cC9zaW5ndXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gIHBhZGRpbmc6IDMlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5yZWdpc3Rlci1zZWdtZW50IHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDIzcHggMzBweCAyNHB4O1xuICBwYWRkaW5nOiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDphdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbiA6IDElO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmJ1dHRvbi5idG4uYnRuLXByaW1hcnkubXQtMyB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmVnaXN0ZXItc2VnbWVudCBidXR0b257XG5tYXJnaW4tbGVmdDogYXV0bztcbm1hcmdpbi1yaWdodDphdXRvO1xuZGlzcGxheTogYmxvY2s7XG53aWR0aDogOTAlO1xuaGVpZ2h0OiA1MHB4O1xuY29sb3I6I2ZmZjtcbmJvcmRlci1yYWRpdXM6IDEycHg7XG5tYXJnaW4tYm90dG9tOiA0JTtcbmJveC1zaGFkb3c6IDAgNHB4IDE2cHggMCByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMjUpO1xuYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzAxMjE2OWQxLCAjNTQ4OWZmKTtcblxufVxuLnJlZ2lzdGVyLXNlZ21lbnQgaW5wdXQsXG4ucmVnaXN0ZXItc2VnbWVudCBidXR0b25cbntcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmMWYxZjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIHBhZGRpbmctbGVmdDogMiU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICM3Nzc3Nzc7XG59XG5cbi5wYWdlLXRpdGxle1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIHBhZGRpbmctYm90dG9tOiA3JTtcbiAgZm9udC1mYW1pbHk6J051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiA0MnB4O1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzpub3JtYWw7XG4gIGNvbG9yOiAjMmYyZjJmO1xufVxuXG5cbmltZy5sb2dvIHtcbiAgd2lkdGg6IDMwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzJTtcbiAgb3BhY2l0eTogMC43O1xufVxuLnRleHQtc3R5bGUtMXtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiAgIzdkYjZlNztcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbi5yZWdpc3Rlci1zZWdtZW50e1xuICBkaXNwbGF5OmJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OmF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMiU7XG4gIGZvbnQtZmFtaWx5OidOdW5pdG8gU2FucycsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcblxufVxuLnJlZ2lzdGVyLXNlZ21lbnQgYXtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnJlZ2lzdGVyLXNlZ21lbnQgYTpob3ZlciwgLmxpbmstdGV4dCwgYXtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4udGV4dHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6YXV0bztcbiAgZm9udC1mYW1pbHk6J051bml0byBTYW5zJywgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43MTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICMyZjJmMmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5mb3Jte1xuICB3aWR0aDogMTAwJTtcbn1cbi5yZWdpc3Rlci1pbWcsIC5mb3Jte1xuICBwYWRkaW5nOiAzJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW46MyU7XG5cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuXG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLnJlZ2lzdGVyLXNlZ21lbnR7XG4gICAgZGlzcGxheTpmbGV4O1xuICB9XG4gIC5mb3Jte1xuICAgIHdpZHRoOiA3MCU7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xuICBpbWcubG9nbyB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAzJTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cbiB9XG4gQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCkge1xuIH1cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-singup',
                templateUrl: './singup.component.html',
                styleUrls: ['./singup.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


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


class NavbarComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 15, vars: 0, consts: [["rel", "stylesheet", "href", "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css", "integrity", "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", "crossorigin", "anonymous"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "/", 1, "navbar-brand"], ["id", "navbarlogo", "src", "https://www.flaticon.es/svg/static/icons/svg/2506/2506463.svg", "alt", "logo Bitcoin", "width", "50", "height", "50", "alt", "", "loading", "lazy", 1, "d-inline-block", "align-top"], ["id", "navbarSupportedContent", 1, "navbar-nav"], [1, "list-group", "list-group-horizontal", "list-unstyled", "mr-auto"], [1, "nav-item", "p-2"], ["href", "/ingresar", 1, "nav-link"], ["href", "/registrarse", 1, "nav-link"], ["href", "/micuenta", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "link", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ingresar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Registrarse");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Mi cuenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#navbarlogo[_ngcontent-%COMP%]{\n  opacity: 0.7;\n}\nimg.logo[_ngcontent-%COMP%] {\n  width: 30%;\n  display: block;\n  align-items: center;\n  margin: auto;\n  padding: 3%;\n  opacity: 0.7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2YmFybG9nb3tcbiAgb3BhY2l0eTogMC43O1xufVxuaW1nLmxvZ28ge1xuICB3aWR0aDogMzAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAzJTtcbiAgb3BhY2l0eTogMC43O1xufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css']
            }]
    }], function () { return []; }, null); })();


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
        console.log("Usuario service is running");
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









const routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'ingresar', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'registrarse', component: _components_singup_singup_component__WEBPACK_IMPORTED_MODULE_3__["SingupComponent"] },
    { path: 'micuenta', component: _components_myaccount_myaccount_component__WEBPACK_IMPORTED_MODULE_2__["MyaccountComponent"] },
    { path: 'resetpassword', component: _components_resetpassword_resetpassword_component__WEBPACK_IMPORTED_MODULE_0__["ResetpasswordComponent"] },
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