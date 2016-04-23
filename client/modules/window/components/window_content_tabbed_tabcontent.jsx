import React from 'react';
import cx from 'classnames';

const WindowContentTabbedTabcontent = (props) => {
    return ( 
        <div className={stylesheet.content_area}>
            {
                props.content.map((tab, index) => {
                    let classes = cx(stylesheet.content, tab.checked && stylesheet.content_checked);
                    return (
                        <div
                            key={index}
                            className={classes}>
                                {tab.content}
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
        padding: 10,
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

export default WindowContentTabbedTabcontent;
