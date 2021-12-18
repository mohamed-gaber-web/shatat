(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["puzzle-image-puzzle-image-module"],{

/***/ "NC7O":
/*!******************************************************************!*\
  !*** ./node_modules/cdk-drag-scroll/fesm2015/cdk-drag-scroll.js ***!
  \******************************************************************/
/*! exports provided: AutoScroll, DragDebugService, DragScrollDirective, DragScrollModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoScroll", function() { return AutoScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDebugService", function() { return DragDebugService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollDirective", function() { return DragScrollDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragScrollModule", function() { return DragScrollModule; });
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutoScroll {
    /**
     * @param {?} container
     * @param {?=} scrollCallback
     */
    constructor(container, scrollCallback) {
        this.container = container;
        this.scrollCallback = scrollCallback;
        this.margin = 30;
        this.maxSpeed = 25;
        this.point = { x: 0, y: 0 };
        this.boundaryRect = this.container.getBoundingClientRect();
    }
    /**
     * @param {?} point
     * @return {?}
     */
    onMove(point) {
        this.point = point;
        cancelAnimationFrame(this.animationFrame);
        this.animationFrame = requestAnimationFrame((/**
         * @return {?}
         */
        () => this.scrollTick()));
    }
    /**
     * @return {?}
     */
    scrollTick() {
        cancelAnimationFrame(this.animationFrame);
        if (this.autoScroll()) {
            this.animationFrame = requestAnimationFrame((/**
             * @return {?}
             */
            () => this.scrollTick()));
        }
    }
    /**
     * @return {?}
     */
    autoScroll() {
        /** @type {?} */
        let scrollx;
        /** @type {?} */
        let scrolly;
        if (this.point.x < this.boundaryRect.left + this.margin) {
            scrollx = Math.floor(Math.max(-1, (this.point.x - this.boundaryRect.left) / this.margin - 1) * this.maxSpeed);
        }
        else if (this.point.x > this.boundaryRect.right - this.margin) {
            scrollx = Math.ceil(Math.min(1, (this.point.x - this.boundaryRect.right) / this.margin + 1) * this.maxSpeed);
        }
        else {
            scrollx = 0;
        }
        if (this.point.y < this.boundaryRect.top + this.margin) {
            scrolly = Math.floor(Math.max(-1, (this.point.y - this.boundaryRect.top) / this.margin - 1) *
                this.maxSpeed);
        }
        else if (this.point.y > this.boundaryRect.bottom - this.margin) {
            scrolly = Math.ceil(Math.min(1, (this.point.y - this.boundaryRect.bottom) / this.margin + 1) * this.maxSpeed);
        }
        else {
            scrolly = 0;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (scrolly) {
                this.scrollY(scrolly);
            }
            if (scrollx) {
                this.scrollX(scrollx);
            }
        }));
        return scrollx || scrolly;
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    scrollY(amount) {
        // ToDo for window: window.scrollTo(window.pageXOffset, window.pageYOffset + amount);
        this.container.scrollTop += amount;
        if (this.scrollCallback) {
            this.scrollCallback({ x: 0, y: amount });
        }
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    scrollX(amount) {
        // ToDo for window: window.scrollTo(window.pageXOffset + amount, window.pageYOffset);
        this.container.scrollLeft += amount;
        if (this.scrollCallback) {
            this.scrollCallback({
                x: amount,
                y: 0
            });
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        cancelAnimationFrame(this.animationFrame);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragDebugService {
    constructor() {
        this.debugInfo = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.enabled = false;
    }
    /**
     * @param {?} info
     * @return {?}
     */
    log(info) {
        this.debugInfo.next(info);
    }
    /**
     * @return {?}
     */
    reset() {
        this.debugInfo.next(null);
    }
}
DragDebugService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
DragDebugService.ctorParameters = () => [];
/** @nocollapse */ DragDebugService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function DragDebugService_Factory() { return new DragDebugService(); }, token: DragDebugService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 */
class DragScrollDirective {
    /**
     * @param {?} cdkDrag
     * @param {?} dragDebugService
     * @param {?} zone
     * @param {?} changeDetectorRef
     */
    constructor(cdkDrag, dragDebugService, zone, changeDetectorRef) {
        this.cdkDrag = cdkDrag;
        this.dragDebugService = dragDebugService;
        this.zone = zone;
        this.changeDetectorRef = changeDetectorRef;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.stopDragging$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lastScroll = {
            top: 0,
            left: 0
        };
        this.dragRef = this.cdkDrag['_dragRef'];
        if (this.dragRef) {
            this.zone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                this.dragRef.started.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    this.log('Started', event, this.dragRef.isDragging());
                    this.started();
                }));
                this.dragRef.ended.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    this.log('Ended', event);
                    this.ended();
                }));
                this.dragRef.entered.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    this.log('Entered', event);
                    this.entered();
                }));
                this.dragRef.exited.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((/**
                 * @param {?} event
                 * @return {?}
                 */
                event => {
                    this.log('Exited', event);
                    this.exited();
                }));
            }));
        }
        else {
            this.log('CdkDrag not found', this.cdkDrag, this.dragRef);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.dragConnectedIds) {
            if (this.dragRef.isDragging()) {
                // https://github.com/angular/material2/issues/15343
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.syncSiblings();
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.stopDragging$.next();
        this.stopDragging$.complete();
        this.destroyAutoScroll();
    }
    /**
     * @return {?}
     */
    started() {
        if (!this.scrollContainer) {
            return;
        }
        this.destroyAutoScroll();
        this.addDebugInfo();
        this.autoScroll = new AutoScroll(this.scrollContainer);
        this.lastScroll.top = this.scrollContainer.scrollTop;
        this.lastScroll.left = this.scrollContainer.scrollLeft;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(this.scrollContainer, 'scroll')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.stopDragging$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const deltaX = this.scrollContainer.scrollLeft - this.lastScroll.left;
            /** @type {?} */
            const deltaY = this.scrollContainer.scrollTop - this.lastScroll.top;
            if (deltaX || deltaY) {
                this.handleScroll(deltaX, deltaY);
            }
            this.lastScroll.top = this.scrollContainer.scrollTop;
            this.lastScroll.left = this.scrollContainer.scrollLeft;
        }));
        this.dragRef.moved
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.stopDragging$))
            .subscribe((/**
         * @param {?} e
         * @return {?}
         */
        e => {
            this.autoScroll.onMove(e.pointerPosition);
        }));
    }
    /**
     * @return {?}
     */
    ended() {
        this.destroyAutoScroll();
        this.stopDragging$.next();
        this.dragDebugService.reset();
    }
    /**
     * @return {?}
     */
    entered() {
        this.dragFixContainer();
    }
    /**
     * @return {?}
     */
    exited() {
        this.dragFixContainer();
    }
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    handleScroll(x, y) {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        // adjust containers
        this.adjustContainers();
        // adjust items
        this.adjustItems(x, y);
        // ToDo: better condition for changed items
        if (dropListRef._draggables.length > dropListRef._itemPositions.length) {
            this.syncItems();
        }
        this.addDebugInfo();
    }
    /**
     * @private
     * @return {?}
     */
    destroyAutoScroll() {
        if (this.autoScroll) {
            this.autoScroll.destroy();
            this.autoScroll = null;
        }
    }
    /**
     * @private
     * @return {?}
     */
    getDropListRef() {
        return this.dragRef['_dropContainer'];
    }
    /**
     * @private
     * @return {?}
     */
    addDebugInfo() {
        if (!this.dragDebugService.enabled) {
            return;
        }
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        /** @type {?} */
        const draws = [
            ...dropListRef._itemPositions.map((/**
             * @param {?} it
             * @return {?}
             */
            it => ({
                clientRect: it.clientRect,
                color: 'blue',
                id: it.drag.data.data.name
            }))),
            ...dropListRef._siblings.map((/**
             * @param {?} it
             * @return {?}
             */
            it => ({
                clientRect: it._clientRect,
                color: 'green',
                id: ''
            }))),
            {
                clientRect: dropListRef._clientRect,
                color: '#2FD1BB',
                id: ''
            }
        ];
        this.dragDebugService.log(draws.filter((/**
         * @param {?} d
         * @return {?}
         */
        d => d.clientRect)));
    }
    /**
     * @private
     * @return {?}
     */
    dragFixContainer() {
        // https://github.com/angular/material2/issues/15227
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const dropListRef = this.getDropListRef();
            dropListRef._cacheOwnPosition();
            this.addDebugInfo();
        }));
        // fix for issue when classes is not resetted
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    syncSiblings() {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        this.log('syncSiblings before', dropListRef._siblings.length);
        dropListRef.beforeStarted.next();
        this.log('syncSiblings after', dropListRef._siblings.length);
        this.adjustContainers();
    }
    /**
     * @private
     * @return {?}
     */
    syncItems() {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        /** @type {?} */
        const oldPositions = dropListRef._itemPositions;
        dropListRef._activeDraggables = dropListRef._draggables.slice();
        dropListRef._cacheItemPositions();
        /** @type {?} */
        const newPositions = dropListRef._itemPositions;
        dropListRef._itemPositions = [...oldPositions];
        newPositions.forEach((/**
         * @param {?} p
         * @return {?}
         */
        p => {
            if (!oldPositions.find((/**
             * @param {?} p1
             * @return {?}
             */
            p1 => p.drag === p1.drag))) {
                dropListRef._itemPositions.push(p);
            }
        }));
        dropListRef._activeDraggables.push(this.dragRef);
    }
    /**
     * @private
     * @return {?}
     */
    adjustContainers() {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        dropListRef._cacheOwnPosition();
        dropListRef._siblings.forEach((/**
         * @param {?} sibling
         * @return {?}
         */
        sibling => {
            sibling._cacheOwnPosition();
        }));
    }
    /**
     * @private
     * @param {?} deltaX
     * @param {?} deltaY
     * @return {?}
     */
    adjustItems(deltaX, deltaY) {
        /** @type {?} */
        const dropListRef = this.getDropListRef();
        dropListRef._itemPositions.forEach((/**
         * @param {?} it
         * @return {?}
         */
        it => {
            it.originalRect = it.originalRect || it.clientRect;
            it.clientRect = Object.assign({}, it.clientRect, { left: it.clientRect.left - deltaX, right: it.clientRect.right - deltaX, top: it.clientRect.top - deltaY, bottom: it.clientRect.bottom - deltaY });
        }));
    }
    /**
     * @private
     * @param {?=} message
     * @param {...?} optionalParams
     * @return {?}
     */
    log(message, ...optionalParams) {
        if (this.dragDebugService.enabled) {
            console.log(message, optionalParams);
        }
    }
}
DragScrollDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[vsDragScroll]',
                exportAs: 'vsDragScroll'
            },] }
];
/** @nocollapse */
DragScrollDirective.ctorParameters = () => [
    { type: _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["CdkDrag"] },
    { type: DragDebugService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
DragScrollDirective.propDecorators = {
    dragConnectedIds: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['vsDragScrollConnectedTo',] }],
    scrollContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['vsDragScrollContainer',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DragScrollModule {
}
DragScrollModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                imports: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_0__["DragDropModule"]],
                declarations: [DragScrollDirective],
                exports: [DragScrollDirective]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=cdk-drag-scroll.js.map


/***/ }),

