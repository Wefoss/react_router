import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPath = () => {
    return (
        <div style={{textAlign: 'center', marginTop: '100px'}}>
            <h2>Page not found</h2>
                <Link to='/'>Go Home</Link>
        </div>
    );
}

export default NotFoundPath;
