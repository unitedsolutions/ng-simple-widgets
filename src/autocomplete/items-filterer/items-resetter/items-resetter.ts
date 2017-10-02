import * as _ from 'lodash';

export default function(items) {
  _.each(items, item => {
    let {readableWithMatches, hidden} = item;
    
    if(readableWithMatches) {
      _.extend(item, {readableWithMatches: ''});
    }
    
    if(hidden) {
      _.extend(item, {hidden: false});
    }    
  });
}
