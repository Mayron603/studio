
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GALLERY_IMAGES } from "@/lib/constants";
import { ImageIcon as GalleryIconLucide } from "lucide-react"; // Renomeado para evitar conflito

export default function GaleriaPage() {
  return (
    <div className="space-y-6">
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <GalleryIconLucide className="w-8 h-8 text-primary" />
            <CardTitle className="text-3xl font-bold">Galeria de Imagens</CardTitle>
          </div>
          <CardDescription className="text-lg">
            Momentos e equipamentos da CAVPM em destaque.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-base leading-relaxed text-foreground/90">
            Explore nossa galeria para visualizar algumas das aeronaves, equipes em ação e momentos significativos
            do Comando de Aviação da Polícia Militar do Estado de São Paulo.
          </p>
          {GALLERY_IMAGES.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_IMAGES.map((image) => (
                <Card key={image.id} className="overflow-hidden group">
                  <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-300 group-hover:scale-105"
                      data-ai-hint={image.aiHint}
                      priority={GALLERY_IMAGES.indexOf(image) < 3} // Prioritize first 3 images
                    />
                  </div>
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">{image.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground line-clamp-2">{image.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground">Nenhuma imagem disponível na galeria no momento.</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
