import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Декоративный градиентный фон */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <h1 className="text-[120px] md:text-[180px] font-bold text-primary leading-none mb-4 drop-shadow-elegant">
            404
          </h1>
          <div className="h-1 w-24 mx-auto bg-gradient-primary rounded-full mb-8" />
        </div>

        <div className="space-y-4 mb-10 animate-fade-in delay-200">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Страница не найдена
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена
          </p>
        </div>

        <Link to="/" className="inline-block animate-fade-in delay-300">
          <Button 
            size="lg"
            className="gap-2 shadow-card-hover hover:shadow-elegant transition-all duration-300"
          >
            <Home className="w-5 h-5" />
            Вернуться на главную
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
