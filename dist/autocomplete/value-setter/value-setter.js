export default function (value) {
    if (value === void 0) { value = ''; }
    if (!this.control.dirty) {
        this.control.markAsDirty();
    }
    this.control.setValue(value);
}
//# sourceMappingURL=value-setter.js.map