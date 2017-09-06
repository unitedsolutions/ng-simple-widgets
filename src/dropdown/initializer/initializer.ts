import * as _ from 'lodash';

export default function() {
  let {placeholder} = this;
  
  if(!placeholder) {
    placeholder = 'Select from the provided choices';
  }
  
  this.listEl = this.list.nativeElement;
  this.selectedValue = placeholder;
  this.items.unshift({value: '', readables: [placeholder], highlighted: true});
  this.highlightItem(this.items[0]);
  _.extend(this, {placeholder});      
}