/***/ "NecZ":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/puzzle-image/puzzle-image.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"course\">\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/exercise\"> </ion-back-button>\r\n    </ion-buttons>\r\n\r\n    <ion-menu-button slot=\"start\"></ion-menu-button>\r\n\r\n    <div class=\"img-profile\">\r\n      <ion-avatar slot=\"end\">\r\n        <img loading=\"lazy\" *ngIf=\"userInfo.imagePath\" [src]=\"userInfo.imagePath\">\r\n        <img loading=\"lazy\" *ngIf=\"userInfo === '' || userInfo.imagePath === null || userInfo.imagePath === undefined\"\r\n        src=\"../../../assets/images/image profille (1).png\">\r\n      </ion-avatar>\r\n      <ion-label>{{ userInfo.firstname + ' ' +  userInfo.lastname }}</ion-label>\r\n    </div>\r\n\r\n    <ion-avatar class=\"ion-margin-end\"  slot=\"end\">\r\n      <img class=\"img-langauge\" [src]=\"userInfo.languageIcon\">\r\n    </ion-avatar>  </ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n<ion-toolbar class=\"ios-toolbar\">\r\n  <ion-title class=\"ion-text-center\">\r\n    Puzzle with image\r\n    <ion-text class=\"total-result\"> {{ lengthQuestion + ' / ' + (currentIndex+1) }} </ion-text>\r\n  </ion-title>\r\n  <ion-icon slot=\"end\" (click)=\"presentModal()\"  name=\"help-circle-outline\"></ion-icon>\r\n</ion-toolbar>\r\n\r\n<ion-content>\r\n\r\n  <ion-spinner *ngIf='isLoading' color=\"primary\" name=\"crescent\"></ion-spinner>\r\n\r\n\r\n  <ion-slides class=\"swiper-no-swiping\" [pager]=\"false\" #slides [options]=\"slideOpts\">\r\n\r\n    <ion-slide>\r\n\r\n      <div cdkDropListGroup class=\"drag-group\">\r\n\r\n        <ion-grid>\r\n          <ion-row class=\"ion-justify-content-center\">\r\n            <ion-col class=\"scrollable\" size=\"12\" size-lg=\"6\">\r\n\r\n              <div size=\"12\"\r\n              #container2\r\n              *ngFor=\"let item of questionsArray\"\r\n                class=\"example-box elements\"\r\n                cdkDropList\r\n                dropListScroller\r\n\r\n                [cdkDropListData]=\"item\"\r\n                cdkDropListSortingDisabled\r\n                (cdkDropListDropped)=\"drop($event)\"\r\n                >\r\n                <div *ngFor=\"let item2 of item\" >\r\n\r\n                  <ion-img\r\n                  class=\"image-question\"\r\n                  loading=\"lazy\" *ngIf=\"item2.type === 'question' \"\r\n                  (click)=\"presentPopover($event, item2)\"\r\n                  [src]=\"item2.imagePath\" cdkDrag [cdkDragDisabled]=\"true\">\r\n\r\n                  </ion-img>\r\n\r\n\r\n                  <div class=\"drag-answer\" *ngIf=\"item2.type === 'answer' \">\r\n                    <ion-grid class=\"puzzle-answer\">\r\n                      <ion-row>\r\n\r\n                        <ion-col\r\n                          size=\"12\"\r\n                          >\r\n                          <div class=\"puzzle-fix\" cdkDrag [cdkDragDisabled]=\"false\">\r\n                            <div class=\"title\"> {{ item2.keyword }}</div>\r\n                            <div class=\"sound\" *ngIf=\"item2.voicePath\">\r\n                              <div class=\"sound-bg\">\r\n                                <div class=\"img-volume\">\r\n                                  <ion-img\r\n                                  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item2.voicePath)\">\r\n                                </ion-img>\r\n                                </div>\r\n                              </div>\r\n                              <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\r\n                            </div>\r\n                            <div class=\"sound\" *ngIf=\"item2.voicePathDanish\">\r\n                              <div class=\"sound-bg\">\r\n                                <div class=\"img-volume\">\r\n                                  <ion-img\r\n                                  loading=\"lazy\"\r\n                                  class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item2.voicePathDanish)\">\r\n                                </ion-img>\r\n                                </div>\r\n                              </div>\r\n                              <img loading=\"lazy\" class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\r\n                            </div>\r\n                          </div>\r\n                        </ion-col>\r\n\r\n                      </ion-row>\r\n                    </ion-grid>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"6\">\r\n              <ion-grid class=\"puzzle-answer\">\r\n                <ion-row class=\"ion-justify-content-center\">\r\n                  <ion-col cdkDropList [cdkDropListData]=\"answersArray\" (cdkDropListDropped)=\"drop($event)\">\r\n                    <div class=\"puzzle-fix\" *ngFor=\"let item of answersArray\" cdkDrag>\r\n                      <div class=\"title\"> {{ item.keyword }}</div>\r\n                        <div class=\"sound\" *ngIf=\"item.voicePath\">\r\n                          <div class=\"sound-bg\">\r\n                            <div class=\"img-volume\">\r\n                              <ion-img\r\n                              class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item.voicePath)\">\r\n                            </ion-img>\r\n                            </div>\r\n                          </div>\r\n                          <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\r\n                        </div>\r\n                        <div class=\"sound\" *ngIf=\"item.voicePathDanish\">\r\n                          <div class=\"sound-bg\">\r\n                            <div class=\"img-volume\">\r\n                              <ion-img\r\n                              loading=\"lazy\"\r\n                              class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__repeat-2\" src=\"../../../assets/icon/Vector.png\" (click)=\"startAudio(item.voicePathDanish)\">\r\n                            </ion-img>\r\n                            </div>\r\n                          </div>\r\n                          <img loading=\"lazy\" class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\r\n                        </div>\r\n                    </div>\r\n                  </ion-col>\r\n                </ion-row>\r\n            </ion-grid>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <ion-grid>\r\n          <ion-row class=\"ion-padding ion-justify-content-center\">\r\n\r\n            <ion-col size=\"12\" size-lg=\"6\">\r\n              <ion-button *ngIf=\"nextButton\" (click)=\"slidePrev()\">\r\n                Prev\r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n\r\n            <ion-col size=\"12\" size-lg=\"6\">\r\n              <ion-button *ngIf=\"nextButton\" (click)=\"slideNext()\">\r\n                Next\r\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\r\n              </ion-button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n      </div>\r\n\r\n    </ion-slide>\r\n\r\n  </ion-slides>\r\n\r\n</ion-content>\r\n\r\n\r\n");

