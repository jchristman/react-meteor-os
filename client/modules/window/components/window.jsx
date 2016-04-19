import React from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';
import cx from 'classnames';

import WindowTitleBar from './window-titlebar.jsx';
import WindowResizer from './window-resizer.jsx';
import WindowContentPaned from './window-content.paned.jsx';
import windowHandles from '../lib/windowHandles.js';

const stylesheet = cssInJS({
    default: {
        position:       'fixed',
        backgroundColor:'#1d4266',
        borderWidth:    1,
        borderColor:    '#1d4266',
        borderStyle:    'outset',
        borderRadius:   6,
        overflow:       'hidden'
    }
});

const style = (props) => {
    return {
        top:            props.position.top,
        left:           props.position.left,
        width:          props.position.width,
        height:         props.position.height,
        zIndex:         props.zIndex,
        pointerEvents:  props.isPreview ? 'none' : 'auto'
    }
}

const windowContent = function(props) {
    switch(props.type) {
        default:
            return <WindowContentPaned content={props.content} />
    }
}

class Window extends React.Component {
    componentDidMount() {
        if (this.props.isPreview !== true) {
            _.each(windowHandles, (handle) => {
                let connectDragPreview = this.props[handle + 'connectDragPreview'];
                connectDragPreview && connectDragPreview(getEmptyImage(), {});
            });
        }
    }

    render () {
        if (this.props.isPreview !== true) {
            if (_.reduce(windowHandles, (memo, handle) => {
                let isDragging = this.props[handle + 'isDragging'];
                if (isDragging === undefined) return memo || false;
                return memo || isDragging;
            }, false)) {
                this.props.unhideLayer();
                return null;
            }
        }

        const classes = cx(stylesheet.default, this.props.classes);
        
        return (
            <div 
                className={classes}
                style={style(this.props)}
                onMouseEnter={this.props.unhideLayer}
                onMouseLeave={this.props.hideLayer}
                onMouseDown={this.grabFocus.bind(this)}
                >

                <WindowTitleBar
                    {...this.props}
                    connectDragSource={this.props.titlebarconnectDragSource}
                    minimizeWindow={this.minimizeWindow.bind(this)}
                    maximizeWindow={this.maximizeWindow.bind(this)}
                    restoreWindow={this.restoreWindow.bind(this)}
                    closeWindow={this.closeWindow.bind(this)}
                />

                <div className="windowcontent panel with-nav-tabs panel-default">
                    {windowContent(this.props)}
                </div>

                {   
                    this.props.isPreview !== true ? 
                        windowHandles.slice(1).map((handle, index) => (
                            <WindowResizer
                                key={index}
                                which={handle}
                                connectDragSource={this.props[handle + 'connectDragSource']}
                            />
                        ))
                        : null
                }

                <div className="dest-pane-outline-1"></div>
                <div className="dest-pane-outline-2"></div>
            </div>
        );
    }

    grabFocus() {
        if (!this.props.focused)
            this.props.grabFocus(this.props.index);
    }

    minimizeWindow(event) {
        console.log('Minimize window');
    }

    maximizeWindow(event) {
        console.log('Maximize window');
    }

    restoreWindow(event) {
        console.log('Restore window');
    }

    closeWindow(event) {
        console.log('Close window');
    }
}

export default Window;
