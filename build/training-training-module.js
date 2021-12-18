(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["training-training-module"],{

/***/ "CKRj":
/*!*********************************************!*\
  !*** ./src/app/training/training.module.ts ***!
  \*********************************************/
/*! exports provided: TrainingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPageModule", function() { return TrainingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _training_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./training-routing.module */ "zrNd");
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./training.page */ "ZD9I");







let TrainingPageModule = class TrainingPageModule {
};
TrainingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _training_routing_module__WEBPACK_IMPORTED_MODULE_5__["TrainingPageRoutingModule"],
        ],
        declarations: [_training_page__WEBPACK_IMPORTED_MODULE_6__["TrainingPage"]]
    })
], TrainingPageModule);



/***/ }),

/***/ "ZD9I":
/*!*******************************************!*\
  !*** ./src/app/training/training.page.ts ***!
  \*******************************************/
/*! exports provided: TrainingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPage", function() { return TrainingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_training_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./training.page.html */ "sPYe");
/* harmony import */ var _training_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./training.page.scss */ "kzDT");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/storage.service */ "fbMX");








let TrainingPage = class TrainingPage {
    constructor(storageService, route, router, toastController, navController) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
        this.chooseTraining = [
            {
                img: '../../assets/icon/puzzle.png',
                name: 'Puzzle Image',
                url: '/exercise/puzzle-image',
                exerciseId: 4,
                courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
            },
            {
                img: '../../assets/icon/abc-block.png',
                name: 'Puzzle Text',
                url: '/exercise/puzzle-text',
                exerciseId: 3,
                courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
            },
            {
                img: '../../assets/icon/notepad.png',
                name: 'Single Choice',
                url: '/exercise/single-choice',
                exerciseId: 1,
                courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
            },
            {
                img: '../../assets/icon/checklist.png',
                name: 'Multi Choice',
                url: '/exercise/multi-choice',
                exerciseId: 2,
                courseId: JSON.parse(this.route.snapshot.paramMap.get('courseId'))
            }
        ];
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        if (!this.route.snapshot.paramMap.get('courseId')) {
            this.router.navigate(["courses/tabs/my-courses"]);
        }
    }
    goToCatExercise(url, exerciseId, courseId) {
        this.router.navigate([url, { exerciseId, courseId }]);
        // this.navController.navigateRoot(url + ';' + exerciseId + ';' + exerciseId );
        // if(courseId === null || courseId === undefined || courseId === '') {
        //   this.errorMessage('please choose course ');
        //   this.router.navigate(['/courses/tabs/my-courses']);
        // }
    }
    errorMessage(msg) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.audio.play();
            const toast = yield this.toastController.create({
                message: msg,
                duration: 4000,
                cssClass: 'ion-error',
                color: 'danger',
            });
            toast.present();
        });
    }
};
TrainingPage.ctorParameters = () => [
    { type: _shared_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] }
];
TrainingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-training',
        template: _raw_loader_training_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_training_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TrainingPage);



/***/ }),

