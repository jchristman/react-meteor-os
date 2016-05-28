import React from 'react';

import Window from '../../window/containers/window.js';

import {WindowLayerDepth} from '../configs/window_layer.js';
import layerHiddenStateVar from '../lib/layer_hidden_state_var.js';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
});

class WindowLayer extends React.Component {
    render() {
        const {isOver, canDrop, connectDropTarget, children} = this.props;
        return connectDropTarget(
            <div 
                className={stylesheet.default}
                style={
                    { 
                        zIndex: this.props.index,
                        pointerEvents: this.props.layerHidden ? 'none': ''
                    }
                } 
                >
                {
                    this.props.windows.map((_window, index) => (
                        <Window
                            key={_window._id}
                            parent_id={this.props._id}
                            index={index}
                            hideLayer={this.props.hideLayer}
                            unhideLayer={this.props.unhideLayer}
                            grabFocus={this.grabFocus.bind(this)}
                            actions={this.props.actions}
                            path={this.props.index + '.windows.' + index}
                            {..._window}
                        />
                    ))
                }
            </div>
        )
    }

    grabFocus(window_index) {
        this.props.actions.grabFocus(this.props.index, window_index);
    }
}

export default WindowLayer;
