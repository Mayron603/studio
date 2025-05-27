
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { INTERNAL_REGULATIONS, REGULATIONS_PLACEHOLDER } from "@/lib/constants";
import { Gavel, FileCheck2 } from "lucide-react";

export default function RegulamentosPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Gavel className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Regulamentos Internos</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Normas e diretrizes que regem as atividades da CAVPM.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-base leading-relaxed text-foreground/90">
            {REGULATIONS_PLACEHOLDER}
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {INTERNAL_REGULATIONS.map((regulation) => (
          <Card key={regulation.id}>
            <CardHeader>
              <div className="flex items-start space-x-3">
                <FileCheck2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <CardTitle className="text-xl">{regulation.title}</CardTitle>
                  <CardDescription className="mt-1">{regulation.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Este é um resumo do documento. O conteúdo completo está disponível internamente.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
