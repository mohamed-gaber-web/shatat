(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["course-details-course-details-module"],{

/***/ "4PMM":
/*!*****************************************************************!*\
  !*** ./src/app/courses/course-details/course-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: CourseDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsPageModule", function() { return CourseDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _course_details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./course-details-routing.module */ "9ybX");
/* harmony import */ var _course_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./course-details.page */ "JeYX");







let CourseDetailsPageModule = class CourseDetailsPageModule {
};
CourseDetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _course_details_routing_module__WEBPACK_IMPORTED_MODULE_5__["CourseDetailsPageRoutingModule"]
        ],
        declarations: [_course_details_page__WEBPACK_IMPORTED_MODULE_6__["CourseDetailsPage"]]
    })
], CourseDetailsPageModule);



/***/ }),

/***/ "4r9s":
/*!*****************************************************************!*\
  !*** ./src/app/courses/course-details/course-details.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2#title {\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: capitalize;\n  text-align: center !important;\n  margin: 30px auto;\n  color: #003182;\n}\n\nion-item {\n  margin: 5px 0;\n  background-color: #fff !important;\n}\n\n.icon-valid {\n  width: 30px;\n  height: 30px;\n  line-height: 39px;\n  background-color: var(--ion-color-second-app);\n  text-align: center;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.icon-valid ion-icon {\n  color: #fff;\n  font-size: 21px;\n}\n\nion-label {\n  font-size: 16px;\n  font-weight: 500;\n  --color: var(--ion-color-second-app);\n}\n\nion-spinner {\n  margin: auto;\n  text-align: center;\n  width: 50%;\n  height: 100%;\n  display: flex;\n}\n\n.statusMsg {\n  background-color: #003182;\n  padding: 10px 0 13px 0;\n  text-align: center;\n  font-size: 16px;\n  font-weight: 300;\n  display: block;\n  color: #fff;\n  border-radius: 10px;\n}\n\n.sound-inro {\n  margin: 10px 0;\n  display: flex;\n  justify-content: space-evenly;\n  position: relative;\n}\n\n.sound-inro .img-volume ion-img {\n  max-width: 45px;\n  width: 45px;\n  position: absolute;\n  top: 56px;\n  right: 60px;\n}\n\n.sound-inro img {\n  max-width: 80px;\n  height: auto;\n}\n\nion-text {\n  cursor: pointer;\n}\n\nion-text ion-icon {\n  font-size: 22px;\n  position: relative;\n  top: 5px;\n}\n\n.passed {\n  font-size: 20px;\n  color: #003182;\n  font-weight: 600;\n  position: relative;\n  top: 14px;\n}\n\n.valid {\n  border: 1px dotted var(--ion-color-second-app);\n  margin: 20px 0;\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n}\n\nvideo {\n  background-color: #fff;\n  border: 1px dotted var(--ion-color-second-app);\n  padding: 10px 0 0 0;\n}\n\n.desc {\n  background-color: #fff;\n  padding: 10px 0 10px 10px;\n  border: 2px dotted #003182;\n}\n\n.course-details-descr {\n  background-color: #fff;\n  padding: 15px;\n  border: 1px dotted #003182;\n}\n\n.course-details-descr ion-text {\n  font-size: 14px;\n  line-height: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb3Vyc2UtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUU7RUFDRSxhQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFDTjs7QUFJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FBREo7O0FBSUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1JO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBSk47O0FBUUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQU5KOztBQVdBO0VBQ0UsZUFBQTtBQVJGOztBQVVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQVJKOztBQWFBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQVZGOztBQWNBO0VBQ0UsOENBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLHNCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtBQVhGOztBQWNBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBWEY7O0FBY0E7RUFLRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtBQWZGOztBQVNFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBUEoiLCJmaWxlIjoiY291cnNlLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIjdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgY29sb3I6ICMwMDMxODI7XHJcbn1cclxuXHJcbiAgaW9uLWl0ZW0ge1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmljb24tdmFsaWQge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzlweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgfVxyXG5cclxuICBpb24tc3Bpbm5lcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uc3RhdHVzTXNnIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAzMTgyO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAxM3B4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLnNvdW5kLWlucm8ge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuaW1nLXZvbHVtZSB7XHJcbiAgICBpb24taW1nIHtcclxuICAgICAgbWF4LXdpZHRoOiA0NXB4O1xyXG4gICAgICB3aWR0aDogNDVweDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDU2cHg7XHJcbiAgICAgIHJpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIG1heC13aWR0aDo4MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmlvbi10ZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5wYXNzZWQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzAwMzE4MjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDE0cHg7XHJcbn1cclxuXHJcblxyXG4udmFsaWQge1xyXG4gIGJvcmRlcjogMXB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwIDA7XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggZG90dGVkICMwMDMxODI7XHJcbn1cclxuXHJcbi5jb3Vyc2UtZGV0YWlscy1kZXNjciB7XHJcbiAgaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3JkZXI6IDFweCBkb3R0ZWQgIzAwMzE4MjtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "9ybX":
/*!*************************************************************************!*\
  !*** ./src/app/courses/course-details/course-details-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: CourseDetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsPageRoutingModule", function() { return CourseDetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _course_details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-details.page */ "JeYX");




