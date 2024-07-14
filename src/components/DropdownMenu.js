import React from 'react';
import './DropdownMenu.css';

export function DropdownMenu({children}) {
    return (
        <div className='dropdown-menu'>
            {children}
        </div>
    );
}