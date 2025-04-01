
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/components/ui/use-toast';
import { useForm } from 'react-hook-form';
import { CreditCard, Check, Leaf } from 'lucide-react';
import { usePayment } from '@/context/PaymentContext';

const Payment = () => {
  const { setHasPaid } = usePayment();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isProcessing, setIsProcessing] = useState(false);
  const form = useForm({
    defaultValues: {
      cardNumber: '',
      expiration: '',
      cvc: '',
      name: '',
    },
  });

  const handlePayment = async () => {
    setIsProcessing(true);
    
    // Simulera betalningsprocess
    await new Promise((resolve) => setTimeout(resolve, 2000));
    
    // Markera som betald
    setHasPaid(true);
    
    toast({
      title: "Betalning genomförd!",
      description: "Välkommen till Bonsai Masterclass. Du har nu tillgång till alla moduler.",
      variant: "default",
    });
    
    // Navigera till moduler
    navigate('/modules');
  };

  return (
    <Layout>
      <div className="container py-12 max-w-3xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">Få tillgång till Bonsai Masterclass</h1>
          <p className="text-muted-foreground">Lås upp alla moduler och börja din bonsairesa idag</p>
        </div>
        
        <Card className="shadow-lg border-2">
          <CardHeader className="text-center bg-bonsai-parchment/50">
            <div className="mx-auto mb-3 w-12 h-12 bg-bonsai-leaf/10 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 text-bonsai-leaf" />
            </div>
            <CardTitle className="text-2xl font-serif">Bonsai Masterclass</CardTitle>
            <CardDescription>Komplett kurs i bonsaikonsten</CardDescription>
          </CardHeader>
          
          <CardContent className="pt-6">
            <div className="mb-6">
              <div className="text-center mb-2">
                <span className="text-3xl font-semibold">299 kr</span>
                <span className="text-muted-foreground ml-2">engångsbetalning</span>
              </div>
              <p className="text-center text-muted-foreground">Full tillgång till alla 10 moduler</p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Check className="text-bonsai-leaf" size={18} />
                <span>Livstids tillgång till kursmaterialet</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-bonsai-leaf" size={18} />
                <span>Detaljerade instruktioner och övningar</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-bonsai-leaf" size={18} />
                <span>Tips från mästare inom bonsaikonsten</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-bonsai-leaf" size={18} />
                <span>Bildmaterial och bonusresurser</span>
              </div>
            </div>
          </CardContent>
          
          <div className="px-6 pb-6">
            <Tabs defaultValue="card" className="w-full">
              <TabsList className="grid w-full grid-cols-1 mb-4">
                <TabsTrigger value="card" className="gap-2">
                  <CreditCard size={16} />
                  <span>Betala med kort</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="card">
                <Form {...form}>
                  <form className="space-y-4">
                    <FormField
                      control={form.control}
                      name="cardNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Kortnummer</FormLabel>
                          <FormControl>
                            <Input placeholder="1234 5678 9012 3456" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <div className="flex space-x-4">
                      <FormField
                        control={form.control}
                        name="expiration"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>Utgångsdatum</FormLabel>
                            <FormControl>
                              <Input placeholder="MM/ÅÅ" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="cvc"
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel>CVC</FormLabel>
                            <FormControl>
                              <Input placeholder="123" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Namn på kortet</FormLabel>
                          <FormControl>
                            <Input placeholder="J. Svensson" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="button" 
                      className="w-full bg-bonsai-leaf hover:bg-bonsai-leaf/90 mt-4"
                      onClick={handlePayment}
                      disabled={isProcessing}
                    >
                      {isProcessing ? "Bearbetar..." : "Betala nu"}
                    </Button>
                  </form>
                </Form>
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
