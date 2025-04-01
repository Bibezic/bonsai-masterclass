
import { Layout } from "@/components/Layout";
import { modules } from "@/data/modules";
import { ModuleCard } from "@/components/ModuleCard";

const Modules = () => {
  return (
    <Layout>
      <section className="py-12 md:py-16">
        <div className="container">
          <div className="mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Bonsai Masterclass</h1>
            <p className="text-xl text-muted-foreground">
              Följ dessa 10 moduler för att gå från nybörjare till kunnig bonsaiodlare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module) => (
              <ModuleCard
                key={module.id}
                number={module.id}
                title={module.title}
                description={module.shortDescription}
                icon={module.icon}
                to={`/module/${module.id}`}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Modules;
