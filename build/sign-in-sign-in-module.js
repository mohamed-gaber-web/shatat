(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "D0FZ":
/*!************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.module.ts ***!
  \************************************************/
/*! exports provided: SignInPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-in-routing.module */ "XAwb");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.page */ "rYTE");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");








let SignInPageModule = class SignInPageModule {
};
SignInPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _sign_in_routing_module__WEBPACK_IMPORTED_MODULE_5__["SignInPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        ],
        declarations: [_sign_in_page__WEBPACK_IMPORTED_MODULE_6__["SignInPage"]]
    })
], SignInPageModule);



/***/ }),

/***/ "XAwb":
/*!********************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in-routing.module.ts ***!
  \********************************************************/
/*! exports provided: SignInPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageRoutingModule", function() { return SignInPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _sign_in_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in.page */ "rYTE");




const routes = [
    {
        path: '',
        component: _sign_in_page__WEBPACK_IMPORTED_MODULE_3__["SignInPage"]
    }
];
let SignInPageRoutingModule = class SignInPageRoutingModule {
};
SignInPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SignInPageRoutingModule);



/***/ }),

/***/ "aENZ":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/sign-in/sign-in.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"background-image\" no-scroll>\r\n\r\n  <div class=\"sign-in-title\">\r\n    <h3> {{ 'Signin to continue' | translate }} </h3>\r\n  </div>\r\n\r\n  <div class=\"sign-in-form\">\r\n    <ion-grid [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginFormSubmit(loginForm.value)\" class=\"padding\">\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\" size-lg=\"6\" >\r\n          <ion-item #theItem>\r\n            <ion-label position=\"floating\">\r\n              <ion-icon name=\"person\"></ion-icon> {{ 'Email' | translate }}\r\n            </ion-label>\r\n            <ion-input type=\"text\" formControlName=\"Email\" required></ion-input>\r\n            <ion-text color=\"danger\" *ngIf=\"loginFormErrors.Email\">{{loginFormErrors.Email}}</ion-text>\r\n\r\n          </ion-item>\r\n\r\n          <ion-item #theItem>\r\n            <ion-label position=\"floating\">\r\n              <ion-icon name=\"lock-closed-sharp\"></ion-icon> {{ 'Password' | translate }}\r\n            </ion-label>\r\n            <ion-input type=\"password\" formControlName=\"Password\" required>\r\n            </ion-input>\r\n            <ion-text color=\"danger\" *ngIf=\"loginFormErrors.Password\">{{loginFormErrors.Password}}</ion-text>\r\n\r\n          </ion-item>\r\n\r\n          <p> <a style=\"color: #A7F781;\" href=\"/auth/forget-password\"> {{ 'Forget Password' | translate }} </a> </p>\r\n\r\n          <ion-button (click)=\"onLoginFormSubmit(loginForm.value)\" [disabled]=\"isLoading || !loginForm.valid\">\r\n            {{ 'Login' | translate }}\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n  <p class=\"no-account\">{{ 'Don’t have an account yet ?' | translate }} <span> <a [routerLink]=\"['/auth/sign-up']\">{{ 'Signup' | translate }} </a> </span> </p>\r\n\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "gEkU":
/*!************************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-image {\n  --background: url('login-screen-1.png') center top no-repeat;\n  background-size: cover;\n  max-width: 100%;\n}\n\n.sign-in-title h3 {\n  text-align: center;\n  font-size: 24px;\n  font-weight: bold;\n  margin: 50px 0;\n  text-transform: uppercase;\n  color: #fff;\n}\n\n.sign-in-form {\n  padding: 80px 20px 0 20px;\n}\n\n.sign-in-form ion-item {\n  --background: transparent!important;\n  --border-color: #A7F781;\n  color: #fff;\n}\n\n.sign-in-form ion-item ion-icon {\n  font-size: 20px;\n}\n\n.sign-in-form p {\n  color: #fff;\n  font-size: 16px;\n  padding-top: 20px;\n}\n\n.sign-in-form ion-button {\n  --background: var(--ion-color-second-app)!important;\n  --border-radius: 50px!important;\n  font-size: 18px !important;\n  font-weight: 400;\n  width: 100%;\n  height: 45px;\n  --box-shadow: 2px 4px 6px 0 rgba(0, 0, 0, 0.16);\n  margin: 50px 0 50px 0;\n  text-transform: capitalize;\n}\n\np.no-account {\n  color: #fff;\n  font-size: 16px;\n  text-align: center;\n}\n\np.no-account span {\n  color: #A7F781;\n}\n\np.no-account span a {\n  color: #A7F781;\n  text-decoration: none;\n}\n\n@media (min-width: 550px) and (max-width: 2000px) {\n  .background-image {\n    --background: #003182;\n  }\n\n  .sign-in-form ion-button {\n    --background: #fff!important;\n    color: #003182;\n  }\n}\n\n.ios .sign-in-form {\n  padding: 80px 0 0 0;\n}\n\n.ios .sign-in-form p {\n  padding-left: 21px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWduLWluLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDREQUFBO0VBSUEsc0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUVFLHlCQUFBO0FBREY7O0FBR0U7RUFDRSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQURKOztBQUlJO0VBQ0UsZUFBQTtBQUZOOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpKOztBQU9FO0VBQ0UsbURBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtDQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQUxKOztBQVVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVNFO0VBQ0UsY0FBQTtBQVBKOztBQVFJO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FBTk47O0FBWUE7RUFDRTtJQUNFLHFCQUFBO0VBVEY7O0VBWUE7SUFDRSw0QkFBQTtJQUNBLGNBQUE7RUFURjtBQUNGOztBQWFBO0VBQ0csbUJBQUE7QUFYSDs7QUFjQTtFQUNFLGtCQUFBO0FBWEYiLCJmaWxlIjoic2lnbi1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1pbWFnZXtcclxuICAtLWJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luLXNjcmVlbi0xLnBuZykgY2VudGVyIHRvcCBuby1yZXBlYXQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuLnNpZ24taW4tdGl0bGUgaDMge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnNpZ24taW4tZm9ybSB7XHJcblxyXG4gIHBhZGRpbmc6IDgwcHggMjBweCAwIDIwcHg7XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG4gICAgLS1ib3JkZXItY29sb3I6ICNBN0Y3ODE7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuXHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIC0tYmFja2dyb3VuZCA6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKSFpbXBvcnRhbnQ7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHghaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAtLWJveC1zaGFkb3c6IDJweCA0cHggNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcclxuICAgIG1hcmdpbjogNTBweCAwIDUwcHggMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbnAubm8tYWNjb3VudCB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogI0E3Rjc4MTtcclxuICAgIGEge1xyXG4gICAgICBjb2xvcjogI0E3Rjc4MTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDU1MHB4KSBhbmQgKG1heC13aWR0aDogMjAwMHB4KSB7XHJcbiAgLmJhY2tncm91bmQtaW1hZ2V7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMDMxODI7XHJcbiAgfVxyXG5cclxuICAuc2lnbi1pbi1mb3JtIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kIDogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMzE4MjtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uaW9zIC5zaWduLWluLWZvcm0ge1xyXG4gICBwYWRkaW5nOiA4MHB4IDAgMCAwO1xyXG59XHJcblxyXG4uaW9zIC5zaWduLWluLWZvcm0gcCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMXB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "rUfF":
/*!***************************************************!*\
  !*** ./src/app/shared/models/loginCredentials.ts ***!
  \***************************************************/
