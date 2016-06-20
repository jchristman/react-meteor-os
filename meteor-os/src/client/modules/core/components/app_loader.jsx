import React from 'react';

import Desktop from '../../desktop/components/desktop.js';

const AppLoader = (props) => {
    if (props.ready) {
        return (
            <Desktop/>
        );
    } else {
        return (
            <div>Loading Applications</div>
        );
    }
}

export default AppLoader;
