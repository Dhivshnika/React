import React from 'react';
import Link from 'next/link';

function Custom404() {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>The page you're looking for doesn't exist.</p>
            <Link href="/">Go back to the home page</Link>
        </div>
    );
};
export default Custom404;
