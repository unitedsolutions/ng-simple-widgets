import * as _ from 'lodash';
import listScroller from '../../_lib/list-scroller';
export default function (evt, down) {
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
}
//# sourceMappingURL=keys-highlighter.js.map