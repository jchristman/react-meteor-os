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
                        zIndex: this.props.index*WindowLayerDepth+1,
                        pointerEvents: this.props.layerHidden ? 'none': ''
                    }
                } 
                >
                {
                    this.props.windows.map((_window, index) => (
                        <Window
                            key={index}
                            index={index}
                            LocalState={this.props.LocalState}
                            parent_id={this.props._id}
                            hideLayer={this.hideLayer.bind(this)}
                            unhideLayer={this.unhideLayer.bind(this)}
                            grabFocus={this.grabFocus.bind(this)}
                            splitV={this.splitV.bind(this)}
                            splitH={this.splitH.bind(this)}
                            moveDivider={this.moveDivider.bind(this)}
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

    splitV(index, path) {
        this.props.actions.updateWindowSplitPaneVertical(this.props.index, index, path);
    }
    
    splitH(index, path) {
        this.props.actions.updateWindowSplitPaneHorizontal(this.props.index, index, path);
    }

    moveDivider(index, path, percentage) {
        this.props.actions.updateWindowMoveDivider(this.props.index, index, path, percentage);
    }
}

export default WindowLayer;
