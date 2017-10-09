export default function(value = '') {
  if(!this.control.dirty) {
    this.control.markAsDirty();
  }
  
  this.control.setValue(value);
}
