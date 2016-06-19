import React from 'react';

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
        <div>Please sign in</div>
    );
};

export default AuthWrapper;
