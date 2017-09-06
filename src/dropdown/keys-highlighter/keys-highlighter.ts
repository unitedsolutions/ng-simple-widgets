import * as _       from 'lodash';
import listScroller from '../../_lib/list-scroller';

export default function(evt, down = false) {
  evt.preventDefault();
  
  if(!this.display) {
    return this.toggleDisplay();
  }
  
  let factor = down ? 1 : -1;
  let index = _.findIndex(this.items, item => item === this.highlightedItem);
  index += factor;
  
  if(index === this.items.length || index < 0) {
    return;
  }
  
  this.useListCover = true;
  listScroller(this.listEl, index, '.ng-simple-dropdown-list-item');
  this.highlightItem(this.items[index]);  
}
