import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Canvas from '../../canvas/components/canvas.jsx';
import Code from '../../code/containers/code.js';
import Toolbar from '../../toolbar/components/toolbar.jsx';

import DefaultApp from '../../../configs/default_app.js';

class Layout extends React.Component {
    render() {
        const {LocalState, CurrentApp, LastGoodCode} = this.props.context;
        
        LocalState.setDefault(CurrentApp, DefaultApp);
        LocalState.setDefault(LastGoodCode, DefaultApp);

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

