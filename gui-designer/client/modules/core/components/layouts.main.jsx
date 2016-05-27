import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Canvas from '../../canvas/containers/canvas.js';
import Code from '../../code/containers/code.js';
import Toolbar from '../../toolbar/containers/toolbar.js';

class Layout extends React.Component {
    render() {
        return (
            <div className="main">
                <Canvas/>
                <Code/>
                <Toolbar/>
            </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(Layout);

