import React from 'react';

const stylesheet = cssInJS({
    default: {
        position: 'absolute',
        top: 'calc(100% - 300px)',
        bottom: -2,
        left: -2,
        right: 'calc(300px - 2px)',

        backgroundColor: 'white',

        borderColor: 'black',
        borderWidth: 2,
        borderStyle: 'solid'
    }
});

const Code = (props) => {
    return (
        <div className={stylesheet.default}>
            Code
        </div>
    )
}

export default Code;
