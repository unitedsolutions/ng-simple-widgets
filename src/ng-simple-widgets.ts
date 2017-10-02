import {NgModule}           from '@angular/core';
import {AutocompleteModule} from './autocomplete/autocomplete.module';
import {DropdownModule}     from './dropdown/dropdown.module';

@NgModule({
  imports: [
    AutocompleteModule,
    DropdownModule
  ],
  exports: [
    AutocompleteModule,
    DropdownModule
  ]
}) class ngSimpleWidgetsModule {}

export {
  AutocompleteModule,
  DropdownModule,
  ngSimpleWidgetsModule
};
