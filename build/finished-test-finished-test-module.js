(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["finished-test-finished-test-module"],{

/***/ "3KrB":
/*!****************************************************************!*\
  !*** ./src/app/training/finished-test/finished-test.module.ts ***!
  \****************************************************************/
/*! exports provided: FinishedTestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedTestPageModule", function() { return FinishedTestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _finished_test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./finished-test-routing.module */ "evZ2");
/* harmony import */ var _finished_test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./finished-test.page */ "d9yl");







let FinishedTestPageModule = class FinishedTestPageModule {
};
FinishedTestPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _finished_test_routing_module__WEBPACK_IMPORTED_MODULE_5__["FinishedTestPageRoutingModule"]
        ],
        declarations: [_finished_test_page__WEBPACK_IMPORTED_MODULE_6__["FinishedTestPage"]]
    })
], FinishedTestPageModule);



/***/ }),

/***/ "V1Po":
/*!*************************************************!*\
  !*** ./src/app/shared/services/test.service.ts ***!
  \*************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../api.constants */ "1Lwo");




let TestService = class TestService {
    constructor(http) {
        this.http = http;
        this.offset = 1;
    }
    /**
     * Get Test
     * courseId [ number ]
     * offset [ number ]
     *
     */
    getTestType(courseId, offset) {
        const params = `?courseId=${courseId}&offset=${offset}`;
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["getTextType"]}` + params);
    }
    /**
   * Get check user test
   * return isActive [ boolean ]
   * return testApi [  ]
   *
   */
    checkUserTest() {
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["getUserActiveTest"]}`);
    }
    /**
   * send answer question
   *
   */
    sendAnswerTesting(answerObj) {
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["sendAnswerTest"]}`, answerObj);
    }
    /**
   * send answer question
   *
   */
    finishedTest(userTestId) {
        const params = `?userTestId=${userTestId}`;
        return this.http.post(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["finishedTest"]}` + params, {});
    }
    /**
     * Get Certificate
     * courseId [ number ]
     *
   */
    getCertificate(courseId) {
        this.authKey = localStorage.getItem('access_token');
        const httpOptions = {
            responseType: 'blob',
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': this.authKey,
            })
        };
        const params = `?courseId=${courseId}`;
        return this.http.get(`${_api_constants__WEBPACK_IMPORTED_MODULE_3__["getCertificate"]}` + params, httpOptions);
    }
};
TestService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
TestService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], TestService);



/***/ }),

/***/ "X+vc":
/*!****************************************************************!*\
  !*** ./src/app/training/finished-test/finished-test.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  padding: 50px 0;\n  background-color: #fff;\n  text-align: center;\n}\nion-card ion-button {\n  color: #fff !important;\n}\nion-card ion-card-content {\n  font-size: 22px;\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n  text-align: center;\n}\nion-card img {\n  max-width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmaW5pc2hlZC10ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFBSjtBQUdFO0VBQ0UsZ0JBQUE7QUFESiIsImZpbGUiOiJmaW5pc2hlZC10ZXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQtY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "YRa5":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/finished-test/finished-test.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n\r\n  <ion-card>\r\n    <img src=\"../../../assets/images/finish-line-black.png\" alt=\"\">\r\n    <ion-card-content>\r\n      Thank you to finished This Test please click to finished or previous\r\n    </ion-card-content>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"6\"> <ion-button (click)=\"prev()\" fill=\"outline\">Previous</ion-button></ion-col>\r\n        <ion-col size=\"6\"><ion-button (click)=\"finishedTest()\" fill=\"outline\">Finished</ion-button></ion-col>\r\n\r\n\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "d9yl":
/*!**************************************************************!*\
  !*** ./src/app/training/finished-test/finished-test.page.ts ***!
  \**************************************************************/
/*! exports provided: FinishedTestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedTestPage", function() { return FinishedTestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_finished_test_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./finished-test.page.html */ "YRa5");
/* harmony import */ var _finished_test_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finished-test.page.scss */ "X+vc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");






let FinishedTestPage = class FinishedTestPage {
    constructor(testService, router, route) {
        this.testService = testService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.userTestId = this.route.snapshot.paramMap.get('userTestId');
        this.courseId = this.route.snapshot.paramMap.get('courseId');
        this.pageNumber = this.route.snapshot.paramMap.get('offset');
    }
    finishedTest() {
        this.testService.finishedTest(this.userTestId)
            .subscribe(response => {
            localStorage.setItem('testId', this.userTestId);
            this.router.navigate(['/courses/tabs/my-courses']);
            console.log(response);
        });
    }
    prev() {
        this.testService.getTestType(this.courseId, this.pageNumber - 1)
            .subscribe(response => {
            if (response) {
                this.router.navigate(['/exercise/test-course', { courseId: this.courseId }]);
            }
        });
    }
};
FinishedTestPage.ctorParameters = () => [
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_5__["TestService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
FinishedTestPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-finished-test',
        template: _raw_loader_finished_test_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_finished_test_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FinishedTestPage);



/***/ }),

/***/ "evZ2":
/*!************************************************************************!*\
  !*** ./src/app/training/finished-test/finished-test-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: FinishedTestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinishedTestPageRoutingModule", function() { return FinishedTestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _finished_test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finished-test.page */ "d9yl");




const routes = [
    {
        path: '',
        component: _finished_test_page__WEBPACK_IMPORTED_MODULE_3__["FinishedTestPage"]
    }
];
let FinishedTestPageRoutingModule = class FinishedTestPageRoutingModule {
};
FinishedTestPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FinishedTestPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=finished-test-finished-test-module.js.map