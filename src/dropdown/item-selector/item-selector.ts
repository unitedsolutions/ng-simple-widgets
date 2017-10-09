export default function(item) {
  if(this.control.pristine) {
    this.control.markAsDirty();
  }
  
  this.control.setValue(item.value);
  [this.selectedValue] = item.readables;  
}
