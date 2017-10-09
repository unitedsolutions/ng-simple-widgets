(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('lodash'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'lodash', '@angular/common'], factory) :
	(factory((global.ngSimpleWidgets = {}),global.ng.core,global._,global.ng.common));
}(this, (function (exports,core,_,common) { 'use strict';

var AutocompleteComponent = /** @class */ (function () {
    function AutocompleteComponent() {
        this.noEvents = true;
        this.previousSelection = '';
    }
    AutocompleteComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng-simple-autocomplete',
                    template: "\n    <div class = \"ng-simple-autocomplete\">\n      <input #input class = \"ng-simple-autocomplete-input\" [ngClass] = \"inputClasses\" \n      spellcheck = \"false\" [placeholder] = \"placeholder\" (keyup) = \"keyup($event)\" \n      (focus) = \"filterItems()\" (blur) = \"blur()\" (keydown.arrowDown) = \"highlightByKeys($event)\" \n      (keydown.arrowUp) = \"highlightByKeys($event, false)\" (keydown.escape) = \"reset()\" \n      (keydown.enter) = \"selectItem(); input.blur()\" (keydown.tab) = \"selectItem()\" \n      (keydown) = \"keydown($event)\" />\n  \n      <div class = \"ng-simple-autocomplete-list\" [ngClass] = \"{visible: loading}\">\n        <div class = \"ng-simple-autocomplete-list-item\">\n          <span>loading items...</span>\n        </div>\n      </div>\n  \n      <div #list [ngClass] = \"{visible: visible, 'no-events': noEvents}\"\n      class = \"ng-simple-autocomplete-list\">\n        <div class = \"ng-simple-autocomplete-list-wrapper\" [ngClass] = \"{cover: useListCover}\"\n        (mousemove) = \"useListCover = false\">\n          <div class = \"ng-simple-autocomplete-list-item\" *ngFor = \"let item of _items\" \n          [ngClass] = \"{highlighted: item.highlighted, hidden: item.hidden}\"\n          [innerHtml] = \"item.readableWithMatches || item.readable\" (click) = \"selectItem(item)\" \n          (mouseenter) = \"highlightItem(item)\"></div>\n      \n          <div *ngIf = \"noMatch\" class = \"ng-simple-autocomplete-list-item\">\n            <span>No items matched your input</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .ng-simple-autocomplete-list {\n      opacity: 0;\n    }\n    .ng-simple-autocomplete-list.visible {\n      opacity: 1;\n    }\n    .ng-simple-autocomplete-list.no-events {\n      pointer-events: none;\n    }\n    .ng-simple-autocomplete-list-wrapper {\n      position: relative;\n    }\n    .ng-simple-autocomplete-list-wrapper.cover::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1000;\n      background-color: transparent;\n    }\n    .ng-simple-autocomplete-list-item.hidden {\n      display: none;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    AutocompleteComponent.ctorParameters = function () { return []; };
    AutocompleteComponent.propDecorators = {
        'for': [{ type: core.Input },],
        'form': [{ type: core.Input },],
        'items': [{ type: core.Input },],
        'placeholder': [{ type: core.Input },],
        'inputClasses': [{ type: core.Input },],
        'debounceTime': [{ type: core.Input },],
        'list': [{ type: core.ViewChild, args: ['list',] },],
        'input': [{ type: core.ViewChild, args: ['input',] },],
    };
    return AutocompleteComponent;
}());

var reset = function () {
    if (this.inputEl.value !== this.previousSelection) {
        this.inputEl.value = this.previousSelection;
    }
    this.resetHighlightedItem();
    this.listEl.scrollTop = 0;
    this.filterItems();
};

var resetHighlightedItem = function (highlightedItem) {
    if (this.highlightedItem) {
        this.highlightedItem.highlighted = false;
    }
    if (highlightedItem) {
        highlightedItem.highlighted = true;
    }
    _.extend(this, { highlightedItem: highlightedItem });
};

var restorePreviousSelection = function () {
    var _this = this;
    setTimeout(function () {
        if (_this.inputEl.value !== _this.previousSelection) {
            _this.inputEl.value = _this.previousSelection;
        }
    }, 100);
    this.loading = false;
};

var displayList = function (visible) {
    var _this = this;
    if (visible === void 0) { visible = true; }
    _.extend(this, { visible: visible });
    if (visible) {
        this.listEl.scrollTop = 0;
        return _.extend(this, { noEvents: false });
    }
    this.resetHighlightedItem();
    setTimeout(function () { return _.extend(_this, { noEvents: true }); }, 200);
};

var selectItem = function (item) {
    if (item === void 0) { item = this.highlightedItem; }
    if (item) {
        var value = item.value, readable = item.readable;
        this.previousSelection = readable;
        this.setValue(value);
        if (this.inputEl.value !== readable) {
            this.inputEl.value = readable;
        }
    }
};

var ngOnInit = function () {
    var _this = this;
    this.inputEl = this.input.nativeElement;
    this.listEl = this.list.nativeElement;
    this.debounceTime = +this.debounceTime || 400;
    setTimeout(function () {
        _this._items = _this.items.map(function (item) {
            return _.extend(item, { hidden: false });
        });
    });
};

var ngAfterViewChecked = function () {
    if (this.form['form']) {
        this.form = this.form.form;
    }
    this.control = this.form.controls[this.for];
};

var setLoadingStatus = function (loading) {
    if (loading === void 0) { loading = true; }
    _.extend(this, { loading: loading, visible: !loading });
};

var blur = function () {
    this.restorePreviousSelection();
    this.displayList(false);
    if (this.control.untouched) {
        this.control.markAsTouched();
    }
};

var ignoreKeyNames = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Escape',
    'Shift',
    'CapsLock',
    'Enter',
    'Control',
    'Alt',
    'Tab',
    'Home',
    'End',
    'PageDown',
    'PageUp',
    'Insert',
    'NumLock'
];

var keydown = function (evt) {
    if (_.includes(ignoreKeyNames, evt.key)) {
        return;
    }
    this.setValue();
    this.setLoadingStatus();
};

var keyup = function (evt) {
    var _this = this;
    if (_.includes(ignoreKeyNames, evt.key)) {
        return;
    }
    if (this.inputEl.value.trim()) {
        clearTimeout(this.timeout);
        return this.timeout = setTimeout(function () {
            _this.filterItems();
        }, this.debounceTime);
    }
    this.filterItems();
};

var itemsResetter = function (items) {
    _.each(items, function (item) {
        var readableWithMatches = item.readableWithMatches, hidden = item.hidden;
        if (readableWithMatches) {
            _.extend(item, { readableWithMatches: '' });
        }
        if (hidden) {
            _.extend(item, { hidden: false });
        }
    });
};

var itemsHighlighter = function (searchValue) {
    var _this = this;
    var rxCharactersRx = /[-[\]{}()*+?.,\\^$|#\s]/g;
    var valueRx = searchValue.replace(rxCharactersRx, '\\$&');
    valueRx = new RegExp(valueRx, 'ig');
    this.noMatch = true;
    _.each(this._items, function (item) {
        var readable = item.readable;
        var matches = readable.match(valueRx);
        if (matches) {
            _this.noMatch = false;
            var parts = readable.split(valueRx);
            var readableWithMatches = _.reduce(parts, function (readableWithMatches, part) {
                var match = matches.shift() || '';
                if (match) {
                    match = "<span class = \"match\">" + match + "</span>";
                }
                return readableWithMatches += (part + match);
            }, '');
            _.extend(item, { readableWithMatches: readableWithMatches, hidden: false });
            if (searchValue.length === readable.length) {
                _this.selectItem(item);
            }
        }
        else {
            _.extend(item, { readableWithMatches: '', hidden: true });
        }
    });
};

var filterItems = function () {
    if (document.activeElement !== this.inputEl) {
        return;
    }
    var searchValue = this.inputEl.value.trim();
    this.previousSelection = searchValue;
    this.displayList();
    if (!searchValue) {
        return itemsResetter(this._items);
    }
    itemsHighlighter.call(this, searchValue);
    this.setLoadingStatus(false);
};

var highlightItem = function (item) {
    this.resetHighlightedItem(item);
    if (item) {
        this.inputEl.value = item.readable;
    }
};

var heightGetter = function (el) {
    var computedStyle = window.getComputedStyle(el, undefined);
    var listHeightPx = computedStyle.getPropertyValue('height');
    return +listHeightPx.replace(/[^\d]/g, '');
};

var listScroller = function (listEl, childIndex, childrenSelector) {
    var listHeight = heightGetter(listEl);
    var scrollTop = listEl.scrollTop;
    var listBottom = listHeight + scrollTop;
    var children = listEl.querySelectorAll(childrenSelector);
    var child = children[childIndex];
    var childHeight = heightGetter(child);
    var offsetTop = child.offsetTop;
    var childBottom = offsetTop + childHeight;
    if (offsetTop < scrollTop) {
        listEl.scrollTop -= scrollTop - offsetTop;
    }
    else if (childBottom > listBottom) {
        listEl.scrollTop += childHeight;
    }
};

var highlightByKeys = function (evt, down) {
    var _this = this;
    if (down === void 0) { down = true; }
    var visibles = _.filter(this._items, { hidden: false });
    var factor = down ? 1 : -1;
    var index = _.findIndex(visibles, function (item) { return item === _this.highlightedItem; });
    index += factor;
    evt.preventDefault();
    this.useListCover = true;
    if (index < 0) {
        this.restorePreviousSelection();
        return this.resetHighlightedItem();
    }
    if (index === visibles.length) {
        return;
    }
    listScroller(this.listEl, index, '.ng-simple-autocomplete-list-item:not(.hidden)');
    this.highlightItem(visibles[index]);
};

var setValue = function (value) {
    if (value === void 0) { value = ''; }
    if (this.control.pristine) {
        this.control.markAsDirty();
    }
    this.control.setValue(value);
};

_.extend(AutocompleteComponent.prototype, {
    reset: reset,
    resetHighlightedItem: resetHighlightedItem,
    restorePreviousSelection: restorePreviousSelection,
    displayList: displayList,
    selectItem: selectItem,
    ngOnInit: ngOnInit,
    ngAfterViewChecked: ngAfterViewChecked,
    setLoadingStatus: setLoadingStatus,
    blur: blur,
    keydown: keydown,
    keyup: keyup,
    filterItems: filterItems,
    highlightItem: highlightItem,
    highlightByKeys: highlightByKeys,
    setValue: setValue
});
var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    AutocompleteModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
                    ],
                    declarations: [
                        AutocompleteComponent
                    ],
                    exports: [
                        AutocompleteComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    AutocompleteModule.ctorParameters = function () { return []; };
    return AutocompleteModule;
}());

var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
    }
    DropdownComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng-simple-dropdown',
                    template: "\n    <div class = \"ng-simple-dropdown\">\n      <div class = \"ng-simple-dropdown-selection\" tabindex = \"0\" \n      (click) = \"toggleDisplay()\" (blur) = \"toggleDisplay(false); blur()\"\n      (keydown.space) = \"toggleDisplay()\" (keydown.enter) = \"selectHighlightedItem()\"\n      (keydown.enter) = \"toggleDisplay()\" (keydown.arrowUp) = \"highlightByKeys($event)\" \n      (keydown.arrowDown) = \"highlightByKeys($event, true)\" (keydown.escape) = \"reset()\"\n      [ngClass] = \"selectionClasses\">{{selectedValue}}</div>\n  \n      <div #list [ngClass] = \"{transparent: transparent, display: display}\"\n      class = \"ng-simple-dropdown-list\">\n        <div class = \"ng-simple-dropdown-list-wrapper\" [ngClass] = \"{cover: useListCover}\"\n        (mousemove) = \"useListCover = false\">\n          <div class = \"ng-simple-dropdown-list-item\" *ngFor = \"let item of items\"\n          [ngClass] = \"{highlighted: item.highlighted}\" (click) = \"selectItem(item)\" \n          (mouseenter) = \"highlightItem(item)\">\n            <div class = \"ng-simple-dropdown-list-item-readable\"\n            *ngFor = \"let readable of item.readables\">{{readable}}</div>\n          </div>      \n        </div>\n      </div>\n    </div>\n  ",
                    styles: ["\n    .ng-simple-dropdown-list {\n      display: none;\n    }\n    .ng-simple-dropdown-list.display {\n      display: block;\n    }\n    .ng-simple-dropdown-list.transparent {\n      opacity: 0;\n    }\n    .ng-simple-dropdown-list-wrapper {\n      position: relative;\n    }\n    .ng-simple-dropdown-list-wrapper.cover::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      z-index: 1000;\n      background-color: transparent;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    DropdownComponent.ctorParameters = function () { return []; };
    DropdownComponent.propDecorators = {
        'for': [{ type: core.Input },],
        'form': [{ type: core.Input },],
        'items': [{ type: core.Input },],
        'placeholder': [{ type: core.Input },],
        'selectionClasses': [{ type: core.Input },],
        'list': [{ type: core.ViewChild, args: ['list',] },],
    };
    return DropdownComponent;
}());

