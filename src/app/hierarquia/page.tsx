
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HIERARCHY_LEVELS, SUB_COMMAND_NAME } from "@/lib/constants";
import { Users, ChevronUp, Star, Shield, ShieldCheck } from "lucide-react";

// A more fitting icon for highest rank
const ShieldCheckIcon = (props: React.ComponentProps<typeof Shield>) => (
  <ShieldCheck {...props} className={`${props.className} fill-primary text-primary-foreground`} />
);

const icons = [Star, Users, Users, Users, Shield, Shield, ShieldCheckIcon]; // Example icons


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
              let personnelInfo = null;

              if (level === "Comando de Unidade") {
                personnelInfo = (
                  <>
                    <p className="text-sm font-medium text-foreground/80 mt-1">Comandante: 3º Sargento. Tinga Tava</p>
                    <p className="text-sm font-medium text-foreground/80">Subcomandante: Cabo. David Silva</p>
                  </>
                );
              } else if (level === "Comandante Sênior") {
                personnelInfo = (
                  <p className="text-sm font-medium text-foreground/80 mt-1">Cabo. Albert Patrick</p>
                );
              }

              return (
                <Card key={level} className="transition-all hover:shadow-md">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-primary">{level}</h3>
                      {personnelInfo}
                      <p className="text-sm text-muted-foreground mt-1">Nível {index + 1} da estrutura hierárquica.</p>
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
