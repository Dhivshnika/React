import React, { ReactNode } from 'react';
import './Payment.css';

interface PaymentProps {
    children: ReactNode;
}

const Payment: React.FC<PaymentProps> = ({ children }) => {
    return (
        <div className="payment">
            {children}
        </div>
    );
};

export default Payment;
