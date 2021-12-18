(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["single-choice-single-choice-module"],{

/***/ "HGvi":
/*!************************************************************************!*\
  !*** ./src/app/training/single-choice/single-choice-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: SingleChoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleChoicePageRoutingModule", function() { return SingleChoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _single_choice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./single-choice.page */ "aQmV");




const routes = [
    {
        path: '',
        component: _single_choice_page__WEBPACK_IMPORTED_MODULE_3__["SingleChoicePage"]
    }
];
let SingleChoicePageRoutingModule = class SingleChoicePageRoutingModule {
};
SingleChoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SingleChoicePageRoutingModule);



/***/ }),

/***/ "XaxC":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/single-choice/single-choice.page.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"course\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/exercise\"> </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n    <div class=\"img-profile\">\r\n      <ion-avatar slot=\"end\">\r\n        <img *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\r\n        <img *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\r\n        src=\"../../../assets/images/image profille (1).png\">\r\n      </ion-avatar>\r\n      <ion-label>{{ userInfo.firstname + ' ' +  userInfo.lastname }}</ion-label>\r\n    </div>\r\n\r\n    <ion-avatar class=\"ion-margin-end\"  slot=\"end\">\r\n      <img class=\"img-langauge\" [src]=\"userInfo.languageIcon\">\r\n    </ion-avatar>  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-toolbar class=\"ios-toolbar\">\r\n  <ion-title slot=\"start\">\r\n    single choice\r\n    <ion-text class=\"total-result\"> {{ lengthQuestion + ' / ' + (currentIndex+1) }} </ion-text>\r\n  </ion-title>\r\n  <ion-icon slot=\"end\" (click)=\"presentModal()\"  name=\"help-circle-outline\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\r\n\r\n  <form [formGroup]=\"singleForm\">\r\n    <ion-slides [pager]=\"false\" #slides [options]=\"slideOpts\">\r\n    <ion-slide *ngFor=\"let singleItem of exerciseItems\">\r\n      <ion-grid>\r\n        <ion-list class=\"single-choice\">\r\n          <ion-grid class=\"sound-group\">\r\n            <ion-row>\r\n            <ion-col size=\"4\">\r\n                <div *ngIf=\"singleItem.voiceDanishPath\">\r\n                  <div class=\"sound-question\">\r\n                      <div class=\"img-volume\">\r\n                        <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!singleItem.audioElementDanish.status? 'play' : 'stop'\" (click)=\"playAudio('',singleItem)\">\r\n                        </ion-icon>\r\n                      </div>\r\n                    <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\r\n                  </div>\r\n                </div>\r\n            </ion-col>\r\n          <ion-col size=\"4\" >\r\n            <div *ngIf=\"singleItem.singleChoiceTranslations[0]?.voicePath\">\r\n              <div class=\"sound-question\">\r\n                  <div class=\"img-volume\">\r\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!singleItem.audioElement.status? 'play' : 'stop'\" (click)=\"playAudio('native',singleItem)\">\r\n                    </ion-icon>\r\n                  </div>\r\n                <img class=\"img-lang\" [src]=\"userInfo.languageIcon\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n          </ion-row>\r\n          </ion-grid>\r\n\r\n          <ion-radio-group formControlName=\"answer\">\r\n\r\n            <ion-list-header>\r\n              <ion-text> {{ singleItem.question }} </ion-text>\r\n            </ion-list-header>\r\n\r\n            <ion-item>\r\n              <ion-label>JA</ion-label>\r\n              <ion-radio [value]=\"true\"></ion-radio>\r\n            </ion-item>\r\n\r\n            <ion-item>\r\n              <ion-label>NEJ</ion-label>\r\n              <ion-radio [value]=\"false\"></ion-radio>\r\n            </ion-item>\r\n\r\n          </ion-radio-group>\r\n\r\n          <ion-grid>\r\n            <ion-row class=\"ion-padding ion-justify-content-center\">\r\n\r\n              <ion-col size=\"12\" size-lg=\"6\">\r\n                <ion-button\r\n                  [ngClass]=\"{'hideButtonNext': singleForm.invalid }\"\r\n                  (click)=\"slidePrev()\">\r\n                  <ion-icon name=\"chevron-back-outline\"></ion-icon>\r\n                    Prev\r\n                </ion-button>\r\n              </ion-col>\r\n\r\n              <ion-col size=\"12\" size-lg=\"6\">\r\n                <ion-button\r\n                  [ngClass]=\"{'hideButtonNext': singleForm.invalid }\"\r\n                  (click)=\"slideNext(singleItem.id,singleForm.value)\">\r\n                    Next\r\n                  <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n                </ion-button>\r\n              </ion-col>\r\n\r\n            </ion-row>\r\n\r\n          </ion-grid>\r\n\r\n        </ion-list>\r\n      </ion-grid>\r\n\r\n    </ion-slide>\r\n  </ion-slides>\r\n  </form>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "aQmV":
/*!**************************************************************!*\
  !*** ./src/app/training/single-choice/single-choice.page.ts ***!
  \**************************************************************/
