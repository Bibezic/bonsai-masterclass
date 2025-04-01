
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

type ModuleCardProps = {
  number: number;
  title: string;
  description: string;
  icon: string;
  to: string;
  className?: string;
};

export const ModuleCard = ({
  number,
  title,
  description,
  icon,
  to,
  className,
}: ModuleCardProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "module-card block group",
        className
      )}
    >
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-bonsai-leaf/10 rounded-lg flex items-center justify-center text-bonsai-leaf font-semibold text-xl">
            {icon}
          </div>
          <div className="flex-1">
            <div className="text-sm text-muted-foreground font-medium mb-1">
              Modul {number}
            </div>
            <h3 className="text-xl font-medium font-serif mb-2 group-hover:text-bonsai-leaf transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
