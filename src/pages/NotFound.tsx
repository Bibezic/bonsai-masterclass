
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Layout } from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="container py-16 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-center max-w-md">
          <div className="mb-6 text-bonsai-bark">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-24 h-24 mx-auto"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M9 9h.01" />
              <path d="M15 9h.01" />
              <path d="M8 13h8" />
              <path d="M9.5 16.5c.828.5 1.794.5 2.5.5 .706 0 1.672 0 2.5-.5" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-bonsai-bark">Sidan hittades inte</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Vi kunde inte hitta sidan du letar efter. Kanske har den flyttats eller tagits bort.
          </p>
          <Button asChild size="lg">
            <Link to="/">
              <Home className="mr-2 h-4 w-4" /> Tillbaka till startsidan
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
