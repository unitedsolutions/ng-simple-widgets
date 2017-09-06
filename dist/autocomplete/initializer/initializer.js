import * as _ from 'lodash';
export default function () {
    var _this = this;
    this.inputEl = this.input.nativeElement;
    this.listEl = this.list.nativeElement;
    this.debounceTime = +this.debounceTime || 400;
    setTimeout(function () {
        _this._items = _this.items.map(function (item) {
            return _.extend(item, { hidden: false });
        });
    });
}
//# sourceMappingURL=initializer.js.map