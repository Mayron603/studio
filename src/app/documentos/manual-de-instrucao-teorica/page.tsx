
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DOCUMENTS } from "@/lib/constants";
import { BookOpen, ChevronLeft, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ManualInstrucaoPage() {
  const doc = DOCUMENTS.find(d => d.slug === "manual-de-instrucao-teorica");

  if (!doc) {
    return <p>Documento não encontrado.</p>;
  }

  return (
    <div className="space-y-6">
       <Link href="/documentos" legacyBehavior passHref>
        <Button variant="outline" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" />
          Voltar para Documentos
        </Button>
      </Link>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">{doc.title}</CardTitle>
          </div>
          <CardDescription className="text-lg">{doc.description}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {doc.placeholderContent.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
          {doc.documentUrl && (
            <div className="mt-6">
               <Link href={doc.documentUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="default" className="w-full md:w-auto">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Abrir Documento Completo
                </Button>
              </Link>
            </div>
          )}
          <div className="mt-6 p-4 bg-accent/20 border-l-4 border-accent rounded-md">
            <p className="text-sm text-accent-foreground font-semibold">
              Este é um resumo informativo. O documento completo e oficial {doc.documentUrl ? "também " : ""}está disponível para consulta interna na unidade.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
