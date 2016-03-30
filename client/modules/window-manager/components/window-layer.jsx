import React from 'react';
import Window from '../../window/containers/window.js';
import {WindowLayerDepth} from '../configs/window-layer.js';

class WindowLayer extends React.Component {
    render() {
        const {isOver, canDrop, connectDropTarget, children} = this.props;
        console.log('Over:', isOver, 'Can drop:', canDrop);
        return connectDropTarget(
            <div 
                className='layer' 
                style={{ zIndex: this.props.index*WindowLayerDepth+1 }} 
                onClick={this.forwardClick.bind(this)}>

                {
                    this.props.windows.map((_window, index) => (
                        <Window
                            key={index}
                            actions={this.props.actions}
                            zIndex={this.props.index*WindowLayerDepth+index+2} {..._window}
                        />
                    ))
                }

            </div>   
        );
    }

    forwardClick(event) {
        let self = document.elementFromPoint(event.pageX, event.pageY);
        self.style.display = 'none';

        let under_window = $(document.elementFromPoint(event.pageX, event.pageY)).closest('.window');
        if (under_window.length > 0) {
            under_window[0].click();
        }

        self.style.display = '';
    }
}

export default WindowLayer;
