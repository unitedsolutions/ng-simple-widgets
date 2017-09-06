import { Component, Input, ViewChild } from '@angular/core';
var DropdownComponent = (function () {
    function DropdownComponent() {
    }
    DropdownComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-simple-dropdown',
                    template: "\n    <div class = \"ng-simple-dropdown\">\n      <div class = \"ng-simple-dropdown-selection\" tabindex = \"0\" \n      (click) = \"toggleDisplay()\" (blur) = \"toggleDisplay(false)\"\n      (keydown.space) = \"toggleDisplay()\" (keydown.enter) = \"selectHighlightedItem()\"\n      (keydown.enter) = \"toggleDisplay()\" (keydown.arrowUp) = \"highlightByKeys($event)\" \n      (keydown.arrowDown) = \"highlightByKeys($event, true)\" (keydown.escape) = \"reset()\"\n      [ngClass] = \"selectionClasses\">{{selectedValue}}</div>\n  \n      <div #list [ngClass] = \"{transparent: transparent, display: display}\"\n      class = \"ng-simple-dropdown-list\">\n        <div class = \"ng-simple-dropdown-list-wrapper\" [ngClass] = \"{cover: useListCover}\"\n        (mousemove) = \"useListCover = false\">\n          <div class = \"ng-simple-dropdown-list-item\" *ngFor = \"let item of items\"\n          [ngClass] = \"{highlighted: item.highlighted}\" (click) = \"selectItem(item)\" \n          (mouseenter) = \"highlightItem(item)\">\n            <div class = \"ng-simple-dropdown-list-item-readable\"\n            *ngFor = \"let readable of item.readables\">{{readable}}</div>\n          </div>      \n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .ng-simple-dropdown-list {\n      display: none;\n    }\n    .ng-simple-dropdown-list.display {\n      display: block;\n    }\n    .ng-simple-dropdown-list.transparent {\n      opacity: 0;\n    }\n    .ng-simple-dropdown-list-wrapper {\n      position: relative;\n    }\n    .ng-simple-dropdown-list-wrapper.cover::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1000;\n      background-color: transparent;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return []; };
    DropdownComponent.propDecorators = {
        'for': [{ type: Input },],
        'form': [{ type: Input },],
        'items': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'selectionClasses': [{ type: Input },],
        'list': [{ type: ViewChild, args: ['list',] },],
    };
    return DropdownComponent;
}());
export { DropdownComponent };
//# sourceMappingURL=constructor.js.map