/***/ "kzDT":
/*!*********************************************!*\
  !*** ./src/app/training/training.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .icon-sound .img-volume {\n  width: 24px;\n  height: 24px;\n}\n\n.img-course-intro {\n  margin-bottom: 30px;\n}\n\n.img-course-intro ion-row {\n  justify-content: center;\n}\n\n.icon-sound {\n  background-color: #A7F781;\n  border: 3px dotted #fff;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  margin: auto;\n  inset: 0;\n}\n\n/* header Top */\n\nion-icon {\n  font-size: 35px;\n}\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 15px;\n  padding-left: 10px;\n}\n\n/* end header top */\n\nion-tabs ion-icon {\n  color: #fff;\n  font-size: 22px;\n}\n\nion-tabs ion-label {\n  font-size: 18px;\n  font-weight: 400;\n  text-transform: uppercase;\n  padding-top: 0;\n}\n\nion-button {\n  width: 53px;\n  height: 53px;\n  --background: #A7F781;\n  border: 1px solid #fff;\n}\n\nion-icon {\n  --color: var(--ion-color-second-app);\n  font-size: 20px;\n}\n\nion-tab-button.tab-selected ion-label {\n  color: #A7F781 !important;\n  font-weight: bold;\n}\n\nion-tab-button.tab-selected ion-icon {\n  color: #A7F781 !important;\n}\n\nh3.training-title {\n  font-size: 20px;\n  color: var(--ion-color-second-app);\n  font-weight: 600;\n  margin: 0 0 30px 0;\n  text-align: center;\n  text-transform: capitalize;\n}\n\n.col-block {\n  background-color: #fff;\n  -o-box-shadow: 2px 3px 5px 0px #0000001A;\n  box-shadow: 2px 3px 5px 0px #0000001A;\n  text-align: center;\n  margin: 10px auto;\n  max-width: 80%;\n  padding: 15px 0;\n  border-radius: 10px;\n  cursor: pointer;\n}\n\n.col-block ion-img {\n  width: 30px;\n  height: auto;\n  margin: 10px auto;\n}\n\n.col-block ion-text {\n  color: var(--ion-color-second-app);\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRyYWluaW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsdUJBQUE7QUFBSjs7QUFJRTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0FBREo7O0FBVUEsZUFBQTs7QUFDQTtFQUFVLGVBQUE7QUFQVjs7QUFTQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFORjs7QUFVQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBUEY7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFQSjs7QUFVRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVJKOztBQVlBLG1CQUFBOztBQUVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFWRjs7QUFhQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQVZGOztBQW1CQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQWhCRjs7QUFvQkE7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7QUFqQkY7O0FBc0JBO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtBQW5CRjs7QUFzQkE7RUFDRSx5QkFBQTtBQW5CRjs7QUFzQkE7RUFDRSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQW5CRjs7QUF1QkE7RUFDRSxzQkFBQTtFQUdBLHdDQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFwQkY7O0FBc0JFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQXBCSjs7QUF1QkU7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQXJCSjs7QUF5QkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQXRCRiIsImZpbGUiOiJ0cmFpbmluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXh0LWljb24tdmx1bWUge1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuXHJcbi5pbWctY291cnNlLWludHJvIHtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICBpb24tcm93IHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuICAuaWNvbi1zb3VuZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQTdGNzgxO1xyXG4gICAgYm9yZGVyOiAzcHggZG90dGVkICNmZmY7XHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBpbnNldDogMDtcclxuXHJcbiAgICAuaW1nLXZvbHVtZSB7XHJcbiAgICAgIEBleHRlbmQgLmV4dC1pY29uLXZsdW1lO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxuLyogaGVhZGVyIFRvcCAqL1xyXG5pb24taWNvbiB7Zm9udC1zaXplOiAzNXB4O31cclxuXHJcbmlvbi1oZWFkZXIgaW9uLWltZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1nLXByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLyogZW5kIGhlYWRlciB0b3AgKi9cclxuXHJcbmlvbi10YWJzIGlvbi1pY29uIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDIycHg7XHJcbn1cclxuXHJcbmlvbi10YWJzIGlvbi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBwYWRkaW5nLXRvcDogMFxyXG59XHJcblxyXG4vLyBpb24tdGFiLWJ1dHRvbiB7XHJcbi8vICAgLS1jb2xvci1zZWxlY3RlZDogI2ZmZjtcclxuLy8gICAtLWJhY2tncm91bmQtZm9jdXNlZDogI2ZmZjtcclxuLy8gfVxyXG5cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiA1M3B4O1xyXG4gIGhlaWdodDogNTNweDtcclxuICAtLWJhY2tncm91bmQ6ICNBN0Y3ODE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcclxuXHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbmlvbi10YWItYnV0dG9uLnRhYi1zZWxlY3RlZCBpb24tbGFiZWwge1xyXG4gIGNvbG9yOiAjQTdGNzgxIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkIGlvbi1pY29uIHtcclxuICBjb2xvcjogI0E3Rjc4MSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmgzLnRyYWluaW5nLXRpdGxlIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIG1hcmdpbjogMCAwIDMwcHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG59XHJcblxyXG4uY29sLWJsb2NrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMnB4IDNweCA1cHggMHB4ICMwMDAwMDAxQTtcclxuICAtbW96LWJveC1zaGFkb3c6IDJweCAzcHggNXB4IDBweCAjMDAwMDAwMUE7XHJcbiAgLW8tYm94LXNoYWRvdzogMnB4IDNweCA1cHggMHB4ICMwMDAwMDAxQTtcclxuICBib3gtc2hhZG93OiAycHggM3B4IDVweCAwcHggIzAwMDAwMDFBO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEwcHggYXV0bztcclxuICBtYXgtd2lkdGg6IDgwJTtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIGlvbi1pbWcge1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICB9XHJcblxyXG4gIGlvbi10ZXh0IHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmltZy1sYW5nYXVnZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTNweDtcclxuICB0b3A6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "sPYe":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/training.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"course\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"courses/tabs/my-courses\"> </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n    <div class=\"img-profile\">\r\n      <ion-avatar slot=\"end\">\r\n        <img *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\r\n        <img *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\r\n        src=\"../../../assets/images/image profille (1).png\">\r\n      </ion-avatar>\r\n      <ion-label>{{ userInfo.firstname + ' ' +  userInfo.lastname }}</ion-label>\r\n    </div>\r\n\r\n    <ion-avatar class=\"ion-margin-end\"  slot=\"end\">\r\n      <img class=\"img-langauge\" [src]=\"userInfo.languageIcon\">\r\n    </ion-avatar>  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<!-- <ion-toolbar>\r\n  <ion-title>\r\n    start training\r\n  </ion-title>\r\n</ion-toolbar> -->\r\n\r\n<ion-content>\r\n\r\n  <ion-grid class=\"img-course-intro\">\r\n    <ion-row>\r\n      <ion-col size=\"10\" size-lg=\"4\">\r\n        <ion-img src=\"../../../assets/images/img-intro.png\"></ion-img>\r\n        <div class=\"icon-sound\">\r\n          <div class=\"img-volume\">\r\n            <ion-img\r\n            class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__infinite\" src=\"../../../assets/icon/Vector.png\">\r\n          </ion-img>\r\n          </div>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-grid>\r\n    <h3 class=\"training-title ion-text-center\"> Please Choose Exercise </h3>\r\n    <ion-row\r\n\r\n     class=\"ion-align-self-center\">\r\n      <ion-col\r\n        *ngFor=\"let item of chooseTraining\" size=\"6\"\r\n        (click)=\"goToCatExercise(item.url, item.exerciseId, item.courseId)\">\r\n\r\n        <div class=\"col-block\">\r\n          <ion-img [src]=\"item.img\"></ion-img>\r\n          <ion-text><a> {{item.name}} </a></ion-text>\r\n        </div>\r\n\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "zrNd":
/*!*****************************************************!*\
  !*** ./src/app/training/training-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TrainingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingPageRoutingModule", function() { return TrainingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _training_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./training.page */ "ZD9I");




