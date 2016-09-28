import React from 'react';
import dbx from '../dbx';

export default function Splash(props) {
    return (
        <a href={dbx.getAuthenticationUrl('http://localhost:8080')}>Login</a>
    );
};

