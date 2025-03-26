import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel"

import Image from "next/image";

export function Swipe({ images }: { images: string[] }) {

    return (
        <div className="mx-auto max-w-xs">
            <Carousel className="w-full max-w-xs">
                <CarouselContent>
                    {images.map((_, index) => (
                        <CarouselItem key={index}>
                            <Image
                                src={images[index]}
                                alt="로고 이미지"
                                width={1920}
                                height={400}
                                className="z-0 h-[400px]"
                            />

                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}
