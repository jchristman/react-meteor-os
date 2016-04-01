import React from 'react';
import Window from '../../window/containers/window.js';
import {WindowLayerDepth} from '../configs/window-layer.js';
import layerHiddenStateVar from '../lib/layerHiddenStateVar.js';

class WindowLayer extends React.Component {
    render() {
        const {isOver, canDrop, connectDropTarget, children} = this.props;
        return connectDropTarget(
            <div 
                className='layer'
                style={
                    { 
                        zIndex: this.props.index*WindowLayerDepth+1,
                        pointerEvents: this.props.LocalState.get(layerHiddenStateVar(this.props._id)) ? 'none': ''
                    }
                } 
                >
                {
                    this.props.windows.map((_window, index) => (
                        <Window
                            key={index}
                            index={index}
                            parent_id={this.props._id}
                            hideLayer={this.hideLayer.bind(this)}
                            unhideLayer={this.unhideLayer.bind(this)}
                            grabFocus={this.grabFocus.bind(this)}
                            actions={this.props.actions}
                            zIndex={this.props.index*WindowLayerDepth+index+2} {..._window}
                        />
                    ))
                }
            </div>
        )
    }

    // These functions need to exist to click and drag windows that are "lower" layer 
    hideLayer() {
        this.props.LocalState.set(layerHiddenStateVar(this.props._id), true);
    }

    unhideLayer() {
        this.props.LocalState.set(layerHiddenStateVar(this.props._id), false);
    }

    grabFocus(index) {
        this.props.actions.updateWindowGrabFocus(this.props.index, index);
    }
}

export default WindowLayer;