/***/ }),

/***/ "PFl2":
/*!**************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-image.module.ts ***!
  \**************************************************************/
/*! exports provided: PuzzleImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleImagePageModule", function() { return PuzzleImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _puzzle_image_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./puzzle-image-routing.module */ "fcSu");
/* harmony import */ var _puzzle_sound_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./puzzle-sound/puzzle-sound.component */ "idoe");
/* harmony import */ var _puzzle_image_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./puzzle-image.page */ "szV/");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var cdk_drag_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! cdk-drag-scroll */ "NC7O");
/* harmony import */ var _puzzle_sound_puzzle_sound_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./puzzle-sound/puzzle-sound.module */ "dtX3");
/* harmony import */ var _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../help-modal/help-modal.module */ "lCi7");












let PuzzleImagePageModule = class PuzzleImagePageModule {
};
PuzzleImagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _puzzle_image_routing_module__WEBPACK_IMPORTED_MODULE_5__["PuzzleImagePageRoutingModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_8__["DragDropModule"],
            _puzzle_sound_puzzle_sound_module__WEBPACK_IMPORTED_MODULE_10__["PuzzleSoundModule"],
            _help_modal_help_modal_module__WEBPACK_IMPORTED_MODULE_11__["HelpModalModule"],
            cdk_drag_scroll__WEBPACK_IMPORTED_MODULE_9__["DragScrollModule"]
        ],
        declarations: [_puzzle_image_page__WEBPACK_IMPORTED_MODULE_7__["PuzzleImagePage"]],
        exports: [],
        entryComponents: [_puzzle_sound_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_6__["PuzzleSoundComponent"]],
    })
], PuzzleImagePageModule);



/***/ }),

