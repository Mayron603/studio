
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HIERARCHY_LEVELS } from "@/lib/constants";
import { Users, ChevronUp, Star, Shield } from "lucide-react";

const icons = [Star, Users, Users, Users, Shield, Shield, ShieldCheckIcon]; // Example icons

// A more fitting icon for highest rank
const ShieldCheckIcon = (props: React.ComponentProps<typeof Shield>) => (
  <Shield {...props} className={`${props.className} fill-primary text-primary-foreground`} />
);


export default function HierarquiaPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Hierarquia CAVPM</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Estrutura de postos e graduações da Coordenadoria de Aviação.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {HIERARCHY_LEVELS.map((level, index) => {
              const IconComponent = icons[index % icons.length] || Users; // Fallback icon
              return (
                <Card key={level} className="transition-all hover:shadow-md">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-primary">{level}</h3>
                      <p className="text-sm text-muted-foreground">Nível {index + 1} da estrutura hierárquica.</p>
                    </div>
                    <ChevronUp className="w-5 h-5 text-muted-foreground transform rotate-90" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
