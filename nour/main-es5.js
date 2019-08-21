(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.\n====>  > this is root component <\n\n\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>\n\n<router-outlet></router-outlet>\n-->\n<!-- <app-hema></app-hema> -->\n<!-- <app-events></app-events>  -->\n<!-- <app-cevents></app-cevents>  -->\n<!-- <app-my-forms></app-my-forms>  -->\n<!-- <app-my-component></app-my-component>  -->\n<!-- <app-favorite></app-favorite> -->\n<!-- <app-cpanel>\n  <div id=\"heading\">Heading</div>\n  <ng-container class=\"body\">Body</ng-container>\n</app-cpanel> -->\n\n<!-- <app-login></app-login> -->\n<!-- <app-directiv></app-directiv> -->\n<app-custmdirctivs></app-custmdirctivs>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/cevents/cevents.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/cevents/cevents.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>cevents works!</h1>\n\n\n<button (click)=\"myClick()\">click me1 </button><br>\n<br>\n<br>\n<br>\n<button (click)=\"myClick()\" (dblclick)=\"myDblClick()\">click me2 </button>\n<h2>My Text Is : {{myName}}</h2>\n<br>\n<br>\n<br>\n<div *ngIf=\"check\" >\n\n    <h2>My Text Is : {{myName}}</h2>\n\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/directiv/directiv.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/directiv/directiv.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>directiv works!</h1>\n<form [formGroup]=\"from\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\"\n    formControlName=\"email\"\n    class=\"form-control\"\n    id=\"exampleInputEmail1\"\n    aria-describedby=\"emailHelp\"\n    placeholder=\"Enter email\"\n    >\n    <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\" >\n      Pleas Enter Your Email\n    </div>\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n  </div>\n  <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/events/events.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/events/events.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>events works!</h1>\n<br>\n<br>\n<br>\n<button (click)=\"myClick()\">Click Me1 !</button><br>\n<br>\n<br>\n<br>\n\n<button (click)=\"myClick2('hema')\">Click Me2 !</button><br>\n<br>\n<br>\n<br>\n\n<button (click)=\"myClick3($event,'hema')\">Click Me3 !</button><br>\n<br>\n<br>\n<br>\n\n<button (mousedown)=\"myClick3($event,'hema')\">mousedown !</button><br>\n<br>\n<br>\n<br>\n\n<button (mouseup)=\"myClick3($event,'hema')\">mouseup !</button><br>\n<br>\n<br>\n<br>\n\n<button (mouseover)=\"myClick3($event,'hema')\">mouseover !</button><br>\n<br>\n<br>\n<br>\n\n<button (drag)=\"myClick3($event,'hema')\">darg !</button><br>\n<br>\n<br>\n<br>\n\n<button (dblclick)=\"myClick3($event,'hema')\">Dboul click !</button><br>\n<br>\n<br>\n<br>\n\n<button (dragover)=\"myClick3($event,'hema')\">drag over me !</button><br>\n<br>\n<p>drag over button of (drag over me )</p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/hema/hema.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/hema/hema.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <this is root> -->\n\n<h1 class=\"mycolor\">hema works!</h1><br>\n<h1 [class.mycolor]=myClassCss>hema works! class ts is true so class css turn on</h1><br>\n<h1 [class.mycolor]=myClassCss2>hema works! class ts is false so class css turn off</h1><br>\n<h1 [ngClass]=totalClass>hema works!</h1><br>\n<h3>{{'hema works with uppercase!'| uppercase}} </h3><br>\n<h3>{{'Hema Works with lowercase!'| lowercase}} </h3><br>\n<h1>this is birthday with | :{{ birthday | date}} </h1><br>\n<h1>this is birthday without | :{{ birthday}} </h1><br>\n<h1>this is birthday with | and with more | :{{ birthday | date | uppercase}} </h1><br>\n<h1>this is birthday with | and type date = \"dd-MM-yyyy\" :{{ birthday | date:\"dd-MM-yyyy\"}} </h1><br>\n<h1> My Salary : {{ mySalary | currency:\"GBP\"}} </h1><br>\n<h1> My Rate : {{ myRate | percent}} </h1><br>\n\n<span *ngIf=\"sultanName\" >{{suName}}</span><br>\n<span *ngIf=\"!sultanName\" >{{suName}}</span><br>\n<span *ngIf=\"!sultanName ; else anotherName\">{{suName}}</span><br>\n<span><ng-template #anotherName>this another name for if property not found</ng-template>\n<span>{{!sultanName ? suName :'this another name for if property not found in way 2'}}</span><br>\n</span>\n<br>\n<ul><li *ngFor=\"let person of people\" >{{person}}</li></ul>\n<ul><li *ngFor=\"let myJop of jop ;let i = index\" >{{i}}-{{myJop}}</li></ul>\n<ul><li *ngFor=\"let myJop of jop ;let i = index\" >{{i+1}}-{{myJop}}</li></ul>\n<ul><li *ngFor=\"let myplang of plang\" >{{myplang}}</li></ul>\n<ul><li *ngFor=\"let myplang of plang\" >{{myplang.languageName}}</li></ul>\n<ul><li *ngFor=\"let myplang of plang\" >{{myplang.shortcut}}</li></ul>\n<ul><li *ngFor=\"let myplang of plang\" >{{myplang.city}}</li></ul>\n\n<ul><li *ngFor=\"let myplang of plang\" >{{myplang.languageName}}-{{myplang.shortcut}}-{{myplang.city}}- <br> <img [src]=\"myplang.myNewImage\" alt=\"\"></li></ul>\n\n<br>\n<br>\n<br>\n<br>\n<div [ngSwitch]=\"true\">\n<p *ngSwitchCase=\"true\">\nmuhamed true\n<!-- this show if proparty true-->\n</p>\n<p *ngSwitchCase=\"false\">\nahmed false\n<!-- this show if proparty false -->\n</p>\n<p *ngSwitchDefault>\nnothing \n<!-- this show if proparty not true and not false -->\n</p>\n</div><br>\n<br>\n<br>\n<br>\n<br>\n<div [ngSwitch]=\"false\">\n<p *ngSwitchCase=\"true\">\nmuhamed true\n<!-- this show if proparty true-->\n</p>\n<p *ngSwitchCase=\"false\">\nahmed false\n<!-- this show if proparty false -->\n</p>\n<p *ngSwitchDefault>\nnothing \n<!-- this show if proparty not true and not false -->\n</p>\n</div><br>\n<br>\n<br>\n<br>\n<br>\n<div [ngSwitch]=\"\">\n<p *ngSwitchCase=\"true\">\nmuhamed true\n<!-- this show if proparty true-->\n</p>\n<p *ngSwitchCase=\"false\">\nahmed false\n<!-- this show if proparty false -->\n</p>\n<p *ngSwitchDefault>\nnothing \n<!-- this show if proparty not true and not false -->\n</p>\n</div><br>\n<br>\n<br>\n<br>\n<br>\n<div [ngSwitch]=\"myNumber\">\n<p *ngSwitchCase=\"50\">\nmuhamed 50\n<!-- this show if proparty true-->\n</p>\n<p *ngSwitchCase=\"100\">\nahmed 100\n<!-- this show if proparty false -->\n</p>\n<p *ngSwitchCase=\"200\">\n    ahmed 200\n    \n    </p>\n    <p *ngSwitchCase=\"300\">\n        ahmed 300\n        \n        </p>\n        <p *ngSwitchCase=\"400\">\n            ahmed 400\n            \n            </p>\n<p *ngSwitchDefault>\nnothing \n<!-- this show if proparty not true and not false -->\n</p>\n</div><br>\n\n\n<div><img src=\"{{myImage}}\" alt=\"\"></div>\n<div><img [src]=\"myImage\" alt=\"\"></div>\n<div><img bind-src=\"myImage\" alt=\"\"></div>\n<br>\n<div><img [textContent]=\"myImage\" alt=\"\"></div>\n\n\n\n\n<!-- this is follow my cource -->\n\n\n<!-- <h1>hema works!\n<br>\n{{name}}\n<br>\n{{lname}}\n<br>\n{{age}}\n<br>\n<br>\n<br>\n<br>\n{{employee.name}}\n<br>\n{{employee.lname}}\n<br>\n{{employee.age}}\n<br>\n\n{{3+5}}\n<br>\n{{age1}}\n</h1> -->\n\n\n<!-- <h2>{{Person}}</h2> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-component/my-component.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-component/my-component.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"isActive\" >my-component works! {{title}}</h1>\n\n<div class=\"container p-4\">\n<ul>\n    <li *ngFor=\"let item of users\" >\n        {{item}}\n    </li>\n</ul>\n<span> <h1 [style.background]=\"isActive2 ? 'yellow':'red'\">test binding</h1></span>\n<button (click)=\"methodName()\" class=\"p-2 text-light bg-danger shadow rounded\"> Save</button>\n\n<!-- (click)=\"divClicked()\" -->\n<div  class=\"p-5 bg-dark mt-2\">\n  <button (click)=\"btnClicked($event)\" class=\"p-2 mt-3 text-light bg-danger shadow rounded\">\n    Save 2\n  </button>\n  <br>\n\n  <button (click)=\"btnClicked2($event)\" class=\"p-2 mt-3 text-light bg-danger shadow rounded\">\n      Save 3\n  </button>\n  <br>\n  <br>\n  <br>\n  <!-- in key up will start function -->\n  <input (keyup)=\"onKeyUp($event)\" type=\"text\"><br>\n  <br>\n  <!-- in key up b will start function -->\n  <input (keyup.b)=\"onKeyUp($event)\" type=\"text\"><br>\n  <br>\n  <!-- in key up enter will start function with angular -->\n  <input (keyup.enter)=\"onKeyUp($event)\" type=\"text\"><br>\n  <br>\n  <!-- in key up enter will start function with js-->\n  <input (keyup)=\"onKeyUp2($event)\" type=\"text\">\n  <!-- this explen value from input to h2 with first way all change will be explen  -->\n  <br>\n  <br>\n  <h2 class='text-light'>name value is : {{nameValue}}</h2>\n  <input (keyup.enter)=\"onKeyUp3($event)\" type=\"text\">\n  <!--  this explen value from input to h2 with seconed way all change will be explen -->\n  <br>\n  <br>\n  <h2 class='text-light'>name value is : {{nameValue2}}</h2>\n  <input #firstName (keyup.enter)=\"onKeyUp4(firstName.value)\" type=\"text\">\n<!-- this explen object -->\n<br>\n<br>\n<h2 class='text-light'>name value is : {{nameValue3}}</h2>\n<input #lastName (keyup.enter)=\"onKeyUp5(lastName)\" [placeholder]=\"name\" type=\"text\">\n<!-- this explen value from input to h2 with hirdall change will be explen -->\n<br>\n<br>\n<h2 class='text-light'>name value is : {{nameValue4}}</h2>\n<input [value]=\"nameValue4\" (keyup.enter)=\"onKeyUp6()\" type=\"text\">\n\n<!-- this is the same way above but this is explen change -->\n<br>\n<br>\n\n\n\n<!-- <input #fName [value]=\"nameValue5\" (keyup.enter)=\"fName=$event.target.value;onKeyUp7(fName.value)\" type=\"text\"> -->\n<!-- this way -->\n<!-- <h2 class='text-light'>name value is : {{nameValue5}}</h2>\n<input #fName [value]=\"nameValue5\" (keyup.enter)=\"onKeyUp7(fName.value)\" type=\"text\"> -->\n<!-- or this way -->\n<h2 class='text-light'>name value is : {{nameVal}} </h2>\n<input [value]=\"nameVal\" (keyup.enter)=\"fName=$event.target.value;onKeyUp7(fName)\" type=\"text\">\n <!-- banana inbox -->\n <h2 class='text-light'>name value is : {{hName}} </h2>\n<input [(ngModel)]=\"hName\" (keyup.enter)=\"onKeyUp8(hName)\" type=\"text\">\n\n</div>\n`\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/my-forms/my-forms.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/my-forms/my-forms.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>my-forms works!</h1>\n\n\n<div class=\"container p-5\">\n\n        <form novalidate #fo=\"ngForm\" action=\"/action_page.php\" (ngSubmit)=\"mySubmit(fo)\">\n            <div class=\"form-group\">\n              <label for=\"name\">First Name:</label>\n              <input type=\"text\" [(ngModel)]=\"name\" #myName=\"ngModel\" required minlength=\"4\" name=\"name\" class=\"form-control\" id=\"name\">\n            </div>\n            <div class=\"form-group\">\n              <label for=\"lname\">Last Name:</label>\n              <input type=\"text\" [(ngModel)]=\"lname\" #myLname=\"ngModel\" required minlength=\"4\" name=\"lname\" class=\"form-control\" id=\"lname\">\n            </div>\n            <div class=\"form-group\">\n                    <label for=\"age\"> Age:</label>\n                    <input type=\"number\" [(ngModel)]=\"age\" #myAge=\"ngModel\" required minlength=\"2\" name=\"age\" class=\"form-control\"  id=\"age\">\n                  </div>\n            <div class=\"form-group form-check\">\n              <label class=\"form-check-label\">\n                <input class=\"form-check-input\" type=\"checkbox\"> Remember me\n              </label>\n            </div>\n            <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n          \n          <div *ngIf=\"myName.errors?.required && myName.touched\" class=\"alert alert-danger\" >Your First Name Is Required</div>\n          <div *ngIf=\"myName.errors?.minlength && myName.touched\" class=\"alert alert-danger\" >Min Required 4 Chars </div>\n\n          <div *ngIf=\"myLname.errors?.required && myLname.touched\" class=\"alert alert-danger\" >Your Last Name Is Required</div>\n          <div *ngIf=\"myLname.errors?.minlength && myLname.touched\" class=\"alert alert-danger\" >Min Required 4 Chars </div>\n\n          <div *ngIf=\"myAge.errors?.required && myAge.touched\" class=\"alert alert-danger\" >Your Age Is Required</div>\n          <div *ngIf=\"myAge.errors?.minlength && myAge.touched\" class=\"alert alert-danger\" >Min Required 2 Numbers </div>\n          </form>\n        \n\n</div>\n<!-- <div class=\"container\">\n<div *ngFor=\"let item of myShop\" >\n        <h3>{{item}}</h3>\n</div>\n    \n</div> -->\n<br><br>\n\n<div class=container>\n    <h3>{{name}}</h3>\n    <h3>{{lname}}</h3>\n    <h3>{{age}}</h3>\n    <h3>{{verfiyForm}}</h3>\n    <h3 *ngFor=\"let item of verfiyForm\" >{{item}}</h3>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cpanels/cpanel/cpanel.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cpanels/cpanel/cpanel.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>cpanel works!</h1>\n<div class=\"panal panal-defualt\">\n  <div class=\" w-5 p-5 bg-dark ml-2 mr-2 text-white panal-heading\"><ng-content #heading></ng-content>\n  </div>\n  <div class=\"w-5 p-5 bg-danger mt-1 ml-2 mr-2 text-white panal-body\"><ng-content select=\".body\"></ng-content>\n  </div>\n</div>\n  <ul>\n    <li *ngFor=\"let course of courses ; let i=index\" >{{i+1}}-{{course}}</li>\n  </ul>\n  <ul>\n      <li *ngFor=\"let item of items ; let i=index\" >{{i+1}}-{{item}}</li>\n  </ul>\n  <ul>\n      <li *ngFor=\"let item of items ; let i=index\" >{{i+1}}-{{item.name}}</li>\n  </ul>\n  <ul>\n      <li *ngFor=\"let item of items ; let i=index\" >{{i+1}}-{{item.age}}</li>\n  </ul>\n  <ul>\n      <li *ngFor=\"let item of items ; let i=index\" >{{i+1}}-{{item.city}}</li>\n  </ul>\n  <ul>\n      <li *ngFor=\"let item of items ; let i=index\" >{{i+1}}-{{item.school}}</li>\n  </ul>\n  <ul>\n      <li *ngFor=\"let item of items ; let i=index\" >{{i+1}}-{{item.school.first}}-{{item.school.second}}-{{item.school.third}}</li>\n  </ul>\n  <ul>\n      <li *ngFor=\"let item of items ; let i=index\" >{{i+1}}-{{item.name}}-{{item.age}}-{{item.city}}</li>\n  </ul>\n  <ul *ngFor=\"let item of items; let i=index\" >\n    <li> <h1>{{i+1}})person Information</h1></li>\n    <li>{{item.name}}</li>\n    <li>{{item.age}}</li>\n    <li>{{item.city}}</li>\n    <li>{{item.school.first}}</li>\n    <li>{{item.school.second}}</li>\n    <li>{{item.school.third}}</li>\n    //\n    <ul>\n        <li>{{item.name}}</li>\n        <li>{{item.age}}</li>\n        <li>{{item.city}}</li>\n        <li>{{item.school.first}}</li>\n        <li>{{item.school.second}}</li>\n        <li>{{item.school.third}}</li>\n        <li *ngFor=\"let item of items ; let i=index\" >{{i+1}}-{{item.school.first}}-{{item.school.second}}-{{item.school.third}}</li>\n  </ul>\n  </ul>\n  <!-- this code -->\n  <!-- <p>This Is Add And Remove Element</p>\n  <div class=\"w-5 p-5 bg-danger mt-1 ml-2 mr-2 text-white panal-body\">\n      <p>This Is Add And Remove Element</p>\n      <button class=\"btn btn-primary\"(click)=\"onAdd()\">Add</button>\n        <ul>\n\n            <li *ngFor=\"let course of courses\" ><button class=\"btn btn-primary mt-2\" (click)=\"onRemove(course)\">Rmove</button> {{course}}</li>\n\n        </ul>\n\n</div>\n<div class=\"w-5 p-5 bg-danger mt-1 ml-2 mr-2 text-white panal-body\">\n    <p>This Is Add And Remove Element By Track By</p>\n    <button class=\"btn btn-primary\"(click)=\"onAdd2()\">Add</button>\n      <ul>\n\n          <li *ngFor=\"let course2 of courses2;trackBy : trackByCourse()\" ><button class=\"btn btn-primary mt-2\" (click)=\"onRemove2(course2)\">Rmove</button> {{course2.id}}={{course2.CourseName}}</li>\n\n      </ul>\n\n</div>\n<div class=\"alert-danger p-5 m-2\" *ngIf=\"courses2.length === 0\" >\n  No courses yet\n</div> -->\n<!-- the same this but by ng templet -->\n<p>This Is Add And Remove Element</p>\n  <div class=\"w-5 p-5 bg-danger mt-1 ml-2 mr-2 text-white panal-body\">\n      <p>This Is Add And Remove Element</p>\n      <button class=\"btn btn-primary\"(click)=\"onAdd()\">Add</button>\n        <ul>\n\n            <li *ngFor=\"let course of courses\" ><button class=\"btn btn-primary mt-2\" (click)=\"onRemove(course)\">Rmove</button> {{course}}</li>\n\n        </ul>\n\n</div>\n<div *ngIf=\"courses2.length > 0 ; then courses2List else noCOurses2\" ></div>\n<ng-template #courses2List>\n    <div class=\"w-5 p-5 bg-danger mt-1 ml-2 mr-2 text-white panal-body\">\n        <p>This Is Add And Remove Element By Track By Anf ng-templetg</p>\n        <button class=\"btn btn-primary\"(click)=\"onAdd2()\">Add</button>\n          <ul>\n\n              <li *ngFor=\"let course2 of courses2;trackBy : trackByCourse()\" ><button class=\"btn btn-primary mt-2\" (click)=\"onRemove2(course2)\">Rmove</button> {{course2.id}}={{course2.CourseName}}</li>\n\n          </ul>\n\n    </div>\n</ng-template>\n\n\n<ng-template #noCOurses2  >\n  <div class=\"alert-danger p-5 m-2\" *ngIf=\"courses2.length === 0\" >\n    No courses yet\n  </div>\n</ng-template>\n\n\n<!-- This is hidden proartiy -->\n\n<div [hidden]=\"courses2.length ===0\">\n    <div class=\"w-5 p-5 bg-danger mt-1 ml-2 mr-2 text-white panal-body\">\n        <p>This Is Add And Remove Element By Track By And Hidden Proparty</p>\n        <button class=\"btn btn-primary\"(click)=\"onAdd2()\">Add</button>\n          <ul>\n\n              <li *ngFor=\"let course2 of courses2;trackBy : trackByCourse()\" ><button class=\"btn btn-primary mt-2\" (click)=\"onRemove2(course2)\">Rmove</button> {{course2.id}}={{course2.CourseName}}</li>\n\n          </ul>\n\n    </div>\n</div>\n\n\n<div class=\"alert-danger p-5 m-2\" [hidden]=\"courses2.length > 0\">\n\n    No courses yet\n</div>\n<!-- ng switch case -->\n<div class=\"w-5 p-5 bg-danger mt-1 ml-2 mr-2 text-white panal-body\">\n\n<ul class=\"nav nav-pills \">\n  <li class=\"nav-item m-2 p-2 \"[class.active]=\"defualtView === 'courses5'\"><a class=\"nav-link btn btn-outline-primary p-2\" (click)=\"setView('courses5')\"> Cources</a></li>\n  <li class=\"nav-item m-2 p-2\" [class.active]=\"defualtView === 'courtifications'\"><a class=\"nav-link btn btn-outline-primary p-2\" (click)=\"setView('courtifications')\"> Courtifications</a></li>\n  <li class=\"nav-item m-2 p-2\" [class.active]=\"defualtView === 'courtifications2'\"><a class=\"nav-link btn btn-outline-primary p-2\" (click)=\"setView('courtifications2')\"> Courtifications2</a></li>\n\n</ul>\n<div class=\" w-5 p-5 bg-dark ml-2 mr-2 text-white panal-heading\" [ngSwitch]=\"defualtView\">\n    <div *ngSwitchCase=\"'courses5'\" >List Of Courses</div>\n    <div *ngSwitchCase=\"'courtifications'\" >List Of Courtifications</div>\n    <div *ngSwitchCase=\"'courtifications2'\" >List Of Courtifications2</div>\n  </div>\n\n</div>\n<!-- ng style -->\n<div\n[style.background]=\"isColor?'red':'yellow'\"\n[style.color]=\"isColor?'white':'red'\"\n[style.width]=\"isColor?'100%':'90%'\"\n[style.height]=\"isColor?'5rem':'4rem'\"\n> welcome to my site</div>\n\n\n\n<!-- <div\n[ngstyle]=\"{\n  'background':isColor?'red':'yellow',\n  'color':isColor?'white':'red',\n  'width':isColor?'100%':'100%',\n  'height':isColor?'5rem':'4rem',\n}\"\n> welcome to my site2</div> -->\n\n<!-- end ng style --><label>To Upper Case in Format File : </label>\n<input type=\"text\" appInputFormat><br>\n<label>To Lower Case in Html File : </label>\n<input type=\"text\" appInputFormat [format]=\"'toLowerCase'\"><br>\n<label>To Upper Case in Html File : </label>\n<input type=\"text\" appInputFormat [format]=\"'toUpperCase'\">\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/custmdirctivs/custmdirctivs.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/custmdirctivs/custmdirctivs.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"text\" #title (keyup.enter)=\"creatPost(title.value)\" class=\"form-control\"> -->\n\n<!-- Or -->\n\n\n<input type=\"text\" #title (keyup.enter)=\"creatPost(title)\" class=\"form-control\">\n\n<div class=\"m-5 p-5\" *ngFor=\"let post of posts\">\n<ul class=\"list-group\">\n  <li class=\"list-group-item text-center h1\">\n    <button class=\"btn btn-outline-info mr-2\" (click)=\"updatePost(post.title)\"> Update </button>\n\n    <button class=\"btn btn-outline-danger mr-2\" (click)=\"deletePost(post)\"> Delete </button>\n  </li>\n  <li   class=\"list-group-item text-center h1\">\n    {{post.id}}\n  </li>\n  <li   class=\"list-group-item text-center h1\">\n    {{post.title}}\n  </li>\n  <li   class=\"list-group-item \">\n    {{post.body}}\n  </li>\n</ul>\n</div>\n<!-- <form [formGroup]=\"form\" #f=\"ngForm\" (ngSubmit)=\"submit()\" class=\"m-5 p-5\">\n  <div class=\"form-group\">\n    <div class=\"alert alert-danger\" *ngIf=\"form.errors\" >\n      Email Or Password Is Incorect\n    </div>\n    <label for=\"exampleInputPassword1\">Email</label>\n\n    <input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Enter Your Email\">\n    <div class=\"alert alert-danger\" *ngIf=\"email.pending\" >\n      <img src=\"https://digitalsynopsis.com/wp-content/uploads/2016/06/loading-animations-preloader-gifs-ui-ux-effects-24.gif\" width=\"100\" height=\"50\" alt=\"\">\n    </div>\n    <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\">\n            Pleas Enter Your Email\n\n       <div *ngIf=\"email.errors.shouldBeUnique\" >\n         Email Allready Exist\n       </div>\n     </div>\n    </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n     <input type=\"text\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n     <div class=\"alert alert-danger\" *ngIf=\"password.touched && password.invalid\">\n       <div *ngIf=\"password.errors.noSpaceAllowed\" >\n         No Space Required\n       </div>\n\n     </div>\n    </div>\n    <div class=\"form-group form-check\">\n      <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n      <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n    <div class=\"form-group\">\n      <input type=\"text\" formControlName=\"age\"/>\n      <p *ngIf=\"age.errors?.range\">error message</p>\n      </div>\n  </form> -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/favorite-components/favorite/favorite.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/favorite-components/favorite/favorite.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--\n<h1>favorite works!</h1>\n  <span class=\"glyphicon\"\n[class.glyphicon glyphicon-heart]=\"isFavorite\"\n[class.glyphicon glyphicon-heart-empty]=\"!isFavorite\"\n(click)=\"onFavoriteClick()\"\n>\n\n</span>\n\nng class\n\n<h1>favorite works!</h1>\n  <span class=\"glyphicon\"\n[ngClass]=\"\n{\n  'glyphicon glyphicon-heart' : isFavorite,\n  'glyphicon glyphicon-heart-empty' : !isFavorite\n}\n\"\n(click)=\"onFavoriteClick()\"\n>\n\n</span>\n<div>\n  to use any number character to cut look to ts\n  {{title | summary :5}}<br/>\n  {{title | summary :15}}<br/>\n\n\n</div>\n-->\n\n\n<span *ngIf=\"isFavorite()\" >wellcom : {{title | summary :10}}</span>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>login works!</h1>\n<!-- this is normal validtion -->\n<form #f=\"ngForm\" (ngSubmit)=\"submit(f)\"  class=\"m-5\">\n  <div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Email address</label>\n    <input type=\"email\"\n    minlength=\"10\"\n    pattern=\"ibrahimahmed@gmail.com\"\n    (change)=\"logObj(email)\"\n    required name=\"email\"\n    ngModel #email=\"ngModel\"\n    class=\"form-control\"\n    id=\"exampleInputEmail1\"\n    aria-describedby=\"emailHelp\"\n    placeholder=\"Enter email\">\n    <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    <div class=\"alert alert-danger\" *ngIf=\"email.touched && email.invalid\">\n        <div class=\"alert alert-danger\" *ngIf=\"email.errors.required\"> Your Email Requaird </div>\n        <div class=\"alert alert-danger\" *ngIf=\"email.errors.minlength\"> Your minlength is 15 </div>\n        <div class=\"alert alert-danger\" *ngIf=\"email.errors.minlength\"> Your minlength is {{email.errors.minlength.requiredLength}} </div>\n        <div class=\"alert alert-danger\" *ngIf=\"email.errors.pattern\"> Your pattern is error </div>\n\n    </div>\n\n  </div>\n  <div class=\"form-group\">\n    <label for=\"exampleInputPassword1\">Password</label>\n    <input type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" [max]=\"20\">\n  </div>\n  <div class=\"form-group form-check\">\n    <input type=\"checkbox\" class=\"form-check-input\" id=\"exampleCheck1\">\n    <label class=\"form-check-label\" for=\"exampleCheck1\">Check me out</label>\n  </div>\n  <button type=\"submit\" [disabled]=\"f.invalid\" class=\"btn btn-primary\">Submit</button>\n</form>\n<!-- this is ng2 validtion -->\n\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'nour';
        this.favoriteState = false;
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_hema_hema_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/hema/hema.component */ "./src/app/components/hema/hema.component.ts");
/* harmony import */ var _components_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/events/events.component */ "./src/app/components/events/events.component.ts");
/* harmony import */ var _components_cevents_cevents_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cevents/cevents.component */ "./src/app/components/cevents/cevents.component.ts");
/* harmony import */ var _components_my_forms_my_forms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/my-forms/my-forms.component */ "./src/app/components/my-forms/my-forms.component.ts");
/* harmony import */ var _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/my-component/my-component.component */ "./src/app/components/my-component/my-component.component.ts");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _favorite_components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./favorite-components/favorite/favorite.component */ "./src/app/favorite-components/favorite/favorite.component.ts");
/* harmony import */ var _summary_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./summary.pipe */ "./src/app/summary.pipe.ts");
/* harmony import */ var _cpanels_cpanel_cpanel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cpanels/cpanel/cpanel.component */ "./src/app/cpanels/cpanel/cpanel.component.ts");
/* harmony import */ var _input_format_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./input-format.directive */ "./src/app/input-format.directive.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_directiv_directiv_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/directiv/directiv.component */ "./src/app/components/directiv/directiv.component.ts");
/* harmony import */ var _custmdirctivs_custmdirctivs_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./custmdirctivs/custmdirctivs.component */ "./src/app/custmdirctivs/custmdirctivs.component.ts");
/* harmony import */ var _service_post_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/post.service */ "./src/app/service/post.service.ts");


// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';




















//import { HttpModule } from '@angular/http'
// import { from } from 'rxjs';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_hema_hema_component__WEBPACK_IMPORTED_MODULE_7__["HemaComponent"],
                _components_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"],
                _components_cevents_cevents_component__WEBPACK_IMPORTED_MODULE_9__["CeventsComponent"],
                _components_my_forms_my_forms_component__WEBPACK_IMPORTED_MODULE_10__["MyFormsComponent"],
                _components_my_component_my_component_component__WEBPACK_IMPORTED_MODULE_11__["MyComponentComponent"],
                _favorite_components_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_13__["FavoriteComponent"],
                _summary_pipe__WEBPACK_IMPORTED_MODULE_14__["SummaryPipe"],
                _cpanels_cpanel_cpanel_component__WEBPACK_IMPORTED_MODULE_15__["CpanelComponent"],
                _input_format_directive__WEBPACK_IMPORTED_MODULE_16__["InputFormatDirective"],
                _login_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _components_directiv_directiv_component__WEBPACK_IMPORTED_MODULE_19__["DirectivComponent"],
                _custmdirctivs_custmdirctivs_component__WEBPACK_IMPORTED_MODULE_20__["CustmdirctivsComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng2_validation__WEBPACK_IMPORTED_MODULE_18__["CustomFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                //CustomValidators
            ],
            providers: [_services_data_service_service__WEBPACK_IMPORTED_MODULE_12__["DataServiceService"], _service_post_service__WEBPACK_IMPORTED_MODULE_21__["PostService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/cevents/cevents.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/cevents/cevents.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2V2ZW50cy9jZXZlbnRzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/cevents/cevents.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/cevents/cevents.component.ts ***!
  \*********************************************************/
/*! exports provided: CeventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CeventsComponent", function() { return CeventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CeventsComponent = /** @class */ (function () {
    function CeventsComponent() {
        this.myName = "Hema";
        this.check = true;
    }
    CeventsComponent.prototype.myClick = function () {
        this.myName = "nour";
        this.check = !this.check;
    };
    ;
    CeventsComponent.prototype.myDblClick = function () {
        this.myName = "hema";
        this.myName = "hema";
    };
    ;
    CeventsComponent.prototype.ngOnInit = function () {
    };
    CeventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cevents',
            template: __webpack_require__(/*! raw-loader!./cevents.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/cevents/cevents.component.html"),
            styles: [__webpack_require__(/*! ./cevents.component.css */ "./src/app/components/cevents/cevents.component.css")]
        })
    ], CeventsComponent);
    return CeventsComponent;
}());



