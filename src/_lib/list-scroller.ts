import heightGetter from './height-getter';

export default (listEl, childIndex, childrenSelector) => {
  let listHeight = heightGetter(listEl);
  let {scrollTop} = listEl;
  let listBottom = listHeight + scrollTop;
  let children = listEl.querySelectorAll(childrenSelector);
  let child = children[childIndex];
  let childHeight = heightGetter(child);
  let {offsetTop} = child;
  let childBottom = offsetTop + childHeight;

  if(offsetTop < scrollTop) {
    listEl.scrollTop -= scrollTop - offsetTop;
  } else if(childBottom > listBottom) {
    listEl.scrollTop += childHeight;
  }  
};
