(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\SDEX WORK\Easy Learn\app-mobile\src\main.ts */"zUnb");


/***/ }),

/***/ "1Lwo":
/*!**********************************!*\
  !*** ./src/app/api.constants.ts ***!
  \**********************************/
/*! exports provided: baseUrl, imagesBaseUrl, loginAPI, registerAPI, recommendedBy, userChangePassword, updatedUserInfo, resetPassword, getLanguage, getAllCoursesAPI, getUsersCoursesAPI, getCourseDetails, createApplyCourse, getUserCourseDetails, courseMaterials, getExercise, checkAnswerSingleChoise, getMultiChoiceAnswer, checkAnswerMultipleChoice, checkAnswerPuzzleText, checkAnswerPuzzleImage, getTextType, getUserActiveTest, sendAnswerTest, finishedTest, getCertificate, faqPage, policyPage, getGeneratedVidoes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseUrl", function() { return baseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imagesBaseUrl", function() { return imagesBaseUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginAPI", function() { return loginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerAPI", function() { return registerAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recommendedBy", function() { return recommendedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userChangePassword", function() { return userChangePassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatedUserInfo", function() { return updatedUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguage", function() { return getLanguage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllCoursesAPI", function() { return getAllCoursesAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsersCoursesAPI", function() { return getUsersCoursesAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCourseDetails", function() { return getCourseDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createApplyCourse", function() { return createApplyCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCourseDetails", function() { return getUserCourseDetails; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "courseMaterials", function() { return courseMaterials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getExercise", function() { return getExercise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswerSingleChoise", function() { return checkAnswerSingleChoise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMultiChoiceAnswer", function() { return getMultiChoiceAnswer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswerMultipleChoice", function() { return checkAnswerMultipleChoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswerPuzzleText", function() { return checkAnswerPuzzleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkAnswerPuzzleImage", function() { return checkAnswerPuzzleImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTextType", function() { return getTextType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserActiveTest", function() { return getUserActiveTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAnswerTest", function() { return sendAnswerTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishedTest", function() { return finishedTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCertificate", function() { return getCertificate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faqPage", function() { return faqPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "policyPage", function() { return policyPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeneratedVidoes", function() { return getGeneratedVidoes; });
// const CORS = 'https://cors-anywhere.herokuapp.com/';
const baseUrl = `https://khrs-api.sdex.online`;
// export const baseUrl = `https://khrs-api-test.sdex.online/`; // test url
const imagesBaseUrl = 'https://khrs-admin.sdex.online';
//Account
const loginAPI = `${baseUrl}/api/Account/Login`;
const registerAPI = `${baseUrl}/api/Account/Register`;
const recommendedBy = `${baseUrl}/api/RecommendedBy/GetRecommendedBy`;
const userChangePassword = `${baseUrl}/api/Account/changePasswod`;
const updatedUserInfo = `${baseUrl}/api/Account/UpdateUser`;
const resetPassword = `${baseUrl}/api/Account/requestResetPassword`;
// get language
const getLanguage = `${baseUrl}/api/Language/GetLanguage`;
//Courses
const getAllCoursesAPI = `${baseUrl}/api/Course/GetCourses`;
const getUsersCoursesAPI = `${baseUrl}/api/UserCourse/GetAll`;
const getCourseDetails = `${baseUrl}/api/Course/Details`;
const createApplyCourse = `${baseUrl}/api/UserCourse/Create`;
const getUserCourseDetails = `${baseUrl}/api/UserCourse/Details`;
const courseMaterials = `${baseUrl}/api/Course/CourseMaterial`;
// exercise
const getExercise = `${baseUrl}/api/Exercise/Get`;
const checkAnswerSingleChoise = `${baseUrl}/api/Exercise/SingleChoice/Answer`;
const getMultiChoiceAnswer = `${baseUrl}/api/MultiChoiceAnswer/GetAll`;
const checkAnswerMultipleChoice = `${baseUrl}/api/Exercise/MultiChoice/Answer`;
const checkAnswerPuzzleText = `${baseUrl}/api/Exercise/PuzzleWithText/Answer`;
const checkAnswerPuzzleImage = `${baseUrl}/api/Exercise/PuzzleWithImage/Answer`;
// test
const getTextType = `${baseUrl}/api/Test/Get`;
const getUserActiveTest = `${baseUrl}/api/Test/GetUserActiveTest`;
const sendAnswerTest = `${baseUrl}/api/Test/Answer`;
const finishedTest = `${baseUrl}/api/Test/Finished`;
const getCertificate = `${baseUrl}/api/UserTest/GetCertificate`;
// pages
const faqPage = `${baseUrl}/api/Faq/GetFaq`;
const policyPage = `${baseUrl}/api/Policy/GetPolicy`;
const getGeneratedVidoes = `${baseUrl}/api/GenericAttributeMedia/GetByGenericAttributeTitle`;


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NlNA":
/*!***************************************!*\
  !*** ./src/app/shared/models/user.ts ***!
  \***************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
}


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");



let SharedModule = class SharedModule {
};
SharedModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        declarations: [],
        exports: [],
        providers: [],
    })
], SharedModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.service */ "qXBG");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/storage.service */ "fbMX");
/* harmony import */ var _translate_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./translate-config.service */ "ZjVV");









