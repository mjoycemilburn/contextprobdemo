import React, { useState } from 'react';
import { RefreshDisplayContext } from '../routes/Launchpad';

function Login(props) {

    const refreshDisplay = React.useContext(RefreshDisplayContext)

    return (

        <button type='button'
            onClick={() =>
                refreshDisplay({ userIsLoggedIn: true })
            }> Login</button >
    );
}

export { Login };