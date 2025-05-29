
"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FLEET_DATA, APP_NAME } from "@/lib/constants";
import { PlaneTakeoff, Info } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heliImage from '../../../heli.png'; // Importando a imagem local

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FrotaPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className="space-y-8">
      <motion.div variants={cardVariants} initial="hidden" animate="visible">
        <Card className="shadow-lg">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <PlaneTakeoff className="w-10 h-10 text-primary" />
              <CardTitle className="text-3xl font-bold">Nossa Frota Aérea</CardTitle>
            </div>
            <CardDescription className="text-lg">
              Conheça a aeronave que compõe a frota da {APP_NAME}.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6 text-base leading-relaxed text-foreground/90">
              A {APP_NAME} opera com o modelo Helibras AS350 Esquilo, uma aeronave versátil e confiável, 
              para atender às variadas demandas das operações de segurança pública. 
              Esta aeronave é mantida com os mais altos padrões e equipada para missões específicas, 
              garantindo eficiência e segurança.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
        {FLEET_DATA.map((aircraft, index) => (
          <motion.div key={aircraft.id} variants={cardVariants} initial="hidden" animate="visible" custom={index + 1}>
            <Card className="shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col lg:flex-row overflow-hidden">
              <div ref={heroRef} className="relative w-full lg:w-2/5 h-64 lg:h-auto rounded-t-lg lg:rounded-l-lg lg:rounded-t-none overflow-hidden">
                <motion.div style={{ y: imageY }} className="absolute inset-0">
                  <Image
                    src={heliImage} 
                    alt={`Imagem da aeronave ${aircraft.name}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint="police helicopter"
                    priority
                  />
                </motion.div>
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
                    <ScrollArea className="h-40 rounded-md border p-3 bg-muted/30">
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
          </motion.div>
        ))}
      </div>
      <motion.div variants={cardVariants} initial="hidden" animate="visible" custom={FLEET_DATA.length + 1}>
       <Card className="mt-8 bg-accent/10 border-accent/30">
          <CardHeader>
            <CardTitle className="text-xl">Observação Importante</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-accent-foreground">
              As informações e imagem apresentadas nesta seção são para fins ilustrativos e representam
              o modelo em operação na {APP_NAME}.
              A frota está sujeita a atualizações e manutenções.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
