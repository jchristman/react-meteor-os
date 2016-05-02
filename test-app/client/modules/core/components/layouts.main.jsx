import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

class Layout extends React.Component {
    render() {
        let {
            content = () => null,
        } = this.props;
        
        return (
            <div className="main">
                {content()}
            </div>
        );
    };
}

export default DragDropContext(HTML5Backend)(Layout);

