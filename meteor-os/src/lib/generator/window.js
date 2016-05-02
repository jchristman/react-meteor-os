import Random from 'meteor/random';
import check, {Match} from 'meteor/check';

import * as windowTypes from '../windowTypes.js';

class Window {
    constructor(type) {
        check(type, String);

        this.__id = Random.id();
        this._type = type;
        this._title = '';
        this._position = { top: 0, left: 0, width: 400, height: 500 };
        
        this._panes = {}
    }

    get _id() {
        return this.__id;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        check(title, String);

        this._title = title;
    }

    get position() {
        return this._position;
    }

    set position({ top, left, width, height }) {
        check(top, Number);
        check(left, Number);
        check(width, Number);
        check(height, Number);

        this._position = { top, left, width, height };
    }


}

export default Window;
