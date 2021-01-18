import React from 'react';

import { LinearProgress } from '@material-ui/core';

export default function CustomLoadingOverlay() {
    return (
        <div style={{ position: 'absolute', top: 0, width: '100%' }}>
          <LinearProgress />
        </div>
    );
}