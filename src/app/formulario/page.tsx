
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GOOGLE_FORM_URL } from "@/lib/constants";
import { ClipboardEdit } from "lucide-react";

export default function FormularioPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <ClipboardEdit className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Formulário de Inscrição CAVPM</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Inscreva-se para o processo seletivo da CAVPM e para a realização da etapa teórica.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-base leading-relaxed text-foreground/90">
            Preencha o formulário abaixo para dar início à sua inscrição no Comando de Aviação da Polícia Militar do Estado de São Paulo.
            Este é o primeiro passo para participar do nosso processo seletivo, que inclui a avaliação teórica.
            Suas informações serão tratadas com confidencialidade e utilizadas exclusivamente para este fim.
            Certifique-se de que todos os campos obrigatórios estão corretamente preenchidos.
          </p>
          <div className="aspect-[9/16] md:aspect-video w-full rounded-lg overflow-hidden border shadow-inner">
            <iframe
              src={GOOGLE_FORM_URL + "?embedded=true"}
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Formulário de Inscrição CAVPM"
              className="min-h-[600px]"
            >
              Carregando…
            </iframe>
          </div>
           <p className="mt-4 text-sm text-muted-foreground">
            Se você encontrar problemas para visualizar ou enviar o formulário de inscrição, por favor, tente acessá-lo diretamente clicando <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aqui</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
