export default function(item = this.highlightedItem) {
  if(item) {
    let {value, readable} = item;
    
    this.previousSelection = readable;
    this.form.controls[this.for].setValue(value);
    
    if(this.inputEl.value !== readable) {
      this.inputEl.value = readable;
    }
  }
}
