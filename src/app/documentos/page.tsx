
"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DOCUMENTS } from "@/lib/constants";
import { FileText, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

export default function DocumentosPage() {
  return (
    <div className="space-y-6">
      <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={0}>
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <FileText className="w-8 h-8 text-primary" />
              <CardTitle className="text-3xl font-bold">Documentos Oficiais</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Acesse os manuais e documentos importantes da CAVPM.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-base leading-relaxed text-foreground/90">
              Esta seção disponibiliza acesso aos principais documentos normativos e de instrução da CAVPM. 
              Estes materiais são essenciais para o entendimento dos procedimentos, condutas e conhecimentos técnicos 
              requeridos para os membros da nossa unidade.
            </p>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
              {DOCUMENTS.map((doc, index) => (
                <motion.div key={doc.id} variants={cardVariants} initial="hidden" animate="visible" custom={index + 1}>
                  <Card className="flex flex-col h-full">
                    <CardHeader>
                      <div className="flex items-start space-x-3">
                        <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <CardTitle className="text-xl">{doc.title}</CardTitle>
                          <CardDescription className="mt-1">{doc.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      {/* Additional content or summary could go here */}
                    </CardContent>
                    <div className="p-4 pt-0 mt-auto">
                      <Link href={`/documentos/${doc.slug}`} passHref>
                        <Button className="w-full">
                          Acessar Documento
                          <FileText className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
