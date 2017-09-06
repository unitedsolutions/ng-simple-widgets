import * as _ from 'lodash';
export default function (visible) {
    var _this = this;
    if (visible === void 0) { visible = true; }
    _.extend(this, { visible: visible });
    if (visible) {
        this.listEl.scrollTop = 0;
        return _.extend(this, { noEvents: false });
    }
    this.resetHighlightedItem();
    setTimeout(function () { return _.extend(_this, { noEvents: true }); }, 200);
}
//# sourceMappingURL=list-displayer.js.map