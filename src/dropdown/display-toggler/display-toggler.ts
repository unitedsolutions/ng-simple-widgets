import * as _ from 'lodash';

export default function(display?) {
  if(_.isUndefined(display)) {
    display = !this.display;
  }

  let delay = display ? 0 : 200;
  _.extend(this, {transparent: !display});
  setTimeout(() => _.extend(this, {display}), delay);  
}