/***/ "Tv6U":
/*!********************************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-sound/puzzle-sound.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".popover-content.sc-ion-popover-md {\n  position: static !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHV6emxlLXNvdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDQTtFQUNFLDJCQUFBO0FBdkNGIiwiZmlsZSI6InB1enpsZS1zb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC5leHQtaWNvbi12bHVtZSB7XHJcbi8vICAgd2lkdGg6IDI0cHg7XHJcbi8vICAgaGVpZ2h0OiAyNHB4O1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG4vLyAuc291bmQtcG9wdXAge1xyXG5cclxuXHJcblxyXG4vLyAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4vLyAgIC5zb3VuZCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czoxMHB4O1xyXG4vLyAgICAgcGFkZGluZzogNXB4IDRweDtcclxuLy8gICAgIG1hcmdpbjogMTBweDtcclxuXHJcbi8vICAgICAuc291bmQtYmcge1xyXG4vLyAgICAgICB3aWR0aDogMjBweDtcclxuLy8gICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4vLyAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbi8vICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbi8vICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbi8vICAgICAgIC5pbWctdm9sdW1lIHtcclxuLy8gICAgICAgICBAZXh0ZW5kIC5leHQtaWNvbi12bHVtZTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmRhbmlzaC1mbGFnIHtcclxuLy8gICB3aWR0aDogMzBweDtcclxuLy8gICBoZWlnaHQ6IGF1dG87XHJcbi8vIH1cclxuXHJcbi5wb3BvdmVyLWNvbnRlbnQuc2MtaW9uLXBvcG92ZXItbWQge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWMhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "cmRR":
/*!**************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-image.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ext-icon-vlume, .puzzle-answer .puzzle-fix .sound .sound-bg .img-volume {\n  width: 24px;\n  height: 24px;\n  display: flex;\n  align-items: center;\n  padding: 15px 0px;\n}\n\n/* header Top */\n\nion-header ion-img {\n  width: 35px;\n  height: auto;\n  margin-top: 10px;\n}\n\n.img-profile {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.img-profile ion-avatar {\n  width: 60px;\n  margin: 5px 0;\n  height: 60px;\n}\n\n.img-profile ion-label {\n  font-size: 14 px;\n  padding-left: 10px;\n}\n\n/* end header top */\n\nion-grid {\n  padding: 0;\n}\n\nion-toolbar ion-icon {\n  color: var(--ion-color-second-app);\n  font-size: 30px;\n  margin-right: 20px;\n  margin-top: 24px;\n}\n\nion-img.image-question {\n  width: 80px;\n  height: auto;\n  padding: 0;\n  margin: 0;\n}\n\n.puzzle-answer {\n  margin-top: 20px;\n}\n\n.puzzle-answer .puzzle-fix {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  padding: 5px 10px;\n  margin: 10px 0;\n  border: 2px dotted #003182a6;\n  height: 50px;\n}\n\n.puzzle-answer .puzzle-fix .title {\n  font-size: 13px;\n  font-weight: 500;\n  text-align: left;\n  color: var(--ion-color-second-app);\n}\n\n.puzzle-answer .puzzle-fix .sound {\n  display: flex;\n  border: 2px dotted var(--ion-color-second-app);\n  border-radius: 10px;\n  padding: 5px 10px;\n  margin: 0 5px;\n}\n\n.puzzle-answer .puzzle-fix .sound .sound-bg {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n  border-radius: 50px;\n  margin-right: 10px;\n}\n\n.img-langauge {\n  width: 40px;\n  height: 40px;\n  position: absolute;\n  right: 13px;\n  top: 14px;\n  border: 1px solid #ccc;\n}\n\n.drag-answer .puzzle-img ion-img {\n  width: 20px !important;\n  height: 20px !important;\n}\n\n.drag-answer .puzzle-answer {\n  margin-top: 0;\n  padding: 5px 0 !important;\n}\n\n.drag-answer .title {\n  margin-top: 0 !important;\n}\n\n.drag-answer .sound {\n  display: flex;\n}\n\n.drag-answer .sound .sound-bg img {\n  width: 50px !important;\n  height: auto;\n}\n\n.drag-answer .sound .img-volume ion-img {\n  width: 20px;\n  height: auto;\n}\n\n/************* DRAG AND DROP *****************/\n\n.example-box {\n  border: 2px dotted #003182a6 !important;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n  cursor: move;\n  background: white;\n  font-size: 16px;\n  border-radius: 0;\n  margin: 5px 0;\n  padding: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box .sound {\n  padding: 0 5px 0 10px;\n}\n\n.example-box .title {\n  margin-right: 5px;\n}\n\n.example-box img.danish-flag {\n  width: 24px;\n  height: auto;\n}\n\n.example-box .drag-answer ion-img {\n  width: 50px;\n  height: auto;\n  position: relative;\n  top: -2px;\n}\n\n.cdk-drag-preview {\n  box-sizing: border-box;\n  border-radius: 4px;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  padding: 10px !important;\n  width: 80% !important;\n  margin: auto;\n  height: auto !important;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-preview .sound-bg {\n  display: inline-block;\n  width: 40px;\n  height: 40px;\n}\n\n.cdk-drag-preview .img-volume {\n  width: 28px;\n  height: 28px;\n  position: relative;\n  top: 15px;\n}\n\n.cdk-drag-preview .puzzle-fix .title {\n  font-weight: 600 !important;\n  padding: 0 5px !important;\n  width: 30% !important;\n}\n\n.cdk-drag-preview .puzzle-fix img.danish-flag {\n  width: 24px;\n  height: 24px;\n  max-width: 50%;\n}\n\n.cdk-drop-list-receiving {\n  height: auto;\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drop-list-dragging {\n  background-color: rgba(167, 247, 129, 0.6);\n  height: 150px;\n  width: 100%;\n  border: 3px dotted var(--ion-color-second-app);\n  color: var(--ion-color-second-app);\n}\n\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n\n.cdk-drag-animating {\n  transition: transform 120ms cubic-bezier(0, 0, 0.2, 3);\n}\n\n.example-box:last-child {\n  border: none;\n}\n\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/************* DRAG AND DROP *****************/\n\n.popover-content.sc-ion-popover-md {\n  position: static !important;\n}\n\n.drag-group {\n  width: 100%;\n}\n\n@media (min-width: 767px) {\n  .cdk-drag-preview {\n    width: 30% !important;\n  }\n}\n\n@media (max-width: 370px) {\n  ion-img.image-question {\n    width: 70px;\n    height: auto;\n  }\n\n  .title {\n    font-size: 16px !important;\n  }\n\n  .ion-text-center {\n    font-size: 14px;\n  }\n\n  .cdk-drag-preview {\n    box-sizing: border-box;\n    width: 80% !important;\n  }\n  .cdk-drag-preview .sound-bg {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    margin: 0;\n  }\n  .cdk-drag-preview .img-volume {\n    width: 20px;\n    height: 20px;\n    padding: 10px 0;\n  }\n  .cdk-drag-preview .puzzle-fix .title {\n    font-weight: 600 !important;\n    padding: 0 5px !important;\n    width: 30% !important;\n    font-size: 16px;\n  }\n  .cdk-drag-preview .puzzle-fix img.danish-flag {\n    width: 24px;\n    height: 24px;\n    max-width: 50%;\n  }\n\n  .example-box {\n    margin: 10px 0;\n  }\n  .example-box .puzzle-answer .puzzle-fix {\n    padding: 5px 0px !important;\n  }\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    display: flex;\n    border: 2px dotted var(--ion-color-second-app);\n    border-radius: 10px;\n    padding: 5px 0px;\n    margin: 0;\n  }\n  .example-box .title {\n    width: 35% !important;\n  }\n\n  .cdk-drop-list-receiving {\n    height: auto;\n    color: var(--ion-color-second-app);\n  }\n\n  .cdk-drop-list-dragging {\n    background-color: rgba(167, 247, 129, 0.6);\n    height: 150px;\n    width: 100%;\n    border: 3px dotted var(--ion-color-second-app);\n    color: var(--ion-color-second-app);\n  }\n}\n\n@media (min-width: 768px) and (max-width: 2000px) {\n  .example-box {\n    height: 90px;\n  }\n}\n\n@media (max-width: 500px) {\n  .scrollable {\n    height: 230px;\n    overflow: auto;\n  }\n}\n\n@media (max-width: 449px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 280px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 45%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 11px !important;\n  }\n}\n\n@media (min-width: 420px) and (max-width: 450px) {\n  .example-box .puzzle-fix {\n    width: 330px;\n  }\n}\n\n@media (min-width: 450px) and (max-width: 600px) {\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    border: none !important;\n  }\n\n  .example-box .puzzle-fix .title {\n    width: 100% !important;\n  }\n\n  .example-box .puzzle-fix {\n    width: 400px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 45%;\n    padding: 0;\n    margin: 0;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .title {\n    font-size: 12px !important;\n  }\n\n  .title {\n    font-size: 12px !important;\n  }\n}\n\n@media (min-width: 600px) and (max-width: 900px) {\n  .example-box .puzzle-fix {\n    width: 600px;\n  }\n\n  .example-box .puzzle-answer .puzzle-fix .sound {\n    width: 18%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwdXp6bGUtaW1hZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBLGVBQUE7O0FBQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUVFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBS0EsbUJBQUE7O0FBRUE7RUFDRSxVQUFBO0FBSEY7O0FBUUU7RUFDRSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBTEo7O0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTko7O0FBa0JBO0VBQ0UsZ0JBQUE7QUFmRjs7QUFpQkU7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FBaEJKOztBQWtCSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFoQk47O0FBcUJJO0VBQ0UsYUFBQTtFQUNBLDhDQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7QUFuQk47O0FBcUJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFuQlI7O0FBZ0NBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUE5QkY7O0FBcUNFO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQWxDSjs7QUFxQ0U7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFuQ0o7O0FBc0NFO0VBQ0Usd0JBQUE7QUFwQ0o7O0FBdUNFO0VBQ0UsYUFBQTtBQXJDSjs7QUF5Q007RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUF2Q1I7O0FBMkNJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUF6Q047O0FBaURBLDhDQUFBOztBQUVBO0VBQ0UsdUNBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFBQTtFQUNBLCtHQUFBO0FBL0NGOztBQW9ERTtFQUNFLHFCQUFBO0FBbERKOztBQXFERTtFQUFRLGlCQUFBO0FBbERWOztBQW9ERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBbERKOztBQXFEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBbkRGOztBQXVEQTtFQUVFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxSEFBQTtFQUdBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBdkRGOztBQTJERTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF6REo7O0FBNkRFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUEzREo7O0FBK0RJO0VBQ0UsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBN0ROOztBQWdFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQTlETjs7QUFxRUE7RUFFRSxZQUFBO0VBQ0Esa0NBQUE7QUFuRUY7O0FBc0VBO0VBQ0UsMENBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0Esa0NBQUE7QUFuRUY7O0FBdUVBO0VBQ0UsVUFBQTtBQXBFRjs7QUF1RUE7RUFDRSxzREFBQTtBQXBFRjs7QUF1RUE7RUFDRSxZQUFBO0FBcEVGOztBQXVFQTtFQUNFLHNEQUFBO0FBcEVGOztBQXlFQSw4Q0FBQTs7QUFHQTtFQUNBLDJCQUFBO0FBeEVBOztBQTJFQTtFQUNFLFdBQUE7QUF4RUY7O0FBNEVBO0VBQ0U7SUFDRSxxQkFBQTtFQXpFRjtBQUNGOztBQStFQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7RUE3RUY7O0VBZ0ZBO0lBQ0UsMEJBQUE7RUE3RUY7O0VBaUZGO0lBQ0UsZUFBQTtFQTlFQTs7RUFrRkE7SUFFRSxzQkFBQTtJQUNBLHFCQUFBO0VBaEZGO0VBa0ZFO0lBQ0UscUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7RUFoRko7RUFtRkU7SUFDRSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGVBQUE7RUFqRko7RUF1Rkk7SUFDRSwyQkFBQTtJQUNBLHlCQUFBO0lBQ0EscUJBQUE7SUFDQSxlQUFBO0VBckZOO0VBd0ZJO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxjQUFBO0VBdEZOOztFQTZGQTtJQUNFLGNBQUE7RUExRkY7RUE0RkU7SUFDRSwyQkFBQTtFQTFGSjtFQTZGRTtJQUNFLGFBQUE7SUFDQSw4Q0FBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0VBM0ZKO0VBOEZFO0lBRUUscUJBQUE7RUE3Rko7O0VBaUdBO0lBRUUsWUFBQTtJQUNBLGtDQUFBO0VBL0ZGOztFQWtHQTtJQUNFLDBDQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSw4Q0FBQTtJQUNBLGtDQUFBO0VBL0ZGO0FBQ0Y7O0FBc0dBO0VBQ0U7SUFDRSxZQUFBO0VBcEdGO0FBQ0Y7O0FBdUdBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtFQXJHRjtBQUNGOztBQXlHQTtFQUNFO0lBQ0UsdUJBQUE7RUF2R0Y7O0VBMEdBO0lBQ0Usc0JBQUE7RUF2R0Y7O0VBMEdGO0lBQTBCLFlBQUE7RUF0R3hCOztFQXVHRjtJQUFnRCxVQUFBO0lBQVksVUFBQTtJQUFZLFNBQUE7RUFqR3RFOztFQWtHRjtJQUFnRCwwQkFBQTtFQTlGOUM7O0VBK0ZGO0lBQ0UsMEJBQUE7RUE1RkE7QUFDRjs7QUFnR0E7RUFFQTtJQUEwQixZQUFBO0VBOUZ4QjtBQUNGOztBQWtHQTtFQUNFO0lBQ0UsdUJBQUE7RUFoR0Y7O0VBbUdBO0lBQ0Usc0JBQUE7RUFoR0Y7O0VBbUdGO0lBQTBCLFlBQUE7RUEvRnhCOztFQWdHRjtJQUFnRCxVQUFBO0lBQVksVUFBQTtJQUFZLFNBQUE7RUExRnRFOztFQTJGRjtJQUFnRCwwQkFBQTtFQXZGOUM7O0VBd0ZGO0lBQ0UsMEJBQUE7RUFyRkE7QUFDRjs7QUF5RkE7RUFFRTtJQUEwQixZQUFBO0VBdkYxQjs7RUF3RkE7SUFBZ0QsVUFBQTtFQXBGaEQ7QUFDRiIsImZpbGUiOiJwdXp6bGUtaW1hZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dC1pY29uLXZsdW1lIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE1cHggMHB4O1xyXG59XHJcblxyXG4vKiBoZWFkZXIgVG9wICovXHJcbmlvbi1oZWFkZXIgaW9uLWltZyB7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4uaW1nLXByb2ZpbGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW9uLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgfVxyXG5cclxuICBpb24tbGFiZWwge1xyXG4gICAgZm9udC1zaXplOiAxNCBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICB9XHJcbn1cclxuXHJcbi8qIGVuZCBoZWFkZXIgdG9wICovXHJcblxyXG5pb24tZ3JpZCB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbiAgaW9uLWltZy5pbWFnZS1xdWVzdGlvbiB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC8vIGlvbi1pbWcge1xyXG4gICAgLy8gICB3aWR0aDogNzAlO1xyXG4gICAgLy8gICBoZWlnaHQ6IGF1dG87XHJcbiAgICAvLyAgIC8vIG1hcmdpbjogYXV0bztcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG5cclxuLnB1enpsZS1hbnN3ZXIge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcblxyXG4gIC5wdXp6bGUtZml4IHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgYm9yZGVyOiAycHggZG90dGVkICMwMDMxODJhNjtcclxuICAgIGhlaWdodDogNTBweDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcblxyXG4gICAgICAvLyBtYXJnaW4tdG9wOiAxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zb3VuZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcblxyXG4gICAgICAuc291bmQtYmcge1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAgIC5pbWctdm9sdW1lIHtcclxuICAgICAgICAgIEBleHRlbmQgLmV4dC1pY29uLXZsdW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuLmltZy1sYW5nYXVnZSB7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTNweDtcclxuICB0b3A6IDE0cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuXHJcbi5kcmFnLWFuc3dlciB7XHJcblxyXG5cclxuICAucHV6emxlLWltZyBpb24taW1ne1xyXG4gICAgd2lkdGg6IDIwcHghaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4IWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5wdXp6bGUtYW5zd2Vye1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHBhZGRpbmc6IDVweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLnNvdW5ke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuc291bmQtYmcge1xyXG5cclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTBweCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmltZy12b2x1bWUgaW9uLWltZyB7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuLyoqKioqKioqKioqKiogRFJBRyBBTkQgRFJPUCAqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5leGFtcGxlLWJveCB7XHJcbiAgYm9yZGVyOiAycHggZG90dGVkICMwMDMxODJhNiFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGN1cnNvcjogbW92ZTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBtYXJnaW46IDVweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMjAwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxuXHJcblxyXG4gIC5zb3VuZCB7XHJcbiAgICBwYWRkaW5nOiAwIDVweCAwIDEwcHg7XHJcbiAgfVxyXG5cclxuICAudGl0bGUge21hcmdpbi1yaWdodDogNXB4O31cclxuXHJcbiAgaW1nLmRhbmlzaC1mbGFnIHtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZHJhZy1hbnN3ZXIgaW9uLWltZ3tcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTJweDtcclxufVxyXG59XHJcblxyXG4uY2RrLWRyYWctcHJldmlldyB7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcclxuICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMTBweCFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDgwJSFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0byFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuXHJcblxyXG5cclxuICAuc291bmQtYmcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAvLyBtYXJnaW46IDEwcHggMjBweDtcclxuICB9XHJcblxyXG4gIC5pbWctdm9sdW1lIHtcclxuICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgLnB1enpsZS1maXgge1xyXG4gICAgLnRpdGxle1xyXG4gICAgICBmb250LXdlaWdodDogNjAwIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMCA1cHghaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMzAlIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICBpbWcuZGFuaXNoLWZsYWcge1xyXG4gICAgICB3aWR0aDogMjRweDtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmNkay1kcm9wLWxpc3QtcmVjZWl2aW5nIHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMTY3LCAyNDcsIDEyOSwgMC42KTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxufVxyXG5cclxuLmNkay1kcm9wLWxpc3QtZHJhZ2dpbmd7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXI6IDNweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kLWFwcCk7XHJcbn1cclxuXHJcblxyXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5jZGstZHJhZy1hbmltYXRpbmcge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMjBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAzKTtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94Omxhc3QtY2hpbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdC5jZGstZHJvcC1saXN0LWRyYWdnaW5nIC5leGFtcGxlLWJveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xyXG59XHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqIERSQUcgQU5EIERST1AgKioqKioqKioqKioqKioqKiovXHJcblxyXG5cclxuLnBvcG92ZXItY29udGVudC5zYy1pb24tcG9wb3Zlci1tZCB7XHJcbnBvc2l0aW9uOiBzdGF0aWMhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZHJhZy1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY3cHgpIHtcclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgICB3aWR0aDogMzAlIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogMzcwcHgpIHtcclxuICBpb24taW1nLmltYWdlLXF1ZXN0aW9ue1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNnB4IWltcG9ydGFudDtcclxuICB9XHJcblxyXG5cclxuLmlvbi10ZXh0LWNlbnRlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcblxyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHdpZHRoOiA4MCUhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zb3VuZC1iZyB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbWctdm9sdW1lIHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wdXp6bGUtZml4IHtcclxuXHJcblxyXG4gICAgICAudGl0bGV7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cHghaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAzMCUhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW1nLmRhbmlzaC1mbGFnIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLmV4YW1wbGUtYm94IHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgIC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IHtcclxuICAgICAgcGFkZGluZzogNXB4IDBweCFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYm9yZGVyOiAycHggZG90dGVkIHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgLy8gbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIHdpZHRoOiAzNSUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNkay1kcm9wLWxpc3QtcmVjZWl2aW5nIHtcclxuICAgIC8vIGJhY2tncm91bmQtY29sb3I6cmdiYSgxNjcsIDI0NywgMTI5LCAwLjYpO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICB9XHJcblxyXG4gIC5jZGstZHJvcC1saXN0LWRyYWdnaW5ne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDE2NywgMjQ3LCAxMjksIDAuNik7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDNweCBkb3R0ZWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZC1hcHApO1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmQtYXBwKTtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDIwMDBweCkge1xyXG4gIC5leGFtcGxlLWJveCB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAuc2Nyb2xsYWJsZSB7XHJcbiAgICBoZWlnaHQ6IDIzMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNDQ5cHgpIHtcclxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcclxuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1maXggLnRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IHt3aWR0aDogMjgwcHg7fVxyXG4uZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHt3aWR0aDogNDUlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7fVxyXG4uZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnRpdGxlIHtmb250LXNpemU6IDEycHggIWltcG9ydGFudDt9XHJcbi50aXRsZXtcclxuICBmb250LXNpemU6IDExcHggIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNDIwcHgpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG5cclxuLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IHt3aWR0aDogMzMwcHg7fVxyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDQ1MHB4KSBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHtcclxuICAgIGJvcmRlcjogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1maXggLnRpdGxlIHtcclxuICAgIHdpZHRoOiAxMDAlIWltcG9ydGFudDtcclxufVxyXG5cclxuLmV4YW1wbGUtYm94IC5wdXp6bGUtZml4IHt3aWR0aDogNDAwcHg7fVxyXG4uZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnNvdW5kIHt3aWR0aDogNDUlOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7fVxyXG4uZXhhbXBsZS1ib3ggLnB1enpsZS1hbnN3ZXIgLnB1enpsZS1maXggLnRpdGxlIHtmb250LXNpemU6IDEycHggIWltcG9ydGFudDt9XHJcbi50aXRsZXtcclxuICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcclxufVxyXG59XHJcblxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNjAwcHgpIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xyXG5cclxuICAuZXhhbXBsZS1ib3ggLnB1enpsZS1maXgge3dpZHRoOiA2MDBweDt9XHJcbiAgLmV4YW1wbGUtYm94IC5wdXp6bGUtYW5zd2VyIC5wdXp6bGUtZml4IC5zb3VuZCB7d2lkdGg6IDE4JTt9XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "dtX3":
/*!***************************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-sound/puzzle-sound.module.ts ***!
  \***************************************************************************/
/*! exports provided: PuzzleSoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleSoundModule", function() { return PuzzleSoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var _puzzle_sound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./puzzle-sound.component */ "idoe");





let PuzzleSoundModule = class PuzzleSoundModule {
};
PuzzleSoundModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
        ],
        declarations: [_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_4__["PuzzleSoundComponent"]]
    })
], PuzzleSoundModule);



