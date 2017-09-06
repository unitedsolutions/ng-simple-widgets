import * as _ from 'lodash';
export default function (highlightedItem) {
    if (this.highlightedItem) {
        this.highlightedItem.highlighted = false;
    }
    highlightedItem.highlighted = true;
    _.extend(this, { highlightedItem: highlightedItem });
}
//# sourceMappingURL=item-highlighter.js.map