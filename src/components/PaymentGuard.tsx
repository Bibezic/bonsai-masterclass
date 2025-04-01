
import { usePayment } from '@/context/PaymentContext';
import { Navigate } from 'react-router-dom';

interface PaymentGuardProps {
  children: React.ReactNode;
}

export const PaymentGuard = ({ children }: PaymentGuardProps) => {
  const { hasPaid } = usePayment();
  
  if (!hasPaid) {
    return <Navigate to="/payment" />;
  }
  
  return <>{children}</>;
};
