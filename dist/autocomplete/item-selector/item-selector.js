export default function (item) {
    if (item === void 0) { item = this.highlightedItem; }
    if (item) {
        var value = item.value, readable = item.readable;
        this.previousSelection = readable;
        this.setValue(value);
        if (this.inputEl.value !== readable) {
            this.inputEl.value = readable;
        }
    }
}
//# sourceMappingURL=item-selector.js.map