/***/ }),

/***/ "./src/app/components/directiv/directiv.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/directiv/directiv.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-pristine.ng-invalid.ng-touched{\r\n  border:1px solid red\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kaXJlY3Rpdi9kaXJlY3Rpdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZGlyZWN0aXYvZGlyZWN0aXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wubmctcHJpc3RpbmUubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmVkXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/directiv/directiv.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/directiv/directiv.component.ts ***!
  \***********************************************************/
/*! exports provided: DirectivComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivComponent", function() { return DirectivComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_3__);




var DirectivComponent = /** @class */ (function () {
    function DirectivComponent() {
        this.from = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_3__["CustomValidators"].range([10, 20]))
        });
    }
    Object.defineProperty(DirectivComponent.prototype, "email", {
        get: function () {
            return this.from.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DirectivComponent.prototype, "age", {
        get: function () {
            return this.from.get('age');
        },
        enumerable: true,
        configurable: true
    });
    DirectivComponent.prototype.ngOnInit = function () {
    };
    DirectivComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-directiv',
            template: __webpack_require__(/*! raw-loader!./directiv.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/directiv/directiv.component.html"),
            styles: [__webpack_require__(/*! ./directiv.component.css */ "./src/app/components/directiv/directiv.component.css")]
        })
    ], DirectivComponent);
    return DirectivComponent;
}());