var toggleDisplay = function (display) {
    var _this = this;
    if (_.isUndefined(display)) {
        display = !this.display;
    }
    var delay = display ? 0 : 200;
    _.extend(this, { transparent: !display });
    setTimeout(function () { return _.extend(_this, { display: display }); }, delay);
};

var reset$1 = function () {
    var _this = this;
    var firstItem = this.items[0];
    this.highlightItem(firstItem);
    this.selectItem(firstItem);
    this.transparent = true;
    this.display = true;
    setTimeout(function () {
        _this.listEl.scrollTop = 0;
        _this.toggleDisplay(false);
    });
};

var selectHighlightedItem = function () {
    if (this.display) {
        this.selectItem(this.highlightedItem);
    }
};

var highlightItem$1 = function (highlightedItem) {
    if (this.highlightedItem) {
        this.highlightedItem.highlighted = false;
    }
    highlightedItem.highlighted = true;
    _.extend(this, { highlightedItem: highlightedItem });
};

var init = function () {
    var placeholder = this.placeholder;
    if (!placeholder) {
        placeholder = 'Select from the provided choices';
    }
    this.listEl = this.list.nativeElement;
    this.selectedValue = placeholder;
    this.items.unshift({ value: '', readables: [placeholder], highlighted: true });
    this.highlightItem(this.items[0]);
    _.extend(this, { placeholder: placeholder });
};

