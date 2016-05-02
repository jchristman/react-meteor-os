'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
//TODO: Window Index is bad here. Because changing order of windows will break it.

exports.default = function (props) {
  return '_layer_' + props.layer_id + '_window_' + props.window_id + '_tab_checked';
};