(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["multi-choice-multi-choice-module"],{

/***/ "Ahbo":
/*!************************************************************!*\
  !*** ./src/app/training/multi-choice/multi-choice.page.ts ***!
  \************************************************************/
/*! exports provided: MultiChoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiChoicePage", function() { return MultiChoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_multi_choice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./multi-choice.page.html */ "tDHn");
/* harmony import */ var _multi_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multi-choice.page.scss */ "gNL/");
/* harmony import */ var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../help-modal/help-modal.component */ "kxUF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/models/audioObject */ "9rX2");
/* harmony import */ var src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/exercise.service */ "4YRF");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");











let MultiChoicePage = class MultiChoicePage {
    constructor(toastController, storageService, exerciseService, route, fb, navController, router, modalController) {
        this.toastController = toastController;
        this.storageService = storageService;
        this.exerciseService = exerciseService;
        this.route = route;
        this.fb = fb;
        this.navController = navController;
        this.router = router;
        this.modalController = modalController;
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
        this.checkQuestion = true;
        this.isLoading = false;
        this.lengthQuestion = 0;
        this.limit = 1;
        this.limitAnswer = 4;
        this.offsetAnswer = 0;
        this.currentIndex = 0;
        this.subs = [];
        this.resultAnswer = null;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
        };
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        // ** get courseId And exerciseId
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');
        // ** get all items question
        this.getQuestionAndAnswerMultiChoice();
        // ** get all answers by multiChoiceId
        // this.getAnswersMultiChoice();
        this.buildMultiForm();
    }
    // ** get question from api
    getQuestionAndAnswerMultiChoice() {
        this.isLoading = true;
        this.subs.push(this.exerciseService
            .getCourseExercise(this.exerciseType, this.courseId, this.currentIndex, this.limit)
            .subscribe((questionAndAnswerItems) => {
            this.isLoading = false;
            this.exerciseItems = questionAndAnswerItems['result'];
            this.exerciseItems.map((answerItems) => {
                this.resultAnswerItems = answerItems['multiChoiceAnswers'];
            });
            if (this.exerciseItems[0].multiChoiceTranslations[0].voicePath !=
                null &&
                this.exerciseItems[0].multiChoiceTranslations[0].voicePath != '') {
                this.exerciseItems[0].audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                this.exerciseItems[0].audioElement.status = false;
                var audio = new Audio(`${this.exerciseItems[0].multiChoiceTranslations[0].voicePath}`);
                this.exerciseItems[0].audioElement.audio = audio;
                this.exerciseItems[0].audioElement.audio.load();
            }
            this.lengthQuestion = questionAndAnswerItems['length'];
            if (this.lengthQuestion == 0) {
                this.errorMessage('There are no available questions in this exercise');
                setTimeout(() => {
                    this.navController.navigateRoot([
                        '/exercise',
                        { courseId: this.courseId },
                    ]);
                }, 100);
            }
            this.resultAnswerItems.forEach((element) => {
                element.audioElement = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                element.audioElement.status = false;
                if (element.multiChoiceAnswerTranslations[0].voicePath != null &&
                    element.multiChoiceAnswerTranslations[0].voicePath != '') {
                    element.audioElement.id = element.id;
                    element.audioElement.audio = new Audio(`${element.multiChoiceAnswerTranslations[0].voicePath}`);
                    element.audioElement.audio.load();
                }
                else {
                    element.audioElement.audio = null;
                }
                if (this.exerciseItems[0].voiceDanishPath != null && this.exerciseItems[0].voiceDanishPath != "") {
                    this.exerciseItems[0].audioElementDanish = new src_app_shared_models_audioObject__WEBPACK_IMPORTED_MODULE_8__["AudioElement"]();
                    this.exerciseItems[0].audioElementDanish.status = false;
                    var audio = new Audio(`${this.exerciseItems[0].voiceDanishPath}`);
                    this.exerciseItems[0].audioElementDanish.audio = audio;
                    this.exerciseItems[0].audioElementDanish.audio.load();
                }
            });
        }));
    }
    // ** Build Single Choice Form
    buildMultiForm() {
        this.multiForm = this.fb.group({
            answer: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])],
        });
    }
    // ** Get Current Index
    getCurrentIndex() {
        this.slides
            .getActiveIndex()
            .then((current) => (this.currentIndex = current));
    }
    // ** Move to Next slide
    slideNext(questionId, answerId) {
        this.subs.push(this.exerciseService
            .checkAnswerMultiChoise(questionId, answerId)
            .subscribe((response) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.resultAnswer = response['success'];
            if (this.resultAnswer === true) {
                // ** message and voice success
                this.currentIndex += 1;
                this.successMessage('the answer is correct');
                this.isLoading = true;
                this.stopAllAudios();
                this.multiForm.reset();
                this.getQuestionAndAnswerMultiChoice();
                this.slides.slideNext();
                if (this.currentIndex === this.lengthQuestion) {
                    this.successMessage('Thanks for resolving questions');
                    setTimeout(() => {
                        this.navController.navigateRoot([
                            '/exercise',
                            { courseId: this.courseId },
                        ]);
                    }, 100);
                }
            }
            else if (this.resultAnswer === false) {
                // ** message and voice error
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
                duration: 3000,
                cssClass: 'ion-success',
                color: 'success',
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
                duration: 3000,
                cssClass: 'ion-error',
                color: 'danger',
            });
            toast.present();
        });
    }
    playAudio(answer, type, langType) {
        var _a, _b;
        // playing question sound
        if (type == 1) {
            //stoping answer voices
            this.stopAnswerVoices();
            if (langType == "native") {
                if (((_a = this.exerciseItems[0].audioElementDanish) === null || _a === void 0 ? void 0 : _a.status) == true) {
                    this.exerciseItems[0].audioElementDanish.audio.pause();
                    this.exerciseItems[0].audioElementDanish.status = false;
                }
                if (this.exerciseItems[0].audioElement.status == false) {
                    this.exerciseItems[0].audioElement.audio.play();
                    this.exerciseItems[0].audioElement.status = true;
                }
                else {
                    this.exerciseItems[0].audioElement.audio.pause();
                    this.exerciseItems[0].audioElement.status = false;
                }
            }
            else {
                if (this.exerciseItems[0].audioElementDanish.status == false) {
                    if (((_b = this.exerciseItems[0].audioElement) === null || _b === void 0 ? void 0 : _b.status) == true) {
                        this.exerciseItems[0].audioElement.audio.pause();
                        this.exerciseItems[0].audioElement.status = false;
                    }
                    this.exerciseItems[0].audioElementDanish.audio.play();
                    this.exerciseItems[0].audioElementDanish.status = true;
                }
                else {
                    this.exerciseItems[0].audioElementDanish.audio.pause();
                    this.exerciseItems[0].audioElementDanish.status = false;
                }
            }
        }
        else {
            this.stopQuestionVoice();
            this.stopAnswerVoices(answer);
            var audioElement = answer.audioElement;
            if (audioElement) {
                if (audioElement.status == false) {
                    audioElement.audio.play();
                    answer.audioElement.status = true;
                }
                else {
                    audioElement.audio.pause();
                    answer.audioElement.status = false;
                }
            }
        }
    }
    stopAllAudios() {
        this.stopQuestionVoice();
        this.stopAnswerVoices();
    }
    stopAnswerVoices(answer) {
        if (answer) {
            this.resultAnswerItems
                .filter((c) => c.id != answer.id)
                .forEach((element) => {
                if (element.audioElement) {
                    if (element.audioElement.status == true) {
                        element.audioElement.audio.pause();
                        element.audioElement.status = false;
                    }
                }
            });
        }
        else {
            this.resultAnswerItems.forEach((element) => {
                if (element.audioElement) {
                    if (element.audioElement.status == true) {
                        element.audioElement.audio.pause();
                        element.audioElement.status = false;
                    }
                }
            });
        }
    }
    stopQuestionVoice() {
        //Stoping Voice of question
        if (this.exerciseItems[0].audioElement) {
            this.exerciseItems[0].audioElement.audio.pause();
            this.exerciseItems[0].audioElement.status = false;
        }
    }
    slidePrev() {
        this.currentIndex -= 1;
        this.getQuestionAndAnswerMultiChoice();
        this.slides.slidePrev();
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_3__["HelpModalComponent"],
                componentProps: {
                    "modalLink": "https://khrs-admin.sdex.online/assets/tutorials/single_choice_tutorial.mp4",
                    "modalTitle": "Multi Choice Tutorial"
                }
            });
            return yield modal.present();
        });
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => {
            sub.unsubscribe();
        });
    }
};
MultiChoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_10__["StorageService"] },
    { type: src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_9__["ExerciseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
MultiChoicePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['slides',] }]
};
MultiChoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-multi-choice',
        template: _raw_loader_multi_choice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_multi_choice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MultiChoicePage);



