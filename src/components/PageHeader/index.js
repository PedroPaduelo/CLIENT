import React from 'react';
import './styles.css'

function PageHeader(props) {
  return (
    
        <header className="page-header">
            <div className="header-content">
                <strong>{props.title}</strong>
                {props.description && <p>{props.description}</p>}
                {props.children}
            </div>
            
        </header>

  );
}

export default PageHeader;
