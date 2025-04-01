
import { Layout } from "@/components/Layout";
import { Leaf, Book, Clock, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16 bg-bonsai-parchment/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Om Bonsai Masterclass</h1>
            <p className="text-xl text-muted-foreground mb-8">
              En komplett guide till bonsaikonsten för nybörjare och erfarna odlare.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="prose-bonsai">
              <h2>Välkommen till Bonsai Masterclass</h2>
              <p>
                Bonsai Masterclass är en omfattande guide till konsten att odla och vårda bonsaiträd, 
                speciellt utformad för att ta dig från nybörjare till erfaren odlare genom tydliga, 
                steg-för-steg instruktioner och inspirerande kunskap.
              </p>
              <p>
                Denna kurs är resultatet av decennier av samlad kunskap från bonsaimästare runt om i världen, 
                presenterad på ett sätt som är tillgängligt och praktiskt för alla.
              </p>

              <h2>Vad du kommer att lära dig</h2>
              <p>
                Genom kursens 10 moduler kommer du att lära dig alla aspekter av bonsaiodling, från att välja 
                rätt träd och kruka till avancerade tekniker som beskärning, trådbindning och formgivning enligt 
                klassiska stilar.
              </p>
              <p>
                Vi täcker hela årets skötselcykel och ger dig verktyg för att undvika vanliga misstag som 
                kan skada dina träd. Efter att ha gått igenom kursen kommer du att ha kunskapen och självförtroendet 
                att odla vackra bonsaiträd som kan vara i generationer.
              </p>

              <h2>För vem är denna kurs?</h2>
              <p>
                Bonsai Masterclass är utformad för:
              </p>
              <ul>
                <li>Nybörjare som vill lära sig från grunden</li>
                <li>Hobbyanvändare som vill fördjupa sin kunskap</li>
                <li>Erfarna odlare som vill förfina sina tekniker</li>
                <li>Alla som uppskattar naturens skönhet och konstens tålamod</li>
              </ul>

              <h2>Vår filosofi</h2>
              <p>
                Vi tror att bonsaikonsten handlar om mycket mer än bara att odla små träd. Det är en praktik som 
                kombinerar konstnärlig vision, teknisk skicklighet, och en djup respekt för naturen. Genom att lära 
                dig denna konstform, utvecklar du inte bara vackra miniatyrlandskap – du kultiverar också tålamod, 
                uppmärksamhet på detaljer, och ett djupare samband med naturens rytmer.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bonsai-parchment/20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Kursen i siffror</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-bonsai-leaf/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Book className="h-8 w-8 text-bonsai-leaf" />
              </div>
              <h3 className="text-2xl font-bold mb-2">10</h3>
              <p className="text-muted-foreground">Omfattande moduler</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-bonsai-leaf/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-bonsai-leaf" />
              </div>
              <h3 className="text-2xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground">Timmar av innehåll</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-bonsai-leaf/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-8 w-8 text-bonsai-leaf" />
              </div>
              <h3 className="text-2xl font-bold mb-2">30+</h3>
              <p className="text-muted-foreground">Praktiska övningar</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-bonsai-leaf/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-bonsai-leaf" />
              </div>
              <h3 className="text-2xl font-bold mb-2">100%</h3>
              <p className="text-muted-foreground">Fokus på praktik</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