/***/ }),

/***/ "fcSu":
/*!**********************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-image-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: PuzzleImagePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleImagePageRoutingModule", function() { return PuzzleImagePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _puzzle_image_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzle-image.page */ "szV/");




const routes = [
    {
        path: '',
        component: _puzzle_image_page__WEBPACK_IMPORTED_MODULE_3__["PuzzleImagePage"]
    }
];
let PuzzleImagePageRoutingModule = class PuzzleImagePageRoutingModule {
};
PuzzleImagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PuzzleImagePageRoutingModule);



/***/ }),

/***/ "idoe":
/*!******************************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-sound/puzzle-sound.component.ts ***!
  \******************************************************************************/
/*! exports provided: PuzzleSoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleSoundComponent", function() { return PuzzleSoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_puzzle_sound_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./puzzle-sound.component.html */ "lz/e");
/* harmony import */ var _puzzle_sound_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle-sound.component.scss */ "Tv6U");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/auth.service */ "qXBG");







let PuzzleSoundComponent = class PuzzleSoundComponent {
    constructor(modalController, navParams, authService) {
        this.modalController = modalController;
        this.navParams = navParams;
        this.authService = authService;
        //howler
        this.player = null;
        this.isPlaying = false;
    }
    ngOnInit() {
        this.userInfo = this.authService.getUser();
        this.voicePath = this.navParams.data.voicePath;
        this.voicePathDanish = this.navParams.data.voicePathDanish;
        this.imagePath = this.navParams.data.imagePath;
    }
    startAudio(voicePath) {
        if (this.player) {
            this.player.stop();
        }
        this.player = new howler__WEBPACK_IMPORTED_MODULE_5__["Howl"]({
            html5: true,
            src: voicePath,
            onplay: () => {
                this.activeTrack = voicePath;
                this.isPlaying = true;
            },
            onend: () => { },
        });
        this.player.play();
    }
    ngOnDestroy() {
        if (this.player) {
            this.player.stop();
        }
    }
};
PuzzleSoundComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavParams"] },
    { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }
];
PuzzleSoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-puzzle-sound',
        template: _raw_loader_puzzle_sound_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_puzzle_sound_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PuzzleSoundComponent);



