
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { COMMAND_NAME, SUB_COMMAND_NAME, APP_NAME } from "@/lib/constants";
import { Users, ShieldCheck } from "lucide-react";
// import Image from "next/image"; // Import removed

export default function HomePage() {
  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <ShieldCheck className="w-10 h-10 text-primary" />
            <CardTitle className="text-3xl font-bold">Bem-vindo ao {APP_NAME}</CardTitle>
          </div>
          <CardDescription className="text-lg">
            O portal digital da Coordenadoria de Aviação da Polícia Militar de Grande Metrópole.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base leading-relaxed">
            Navegue pelo nosso portal para conhecer mais sobre nossa história, estrutura, regulamentos e documentos importantes. 
            Estamos comprometidos com a transparência e a excelência no serviço à comunidade de Grande Metrópole.
          </p>
          <div className="grid md:grid-cols-1 gap-6"> {/* Changed to md:grid-cols-1 since image card is removed */}
            <Card>
              <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">Comando da Unidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Comando: {COMMAND_NAME}</p>
                <p className="font-semibold">Comandante Sênior: {SUB_COMMAND_NAME}</p>
              </CardContent>
            </Card>
             {/* Card with image removed
             <Card className="overflow-hidden">
              <CardContent className="p-0">
                <Image
                  src="https://placehold.co/600x400.png" // This was the placeholder
                  alt="Imagem de destaque da unidade policial"
                  data-ai-hint="police unit"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </CardContent>
            </Card>
            */}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Nossa Missão</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-base leading-relaxed">
            Prover suporte aéreo especializado às operações policiais, visando a preservação da ordem pública, 
            a proteção da vida e do patrimônio, e a promoção da segurança para todos os cidadãos de Grande Metrópole, 
            atuando com profissionalismo, técnica e coragem.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
