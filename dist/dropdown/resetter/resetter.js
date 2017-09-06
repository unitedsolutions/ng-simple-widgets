export default function () {
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
}
//# sourceMappingURL=resetter.js.map