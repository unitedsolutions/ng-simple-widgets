import * as _ from 'lodash';
export default function (display) {
    var _this = this;
    if (_.isUndefined(display)) {
        display = !this.display;
    }
    var delay = display ? 0 : 200;
    _.extend(this, { transparent: !display });
    setTimeout(function () { return _.extend(_this, { display: display }); }, delay);
}
//# sourceMappingURL=display-toggler.js.map