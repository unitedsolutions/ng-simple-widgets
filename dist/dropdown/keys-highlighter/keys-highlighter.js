import * as _ from 'lodash';
import listScroller from '../../_lib/list-scroller';
export default function (evt, down) {
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
}
//# sourceMappingURL=keys-highlighter.js.map