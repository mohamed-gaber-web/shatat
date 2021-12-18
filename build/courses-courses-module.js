(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["courses-courses-module"],{

/***/ "I93C":
/*!***************************************************!*\
  !*** ./src/app/courses/courses-routing.module.ts ***!
  \***************************************************/
/*! exports provided: CoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageRoutingModule", function() { return CoursesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courses.page */ "utW2");




const routes = [
    // {
    //   path: '',
    //   component: CoursesPage
    // },
    // {
    //   path: 'all-courses',
    //   loadChildren: () => import('./all-courses/all-courses.module').then( m => m.AllCoursesPageModule)
    // },
    // {
    //   path: 'my-courses',
    //   loadChildren: () => import('./my-courses/my-courses.module').then( m => m.MyCoursesPageModule)
    // },
    // {
    //   path: '/:courseId',
    //   loadChildren: () => import('./course-details/course-details.module').then( m => m.CourseDetailsPageModule)
    // }
    {
        path: 'tabs',
        component: _courses_page__WEBPACK_IMPORTED_MODULE_3__["CoursesPage"],
        children: [
            {
                path: 'all-courses',
                loadChildren: () => Promise.all(/*! import() | all-courses-all-courses-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~cec1ce6f"), __webpack_require__.e("common"), __webpack_require__.e("all-courses-all-courses-module")]).then(__webpack_require__.bind(null, /*! ./all-courses/all-courses.module */ "u2BO")).then(m => m.AllCoursesPageModule)
            },
            {
                path: 'my-courses',
                loadChildren: () => Promise.all(/*! import() | my-courses-my-courses-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~cec1ce6f"), __webpack_require__.e("default~course-details-course-details-module~my-courses-my-courses-module"), __webpack_require__.e("common"), __webpack_require__.e("my-courses-my-courses-module")]).then(__webpack_require__.bind(null, /*! ./my-courses/my-courses.module */ "ircu")).then(m => m.MyCoursesPageModule)
            },
            {
                path: 'apply-course',
                loadChildren: () => Promise.all(/*! import() | apply-course-apply-course-module */[__webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~da13af96"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~30de349d"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-text-puzzle-text-module~sign-up~b0779ada"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-mo~a5320f4c"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-text-puzzle-text-module~sign-up-sign-up-module"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-text-puzzle-text-module"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-text-puzzle-text-module"), __webpack_require__.e("default~apply-course-apply-course-module~sign-up-sign-up-module"), __webpack_require__.e("apply-course-apply-course-module")]).then(__webpack_require__.bind(null, /*! ./apply-course/apply-course.module */ "kd6V")).then(m => m.ApplyCoursePageModule)
            },
            {
                path: 'choose-course-material',
                loadChildren: () => __webpack_require__.e(/*! import() | choose-course-material-choose-course-material-module */ "choose-course-material-choose-course-material-module").then(__webpack_require__.bind(null, /*! ./choose-course-material/choose-course-material.module */ "DLKj")).then(m => m.ChooseCourseMaterialPageModule)
            },
            {
                path: ':courseId',
                loadChildren: () => Promise.all(/*! import() | course-details-course-details-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~cec1ce6f"), __webpack_require__.e("default~course-details-course-details-module~my-courses-my-courses-module"), __webpack_require__.e("course-details-course-details-module")]).then(__webpack_require__.bind(null, /*! ./course-details/course-details.module */ "4PMM")).then(m => m.CourseDetailsPageModule)
            }
        ]
    },
    {
        path: '',
        redirectTo: '/courses/tabs/all-courses',
        pathMatch: 'full'
    },
    {
        path: 'course-material/:courseId',
        loadChildren: () => Promise.all(/*! import() | course-material-course-material-module */[__webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~cec1ce6f"), __webpack_require__.e("course-material-course-material-module")]).then(__webpack_require__.bind(null, /*! ./course-material/course-material.module */ "kp8m")).then(m => m.CourseMaterialPageModule)
    }
];
let CoursesPageRoutingModule = class CoursesPageRoutingModule {
};
CoursesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoursesPageRoutingModule);



/***/ }),

