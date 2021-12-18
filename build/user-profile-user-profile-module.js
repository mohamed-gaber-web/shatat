(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-profile-user-profile-module"],{

/***/ "1zEL":
/*!******************************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile-routing.module.ts ***!
  \******************************************************************/
/*! exports provided: UserProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageRoutingModule", function() { return UserProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-profile.page */ "JSdm");




const routes = [
    {
        path: '',
        component: _user_profile_page__WEBPACK_IMPORTED_MODULE_3__["UserProfilePage"]
    },
    {
        path: 'edit-user',
        loadChildren: () => __webpack_require__.e(/*! import() | edit-user-edit-user-module */ "edit-user-edit-user-module").then(__webpack_require__.bind(null, /*! ./edit-user/edit-user.module */ "b+lr")).then(m => m.EditUserPageModule)
    }
];
let UserProfilePageRoutingModule = class UserProfilePageRoutingModule {
};
UserProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UserProfilePageRoutingModule);



/***/ }),

/***/ "AHrv":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"triangle\"></ion-icon>\n      <ion-label>Tab 1</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"ellipse\"></ion-icon>\n      <ion-label>Tab 2</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"square\"></ion-icon>\n      <ion-label>Tab 3</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>\n");

/***/ }),

/***/ "JSdm":
/*!********************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.page.ts ***!
  \********************************************************/
/*! exports provided: UserProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePage", function() { return UserProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./user-profile.page.html */ "xayH");
/* harmony import */ var _user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-profile.page.scss */ "QrHw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth.service */ "qXBG");










let UserProfilePage = class UserProfilePage {
    constructor(authService, formBuilder, toastController, storageService, router) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.storageService = storageService;
        this.router = router;
        this.subs = [];
        this.passwordFormErrors = {
            currentPassword: '',
            newPassword: '',
            confirmPassword: '',
        };
        this.passwordValidationMessages = {
            currentPassword: {
                required: 'Current password field is required',
            },
            newPassword: {
                required: 'New password field is required',
            },
            confirmPassword: {
                required: 'Confirm password field is required',
            },
        };
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        this.passwordForm = this.formBuilder.group({
            'currentPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'newPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'confirmPassword': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        }, { validator: Object(src_theme_app_validators__WEBPACK_IMPORTED_MODULE_8__["matchingPasswords"])('newPassword', 'confirmPassword') });
        this.passwordForm.valueChanges.subscribe((data) => this.validateChangePasswordForm());
    }
    validateChangePasswordForm(isSubmitting = false) {
        for (const field of Object.keys(this.passwordFormErrors)) {
            this.passwordFormErrors[field] = '';
            const input = this.passwordForm.get(field);
            if (input.invalid && (input.dirty || isSubmitting)) {
                for (const error of Object.keys(input.errors)) {
                    this.passwordFormErrors[field] = this.passwordValidationMessages[field][error];
                }
            }
        }
    }
    updatedPassword() {
        if (this.passwordForm.invalid) {
            return;
        }
        this.subs.push(this.authService.updatedPassword(this.passwordForm.value).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (response['success'] === true) {
                var toast = yield this.toastController.create({
                    message: 'You password is changed!',
                    duration: 2000,
                    color: 'success',
                });
                toast.present();
                this.storageService.clearStorage();
                this.router.navigate(['/auth/sign-in']);
            }
            else {
                var toast = yield this.toastController.create({
                    message: response['arrayMessage'][0],
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
                this.router.navigate(['/auth/user-profile']);
            }
        })));
    }
    goToEditUser() {
        this.router.navigate(['/auth/user-profile/edit-user']);
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
UserProfilePage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_7__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
UserProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-user-profile',
        template: _raw_loader_user_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_user_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UserProfilePage);



/***/ }),

/***/ "MJr+":
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "AHrv");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "PkIa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");




let TabsPage = class TabsPage {
    constructor() { }
};
TabsPage.ctorParameters = () => [];
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "PkIa":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "QrHw":
/*!**********************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.page.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  font-size: 35px;\n}\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n\nion-card, ion-item, ion-list {\n  --background: #fff!important;\n  padding: 0;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\nion-button.update-button {\n  margin: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1c2VyLXByb2ZpbGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREo7O0FBTUE7RUFDRSw0QkFBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEYiLCJmaWxlIjoidXNlci1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIgaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG5cclxuaW9uLWhlYWRlciBpb24taW1nIHtcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuXHJcbi5pbWctcHJvZmlsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBpb24tYXZhdGFyIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgbWFyZ2luOiA1cHggMDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuaW9uLWNhcmQsIGlvbi1pdGVtLCBpb24tbGlzdCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaW1nLWxhbmdhdWdlIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxM3B4O1xyXG4gIHRvcDogMTRweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG5pb24tYnV0dG9uLnVwZGF0ZS1idXR0b24ge1xyXG4gIG1hcmdpbjogMjBweCAwO1xyXG59XHJcblxyXG4vLyBpb24tbGFiZWwge1xyXG4vLyAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCkhaW1wb3J0YW50O1xyXG4vLyB9XHJcbiJdfQ== */");

