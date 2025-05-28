
"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { TRAINING_DATA } from "@/lib/constants";
import type { TrainingMaterial } from "@/lib/constants";
import { GraduationCap, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

export default function TreinamentosPage() {
  const { toast } = useToast();

  const handleQuizClick = (quizTitle: string) => {
    toast({
      title: "Quiz em Desenvolvimento",
      description: `O quiz "${quizTitle}" ainda não está disponível. Tente novamente mais tarde.`,
      variant: "default",
    });
  };

  const renderMaterialContent = (material: TrainingMaterial) => {
    switch (material.type) {
      case 'document':
        return (
          <Link href={material.url || '#'} target="_blank" rel="noopener noreferrer" className="block">
            <Button variant="outline" size="sm" className="w-full justify-start">
              <material.icon className="mr-2 h-4 w-4" />
              Abrir Documento: {material.title}
            </Button>
          </Link>
        );
      case 'video':
        return (
          <div className="flex items-center space-x-2 p-3 border rounded-md bg-muted/50">
            <material.icon className="h-8 w-8 text-primary" />
            <div>
              <p className="font-semibold">{material.title}</p>
              <p className="text-xs text-muted-foreground">{material.description}</p>
              {material.url && material.url !== '#' ? (
                <Link href={material.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="link" size="sm" className="p-0 h-auto">Assistir Vídeo</Button>
                </Link>
              ) : (
                 <p className="text-xs text-amber-600 flex items-center mt-1"><AlertTriangle className="w-3 h-3 mr-1"/>Vídeo indisponível no momento.</p>
              )}
            </div>
          </div>
        );
      case 'instruction':
        return (
          <div className="p-3 border rounded-md bg-muted/50">
            <div className="flex items-center mb-2">
              <material.icon className="h-5 w-5 mr-2 text-primary" />
              <h4 className="font-semibold">{material.title}</h4>
            </div>
            <p className="text-sm text-foreground/80 mb-1">{material.description}</p>
            {material.content && <p className="text-xs italic text-muted-foreground bg-background p-2 rounded">{material.content}</p>}
          </div>
        );
      case 'quiz':
        return (
          <div className="p-3 border rounded-md bg-muted/50">
            <div className="flex items-center mb-2">
               <material.icon className="h-5 w-5 mr-2 text-primary" />
              <h4 className="font-semibold">{material.title}</h4>
            </div>
            <p className="text-sm text-foreground/80 mb-2">{material.description}</p>
            <Button size="sm" onClick={() => handleQuizClick(material.title)} className="w-full">
              Iniciar Quiz/Avaliação
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <GraduationCap className="w-10 h-10 text-primary" />
            <CardTitle className="text-3xl font-bold">Área de Treinamentos</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Acesse materiais de estudo, vídeos, instruções e avaliações para aprimorar seus conhecimentos e habilidades.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-base leading-relaxed text-foreground/90">
            Bem-vindo à central de treinamentos da CAVPM. Aqui você encontrará recursos organizados por categoria para auxiliar no seu desenvolvimento profissional contínuo. Dedique-se aos estudos e às práticas para alcançar a excelência em suas funções.
          </p>
          
          {TRAINING_DATA.length > 0 ? (
            <Accordion type="multiple" className="w-full space-y-4">
              {TRAINING_DATA.map((category) => (
                <AccordionItem value={category.id} key={category.id} className="border bg-card p-0 rounded-lg shadow-sm">
                  <AccordionTrigger className="hover:no-underline px-6 py-4 text-xl font-semibold">
                    {category.title}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 pt-0">
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <div className="space-y-3">
                      {category.materials.map((material) => (
                        <div key={material.id}>
                          {renderMaterialContent(material)}
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-center text-muted-foreground">Nenhum material de treinamento disponível no momento.</p>
          )}
        </CardContent>
      </Card>

       <Card className="shadow-md">
        <CardHeader>
            <div className="flex items-center space-x-3">
              <ClipboardCheck className="w-8 h-8 text-primary" />
              <CardTitle className="text-2xl font-bold">Avaliações e Testes</CardTitle>
            </div>
          <CardDescription>
            Verifique seu aprendizado com nossos testes teóricos e práticos (simulados).
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-foreground/90">
            Após estudar os materiais, utilize esta seção para realizar testes e avaliar seu progresso.
            Os resultados ajudam a identificar áreas que necessitam de maior atenção.
          </p>
          <Button onClick={() => handleQuizClick("Avaliação Geral de Conhecimentos")} className="w-full md:w-auto">
            Iniciar Avaliação Geral (Exemplo)
          </Button>
           <p className="mt-3 text-xs text-muted-foreground">
            Atualmente, os quizzes são demonstrativos. Funcionalidades completas de avaliação serão implementadas em breve.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
