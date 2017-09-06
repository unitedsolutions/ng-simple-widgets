import itemsResetter from './items-resetter/items-resetter';
import itemsHighlighter from './items-highlighter/items-highlighter';
export default function () {
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
}
//# sourceMappingURL=items-filterer.js.map