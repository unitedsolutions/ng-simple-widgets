import * as _                from 'lodash';
import {NgModule}            from '@angular/core';
import {CommonModule}        from '@angular/common';
import {DropdownComponent}   from './_constructor/constructor';
import toggleDisplay         from './display-toggler/display-toggler';
import reset                 from './resetter/resetter';
import selectHighlightedItem from './highlighted-item-selector/highlighted-item-selector';
import highlightItem         from './item-highlighter/item-highlighter';
import init                  from './initializer/initializer';
import ngAfterViewChecked    from './view-checked-initializer/view-checked-initializer';
import selectItem            from './item-selector/item-selector';
import highlightByKeys       from './keys-highlighter/keys-highlighter';
import ngOnChanges           from './data-change-handler/data-change-handler';
import blur                  from './blur-handler/blur-handler';

_.extend(DropdownComponent.prototype, {
  toggleDisplay,
  blur,
  reset,
  selectHighlightedItem,
  highlightItem,
  init,
  ngAfterViewChecked,
  selectItem,
  highlightByKeys,
  ngOnChanges
});

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DropdownComponent
  ],
  exports: [
    DropdownComponent
  ]
}) export class DropdownModule {}
