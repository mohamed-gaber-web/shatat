(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["all-courses-all-courses-module"],{

/***/ "3p7e":
/*!*********************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.page.ts ***!
  \*********************************************************/
/*! exports provided: AllCoursesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCoursesPage", function() { return AllCoursesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_all_courses_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./all-courses.page.html */ "B+qD");
/* harmony import */ var _all_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-courses.page.scss */ "vPY/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/courses.service */ "QOFr");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/test.service */ "V1Po");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/services/app.service */ "BbT4");












let AllCoursesPage = class AllCoursesPage {
    constructor(route, navCtrl, courseService, platform, testService, appService) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.courseService = courseService;
        this.platform = platform;
        this.testService = testService;
        this.appService = appService;
        this.sub = [];
        this.courses = [];
        this.isLoading = false;
        this.player = null;
        this.isPlaying = false;
    }
    ngOnInit() {
        this.getLang = localStorage.getItem('languageId');
        this.appService.getVidoes('Courses', this.getLang).subscribe((response) => {
            var _a, _b;
            this.courseAudio = (_b = (_a = response['result']) === null || _a === void 0 ? void 0 : _a.genericAttributeMediaTranslations[0]) === null || _b === void 0 ? void 0 : _b.mediaPath;
        });
        this.offset = 0;
        this.getCourses();
        this.testService.checkUserTest()
            .subscribe(response => {
            console.log(response);
            if (response['isActive'] === true) {
                this.route.navigate(['/exercise/test-course',
                    { courseId: response['courseId'], testOffset: response['testApi'].offset, activeCourse: response['isActive'] }]);
            }
            else {
                return;
            }
        });
    }
    getCourse(id) {
        this.navCtrl.navigateBack(`/courses/tabs/${id}`);
    }
    getCourses() {
        this.isLoading = true;
        this.sub.push(this.courseService
            .getAllCourses('', this.offset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((response) => {
            Object.entries(response);
            this.isLoading = false;
            this.totalLength = response['length'];
            return response['result'];
        }))
            .subscribe((res) => {
            if (this.courses.length == 0) {
                res.forEach((element) => {
                    var _a;
                    if (element.imagePath) {
                        element.imagePath = `${element.imagePath}`;
                    }
                    if ((_a = element.courseTranslations[0]) === null || _a === void 0 ? void 0 : _a.introVoicePath) {
                        element.courseTranslations[0].introVoicePath = `${element.courseTranslations[0].introVoicePath}`;
                    }
                    element.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                    element.audioElement.status = false;
                });
                this.courses = res;
            }
            else {
                res.forEach((element) => {
                    if (element.imagePath) {
                        element.imagePath = `${element.imagePath}`;
                    }
                    if (element.courseTranslations[0].introVoicePath) {
                        element.courseTranslations[0].introVoicePath = `${element.courseTranslations[0].introVoicePath}`;
                    }
                    element.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                    element.audioElement.status = false;
                    this.courses.push(element);
                });
            }
            this.offset++;
        }));
    }
    loadData(event) {
        if (this.courses.length < this.totalLength) {
            setTimeout(() => {
                this.getCourses();
                console.log('Done');
                event.target.complete();
                // App logic to determine if all data is loaded
                // and disable the infinite scroll
                if (this.courses.length == 1000) {
                    event.target.disabled = true;
                }
            }, 500);
        }
        else {
            event.target.disabled = true;
        }
    }
    playIntroHTML(course) {
        console.log(this.courses);
        // this.nativeAudio.preloadSimple(`intro${course.id}`, `${course.courseTranslations[0].introVoicePath}`).then(onSuccess, onError);
        // this.nativeAudio.play(`intro${course.id}`).then(onSuccess, onError);
        if (course.audioElement.status == false) {
            //stop all
            this.courses.forEach((element, index) => {
                if (element.audioElement.audio != null) {
                    element.audioElement.audio.pause();
                    element.audioElement.status = false;
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
                console.log(this.courses);
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
    startAudio(voicePath) {
        if (this.player && this.isPlaying == true) {
            this.player.stop();
            this.isPlaying = false;
        }
        else {
            this.player = new howler__WEBPACK_IMPORTED_MODULE_10__["Howl"]({
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
        this.courses.forEach((element) => {
            if (element.audioElement) {
                if (element.audioElement.status == true) {
                    element.audioElement.audio.pause();
                    element.audioElement.status = false;
                }
            }
        });
    }
};
AllCoursesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: src_app_shared_services_courses_service__WEBPACK_IMPORTED_MODULE_7__["CourseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: src_app_shared_services_test_service__WEBPACK_IMPORTED_MODULE_9__["TestService"] },
    { type: src_app_shared_services_app_service__WEBPACK_IMPORTED_MODULE_11__["AppService"] }
];
AllCoursesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-all-courses',
        template: _raw_loader_all_courses_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_all_courses_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AllCoursesPage);

function onSuccess() {
    throw new Error('Function not implemented.');
}
function onError() {
    alert('error');
}


/***/ }),

/***/ "B+qD":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/courses/all-courses/all-courses.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-toolbar class=\"ios-toolbar\">\r\n  <ion-title>\r\n    All Courses\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n<ion-grid class=\"img-course-intro\">\r\n  <ion-row>\r\n    <ion-col>\r\n      <div class=\"img-intro\">\r\n        <ion-img loading=\"lazy\" src=\"../../../assets/images/shutterstock_360072566.jpg\"></ion-img>\r\n      </div>\r\n      <div class=\"icon-sound\" (click)=\"startAudio(courseAudio)\">\r\n        <div class=\"img-volume\">\r\n          <ion-img\r\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-3\"  src=\"../../../assets/icon/Vector.png\">\r\n        </ion-img>\r\n        </div>\r\n      </div>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n\r\n  <ion-grid>\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col *ngFor=\"let course of courses\" size-sm=\"12\" size-md=\"12\" size-lg=\"4\" size-xl=\"3\">\r\n        <ion-card  class=\"course course-desktop\">\r\n          <ion-img class=\"img-all-course\" loading=\"lazy\" src=\"{{course.imagePath}}\"></ion-img>\r\n          <h3 class=\"padding-top\"  color=\"primary\"> {{course.courseTranslations[0]?.title}} </h3>\r\n          <ion-item>\r\n              <div *ngIf=\"course.courseTranslations[0]?.introVoicePath\">\r\n                <div class=\"icon-sound-course\">\r\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!course.audioElement.status? 'play' : 'stop'\" (click)=\"playIntroHTML(course)\">\r\n                    </ion-icon>\r\n                  </div>\r\n              </div>\r\n\r\n            <ion-button (click)=\"getCourse(course.id)\"  fill=\"outline\" slot=\"end\">\r\n              <ion-icon name=\"eye\"></ion-icon>\r\n              View\r\n            </ion-button>\r\n          </ion-item>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"Loading more data...\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n");

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

/***/ "fzkE":
/*!*******************************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AllCoursesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCoursesPageRoutingModule", function() { return AllCoursesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _all_courses_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-courses.page */ "3p7e");




const routes = [
    {
        path: '',
        component: _all_courses_page__WEBPACK_IMPORTED_MODULE_3__["AllCoursesPage"]
    }
];
let AllCoursesPageRoutingModule = class AllCoursesPageRoutingModule {
};
AllCoursesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AllCoursesPageRoutingModule);



/***/ }),

/***/ "u2BO":
/*!***********************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.module.ts ***!
  \***********************************************************/
/*! exports provided: AllCoursesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCoursesPageModule", function() { return AllCoursesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _all_courses_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./all-courses-routing.module */ "fzkE");
/* harmony import */ var _all_courses_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./all-courses.page */ "3p7e");







