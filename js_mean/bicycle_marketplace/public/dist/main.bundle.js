webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_reg_login_reg_component__ = __webpack_require__("../../../../../src/app/login-reg/login-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__listings_listings_component__ = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_2__login_reg_login_reg_component__["a" /* LoginRegComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'listings', component: __WEBPACK_IMPORTED_MODULE_4__listings_listings_component__["a" /* ListingsComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  margin-top: 10px;\n  text-align: center;\n  font-size: .7em;\n  line-height: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    {{title}}\n  </h1>\n</div>\n\n<router-outlet></router-outlet>\n<footer>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <p>&copy; 2017 by Jesus C. de la Rosa<p>\n        <p>Created using MEAN stack and Bootstrap front-end library</p>\n      <p>This site is for demonstration purposes only.  Please do not submit any private personal information.</p>\n      <p> Images courtesy of</p>\n      <p>Eddy Lackmann, Rob Bye, Maria Soledad, Carl Nenzen Loven & Matt Saling</p>\n      <p>and provided through Unsplash.com</p>\n    </div>\n  </div>\n\n</div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Bicycle Marketplace';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_reg_login_reg_component__ = __webpack_require__("../../../../../src/app/login-reg/login-reg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__ = __webpack_require__("../../../../../src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__listings_listings_component__ = __webpack_require__("../../../../../src/app/listings/listings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__bicycle_listing_bicycle_listing_component__ = __webpack_require__("../../../../../src/app/bicycle-listing/bicycle-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


 // <-- Import FormsModule
 // <-- Import HttpModule










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_reg_login_reg_component__["a" /* LoginRegComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_10__nav_nav_component__["a" /* NavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__listings_listings_component__["a" /* ListingsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__bicycle_listing_bicycle_listing_component__["a" /* BicycleListingComponent */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__["FileSelectDirective"]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */] // <-- Include module in our AppModules
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_8__post_service__["a" /* PostService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/bicycle-listing/bicycle-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/bicycle-listing/bicycle-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>bicycle-listing component</h1>\n"

/***/ }),

/***/ "../../../../../src/app/bicycle-listing/bicycle-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BicycleListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BicycleListingComponent = (function () {
    function BicycleListingComponent() {
    }
    BicycleListingComponent.prototype.ngOnInit = function () {
    };
    return BicycleListingComponent;
}());
BicycleListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bicycle-listing',
        template: __webpack_require__("../../../../../src/app/bicycle-listing/bicycle-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/bicycle-listing/bicycle-listing.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BicycleListingComponent);

//# sourceMappingURL=bicycle-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  padding-top: 50px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-bottom: 25px;\n  background-color: #d7ccc8;\n}\n\n.post-box {\n  border: 3px solid #3e2723;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: white;\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-nav></app-nav>\n<section>\n  <div class=\"container-fluid post-box\" *ngFor=\"let post of posts\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <img src=\"{{post.photo}}\" class=\"img-responsive img-thumbnail\" alt=\"Bicycle photo not available.\">\n      </div>\n      <div class=\"col-md-4\">\n        <h1 class=\"block\">{{post.title}}</h1>\n          <p>{{post.description}}</p>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"label_input_pair\">\n          <h1>{{post.price | currency:\"USD\":2}}</h1>\n          <h3>{{post.location}}</h3>\n        </div>\n        <div id=\"edit_delete_div\">\n          <a *ngIf=\"currentUser._id != post.user._id\" class=\"btn btn-info\" href=\"mailto:{{post.user.email}}\">Contact</a>\n          <button *ngIf=\"currentUser._id == post.user._id\" class=\"btn btn-danger\" (click)=\"destroyPost(post._id, idx)\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = (function () {
    function DashboardComponent(_userService, _postService, _router) {
        this._userService = _userService;
        this._postService = _postService;
        this._router = _router;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
        this.posts = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.session(function (res) {
            if (res.status === false) {
                _this._router.navigateByUrl('/');
            }
            else {
                _this.currentUser = res;
            }
        });
        this.getPosts();
    };
    DashboardComponent.prototype.getPosts = function () {
        var _this = this;
        this._postService.index(function (posts) { return _this.posts = posts; });
    };
    DashboardComponent.prototype.destroyPost = function (id, idx) {
        var _this = this;
        this._postService.destroy(id, function (res) {
            _this.posts.splice(idx, 1);
        });
        this.getPosts();
    };
    DashboardComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            _this._router.navigateByUrl('/');
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin-left: 15px;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\n.post-box {\n  border: 3px solid #3e2723;\n  margin: 5px;\n  border-radius: 5px;\n  background-color: white;\n  padding: 20px;\n}\n\n#update-listings {\n  background-color: #bcaaa4;\n  padding: 20px;\n  border: 3px solid #d7ccc8;\n}\n\n#create-listing {\n  background-color: #bcaaa4;\n  padding: 20px;\n  border: 3px solid #d7ccc8;\n  margin-bottom: 15px;\n}\n\n#add-update-submit {\n  margin-top: 7px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n\n<section id=\"create-listing\">\n  <div class=\"container-fluid post-box\">\n    <h1>Create Listing</h1>\n    <form class=\"create-form\" #myForm=\"ngForm\" (ngSubmit)=\"createPost(); myForm.reset()\">\n\n      <div class=\"row\">\n        <div class=\"col-md-4\" style=\"background-color=#ef9a9a\">\n          <img src=\"\" class=\"img-responsive img-thumbnail\" alt=\"Add bicycle photo after listing.\">\n        </div>\n\n        <div class=\"col-md-5\" style=\"background-color=#f48fb1\">\n          <div class=\"form-group col-md-8\">\n            <label for=\"inputTitle4\">Title</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"inputTitle4\"\n            name=\"title\"\n            #title=\"ngModel\"\n            [(ngModel)]=\"newBicycle.title\"\n            placeholder=\"Title\"\n            />\n          </div>\n          <div class=\"form-group col-md-10\">\n            <label for=\"inputDescription\">Description</label>\n            <textarea\n            class=\"form-control\"\n            id=\"inputDescription\"\n            name=\"description\"\n            #description=\"ngModel\"\n            [(ngModel)]=\"newBicycle.description\"\n            placeholder=\"Description\"\n            >\n            </textarea>\n          </div>\n        </div>\n\n        <div class=\"col-md-3\" style=\"background-color=#ba68c8\">\n          <div class=\"form-group col-md-6\">\n            <label for=\"inputPrice4\">Price</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"inputPrice4\"\n            name=\"price\"\n            #price=\"ngModel\"\n            [(ngModel)]=\"newBicycle.price\"\n            placeholder=\"Price\"\n            >\n          </div>\n          <div class=\"form-group col-md-9\">\n            <label for=\"inputLocation4\">Location</label>\n            <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"inputLocation4\"\n            name=\"location\"\n            #location=\"ngModel\"\n            [(ngModel)]=\"newBicycle.location\"\n            placeholder=\"Location\"\n            >\n          </div>\n          <button type=\"submit\" class=\"btn btn-success\">Create</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</section>\n\n\n<section class=\"container-fluid\" id=\"update-listings\">\n  <h1>Edit/Delete Listings</h1>\n  <div class=\"\" *ngFor=\"let post of postsOwner.posts; let idx = index\">\n    <div class=\"container-fluid post-box\">\n      <form class=\"update-form\" #myForm=\"ngForm\" (ngSubmit)=\"updatePost(post); myForm.reset()\">\n\n        <div class=\"row\">\n          <div class=\"col-md-4\" style=\"background-color=#ef9a9a\">\n            <form\n            class=\"form-group\"\n            #myOtherForm=\"ngForm\"\n            (submit)=\"sendUpload(post._id); myOtherForm.reset()\">\n              <img src=\"{{post.photo}}\" class=\"img-responsive img-thumbnail\" alt=\"Bicycle photo goes here\">\n\n              <input type=\"file\" class=\"btn btn-secondary\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\">\n              <input\n              type=\"submit\"\n              id=\"add-update-submit\"\n              class=\"btn btn-secondary\"\n              value=\"Add/Update Photo\"\n              [disabled]=\"!uploader.getNotUploadedItems().length\">\n\n            </form>\n          </div>\n\n          <div class=\"col-md-5\" style=\"background-color=#f48fb1\">\n            <div class=\"form-group col-md-8\">\n              <label for=\"inputTitle4\">Title</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputTitle4\"\n              name=\"title\"\n              #title=\"ngModel\"\n              [(ngModel)]=\"post.title\"\n              [value]=\"post.title\"\n              [placeholder]=\"post.title\"\n              />\n            </div>\n            <div class=\"form-group col-md-10\">\n              <label for=\"inputDescription\">Description</label>\n              <textarea\n              class=\"form-control\"\n              id=\"inputDescription\"\n              name=\"description\"\n              #description=\"ngModel\"\n              [(ngModel)]=\"post.description\"\n              [value]=\"post.description\"\n              [placeholder]=\"post.description\"\n              >\n              </textarea>\n            </div>\n          </div>\n\n          <div class=\"col-md-3\" style=\"background-color=#ba68c8\">\n            <div class=\"form-group col-md-6\">\n              <label for=\"inputPrice4\">Price</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputPrice4\"\n              name=\"price\"\n              #price=\"ngModel\"\n              [(ngModel)]=\"post.price\"\n              [value]=\"post.price\"\n              [placeholder]=\"post.price\"\n              >\n            </div>\n            <div class=\"form-group col-md-9\">\n              <label for=\"inputLocation4\">Location</label>\n              <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"inputLocation4\"\n              name=\"location\"\n              #location=\"ngModel\"\n              [(ngModel)]=\"post.location\"\n              [value]=\"post.location\"\n              [placeholder]=\"post.location\"\n              >\n            </div>\n            <div id=\"edit_delete_div\">\n              <input type=\"submit\" class=\"btn btn-success\" value=\"Update\">\n              <button class=\"btn btn-danger\" (click)=\"destroyPost(post._id, idx)\">Delete</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/listings/listings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_file_upload_ng2_file_upload__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var URL = 'http://localhost:8000/upload_photo';
var ListingsComponent = (function () {
    function ListingsComponent(_userService, _postService, _router, _activatedRoute) {
        this._userService = _userService;
        this._postService = _postService;
        this._router = _router;
        this._activatedRoute = _activatedRoute;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
        this.postsOwner = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
        this.posts = [];
        this.post = new __WEBPACK_IMPORTED_MODULE_5__post__["a" /* Post */]();
        this.errors = [];
        this.newBicycle = new __WEBPACK_IMPORTED_MODULE_5__post__["a" /* Post */]();
        this.updatedBicycle = new __WEBPACK_IMPORTED_MODULE_5__post__["a" /* Post */]();
        this.user_id = null;
        this.uploader = new __WEBPACK_IMPORTED_MODULE_6_ng2_file_upload_ng2_file_upload__["FileUploader"]({ url: URL, itemAlias: 'photo' });
    }
    ListingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.session(function (res) {
            if (res.status === false) {
                _this._router.navigateByUrl('/');
            }
            else {
                _this.currentUser = res;
            }
        });
        this._activatedRoute.params.subscribe(function (param) {
            _this.user_id = param.id;
        });
        this.forFileUpload();
        this.getPosts();
    };
    ListingsComponent.prototype.sendUpload = function (id) {
        this.uploader.options.additionalParameter = { 'post_id': id };
        this.uploader.uploadAll();
        this.getPosts();
    };
    ListingsComponent.prototype.forFileUpload = function () {
        var _this = this;
        // override the onAfterAddingFile property of the uploader so it doesn't authenticate with credentials.
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        // override the onCompleteItem property of the uploader so we are able to deal with the server response.
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.getPosts();
        };
    };
    ListingsComponent.prototype.getPosts = function () {
        var _this = this;
        this._userService.getPosts(function (postsOwner) { return _this.postsOwner = postsOwner; });
    };
    ListingsComponent.prototype.createPost = function () {
        var _this = this;
        this.errors = [];
        this.newBicycle.user = this.currentUser;
        this._postService.create(this.newBicycle, function (data) {
            if (data.errors) {
                for (var _i = 0, _a = Object.keys(data.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = data.errors[key];
                    _this.errors.push(error.message);
                    console.log(_this.errors);
                }
            }
            else {
                _this.newBicycle = new __WEBPACK_IMPORTED_MODULE_5__post__["a" /* Post */]();
                _this.getPosts();
                _this._router.navigateByUrl('/listings');
            }
        });
    };
    ListingsComponent.prototype.updatePost = function (post) {
        var _this = this;
        return this._postService.update(post, function (data) {
            if (data.errors) {
                console.log(data.errors);
            }
            else {
                _this.post = data;
                console.log("Successfully updated the bicycle post!");
                _this.getPosts();
            }
        });
    };
    ListingsComponent.prototype.destroyPost = function (id, idx) {
        var _this = this;
        this._postService.destroy(id, function (res) {
            _this.postsOwner.posts.splice(idx, 1);
        });
        this.getPosts();
        this._router.navigateByUrl('/listings');
    };
    return ListingsComponent;
}());
ListingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-listings',
        template: __webpack_require__("../../../../../src/app/listings/listings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/listings/listings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__post_service__["a" /* PostService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ListingsComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=listings.component.js.map

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section {\n  padding-top: 50px;\n  padding-left: 25px;\n  padding-right: 25px;\n  padding-bottom: 25px;\n  background-color: #d7ccc8;\n}\n\n.post-box {\n  border: 3px solid #3e2723;\n  margin: 5px;\n  border-radius: 2px;\n  background-color: white;\n  padding: 20px;\n}\n\n#login-reg {\n  background-color: #bcaaa4;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.html":
/***/ (function(module, exports) {

module.exports = "  <div>\n    <h2>Featured Bike!</h2>\n<div>\n\n<section>\n  <div class=\"container-fluid post-box\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <img src=\"{{randomBike.photo}}\" class=\"img-responsive img-thumbnail\" alt=\"bicycle image\">\n      </div>\n      <div class=\"col-md-5\">\n        <h1 class=\"block\">{{randomBike.title}}</h1>\n          <p>{{randomBike.description}}</p>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"label_input_pair\">\n          <h1 >{{randomBike.price | currency:\"USD\":2 }}</h1>\n          <h3>{{randomBike.location}}</h3>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<section id=\"login-reg\">\n\n    <div class=\"container\">\n      <div class=\"row\">\n\n        <div class=\"col-md-6\">\n          <h3>Login</h3>\n          <form id=\"login-form\" (submit)=\"loginUser()\">\n            <div class=\"form-group row\">\n              <label for=\"inputEmail\" class=\"col-sm-3 col-form-label\">Email</label>\n              <div class=\"col-sm-9\">\n                <input\n                type=\"email\"\n                name=\"email\"\n                class=\"form-control\"\n                id=\"inputEmail\"\n                placeholder=\"Email\"\n                [(ngModel)]=\"ninja.email\"\n                >\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Password</label>\n              <div class=\"col-sm-9\">\n                <input\n                type=\"password\"\n                name=\"password\"\n                class=\"form-control\"\n                id=\"inputPassword\"\n                placeholder=\"Password\"\n                [(ngModel)]=\"ninja.password\"\n                >\n              </div>\n            </div>\n            <input class=\"btn btn-secondary\" type=\"submit\" value=\"Login\">\n          </form>\n        </div>\n\n        <div class=\"col-md-6\">\n          <h3>Register</h3>\n          <form id=\"register-form\" #myForm=\"ngForm\" (submit)=\"createUser(); myform.reset()\">\n              <div class=\"form-group row\">\n                <label for=\"inputFirstName\" class=\"col-sm-3 col-form-label\">First Name</label>\n                <div class=\"col-sm-9\">\n                  <input\n                  class=\"form-control\"\n                  id=\"inputFirstName\"\n                  type=\"text\"\n                  name=\"firstName\"\n                  #firstName=\"ngModel\"\n                  [(ngModel)]=\"newUser.firstName\"\n                  placeholder=\"First Name\"\n                  required\n                  minlength='2'>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"inputLastName\" class=\"col-sm-3 col-form-label\">Last Name</label>\n                <div class=\"col-sm-9\">\n                  <input\n                  class=\"form-control\"\n                  id=\"inputLastName\"\n                  type=\"text\"\n                  name=\"lastName\"\n                  #lastName=\"ngModel\"\n                  [(ngModel)]=\"newUser.lastName\"\n                  placeholder=\"Last Name\"\n                  required\n                  minlength='2'>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"inputEmail\" class=\"col-sm-3 col-form-label\">Email</label>\n                <div class=\"col-sm-9\">\n                  <input\n                  class=\"form-control\"\n                  id=\"inputEmail\"\n                  type=\"email\"\n                  name=\"email\"\n                  #email=\"ngModel\"\n                  [(ngModel)]=\"newUser.email\"\n                  placeholder=\"Email\"\n                  required>\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"inputPassword\" class=\"col-sm-3 col-form-label\">Password</label>\n                <div class=\"col-sm-9\">\n                  <input\n                  class=\"form-control\"\n                  id=\"inputPassword\"\n                  type=\"password\"\n                  name=\"password\"\n                  #password=\"ngModel\"\n                  [(ngModel)]=\"newUser.password\"\n                  required\n                  minlength='8'\n                  placeholder=\"Password must be at least 8 characters\"\n                  />\n                </div>\n              </div>\n              <div class=\"form-group row\">\n                <label for=\"inputConfirmPassword\" class=\"col-sm-3 col-form-label\">Password Confirmation</label>\n                <div class=\"col-sm-9\">\n                  <input\n                  class=\"form-control\"\n                  id=\"inputConfirmPassword\"\n                  type=\"password\"\n                  name=\"password_confirmation\"\n                  #password_confirmation=\"ngModel\"\n                  [(ngModel)]=\"newUser.password_confirmation\"\n                  required\n                  placeholder=\"Password Confirmation\"\n                  />\n                </div>\n              </div>\n              <input type=\"submit\" class=\"btn btn-secondary\" value=\"Register\">\n          </form>\n          <div>\n            <p *ngFor=\"let error of errors\">{{ error }}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/login-reg/login-reg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRegComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__post_service__ = __webpack_require__("../../../../../src/app/post.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post__ = __webpack_require__("../../../../../src/app/post.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginRegComponent = (function () {
    function LoginRegComponent(_userService, _router, _postService) {
        this._userService = _userService;
        this._router = _router;
        this._postService = _postService;
        this.newUser = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
        this.ninja = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
        this.registrationErrors = [];
        this.loginErrors = [];
        this.posts = [];
        this.randomBike = new __WEBPACK_IMPORTED_MODULE_5__post__["a" /* Post */]();
    }
    LoginRegComponent.prototype.ngOnInit = function () {
        // this.ninja.email = 'john@doe.com'
        // this.ninja.password = 'john1234'
        // this.loginUser();
        this.getRandomBike();
    };
    LoginRegComponent.prototype.getRandomBike = function () {
        var _this = this;
        this._postService.index(function (posts) {
            // this.posts = posts;
            var idx = Math.floor(Math.random() * posts.length);
            _this.randomBike = posts[idx];
        });
    };
    LoginRegComponent.prototype.createUser = function () {
        var _this = this;
        // console.log(this.newTask);
        this.registrationErrors = [];
        this._userService.createUser(this.newUser, function (data) {
            // decide if there are errors
            if (data.errors) {
                for (var _i = 0, _a = Object.keys(data.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = data.errors[key];
                    _this.registrationErrors.push(error.message);
                }
            }
            else {
                _this.newUser = new __WEBPACK_IMPORTED_MODULE_4__user__["a" /* User */]();
                // do the next thing
                _this._router.navigateByUrl('/');
            }
        });
    };
    LoginRegComponent.prototype.loginUser = function () {
        var _this = this;
        this.loginErrors = [];
        this._userService.authenticate(this.ninja, function (res) {
            // console.log(res);
            if (res.errors) {
                for (var _i = 0, _a = Object.keys(res.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = res.errors[key];
                    _this.loginErrors.push(error.message);
                }
            }
            else {
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    return LoginRegComponent;
}());
LoginRegComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'app-login-reg',
        template: __webpack_require__("../../../../../src/app/login-reg/login-reg.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login-reg/login-reg.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__post_service__["a" /* PostService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__post_service__["a" /* PostService */]) === "function" && _c || Object])
], LoginRegComponent);

var _a, _b, _c;
//# sourceMappingURL=login-reg.component.js.map

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  <button [routerLink]=\"['/dashboard']\">Browse</button>\n  <button [routerLink]=\"['/listings']\">My Listings</button>\n  <button (click)=\"logout()\">Logout</button>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavComponent = (function () {
    function NavComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]();
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.session(function (res) {
            if (res.status === false) {
                _this._router.navigateByUrl('/');
            }
            else {
                _this.currentUser = res;
            }
        });
    };
    NavComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) {
            _this._router.navigateByUrl('/');
        });
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/post.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
    }
    PostService.prototype.index = function (callback) {
        this._http.get('/posts').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    PostService.prototype.create = function (newPost, callback) {
        this._http.post('/posts', newPost).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    PostService.prototype.show = function (id, callback) {
        this._http.get("/posts/" + id).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    PostService.prototype.update = function (post, callback) {
        // return this._http.put(`/posts/${post._id}`, post).map(data => data.json()).toPromise(); //  this line works as well
        this._http.put("/posts/" + post._id, post).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    PostService.prototype.destroy = function (id, callback) {
        this._http.delete("posts/" + id).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    return PostService;
}());
PostService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PostService);

var _a;
//# sourceMappingURL=post.service.js.map

/***/ }),

/***/ "../../../../../src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post() {
    }
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.index = function (callback) {
        this._http.get('/users').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.getPosts = function (callback) {
        this._http.get('/getPosts').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.createUser = function (newUser, callback) {
        console.log("Inside the createUser method");
        this._http.post('/users', newUser).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.show = function (id, callback) {
        this._http.get("users/" + id).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.update = function (newUser, callback) {
        this._http.put("users/" + newUser._id, newUser).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.destroy = function (id, callback) {
        this._http.delete("users/" + id).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.authenticate = function (user, callback) {
        this._http.post('/login', user).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.session = function (callback) {
        this._http.get('/session').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.logout = function (callback) {
        this._http.delete('/users').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map