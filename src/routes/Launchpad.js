import React, { useState } from "react";
import {Link} from "react-router-dom";

const RefreshDisplayContext = React.createContext();

function Launchpad() {

    const [launchpadState, updatelaunchpadState] = useState({ userIsLoggedIn: false });

    function refreshDisplay(event) {
        updatelaunchpadState({ userIsLoggedIn: true })
    }

    return (
        <RefreshDisplayContext.Provider value={refreshDisplay}>
            <div>

                {launchpadState.userIsLoggedIn ?
                    <p>User is Logged In </p> :
                    <p>User is Not Logged In </p>}

                <Link to="login" state={launchpadState}>Login via Child</Link>
            </div>

        </RefreshDisplayContext.Provider>
    );
}

export { Launchpad, RefreshDisplayContext };
