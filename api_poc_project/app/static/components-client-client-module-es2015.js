(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-client-client-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header [header_title]=\"header_title\"></app-header>\n\n\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition -->\n\n  <!-- Column -->\n  <ng-container matColumnDef=\"identityNumber\">\n    <th mat-header-cell *matHeaderCellDef>Identity Number</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.identityNumber}} </td>\n  </ng-container>\n\n  <!-- Column -->\n  <ng-container matColumnDef=\"clientName\">\n    <th mat-header-cell *matHeaderCellDef>Client Name</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.clientName}} </td>\n  </ng-container>\n\n  <!-- Column -->\n  <ng-container matColumnDef=\"clientSurname\">\n    <th mat-header-cell *matHeaderCellDef>Client Surname</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.clientSurname}} </td>\n  </ng-container>\n\n  <!-- Column -->\n  <ng-container matColumnDef=\"age\">\n    <th mat-header-cell *matHeaderCellDef>Age</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.age}} </td>\n  </ng-container>\n\n\n  <!-- Action Column -->\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef>EDIT / DELETE</th>\n    <td class=\"buttons-acction-container\" mat-cell *matCellDef=\"let element\" class=\"action-link\"> \n      <button mat-icon-button (click)=\"openDialog('Edit',element)\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"openDialog('Delete',element)\">\n        <mat-icon>delete</mat-icon>\n      </button> \n    </td>\n  </ng-container>\n  \n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<button id=\"add-btn\" mat-mini-fab color=\"warn\" (click)=\"openDialog('Add',{})\">\n  <mat-icon>add</mat-icon>\n</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/dialog-box/dialog-box.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/dialog-box/dialog-box.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- dialog-box.component.html -->\r\n<h1 mat-dialog-title><strong>{{action}}</strong></h1>\r\n<form [formGroup]=\"form\" class=\"fields-content\" mat-dialog-content *ngIf=\"action != 'Delete'; else deleteTemplate\">\r\n  \r\n  <mat-form-field>\r\n    <input placeholder=\"Identity Number\" matInput formControlName=\"identityNumber\" class=\"form-control\">\r\n    <mat-error class=\"error-message\" *ngIf=\"form.get('identityNumber').errors\">required field *</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input placeholder=\"Age\" matInput formControlName=\"age\" class=\"form-control\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input placeholder=\"Client Name\" matInput formControlName=\"clientName\" class=\"form-control\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input placeholder=\"client Surname\" matInput formControlName=\"clientSurname\" class=\"form-control\">\r\n  </mat-form-field>\r\n\r\n</form>\r\n<ng-template #deleteTemplate>\r\n  Are you sure to delete this element? <b>{{local_data.clientName}}</b>\r\n</ng-template>\r\n<div class=\"buttons-content\" mat-dialog-actions>\r\n  <button mat-button (click)=\"doAction()\">{{action}}</button>\r\n  <button mat-button (click)=\"closeDialog()\" mat-flat-button>Cancel</button>\r\n</div>");

/***/ }),

/***/ "./src/app/components/client/client-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/components/client/client-routing.module.ts ***!
  \************************************************************/
/*! exports provided: ClientRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientRoutingModule", function() { return ClientRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.component */ "./src/app/components/client/client.component.ts");




const routes = [{ path: '', component: _client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"] }];
let ClientRoutingModule = class ClientRoutingModule {
};
ClientRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ClientRoutingModule);



/***/ }),

/***/ "./src/app/components/client/client.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/client/client.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/client/client.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/client/client.component.ts ***!
  \*******************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_models_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/client */ "./src/app/models/client.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ "./src/app/components/client/dialog-box/dialog-box.component.ts");
/* harmony import */ var src_app_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/client/client.service */ "./src/app/services/client/client.service.ts");






let ClientComponent = class ClientComponent {
    constructor(dialog, clientService) {
        this.dialog = dialog;
        this.clientService = clientService;
        this.header_title = "Clients in our comerce";
        this.dataSource = [];
        this.displayedColumns = src_app_models_client__WEBPACK_IMPORTED_MODULE_2__["clientColumns"];
    }
    ngOnInit() {
        this.clientService.getAllClients().subscribe(data => {
            this.dataSource = data['clients'];
        });
        ;
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_4__["DialogBoxComponent"], {
            width: '350px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Add') {
                this.addRowData(result.data);
            }
            else if (result.event == 'Edit') {
                this.updateRowData(result.data);
            }
            else if (result.event == 'Delete') {
                this.deleteRowData(result.data);
            }
        });
    }
    addRowData(row_obj) {
        var client = {
            identityNumber: row_obj.identityNumber,
            age: row_obj.age,
            clientName: row_obj.clientName,
            clientSurname: row_obj.clientSurname,
        };
        this.clientService.createClient(client);
        this.dataSource.push(client);
        //for update table rows when changes
        this.table.renderRows();
    }
    updateRowData(row_obj) {
        var client = {
            identityNumber: row_obj.identityNumber,
            age: row_obj.age,
            clientName: row_obj.clientName,
            clientSurname: row_obj.clientSurname,
        };
        this.dataSource = this.dataSource.filter(value => {
            if (value.identityNumber == row_obj.identityNumber) {
                value = client;
            }
            return true;
        });
        this.clientService.updateClient(client);
        //for update table rows when changes
        this.table.renderRows();
    }
    deleteRowData(row_obj) {
        this.dataSource = this.dataSource.filter(value => {
            return value.identityNumber != row_obj.identityNumber;
        });
        this.clientService.deleteClient(row_obj.identityNumber);
        //for update table rows when changes
        this.table.renderRows();
    }
};
ClientComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_services_client_client_service__WEBPACK_IMPORTED_MODULE_5__["ClientService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTable"], { static: true })
], ClientComponent.prototype, "table", void 0);
ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-client',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./client.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/client.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./client.component.css */ "./src/app/components/client/client.component.css")).default]
    })
], ClientComponent);