/***/ }),

/***/ "./src/app/components/events/events.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/events/events.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/events/events.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
        // this.myClick();
    }
    EventsComponent.prototype.myClick = function () {
        console.log("click Me");
    };
    ;
    EventsComponent.prototype.myClick2 = function (name) {
        console.log(name);
    };
    ;
    EventsComponent.prototype.myClick3 = function (e, name) {
        console.log(e.type, name);
    };
    ;
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-events',
            template: __webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/components/events/events.component.css")]
        })
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/components/hema/hema.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/hema/hema.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycolor{\r\n    color: red;\r\n    font-weight: 40px;\r\n    font-style: italic;\r\n    text-transform: capitalize\r\n}\r\n.mycolor2{\r\n    font-style: italic;\r\n    text-transform: capitalize\r\n}\r\n.mycolor3{\r\n    color: blue;\r\n    font-weight: 40px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZW1hL2hlbWEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQjtBQUNKO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZW1hL2hlbWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbG9ye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MHB4O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemVcclxufVxyXG4ubXljb2xvcjJ7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZVxyXG59XHJcbi5teWNvbG9yM3tcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/hema/hema.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hema/hema.component.ts ***!
  \***************************************************/
/*! exports provided: HemaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HemaComponent", function() { return HemaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HemaComponent = /** @class */ (function () {
    /*  Person:Persons; // this with interface
      Persons:Persons[];
    */
    /* person:{
       id:number,
       name:string,
       lname:string,
       age:number
   
     } // this with object */
    /*
  
  
  
    // to add value in one thingonly
  
    // you can but value in constructor or ngOnInt only i mean you shodn.t but vlue in this var
    name:string = "3obad";// or name= "3obad";
    lname="Ahmed";// or lname:string= "Ahmed";
    age=25;// or age:number= "25";
    secondAge:any=50;
    // to add more things in one thing
    employee={name:'ali', lname:'muhamed' , age:40}
    age1:[number,string]; // this way to can but 2 type in 1 value
  
  
    */
    function HemaComponent() {
        this.birthday = new Date(2000, 3, 23);
        this.mySalary = 4000;
        this.myRate = 15.20;
        this.suName = "sultan abdulhamid";
        this.sultanName = true;
        this.myNumber = 100;
        this.myImage = "http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png";
        this.myClassCss = true;
        this.myClassCss2 = false;
        this.totalClass = {};
        this.myClass2 = false;
        this.myClass3 = true;
        //  sultanName=false; // if this false the name مش هيضهر
        this.people = ["ahmed", "muhamed", "ali", "osama"];
        this.jop = ["developer", "system admin", "programmer", "network"];
        this.plang = [
            {
                languageName: 'JAVA',
                shortcut: 'jasmine',
                city: 'inda',
                myNewImage: 'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
            },
            {
                languageName: 'Angular',
                shortcut: 'An',
                city: 'asuyt',
                myNewImage: 'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
            },
            {
                languageName: 'Paython',
                shortcut: 'Py',
                city: 'cairo',
                myNewImage: 'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
            },
            {
                languageName: 'css',
                shortcut: 'cs',
                city: 'mansoura',
                myNewImage: 'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
            },
            {
                languageName: 'Perl',
                shortcut: 'pl',
                city: 'new yourk',
                myNewImage: 'http://canadianarabs.ca/wp-content/uploads/2018/04/300x150.png'
            },
        ];
        this.classFunction();
        /*// use this with object
            this.Person={
              id:2,
            name:'string',
            lname:'string',
            age:2
          
            },
        // use this with interface
            this.Persons=[{
              id:1,
            name:'string1',
            lname:'string1',
            age:20
          
            },{
              id:2,
            name:'string2',
            lname:'string2',
            age:25
          
            },{
              id:3,
            name:'string3',
            lname:'string3',
            age:30
          
            }]
        
        */
        /*
          this.name='amr';// but if i write here number browser give me erorr
          this.lname='warda';// but if i write here number browser give me erorr
          this.age=55; // but if i write here string browser give me erorr
          this.secondAge=50;// you can type string here
          this.age1=[20,"student"];
          this.changeName(); // this is way to run function or in ngOnInit()
      
      
          */
    }
    HemaComponent.prototype.classFunction = function () {
        this.totalClass = {
            mycolor2: this.myClass2,
            mycolor3: this.myClass3
        };
    };
    ;
    HemaComponent.prototype.ngOnInit = function () {
        /*
        
            // this.employee.name='H';
            this.employee.lname='dabor';
            this.employee.age=50;
            this.changeAge();// this is way to run function or in ngOnInit()
        
        */
    };
    HemaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hema',
            template: __webpack_require__(/*! raw-loader!./hema.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/hema/hema.component.html"),
            styles: [__webpack_require__(/*! ./hema.component.css */ "./src/app/components/hema/hema.component.css")]
        })
    ], HemaComponent);
    return HemaComponent;
}());

