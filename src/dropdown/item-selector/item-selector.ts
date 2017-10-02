export default function(item) {
  this.control.setValue(item.value);
  [this.selectedValue] = item.readables;  
}
