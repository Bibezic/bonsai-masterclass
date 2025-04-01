
import React, { createContext, useContext, useState, useEffect } from 'react';

type PaymentContextType = {
  hasPaid: boolean;
  setHasPaid: (value: boolean) => void;
};

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Kontrollera localStorage för betalningsstatus när komponenten laddas
  const [hasPaid, setHasPaid] = useState<boolean>(() => {
    const savedPaymentStatus = localStorage.getItem('bonsai-ebook-payment-status');
    return savedPaymentStatus === 'paid';
  });

  // Spara betalningsstatus till localStorage när den ändras
  useEffect(() => {
    localStorage.setItem('bonsai-ebook-payment-status', hasPaid ? 'paid' : 'unpaid');
  }, [hasPaid]);

  return (
    <PaymentContext.Provider value={{ hasPaid, setHasPaid }}>
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
