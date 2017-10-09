import * as _                   from 'lodash';
import {NgModule}               from '@angular/core';
import {CommonModule}           from '@angular/common';
import {AutocompleteComponent}  from './_constructor/constructor';
import reset                    from './resetter/resetter';
import resetHighlightedItem     from './highlighted-item-resetter/highlighted-item-resetter';
import restorePreviousSelection from './previous-selection-restorer/previous-selection-restorer';
import displayList              from './list-displayer/list-displayer';
import selectItem               from './item-selector/item-selector';
import ngOnInit                 from './initializer/initializer';
import ngAfterViewChecked       from './view-checked-initializer/view-checked-initializer';
import setLoadingStatus         from './loading-status-setter/loading-status-setter';
import blur                     from './blur-handler/blur-handler';
import keydown                  from './keydown-handler/keydown-handler';
import keyup                    from './keyup-handler/keyup-handler';
import filterItems              from './items-filterer/items-filterer';
import highlightItem            from './item-highlighter/item-highlighter';
import highlightByKeys          from './keys-highlighter/keys-highlighter';
import setValue                 from './value-setter/value-setter';

_.extend(AutocompleteComponent.prototype, {
  reset,
  resetHighlightedItem,
  restorePreviousSelection,
  displayList,
  selectItem,
  ngOnInit,
  ngAfterViewChecked,
  setLoadingStatus,
  blur,
  keydown,
  keyup,
  filterItems,
  highlightItem,
  highlightByKeys,
  setValue
});

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AutocompleteComponent
  ],
  exports: [
    AutocompleteComponent
  ]
}) export class AutocompleteModule {}
