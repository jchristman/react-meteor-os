'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _check = require('meteor/check');

exports.default = function (context) {
    var ApplicationManager = undefined;
    if (context.Collections) ApplicationManager = context.Collections.ApplicationManager;
    Meteor.methods({
        updateWindowGrabFocus: function updateWindowGrabFocus(path, index) {
            (0, _check.check)(path, String);
            (0, _check.check)(index, _check.Match.Integer);

            var current = ApplicationManager.findOne({ userId: 'asdf' }); // Replace with this.userId
            if (current) {
                var tmp = current;
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = path.split('.')[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var val = _step.value;

                        if (!isNaN(val)) val = Number(val);
                        tmp = tmp[val];
                    }

                    // Move the focused window to the end of the array
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var _window = tmp.splice(index, 1)[0];
                tmp.push(_window);

                // Move the layer to the end of the array
                var _layer = current.applications.splice(Number(path.split('.')[1]), 1)[0];
                current.applications.push(_layer);

                var update = { applications: current.applications };
                return ApplicationManager.update({ userId: current.userId }, { '$set': update });
            } else {
                throw new Meteor.Error('User not found!');
            }
        }
    });
};