let AllCoursesPageModule = class AllCoursesPageModule {
};
AllCoursesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _all_courses_routing_module__WEBPACK_IMPORTED_MODULE_5__["AllCoursesPageRoutingModule"]
        ],
        declarations: [_all_courses_page__WEBPACK_IMPORTED_MODULE_6__["AllCoursesPage"]],
    })
], AllCoursesPageModule);



/***/ }),

/***/ "vPY/":
/*!***********************************************************!*\
  !*** ./src/app/courses/all-courses/all-courses.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-volume, .icon-sound .img-volume {\n  text-align: center;\n  margin: auto;\n  width: 30px;\n  height: 30px;\n}\n\n.img-course-intro {\n  margin-bottom: 30px;\n}\n\n.img-course-intro ion-row {\n  justify-content: center;\n}\n\n.icon-sound {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  margin: auto;\n  inset: 0;\n}\n\n.course .icon-sound-course {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 53px;\n  height: 53px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  cursor: pointer;\n}\n\n.course .icon-sound-course ion-icon {\n  font-size: 35px;\n  color: var(--ion-color-second-app);\n}\n\n.course ion-img {\n  width: 100%;\n  height: auto;\n  margin-bottom: 20px;\n}\n\n.course h3 {\n  font-size: 18px;\n  font-weight: 500;\n  text-transform: capitalize;\n  color: var(--ion-color-second-app);\n}\n\n.course ion-button {\n  --color: #fff;\n  font-size: 14px;\n  margin: 0 0 15px 0;\n  max-width: 50%;\n  min-width: 150px;\n}\n\n.course ion-button ion-icon {\n  --color: #A7F781!important;\n  font-size: 18px;\n  padding-right: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhbGwtY291cnNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUdBO0VBQ0UsbUJBQUE7QUFBRjs7QUFDRTtFQUNFLHVCQUFBO0FBQ0o7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUFGOztBQVVFO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFSSjs7QUFVSTtFQUNFLGVBQUE7RUFDQSxrQ0FBQTtBQVJOOztBQWFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQVhKOztBQWNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQ0FBQTtBQVpKOztBQWVFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQWJKOztBQWdCSTtFQUNFLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBZE4iLCJmaWxlIjoiYWxsLWNvdXJzZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dC1pY29uLXZvbHVtZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1nLWNvdXJzZS1pbnRybyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBpb24tcm93IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmljb24tc291bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBN0Y3ODE7XHJcbiAgYm9yZGVyOiAzcHggZG90dGVkICNmZmY7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICBpbnNldDogMDtcclxuXHJcbiAgLmltZy12b2x1bWUge1xyXG4gICAgQGV4dGVuZCAuZXh0LWljb24tdm9sdW1lO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5jb3Vyc2Uge1xyXG5cclxuICAuaWNvbi1zb3VuZC1jb3Vyc2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0E3Rjc4MTtcclxuICAgIGJvcmRlcjogM3B4IGRvdHRlZCAjZmZmO1xyXG4gICAgd2lkdGg6IDUzcHg7XHJcbiAgICBoZWlnaHQ6IDUzcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAzNXB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICB9XHJcblxyXG4gIGlvbi1idXR0b24ge1xyXG4gICAgLS1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMCAwIDE1cHggMDtcclxuICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgbWluLXdpZHRoOiAxNTBweDtcclxuXHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAtLWNvbG9yOiAjQTdGNzgxIWltcG9ydGFudDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA3cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=all-courses-all-courses-module.js.map