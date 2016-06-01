import React from 'react';
import cx from 'classnames';

import WindowPlain from './window_plain.js';

const WindowTabbedTabcontent = (props) => {
    const content_area_classes = cx(stylesheet.content_area);
    return (
        <div className={content_area_classes}>
            {
                props.content.map((tab, index) => {
                    let classes = cx(stylesheet.content, index === props.checked && stylesheet.content_checked);
                    return (
                        <div key={index} className={classes}>
                            <WindowPlain
                                _id={props._id[index]}
                                layer_id={props.layer_id}
                                window_id={props.window_id}
                                content={props.content[index]}
                                content_type={props.content_type[index]}
                                connectContextMenu={props.connectContextMenu}/>
                        </div>
                    );
                })
            }
        </div>
    );
}

const stylesheet = cssInJS({
    content_area: {
        position: 'absolute',
        top: 32,
        left: 0,
        bottom: 0,
        right: 0,
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
    }
});

export default WindowTabbedTabcontent;
