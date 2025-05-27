
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HISTORY_PLACEHOLDER } from "@/lib/constants";
import { ScrollText } from "lucide-react";
import Image from "next/image";

export default function HistoriaPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <ScrollText className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Nossa História</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Uma jornada de dedicação e evolução a serviço da comunidade.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Image 
            src="https://placehold.co/800x400.png" 
            alt="Marco histórico da CAVPM"
            width={800}
            height={400}
            className="rounded-lg object-cover w-full mb-6 shadow-md"
            data-ai-hint="historical archive photo"
          />
          {HISTORY_PLACEHOLDER.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-foreground/90">
              {paragraph}
            </p>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