/*
// you can but interface in spcial file
interface Persons{
  id:number,
  name:string,
  lname:string,
  age:number

}*/ 


/***/ }),

/***/ "./src/app/components/my-component/my-component.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktY29tcG9uZW50L215LWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/my-component/my-component.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/my-component/my-component.component.ts ***!
  \*******************************************************************/
/*! exports provided: MyComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyComponentComponent", function() { return MyComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyComponentComponent = /** @class */ (function () {
    function MyComponentComponent() {
        this.title = 'One Page';
        this.isActive = true;
        this.isActive2 = true;
        this.nameValue4 = 'Hema';
        this.name = '  Your Name';
        this.nameVal = 'Hema1';
    }
    MyComponentComponent.prototype.methodName = function () {
        alert('Welcome Event Binding');
        console.log('Welcome Event Binfing');
    };
    MyComponentComponent.prototype.divClicked = function () {
        console.log('Div is Clicked');
    };
    MyComponentComponent.prototype.btnClicked = function ($event) {
        console.log('Button is Clicked:', $event);
    };
    MyComponentComponent.prototype.btnClicked2 = function ($event) {
        $event.stopPropagation();
        console.log('Button is Clicked:');
    };
    MyComponentComponent.prototype.onKeyUp = function ($event) {
        console.log('Key up ', $event);
    };
    MyComponentComponent.prototype.onKeyUp2 = function ($event) {
        if ($event.keyCode == 13) {
            alert('Enter was Pressed');
            console.log('Enter Was Pressed');
        }
    };
    MyComponentComponent.prototype.onKeyUp3 = function ($event) {
        this.nameValue = ($event.target.value);
    };
    MyComponentComponent.prototype.onKeyUp4 = function (firstName) {
        this.nameValue2 = (firstName);
    };
    MyComponentComponent.prototype.onKeyUp5 = function (lastName) {
        this.nameValue3 = (lastName);
        console.log(lastName);
    };
    MyComponentComponent.prototype.onKeyUp6 = function () {
        console.log(this.nameValue4);
    };
    MyComponentComponent.prototype.onKeyUp7 = function (fName) {
        this.nameVal = fName;
        console.log(this.nameVal);
    };
    MyComponentComponent.prototype.onKeyUp8 = function (hName) {
        console.log(hName);
    };
    MyComponentComponent.prototype.ngOnInit = function () {
    };
    MyComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-component',
            template: __webpack_require__(/*! raw-loader!./my-component.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-component/my-component.component.html"),
            styles: [__webpack_require__(/*! ./my-component.component.css */ "./src/app/components/my-component/my-component.component.css")]
        })
    ], MyComponentComponent);
    return MyComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/my-forms/my-forms.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/my-forms/my-forms.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktZm9ybXMvbXktZm9ybXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/my-forms/my-forms.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/my-forms/my-forms.component.ts ***!
  \***********************************************************/
