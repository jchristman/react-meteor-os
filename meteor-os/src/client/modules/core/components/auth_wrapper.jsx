import React from 'react';

import LoginForm from '../containers/login_form.jsx';

const AuthWrapper = ({loggedIn, loggingIn, children}) => {
    if (loggedIn) {
        return (
            <div>{children}</div>
        );
    }

    if (loggingIn) {
        return (
            <div>Loading</div>
        );
    }

    return (
        <LoginForm/>
    );
};

export default AuthWrapper;
