import GridControlsGuid from "@/components/guid/GridControlsGuid";
import GridSizeGuid from "@/components/guid/GridSizeGuid";
import MazeAlgGuid from "@/components/guid/MazeAlgGuid";
import SearchAlgGuid from "@/components/guid/SearchAlgGuid";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";

export default function CarouselDApiDemo() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const guids = [
    <GridSizeGuid />,
    <MazeAlgGuid />,
    <SearchAlgGuid />,
    <GridControlsGuid />,
  ];

  return (
    <div className="flex flex-col items-center">
      <Carousel setApi={setApi} className="md:max-w-[45%] lg:max-w-[55%] flex-1">
        <CarouselContent>
          {guids.map((guid, index) => (
            <CarouselItem key={index}>{guid}</CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="md:pt-2 lg:pt-5 text-center text-sm text-muted-foreground">
        Guide Slide {current} of {count}
      </div>
    </div>
  );
}
