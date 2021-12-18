(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-policy-policy-module"],{

/***/ "QkKV":
/*!*******************************************************!*\
  !*** ./src/app/pages/policy/policy-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageRoutingModule", function() { return PolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./policy.page */ "liCJ");




const routes = [
    {
        path: '',
        component: _policy_page__WEBPACK_IMPORTED_MODULE_3__["PolicyPage"]
    }
];
let PolicyPageRoutingModule = class PolicyPageRoutingModule {
};
PolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PolicyPageRoutingModule);



/***/ }),

/***/ "Yh1n":
/*!***********************************************!*\
  !*** ./src/app/pages/policy/policy.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n/* end header top */\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n.privacy-policy {\n  background-color: #fff;\n  width: 100%;\n  margin: 20px auto;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);\n  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);\n  -mooz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);\n  border-radius: 8px;\n  padding: 20px;\n}\n.privacy-policy ion-text {\n  font-size: 16px;\n  color: #1c1d1f;\n  text-transform: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQURKO0FBS0EsbUJBQUE7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBSEY7QUFPQTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUVBQUE7RUFDQSxpRkFBQTtFQUNBLCtFQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBSkY7QUFNRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFKSiIsImZpbGUiOiJwb2xpY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pbWctcHJvZmlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBlbmQgaGVhZGVyIHRvcCAqL1xyXG5cclxuLmltZy1sYW5nYXVnZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTNweDtcclxuICB0b3A6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuXHJcbi5wcml2YWN5LXBvbGljeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDIwcHggYXV0bztcclxuICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiKDAgMCAwIC8gOCUpLCAwIDRweCAxMnB4IHJnYigwIDAgMCAvIDglKTtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2IoMCAwIDAgLyA4JSksIDAgNHB4IDEycHggcmdiKDAgMCAwIC8gOCUpO1xyXG4gIC1tb296LWJveC1zaGFkb3c6MCAycHggNHB4IHJnYigwIDAgMCAvIDglKSwgMCA0cHggMTJweCByZ2IoMCAwIDAgLyA4JSk7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gIGlvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMWMxZDFmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "liCJ":
/*!*********************************************!*\
  !*** ./src/app/pages/policy/policy.page.ts ***!
  \*********************************************/
/*! exports provided: PolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPage", function() { return PolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_policy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./policy.page.html */ "mj/9");
/* harmony import */ var _policy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./policy.page.scss */ "Yh1n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/app.service */ "BbT4");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");







let PolicyPage = class PolicyPage {
    constructor(authService, storageService, appServ) {
        this.authService = authService;
        this.storageService = storageService;
        this.appServ = appServ;
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.userInfo = this.authService.getUser();
        this.appServ.getPolicyPage().subscribe(response => {
            this.isLoading = false;
            this.policyData = response['result']['policyTranslations'];
            console.log(response['result']['policyTranslations']);
        });
    }
};
PolicyPage.ctorParameters = () => [
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
PolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-policy',
        template: _raw_loader_policy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_policy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PolicyPage);



/***/ }),

/***/ "mj/9":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/policy/policy.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"course\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/courses/tabs/all-courses\"> </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n\r\n    <div class=\"img-profile\">\r\n      <ion-avatar slot=\"end\">\r\n        <img loading=\"lazy\" *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\r\n        <img loading=\"lazy\" *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\r\n        src=\"../../../assets/images/image profille (1).png\">\r\n      </ion-avatar>\r\n      <ion-label>{{ userInfo.firstname + ' ' +  userInfo.lastname }}</ion-label>\r\n    </div>\r\n\r\n    <!-- <img  [src]=\"userInfo.languageIcon\" /> -->\r\n\r\n    <ion-avatar class=\"ion-margin-end\"  slot=\"end\">\r\n      <img loading=\"lazy\" class=\"img-langauge\" [src]=\"userInfo.languageIcon\">\r\n    </ion-avatar>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-toolbar class=\"ios-toolbar\">\r\n  <ion-title>Privacy policy</ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"12\" size-lg=\"10\">\r\n        <div class=\"privacy-policy\" *ngFor=\"let policy of policyData\">\r\n          <ion-text [innerHTML]=\"policy.content\"></ion-text>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "nGq5":
/*!***********************************************!*\
  !*** ./src/app/pages/policy/policy.module.ts ***!
  \***********************************************/
/*! exports provided: PolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolicyPageModule", function() { return PolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./policy-routing.module */ "QkKV");
/* harmony import */ var _policy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./policy.page */ "liCJ");







let PolicyPageModule = class PolicyPageModule {
};
PolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _policy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PolicyPageRoutingModule"]
        ],
        declarations: [_policy_page__WEBPACK_IMPORTED_MODULE_6__["PolicyPage"]]
    })
], PolicyPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-policy-policy-module.js.map