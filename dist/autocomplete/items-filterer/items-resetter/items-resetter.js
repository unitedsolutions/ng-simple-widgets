import * as _ from 'lodash';
export default function (items) {
    _.each(items, function (item) {
        var readableWithMatches = item.readableWithMatches, hidden = item.hidden;
        if (readableWithMatches) {
            _.extend(item, { readableWithMatches: '' });
        }
        if (hidden) {
            _.extend(item, { hidden: false });
        }
    });
}
//# sourceMappingURL=items-resetter.js.map