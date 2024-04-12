import React, { ReactNode } from 'react';
import './Outline.css';

interface OutlineProps {
    children: ReactNode;
}

const Outline: React.FC<OutlineProps> = ({ children }) => {
    return (
        <div className="outline">
            {children}
        </div>
    );
};

export default Outline;
