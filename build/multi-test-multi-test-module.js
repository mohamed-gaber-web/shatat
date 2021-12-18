(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multi-test-multi-test-module"],{

/***/ "USv7":
/*!**********************************************************************!*\
  !*** ./src/app/training/test-course/multi-test/multi-test.module.ts ***!
  \**********************************************************************/
/*! exports provided: MultiTestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiTestPageModule", function() { return MultiTestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _multi_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./multi-test-routing.module */ "nuhl");






let MultiTestPageModule = class MultiTestPageModule {
};
MultiTestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _multi_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["MultiTestPageRoutingModule"],
        ],
        declarations: []
    })
], MultiTestPageModule);



/***/ }),

/***/ "nuhl":
/*!******************************************************************************!*\
  !*** ./src/app/training/test-course/multi-test/multi-test-routing.module.ts ***!
  \******************************************************************************/
/*! exports provided: MultiTestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiTestPageRoutingModule", function() { return MultiTestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _multi_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi-test.page */ "vyh8");




const routes = [
    {
        path: '',
        component: _multi_test_page__WEBPACK_IMPORTED_MODULE_3__["MultiTestPage"]
    }
];
let MultiTestPageRoutingModule = class MultiTestPageRoutingModule {
};
MultiTestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MultiTestPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=multi-test-multi-test-module.js.map