const routes = [
    {
        path: '',
        component: _course_details_page__WEBPACK_IMPORTED_MODULE_3__["CourseDetailsPage"]
    }
];
let CourseDetailsPageRoutingModule = class CourseDetailsPageRoutingModule {
};
CourseDetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CourseDetailsPageRoutingModule);



/***/ }),

/***/ "CnCp":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/course-details/course-details.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content class=\"ion-margin-bottom\">\r\n\r\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\r\n\r\n    <h2 id=\"title\" *ngIf=\"courseDetails\" class=\"font-title-desktop\">\r\n      {{ courseDetails.courseTranslations[0]?.title }}\r\n    </h2>\r\n\r\n  <ion-grid *ngIf=\"courseDetails\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-md=\"3\">\r\n        <div *ngIf=\"courseDetails.courseTranslations[0]?.introVoicePath\" class=\"sound-inro\">\r\n          <div class=\"img-person\">\r\n            <img class=\"intro-logo\" src=\"../../assets/images/char-person.png\" />\r\n          </div>\r\n        <div class=\"icon-sound\">\r\n          <div class=\"img-volume\">\r\n            <ion-img\r\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-3\" (click)=\"startAudio(courseDetails.courseTranslations[0]?.introVoicePath)\" src=\"../../../assets/icon/Vector.png\">\r\n          </ion-img>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"courseDetails\">\r\n    <ion-row>\r\n      <ion-col size=\"12\" size-md=\"5\">\r\n        <ion-img loading=\"lazy\" [src]=\"courseDetails?.imagePath\"></ion-img>\r\n      </ion-col>\r\n\r\n      <ion-col size-md=\"7\" size=\"12\" class=\"ion-margin-top\" >\r\n\r\n        <p class=\"course-details-descr\">\r\n          <ion-text *ngIf=\"courseDetails.courseTranslations[0]?.description !== null\" class=\"font-description-desktop\" color=\"primary\">\r\n            {{courseDetails.courseTranslations[0]?.description}}\r\n          </ion-text>\r\n        </p>\r\n\r\n      <!-- Desktop version -->\r\n\r\n      <div *ngIf=\"courseDetails\" class=\"video-inro hide-desktop\">\r\n        <video *ngIf=\"courseDetails.courseTranslations[0]?.introVideoPath\" width=\"100%\" height=\"200\" controls>\r\n          <source [src]=\"courseDetails.courseTranslations[0]?.introVideoPath\" type=\"video/mp4\">\r\n        </video>\r\n      </div>\r\n\r\n      <ion-grid *ngIf=\"courseDetails\" class=\"hide-desktop\">\r\n        <ion-row class=\"valid\">\r\n            <ion-item class=\"time-valid\" lines=\"none\">\r\n              <div class=\"icon-valid\">\r\n                <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\r\n              </div>\r\n              <ion-label  color=\"primary\"> <strong> Valid For: </strong> {{ courseDetails.duration }} Day </ion-label>\r\n            </ion-item>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid *ngIf=\"courseDetails\" class=\"ion-margin-top ion-margin-bottom hide-desktop\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size=\"12\" size-md=\"8\" size-lg=\"8\">\r\n            <ion-button (click)=\"sendData($event, courseDetails.id)\" *ngIf=\"courseDetails.statusName === null\"> Apply </ion-button>\r\n            <ion-button *ngIf=\"courseDetails.status == 2\"> Expired Without Taking The Exam   </ion-button>\r\n            <ion-button *ngIf=\"courseDetails.status == 3\"> Failed  </ion-button>\r\n            <ion-button *ngIf=\"courseDetails.status == 4\"> Applied And Waiting For Approval </ion-button>\r\n            <ion-button *ngIf=\"courseDetails.status == 5\"> In Progress </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-grid *ngIf=\"courseDetails\" class=\"ion-margin-top ion-margin-bottom hide-desktop\">\r\n        <ion-row class=\"ion-justify-content-center\">\r\n          <ion-col size=\"3\" size-lg=\"3\">\r\n            <ion-text class=\"passed\" *ngIf=\"courseDetails.status == 1\">\r\n              Passed\r\n            </ion-text>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"9\" size-lg=\"3\">\r\n            <ion-text  (click)=\"downloadCertificate()\" class=\"statusMsg\" *ngIf=\"courseDetails.status == 1\">\r\n              Certificate\r\n              <ion-icon name=\"download-outline\"></ion-icon>\r\n            </ion-text>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n      <!-- Desktop Version -->\r\n\r\n      </ion-col>\r\n\r\n\r\n\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"hide-mobile\" *ngIf=\"courseDetails\">\r\n    <ion-row class=\"valid\">\r\n        <ion-item class=\"time-valid\" lines=\"none\">\r\n          <div class=\"icon-valid\">\r\n            <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\r\n          </div>\r\n          <ion-label  color=\"primary\"> <strong> Valid For: </strong> {{ courseDetails.duration }} Day </ion-label>\r\n        </ion-item>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n <div *ngIf=\"courseDetails\" class=\"video-inro hide-mobile\">\r\n    <video *ngIf=\"courseDetails.courseTranslations[0]?.introVideoPath\" width=\"100%\" height=\"200\" controls>\r\n      <source [src]=\"courseDetails.courseTranslations[0]?.introVideoPath\" type=\"video/mp4\">\r\n    </video>\r\n </div>\r\n\r\n  <ion-grid *ngIf=\"courseDetails\" class=\"ion-margin-top ion-margin-bottom hide-mobile\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col>\r\n        <ion-button (click)=\"sendData($event, courseDetails.id)\" *ngIf=\"courseDetails.statusName === null\"> Apply </ion-button>\r\n        <ion-button *ngIf=\"courseDetails.status == 2\"> Expired Without Taking The Exam   </ion-button>\r\n        <ion-button *ngIf=\"courseDetails.status == 3\"> Failed  </ion-button>\r\n        <ion-button *ngIf=\"courseDetails.status == 4\"> Applied And Waiting For Approval </ion-button>\r\n        <ion-button *ngIf=\"courseDetails.status == 5\"> In Progress </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"ion-margin-top ion-margin-bottom hide-mobile\" *ngIf=\"courseDetails\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"3\" size-lg=\"3\">\r\n        <ion-text class=\"passed\" *ngIf=\"courseDetails.status == 1\">\r\n          Passed\r\n        </ion-text>\r\n      </ion-col>\r\n\r\n      <ion-col size=\"9\" size-lg=\"3\">\r\n        <ion-text  (click)=\"downloadCertificate()\" class=\"statusMsg\" *ngIf=\"courseDetails.status == 1\">\r\n          Certificate\r\n          <ion-icon name=\"download-outline\"></ion-icon>\r\n        </ion-text>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "JeYX":
/*!***************************************************************!*\
  !*** ./src/app/courses/course-details/course-details.page.ts ***!
  \***************************************************************/