/*! exports provided: loginCredentials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginCredentials", function() { return loginCredentials; });
class loginCredentials {
}


/***/ }),

/***/ "rYTE":
/*!**********************************************!*\
  !*** ./src/app/auth/sign-in/sign-in.page.ts ***!
  \**********************************************/
/*! exports provided: SignInPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPage", function() { return SignInPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sign-in.page.html */ "aENZ");
/* harmony import */ var _sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.page.scss */ "gEkU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_models_loginCredentials__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/loginCredentials */ "rUfF");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../auth.service */ "qXBG");











let SignInPage = class SignInPage {
    constructor(formBuilder, router, toastController, route, storageService, 
    // public translate: TranslateService,
    auth) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.toastController = toastController;
        this.route = route;
        this.storageService = storageService;
        this.auth = auth;
        this.isLoading = false;
        this.subs = [];
        this.loginFormErrors = {
            Email: '',
            Password: '',
        };
        this.loginValidationMessages = {
            Email: {
                required: 'Email field is required',
                invalidEmail: 'Email field must be a valid email',
            },
            Password: {
                required: 'Password field is required',
            },
        };
    }
    ngOnInit() {
        this.returnUrl =
            this.route.snapshot.queryParams.returnUrl || '/courses/tabs/all-courses';
        this.loginCredentials = new src_app_shared_models_loginCredentials__WEBPACK_IMPORTED_MODULE_7__["loginCredentials"]();
        this.buildLoginForm();
    }
    goToUpdatedUser() {
        this.router.navigateByUrl('/courses/tabs/all-courses');
    }
    buildLoginForm() {
        this.loginForm = this.formBuilder.group({
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_theme_app_validators__WEBPACK_IMPORTED_MODULE_9__["emailValidator"]])],
            Password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.loginForm.valueChanges.subscribe((data) => this.validateLoginForm());
    }
    validateLoginForm(isSubmitting = false) {
        for (const field of Object.keys(this.loginFormErrors)) {
            this.loginFormErrors[field] = '';
            const input = this.loginForm.get(field);
            if (input.invalid && (input.dirty || isSubmitting)) {
                for (const error of Object.keys(input.errors)) {
                    this.loginFormErrors[field] = this.loginValidationMessages[field][error];
                }
            }
        }
    }
    onLoginFormSubmit(values) {
        this.validateLoginForm(true);
        if (this.loginForm.valid) {
            this.isLoading = true;
            Object.assign(this.loginCredentials, this.loginForm.value);
            this.auth.signInUser(this.loginCredentials).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                console.log(response);
                if (response['success'] === true) {
                    this.storageService.setAccessToken(response['result']);
                    this.storageService.setExpiresIn(new Date(response['.expires']).getTime() / 1000 // .expires
                    );
                    // this.signInService.IsLoggedIn();
                    var toast = yield this.toastController.create({
                        message: 'You signed in successfully!',
                        duration: 2000,
                        color: 'success',
                    });
                    toast.present();
                    this.router.navigateByUrl(this.returnUrl);
                }
                else {
                    var toast = yield this.toastController.create({
                        message: 'Username And Password Incorrect',
                        duration: 2000,
                        color: 'danger',
                    });
                    toast.present();
                }
            }), (error) => {
                Object.keys(error).forEach((key) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var toast = yield this.toastController.create({
                        message: error[key][0],
                        duration: 2000,
                        color: 'danger',
                    });
                    toast.present();
                }));
                this.loginForm.reset();
                this.isLoading = false;
            }, () => (this.isLoading = false));
        }
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
SignInPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] }
];
SignInPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sign-in',
        template: _raw_loader_sign_in_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sign_in_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SignInPage);



/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module.js.map