"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (props) {
    var Meteor = props.Meteor;

    var ready = Meteor.subscribe(props.collection_pub).ready();
    return ready;
};