/***/ }),

/***/ "./src/app/components/client/client.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/client/client.module.ts ***!
  \****************************************************/
/*! exports provided: ClientModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientModule", function() { return ClientModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client-routing.module */ "./src/app/components/client/client-routing.module.ts");
/* harmony import */ var _client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client.component */ "./src/app/components/client/client.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog-box/dialog-box.component */ "./src/app/components/client/dialog-box/dialog-box.component.ts");







let ClientModule = class ClientModule {
};
ClientModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _client_component__WEBPACK_IMPORTED_MODULE_4__["ClientComponent"],
            _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _client_routing_module__WEBPACK_IMPORTED_MODULE_3__["ClientRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
        ],
        entryComponents: [
            _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxComponent"]
        ]
    })
], ClientModule);



/***/ }),

/***/ "./src/app/components/client/dialog-box/dialog-box.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/client/dialog-box/dialog-box.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fields-content {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n  \r\n.fields-content > * {\r\n    width: 100%;\r\n}\r\n  \r\n.buttons-content {\r\n    float: right;\r\n}\r\n  \r\n.mat-form-field{\r\n    margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGllbnQvZGlhbG9nLWJveC9kaWFsb2ctYm94LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsaWVudC9kaWFsb2ctYm94L2RpYWxvZy1ib3guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWVsZHMtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4gIFxyXG4uZmllbGRzLWNvbnRlbnQgPiAqIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnV0dG9ucy1jb250ZW50IHtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/client/dialog-box/dialog-box.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/client/dialog-box/dialog-box.component.ts ***!
  \**********************************************************************/
/*! exports provided: DialogBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function() { return DialogBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let DialogBoxComponent = class DialogBoxComponent {
    constructor(formBuilder, dialogRef, 
    //@Optional() is used to prevent error if no data is passed
    data) {
        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
        this.form = formBuilder.group({
            identityNumber: [this.local_data.identityNumber, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            age: [this.local_data.age],
            clientName: [this.local_data.clientName],
            clientSurname: [this.local_data.clientSurname]
        });
    }
    doAction() {
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.dialogRef.close({ event: this.action, data: this.form.value });
    }
    closeDialog() {
        this.dialogRef.close({ event: 'Cancel' });
    }
};
DialogBoxComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
DialogBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dialog-box',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/client/dialog-box/dialog-box.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog-box.component.css */ "./src/app/components/client/dialog-box/dialog-box.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], DialogBoxComponent);



/***/ }),

/***/ "./src/app/models/client.ts":
/*!**********************************!*\
  !*** ./src/app/models/client.ts ***!
  \**********************************/
/*! exports provided: clientColumns, CLIENTS_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientColumns", function() { return clientColumns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENTS_DATA", function() { return CLIENTS_DATA; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const clientColumns = [
    'identityNumber',
    'age',
    'clientName',
    'clientSurname',
    'action'
];
const CLIENTS_DATA = [
    {
        identityNumber: 1234565,
        age: 12,
        clientName: "David",
        clientSurname: "Tamayo Tirado"
    },
    {
        identityNumber: 12333333,
        age: 12,
        clientName: "Alejandro",
        clientSurname: "Tamayo Tirado"
    }
];


/***/ }),

/***/ "./src/app/services/client/client.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/client/client.service.ts ***!
  \***************************************************/
/*! exports provided: ClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientService", function() { return ClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ClientService = class ClientService {
    constructor(http) {
        this.http = http;
        this.url = 'http://127.0.0.1:5000/poc/v1';
    }
    getAllClients() {
        return this.http.get(`${this.url}/clients/`);
    }
    createClient(client) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        let options = {
            headers: httpHeaders
        };
        this.http.post(`${this.url}/client/`, {
            "identityNumber": client.identityNumber,
            "age": client.age,
            "clientName": client.clientName,
            "clientSurname": client.clientSurname
        }, options).subscribe((val) => {
            console.log("POST call successful value returned in body", val);
        }, response => {
            console.log("POST call in error", response);
        }, () => {
            console.log("The POST observable is now completed.");
        });
    }
    deleteClient(id) {
        this.http.delete(`${this.url}/client/${id}`)
            .subscribe((val) => {
            console.log("DELETE call successful value returned in body", val);
        }, response => {
            console.log("DELETE call in error", response);
        }, () => {
            console.log("The DELETE observable is now completed.");
        });
    }
    updateClient(client) {
        let httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        let options = {
            headers: httpHeaders
        };
        this.http.put(`${this.url}/client/${client.identityNumber}`, {
            "identityNumber": client.identityNumber,
            "age": client.age,
            "clientName": client.clientName,
            "clientSurname": client.clientSurname
        }, options).subscribe((val) => {
            console.log("POST call successful value returned in body", val);
        }, response => {
            console.log("POST call in error", response);
        }, () => {
            console.log("The POST observable is now completed.");
        });
    }
};
ClientService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ClientService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ClientService);



/***/ })

}]);
//# sourceMappingURL=components-client-client-module-es2015.js.map