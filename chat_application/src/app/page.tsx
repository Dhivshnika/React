'use client'
import { useSession} from "next-auth/react";
import Login from "../app/component/Login/login";
import Logout from "../app/component/Logout/logout";


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