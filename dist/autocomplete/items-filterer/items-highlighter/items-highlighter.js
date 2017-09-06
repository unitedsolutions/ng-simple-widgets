import * as _ from 'lodash';
export default function (searchValue) {
    var _this = this;
    var rxCharactersRx = /[-[\]{}()*+?.,\\^$|#\s]/g;
    var valueRx = searchValue.replace(rxCharactersRx, '\\$&');
    valueRx = new RegExp(valueRx, 'ig');
    this.noMatch = true;
    _.each(this._items, function (item) {
        var readable = item.readable;
        var matches = readable.match(valueRx);
        if (matches) {
            _this.noMatch = false;
            var parts = readable.split(valueRx);
            var readableWithMatches = _.reduce(parts, function (readableWithMatches, part) {
                var match = matches.shift() || '';
                if (match) {
                    match = "<span class = \"match\">" + match + "</span>";
                }
                return readableWithMatches += (part + match);
            }, '');
            _.extend(item, { readableWithMatches: readableWithMatches, hidden: false });
            if (searchValue.length === readable.length) {
                _this.selectItem(item);
            }
        }
        else {
            _.extend(item, { readableWithMatches: '', hidden: true });
        }
    });
}
//# sourceMappingURL=items-highlighter.js.map