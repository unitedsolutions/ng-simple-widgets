export default function() {
  let [firstItem] = this.items;
  
  this.highlightItem(firstItem);
  this.selectItem(firstItem);
  this.transparent = true;
  this.display = true;
  
  setTimeout(() => {
    this.listEl.scrollTop = 0;
    this.toggleDisplay(false);
  });  
}
