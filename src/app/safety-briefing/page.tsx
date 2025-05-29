
"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { generateSafetyBriefing, type SafetyBriefingOutput } from '@/ai/flows/safety-briefing-flow';
import { OPERATION_TYPES, APP_NAME } from '@/lib/constants';
import { ShieldAlert, ListChecks, Loader2 } from 'lucide-react';

export default function SafetyBriefingPage() {
  const [operationType, setOperationType] = useState<string>('');
  const [briefing, setBriefing] = useState<SafetyBriefingOutput | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    if (!operationType) {
      setError("Por favor, selecione um tipo de operação.");
      return;
    }
    setIsLoading(true);
    setError(null);
    setBriefing(null);
    try {
      const result = await generateSafetyBriefing({ operationType: OPERATION_TYPES.find(op => op.value === operationType)?.label || operationType });
      setBriefing(result);
    } catch (e) {
      console.error(e);
      setError("Falha ao gerar o briefing de segurança. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <ShieldAlert className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Briefing de Segurança Interativo</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Selecione um tipo de operação para gerar pontos chave de segurança com auxílio de IA.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="operationType" className="text-base font-medium">Tipo de Operação Aérea</Label>
            <Select value={operationType} onValueChange={setOperationType}>
              <SelectTrigger id="operationType" className="w-full md:w-[400px]">
                <SelectValue placeholder="Selecione o tipo de operação..." />
              </SelectTrigger>
              <SelectContent>
                {OPERATION_TYPES.map((op) => (
                  <SelectItem key={op.value} value={op.value}>
                    {op.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleSubmit} disabled={isLoading || !operationType}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Gerando...
              </>
            ) : (
              "Gerar Briefing de Segurança"
            )}
          </Button>

          {error && (
            <Alert variant="destructive">
              <ShieldAlert className="h-4 w-4" />
              <AlertTitle>Erro</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>

      {briefing && (
        <Card className="shadow-md">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <ListChecks className="w-7 h-7 text-primary" />
              <CardTitle className="text-2xl">Pontos de Atenção para: {OPERATION_TYPES.find(op => op.value === operationType)?.label || operationType}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <ul className="list-disc pl-6 space-y-2 text-base text-foreground/90">
              {briefing.safetyPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            <Alert variant="default" className="mt-6 bg-accent/20 border-l-4 border-accent">
              <ShieldAlert className="h-5 w-5 text-accent-foreground/80" />
              <AlertTitle className="font-semibold text-accent-foreground">Aviso Importante</AlertTitle>
              <AlertDescription className="text-accent-foreground/90">
                {briefing.disclaimer}
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
