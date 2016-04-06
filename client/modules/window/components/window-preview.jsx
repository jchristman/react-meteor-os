import React from 'react';

const getClasses = function(props) {
    let classes = "window";
    if (props.classes)
        for (let _class of props.classes) classes += " " + _class;
    return classes;
}

const getPosition = function(props) {
    let position = { position: "absolute" };
    if (props.position)
        for (let key in props.position) position[key] = props.position[key];
    return position;
}

const getStyle = function(props) {
    let style = {};
    _.extend(style, getPosition(props));
    _.extend(style, { zIndex: props.zIndex });
    _.extend(style, { pointerEvents: 'none' }); // Need this to make the preview not end the drag
    return style;
}

const WindowPreview = (props) => (
    <div 
        className={getClasses(props)}
        style={getStyle(props)}
        >

        <div className="windowtitlebar">
            <img src="/favicon.ico" width="16" height="16" className="titlebaricon" />
            <div className="titlebartext"></div>
            <div className="horizbuts">
                <div 
                    className="closebut glyphicon glyphicon-remove" 
                    title="close">
                </div>
                <div className="maximizebut glyphicon glyphicon-plus" title="maximize"></div>
                <div className="restorebut glyphicon glyphicon-share-alt" title="restore"></div>
                <div className="minimizebut glyphicon glyphicon-minus" title="minimize"></div>
            </div>
        </div>

        <div className="windowcontent panel with-nav-tabs panel-default">
        </div>
    </div>
);

export default WindowPreview;
