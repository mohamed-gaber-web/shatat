(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-language-choose-language-module"],{

/***/ "06s9":
/*!*******************************************************************!*\
  !*** ./src/app/choose-language/choose-language-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChooseLanguagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLanguagePageRoutingModule", function() { return ChooseLanguagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _choose_language_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-language.page */ "Waqm");




const routes = [
    {
        path: '',
        component: _choose_language_page__WEBPACK_IMPORTED_MODULE_3__["ChooseLanguagePage"]
    }
];
let ChooseLanguagePageRoutingModule = class ChooseLanguagePageRoutingModule {
};
ChooseLanguagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseLanguagePageRoutingModule);



/***/ }),

/***/ "Ivhk":
/*!***********************************************************!*\
  !*** ./src/app/choose-language/choose-language.module.ts ***!
  \***********************************************************/
/*! exports provided: ChooseLanguagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLanguagePageModule", function() { return ChooseLanguagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _choose_language_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-language-routing.module */ "06s9");
/* harmony import */ var _choose_language_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-language.page */ "Waqm");







let ChooseLanguagePageModule = class ChooseLanguagePageModule {
};
ChooseLanguagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_language_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseLanguagePageRoutingModule"]
        ],
        declarations: [_choose_language_page__WEBPACK_IMPORTED_MODULE_6__["ChooseLanguagePage"]]
    })
], ChooseLanguagePageModule);



/***/ }),

/***/ "Waqm":
/*!*********************************************************!*\
  !*** ./src/app/choose-language/choose-language.page.ts ***!
  \*********************************************************/
/*! exports provided: ChooseLanguagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseLanguagePage", function() { return ChooseLanguagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_language_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-language.page.html */ "eLml");
/* harmony import */ var _choose_language_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-language.page.scss */ "rqvV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/app.service */ "BbT4");






let ChooseLanguagePage = class ChooseLanguagePage {
    constructor(router, appSerrvice) {
        this.router = router;
        this.appSerrvice = appSerrvice;
        this.isLoading = false;
        this.subs = [];
        this.isSelected = false;
        this.itemClass = '';
    }
    ngOnInit() {
        this.isLoading = true;
        this.subs.push(this.appSerrvice.getLanguage().subscribe(response => {
            this.isLoading = false;
            this.langItems = response['result'];
        }));
    }
    chooseLanguage() {
        this.router.navigate(['/intro']);
    }
    getLanguageId(item) {
        localStorage.setItem('languageId', JSON.stringify(item.id));
        // this.isSelected = !this.isSelected;
        // console.log('selected elements');
        this.selected = item;
    }
    isActive(item) {
        return this.selected === item;
    }
    ;
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
ChooseLanguagePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _shared_services_app_service__WEBPACK_IMPORTED_MODULE_5__["AppService"] }
];
ChooseLanguagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-language',
        template: _raw_loader_choose_language_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_language_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChooseLanguagePage);



/***/ }),

