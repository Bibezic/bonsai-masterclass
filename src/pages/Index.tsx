
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ModuleCard } from "@/components/ModuleCard";
import { ArrowRight, Leaf, TreePine } from "lucide-react";
import { modules } from "@/data/modules";
import { usePayment } from "@/context/PaymentContext";

const Index = () => {
  const { hasPaid } = usePayment();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-bonsai-parchment to-bonsai-ceramic/20">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-bonsai-bark">
                Bonsai <span className="text-bonsai-leaf">Masterclass</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-foreground/80 max-w-lg">
                Lär dig konsten att odla och vårda ett bonsaiträd, från grunderna till avancerade tekniker.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                <Button asChild size="lg" className="bg-bonsai-leaf hover:bg-bonsai-leaf/90">
                  <Link to={hasPaid ? "/modules" : "/payment"}>
                    {hasPaid ? "Se alla moduler" : "Köp kursen"} <ArrowRight className="ml-2" size={18} />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Läs mer om kursen</Link>
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-bonsai-leaf/10 rounded-full flex items-center justify-center">
                  <TreePine className="w-40 h-40 md:w-48 md:h-48 text-bonsai-leaf" />
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-bonsai-sand/20 rounded-full flex items-center justify-center animate-leaf-sway">
                  <Leaf className="w-10 h-10 text-bonsai-moss" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Modules Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Börja din bonsairesa</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Utforska våra moduler och lär dig allt från att välja rätt träd till avancerade beskärningstekniker.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.slice(0, 6).map((module) => (
              <ModuleCard
                key={module.id}
                number={module.id}
                title={module.title}
                description={hasPaid ? module.shortDescription : "Lås upp denna modul genom att köpa kursen."}
                icon={module.icon}
                to={hasPaid ? `/module/${module.id}` : "/payment"}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to={hasPaid ? "/modules" : "/payment"}>
                {hasPaid ? "Visa alla moduler" : "Köp kursen för att se alla moduler"} <ArrowRight className="ml-2" size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bonsai-parchment/50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Redo att börja din bonsairesa?</h2>
            <p className="text-muted-foreground mb-8">
              Bonsai är en konstform som kräver tålamod, kunskap och känsla. Låt oss guida dig genom varje steg på vägen.
            </p>
            <Button asChild size="lg" className="bg-bonsai-bark hover:bg-bonsai-bark/90">
              <Link to={hasPaid ? "/modules" : "/payment"}>{hasPaid ? "Fortsätt med kursen" : "Köp kursen nu"}</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
