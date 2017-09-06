export default function(item) {
  this.resetHighlightedItem(item);
  
  if(item) {
    this.inputEl.value = item.readable;
  }  
}