/*! exports provided: MyFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyFormsComponent", function() { return MyFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MyFormsComponent = /** @class */ (function () {
    function MyFormsComponent() {
        this.name = "";
        this.lname = "";
        this.age = 0;
        this.verfiyForm = "";
    }
    // name="";
    //  myShop=['Apple','orange','watermilon']
    // mySubmit(){
    //   this.myShop.push(this.name)
    // }
    MyFormsComponent.prototype.mySubmit = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.verfiyForm = value;
        }
        else {
            this.verfiyForm = "Not Valid";
        }
    };
    MyFormsComponent.prototype.ngOnInit = function () {
    };
    MyFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-forms',
            template: __webpack_require__(/*! raw-loader!./my-forms.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/my-forms/my-forms.component.html"),
            styles: [__webpack_require__(/*! ./my-forms.component.css */ "./src/app/components/my-forms/my-forms.component.css")]
        })
    ], MyFormsComponent);
    return MyFormsComponent;
}());



/***/ }),

/***/ "./src/app/cpanels/cpanel/cpanel.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cpanels/cpanel/cpanel.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NwYW5lbHMvY3BhbmVsL2NwYW5lbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cpanels/cpanel/cpanel.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cpanels/cpanel/cpanel.component.ts ***!
  \****************************************************/
