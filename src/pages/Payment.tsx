
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/components/ui/use-toast';
import { Check, Leaf, Smartphone } from 'lucide-react';
import { usePayment } from '@/context/PaymentContext';

const Payment = () => {
  const { setHasPaid } = usePayment();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulera betalningsprocess
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Markera som betald
    setHasPaid(true);
    
    toast({
      title: "Betalning genomförd!",
      description: "Välkommen till Bonsai E-bok. Du har nu tillgång till alla kapitel.",
      variant: "default",
    });
    
    // Navigera till moduler
    navigate('/modules');
  };

  return (
    <Layout>
      <div className="container py-12 max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Få tillgång till Bonsai E-bok</h1>
          <p className="text-muted-foreground">Lås upp alla kapitel och börja din bonsairesa idag</p>
        </div>
        
        <Card className="shadow-lg border-2">
          <CardHeader className="text-center bg-bonsai-parchment/50">
            <div className="mx-auto mb-3 w-12 h-12 bg-bonsai-leaf/10 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-bonsai-leaf" />
            </div>
            <CardTitle className="text-2xl font-serif">Bonsai E-bok</CardTitle>
            <CardDescription>Komplett guide till bonsaikonsten</CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="mb-6">
              <div className="text-center mb-2">
                <span className="text-3xl font-semibold">149 kr</span>
                <span className="text-muted-foreground ml-2">engångsbetalning</span>
              </div>
              <p className="text-center text-muted-foreground">Full tillgång till alla kapitel</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="text-bonsai-leaf" size={18} />
                <span>Livstids tillgång till e-boken</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-bonsai-leaf" size={18} />
                <span>Detaljerade instruktioner och illustrationer</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-bonsai-leaf" size={18} />
                <span>Tips från mästare inom bonsaikonsten</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-bonsai-leaf" size={18} />
                <span>Nedladdningsbar i PDF-format</span>
              </div>
            </div>
          </CardContent>
          
          <div className="px-6 pb-6">
            <Tabs defaultValue="swish" className="w-full">
              <TabsList className="grid w-full grid-cols-1 mb-4">
                <TabsTrigger value="swish" className="gap-2">
                  <Smartphone size={16} />
                  <span>Betala med Swish</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="swish">
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                    <div className="mb-3 flex justify-center">
                      <svg viewBox="0 0 256 256" className="h-20 w-20">
                        <path fill="#009FE3" d="M198 42C229.481 42 255 67.519 255 99C255 130.481 229.481 156 198 156C184.193 156 171.585 151.212 162 143.169C152.415 151.212 139.807 156 126 156C112.193 156 99.585 151.212 90 143.169C80.415 151.212 67.807 156 54 156C22.519 156 -3 130.481 -3 99C-3 67.519 22.519 42 54 42C67.807 42 80.415 46.788 90 54.831C99.585 46.788 112.193 42 126 42C139.807 42 152.415 46.788 162 54.831C171.585 46.788 184.193 42 198 42Z" />
                        <path fill="#FFFFFF" d="M191 76.17C191 80.195 189.308 84.13 185.731 87C191.739 91.08 194 94.885 194 101.635C194 106.53 192.004 113.28 182.416 117C176.701 119.22 170.218 120 163 120L143 76.17C143 70.41 154.656 65 161.667 65C169.785 65 191 67.575 191 76.17ZM119 76.17C119 80.195 117.308 84.13 113.731 87C119.739 91.08 122 94.885 122 101.635C122 106.53 120.004 113.28 110.416 117C104.701 119.22 98.218 120 91 120L71 76.17C71 70.41 82.656 65 89.667 65C97.785 65 119 67.575 119 76.17ZM47 76.17C47 80.195 45.308 84.13 41.731 87C47.739 91.08 50 94.885 50 101.635C50 106.53 48.004 113.28 38.416 117C32.701 119.22 26.218 120 19 120L-1 76.17C-1 70.41 10.656 65 17.667 65C25.785 65 47 67.575 47 76.17Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-medium mb-1">Swisha till</h3>
                    <p className="text-2xl font-bold mb-2">073-647 14 50</p>
                    <div className="text-sm text-gray-600">
                      <p>1. Öppna Swish-appen på din telefon</p>
                      <p>2. Swisha 149 kr till numret ovan</p>
                      <p>3. Skriv "Bonsai" som meddelande</p>
                      <p>4. Klicka på "Jag har betalat" nedan</p>
                    </div>
                  </div>
                    
                  <Button 
                    type="button" 
                    className="w-full bg-bonsai-leaf hover:bg-bonsai-leaf/90 mt-4"
                    onClick={handlePayment}
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Verifierar betalning..." : "Jag har betalat"}
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
            
            <p className="text-xs text-center mt-4 text-muted-foreground">
              Säker betalning. Inga dolda avgifter.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Payment;
