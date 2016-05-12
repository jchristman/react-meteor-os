// ----- External Imports ----- //
import React from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';
import cx from 'classnames';

// ----- Component Imports ----- //
import WindowTitleBar from './window_tb.jsx';
import WindowResizer from './window_resizer.jsx';
import WindowContent from './window_content.jsx';

// ----- Library Imports ----- //
import windowHandles from '../lib/window_handles.js';

// ----- Config Imports ----- //
import Themes from '../../../configs/themes';

const stylesheet = cssInJS({
    default: {
        position:       'fixed',
        borderWidth:    1,
        borderStyle:    'solid',
        borderRadius:   6,
        boxShadow:      '0px 0px 6px 1px #555555'
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

        const classes = cx(stylesheet.default, Themes.Default.primary_colors, this.props.classes);
        
        return (
            <div 
                className={classes}
                style={style(this.props)}
                onMouseOver={this.props.unhideLayer}
                onMouseOut={this.props.hideLayer}
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

                <WindowContent
                    LocalState={this.props.LocalState}
                    grabFocus={this.grabFocus.bind(this)}
                    window_id={this.props._id}
                    layer_id={this.props.parent_id}
                    splitV={this.splitV.bind(this)}
                    splitH={this.splitH.bind(this)}
                    tabs={this.props.tabs}
                    layout={this.props.layout}
                />

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
            </div>
        );
    }

    grabFocus() {
        if (!this.props.focused)
            this.props.grabFocus(this.props.index);
    }

    splitV(path) {
        this.props.splitV(this.props.index, path);
    }

    splitH(path) {
        this.props.splitH(this.props.index, path);
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
