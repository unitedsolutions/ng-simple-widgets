import * as _ from 'lodash';

export default function(searchValue) {
  let rxCharactersRx = /[-[\]{}()*+?.,\\^$|#\s]/g;
  let valueRx = searchValue.replace(rxCharactersRx, '\\$&');
  valueRx = new RegExp(valueRx, 'ig');
  this.noMatch = true;
  
  _.each(this._items, item => {
    let {readable} = item;
    let matches = readable.match(valueRx);
    
    if(matches) {
      this.noMatch = false;
      let parts = readable.split(valueRx);
      let readableWithMatches = _.reduce(parts, (readableWithMatches, part) => {
        let match = matches.shift() || '';
        
        if(match) {
          match = `<span class = "match">${match}</span>`;
        }
        
        return readableWithMatches += (part + match);
      }, '');
      
      _.extend(item, {readableWithMatches, hidden: false});
      
      if(searchValue.length === readable.length) {
        this.selectItem(item);
      }
    } else {
      _.extend(item, {readableWithMatches: '', hidden: true});
    }
  });   
}
