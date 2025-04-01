
import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t py-8 mt-auto">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg font-medium">Bonsai Masterclass</h3>
            <p className="text-sm text-muted-foreground">
              En guide till bonsaikonsten och dess principer
            </p>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Skapat med <Heart size={14} className="text-bonsai-leaf fill-bonsai-leaf" /> för konsten att odla bonsai
          </div>
        </div>
      </div>
    </footer>
  );
};