let AppComponent = class AppComponent {
    constructor(translateConfigService, storageService, toastController, authService, router) {
        this.translateConfigService = translateConfigService;
        this.storageService = storageService;
        this.toastController = toastController;
        this.authService = authService;
        this.router = router;
        this.updateAppLanguage();
    }
    updateAppLanguage() {
        if (!localStorage.getItem('lang')) {
            localStorage.setItem('lang', "en");
            this.systemLanguage = "en";
        }
        else {
            this.systemLanguage = localStorage.getItem('lang');
        }
        this.translateConfigService.setLanguage(this.systemLanguage);
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.storageService.clearStorage();
            var toast = yield this.toastController.create({
                message: 'You sign out successfully!',
                duration: 2000,
                color: 'success',
            });
            toast.present();
            this.router.navigateByUrl('/auth/sign-in');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _translate_config_service__WEBPACK_IMPORTED_MODULE_8__["TranslateConfigService"] },
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-menu side=\"start\" menuId=\"custom\" contentId=\"main\" class=\"my-custom-menu\">\r\n  <ion-header>\r\n    <ion-toolbar class=\"ios-toolbar\" color=\"primary\">\r\n      <ion-title style=\"text-align:center!important;\">Menu</ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  <ion-content>\r\n\r\n    <ion-list class=\"ion-margin-top\">\r\n\r\n      <ion-menu-toggle>\r\n        <ion-item [routerLink]=\"['/courses/tabs/all-courses']\">\r\n          <ion-icon color=\"primary\" slot=\"start\" name=\"grid-outline\"></ion-icon>\r\n        All courses\r\n      </ion-item>\r\n      <ion-item [routerLink]=\"['/courses/tabs/my-courses']\">\r\n        <ion-icon color=\"primary\" slot=\"start\" name=\"documents-outline\"></ion-icon>\r\n        My courses\r\n      </ion-item>\r\n      <ion-item [routerLink]=\"['/policy']\">\r\n        <ion-icon color=\"primary\" slot=\"start\" name=\"document-text-outline\"></ion-icon>\r\n        Privacy policy\r\n      </ion-item>\r\n      <ion-item [routerLink]=\"['/faq']\">\r\n        <ion-icon color=\"primary\" slot=\"start\" name=\"chatbox-ellipses-outline\"></ion-icon>\r\n        FAQS\r\n      </ion-item>\r\n      <ion-item *ngIf=\"authService.IsLoggedIn\" [routerLink]=\"['/auth/user-profile']\">\r\n        <ion-icon color=\"primary\" slot=\"start\" name=\"settings-outline\"></ion-icon>\r\n        Settings\r\n      </ion-item>\r\n      <ion-item *ngIf=\"authService.IsLoggedIn\" (click)=\"logout()\">\r\n        <ion-icon color=\"primary\" slot=\"start\" name=\"log-out-outline\"></ion-icon>\r\n        Logout\r\n      </ion-item>\r\n      </ion-menu-toggle>\r\n\r\n    </ion-list>\r\n\r\n    <ion-list class=\"ion-margin-top info\">\r\n      <ion-item>\r\n        <ion-icon name=\"map-outline\"></ion-icon>\r\n        <ion-text> Vibevej 20, 3tv\r\n          <br />2400 København NV </ion-text>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-icon name=\"phone-portrait-outline\"></ion-icon>\r\n        <ion-text> + 45 35 36 22 09 </ion-text>\r\n      </ion-item>\r\n      <ion-item><ion-icon name=\"mail-outline\"></ion-icon>\r\n       <a href=\"mailto:academy@khrs.dk\"> <ion-text> academy@khrs.dk </ion-text> </a>\r\n      </ion-item>\r\n\r\n    </ion-list>\r\n\r\n    <div class=\"social-media\">\r\n      <ul>\r\n        <li> <a target=\"_blank\" href=\"https://www.facebook.com/KHRS-Academy-105538624980761/\"> <ion-img src=\"../assets/icon/facebook.png\"></ion-img></a> </li>\r\n        <li> <a target=\"_blank\" href=\"https://www.linkedin.com/company/72077685/admin/\"> <ion-img src=\"../assets/icon/linkedin.png\"></ion-img></a> </li>\r\n        <li> <a target=\"_blank\" href=\"https://www.youtube.com/channel/UC6-wBAZmymU8F3zivjC9VVQ\">\r\n          <ion-img src=\"../assets/icon/youtube (1) 1.png\">\r\n          </ion-img></a>\r\n        </li>\r\n          <li> <a target=\"_blank\" href=\"https://www.instagram.com/khrsacademy/\">\r\n            <ion-img src=\"../assets/icon/instagram.png\">\r\n            </ion-img></a>\r\n          </li>\r\n      </ul>\r\n    </div>\r\n\r\n  </ion-content>\r\n</ion-menu>\r\n\r\n\r\n\r\n<ion-app>\r\n  <ion-router-outlet id=\"main\"></ion-router-outlet>\r\n</ion-app>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: LanguageLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageLoader", function() { return LanguageLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "omvX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _app_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-interceptor */ "yN/h");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ "k5Gf");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "wMzM");









// import { SwiperModule } from 'swiper/angular';





function LanguageLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            // SwiperModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useFactory: (LanguageLoader),
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]]
                }
            })
        ],
        // schemas: [CUSTOM_ELEMENTS_SCHEMA],
        providers: [
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_13__["FileOpener"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HTTP_INTERCEPTORS"], useClass: _app_interceptor__WEBPACK_IMPORTED_MODULE_10__["AppInterceptor"], multi: true },
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "ZjVV":
/*!*********************************************!*\
  !*** ./src/app/translate-config.service.ts ***!
  \*********************************************/
/*! exports provided: TranslateConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateConfigService", function() { return TranslateConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");



let TranslateConfigService = class TranslateConfigService {
    constructor(translate) {
        this.translate = translate;
    }
    getDefaultLanguage() {
        let language = this.translate.getBrowserLang();
        if (language === 'ar') {
            document.documentElement.dir = "rtl";
            this.translate.setDefaultLang(language);
            return language;
        }
        if (language === 'ur') {
            document.documentElement.dir = "rtl";
            this.translate.setDefaultLang(language);
            return language;
        }
        this.translate.setDefaultLang(language);
        return language;
    }
    setLanguage(setLang) {
        if (setLang === 'ar') {
            document.documentElement.dir = "rtl";
            this.translate.use(setLang);
        }
        else if (setLang === 'ur') {
            document.documentElement.dir = "rtl";
            this.translate.use(setLang);
        }
        else {
            document.documentElement.dir = "ltr";
            this.translate.use(setLang);
        }
    }
};
TranslateConfigService.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
TranslateConfigService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TranslateConfigService);



/***/ }),

