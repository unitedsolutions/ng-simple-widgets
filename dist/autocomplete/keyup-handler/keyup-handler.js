import * as _ from 'lodash';
import ignoreKeyNames from '../_lib/ignore-key-names';
export default function (evt) {
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
}
//# sourceMappingURL=keyup-handler.js.map