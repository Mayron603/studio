
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HIERARCHY_LEVELS } from "@/lib/constants";
import { Users, ChevronUp, Star, Shield, ShieldCheck } from "lucide-react";

// Ícone personalizado para o posto mais alto
const ShieldCheckIcon = (props: React.ComponentProps<typeof ShieldCheck>) => (
  <ShieldCheck {...props} className={`${props.className} fill-primary text-primary-foreground`} />
);

// Ícones na ordem decrescente da hierarquia
const orderedIcons = [ShieldCheckIcon, Shield, Shield, Users, Users, Users, Star];

export default function HierarquiaPage() {
  const reversedHierarchyLevels = [...HIERARCHY_LEVELS].reverse();

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Users className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Hierarquia CAVPM</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Estrutura de postos e graduações da CAVPM.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reversedHierarchyLevels.map((level, index) => {
              const IconComponent = orderedIcons[index] || Users; // Fallback icon
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
                      {/* Texto do nível removido */}
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
