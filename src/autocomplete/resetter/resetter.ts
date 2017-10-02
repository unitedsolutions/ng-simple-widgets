export default function() {
  if(this.inputEl.value !== this.previousSelection) {
    this.inputEl.value = this.previousSelection;
  }
  
  this.resetHighlightedItem();
  this.listEl.scrollTop = 0;
  this.filterItems();  
}
