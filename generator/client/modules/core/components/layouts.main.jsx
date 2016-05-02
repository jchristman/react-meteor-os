import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Canvas from '../../canvas/components/canvas.jsx';
import Code from '../../code/components/code.jsx';
import Toolbar from '../../toolbar/components/toolbar.jsx';

class Layout extends React.Component {
    render() {
        return (
            <div className="main">
                <Canvas {...this.props.context}/>
                <Code {...this.props.context}/>
                <Toolbar {...this.props.context}/>
            </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(Layout);