const routes = [
    {
        path: '',
        component: _training_page__WEBPACK_IMPORTED_MODULE_3__["TrainingPage"]
    },
    {
        path: 'single-choice',
        loadChildren: () => Promise.all(/*! import() | single-choice-single-choice-module */[__webpack_require__.e("common"), __webpack_require__.e("single-choice-single-choice-module")]).then(__webpack_require__.bind(null, /*! ./single-choice/single-choice.module */ "crrd")).then(m => m.SingleChoicePageModule)
    },
    {
        path: 'multi-choice',
        loadChildren: () => Promise.all(/*! import() | multi-choice-multi-choice-module */[__webpack_require__.e("common"), __webpack_require__.e("multi-choice-multi-choice-module")]).then(__webpack_require__.bind(null, /*! ./multi-choice/multi-choice.module */ "fQ6p")).then(m => m.MultiChoicePageModule)
    },
    {
        path: 'puzzle-text',
        loadChildren: () => Promise.all(/*! import() | puzzle-text-puzzle-text-module */[__webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~da13af96"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~30de349d"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-text-puzzle-text-module~sign-up~b0779ada"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-mo~a5320f4c"), __webpack_require__.e("default~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-module~test-course-test-course-module"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-text-puzzle-text-module~sign-up-sign-up-module"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-text-puzzle-text-module"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-text-puzzle-text-module"), __webpack_require__.e("common"), __webpack_require__.e("puzzle-text-puzzle-text-module")]).then(__webpack_require__.bind(null, /*! ./puzzle-text/puzzle-text.module */ "TMC7")).then(m => m.PuzzleTextPageModule)
    },
    {
        path: 'puzzle-image',
        loadChildren: () => Promise.all(/*! import() | puzzle-image-puzzle-image-module */[__webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~da13af96"), __webpack_require__.e("default~all-courses-all-courses-module~course-details-course-details-module~course-material-course-m~cec1ce6f"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~30de349d"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-mo~a5320f4c"), __webpack_require__.e("default~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-module~test-course-test-course-module"), __webpack_require__.e("common"), __webpack_require__.e("puzzle-image-puzzle-image-module")]).then(__webpack_require__.bind(null, /*! ./puzzle-image/puzzle-image.module */ "PFl2")).then(m => m.PuzzleImagePageModule)
    },
    {
        path: 'test-course',
        loadChildren: () => Promise.all(/*! import() | test-course-test-course-module */[__webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~da13af96"), __webpack_require__.e("default~apply-course-apply-course-module~pages-faq-faq-module~puzzle-image-puzzle-image-module~puzzl~30de349d"), __webpack_require__.e("default~apply-course-apply-course-module~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-mo~a5320f4c"), __webpack_require__.e("default~puzzle-image-puzzle-image-module~puzzle-text-puzzle-text-module~test-course-test-course-module"), __webpack_require__.e("common"), __webpack_require__.e("test-course-test-course-module")]).then(__webpack_require__.bind(null, /*! ./test-course/test-course.module */ "MrdW")).then(m => m.TestCoursePageModule)
    },
    {
        path: 'finished-test',
        loadChildren: () => __webpack_require__.e(/*! import() | finished-test-finished-test-module */ "finished-test-finished-test-module").then(__webpack_require__.bind(null, /*! ./finished-test/finished-test.module */ "3KrB")).then(m => m.FinishedTestPageModule)
    },
];
let TrainingPageRoutingModule = class TrainingPageRoutingModule {
};
TrainingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TrainingPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=training-training-module.js.map