var ngAfterViewChecked$1 = function () {
    if (this.form['form']) {
        this.form = this.form.form;
    }
    this.control = this.form.controls[this.for];
};

var selectItem$1 = function (item) {
    if (this.control.pristine) {
        this.control.markAsDirty();
    }
    this.control.setValue(item.value);
    this.selectedValue = item.readables[0];
};

var highlightByKeys$1 = function (evt, down) {
    var _this = this;
    if (down === void 0) { down = false; }
    evt.preventDefault();
    if (!this.display) {
        return this.toggleDisplay();
    }
    var factor = down ? 1 : -1;
    var index = _.findIndex(this.items, function (item) { return item === _this.highlightedItem; });
    index += factor;
    if (index === this.items.length || index < 0) {
        return;
    }
    this.useListCover = true;
    listScroller(this.listEl, index, '.ng-simple-dropdown-list-item');
    this.highlightItem(this.items[index]);
};

var ngOnChanges = function (changes) {
    if ('items' in changes) {
        this.init();
    }
};

var blur$1 = function () {
    if (this.control.untouched) {
        this.control.markAsTouched();
    }
};

_.extend(DropdownComponent.prototype, {
    toggleDisplay: toggleDisplay,
    blur: blur$1,
    reset: reset$1,
    selectHighlightedItem: selectHighlightedItem,
    highlightItem: highlightItem$1,
    init: init,
    ngAfterViewChecked: ngAfterViewChecked$1,
    selectItem: selectItem$1,
    highlightByKeys: highlightByKeys$1,
    ngOnChanges: ngOnChanges
});
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    DropdownModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
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

var ngSimpleWidgetsModule = /** @class */ (function () {
    function ngSimpleWidgetsModule() {
    }
    ngSimpleWidgetsModule.decorators = [
        { type: core.NgModule, args: [{
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

exports.AutocompleteModule = AutocompleteModule;
exports.DropdownModule = DropdownModule;
exports.ngSimpleWidgetsModule = ngSimpleWidgetsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
