import * as _ from 'lodash';

export default function() {
  this.inputEl = this.input.nativeElement;
  this.listEl = this.list.nativeElement;
  this.debounceTime = +this.debounceTime || 400;
  
  setTimeout(() => {
    this._items = this.items.map(item => {
      return _.extend(item, {hidden: false});
    });
  });  
}
