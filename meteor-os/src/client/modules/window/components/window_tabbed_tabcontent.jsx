import React from 'react';
import cx from 'classnames';

import WindowPlain from './window_plain.js';

import * as Constants from '../../../configs/constants';

const WindowTabbedTabcontent = (props) => {
    const middle_classes = cx(stylesheet.middle_droptarget,
                              props.canDrop && stylesheet.allowPointerEvents);
    const left_classes = cx(stylesheet.left_droptarget,
                              props.canDrop && stylesheet.allowPointerEvents);
    const right_classes = cx(stylesheet.right_droptarget,
                              props.canDrop && stylesheet.allowPointerEvents);
    const bottom_classes = cx(stylesheet.bottom_droptarget,
                              props.canDrop && stylesheet.allowPointerEvents);

    const isOver = props.isOverBottom || props.isOverMiddle || props.isOverLeft || props.isOverRight;

    const content_area_classes = cx(stylesheet.content_area,
                                    isOver && stylesheet.hover,
                                    (props.isOverLeft || props.isOverRight) && stylesheet.hover_side,
                                    props.isOverMiddle && stylesheet.hover_middle,
                                    props.isOverBottom && stylesheet.hover_bottom);

    return (
        <div className={content_area_classes}>
            {
                props.content.map((tab, index) => {
                    let classes = cx(stylesheet.content, index === props.checked && stylesheet.content_checked);
                    return (
                        <div key={index} className={classes}>
                            <WindowPlain
                                actions={props.actions}
                                layer_id={props.layer_id}
                                window_id={props.window_id}
                                content={tab.data}
                                path={props.path + '.' + index}
                                type={tab.type}
                                connectContextMenu={props.connectContextMenu}/>
                        </div>
                    );
                })
            }
            {
                props.content.length === 0 ?
                    <div className={cx(stylesheet.content, stylesheet.content_checked)}>
                        <WindowPlain
                            actions={props.actions}
                            layer_id={props.layer_id}
                            window_id={props.window_id}
                            content={'No tabs are in this pane'}
                            path={props.path + '.content.0'}
                            type={Constants.ContentTypes.Text}
                            connectContextMenu={props.connectContextMenu}/>
                    </div> :
                    null
            }

            { props.connectDropTargetMiddle( <div className={middle_classes}></div> )}
            { props.connectDropTargetLeft( <div className={left_classes}></div> )}
            { props.connectDropTargetRight( <div className={right_classes}></div> )}
            { props.connectDropTargetBottom( <div className={bottom_classes}></div> )}
        </div>
    );
}

const stylesheet = cssInJS({
    content_area: {
        position: 'absolute',
        top: 32,
        left: 0,
        bottom: 0,
        right: 0
    },
    
    content: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        cursor: 'default',

        borderTopWidth: 1,
        borderTopStyle: 'solid',
        borderTopColor: '#898688'
    },

    content_checked: {
        zIndex: 1
    },

    hover: {
        ':before': {
            content: ' ',
            position: 'absolute',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'green',
            zIndex: 999998
        },
        
        ':after': {
            content: ' ',
            position: 'absolute',
            borderWidth: 2,
            borderStyle: 'solid',
            borderColor: 'green',
            zIndex: 999998
        },
    },

    hover_side: {
        ':before': {
            top: 0,
            bottom: 0,
            left: 0,
            right: 'calc(50% + 2px)'
        },
        ':after': {
            top: 0,
            bottom: 0,
            left: 'calc(50% + 2px)',
            right: 0
        }
    },

    hover_middle: {
        ':before': {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        },
        ':after': {
            display: 'none'
        }
    },

    hover_bottom: {
        ':before': {
            top: 0,
            bottom: 'calc(50% + 2px)',
            left: 0,
            right: 0
        },
        ':after': {
            top: 'calc(50% + 2px)',
            bottom: 0,
            left: 0,
            right: 0
        }
    },

    middle_droptarget: {
        position: 'absolute',
        top: 0,
        left: '25%',
        right: '25%',
        bottom: '25%',
        pointerEvents: 'none',
        zIndex: 999999
    },

    left_droptarget: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: '75%',
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 999999
    },

    right_droptarget: {
        position: 'absolute',
        top: 0,
        left: '75%',
        right: 0,
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 999999
    },

    bottom_droptarget: {
        position: 'absolute',
        top: '75%',
        left: '25%',
        right: '25%',
        bottom: 0,
        pointerEvents: 'none',
        zIndex: 999999
    },

    allowPointerEvents: {
        pointerEvents: 'auto'
    }
});

export default WindowTabbedTabcontent;
