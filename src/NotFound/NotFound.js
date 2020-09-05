import React from 'react';
import { Typography } from '@material-ui/core';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', color: "red" }}>
            <Typography variant="h1">
                404: Not Found
            </Typography>
        </div>
    );
};

export default NotFound;