/*! exports provided: CpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CpanelComponent", function() { return CpanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CpanelComponent = /** @class */ (function () {
    function CpanelComponent() {
        this.isColor = true;
        this.defualtView = 'courses5';
        this.courses = [
            'Html',
            'Js',
            'Css'
        ];
        this.courses2 = [
            { 'id': 1, 'CourseName': 'Css' },
            { 'id': 2, 'CourseName': 'Js' },
            { 'id': 3, 'CourseName': 'Html' },
            { 'id': 4, 'CourseName': 'Sass' },
        ];
        this.items = [
            {
                name: 'Ahmed',
                age: 20,
                city: 'cairo',
                school: {
                    first: 'school: ' + 1,
                    second: 'school: ' + 2,
                    third: 'school: ' + 3,
                }
            },
            {
                name: 'Ibrahim',
                age: 19,
                city: 'Asyut',
                school: {
                    first: 'school: ' + 4,
                    second: 'school: ' + 5,
                    third: 'school: ' + 6,
                }
            },
            {
                name: 'Hend',
                age: 22,
                city: 'Egypt',
                school: {
                    first: 'school: ' + 7,
                    second: 'school: ' + 8,
                    third: 'school: ' + 9,
                }
            }
        ];
    }
    CpanelComponent.prototype.setView = function (selectedView) {
        this.defualtView = selectedView;
    };
    CpanelComponent.prototype.onAdd = function () {
        this.courses.push("Angular");
    };
    CpanelComponent.prototype.onRemove = function (course2) {
        var index = this.courses2.indexOf(course2);
        this.courses2.splice(index, 1);
    };
    CpanelComponent.prototype.trackByCourse = function (index, course2) {
        return course2 ? course2.id : undefined;
    };
    CpanelComponent.prototype.onAdd2 = function () {
        this.courses2.push({ 'id': 5, 'CourseName': 'Angular' });
    };
    CpanelComponent.prototype.onRemove2 = function (course2) {
        var index = this.courses2.indexOf(course2);
        this.courses2.splice(index, 1);
    };
    CpanelComponent.prototype.ngOnInit = function () {
    };
    CpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cpanel',
            template: __webpack_require__(/*! raw-loader!./cpanel.component.html */ "./node_modules/raw-loader/index.js!./src/app/cpanels/cpanel/cpanel.component.html"),
            styles: [__webpack_require__(/*! ./cpanel.component.css */ "./src/app/cpanels/cpanel/cpanel.component.css")]
        })
    ], CpanelComponent);
    return CpanelComponent;
}());



/***/ }),

/***/ "./src/app/custmdirctivs/custmdirctivs.component.css":
/*!***********************************************************!*\
  !*** ./src/app/custmdirctivs/custmdirctivs.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RtZGlyY3RpdnMvY3VzdG1kaXJjdGl2cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/custmdirctivs/custmdirctivs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/custmdirctivs/custmdirctivs.component.ts ***!
  \**********************************************************/
/*! exports provided: CustmdirctivsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustmdirctivsComponent", function() { return CustmdirctivsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _login_validations_Uniqness_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../login/validations/Uniqness.validator */ "./src/app/login/validations/Uniqness.validator.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-validation */ "./node_modules/ng2-validation/dist/index.js");
/* harmony import */ var ng2_validation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_validation__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _validetor_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validetor.validation */ "./src/app/validetor.validation.ts");








var CustmdirctivsComponent = /** @class */ (function () {
    function CustmdirctivsComponent(http) {
        //constructor(private service:PostService) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
        this.obs = rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].interval(1000).take(3).map(function (d) { return Date.now; }).subscribe(function (a) {
            console.log(a);
        });
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _login_validations_Uniqness_validator__WEBPACK_IMPORTED_MODULE_3__["UniqnessValidator"].checkUniquness),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_validetor_validation__WEBPACK_IMPORTED_MODULE_7__["TextValidator"].noSpaceAllowed]),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', ng2_validation__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].range([5, 9]))
        });
    }
    /*
     creatPost(input:HTMLInputElement){
      let post = {title : input , id: '' }
      this.http.post(this.url , JSON.stringify(post)).subscribe(resbonse=>{
        this.posts.splice(0,0,post)
      })
       */
    //Or
    CustmdirctivsComponent.prototype.creatPost = function (input) {
        var _this = this;
        var post = { title: input.value, id: '1', body: 'New Body' };
        this.http.post(this.url, JSON.stringify(post)).subscribe(function (resbonse) {
            _this.posts.splice(0, 0, post);
        });
    };
    CustmdirctivsComponent.prototype.updatePost = function (post, inputTitle) {
        var _this = this;
        var updatepost = { title: inputTitle, id: post.id };
        console.log(updatepost);
        this.http.put(this.url + '/' + post.id, JSON.stringify(updatepost)).subscribe(function (resbonse) {
            var index = _this.posts.indexOf(post);
            _this.posts[index] = updatepost;
            //Or
            //his.posts[this.posts.indexOf(post)] = resbonse withOut  ==> let index = this.posts.indexOf(post);
        });
    };
    CustmdirctivsComponent.prototype.deletePost = function (post) {
        var _this = this;
        var index = this.posts.indexOf(post);
        this.http.delete(this.url + '/' + post.id).subscribe(function (resbonse) {
            _this.posts.splice(index, 1);
        });
    };
    /*
    obs = Observable.interval(1000).take(3).subscribe( a =>{
  
  
        console.log(a+1)
  
    })
  */
    /*
    obs = Observable.interval(1000).subscribe( a =>{
      if(a<=10){
        // return alert ( a )
        console.log(a)
      }
    })
    */
    CustmdirctivsComponent.prototype.submit = function () {
        return this.form.setErrors({ invalidlogin: true });
    };
    Object.defineProperty(CustmdirctivsComponent.prototype, "age", {
        get: function () {
            return this.form.get('age');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustmdirctivsComponent.prototype, "password", {
        get: function () {
            return this.form.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CustmdirctivsComponent.prototype, "email", {
        get: function () {
            return this.form.get('email');
        },
        enumerable: true,
        configurable: true
    });
    CustmdirctivsComponent.prototype.ngOnInit = function () {
        //  this.service.getPosts();
        var _this = this;
        this.http.get(this.url).subscribe(function (resbonse) {
            _this.posts = resbonse;
        });
        /*
        this.http.get(this.url).subscribe(resbonse=>
          {
            console.log(resbonse)
          })
          */
    };
    CustmdirctivsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    CustmdirctivsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-custmdirctivs',
            template: __webpack_require__(/*! raw-loader!./custmdirctivs.component.html */ "./node_modules/raw-loader/index.js!./src/app/custmdirctivs/custmdirctivs.component.html"),
            styles: [__webpack_require__(/*! ./custmdirctivs.component.css */ "./src/app/custmdirctivs/custmdirctivs.component.css")]
        })
    ], CustmdirctivsComponent);
    return CustmdirctivsComponent;
}());



