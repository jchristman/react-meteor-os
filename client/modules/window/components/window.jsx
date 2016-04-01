import React from 'react';

import WindowContentPaned from './window.content.paned.jsx';

const getClasses = function(props) {
    let classes = "window";
    for (let _class of props.classes) classes += " " + _class;
    return classes;
}

const getPosition = function(props) {
    let position = { position: "absolute" };
    for (let key in props.position) position[key] = props.position[key];
    return position;
}

const getStyle = function(props) {
    let style = {};
    _.extend(style, getPosition(props));
    _.extend(style, { zIndex: props.zIndex });
    return style;
}

const windowContent = function(props) {
    switch(props.type) {
        default:
            return <WindowContentPaned content={props.content} />
    }
}

class Window extends React.Component {
    render () {
        let {
            connectDragSource,
            connectDragPreview,
            isDragging
        } = this.props;

        if (isDragging) return null;
        
        return connectDragPreview(
            <div 
                className={getClasses(this.props)}
                style={getStyle(this.props)}
                onMouseEnter={this.props.unhideLayer}
                onMouseLeave={this.props.hideLayer}
                onMouseDown={this.grabFocus.bind(this)}
                >

                {
                    connectDragSource(
                        <div className="windowtitlebar">
                            <img src="/favicon.ico" width="16" height="16" className="titlebaricon" />
                            <div className="titlebartext">{this.props.title}</div>
                            <div className="horizbuts">
                                <div 
                                    className="closebut glyphicon glyphicon-remove" 
                                    title="close" 
                                    onClick={this.closeWindow.bind(this)}>
                                </div>
                                <div className="maximizebut glyphicon glyphicon-plus" title="maximize"></div>
                                <div className="restorebut glyphicon glyphicon-share-alt" title="restore"></div>
                                <div className="minimizebut glyphicon glyphicon-minus" title="minimize"></div>
                            </div>
                        </div>
                    )
                }

                <div className="windowcontent panel with-nav-tabs panel-default">
                    {windowContent(this.props)}
                </div>

                <div className="resizer-tl"></div>
                <div className="resizer-t"></div>
                <div className="resizer-tr"></div>
                <div className="resizer-r"></div>
                <div className="resizer-br"></div>
                <div className="resizer-b"></div>
                <div className="resizer-bl"></div>
                <div className="resizer-l"></div>

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
