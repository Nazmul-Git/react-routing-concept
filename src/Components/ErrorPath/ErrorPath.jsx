/* eslint-disable no-unused-vars */
import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPath = () => {
    const error=useRouteError();
    console.error(error);
    return (
        <div>
            <div>
                <h1>Oops !!!...</h1>
                <p>Sorry, unexpected error has occurred.</p>
                <p>
                    <i>{error.statusText || error.message}</i>
                </p>
            </div>
        </div>
    );
};

export default ErrorPath;