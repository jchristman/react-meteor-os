import Random from 'meteor/random';
import check, {Match} from 'meteor/check';

import Window from './window.js';

class Application {
    constructor(name) {
        check(name, String);

        this.__id = Random.id();
        this._name = name;
        this._windows = [];
    }

    get _id() {
        return this.__id;
    }

    get name() {
        return this._name;
    }

    set name(name) {
        this._name = name;
    }

    newWindow() {
        let _window = new Window();
        this._windows.push(_window);
        return _window;
    }
}

export default Application;
