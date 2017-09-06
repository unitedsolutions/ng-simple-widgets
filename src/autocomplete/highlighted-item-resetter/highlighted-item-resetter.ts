import * as _ from 'lodash';

export default function(highlightedItem?) {
  if(this.highlightedItem) {
    this.highlightedItem.highlighted = false;
  }
  
  if(highlightedItem) {
    highlightedItem.highlighted = true;
  }
  
  _.extend(this, {highlightedItem});    
}