/***/ }),

/***/ "./src/app/favorite-components/favorite/favorite.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/favorite-components/favorite/favorite.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zhdm9yaXRlLWNvbXBvbmVudHMvZmF2b3JpdGUvZmF2b3JpdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/favorite-components/favorite/favorite.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/favorite-components/favorite/favorite.component.ts ***!
  \********************************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FavoriteComponent = /** @class */ (function () {
    function FavoriteComponent() {
        /*title="lorem ipsmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm";
        isFavorite=false;
        onFavoriteClick(){
          this.isFavorite = !this.isFavorite ;
        }*/
        this.isFavorite = true;
        this.title = 'loremmmamsassmfklsad=fc loremmmamsassmfklsad=fcloremmmamsassmfklsad=fc';
    }
    FavoriteComponent.prototype.ngOnInit = function () {
    };
    FavoriteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-favorite',
            template: __webpack_require__(/*! raw-loader!./favorite.component.html */ "./node_modules/raw-loader/index.js!./src/app/favorite-components/favorite/favorite.component.html"),
            styles: [__webpack_require__(/*! ./favorite.component.css */ "./src/app/favorite-components/favorite/favorite.component.css")]
        })
    ], FavoriteComponent);
    return FavoriteComponent;
}());



/***/ }),

/***/ "./src/app/input-format.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/input-format.directive.ts ***!
  \*******************************************/
/*! exports provided: InputFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormatDirective", function() { return InputFormatDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InputFormatDirective = /** @class */ (function () {
    function InputFormatDirective(ref) {
        this.ref = ref;
    }
    InputFormatDirective.prototype.onFoucs = function () {
        console.log('Foucs');
        //window.alert('Foucs')
    };
    /*@HostListener('blur') onBlur(){
    let getValue:string = this.ref.nativeElement.value;
    this.ref.nativeElement.value = getValue.toUpperCase();
    //console.log('Blur')
      //window.alert('Bulr')
  
    }*/
    InputFormatDirective.prototype.onBlur = function () {
        var getValue = this.ref.nativeElement.value;
        if (this.format === "toUpperCase") {
            this.ref.nativeElement.value = getValue.toUpperCase();
        }
        else if (this.format === "toLowerCase") {
            this.ref.nativeElement.value = getValue.toLowerCase();
        }
        else {
            this.ref.nativeElement.value = getValue.toUpperCase();
        }
        //console.log('Blur')
        //window.alert('Bulr')
    };
    InputFormatDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('format')
    ], InputFormatDirective.prototype, "format", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus')
    ], InputFormatDirective.prototype, "onFoucs", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur')
    ], InputFormatDirective.prototype, "onBlur", null);
    InputFormatDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appInputFormat]'
        })
    ], InputFormatDirective);
    return InputFormatDirective;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/login/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control.ng-pristine.ng-invalid.ng-touched,.form-control.ng-invalid.ng-touched.ng-dirty{\r\n    border:1px solid red;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sLm5nLXByaXN0aW5lLm5nLWludmFsaWQubmctdG91Y2hlZCwuZm9ybS1jb250cm9sLm5nLWludmFsaWQubmctdG91Y2hlZC5uZy1kaXJ0eXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.logObj = function (email) {
        console.log(email);
    };
    LoginComponent.prototype.submit = function (f) {
        console.log(f);
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/validations/Uniqness.validator.ts":
/*!*********************************************************!*\
  !*** ./src/app/login/validations/Uniqness.validator.ts ***!
  \*********************************************************/
/*! exports provided: UniqnessValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqnessValidator", function() { return UniqnessValidator; });
var UniqnessValidator = /** @class */ (function () {
    function UniqnessValidator() {
    }
    UniqnessValidator.checkUniquness = function (control) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value == "ibrahimeahmed23@gmail.com") {
                    resolve({ shouldBeUnique: true });
                }
                else {
                    resolve(null);
                }
            }, 1000);
        });
    };
    return UniqnessValidator;
}());



/***/ }),

/***/ "./src/app/service/post.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/post.service.ts ***!
  \*****************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
        this.url = 'https://jsonplaceholder.typicode.com/posts';
    }
    PostService.prototype.getPosts = function () {
        var _this = this;
        this.http.get(this.url).subscribe(function (resbonse) {
            _this.posts = resbonse;
        });
    };
    PostService.prototype.creatPost = function (input) {
        var _this = this;
        var post = { title: input.value, id: '1', body: 'New Body' };
        this.http.post(this.url, JSON.stringify(post)).subscribe(function (resbonse) {
            _this.posts.splice(0, 0, post);
        });
    };
    PostService.prototype.updatePost = function (post, inputTitle) {
        var _this = this;
        var updatepost = { title: inputTitle, id: post.id };
        console.log(updatepost);
        this.http.put(this.url + '/' + post.id, JSON.stringify(updatepost)).subscribe(function (resbonse) {
            var index = _this.posts.indexOf(post);
            _this.posts[index] = updatepost;
            //Or
            //his.posts[this.posts.indexOf(post)] = resbonse withOut  ==> let index = this.posts.indexOf(post);
        });
    };
    PostService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    PostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        })
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// import {Observable} from 'rxjs/Observable';
var DataServiceService = /** @class */ (function () {
    // data:Observable<Array<string>>;
    // users:string[];
    function DataServiceService() {
        // this.users=['Muhamed','Ahmed','Ali'];
    }
    DataServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/summary.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/summary.pipe.ts ***!
  \*********************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    // to get summary
    /*
      transform(value: any, limit?:number): any {
        if(!value) return null;
        return value.substr(0,20)+ '........';
      }
      */
    ///
    SummaryPipe.prototype.transform = function (value, limit) {
        if (!value)
            return null;
        var actualLimit = (limit) ? limit : 20;
        return value.substr(0, actualLimit) + '........';
    };
    SummaryPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "./src/app/validetor.validation.ts":
/*!*****************************************!*\
  !*** ./src/app/validetor.validation.ts ***!
  \*****************************************/
/*! exports provided: TextValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextValidator", function() { return TextValidator; });
var TextValidator = /** @class */ (function () {
    function TextValidator() {
    }
    TextValidator.noSpaceAllowed = function (control) {
        if (control.value.indexOf(' ') != -1) {
            return { noSpaceAllowed: true };
        }
        else {
            return null;
        }
    };
    return TextValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\MR-3OBAD ~_^\nour\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map