/***/ }),

/***/ "hO9l":
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "kB8F");
/* harmony import */ var src_app_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/tabs/tabs.page */ "MJr+");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"],
        ],
        exports: [],
        declarations: [src_app_tabs_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ }),

/***/ "kB8F":
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "MJr+");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
        // {
        //   path: 'tab1',
        //   loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule)
        // },
        // {
        //   path: 'tab2',
        //   loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule)
        // },
        // {
        //   path: 'auth',
        //   loadChildren: () => import('../auth/auth-routing.module').then(m => m.AuthPageRoutingModule)
        // },
        // {
        //   path: '',
        //   redirectTo: '/tabs/tab1',
        //   pathMatch: 'full'
        // }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "kYbn":
/*!**********************************************************!*\
  !*** ./src/app/auth/user-profile/user-profile.module.ts ***!
  \**********************************************************/
/*! exports provided: UserProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilePageModule", function() { return UserProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../tabs/tabs.module */ "hO9l");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-profile-routing.module */ "1zEL");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var _user_profile_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user-profile.page */ "JSdm");









let UserProfilePageModule = class UserProfilePageModule {
};
UserProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _user_profile_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserProfilePageRoutingModule"],
            _tabs_tabs_module__WEBPACK_IMPORTED_MODULE_1__["TabsPageModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"]
        ],
        declarations: [_user_profile_page__WEBPACK_IMPORTED_MODULE_8__["UserProfilePage"]]
    })
], UserProfilePageModule);



/***/ }),

/***/ "xayH":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/user-profile.page.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button> </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n\r\n    <div class=\"img-profile\">\r\n      <ion-avatar slot=\"end\">\r\n        <img *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\r\n        <img *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\r\n        src=\"../../../assets/images/image profille (1).png\">\r\n      </ion-avatar>\r\n      <ion-label>{{ userInfo.firstname + ' ' +  userInfo.lastname }}</ion-label>\r\n    </div>\r\n\r\n    <ion-avatar class=\"ion-margin-end\"  slot=\"end\">\r\n      <img class=\"img-langauge\" [src]=\"userInfo.languageIcon\">\r\n    </ion-avatar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-toolbar class=\"ios-toolbar\">\r\n  <ion-title class=\"ion-text-center\">\r\n    Update Profile\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-justify-content-center\">\r\n      <ion-col size-md=\"8\" size-lg=\"6\">\r\n        <ion-card>\r\n          <ion-list *ngIf=\"userInfo\">\r\n            <ion-item>\r\n              <ion-label color=\"primary\"> Firstname : {{ userInfo.firstname }} </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label color=\"primary\"> Lastname : {{ userInfo.lastname }} </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label color=\"primary\"> Phone Number : {{ userInfo.phoneNumber }} </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label color=\"primary\"> Email : {{ userInfo.email }} </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label color=\"primary\"> Gender : {{ userInfo.gender === '0' ? 'male' : 'female' }} </ion-label>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label color=\"primary\"> Birthday : {{ userInfo.birthdate }} </ion-label>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-button class=\"update-button\" (click)=\"goToEditUser()\"> <ion-icon name=\"create-outline\"></ion-icon> Edit </ion-button>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-toolbar>\r\n    <ion-title class=\"ion-text-center\">\r\n      Update Password\r\n    </ion-title>\r\n  </ion-toolbar>\r\n\r\n  <form [formGroup]=\"passwordForm\" (ngSubmit)=\"updatedPassword()\">\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\" color=\"primary\">Current Password</ion-label>\r\n            <ion-input formControlName='currentPassword' type=\"password\" minlength=\"6\" required></ion-input>\r\n          </ion-item>\r\n\r\n          <ion-text color=\"danger\" *ngIf=\"passwordFormErrors.currentPassword\">\r\n            {{ passwordFormErrors.currentPassword }}\r\n          </ion-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"floating\" color=\"primary\">New Password</ion-label>\r\n            <ion-input formControlName='newPassword' type=\"password\" required></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"passwordFormErrors.newPassword\">\r\n            {{ passwordFormErrors.newPassword }}\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"floating\" color=\"primary\">Confirm Password</ion-label>\r\n            <ion-input formControlName='confirmPassword' type=\"password\" required></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"passwordFormErrors.confirmPassword\">\r\n            {{ passwordFormErrors.confirmPassword }}\r\n          </ion-text>\r\n          <ion-text color=\"danger\" *ngIf=\"passwordForm.controls.confirmPassword.hasError('mismatchedPasswords')\">{{ 'notMatch' | translate }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n\r\n\r\n    <ion-grid>\r\n      <ion-row class=\"ion-justify-content-center\">\r\n        <ion-col size=\"12\" size-lg=\"6\" size-md=\"8\">\r\n          <ion-button (click)=\"updatedPassword()\">\r\n            <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n            Save\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=user-profile-user-profile-module.js.map