'use client'
import { useSession, signIn, signOut } from "next-auth/react";
import Login from "./components/Login/login";
import Logout from "./components/Logout/logout";

export default function Component() {
  const { data: session } = useSession();
  return(
    <>
      {!session && (
        
          <Login />

      )}
      {session && (
        <>
          <Logout/>
        </>
      )}
    </>
  )
}
