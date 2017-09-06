import * as _ from 'lodash';
import ignoreKeyNames from '../_lib/ignore-key-names';
export default function (evt) {
    if (_.includes(ignoreKeyNames, evt.key)) {
        return;
    }
    this.control.setValue('');
    this.setLoadingStatus();
}
//# sourceMappingURL=keydown-handler.js.map