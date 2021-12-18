(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-user-edit-user-module"],{

/***/ "2ZZm":
/*!***************************************************************!*\
  !*** ./src/app/auth/user-profile/edit-user/edit-user.page.ts ***!
  \***************************************************************/
/*! exports provided: EditUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPage", function() { return EditUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./edit-user.page.html */ "pnH3");
/* harmony import */ var _edit_user_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-user.page.scss */ "90DZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var src_theme_app_validators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/theme/app-validators */ "g5TY");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../auth.service */ "qXBG");











let EditUserPage = class EditUserPage {
    constructor(authService, formBuilder, toastController, storageService, router, translate) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.toastController = toastController;
        this.storageService = storageService;
        this.router = router;
        this.translate = translate;
        this.subs = [];
        this.gender = [
            { name: 'male', value: 0 },
            { name: 'female', value: 1 }
        ];
        this.userInfoFormErrors = {
            FirstName: '',
            LastName: '',
            email: '',
            PhoneNumber: '',
            Birthdate: '',
            Gender: '',
        };
        this.userInfodValidationMessages = {
            FirstName: {
                required: this.translate.instant('firstNameReq'),
            },
            LastName: {
                required: this.translate.instant('lastNameReq'),
            },
            email: {
                required: this.translate.instant('emailReq'),
                invalidEmail: this.translate.instant('invalidEmail'),
            },
            phoneNumber: {
                required: this.translate.instant('phoneReq'),
                minlength: 'Phone Number is not long enough, minimum of 11 characters',
            },
            gender: {
                required: this.translate.instant('genderReq'),
            },
            Birthdate: {
                required: this.translate.instant('birthdateReq'),
            },
        };
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        this.buldingForm();
    }
    buldingForm() {
        this.userInfoForm = this.formBuilder.group({
            'FirstName': [this.userInfo.firstname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'LastName': [this.userInfo.lastname, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'email': [this.userInfo.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, src_theme_app_validators__WEBPACK_IMPORTED_MODULE_9__["emailValidator"]])],
            'PhoneNumber': [this.userInfo.phoneNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'Gender': [this.userInfo.gender, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'birthdate': [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
            'file': null
        });
        // this.userInfoForm.valueChanges.subscribe((data) => this.validateChangeInfoForm());
    }
    // validateChangeInfoForm(isSubmitting = false) {
    //   for (const field of Object.keys(this.userInfoFormErrors)) {
    //     this.userInfoFormErrors[field] = '';
    //     const input = this.userInfoForm.get(field) as FormControl;
    //     if (input.invalid && (input.dirty || isSubmitting)) {
    //       for (const error of Object.keys(input.errors)) {
    //         this.userInfoFormErrors[field] = this.userInfodValidationMessages[field][
    //           error
    //         ];
    //       }
    //     }
    //   }
    // }
    updatedUserInfo() {
        // if (this.userInfoForm.invalid) {
        //   return;
        // }
        this.subs.push(this.authService.updatedUserProfile(this.userInfoForm.value).subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(response);
            if (response['success'] === true) {
                // ** set localstorage [ token ]
                this.storageService.setAccessToken(response['result']);
                this.buldingForm();
                var toast = yield this.toastController.create({
                    message: 'Update User Successful!',
                    duration: 2000,
                    color: 'success',
                });
                toast.present();
                this.router.navigate(['/auth/user-profile']);
            }
            else {
                var toast = yield this.toastController.create({
                    message: response['arrayMessage'][0],
                    duration: 2000,
                    color: 'danger',
                });
                toast.present();
                this.router.navigate(['/auth/user-profile/edit-user']);
            }
        })));
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => sub.unsubscribe());
    }
};
EditUserPage.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateService"] }
];
EditUserPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-edit-user',
        template: _raw_loader_edit_user_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_edit_user_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EditUserPage);



/***/ }),

/***/ "90DZ":
/*!*****************************************************************!*\
  !*** ./src/app/auth/user-profile/edit-user/edit-user.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-icon {\n  font-size: 35px;\n}\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n\nion-card, ion-item, ion-list {\n  --background: #fff!important;\n  padding: 0;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZWRpdC11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQURKOztBQU1BO0VBQ0UsNEJBQUE7RUFDQSxVQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUhGIiwiZmlsZSI6ImVkaXQtdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIGlvbi1pY29uIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXIgaW9uLWltZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1nLXByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmlvbi1jYXJkLCBpb24taXRlbSwgaW9uLWxpc3Qge1xyXG4gIC0tYmFja2dyb3VuZDogI2ZmZiFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmltZy1sYW5nYXVnZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTNweDtcclxuICB0b3A6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLy8gaW9uLWxhYmVsIHtcclxuLy8gICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApIWltcG9ydGFudDtcclxuLy8gfVxyXG4iXX0= */");

/***/ }),

