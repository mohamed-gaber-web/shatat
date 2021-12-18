(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-test-single-test-module"],{

/***/ "FW/z":
/*!********************************************************************************!*\
  !*** ./src/app/training/test-course/single-test/single-test-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: SingleTestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTestPageRoutingModule", function() { return SingleTestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _single_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-test.page */ "YqGo");




const routes = [
    {
        path: '',
        component: _single_test_page__WEBPACK_IMPORTED_MODULE_3__["SingleTestPage"]
    }
];
let SingleTestPageRoutingModule = class SingleTestPageRoutingModule {
};
SingleTestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleTestPageRoutingModule);



/***/ }),

/***/ "r1++":
/*!************************************************************************!*\
  !*** ./src/app/training/test-course/single-test/single-test.module.ts ***!
  \************************************************************************/
/*! exports provided: SingleTestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTestPageModule", function() { return SingleTestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _single_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-test-routing.module */ "FW/z");






let SingleTestPageModule = class SingleTestPageModule {
};
SingleTestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _single_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleTestPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: []
    })
], SingleTestPageModule);



/***/ })

}]);
//# sourceMappingURL=single-test-single-test-module.js.map