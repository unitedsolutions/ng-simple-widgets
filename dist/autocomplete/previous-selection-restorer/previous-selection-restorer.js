export default function () {
    var _this = this;
    setTimeout(function () {
        if (_this.inputEl.value !== _this.previousSelection) {
            _this.inputEl.value = _this.previousSelection;
        }
    }, 100);
    this.loading = false;
}
//# sourceMappingURL=previous-selection-restorer.js.map