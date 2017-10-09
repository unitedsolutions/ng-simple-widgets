export default function(value = '') {
  if(this.control.pristine) {
    this.control.markAsDirty();
  }
  
  this.control.setValue(value);
}