/***/ }),

/***/ "fQ6p":
/*!**************************************************************!*\
  !*** ./src/app/training/multi-choice/multi-choice.module.ts ***!
  \**************************************************************/
/*! exports provided: MultiChoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiChoicePageModule", function() { return MultiChoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../help-modal/help-modal.module */ "lCi7");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _multi_choice_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./multi-choice-routing.module */ "rZZZ");
/* harmony import */ var _multi_choice_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./multi-choice.page */ "Ahbo");








let MultiChoicePageModule = class MultiChoicePageModule {
};
MultiChoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _multi_choice_routing_module__WEBPACK_IMPORTED_MODULE_6__["MultiChoicePageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_4__["HelpModalModule"]
        ],
        declarations: [_multi_choice_page__WEBPACK_IMPORTED_MODULE_7__["MultiChoicePage"]]
    })
], MultiChoicePageModule);



/***/ }),

/***/ "gNL/":
/*!**************************************************************!*\
  !*** ./src/app/training/multi-choice/multi-choice.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .sound-question .img-volume, .multi-choice .sound .img-volume {\n  color: var(--ion-color-second-app);\n  font-size: 28px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n\n/* end header top */\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\n.multi-choice ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 18px;\n  font-weight: 600;\n  text-align: center;\n  text-transform: capitalize;\n  margin: 20px 0 50px 0;\n}\n\n.multi-choice ion-label {\n  color: var(--ion-color-second-app);\n  font-size: 14px;\n  font-weight: 500;\n  margin: 10px 0;\n  max-width: 60%;\n}\n\n.multi-choice ion-radio {\n  --color: var(--ion-color-second-app);\n  margin: 20px 0;\n}\n\n.multi-choice .sound {\n  border: 2px dotted var(--ion-color-second-app);\n  border-radius: 10px;\n  display: flex;\n  justify-content: space-evenly;\n  min-width: 27%;\n  max-width: 80%;\n  padding: 7px 0;\n  margin: 0px 0 0 60px;\n}\n\n.multi-choice .sound img.langauge-img {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.hideButtonNext {\n  display: none;\n}\n\n.showButtonNext {\n  display: block;\n}\n\n.total-result {\n  font-size: 18px;\n  font-weight: 900;\n  color: var(--ion-color-second-app);\n  text-align: center;\n  margin-left: 50px;\n}\n\n.sound-question {\n  border: 2px solid var(--ion-color-second-app);\n  border-radius: 50px;\n  display: flex;\n  justify-content: space-around;\n  padding: 7px 0;\n  margin-left: 10px;\n  margin-top: 30px;\n}\n\n.sound-question img.danish-flag {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n\n.sound-question img.langauge-img {\n  width: 30px;\n  height: auto;\n  max-width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtdWx0aS1jaG9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0UsZUFBQTs7QUFDQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFETjs7QUFJSTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQUZOOztBQU1FLG1CQUFBOztBQUlFO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQU5OOztBQVlJO0VBQ0Usa0NBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFUTjs7QUFZSTtFQUNFLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFWTjs7QUFhSTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBQVhOOztBQWdCRTtFQUNFLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQWRKOztBQWdCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQWROOztBQXlCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXZCSjs7QUEwQkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQXZCSjs7QUEwQkU7RUFDRSxhQUFBO0FBdkJKOztBQTBCRTtFQUNFLGNBQUE7QUF2Qko7O0FBMEJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBdkJKOztBQTRCRTtFQUNFLDZDQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFJQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQTVCSjs7QUE4Qkk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUE1Qk47O0FBK0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBN0JOIiwiZmlsZSI6Im11bHRpLWNob2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAuZXh0LWljb24tdmx1bWUge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcblxyXG4gIC8qIGhlYWRlciBUb3AgKi9cclxuICBpb24taGVhZGVyIGlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDM1cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5pbWctcHJvZmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGlvbi1hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNjBweDtcclxuICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyogZW5kIGhlYWRlciB0b3AgKi9cclxuXHJcbiAgaW9uLXRvb2xiYXIge1xyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubXVsdGktY2hvaWNlIHtcclxuXHJcbiAgICBpb24tdGV4dHtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICBtYXJnaW46IDIwcHggMCA1MHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBtYXgtd2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tcmFkaW8ge1xyXG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gIC5zb3VuZCB7XHJcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIG1pbi13aWR0aDogMjclO1xyXG4gICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIG1hcmdpbjogMHB4IDAgMCA2MHB4O1xyXG5cclxuICAgIGltZy5sYW5nYXVnZS1pbWd7XHJcbiAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW1nLXZvbHVtZSB7XHJcbiAgICAgIEBleHRlbmQgLmV4dC1pY29uLXZsdW1lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgfVxyXG5cclxuICAudG90YWwtcmVzdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1nLWxhbmdhdWdlIHtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEzcHg7XHJcbiAgICB0b3A6IDE0cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIH1cclxuXHJcbiAgLmhpZGVCdXR0b25OZXh0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2hvd0J1dHRvbk5leHQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAudG90YWwtcmVzdWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC5zb3VuZC1xdWVzdGlvbiB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgLy8gd2lkdGg6IDIwJTtcclxuICAgIC8vIG1pbi13aWR0aDogMjclO1xyXG4gICAgLy8gbWF4LXdpZHRoOiA4MCU7XHJcbiAgICBwYWRkaW5nOiA3cHggMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuXHJcbiAgICBpbWcuZGFuaXNoLWZsYWcge1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIH1cclxuXHJcbiAgICBpbWcubGFuZ2F1Z2UtaW1ne1xyXG4gICAgICB3aWR0aDogMzBweDtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmltZy12b2x1bWUge1xyXG4gICAgICBAZXh0ZW5kIC5leHQtaWNvbi12bHVtZTtcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "rZZZ":
/*!**********************************************************************!*\
  !*** ./src/app/training/multi-choice/multi-choice-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: MultiChoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiChoicePageRoutingModule", function() { return MultiChoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _multi_choice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./multi-choice.page */ "Ahbo");




const routes = [
    {
        path: '',
        component: _multi_choice_page__WEBPACK_IMPORTED_MODULE_3__["MultiChoicePage"]
    }
];
let MultiChoicePageRoutingModule = class MultiChoicePageRoutingModule {
};
MultiChoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MultiChoicePageRoutingModule);



/***/ }),

