import React from 'react';
import Application from './application.jsx';

const ApplicationManager = (props) => (
    <div>
        {
            props.ApplicationManager.applications.map((application, index) => (
                <Application 
                    key={application._id}
                    index={index}
                    actions={props.actions}     // We are passing actions based on what type of wrapper is used. Dont use context.
                    {...application}
                />
            ))
        }
    </div>
);

export default ApplicationManager;