/***/ }),

/***/ "lz/e":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/training/puzzle-image/puzzle-sound/puzzle-sound.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div  class=\"sound-popup\">\r\n<div class=\"sound\" *ngIf=\"voicePath\">\r\n  <div class=\"sound-bg\">\r\n    <div class=\"img-volume\">\r\n      <ion-img\r\n      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__infinite\"\r\n      (click)=\"startAudio(voicePath)\" src=\"../../../assets/icon/Vector.png\">\r\n    </ion-img>\r\n    </div>\r\n  </div>\r\n  <img class=\"danish-flag\" [src]=\"userInfo.languageIcon\" alt=\"\" />\r\n</div>\r\n<div class=\"sound\" *ngIf=\"voicePathDanish\">\r\n  <div class=\"sound-bg\">\r\n    <div class=\"img-volume\">\r\n      <ion-img\r\n      class=\"animate__animated animate__jello animate__delay-2s animate__bounce animate__infinite\"\r\n      (click)=\"startAudio(voicePathDanish)\" src=\"../../../assets/icon/Vector.png\">\r\n    </ion-img>\r\n    </div>\r\n  </div>\r\n  <img class=\"danish-flag\" src=\"../../../assets/icon/da.png\" alt=\"\" />\r\n</div>\r\n</div> -->\r\n\r\n\r\n<ion-grid>\r\n  <ion-row>\r\n    <ion-col size=\"12\">\r\n      <ion-img class=\"image-question\" loading=\"lazy\" [src]=\"imagePath\"></ion-img>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ }),

