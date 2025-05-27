
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
            <CardTitle className="text-3xl font-bold">Formulário de Contato / Solicitação</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Utilize o formulário abaixo para suas solicitações ou para entrar em contato.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-base leading-relaxed text-foreground/90">
            Por favor, preencha o formulário incorporado abaixo. Suas informações serão enviadas diretamente para o setor responsável.
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
              title="Formulário CAVPM"
              className="min-h-[600px]"
            >
              Carregando…
            </iframe>
          </div>
           <p className="mt-4 text-sm text-muted-foreground">
            Se você encontrar problemas para visualizar ou enviar o formulário, por favor, tente acessá-lo diretamente clicando <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">aqui</a>.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
