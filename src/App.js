import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogInButton from "./Components/LogInButton";
import LogOutButton from "./Components/LogOutButton";

export default function App() {
  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div>
        <LogInButton />
        <LogOutButton />
      </div>
    </>
  );
}
