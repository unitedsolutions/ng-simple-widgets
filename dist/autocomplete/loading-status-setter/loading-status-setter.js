import * as _ from 'lodash';
export default function (loading) {
    if (loading === void 0) { loading = true; }
    _.extend(this, { loading: loading, visible: !loading });
}
//# sourceMappingURL=loading-status-setter.js.map