/***/ "szV/":
/*!************************************************************!*\
  !*** ./src/app/training/puzzle-image/puzzle-image.page.ts ***!
  \************************************************************/
/*! exports provided: PuzzleImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PuzzleImagePage", function() { return PuzzleImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_puzzle_image_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./puzzle-image.page.html */ "NecZ");
/* harmony import */ var _puzzle_image_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./puzzle-image.page.scss */ "cmRR");
/* harmony import */ var _puzzle_sound_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./puzzle-sound/puzzle-sound.component */ "idoe");
/* harmony import */ var _shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/models/puzzleImageTranslation */ "yFRR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "sZkV");
/* harmony import */ var src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/storage.service */ "fbMX");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "ltgo");
/* harmony import */ var src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/exercise.service */ "4YRF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! howler */ "HlzF");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../help-modal/help-modal.component */ "kxUF");













let PuzzleImagePage = class PuzzleImagePage {
    constructor(storageService, route, router, toastController, navController, exerciseService, popoverController, modalController) {
        this.storageService = storageService;
        this.route = route;
        this.router = router;
        this.toastController = toastController;
        this.navController = navController;
        this.exerciseService = exerciseService;
        this.popoverController = popoverController;
        this.modalController = modalController;
        this.questionsArray = [];
        this.answersArray = [];
        this.nextButton = false;
        this.lengthQuestion = 0;
        //howler
        this.player = null;
        this.isPlaying = false;
        this.subs = [];
        this.isLoading = false;
        this.limit = 1;
        this.currentIndex = 0;
        this.audio = new Audio('../../../assets/iphone_ding.mp3');
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            scrollbar: true,
            loop: false,
            noSwipingClass: 'swiper-no-swiping',
        };
    }
    ngOnInit() {
        this.userInfo = this.storageService.getUser();
        // ** get courseId And exerciseId
        this.courseId = +this.route.snapshot.paramMap.get('courseId');
        this.exerciseType = +this.route.snapshot.paramMap.get('exerciseId');
        this.getQuestionAndAnswer();
    }
    // ** get question and answer puzzle text
    getQuestionAndAnswer() {
        this.isLoading = true;
        this.questionsArray = [];
        this.answersArray = [];
        this.subs.push(this.exerciseService
            .getCourseExercise(this.exerciseType, this.courseId, this.currentIndex, this.limit)
            .subscribe((response) => {
            console.log(response);
            this.questionAndAnswerItems = response;
            this.lengthQuestion = response['length'];
            if (this.lengthQuestion == 0) {
                this.errorMessage("There are no available questions in this exercise");
                setTimeout(() => {
                    this.navController.navigateRoot(['/exercise', { courseId: this.courseId }]);
                }, 100);
            }
            this.isLoading = false;
            //Questions
            for (let index = 0; index < this.questionAndAnswerItems.puzzleImages.length; index++) {
                let arr = [];
                let qpz = new _shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_4__["PuzzleImageTranslations"]();
                qpz.id = this.questionAndAnswerItems.puzzleImages[index].id;
                qpz.imagePath =
                    this.questionAndAnswerItems.puzzleImages[index].imagePath;
                qpz.guidId =
                    this.questionAndAnswerItems.puzzleImages[index].imageGuidId;
                qpz.type = 'question';
                qpz.voicePath = null;
                qpz.voicePathDanish = null;
                qpz.keyword = null;
                qpz.disabled = true;
                arr.push(qpz);
                this.questionsArray.push(arr);
            }
            //Answers
            for (let index = 0; index < this.questionAndAnswerItems.puzzleImagesTranslation.length; index++) {
                let arr = [];
                let apz = new _shared_models_puzzleImageTranslation__WEBPACK_IMPORTED_MODULE_4__["PuzzleImageTranslations"]();
                apz.id =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].id;
                apz.keywordId =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].keywordId;
                apz.keyword =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].keyword;
                apz.guidId =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].imageGuidId;
                apz.type = 'answer';
                apz.disabled = false;
                apz.voicePath =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].voicePath;
                apz.voicePathDanish =
                    this.questionAndAnswerItems.puzzleImagesTranslation[index].voicePathDanish;
                this.answersArray.push(apz);
            }
        }));
    }
    // ** Get Current Index
    getCurrentIndex() {
        this.slides
            .getActiveIndex()
            .then((current) => (this.currentIndex = current));
    }
    // ** Drop Function
    drop(event) {
        if (this.player) {
            this.player.stop();
        }
        var prevData = event.previousContainer.data;
        var data = event.container.data;
        var prevIndex = event.previousIndex;
        var currIndex = event.currentIndex;
        if (event.previousContainer === event.container) {
            console.log("same");
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["moveItemInArray"])(data, prevIndex, this.currentIndex);
        }
        else {
            if (event.container.data.length == 1) {
                Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(prevData, data, prevIndex, 1);
            }
            else {
                if (data[0].type == "question" && prevData[0].type == "question") {
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(prevData, data, 1, 2);
                    Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_9__["transferArrayItem"])(data, prevData, 1, 1);
                }
            }
        }
        if (this.answersArray.length === 0) {
            this.nextButton = true;
        }
        else {
            this.nextButton = false;
        }
    }
    // ** Move to Next slide
    slideNext() {
        // ** get check
        let arrayPuzzle = [];
        this.questionsArray.forEach((values) => {
            console.log('values', values);
            arrayPuzzle.push({
                puzzleWithImageQuestionId: values[0].id,
                imageGuid: values[0].guidId,
                wordId: values[1].keywordId,
            });
        });
        this.exerciseService
            .checkAnswerPuzzleWithImage(arrayPuzzle)
            .subscribe((response) => {
            console.log(response);
            const isCorrect = response['result'].isCorrect;
            if (isCorrect === true) {
                this.successMessage('Thanks the answer is correct');
                if (this.player) {
                    this.player.stop();
                }
                this.currentIndex += 1;
                this.getQuestionAndAnswer();
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
            else if (isCorrect === false) {
                this.errorMessage('The answer is wrong and please choose correct answer');
            }
        });
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
    presentPopover(ev, item) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _puzzle_sound_puzzle_sound_component__WEBPACK_IMPORTED_MODULE_3__["PuzzleSoundComponent"],
                componentProps: {
                    voicePath: item.voicePath,
                    voicePathDanish: item.voicePathDanish,
                    imagePath: item.imagePath,
                },
                cssClass: 'my-custom-class',
                event: ev,
                translucent: true,
            });
            yield popover.present();
        });
    }
    startAudio(voicePath) {
        if (this.player) {
            this.player.stop();
        }
        this.player = new howler__WEBPACK_IMPORTED_MODULE_11__["Howl"]({
            html5: true,
            src: voicePath,
            onplay: () => {
                this.activeTrack = voicePath;
                this.isPlaying = true;
            },
            onend: () => { },
        });
        this.player.play();
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _help_modal_help_modal_component__WEBPACK_IMPORTED_MODULE_12__["HelpModalComponent"],
                componentProps: {
                    "modalLink": "https://khrs-admin.sdex.online/assets/tutorials/single_choice_tutorial.mp4",
                    "modalTitle": "Puzzle Wiith Image Tutorial"
                }
            });
            return yield modal.present();
        });
    }
    slidePrev() {
        this.currentIndex -= 1;
        this.getQuestionAndAnswer();
        this.slides.slidePrev();
    }
    ngOnDestroy() {
        this.subs.forEach((sub) => {
            sub.unsubscribe();
        });
        if (this.player) {
            this.player.stop();
        }
    }
};
PuzzleImagePage.ctorParameters = () => [
    { type: src_app_shared_services_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: src_app_shared_services_exercise_service__WEBPACK_IMPORTED_MODULE_10__["ExerciseService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["PopoverController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
];
PuzzleImagePage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['slides',] }],
    image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['image',] }]
};
PuzzleImagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
        selector: 'app-puzzle-image',
        template: _raw_loader_puzzle_image_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_puzzle_image_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PuzzleImagePage);



/***/ })

}]);
//# sourceMappingURL=puzzle-image-puzzle-image-module.js.map