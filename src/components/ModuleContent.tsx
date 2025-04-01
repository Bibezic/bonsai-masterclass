
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Fragment } from "react";

interface ModuleContentProps {
  module: {
    id: number;
    title: string;
    content: React.ReactNode;
  };
  nextModule?: {
    id: number;
    title: string;
  };
  prevModule?: {
    id: number;
    title: string;
  };
}

export const ModuleContent = ({
  module,
  nextModule,
  prevModule,
}: ModuleContentProps) => {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <div className="text-sm text-muted-foreground mb-1">
            Modul {module.id}
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4">{module.title}</h1>
          <div className="h-1 w-24 bg-bonsai-leaf rounded-full"></div>
        </div>

        <div className="prose-bonsai">
          {module.content}
        </div>

        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          {prevModule ? (
            <Button variant="outline" asChild>
              <Link to={`/module/${prevModule.id}`}>
                <ArrowLeft className="mr-2 h-4 w-4" /> {prevModule.title}
              </Link>
            </Button>
          ) : (
            <div></div>
          )}
          
          {nextModule && (
            <Button asChild>
              <Link to={`/module/${nextModule.id}`}>
                {nextModule.title} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
