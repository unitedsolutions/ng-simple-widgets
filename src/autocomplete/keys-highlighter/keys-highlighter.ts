import * as _       from 'lodash';
import listScroller from '../../_lib/list-scroller';

export default function(evt, down = true) {
  let visibles = _.filter(this._items, {hidden: false});
  let factor = down ? 1 : -1;
  let index = _.findIndex(visibles, item => item === this.highlightedItem);
  
  index += factor;
  evt.preventDefault();
  this.useListCover = true;
  
  if(index < 0) {
    this.restorePreviousSelection();
    return this.resetHighlightedItem();
  }
  
  if(index === visibles.length) {
    return;
  }
  
  listScroller(this.listEl, index, '.ng-simple-autocomplete-list-item:not(.hidden)');
  this.highlightItem(visibles[index]);
}
