import * as _         from 'lodash';
import ignoreKeyNames from '../_lib/ignore-key-names';

export default function(evt) {
  if(_.includes(ignoreKeyNames, evt.key)) {
    return;
  }
  
  if(this.inputEl.value.trim()) {
    clearTimeout(this.timeout);
    return this.timeout = setTimeout(() => {
      this.filterItems();
    }, this.debounceTime);
  }
  
  this.filterItems();
}
