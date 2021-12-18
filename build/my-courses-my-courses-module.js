(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-courses-my-courses-module"],{

/***/ "5Gtn":
/*!*******************************************************!*\
  !*** ./src/app/courses/my-courses/my-courses.page.ts ***!
  \*******************************************************/
/*! exports provided: MyCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesPage", function() { return MyCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_my_courses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./my-courses.page.html */ "Im0f");
/* harmony import */ var _my_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-courses.page.scss */ "Ts68");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var _ionic_native_file__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file */ "hMac");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "wMzM");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/app.service */ "BbT4");















let MyCoursesPage = class MyCoursesPage {
    constructor(route, courseService, testService, fileOpener, platform, loadingController, appService) {
        this.route = route;
        this.courseService = courseService;
        this.testService = testService;
        this.fileOpener = fileOpener;
        this.platform = platform;
        this.loadingController = loadingController;
        this.appService = appService;
        this.offset = 0;
        this.sub = [];
        this.myCourses = [];
        this.isLoading = false;
        this.player = null;
        this.isPlaying = false;
        this.getLang = localStorage.getItem('languageId');
    }
    ngOnInit() {
        this.appService.getVidoes('Courses', this.getLang).subscribe((response) => {
            var _a, _b;
            this.courseAudio = (_b = (_a = response['result']) === null || _a === void 0 ? void 0 : _a.genericAttributeMediaTranslations[0]) === null || _b === void 0 ? void 0 : _b.mediaPath;
        });
        this.getUserCourses();
    }
    getUserCourses() {
        this.isLoading = true;
        this.sub.push(this.courseService
            .getUserCourses('', this.offset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((response) => {
            Object.entries(response);
            this.isLoading = false;
            this.totalLength = response['length'];
            return response['result'];
        }))
            .subscribe((res) => {
            if (this.myCourses.length == 0) {
                res.forEach((element) => {
                    var _a;
                    if (element.course.imagePath) {
                        element.course.imagePath = `${element.course.imagePath}`;
                    }
                    if ((_a = element.course.courseTranslations[0]) === null || _a === void 0 ? void 0 : _a.introVoicePath) {
                        element.course.courseTranslations[0].introVoicePath = `${element.course.courseTranslations[0].introVoicePath}`;
                    }
                    element.course.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__["AudioElement"]();
                    element.course.audioElement.status = false;
                });
                this.myCourses = res;
            }
            else {
                res.forEach((element) => {
                    var _a;
                    if (element.course.imagePath) {
                        element.course.imagePath = `${element.course.imagePath}`;
                    }
                    if ((_a = element.course.courseTranslations[0]) === null || _a === void 0 ? void 0 : _a.introVoicePath) {
                        element.course.courseTranslations[0].introVoicePath = `${element.course.courseTranslations[0].introVoicePath}`;
                    }
                    element.course.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__["AudioElement"]();
                    element.course.audioElement.status = false;
                    this.myCourses.push(element);
                });
            }
            this.offset++;
        }));
    }
    loadData(event) {
        if (this.myCourses.length < this.totalLength) {
            setTimeout(() => {
                this.getUserCourses();
                event.target.complete();
                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                if (this.myCourses.length == 1000) {
                    event.target.disabled = true;
                }
            }, 500);
        }
        else {
            event.target.disabled = true;
        }
    }
    playIntroHTML(course) {
        // this.nativeAudio.preloadSimple(`intro${course.id}`, `${course.courseTranslations[0].introVoicePath}`).then(onSuccess, onError);
        // this.nativeAudio.play(`intro${course.id}`).then(onSuccess, onError);
        if (course.audioElement.status == false) {
            //stop all
            this.myCourses.forEach((element, index) => {
                if (element.course.audioElement.audio != null) {
                    element.course.audioElement.audio.pause();
                    element.course.audioElement.status = false;
                    //TODO destroy
                }
                else {
                    //TODO destroy
                }
            });
            if (course.audioElement.audio && course.audioElement.audio.paused) {
                course.audioElement.audio.play();
            }
            else {
                var audio = new Audio(`${course.courseTranslations[0].introVoicePath}`);
                course.audioElement.audio = audio;
                course.audioElement.audio.load();
                course.audioElement.audio.play();
            }
            course.audioElement.status = true;
        }
        else {
            //stop the the live one
            if (course.audioElement.audio != null) {
                course.audioElement.audio.pause();
                course.audioElement.status = false;
                //TODO destroy
            }
            else {
                //TODO destroy
            }
        }
    }
    // ** go to choose course material
    goToChooseCourseMaterial(courseId, userId) {
        this.route.navigate(['courses/tabs/choose-course-material', { courseId, userId }]);
    }
    downloadCertificate(courseId) {
        this.isLoading = true;
        this.testService.getCertificate(courseId)
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
                _ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].writeFile(_ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].externalRootDirectory + "/Download", courseId + "Certificate.pdf", new Blob([response]), {
                    replace: true,
                });
                this.fileOpener.open(_ionic_native_file__WEBPACK_IMPORTED_MODULE_10__["File"].externalRootDirectory + "/Download/" + courseId + "Certificate.pdf", 'application/pdf')
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
    // ** Create Refresh whrn scroll down
    doRefresh(event) {
        this.offset = 0;
        this.myCourses = [];
        console.log('Begin async operation');
        this.getUserCourses();
        event.target.complete();
        // setTimeout(() => {
        //   console.log('Async operation has ended');
        //   event.target.complete();
        // }, 2000);
    }
    startAudio(voicePath) {
        if (this.player && this.isPlaying == true) {
            this.player.stop();
            this.isPlaying = false;
        }
        else {
            this.player = new howler__WEBPACK_IMPORTED_MODULE_12__["Howl"]({
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
    ngOnDestroy() {
        this.sub.forEach(e => {
            e.unsubscribe();
        });
    }
    ionViewDidLeave() {
        if (this.player) {
            this.player.stop();
        }
        this.myCourses.forEach((element) => {
            if (element.course.audioElement) {
                if (element.course.audioElement.status == true) {
                    element.course.audioElement.audio.pause();
                    element.course.audioElement.status = false;
                }
            }
        });
    }
};
MyCoursesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_8__["CourseService"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__["TestService"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__["FileOpener"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_13__["AppService"] }
];
MyCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-my-courses',
        template: _raw_loader_my_courses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_my_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MyCoursesPage);



/***/ }),

/***/ "Im0f":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/my-courses/my-courses.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar class=\"ios-toolbar\">\r\n  <ion-title>\r\n    My Courses\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\r\n\r\n  <ion-grid class=\"img-course-intro\">\r\n    <ion-row>\r\n      <ion-col>\r\n        <div class=\"img-intro\">\r\n          <ion-img loading=\"lazy\" src=\"../../../assets/images/shutterstock_360072566.jpg\"></ion-img>\r\n        </div>\r\n        <div class=\"icon-sound\" (click)=\"startAudio(courseAudio)\">\r\n          <div class=\"img-volume\">\r\n            <ion-img\r\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\">\r\n          </ion-img>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-text-center\">\r\n\r\n\r\n        <!-- IOn Ref -->\r\n        <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\r\n          <ion-refresher-content\r\n            pullingIcon=\"chevron-down-circle-outline\"\r\n            pullingText=\"Pull to refresh\"\r\n            refreshingSpinner=\"circles\"\r\n            refreshingText=\"Refreshing...\">\r\n          </ion-refresher-content>\r\n        </ion-refresher>\r\n        <!-- Ion Ref -->\r\n\r\n        <ion-col *ngFor=\"let course of myCourses\" size-sm=\"12\" size-md=\"12\" size-lg=\"4\" size-xl=\"3\">\r\n\r\n        <ion-card class=\"course\">\r\n          <ion-img class=\"img-all-course\" loading=\"lazy\"  src=\"{{course.course.imagePath}}\"></ion-img>\r\n          <h3 class=\"ion-padding-top\"  color=\"primary\">\r\n            {{course.course.courseTranslations[0]?.title}}\r\n          </h3>\r\n          <ion-item>\r\n\r\n            <div slot=\"end\" *ngIf=\"course.course.courseTranslations[0]?.introVoicePath\">\r\n              <div class=\"icon-sound-course\">\r\n                  <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-3\" [name]=\"!course.course.audioElement.status? 'play' : 'stop'\" (click)=\"playIntroHTML(course.course)\">\r\n                  </ion-icon>\r\n                </div>\r\n            </div>\r\n            <div class=\"start\" *ngIf=\"course.userCourse.status == 5\">\r\n              <ion-button slot=\"end\"\r\n              (click)=\"goToChooseCourseMaterial(course.course.id, course.userCourse.courseId)\">\r\n                <ion-icon name=\"eye-outline\"></ion-icon>\r\n                Start\r\n              </ion-button>\r\n            </div>\r\n            <div class=\"start\" class=\"applied\" *ngIf=\"course.userCourse.status == 4\">\r\n              <ion-button fill=\"outline\">\r\n                <ion-icon name=\"time-outline\"></ion-icon>\r\n                Pending\r\n              </ion-button>\r\n            </div>\r\n            <div *ngIf=\"course.userCourse.status == 1\">\r\n                <ion-text>Passed</ion-text>\r\n            </div>\r\n\r\n            <div class=\"certi\" *ngIf=\"course.userCourse.status == 1\">\r\n              <ion-button (click)=\"downloadCertificate(course.course.id)\"> Certificate\r\n                <ion-icon name=\"download-outline\"></ion-icon>\r\n                <ion-spinner *ngIf='isLoading' name=\"circles\"></ion-spinner> </ion-button>\r\n            </div>\r\n\r\n\r\n            <div class=\"start\" class=\"expired\" *ngIf=\"course.userCourse.status == 2\">\r\n              <ion-button fill=\"outline\">\r\n                <ion-icon name=\"lock-closed-outline\"></ion-icon> Expired</ion-button>\r\n            </div>\r\n            <div class=\"start\" class=\"expired\" *ngIf=\"course.userCourse.status == 3\">\r\n              <ion-button fill=\"outline\" >\r\n                <ion-icon name=\"lock-closed-outline\"></ion-icon> Failed</ion-button>\r\n            </div>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n      </ion-col>\r\n\r\n\r\n\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Ts68":
/*!*********************************************************!*\
  !*** ./src/app/courses/my-courses/my-courses.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .icon-sound .img-volume {\n  text-align: center;\n  margin: auto;\n  width: 30px;\n  height: 30px;\n}\n\n.img-course-intro {\n  margin-bottom: 30px;\n}\n\n.img-course-intro ion-row {\n  justify-content: center;\n}\n\n.icon-sound {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  margin: auto;\n  inset: 0;\n}\n\n.course ion-img {\n  width: 100%;\n  height: auto;\n}\n\n.course .icon-sound-course {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 53px;\n  height: 53px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n}\n\n.course .icon-sound-course ion-icon {\n  font-size: 33px;\n  color: #003182;\n}\n\n.course h3 {\n  font-size: 18px;\n  font-weight: 600;\n  text-transform: capitalize;\n  color: var(--ion-color-second-app);\n}\n\n.course ion-button {\n  --color: #fff;\n  font-size: 13px !important;\n  margin: 10px 0 10px 4px;\n  font-weight: 400 !important;\n  max-width: 100%;\n  min-width: 100px;\n}\n\n.course ion-button ion-icon {\n  --color: #fff;\n  font-size: 20px;\n  padding-right: 7px;\n}\n\nion-text {\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxteS1jb3Vyc2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsdUJBQUE7QUFBSjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBREo7O0FBVUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVdFO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtBQVRKOztBQVdJO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFUTjs7QUFjRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esa0NBQUE7QUFaSjs7QUFlRTtFQUNFLGFBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFiSjs7QUFlSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFiTjs7QUFtQkE7RUFDRSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtBQWhCRiIsImZpbGUiOiJteS1jb3Vyc2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHQtaWNvbi12bHVtZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1nLWNvdXJzZS1pbnRybyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgaW9uLXJvdyB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbiAgLmljb24tc291bmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E3Rjc4MTtcclxuICAgIGJvcmRlcjogM3B4IGRvdHRlZCAjZmZmO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaW5zZXQ6IDA7XHJcblxyXG4gICAgLmltZy12b2x1bWUge1xyXG4gICAgICBAZXh0ZW5kIC5leHQtaWNvbi12bHVtZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbi5jb3Vyc2Uge1xyXG5cclxuICBpb24taW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLmljb24tc291bmQtY291cnNlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNBN0Y3ODE7XHJcbiAgICBib3JkZXI6IDNweCBkb3R0ZWQgI2ZmZjtcclxuICAgIHdpZHRoOiA1M3B4O1xyXG4gICAgaGVpZ2h0OiA1M3B4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgICAgY29sb3I6ICMwMDMxODI7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTNweCFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDEwcHggMCAxMHB4IDRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgbWluLXdpZHRoOiAxMDBweDtcclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIC0tY29sb3I6ICNmZmY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgcGFkZGluZy1yaWdodDogN3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbmlvbi10ZXh0IHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "dKzU":
/*!*****************************************************************!*\
  !*** ./src/app/courses/my-courses/my-courses-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: MyCoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesPageRoutingModule", function() { return MyCoursesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _my_courses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-courses.page */ "5Gtn");




const routes = [
    {
        path: '',
        component: _my_courses_page__WEBPACK_IMPORTED_MODULE_3__["MyCoursesPage"]
    }
];
let MyCoursesPageRoutingModule = class MyCoursesPageRoutingModule {
};
MyCoursesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyCoursesPageRoutingModule);



/***/ }),

/***/ "ircu":
/*!*********************************************************!*\
  !*** ./src/app/courses/my-courses/my-courses.module.ts ***!
  \*********************************************************/
/*! exports provided: MyCoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCoursesPageModule", function() { return MyCoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _my_courses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-courses-routing.module */ "dKzU");
/* harmony import */ var _my_courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-courses.page */ "5Gtn");







let MyCoursesPageModule = class MyCoursesPageModule {
};
MyCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _my_courses_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyCoursesPageRoutingModule"]
        ],
        declarations: [_my_courses_page__WEBPACK_IMPORTED_MODULE_6__["MyCoursesPage"]]
    })
], MyCoursesPageModule);



/***/ })

}]);
//# sourceMappingURL=my-courses-my-courses-module.js.map