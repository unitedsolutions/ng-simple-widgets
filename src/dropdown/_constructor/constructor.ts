import * as _                        from 'lodash';
import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'ng-simple-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  @Input() for;
  @Input() form;
  @Input() items;
  @Input() placeholder;
  @Input() selectionClasses;
  @ViewChild('list') list;
  listEl; 
  control;
  display;
  transparent; 
  useListCover;
  selectedValue;
  highlightedItem;
}
