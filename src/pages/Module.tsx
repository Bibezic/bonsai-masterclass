
import { useParams, Navigate } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { modules } from "@/data/modules";
import { ModuleContent } from "@/components/ModuleContent";

const Module = () => {
  const { id } = useParams<{ id: string }>();
  const moduleId = parseInt(id || "0");
  
  // Find the requested module
  const module = modules.find((m) => m.id === moduleId);
  
  // Find next and previous modules if they exist
  const nextModule = modules.find((m) => m.id === moduleId + 1);
  const prevModule = modules.find((m) => m.id === moduleId - 1);

  // If module doesn't exist, redirect to modules page
  if (!module) {
    return <Navigate to="/modules" />;
  }

  return (
    <Layout>
      <ModuleContent 
        module={module} 
        nextModule={nextModule} 
        prevModule={prevModule} 
      />
    </Layout>
  );
};

export default Module;
