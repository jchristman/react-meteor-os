import React from 'react';
import Application from './application.jsx';

const ApplicationManager = (props) => (
    <div>
        {
            props.ApplicationManager.applications.map((_application, index) => (
                <Application 
                    key={_application._id}
                    index={index}
                    actions={props.actions}
                    {...{ LocalState: props.LocalState }}
                    {..._application}
                />
            ))
        }
    </div>
);

export default ApplicationManager;
