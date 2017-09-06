import { NgModule } from '@angular/core';
import { AutocompleteModule } from './autocomplete/autocomplete.module';
import { DropdownModule } from './dropdown/dropdown.module';
var ngSimpleWidgetsModule = (function () {
    function ngSimpleWidgetsModule() {
    }
    ngSimpleWidgetsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AutocompleteModule,
                        DropdownModule
                    ],
                    exports: [
                        AutocompleteModule,
                        DropdownModule
                    ]
                },] },
    ];
    /** @nocollapse */
    ngSimpleWidgetsModule.ctorParameters = function () { return []; };
    return ngSimpleWidgetsModule;
}());
export { AutocompleteModule, DropdownModule, ngSimpleWidgetsModule };
//# sourceMappingURL=ng-simple-widgets.js.map