/*! exports provided: SingleChoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleChoicePage", function() { return SingleChoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_single_choice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./single-choice.page.html */ "XaxC");
/* harmony import */ var _single_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-choice.page.scss */ "qIIM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/exercise.service */ "4YRF");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../help-modal/help-modal.component */ "kxUF");












let SingleChoicePage = class SingleChoicePage {
    constructor(toastController, storageService, exerciseService, route, fb, navController, modalController) {
        this.toastController = toastController;
        this.storageService = storageService;
        this.exerciseService = exerciseService;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.modalController = modalController;
        this.subs = [];
        this.lengthQuestion = 0;
        this.offset = 0;
        this.currentIndex = 0;
        this.questionSelected = false;
        this.isLoading = false;
        this.limit = 1;
        this.resultAnswer = null;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
        };
        this.singleFormErrors = {
            answer: '',
        };
        this.singleValidationMessages = {
            answer: {
                required: 'Password field is required',
            },
        };
    }
    ngOnInit() {
        // ** get info user from localstorage
        this.userInfo = this.storageService.getUser();
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');
        //**  Single Form run
        this.buildSingleForm();
        // ** Get Question Data
        this.getQuestion();
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
    }
    // ** Get Question Data
    getQuestion() {
        this.isLoading = true;
        this.subs.push(this.exerciseService
            .getCourseExercise(this.exerciseType, this.courseId, this.currentIndex, this.limit)
            .subscribe(response => {
            this.isLoading = false;
            this.exerciseItems = response['result'];
            this.lengthQuestion = response['length'];
            if (this.lengthQuestion == 0) {
                this.errorMessage("There are no available questions in this exercise");
                setTimeout(() => {
                    this.navController.navigateRoot(['/exercise', { courseId: this.courseId }]);
                }, 100);
            }
            if (this.exerciseItems[0].singleChoiceTranslations[0].voicePath != null && this.exerciseItems[0].singleChoiceTranslations[0].voicePath != "") {
                this.exerciseItems[0].audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__["AudioElement"]();
                this.exerciseItems[0].audioElement.status = false;
                var audio = new Audio(`${this.exerciseItems[0].singleChoiceTranslations[0].voicePath}`);
                this.exerciseItems[0].audioElement.audio = audio;
                this.exerciseItems[0].audioElement.audio.load();
            }
            if (this.exerciseItems[0].voiceDanishPath != null && this.exerciseItems[0].voiceDanishPath != "") {
                this.exerciseItems[0].audioElementDanish = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_7__["AudioElement"]();
                this.exerciseItems[0].audioElementDanish.status = false;
                var audio = new Audio(`${this.exerciseItems[0].voiceDanishPath}`);
                this.exerciseItems[0].audioElementDanish.audio = audio;
                this.exerciseItems[0].audioElementDanish.audio.load();
            }
        }));
    }
    playAudio(type, item) {
        var _a, _b;
        if (type == "native") {
            if (((_a = item.audioElementDanish) === null || _a === void 0 ? void 0 : _a.status) == true) {
                item.audioElementDanish.audio.pause();
                item.audioElementDanish.status = false;
            }
            if (item.audioElement.status == false) {
                item.audioElement.audio.play();
                item.audioElement.status = true;
            }
            else {
                item.audioElement.audio.pause();
                item.audioElement.status = false;
            }
        }
        else {
            if (item.audioElementDanish.status == false) {
                if (((_b = item.audioElement) === null || _b === void 0 ? void 0 : _b.status) == true) {
                    item.audioElement.audio.pause();
                    item.audioElement.status = false;
                }
                item.audioElementDanish.audio.play();
                item.audioElementDanish.status = true;
            }
            else {
                item.audioElementDanish.audio.pause();
                item.audioElementDanish.status = false;
            }
        }
    }
    // ** Validate Form Input
    validateSingleForm(isSubmitting = false) {
        for (const field of Object.keys(this.singleFormErrors)) {
            this.singleFormErrors[field] = '';
            const input = this.singleForm.get(field);
            if (input.invalid && (input.dirty || isSubmitting)) {
                for (const error of Object.keys(input.errors)) {
                    this.singleFormErrors[field] = this.singleValidationMessages[field][error];
                }
            }
        }
    }
    // ** Build Single Choice Form
    buildSingleForm() {
        this.singleForm = this.fb.group({
            answer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])],
        });
        this.singleForm.valueChanges.subscribe((data) => this.validateSingleForm());
    }
    // ** Get Current Index
    getCurrentIndex() {
        this.slides.getActiveIndex().then(current => this.currentIndex = current);
    }
    // ** Move to Next slide
    slideNext(id, ...answer) {
        this.validateSingleForm(true);
        this.subs.push(this.exerciseService.checkAnswerSingleChoise(id, this.singleForm.value.answer)
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.resultAnswer = response['success'];
            if (this.resultAnswer === true) {
                // message and voice success
                this.successMessage('The answer is correct');
                this.currentIndex += 1;
                if (this.exerciseItems[0].audioElement) {
                    this.exerciseItems[0].audioElement.audio.pause();
                    this.exerciseItems[0].audioElement.audio = null;
                }
                if (this.exerciseItems[0].audioElementDanish) {
                    this.exerciseItems[0].audioElementDanish.audio.pause();
                    this.exerciseItems[0].audioElementDanish.audio = null;
                }
                this.isLoading = true;
                this.singleForm.reset();
                this.getQuestion();
                this.slides.slideNext();
                if (this.currentIndex === this.lengthQuestion) {
                    this.successMessage('Thanks for resolving questions');
                    setTimeout(() => {
                        this.navController.navigateRoot(['/exercise', { courseId: this.courseId }]);
                    }, 100);
                }
            }
            else if (this.resultAnswer === false) {
                // message and voice error
                this.errorMessage('The answer is wrong and please choose correct answer');
            }
        })));
    }
    successMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.load();
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 500,
                cssClass: 'ion-success',
                color: 'success'
            });
            toast.present();
        });
    }
    errorMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.load();
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 500,
                cssClass: 'ion-error',
                color: 'danger',
            });
            toast.present();
        });
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_10__["HelpModalComponent"],
                componentProps: {
                    "modalLink": "https://khrs-admin.sdex.online/assets/tutorials/single_choice_tutorial.mp4",
                    "modalTitle": "Single Choice Tutorial"
                }
            });
            return yield modal.present();
        });
    }
    slidePrev() {
        this.currentIndex -= 1;
        this.getQuestion();
        this.slides.slidePrev();
    }
    ngOnDestroy() {
        this.subs.forEach(sub => {
            sub.unsubscribe();
        });
    }
};
SingleChoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_9__["StorageService"] },
    { type: src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_8__["ExerciseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
SingleChoicePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slides',] }]
};
SingleChoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-single-choice',
        template: _raw_loader_single_choice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_single_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SingleChoicePage);

