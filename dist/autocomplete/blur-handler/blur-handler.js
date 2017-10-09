export default function () {
    this.restorePreviousSelection();
    this.displayList(false);
    if (this.control.untouched) {
        this.control.markAsTouched();
    }
}
//# sourceMappingURL=blur-handler.js.map