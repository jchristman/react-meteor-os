import React from 'react';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import AuthWrapper from '../containers/auth_wrapper.js';
import AppLoader from '../containers/app_loader.js';

class Layout extends React.Component {
    render() {
        return (
            <AuthWrapper>
                <div className='main'>
                    <AppLoader/>
                </div>
            </AuthWrapper>
        );
    };
}

export default DragDropContext(HTML5Backend)(Layout);