/***/ "eRTK":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/storage.service */ "fbMX");




let AuthGuard = class AuthGuard {
    constructor(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    canActivate(route, state) {
        const tokenExists = this.storageService.existsStorage('access_token');
        const isExpired = this.isExpired(this.storageService.getExpiresIn());
        if (!tokenExists || isExpired) {
            this.router.navigate(['/auth/sign-in'], {
                queryParams: { returnUrl: state.url },
            });
            return false;
        }
        return true;
    }
    isExpired(expireIn) {
        return expireIn < Date.now() / 1000;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthGuard);



/***/ }),

/***/ "fbMX":
/*!****************************************************!*\
  !*** ./src/app/shared/services/storage.service.ts ***!
  \****************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jwt-decode */ "EjJx");
/* harmony import */ var src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/api.constants */ "1Lwo");
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/user */ "NlNA");





// import User from '../models/User';
let StorageService = class StorageService {
    constructor() {
        this.baseUrl = src_app_api_constants__WEBPACK_IMPORTED_MODULE_3__["baseUrl"];
        this.arabicFlag = {
            code: 'ar-EG',
            image: 'assets/images/flags/ar.svg',
            name: 'العربية',
        };
        this.englishFlag = {
            code: 'en-US',
            image: 'assets/images/flags/gb.svg',
            name: 'English',
        };
        this.danishFlag = {
            code: 'da-DA',
            image: 'assets/images/flags/da.svg',
            name: 'Danish',
        };
    }
    // Lang Direction rtl and ltr
    getLangDirection() {
        if (this.existsStorage('lang')) {
            if (JSON.parse(this.getStorage('lang')).name == 'العربية')
                return true;
        }
        // this.setLang({
        //   name: 'English',
        //   image: 'assets/images/flags/gb.svg',
        //   code: 'en-US',
        // });
        return false;
    }
    // create lang in local
    setLang(value) {
        return this.setStorage('lang', JSON.stringify(value)); // value // {name: 'العربية', image: flag}
    }
    // get lang
    getLang() {
        const langFound = this.existsStorage('lang');
        if (langFound) {
            return JSON.parse(this.getStorage('lang'));
        }
        else {
            this.setLang({
                name: 'English',
                image: 'assets/images/flags/gb.svg',
                code: 'en-US',
            });
            return JSON.parse(this.getStorage('lang'));
        }
    }
    getStorage(key) {
        return localStorage.getItem(key);
    }
    setStorage(key, value) {
        return localStorage.setItem(key, value);
    }
    removeStorage(key) {
        return localStorage.removeItem(key);
    }
    removeKeysStorage(keys) {
        keys.forEach((key) => this.removeStorage(key));
    }
    existsStorage(key) {
        return !!localStorage.getItem(key); // return true or false
    }
    clearStorage() {
        return localStorage.clear();
    }
    setAccessToken(value) {
        var tokenInfo = this.getDecodedAccessToken(value); // decode token
        this.setUser(tokenInfo);
        return this.setStorage('access_token', value);
    }
    setUser(value) {
        return this.setStorage('user', JSON.stringify(value));
    }
    setLanguage(value) {
        return this.setStorage('language', JSON.stringify(value));
    }
    setExpiresIn(value) {
        return this.setStorage('expires_in', value);
    }
    getAccessToken() {
        return this.getStorage('access_token');
    }
    getExpiresIn() {
        return this.getStorage('expires_in');
    }
    getDecodedAccessToken(token) {
        try {
            return Object(jwt_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(token);
        }
        catch (Error) {
            return null;
        }
    }
    getUser() {
        let value = JSON.parse(this.getStorage('user')); // Json.parse convert text or string to javascript object '{}' >> {}
        this.user = new _models_user__WEBPACK_IMPORTED_MODULE_4__["User"]();
        this.user.firstname = value.firstname;
        this.user.lastname = value.lastname;
        this.user.phoneNumber = value.phoneNumber;
        this.user.gender = value.gender;
        this.user.birthdate = value.birthdate;
        this.user.imagePath = value.imagePath;
        this.user.languageIcon = value.languageIcon;
        // this.user.Role = value.role;
        this.user.email = value.email;
        // this.user.permissions = value.permissions;
        return this.user;
    }
    getFlag(langName) {
        if (langName === 'ar-EG') {
            return this.arabicFlag;
        }
        else if (langName === 'en-US') {
            return this.englishFlag;
        }
        else if (langName === 'da-DA') {
            return this.danishFlag;
        }
    }
    validBase64(value) {
        return value.substr(value.indexOf(',') + 1);
    }
    // handle image base64
    toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }
    correctImageUrl(...args) {
        if (typeof args[0] === 'string') {
            const url = args[0].replace(/\\/g, '/');
            const newUrl = `${this.baseUrl}/${url}`;
            return newUrl;
        }
        else if (args[0] instanceof Array) {
            const images = [];
            args[0].forEach((img) => images.push(this.correctImageUrl(img)));
            return images;
        }
    }
};
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], StorageService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "qXBG":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_app_api_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/api.constants */ "1Lwo");





