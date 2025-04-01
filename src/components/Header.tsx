
import { Home, Book, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b bg-bonsai-parchment/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-8 h-8 rounded-md bg-bonsai-leaf text-white grid place-items-center">
            <BookOpen size={20} />
          </span>
          <span className="font-serif text-xl font-medium">Bonsai Masterclass</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Hem
          </Link>
          <Link to="/modules" className="text-foreground/80 hover:text-foreground transition-colors">
            Moduler
          </Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">
            Om kursen
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Home size={20} />
          </Button>
          <Button className="hidden md:flex">
            <BookOpen className="mr-2 h-4 w-4" /> Start Learning
          </Button>
        </div>
      </div>
    </header>
  );
};
