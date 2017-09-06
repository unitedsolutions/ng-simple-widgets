export default el => {
  let computedStyle = window.getComputedStyle(el, undefined);
  let listHeightPx = computedStyle.getPropertyValue('height');
  return +listHeightPx.replace(/[^\d]/g, '');
};
