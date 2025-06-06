
"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COMMAND_NAME, SUB_COMMAND_NAME, APP_NAME, QUICK_LINKS } from "@/lib/constants";
import { Users, ShieldCheck, Target, ArrowRight, FileText, Gavel, ClipboardEdit, Contact } from "lucide-react";
import { motion } from "framer-motion";

const iconMap: { [key: string]: React.ElementType } = {
  FileText: FileText,
  Gavel: Gavel,
  ClipboardEdit: ClipboardEdit,
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function HomePage() {
  return (
    <div className="space-y-8">
      <motion.div variants={cardVariants} initial="hidden" animate="visible">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <ShieldCheck className="w-10 h-10 text-primary" />
              <CardTitle className="text-3xl font-bold">Bem-vindo ao {APP_NAME}</CardTitle>
            </div>
            <CardDescription className="text-lg">
              O portal digital do Comando de Aviação da Polícia Militar do Estado de São Paulo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-base leading-relaxed text-foreground/90">
              Navegue pelo nosso portal para conhecer mais sobre nossa história, estrutura, regulamentos e documentos importantes.
              Estamos comprometidos com a transparência e a excelência no serviço à comunidade do Estado de São Paulo.
            </p>
            <Card>
              <CardHeader className="flex flex-row items-center space-x-3 pb-2">
                <Users className="w-6 h-6 text-primary" />
                <CardTitle className="text-xl">Comando da Unidade</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-semibold">Comandante: 3º Sargento. {COMMAND_NAME}</p>
                <p className="font-semibold">Subcomandante: Cabo. {SUB_COMMAND_NAME}</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={1}>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center space-x-3">
            <Target className="w-8 h-8 text-primary" />
            <CardTitle className="text-2xl font-bold">Nossa Missão</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base leading-relaxed text-foreground/90">
              Prover suporte aéreo especializado às operações policiais, visando a preservação da ordem pública,
              a proteção da vida e do patrimônio, e a promoção da segurança para todos os cidadãos do Estado de São Paulo,
              atuando com profissionalismo, técnica e coragem.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={2}>
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Acesso Rápido</CardTitle>
            <CardDescription>Navegue para seções importantes do portal.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {QUICK_LINKS.map((link, index) => {
                const IconComponent = iconMap[link.icon?.displayName || link.icon?.name || 'FileText'] || FileText;
                return (
                  <motion.div key={link.id} variants={cardVariants} initial="hidden" animate="visible" custom={index + 3}>
                    <Card className="flex flex-col hover:shadow-lg transition-shadow duration-200 h-full">
                      <CardHeader className="flex-row items-start space-x-3 pb-3">
                        <div className="p-3 bg-primary/10 rounded-md">
                          <IconComponent className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl mb-1">{link.title}</CardTitle>
                          <CardDescription className="text-sm">{link.description}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        {/* Additional content for quick link card can go here if needed */}
                      </CardContent>
                      <div className="p-4 pt-0 mt-auto">
                        <Link href={link.href} passHref>
                          <Button variant="outline" className="w-full">
                            Acessar Seção
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={QUICK_LINKS.length + 3}>
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center space-x-3">
            <Contact className="w-8 h-8 text-primary" />
            <CardTitle className="text-2xl font-bold">Contato (Discord)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-base text-foreground/90">
              <span className="font-semibold">Tinga:</span> mayron.x
            </p>
            <p className="text-base text-foreground/90">
              <span className="font-semibold">David:</span> lucassc2355
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
