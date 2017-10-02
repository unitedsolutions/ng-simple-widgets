import * as _ from 'lodash';

export default function(visible = true) {
  _.extend(this, {visible});
  
  if(visible) {
    this.listEl.scrollTop = 0;
    return _.extend(this, {noEvents: false});
  }
  
  this.resetHighlightedItem();
  setTimeout(() => _.extend(this, {noEvents: true}), 200);  
}