let AuthService = class AuthService {
    constructor(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    get IsLoggedIn() {
        return this.storageService.existsStorage('user');
    }
    signInUser(user) {
        return this.http.post(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_4__["loginAPI"]}`, user);
    }
    getUser() {
        if (this.storageService.existsStorage('user')) {
            return this.storageService.getUser();
        }
    }
    registerCustomer(user) {
        return this.http.post(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_4__["registerAPI"]}`, user);
    }
    recommendedBy() {
        const params = `?offset=0&limit=10`;
        return this.http.get(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_4__["recommendedBy"]}` + params);
    }
    updatedPassword(userPassword) {
        return this.http.put(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_4__["userChangePassword"]}`, userPassword);
    }
    updatedUserProfile(userInfo) {
        return this.http.put(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_4__["updatedUserInfo"]}`, userInfo);
    }
    resetPassword(email, url) {
        return this.http.post(`${src_app_api_constants__WEBPACK_IMPORTED_MODULE_4__["resetPassword"]}`, { email, url });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], AuthService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "eRTK");




const routes = [
    {
        path: '',
        redirectTo: localStorage.getItem('access_token') ? '/courses/tabs/all-courses' : '/choose-language',
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | auth-auth-module */ "auth-auth-module").then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "Yj9t")).then(m => m.AuthPageModule)
    },
    {
        path: 'choose-language',
        loadChildren: () => Promise.all(/*! import() | choose-language-choose-language-module */[__webpack_require__.e("common"), __webpack_require__.e("choose-language-choose-language-module")]).then(__webpack_require__.bind(null, /*! ./choose-language/choose-language.module */ "Ivhk")).then(m => m.ChooseLanguagePageModule)
    },
    {
        path: 'intro',
        loadChildren: () => Promise.all(/*! import() | intro-intro-module */[__webpack_require__.e("common"), __webpack_require__.e("intro-intro-module")]).then(__webpack_require__.bind(null, /*! ./intro/intro.module */ "PQfJ")).then(m => m.IntroPageModule)
    },
    {
        path: 'courses',
        canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => __webpack_require__.e(/*! import() | courses-courses-module */ "courses-courses-module").then(__webpack_require__.bind(null, /*! ./courses/courses.module */ "sU/i")).then(m => m.CoursesPageModule)
    },
    {
        path: 'exercise',
        loadChildren: () => __webpack_require__.e(/*! import() | training-training-module */ "training-training-module").then(__webpack_require__.bind(null, /*! ./training/training.module */ "CKRj")).then(m => m.TrainingPageModule)
    },
    {
        path: 'test-finished',
        loadChildren: () => Promise.all(/*! import() | training-test-course-test-finished-test-finished-module */[__webpack_require__.e("common"), __webpack_require__.e("training-test-course-test-finished-test-finished-module")]).then(__webpack_require__.bind(null, /*! ./training/test-course/test-finished/test-finished.module */ "MD7V")).then(m => m.TestFinishedPageModule)
    },
    {
        path: 'faq',
        loadChildren: () => Promise.all(/*! import() | pages-faq-faq-module */[__webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~da13af96"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~30de349d"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-text-puzzle-text-module~sign-up~b0779ada"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-text-puzzle-text-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-faq-faq-module")]).then(__webpack_require__.bind(null, /*! ./pages/faq/faq.module */ "BhQr")).then(m => m.FaqPageModule)
    },
    {
        path: 'policy',
        loadChildren: () => Promise.all(/*! import() | pages-policy-policy-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-policy-policy-module")]).then(__webpack_require__.bind(null, /*! ./pages/policy/policy.module */ "nGq5")).then(m => m.PolicyPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yN/h":
/*!************************************!*\
  !*** ./src/app/app-interceptor.ts ***!
  \************************************/
/*! exports provided: AppInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInterceptor", function() { return AppInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "sZkV");









src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"];
let AppInterceptor = class AppInterceptor {
    // BASE_URL = environment.api_base_url;
    constructor(router, navCtrl, storageService) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.storageService = storageService;
    }
    intercept(req, next) {
        state: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterStateSnapshot"];
        // this.spinner.show();
        // Handling Authorization And Lang
        // console.log(`men d ${this.BASE_URL}/${this.storageService.getLang().code}/${req.url}`);
        // if (!this.validUrl(req.url)) {
        req = req.clone({
            url: `${req.url}`,
            headers: req.headers.set("Authorization", `Bearer ${this.storageService.getAccessToken()}`),
        });
        // }
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                // this.spinner.hide();
            }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((error) => {
            if (error.status === 401) {
                this.storageService.removeStorage("access_token");
                this.storageService.removeStorage("user");
                this.navCtrl.navigateRoot(["/auth/sign-in"], {
                    queryParams: {
                        returnUrl: this.router.routerState.snapshot.url,
                    },
                });
            }
            else if (error.status === 500) {
                console.log("something went wrong");
            }
            else if (error.status === 403) {
                this.storageService.removeStorage("access_token");
                this.storageService.removeStorage("user");
                this.navCtrl.navigateRoot(["/auth/sign-in"], {
                    queryParams: {
                        returnUrl: this.router.routerState.snapshot.url,
                    },
                });
            }
            const started = Date.now();
            const elapsed = Date.now() - started;
            // console.log(`Request for ${req.urlWithParams} failed after ${elapsed} ms.`);
            // debugger;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(error);
        }));
    }
    /**
     * Check if the url is valid and has http or https.
     */
    validUrl(url) {
        return url.includes("http://") || url.includes("https://");
    }
};
AppInterceptor.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] }
];
AppInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppInterceptor);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-title {\n  color: #fff;\n  font-weight: 600;\n  margin: 0;\n}\n\nion-item {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.info ion-item {\n  margin: 6px 0;\n}\n\n.info ion-text {\n  font-size: 14px;\n  font-weight: 500;\n  padding-left: 10px;\n  text-transform: lowercase;\n}\n\n.info ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 25px;\n}\n\n.social-media {\n  text-align: center;\n}\n\n.social-media ul {\n  list-style: none;\n  padding: 0;\n  margin: 20px 0;\n  cursor: pointer;\n}\n\n.social-media ul li {\n  display: inline-block;\n  margin: 0 10px;\n}\n\n.social-media ion-img {\n  width: 32px;\n  height: 32px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0U7RUFDRSxhQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBREo7O0FBSUU7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7QUFGSjs7QUFPQTtFQUVFLGtCQUFBO0FBTEY7O0FBT0U7RUFDRSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUxKOztBQU9JO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBTE47O0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFQSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdGl0bGUge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5pbmZvIHtcclxuICBpb24taXRlbSB7XHJcbiAgICBtYXJnaW46IDZweCAwO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5zb2NpYWwtbWVkaWEge1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgbGkge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWltZyB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "wAiw");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map