import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LogInButton from "./LogInButton";
import LogOutButton from "./LogOutButton";

const Logger = () => {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();


    return (
        <>
        {isAuthenticated ? <LogOutButton /> : <LogInButton />}
        </>
    );
};

export default Logger;

