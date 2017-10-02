import * as _ from 'lodash';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './_constructor/constructor';
import toggleDisplay from './display-toggler/display-toggler';
import reset from './resetter/resetter';
import selectHighlightedItem from './highlighted-item-selector/highlighted-item-selector';
import highlightItem from './item-highlighter/item-highlighter';
import init from './initializer/initializer';
import ngAfterViewChecked from './view-checked-initializer/view-checked-initializer';
import selectItem from './item-selector/item-selector';
import highlightByKeys from './keys-highlighter/keys-highlighter';
import ngOnChanges from './data-change-handler/data-change-handler';
_.extend(DropdownComponent.prototype, {
    toggleDisplay: toggleDisplay,
    reset: reset,
    selectHighlightedItem: selectHighlightedItem,
    highlightItem: highlightItem,
    init: init,
    ngAfterViewChecked: ngAfterViewChecked,
    selectItem: selectItem,
    highlightByKeys: highlightByKeys,
    ngOnChanges: ngOnChanges
});
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        DropdownComponent
                    ],
                    exports: [
                        DropdownComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    DropdownModule.ctorParameters = function () { return []; };
    return DropdownModule;
}());
export { DropdownModule };
//# sourceMappingURL=dropdown.module.js.map