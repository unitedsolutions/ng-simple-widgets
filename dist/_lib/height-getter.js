export default function (el) {
    var computedStyle = window.getComputedStyle(el, undefined);
    var listHeightPx = computedStyle.getPropertyValue('height');
    return +listHeightPx.replace(/[^\d]/g, '');
};
//# sourceMappingURL=height-getter.js.map