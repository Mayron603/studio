
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FLEET_DATA, APP_NAME } from "@/lib/constants";
import { PlaneTakeoff, Info } from "lucide-react";

export default function FrotaPage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <PlaneTakeoff className="w-10 h-10 text-primary" />
            <CardTitle className="text-3xl font-bold">Nossa Frota Aérea</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Conheça as aeronaves que compõem a frota da {APP_NAME}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-base leading-relaxed text-foreground/90">
            A {APP_NAME} opera uma frota diversificada de aeronaves para atender às variadas demandas
            das operações de segurança pública. Cada aeronave é mantida com os mais altos padrões
            e equipada para missões específicas, garantindo eficiência e segurança.
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {FLEET_DATA.map((aircraft) => (
          <Card key={aircraft.id} className="shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row">
            <div className="relative w-full lg:w-2/5 h-64 lg:h-auto rounded-t-lg lg:rounded-l-lg lg:rounded-t-none overflow-hidden">
              <Image
                src={aircraft.imageUrl}
                alt={`Imagem da aeronave ${aircraft.name}`}
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-500 hover:scale-105"
                data-ai-hint={aircraft.aiHint}
              />
            </div>
            <div className="flex flex-col flex-1">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{aircraft.name}</CardTitle>
                <CardDescription className="text-md">{aircraft.type}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <p className="text-base text-foreground/80">{aircraft.description}</p>
                <div>
                  <h4 className="text-md font-semibold mb-2 flex items-center">
                    <Info className="w-5 h-5 mr-2 text-primary/80" />
                    Especificações Principais:
                  </h4>
                  <ScrollArea className="h-32 rounded-md border p-3 bg-muted/30">
                    <ul className="space-y-1.5 text-sm">
                      {aircraft.specifications.map((spec) => (
                        <li key={spec.label}>
                          <span className="font-medium">{spec.label}:</span> {spec.value}
                        </li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
       <Card className="mt-8 bg-accent/10 border-accent/30">
        <CardHeader>
          <CardTitle className="text-xl">Observação Importante</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-accent-foreground">
            As informações e imagens apresentadas nesta seção são para fins ilustrativos e podem não representar
            exatamente as configurações ou modelos específicos em operação na {APP_NAME} em todos os momentos.
            A frota está sujeita a atualizações e manutenções.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
