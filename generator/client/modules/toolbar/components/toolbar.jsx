import React from 'react';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: -2,
        right: -2,
        left: 'calc(100% - 300px)',
        bottom: -2,

        backgroundColor: 'white',

        borderWidth: 2,
        borderColor: 'black',
        borderStyle: 'solid'
    }
});

const Toolbar = (props) => {
    return (
        <div className={stylesheet.default}>
            Toolbar
        </div>
    );
}

export default Toolbar;