/***/ "N7Jb":
/*!*************************************************************************!*\
  !*** ./src/app/auth/user-profile/edit-user/edit-user-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EditUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageRoutingModule", function() { return EditUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-user.page */ "2ZZm");




const routes = [
    {
        path: '',
        component: _edit_user_page__WEBPACK_IMPORTED_MODULE_3__["EditUserPage"]
    }
];
let EditUserPageRoutingModule = class EditUserPageRoutingModule {
};
EditUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditUserPageRoutingModule);



/***/ }),

/***/ "b+lr":
/*!*****************************************************************!*\
  !*** ./src/app/auth/user-profile/edit-user/edit-user.module.ts ***!
  \*****************************************************************/
/*! exports provided: EditUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserPageModule", function() { return EditUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-user-routing.module */ "N7Jb");
/* harmony import */ var _edit_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-user.page */ "2ZZm");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "TSSN");








let EditUserPageModule = class EditUserPageModule {
};
EditUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditUserPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_edit_user_page__WEBPACK_IMPORTED_MODULE_6__["EditUserPage"]]
    })
], EditUserPageModule);



/***/ }),

/***/ "pnH3":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/user-profile/edit-user/edit-user.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button> </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n\r\n    <div class=\"img-profile\">\r\n      <ion-avatar slot=\"end\">\r\n        <img *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\r\n        <img *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\r\n        src=\"../../../assets/images/image profille (1).png\">\r\n      </ion-avatar>\r\n      <ion-label>{{ userInfo.firstname + ' ' +  userInfo.lastname }}</ion-label>\r\n    </div>\r\n\r\n    <!-- <img  [src]=\"userInfo.languageIcon\" /> -->\r\n\r\n    <ion-avatar class=\"ion-margin-end\"  slot=\"end\">\r\n      <img class=\"img-langauge\" [src]=\"userInfo.languageIcon\">\r\n    </ion-avatar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-toolbar>\r\n  <ion-title>\r\n   Update user\r\n  </ion-title>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n  <form [formGroup]=\"userInfoForm\" (ngSubmit)=\"updatedUserInfo()\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item lines=\"full\">\r\n            <ion-label position=\"floating\">{{ 'firstname' | translate}}</ion-label>\r\n            <ion-input  type=\"text\" formControlName=\"FirstName\" required></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" class=\"error ion-padding\" *ngIf=\"userInfoFormErrors.FirstName\">\r\n            {{userInfoFormErrors.FirstName }}\r\n          </ion-text>\r\n\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"floating\">{{ 'lastname' | translate}}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"LastName\" required></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" class=\"error ion-padding\" *ngIf=\"userInfoFormErrors.LastName\">\r\n            {{ userInfoFormErrors.LastName }}\r\n          </ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item lines=\"none\">\r\n            <ion-label position=\"floating\"> {{ 'phoneNumber' | translate}} </ion-label>\r\n            <ion-input  type=\"text\" formControlName=\"PhoneNumber\" minlength=\"11\" required></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"userInfoFormErrors.PhoneNumber\">{{ userInfoFormErrors.PhoneNumber }}\r\n          </ion-text>\r\n          <ion-text color=\"danger\" *ngIf=\"userInfoFormErrors.PhoneNumber\">{{ userInfoFormErrors.PhoneNumber }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\">{{ 'Email' | translate }}</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"email\" required></ion-input>\r\n          </ion-item>\r\n          <ion-text color=\"danger\" *ngIf=\"userInfoFormErrors.email\"> {{ userInfoFormErrors.email }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-item>\r\n            <ion-label position=\"floating\"></ion-label>\r\n            <ion-input value=\"{{ userInfo.birthdate  }}\" type=\"date\" formControllName=\"birthdate\" required></ion-input>\r\n          </ion-item>\r\n          <ion-text  *ngIf=\"userInfoFormErrors.Birthdate\"> {{ userInfoFormErrors.Birthdate }}</ion-text>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\">\r\n          <ion-list>\r\n            <ion-radio-group  formControlName=\"Gender\">\r\n              <ion-list-header>\r\n                <ion-label>{{ 'gender' | translate}}</ion-label>\r\n              </ion-list-header>\r\n\r\n                <ion-row>\r\n                  <ion-col size=\"6\" *ngFor=\"let genderItem of gender\">\r\n                    <ion-item >\r\n                      <ion-label>{{ genderItem.name }}</ion-label>\r\n                      <ion-radio slot=\"start\" [value]=\"genderItem.value\"></ion-radio>\r\n                    </ion-item>\r\n                  </ion-col>\r\n\r\n                </ion-row>\r\n\r\n            </ion-radio-group>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n\r\n    <ion-grid>\r\n      <ion-row ion-align-items-center>\r\n        <ion-col size=\"12\">\r\n          <ion-button [disabled]=\"!userInfoForm.valid\" (click)=\"updatedUserInfo()\">\r\n            <ion-icon name=\"checkmark-outline\"></ion-icon>\r\n            Update\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=edit-user-edit-user-module.js.map