/***/ "mHEJ":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* header Top */\n.course {\n  position: relative;\n}\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n/* end header top */\nion-tabs ion-icon {\n  color: #fff;\n  font-size: 22px;\n}\nion-tabs ion-label {\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  padding-top: 0;\n}\nion-button {\n  width: 53px;\n  height: 53px;\n  --background: #A7F781;\n  border: 1px solid #fff;\n}\nion-icon {\n  --color: var(--ion-color-second-app);\n  font-size: 20px;\n}\nion-tab-button.tab-selected ion-label {\n  color: #A7F781 !important;\n  font-weight: bold;\n}\nion-tab-button.tab-selected ion-icon {\n  color: #A7F781 !important;\n}\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvdXJzZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGVBQUE7QUFTQTtFQUNFLGtCQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUEY7QUFTRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQVBKO0FBVUU7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFSSjtBQVlBLG1CQUFBO0FBRUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQVZGO0FBYUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFWRjtBQWNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBWEY7QUFlQTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtBQVpGO0FBaUJBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQWRGO0FBaUJBO0VBQ0UseUJBQUE7QUFkRjtBQWlCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBZEYiLCJmaWxlIjoiY291cnNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBoZWFkZXIgVG9wICovXHJcbi8vIGlvbi1pY29uIHtmb250LXNpemU6IDM1cHg7fVxyXG5cclxuLy8gaW9uLWhlYWRlciBpb24taW1nIHtcclxuLy8gICB3aWR0aDogMzVweDtcclxuLy8gICBoZWlnaHQ6IGF1dG87XHJcbi8vICAgbWFyZ2luLXRvcDogMTBweDtcclxuLy8gfVxyXG5cclxuLmNvdXJzZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1nLXByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogZW5kIGhlYWRlciB0b3AgKi9cclxuXHJcbmlvbi10YWJzIGlvbi1pY29uIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbmlvbi10YWJzIGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nLXRvcDogMFxyXG59XHJcblxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDUzcHg7XHJcbiAgaGVpZ2h0OiA1M3B4O1xyXG4gIC0tYmFja2dyb3VuZDogI0E3Rjc4MTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xyXG5cclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGlvbi1sYWJlbCB7XHJcbiAgY29sb3I6ICNBN0Y3ODEhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG5pb24tdGFiLWJ1dHRvbi50YWItc2VsZWN0ZWQgaW9uLWljb24ge1xyXG4gIGNvbG9yOiAjQTdGNzgxIWltcG9ydGFudDtcclxufVxyXG5cclxuLmltZy1sYW5nYXVnZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTNweDtcclxuICB0b3A6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "o+MO":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/courses.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"course\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/courses/tabs/all-courses\"> </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n\r\n    <div class=\"img-profile\">\r\n      <ion-avatar slot=\"end\">\r\n        <img loading=\"lazy\" *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\r\n        <img loading=\"lazy\" *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\r\n        src=\"../../../assets/images/image profille (1).png\">\r\n      </ion-avatar>\r\n      <ion-label>{{ userInfo.firstname + ' ' +  userInfo.lastname }}</ion-label>\r\n    </div>\r\n\r\n    <!-- <img  [src]=\"userInfo.languageIcon\" /> -->\r\n\r\n    <ion-avatar class=\"ion-margin-end\"  slot=\"end\">\r\n      <img loading=\"lazy\" class=\"img-langauge\" [src]=\"userInfo.languageIcon\">\r\n    </ion-avatar>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <ion-tabs >\r\n\r\n    <ion-tab-bar slot=\"bottom\">\r\n      <ion-tab-button tab=\"all-courses\">\r\n        <ion-icon name=\"grid-outline\"></ion-icon>\r\n        <ion-label>All Courses</ion-label>\r\n      </ion-tab-button>\r\n\r\n      <ion-tab-button tab=\"my-courses\">\r\n        <ion-icon name=\"documents-outline\"></ion-icon>\r\n        <ion-label>My Courses</ion-label>\r\n      </ion-tab-button>\r\n\r\n    </ion-tab-bar>\r\n\r\n  </ion-tabs>\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "sU/i":
/*!*******************************************!*\
  !*** ./src/app/courses/courses.module.ts ***!
  \*******************************************/
/*! exports provided: CoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPageModule", function() { return CoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _courses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./courses-routing.module */ "I93C");
/* harmony import */ var _courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./courses.page */ "utW2");







let CoursesPageModule = class CoursesPageModule {
};
CoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _courses_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoursesPageRoutingModule"]
        ],
        declarations: [_courses_page__WEBPACK_IMPORTED_MODULE_6__["CoursesPage"]]
    })
], CoursesPageModule);



/***/ }),

/***/ "utW2":
/*!*****************************************!*\
  !*** ./src/app/courses/courses.page.ts ***!
  \*****************************************/
/*! exports provided: CoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoursesPage", function() { return CoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_courses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./courses.page.html */ "o+MO");
/* harmony import */ var _courses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./courses.page.scss */ "mHEJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "qXBG");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/storage.service */ "fbMX");






let CoursesPage = class CoursesPage {
    constructor(storageService, authService) {
        this.storageService = storageService;
        this.authService = authService;
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
    }
};
CoursesPage.ctorParameters = () => [
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_5__["StorageService"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
CoursesPage.propDecorators = {
    tabs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['myTabs',] }]
};
CoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-courses',
        template: _raw_loader_courses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CoursesPage);



/***/ })

}]);
//# sourceMappingURL=courses-courses-module.js.map