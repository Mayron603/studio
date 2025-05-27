
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HISTORY_PLACEHOLDER } from "@/lib/constants";
import { ScrollText } from "lucide-react";
// import Image from "next/image";
// import heliImage from '../../../heli.png'; // Import removed

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
        {/* Image component removed from here */}
        <CardContent className="space-y-4 pt-6"> {/* Added pt-6 to CardContent since image above it was removed */}
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
