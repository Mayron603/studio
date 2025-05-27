
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HISTORY_PLACEHOLDER } from "@/lib/constants";
import { ScrollText } from "lucide-react";
import Image from "next/image";
import heliImage from '../../../heli.png';

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
        <Image
          src={heliImage}
          alt="Marco histórico da CAVPM"
          width={1024} // Original width for aspect ratio
          height={1536} // Original height for aspect ratio
          className="rounded-lg object-contain w-full max-h-[360px] mb-6 shadow-md"
          priority // Good to add for LCP images
        />
        <CardContent className="space-y-4">
          {/* Image component was moved above CardContent */}
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
