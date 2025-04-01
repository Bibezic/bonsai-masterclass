
import React, { createContext, useContext, useState, useEffect } from 'react';

type PaymentContextType = {
  hasPaid: boolean;
  setHasPaid: (value: boolean) => void;
  userEmail: string;
  setUserEmail: (email: string) => void;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Kontrollera localStorage för betalningsstatus när komponenten laddas
  const [hasPaid, setHasPaid] = useState<boolean>(() => {
    const savedPaymentStatus = localStorage.getItem('bonsai-ebook-payment-status');
    return savedPaymentStatus === 'paid';
  });

  // Hämta användarens e-postadress från localStorage
  const [userEmail, setUserEmail] = useState<string>(() => {
    return localStorage.getItem('bonsai-ebook-user-email') || '';
  });

  // Spara betalningsstatus till localStorage när den ändras
  useEffect(() => {
    localStorage.setItem('bonsai-ebook-payment-status', hasPaid ? 'paid' : 'unpaid');
  }, [hasPaid]);

  // Spara användarens e-postadress till localStorage när den ändras
  useEffect(() => {
    if (userEmail) {
      localStorage.setItem('bonsai-ebook-user-email', userEmail);
    }
  }, [userEmail]);

  return (
    <PaymentContext.Provider value={{ hasPaid, setHasPaid, userEmail, setUserEmail }}>
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = (): PaymentContextType => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider');
  }
  return context;
};
