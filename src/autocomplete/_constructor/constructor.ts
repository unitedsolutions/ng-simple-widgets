import * as _                        from 'lodash';
import {Component, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'ng-simple-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  @Input() for;
  @Input() form;
  @Input() items;
  @Input() placeholder;
  @Input() inputClasses;
  @Input() debounceTime;
  @ViewChild('list') list;
  @ViewChild('input') input;
  control;
  inputEl;
  listEl;
  _items;
  visible;
  noMatch;
  loading;
  timeout;
  useListCover;
  noEvents = true;
  highlightedItem;
  previousSelection = '';
}
