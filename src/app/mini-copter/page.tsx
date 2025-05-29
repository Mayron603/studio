
import { CopterControl } from "@/components/mini-copter/copter-control";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Gamepad2 } from "lucide-react";

export default function MiniCopterPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Gamepad2 className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Mini Copter</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Controle o mini helicóptero com as teclas de seta!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center">
          <p className="mb-4 text-sm text-muted-foreground">
            Use as teclas de seta (↑, ↓, ←, →) para mover o helicóptero.
          </p>
          <CopterControl />
           <p className="mt-4 text-xs text-muted-foreground">
            Esta é uma funcionalidade experimental e lúdica.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

    