/***/ "tDHn":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/multi-choice/multi-choice.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"course\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/exercise\"> </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n    <div class=\"img-profile\">\r\n      <ion-avatar slot=\"end\">\r\n        <img *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\r\n        <img *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\r\n        src=\"../../../assets/images/image profille (1).png\">\r\n      </ion-avatar>\r\n      <ion-label>{{ userInfo.firstname + ' ' +  userInfo.lastname }}</ion-label>\r\n    </div>\r\n\r\n    <ion-avatar class=\"ion-margin-end\"  slot=\"end\">\r\n      <img class=\"img-langauge\" [src]=\"userInfo.languageIcon\">\r\n    </ion-avatar>  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-toolbar class=\"ios-toolbar\">\r\n  <ion-title>\r\n    multi choice\r\n    <ion-text class=\"total-result\"> {{ lengthQuestion + ' / ' + (currentIndex+1) }} </ion-text>\r\n  </ion-title>\r\n  <ion-icon slot=\"end\" (click)=\"presentModal()\"  name=\"help-circle-outline\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\r\n\r\n<form *ngIf=\"exerciseItems\" [formGroup]=\"multiForm\">\r\n\r\n  <ion-slides [pager]=\"false\" #slides [options]=\"slideOpts\">\r\n  <ion-slide >\r\n\r\n  <ion-grid>\r\n    <ion-list class=\"multi-choice\">\r\n      <ion-grid class=\"sound-group\">\r\n        <ion-row>\r\n         <ion-col size=\"4\">\r\n            <div *ngIf=\"exerciseItems[0].voiceDanishPath\">\r\n              <div class=\"sound-question\">\r\n                  <div class=\"img-volume\">\r\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!exerciseItems[0].audioElementDanish.status? 'play' : 'stop'\" (click)=\"playAudio(exerciseItems[0].audioElementDanish,1)\">\r\n                    </ion-icon>\r\n                  </div>\r\n                <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\r\n              </div>\r\n            </div>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <div *ngIf=\"exerciseItems[0].multiChoiceTranslations[0]?.voicePath\">\r\n          <div class=\"sound-question\">\r\n              <div class=\"img-volume\">\r\n                <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!exerciseItems[0].audioElement.status? 'play' : 'stop'\" (click)=\"playAudio(exerciseItems[0].audioElement,1,'native')\">\r\n                </ion-icon>\r\n              </div>\r\n            <img class=\"img-lang\" [src]=\"userInfo.languageIcon\" alt=\"\" />\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n      </ion-row>\r\n      </ion-grid>\r\n\r\n      <ion-list-header>\r\n\r\n        <ion-text>\r\n          {{ exerciseItems[0].question }}\r\n        </ion-text>\r\n\r\n      </ion-list-header>\r\n\r\n      <ion-radio-group formControlName=\"answer\">\r\n        <div class=\"answer\" *ngFor=\"let item of resultAnswerItems\">\r\n        <ion-item (click)=\"playAudio(item,2)\">\r\n          <ion-label>{{ item.answer }}</ion-label>\r\n          <ion-radio [value]=\"item.id\"></ion-radio>\r\n          <div class=\"sound\" *ngIf=\"item.audioElement.audio\">\r\n            <div class=\"sound-bg\">\r\n                  <div class=\"img-volume\">\r\n                    <ion-icon  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" [name]=\"!item.audioElement.status? 'play' : 'stop'\" >\r\n                    </ion-icon>\r\n                  </div>\r\n              </div>\r\n              <img class=\"langauge-img\" [src]=\"userInfo.languageIcon\" alt=\"\" />\r\n            </div>\r\n      </ion-item>\r\n\r\n    </div>\r\n  </ion-radio-group>\r\n\r\n      <ion-grid>\r\n        <ion-row class=\"ion-padding ion-justify-content-center\">\r\n          <ion-col size=\"12\" size-lg=\"6\">\r\n            <ion-button\r\n              [ngClass]=\"{'hideButtonNext': multiForm.invalid}\"\r\n              (click)=\"slidePrev()\">\r\n                Prev\r\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n\r\n          <ion-col size=\"12\" size-lg=\"6\">\r\n            <ion-button\r\n            [ngClass]=\"{'hideButtonNext': multiForm.invalid }\"\r\n            (click)=\"slideNext(exerciseItems[0].id, multiForm.value.answer)\">\r\n              Next\r\n              <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n\r\n      </ion-grid>\r\n\r\n    </ion-list>\r\n  </ion-grid>\r\n</ion-slide>\r\n</ion-slides>\r\n</form>\r\n</ion-content>\r\n\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=multi-choice-multi-choice-module.js.map