import heightGetter from './height-getter';
export default function (listEl, childIndex, childrenSelector) {
    var listHeight = heightGetter(listEl);
    var scrollTop = listEl.scrollTop;
    var listBottom = listHeight + scrollTop;
    var children = listEl.querySelectorAll(childrenSelector);
    var child = children[childIndex];
    var childHeight = heightGetter(child);
    var offsetTop = child.offsetTop;
    var childBottom = offsetTop + childHeight;
    if (offsetTop < scrollTop) {
        listEl.scrollTop -= scrollTop - offsetTop;
    }
    else if (childBottom > listBottom) {
        listEl.scrollTop += childHeight;
    }
};
//# sourceMappingURL=list-scroller.js.map