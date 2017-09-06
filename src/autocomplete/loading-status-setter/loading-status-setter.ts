import * as _ from 'lodash';

export default function(loading = true) {
  _.extend(this, {loading, visible: !loading});  
}