/***/ "eLml":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choose-language/choose-language.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"choose-language\">\r\n  <h1 class=\"title\"> Choose Language </h1>\r\n</div>\r\n\r\n\r\n<ion-content>\r\n\r\n  <ion-grid class=\"lang-bg\">\r\n\r\n    <ion-row>\r\n\r\n      <ion-spinner *ngIf=\"isLoading\"></ion-spinner>\r\n      <ion-col *ngFor=\"let item of langItems; let i = index\"  size-xs=\"4\" size-md=\"3\">\r\n        <ion-img\r\n          [ngClass]=\"{'active': isActive(item)}\"\r\n          (click)=\"getLanguageId(item)\"\r\n          [src]=\"item.icon\" class=\"lang-img\"></ion-img>\r\n        <h3> <ion-text color=\"primary\"> {{ item.name }} </ion-text> </h3>\r\n      </ion-col>\r\n      <!-- [ngClass]=\"isSelected ? 'flag-border' : 'flag-unborder'\" -->\r\n    </ion-row>\r\n\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row class='ion-justify-content-center'>\r\n      <ion-col size=\"12\" size-lg=\"6\" >\r\n        <div class=\"button-start\">\r\n          <ion-button [disabled]='!selected' (click)=\"chooseLanguage()\">\r\n            <ion-img src=\"../../assets/images/logo-hand-2.png\"></ion-img>\r\n            START\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "rqvV":
/*!***********************************************************!*\
  !*** ./src/app/choose-language/choose-language.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".choose-language h1.title {\n  text-align: center;\n  color: var(--ion-color-second-app);\n  font-weight: 600 !important;\n  font-size: 25px;\n  margin: 70px 0 15px 0;\n}\n.choose-language .icon-down {\n  width: 30px;\n  height: auto;\n  margin: auto;\n}\n.lang-bg {\n  margin: 40px 0;\n}\n.lang-bg .lang-img {\n  width: 62px;\n  height: 62px;\n  margin: auto;\n  cursor: pointer;\n}\n.lang-bg h3 {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n  margin: 10px 0;\n  text-transform: capitalize;\n}\n.button-start {\n  margin: 50px auto 0 auto;\n  text-align: center;\n}\nion-button {\n  --background: var(--ion-color-second-app)!important;\n  --border-radius: 50px!important;\n  font-size: 22px !important;\n  font-weight: 500;\n  width: 90%;\n  height: 55px;\n  --box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.16);\n}\nion-button ion-img {\n  max-width: 45px;\n  height: auto;\n}\n.button-start ion-img {\n  padding-right: 10px;\n}\nion-spinner {\n  text-align: center !important;\n  margin: auto;\n}\n.active {\n  transform: scale(1.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNob29zZS1sYW5ndWFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFESjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBREo7QUFPQTtFQUVFLGNBQUE7QUFMRjtBQU9FO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxKO0FBUUU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtBQU5KO0FBZUE7RUFDRSx3QkFBQTtFQUNBLGtCQUFBO0FBWkY7QUFlQTtFQUNFLG1EQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw2Q0FBQTtBQVpGO0FBY0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVpKO0FBZ0JBO0VBQ0UsbUJBQUE7QUFiRjtBQWdCQTtFQUNFLDZCQUFBO0VBQ0EsWUFBQTtBQWJGO0FBaUJBO0VBS0UscUJBQUE7QUFkRiIsImZpbGUiOiJjaG9vc2UtbGFuZ3VhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNob29zZS1sYW5ndWFnZXtcclxuXHJcbmgxLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBtYXJnaW46IDcwcHggMCAxNXB4IDA7XHJcbiAgfVxyXG4gIC5pY29uLWRvd24ge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcbi5sYW5nLWJnIHtcclxuXHJcbiAgbWFyZ2luOiA0MHB4IDA7XHJcblxyXG4gIC5sYW5nLWltZyB7XHJcbiAgICB3aWR0aDogNjJweDtcclxuICAgIGhlaWdodDogNjJweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gIGgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxufVxyXG5cclxuLy8gLmxhbmctYmcgaW9uLWltZyB7XHJcbi8vICAgd2lkdGg6IDkwcHghaW1wb3J0YW50O1xyXG4vLyAgIG1hcmdpbjogMTVweCBhdXRvO1xyXG4vLyB9XHJcblxyXG4uYnV0dG9uLXN0YXJ0IHtcclxuICBtYXJnaW46IDUwcHggYXV0byAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICAtLWJhY2tncm91bmQgOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCkhaW1wb3J0YW50O1xyXG4gIC0tYm9yZGVyLXJhZGl1czogNTBweCFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3aWR0aDogOTAlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICAtLWJveC1zaGFkb3c6IDJweCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNik7XHJcblxyXG4gIGlvbi1pbWcge1xyXG4gICAgbWF4LXdpZHRoOiA0NXB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLmJ1dHRvbi1zdGFydCBpb24taW1nIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5pb24tc3Bpbm5lciAge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5cclxuLmFjdGl2ZXtcclxuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4zKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMyk7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=choose-language-choose-language-module.js.map