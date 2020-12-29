import React from 'react';

import { Header } from './styles';
import './styles.css'



function PageHeader({title ,description, children}) {

  return (
    
        <Header className="page-header">
            <div className="header-content">
                <strong>{title}</strong>
                {description && <p>{description}</p>}
                {children}
            </div>
        </Header>

  );
}

export default PageHeader;
