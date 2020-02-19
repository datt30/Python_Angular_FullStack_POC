function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-product-product-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/dialog-box/dialog-box.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/dialog-box/dialog-box.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductDialogBoxDialogBoxComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- dialog-box.component.html -->\r\n<h1 mat-dialog-title><strong>{{action}}</strong></h1>\r\n<form [formGroup]=\"form\" class=\"fields-content\" mat-dialog-content *ngIf=\"action != 'Delete'; else deleteTemplate\">\r\n  \r\n  <mat-form-field>\r\n    <input placeholder=\"Product Name\" matInput formControlName=\"productName\" class=\"form-control\">\r\n    <mat-error class=\"error-message\" *ngIf=\"form.get('productName').errors\">required field *</mat-error>\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input placeholder=\"Price\" matInput formControlName=\"price\" class=\"form-control\">\r\n  </mat-form-field>\r\n\r\n  <mat-form-field>\r\n    <input placeholder=\"Product Detail\" matInput formControlName=\"detail\" class=\"form-control\">\r\n  </mat-form-field>\r\n\r\n</form>\r\n<ng-template #deleteTemplate>\r\n  Are you sure to delete this element? <b>{{local_data.productName}}</b>\r\n</ng-template>\r\n<div class=\"buttons-content\" mat-dialog-actions>\r\n  <button mat-button (click)=\"doAction()\">{{action}}</button>\r\n  <button mat-button (click)=\"closeDialog()\" mat-flat-button>Cancel</button>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header [header_title]=\"header_title\"></app-header>\n\n\n\n<table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition -->\n\n  <!-- Column -->\n  <ng-container matColumnDef=\"productName\">\n    <th mat-header-cell *matHeaderCellDef>Product Name</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.productName}} </td>\n  </ng-container>\n\n  <!-- Column -->\n  <ng-container matColumnDef=\"price\">\n    <th mat-header-cell *matHeaderCellDef>Price</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.price}} </td>\n  </ng-container>\n\n  <!-- Column -->\n  <ng-container matColumnDef=\"detail\">\n    <th mat-header-cell *matHeaderCellDef>Product Detail</th>\n    <td mat-cell *matCellDef=\"let element\"> {{element.detail}} </td>\n  </ng-container>\n\n\n  <!-- Action Column -->\n  <ng-container matColumnDef=\"action\">\n    <th mat-header-cell *matHeaderCellDef>EDIT / DELETE</th>\n    <td class=\"buttons-acction-container\" mat-cell *matCellDef=\"let element\" class=\"action-link\"> \n      <button mat-icon-button (click)=\"openDialog('Edit',element)\">\n        <mat-icon>edit</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"openDialog('Delete',element)\">\n        <mat-icon>delete</mat-icon>\n      </button> \n    </td>\n  </ng-container>\n  \n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>\n\n<button id=\"add-btn\" mat-mini-fab color=\"warn\" (click)=\"openDialog('Add',{})\">\n  <mat-icon>add</mat-icon>\n</button>";
    /***/
  },

  /***/
  "./src/app/components/product/dialog-box/dialog-box.component.css":
  /*!************************************************************************!*\
    !*** ./src/app/components/product/dialog-box/dialog-box.component.css ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductDialogBoxDialogBoxComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fields-content {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n            flex-direction: column;\r\n}\r\n  \r\n.fields-content > * {\r\n    width: 100%;\r\n}\r\n  \r\n.buttons-content {\r\n    float: right;\r\n}\r\n  \r\n.mat-form-field{\r\n    margin-bottom: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wcm9kdWN0L2RpYWxvZy1ib3gvZGlhbG9nLWJveC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpZWxkcy1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiAgXHJcbi5maWVsZHMtY29udGVudCA+ICoge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbnRlbnQge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/product/dialog-box/dialog-box.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/product/dialog-box/dialog-box.component.ts ***!
    \***********************************************************************/

  /*! exports provided: DialogBoxComponent */

  /***/
  function srcAppComponentsProductDialogBoxDialogBoxComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogBoxComponent", function () {
      return DialogBoxComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var DialogBoxComponent =
    /*#__PURE__*/
    function () {
      function DialogBoxComponent(formBuilder, dialogRef, //@Optional() is used to prevent error if no data is passed
      data) {
        _classCallCheck(this, DialogBoxComponent);

        this.formBuilder = formBuilder;
        this.dialogRef = dialogRef;
        this.data = data;
        this.local_data = Object.assign({}, data);
        this.action = this.local_data.action;
        this.form = formBuilder.group({
          productName: [this.local_data.productName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
          price: [this.local_data.price],
          detail: [this.local_data.detail]
        });
      }

      _createClass(DialogBoxComponent, [{
        key: "doAction",
        value: function doAction() {
          // stop here if form is invalid
          if (this.form.invalid) {
            return;
          }

          this.dialogRef.close({
            event: this.action,
            data: this.form.value
          });
        }
      }, {
        key: "closeDialog",
        value: function closeDialog() {
          this.dialogRef.close({
            event: 'Cancel'
          });
        }
      }]);

      return DialogBoxComponent;
    }();

    DialogBoxComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    DialogBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dialog-box',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dialog-box.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/dialog-box/dialog-box.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dialog-box.component.css */
      "./src/app/components/product/dialog-box/dialog-box.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DialogBoxComponent);
    /***/
  },

  /***/
  "./src/app/components/product/product-routing.module.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/product/product-routing.module.ts ***!
    \**************************************************************/

  /*! exports provided: ProductRoutingModule */

  /***/
  function srcAppComponentsProductProductRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductRoutingModule", function () {
      return ProductRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product.component */
    "./src/app/components/product/product.component.ts");

    var routes = [{
      path: '',
      component: _product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"]
    }];

    var ProductRoutingModule = function ProductRoutingModule() {
      _classCallCheck(this, ProductRoutingModule);
    };

    ProductRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ProductRoutingModule);
    /***/
  },

  /***/
  "./src/app/components/product/product.component.css":
  /*!**********************************************************!*\
    !*** ./src/app/components/product/product.component.css ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/product/product.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/product/product.component.ts ***!
    \*********************************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppComponentsProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_models_product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/product */
    "./src/app/models/product.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dialog-box/dialog-box.component */
    "./src/app/components/product/dialog-box/dialog-box.component.ts");
    /* harmony import */


    var src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/product/product.service */
    "./src/app/services/product/product.service.ts");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(dialog, productService) {
        _classCallCheck(this, ProductComponent);

        this.dialog = dialog;
        this.productService = productService;
        this.header_title = "Products Storage";
        this.dataSource = [];
        this.displayedColumns = src_app_models_product__WEBPACK_IMPORTED_MODULE_2__["productColumns"];
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.productService.getAllProducts().subscribe(function (data) {
            _this.dataSource = data['products'];
          });
          ;
        }
      }, {
        key: "openDialog",
        value: function openDialog(action, obj) {
          var _this2 = this;

          obj.action = action;
          var dialogRef = this.dialog.open(_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_4__["DialogBoxComponent"], {
            width: '350px',
            data: obj
          });
          dialogRef.afterClosed().subscribe(function (result) {
            if (result.event == 'Add') {
              _this2.addRowData(result.data);
            } else if (result.event == 'Edit') {
              _this2.updateRowData(result.data);
            } else if (result.event == 'Delete') {
              _this2.deleteRowData(result.data);
            }
          });
        }
      }, {
        key: "addRowData",
        value: function addRowData(row_obj) {
          var product = {
            productName: row_obj.productName,
            price: row_obj.price,
            detail: row_obj.detail
          };
          this.productService.createProduct(product);
          this.dataSource.push(product); //for update table rows when changes

          this.table.renderRows();
        }
      }, {
        key: "updateRowData",
        value: function updateRowData(row_obj) {
          var product = {
            productName: row_obj.productName,
            price: row_obj.price,
            detail: row_obj.detail
          };
          this.dataSource = this.dataSource.filter(function (value) {
            if (value.productName == row_obj.productName) {
              value = product;
            }

            return true;
          });
          this.productService.updateProduct(product); //for update table rows when changes

          this.table.renderRows();
        }
      }, {
        key: "deleteRowData",
        value: function deleteRowData(row_obj) {
          this.dataSource = this.dataSource.filter(function (value) {
            return value.productName != row_obj.productName;
          });
          this.productService.deleteProduct(row_obj.productName); //for update table rows when changes

          this.table.renderRows();
        }
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }, {
        type: src_app_services_product_product_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTable"], {
      static: true
    })], ProductComponent.prototype, "table", void 0);
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/product/product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/app/components/product/product.component.css")).default]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/components/product/product.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/components/product/product.module.ts ***!
    \******************************************************/

  /*! exports provided: ProductModule */

  /***/
  function srcAppComponentsProductProductModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductModule", function () {
      return ProductModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _product_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./product-routing.module */
    "./src/app/components/product/product-routing.module.ts");
    /* harmony import */


    var _product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./product.component */
    "./src/app/components/product/product.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dialog-box/dialog-box.component */
    "./src/app/components/product/dialog-box/dialog-box.component.ts");

    var ProductModule = function ProductModule() {
      _classCallCheck(this, ProductModule);
    };

    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_product_component__WEBPACK_IMPORTED_MODULE_4__["ProductComponent"], _dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _product_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      entryComponents: [_dialog_box_dialog_box_component__WEBPACK_IMPORTED_MODULE_6__["DialogBoxComponent"]]
    })], ProductModule);
    /***/
  },

  /***/
  "./src/app/models/product.ts":
  /*!***********************************!*\
    !*** ./src/app/models/product.ts ***!
    \***********************************/

  /*! exports provided: productColumns */

  /***/
  function srcAppModelsProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "productColumns", function () {
      return productColumns;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var productColumns = ['productName', 'price', 'detail', 'action'];
    /***/
  },

  /***/
  "./src/app/services/product/product.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/product/product.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServicesProductProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
        this.url = 'http://127.0.0.1:5000/poc/v1';
      }

      _createClass(ProductService, [{
        key: "getAllProducts",
        value: function getAllProducts() {
          return this.http.get("".concat(this.url, "/products/"));
        }
      }, {
        key: "createProduct",
        value: function createProduct(product) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          var options = {
            headers: httpHeaders
          };
          this.http.post("".concat(this.url, "/product/"), {
            "productName": product.productName,
            "price": product.price,
            "detail": product.detail
          }, options).subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
          }, function (response) {
            console.log("POST call in error", response);
          }, function () {
            console.log("The POST observable is now completed.");
          });
        }
      }, {
        key: "deleteProduct",
        value: function deleteProduct(id) {
          this.http.delete("".concat(this.url, "/product/").concat(id)).subscribe(function (val) {
            console.log("DELETE call successful value returned in body", val);
          }, function (response) {
            console.log("DELETE call in error", response);
          }, function () {
            console.log("The DELETE observable is now completed.");
          });
        }
      }, {
        key: "updateProduct",
        value: function updateProduct(product) {
          var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
          var options = {
            headers: httpHeaders
          };
          this.http.put("".concat(this.url, "/product/").concat(product.productName), {
            "productName": product.productName,
            "price": product.price,
            "detail": product.detail
          }, options).subscribe(function (val) {
            console.log("POST call successful value returned in body", val);
          }, function (response) {
            console.log("POST call in error", response);
          }, function () {
            console.log("The POST observable is now completed.");
          });
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  }
}]);
//# sourceMappingURL=components-product-product-module-es5.js.map