import { Component, Input, ViewChild } from '@angular/core';
var AutocompleteComponent = (function () {
    function AutocompleteComponent() {
        this.noEvents = true;
        this.previousSelection = '';
    }
    AutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-simple-autocomplete',
                    template: "\n    <div class = \"ng-simple-autocomplete\">\n      <input #input class = \"ng-simple-autocomplete-input\" [ngClass] = \"inputClasses\" \n      spellcheck = \"false\" [placeholder] = \"placeholder\" (keyup) = \"keyup($event)\" \n      (focus) = \"filterItems()\" (blur) = \"blur()\" (keydown.arrowDown) = \"highlightByKeys($event)\" \n      (keydown.arrowUp) = \"highlightByKeys($event, false)\" (keydown.escape) = \"reset()\" \n      (keydown.enter) = \"selectItem(); input.blur()\" (keydown.tab) = \"selectItem()\" \n      (keydown) = \"keydown($event)\" />\n  \n      <div class = \"ng-simple-autocomplete-list\" [ngClass] = \"{visible: loading}\">\n        <div class = \"ng-simple-autocomplete-list-item\">\n          <span>loading items...</span>\n        </div>\n      </div>\n  \n      <div #list [ngClass] = \"{visible: visible, 'no-events': noEvents}\"\n      class = \"ng-simple-autocomplete-list\">\n        <div class = \"ng-simple-autocomplete-list-wrapper\" [ngClass] = \"{cover: useListCover}\"\n        (mousemove) = \"useListCover = false\">\n          <div class = \"ng-simple-autocomplete-list-item\" *ngFor = \"let item of _items\" \n          [ngClass] = \"{highlighted: item.highlighted, hidden: item.hidden}\"\n          [innerHtml] = \"item.readableWithMatches || item.readable\" (click) = \"selectItem(item)\" \n          (mouseenter) = \"highlightItem(item)\"></div>\n      \n          <div *ngIf = \"noMatch\" class = \"ng-simple-autocomplete-list-item\">\n            <span>No items matched your input</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .ng-simple-autocomplete-list {\n      opacity: 0;\n    }\n    .ng-simple-autocomplete-list.visible {\n      opacity: 1;\n    }\n    .ng-simple-autocomplete-list.no-events {\n      pointer-events: none;\n    }\n    .ng-simple-autocomplete-list-wrapper {\n      position: relative;\n    }\n    .ng-simple-autocomplete-list-wrapper.cover::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1000;\n      background-color: transparent;\n    }\n    .ng-simple-autocomplete-list-item.hidden {\n      display: none;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    AutocompleteComponent.ctorParameters = function () { return []; };
    AutocompleteComponent.propDecorators = {
        'for': [{ type: Input },],
        'form': [{ type: Input },],
        'items': [{ type: Input },],
        'placeholder': [{ type: Input },],
        'inputClasses': [{ type: Input },],
        'debounceTime': [{ type: Input },],
        'list': [{ type: ViewChild, args: ['list',] },],
        'input': [{ type: ViewChild, args: ['input',] },],
    };
    return AutocompleteComponent;
}());
export { AutocompleteComponent };
//# sourceMappingURL=constructor.js.map