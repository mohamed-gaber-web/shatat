(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choose-course-material-choose-course-material-module"],{

/***/ "DLKj":
/*!*********************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/choose-course-material.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ChooseCourseMaterialPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCourseMaterialPageModule", function() { return ChooseCourseMaterialPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _choose_course_material_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choose-course-material-routing.module */ "jVIS");
/* harmony import */ var _choose_course_material_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-course-material.page */ "TUjO");







let ChooseCourseMaterialPageModule = class ChooseCourseMaterialPageModule {
};
ChooseCourseMaterialPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choose_course_material_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseCourseMaterialPageRoutingModule"]
        ],
        declarations: [_choose_course_material_page__WEBPACK_IMPORTED_MODULE_6__["ChooseCourseMaterialPage"]]
    })
], ChooseCourseMaterialPageModule);



/***/ }),

/***/ "QOFr":
/*!****************************************************!*\
  !*** ./src/app/shared/services/courses.service.ts ***!
  \****************************************************/
/*! exports provided: CourseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseService", function() { return CourseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.constants */ "1Lwo");




let CourseService = class CourseService {
    constructor(http) {
        this.http = http;
        this.limit = 6;
        this.offset = 0;
        this.queryParams = `?Offset=${this.offset}&Limit=${this.limit}`;
    }
    // ** get all courses in the system
    getAllCourses(courseQuery, offset) {
        if (offset != null) {
            this.queryParams = `?Offset=${offset}&Limit=${this.limit}`;
        }
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getAllCoursesAPI"]}/${courseQuery}` + this.queryParams);
    }
    // ** get the subscribed courses of the user
    getUserCourses(courseQuery, offset) {
        if (offset != null) {
            this.queryParams = `?Offset=${offset}&Limit=${this.limit}`;
        }
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getUsersCoursesAPI"]}/${courseQuery}` + this.queryParams);
    }
    // ** get the course details
    getCoursesDetails(id) {
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getCourseDetails"]}?id=${id}`);
    }
    // ** get user course details
    getUserCoursesDetails(courseId) {
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["getUserCourseDetails"]}?courseId=${courseId}`);
    }
    // ** create course apply
    createCourseApply(from) {
        return this.http.post(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["createApplyCourse"]}`, from);
    }
    // ** get course material
    getCourseMaterial(courseId, offset, limit) {
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["courseMaterials"]}?Offset=${offset}&Limit=${limit}&courseId=${courseId}`);
    }
};
CourseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CourseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    })
], CourseService);



/***/ }),

/***/ "TUjO":
/*!*******************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/choose-course-material.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ChooseCourseMaterialPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCourseMaterialPage", function() { return ChooseCourseMaterialPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choose_course_material_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choose-course-material.page.html */ "w9uU");
/* harmony import */ var _choose_course_material_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choose-course-material.page.scss */ "dikw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");







let ChooseCourseMaterialPage = class ChooseCourseMaterialPage {
    constructor(courseService, route, router, alertController) {
        this.courseService = courseService;
        this.route = route;
        this.router = router;
        this.alertController = alertController;
        this.subs = [];
        this.isLoading = false;
    }
    ngOnInit() {
        this.isLoading = true;
        this.courseId = JSON.parse(this.route.snapshot.paramMap.get('courseId'));
        this.redOffset = this.route.snapshot.paramMap.get('testOffset');
        this.subs.push(this.courseService.getUserCoursesDetails(this.courseId)
            .subscribe(response => {
            this.isLoading = false;
            this.userCourseDetails = response['result'].userCourse;
            let startDate = new Date(this.userCourseDetails['startDate']);
            let endDate = new Date(this.userCourseDetails['endDate']);
            let date = endDate.getTime() - startDate.getTime();
            this.validCourse = date / (1000 * 3600 * 24);
        }), this.courseService.getCoursesDetails(this.courseId)
            .subscribe(response => {
            this.isLoading = false;
            this.CourseDetails = response['result'];
            console.log('course details', this.CourseDetails);
        }));
    }
    // ** Send course id to exercise page
    sendIdToExercisePage() {
        this.router.navigate(['/exercise', { courseId: this.courseId }]);
    }
    // ** Send course id to final test page_event
    sendIdToFinalTestPage() {
        this.presentAlertConfirm();
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: 'sure you want start the test?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'start',
                        handler: () => {
                            this.router.navigate(['/exercise/test-course', { courseId: this.courseId }]);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnDestroy() {
        this.subs.forEach(element => element.unsubscribe());
    }
    startAudio(x) { }
};
ChooseCourseMaterialPage.ctorParameters = () => [
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ChooseCourseMaterialPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choose-course-material',
        template: _raw_loader_choose_course_material_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choose_course_material_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChooseCourseMaterialPage);



/***/ }),

/***/ "dikw":
/*!*********************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/choose-course-material.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2#title {\n  font-weight: 600;\n  font-size: 16px;\n  text-transform: capitalize;\n  text-align: center !important;\n  margin: 30px auto;\n  color: #003182;\n}\n\n.course-date ion-item {\n  margin: 0 !important;\n}\n\nion-item {\n  margin: 10px 0 !important;\n  padding: 0 !important;\n}\n\n.icon-valid {\n  width: 30px;\n  height: 30px;\n  line-height: 37px;\n  background-color: var(--ion-color-second-app);\n  text-align: center;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.icon-valid ion-icon {\n  color: #A7F781;\n  font-size: 18px;\n}\n\nion-label {\n  font-size: 16px;\n  font-weight: 500;\n  --color: var(--ion-color-second-app);\n}\n\n.btn {\n  margin: 20px 0;\n}\n\n.btn ion-button {\n  margin: 10px 0;\n}\n\nion-spinner {\n  margin: auto;\n  text-align: center;\n  width: 50%;\n  height: 100%;\n  display: flex;\n}\n\nvideo {\n  padding: 0 !important;\n  margin-top: 10px;\n}\n\n.desc {\n  background-color: #fff;\n  padding: 10px 0 10px 10px;\n  border: 2px dotted #003182;\n}\n\n.sound-inro {\n  margin: 10px 0;\n  display: flex;\n  justify-content: space-evenly;\n  position: relative;\n}\n\n.sound-inro .img-volume ion-img {\n  max-width: 45px;\n  width: 45px;\n  position: absolute;\n  top: 56px;\n  right: 60px;\n}\n\n.sound-inro img {\n  max-width: 80px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaG9vc2UtY291cnNlLW1hdGVyaWFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQURGOztBQUlBO0VBRUUsY0FBQTtBQUZGOztBQUlFO0VBQ0UsY0FBQTtBQUZKOztBQU1BO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBT0E7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtBQUpGOztBQU9JO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBTE47O0FBU0U7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQVBKIiwiZmlsZSI6ImNob29zZS1jb3Vyc2UtbWF0ZXJpYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIjdGl0bGUge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAzMHB4IGF1dG87XHJcbiAgY29sb3I6ICMwMDMxODI7XHJcbn1cclxuXHJcbi5jb3Vyc2UtZGF0ZSBpb24taXRlbSB7XHJcbiAgbWFyZ2luOiAwIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbjogMTBweCAwIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pY29uLXZhbGlkIHtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM3cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogI0E3Rjc4MTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG59XHJcblxyXG5pb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxufVxyXG5cclxuLmJ0biB7XHJcblxyXG4gIG1hcmdpbjogMjBweCAwO1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxufVxyXG5cclxuaW9uLXNwaW5uZXJ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNTAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG52aWRlbyB7XHJcbiAgcGFkZGluZzogMCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbi5kZXNjIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggZG90dGVkICMwMDMxODI7XHJcbn1cclxuXHJcbi5zb3VuZC1pbnJvIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmltZy12b2x1bWUge1xyXG4gICAgaW9uLWltZyB7XHJcbiAgICAgIG1heC13aWR0aDogNDVweDtcclxuICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiA1NnB4O1xyXG4gICAgICByaWdodDogNjBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6ODBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "jVIS":
/*!*****************************************************************************************!*\
  !*** ./src/app/courses/choose-course-material/choose-course-material-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ChooseCourseMaterialPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseCourseMaterialPageRoutingModule", function() { return ChooseCourseMaterialPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _choose_course_material_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choose-course-material.page */ "TUjO");




const routes = [
    {
        path: '',
        component: _choose_course_material_page__WEBPACK_IMPORTED_MODULE_3__["ChooseCourseMaterialPage"]
    }
];
let ChooseCourseMaterialPageRoutingModule = class ChooseCourseMaterialPageRoutingModule {
};
ChooseCourseMaterialPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseCourseMaterialPageRoutingModule);



/***/ }),

/***/ "w9uU":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/choose-course-material/choose-course-material.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n\r\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\r\n\r\n  <ion-grid *ngIf=\"CourseDetails\">\r\n    <ion-row>\r\n      <h2 id=\"title\" class=\"font-title-desktop ion-text-center\"> {{ CourseDetails.courseTranslations[0].title }} </h2>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid *ngIf=\"CourseDetails\">\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-md=\"3\">\r\n        <div *ngIf=\"CourseDetails.courseTranslations[0]?.introVoicePath\" class=\"sound-inro\">\r\n          <div class=\"img-person\">\r\n            <img class=\"intro-logo\" src=\"../../assets/images/char-person.png\" />\r\n          </div>\r\n        <div class=\"icon-sound\">\r\n          <div class=\"img-volume\">\r\n            <ion-img\r\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-3\"\r\n            (click)=\"startAudio(CourseDetails.courseTranslations[0]?.introVoicePath)\" src=\"../../../assets/icon/Vector.png\">\r\n          </ion-img>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid *ngIf=\"CourseDetails\">\r\n    <ion-row class=\"ion-justify-content-center ion-padding-top\">\r\n      <ion-col size=\"12\" size-md=\"8\" size-lg=\"5\">\r\n        <ion-img loading=\"lazy\" [src]=\"CourseDetails.imagePath\"></ion-img>\r\n      </ion-col>\r\n\r\n      <ion-col\r\n        *ngIf=\"CourseDetails.courseTranslations[0].description !== null \"\r\n        class=\"ion-margin-top\" size=\"12\" size-md=\"8\" size-lg=\"7\">\r\n        <div class=\"desc\">\r\n          <ion-text color=\"primary\">\r\n            {{ CourseDetails.courseTranslations[0].description }}\r\n          </ion-text>\r\n        </div>\r\n        <ion-grid class=\"hide-desktop\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-list class=\"course-date\">\r\n                <ion-item class=\"time-valid\" lines=\"none\">\r\n                  <div class=\"icon-valid\">\r\n                    <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\r\n                  </div>\r\n                  <ion-label *ngIf=\"userCourseDetails\" color=\"primary\"> <strong> From: </strong>\r\n                    {{ userCourseDetails['startDate'] | date }}\r\n                  </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"time-valid\" lines=\"none\">\r\n                  <div class=\"icon-valid\">\r\n                    <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\r\n                  </div>\r\n                  <ion-label *ngIf=\"userCourseDetails\" color=\"primary\"> <strong> To: </strong>\r\n                    {{ userCourseDetails['endDate'] | date }}\r\n                  </ion-label>\r\n                </ion-item>\r\n\r\n                <ion-item class=\"time-valid\" lines=\"none\">\r\n                  <div class=\"icon-valid\">\r\n                    <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\r\n                  </div>\r\n                  <ion-label color=\"primary\"> <strong> Valid For: </strong>\r\n                    {{ validCourse }} Day\r\n                  </ion-label>\r\n                </ion-item>\r\n              </ion-list>\r\n\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-col>\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid class=\"hide-mobile\">\r\n    <ion-row>\r\n      <ion-col >\r\n        <ion-list class=\"course-date\">\r\n          <ion-item class=\"time-valid\" lines=\"none\">\r\n            <div class=\"icon-valid\">\r\n              <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\r\n            </div>\r\n            <ion-label *ngIf=\"userCourseDetails\" color=\"primary\"> <strong> From: </strong>\r\n              {{ userCourseDetails['startDate'] | date }}\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"time-valid\" lines=\"none\">\r\n            <div class=\"icon-valid\">\r\n              <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\r\n            </div>\r\n            <ion-label *ngIf=\"userCourseDetails\" color=\"primary\"> <strong> To: </strong>\r\n              {{ userCourseDetails['endDate'] | date }}\r\n            </ion-label>\r\n          </ion-item>\r\n\r\n          <ion-item class=\"time-valid\" lines=\"none\">\r\n            <div class=\"icon-valid\">\r\n              <ion-icon slot=\"start\" name=\"alarm-outline\"></ion-icon>\r\n            </div>\r\n            <ion-label color=\"primary\"> <strong> Valid For: </strong>\r\n              {{ validCourse }} Day\r\n            </ion-label>\r\n          </ion-item>\r\n        </ion-list>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"video-inro\" *ngIf=\"CourseDetails\">\r\n          <video *ngIf=\"CourseDetails?.courseTranslations[0]?.introVideoPath\" width=\"100%\" height=\"230\" controls>\r\n            <source [src]=\"CourseDetails.courseTranslations[0].introVideoPath\" type=\"video/mp4\">\r\n          </video>\r\n          <!-- <iframe width=\"100%\" height=\"230\" src=\"https://www.youtube.com/embed/LHxsRIxwTrQ\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe> -->\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size=\"12\" size-md=\"6\">\r\n        <div class=\"btn\" *ngIf=\"CourseDetails\">\r\n          <ion-button   [routerLink]=\"['/courses/course-material',\r\n          CourseDetails.courseTranslations[0].courseId]\" routerDirection=\"root\"> Material </ion-button>\r\n          <ion-button (click)=\"sendIdToExercisePage()\"> Exercise </ion-button>\r\n          <ion-button\r\n            (click)=\"sendIdToFinalTestPage()\">\r\n              <ion-icon name=\"lock-closed-outline\"></ion-icon>\r\n              Final Test\r\n          </ion-button>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=choose-course-material-choose-course-material-module.js.map