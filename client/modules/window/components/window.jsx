import React from 'react';
import { getEmptyImage } from 'react-dnd-html5-backend';

import WindowTitleBar from './window-titlebar.jsx';
import WindowResizer from '../containers/window-resizer.js';
import WindowContentPaned from './window-content.paned.jsx';

const style = (props) => {
    return {
        position:       'fixed',
        top:            props.position.top,
        left:           props.position.left,
        width:          props.position.width,
        height:         props.position.height,
        zIndex:         props.zIndex,

        backgroundColor:'#1d4266',
        borderWidth:    1,
        borderColor:    '#1d4266',
        borderStyle:    'outset',
        borderRadius:   6,

        overflow:       'hidden',
        pointerEvents:  props.isPreview ? 'none' : 'auto'
    };
}

const windowContent = function(props) {
    switch(props.type) {
        default:
            return <WindowContentPaned content={props.content} />
    }
}

class Window extends React.Component {
    componentDidMount() {
        this.props.connectDragPreview &&
            this.props.connectDragPreview(getEmptyImage(), {});
    }

    render () {
        if (this.props.isDragging) return null;

        return (
            <div 
                style={style(this.props)}
                onMouseEnter={this.props.unhideLayer}
                onMouseLeave={this.props.hideLayer}
                onMouseDown={this.grabFocus.bind(this)}
                >

                <WindowTitleBar
                    {...this.props}
                    closeWindow={this.closeWindow.bind(this)}
                />

                <div className="windowcontent panel with-nav-tabs panel-default">
                    {windowContent(this.props)}
                </div>

                {   this.props.isPreview !== true ?
                        ['tl', 't', 'tr', 'l', 'r', 'bl', 'b', 'br'].map((which, index) => (
                            <WindowResizer
                                key={index}
                                which={which}
                                _id={this.props._id}
                                index={this.props.index}
                                LocalState={this.props.LocalState}
                                parent_id={this.props.parent_id}
                                position={this.props.position}
                                zIndex={this.props.zIndex}
                            />
                        )) :
                        null
                }

                <div className="dest-pane-outline-1"></div>
                <div className="dest-pane-outline-2"></div>
            </div>
        );
    }

    grabFocus() {
        if (!_.contains(this.props.classes, 'focused'))
            this.props.grabFocus(this.props.index);
    }

    closeWindow(event) {
        this.props.actions.del(this.props);
    }
}

export default Window;