/**
 * [*] => don't show next button before answer on first quetion
 * [*] => if is question is last question hide next button
 * [*] => if person answer not correct hide button check
 * [] => get sound
 * [*] fix rest form
 * [*] fix typo in choise to be choice
 * [*] add current and total number of questions
 * [*] remove check and replace its logic with next and the aswer must be correct to move to the next question
 */


/***/ }),

/***/ "crrd":
/*!****************************************************************!*\
  !*** ./src/app/training/single-choice/single-choice.module.ts ***!
  \****************************************************************/
/*! exports provided: SingleChoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleChoicePageModule", function() { return SingleChoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _single_choice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./single-choice-routing.module */ "HGvi");
/* harmony import */ var _single_choice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-choice.page */ "aQmV");
/* harmony import */ var _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../help-modal/help-modal.module */ "lCi7");








let SingleChoicePageModule = class SingleChoicePageModule {
};
SingleChoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _single_choice_routing_module__WEBPACK_IMPORTED_MODULE_5__["SingleChoicePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_7__["HelpModalModule"]
        ],
        declarations: [_single_choice_page__WEBPACK_IMPORTED_MODULE_6__["SingleChoicePage"]],
    })
], SingleChoicePageModule);



/***/ }),

/***/ "qIIM":
/*!****************************************************************!*\
  !*** ./src/app/training/single-choice/single-choice.page.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .sound-group .sound-question .img-volume {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  position: relative;\n  top: 3px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n\n/* end header top */\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\n.single-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 20px;\n  font-weight: 600;\n  margin: 20px 0 50px 0;\n}\n\n.single-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 500;\n  margin: 20px auto;\n}\n\n.single-choice ion-radio {\n  --color: var(--ion-color-second-app);\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.sound-group .sound-question {\n  border: 2px solid var(--ion-color-second-app);\n  padding: 10px;\n  display: flex;\n  justify-content: space-around;\n  border-radius: 10px;\n}\n\n.sound-group .sound-question img.img-lang {\n  width: 30px;\n  height: auto;\n}\n\n.sound-group .sound-question img.img-lang {\n  width: 30px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaW5nbGUtY2hvaWNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtBQUNGOztBQUVBLGVBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFESjs7QUFLQSxtQkFBQTs7QUFJRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFVRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUFQSjs7QUFVRTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFSSjs7QUFXRTtFQUNFLG9DQUFBO0FBVEo7O0FBYUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQVZGOztBQWFBO0VBQ0UsYUFBQTtBQVZGOztBQWFBO0VBQ0UsY0FBQTtBQVZGOztBQWFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBVkY7O0FBZUk7RUFDQSw2Q0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQVpKOztBQWNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFaTjs7QUFrQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQWhCSiIsImZpbGUiOiJzaW5nbGUtY2hvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHQtaWNvbi12bHVtZSB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogM3B4O1xyXG59XHJcblxyXG4vKiBoZWFkZXIgVG9wICovXHJcbmlvbi1oZWFkZXIgaW9uLWltZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1nLXByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogZW5kIGhlYWRlciB0b3AgKi9cclxuXHJcbmlvbi10b29sYmFyIHtcclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uc2luZ2xlLWNob2ljZSB7XHJcbiAgaW9uLXRleHR7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbjogMjBweCAwIDUwcHggMDtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgfVxyXG5cclxuICBpb24tcmFkaW8ge1xyXG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1sYW5nYXVnZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTNweDtcclxuICB0b3A6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmhpZGVCdXR0b25OZXh0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uc2hvd0J1dHRvbk5leHQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4udG90YWwtcmVzdWx0IHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLnNvdW5kLWdyb3VwIHtcclxuXHJcbiAgICAuc291bmQtcXVlc3Rpb24ge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgaW1nLmltZy1sYW5nIHtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuaW1nLXZvbHVtZSB7XHJcbiAgICAgIEBleHRlbmQgLmV4dC1pY29uLXZsdW1lO1xyXG4gICAgfVxyXG4gIGltZy5pbWctbGFuZyB7XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcblxyXG59XHJcblxyXG59XHJcblxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=single-choice-single-choice-module.js.map