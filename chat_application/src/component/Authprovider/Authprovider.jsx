'use client';
import React, { Children } from 'react';
import { SessionProvider } from 'next-auth/react';
const Authprovider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default Authprovider