/*! exports provided: CourseDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsPage", function() { return CourseDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_course_details_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./course-details.page.html */ "CnCp");
/* harmony import */ var _course_details_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./course-details.page.scss */ "4r9s");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ionic_native_file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file */ "hMac");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "wMzM");












let CourseDetailsPage = class CourseDetailsPage {
    constructor(router, courseService, route, testService, fileOpener, platform) {
        this.router = router;
        this.courseService = courseService;
        this.route = route;
        this.testService = testService;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.subs = [];
        this.isLoading = false;
        this.userTestId = JSON.parse(localStorage.getItem('userTestId'));
        this.player = null;
        this.isPlaying = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.subs.push(this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((params) => this.courseService.getCoursesDetails(+params.get('courseId')))).subscribe(response => {
            console.log('course details', response['result']);
            this.isLoading = false;
            this.courseDetails = response['result'];
        }));
    }
    // ** send id to apply course page
    sendData(event, id) {
        this.router.navigate(['courses/tabs/apply-course', { id }]);
    }
    downloadCertificate() {
        this.testService.getCertificate(this.courseDetails.id)
            .subscribe((response) => {
            this.isLoading = false;
            if (this.platform.is('mobileweb')) {
                this.pdfFile = new Blob([response], { type: 'application/pdf' });
                var downloadURL = window.URL.createObjectURL(response);
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = "Certificate.pdf";
                link.click();
            }
            else if (this.platform.is('android')) {
                _ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].writeFile(_ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].externalRootDirectory + "/Download", this.courseDetails.id + "Certificate.pdf", new Blob([response]), {
                    replace: true,
                });
                this.fileOpener.open(_ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].externalRootDirectory + "/Download/" + this.courseDetails.id + "Certificate.pdf", 'application/pdf')
                    .then(() => console.log('File is opened'))
                    .catch(e => console.log('Error opening file', e));
            }
            else {
                this.pdfFile = new Blob([response], { type: 'application/pdf' });
                var downloadURL = window.URL.createObjectURL(response);
                var link = document.createElement('a');
                link.href = downloadURL;
                link.download = "Certificate.pdf";
                link.click();
            }
            // this.pdfFile = new Blob([response], {type: 'application/pdf'});
            // var downloadURL = window.URL.createObjectURL(response);
            // var link = document.createElement('a');
            // link.href = downloadURL;
            // link.download = "Certificate.pdf";
            // link.click();
        });
    }
    startAudio(voicePath) {
        if (this.player && this.isPlaying == true) {
            this.player.stop();
            this.isPlaying = false;
        }
        else {
            this.player = new howler__WEBPACK_IMPORTED_MODULE_9__["Howl"]({
                html5: true,
                src: voicePath,
                onplay: () => {
                    this.isPlaying = true;
                },
                onend: () => {
                    this.isPlaying = false;
                },
            });
            this.player.play();
        }
    }
    ionViewDidLeave() {
        if (this.player) {
            this.player.stop();
        }
    }
    ngOnDestroy() {
        if (this.isPlaying) {
            this.player.stop();
        }
        this.subs.forEach((element) => {
            element.unsubscribe();
        });
    }
};
CourseDetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_6__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_8__["TestService"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] }
];
CourseDetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-course-details',
        template: _raw_loader_course_details_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_course_details_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CourseDetailsPage);



/***/ })

}]);
//# sourceMappingURL=course-details-course-details-module.js.map