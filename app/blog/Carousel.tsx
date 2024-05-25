import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../../components/ui/carousel';
import { YouTubeEmbed } from '@next/third-parties/google';
import { Video } from '../Types/contains';

export const CarouselVideo = ({ videos }: { videos: Video[] }) => {

    useEffect(() => {

    }, [])
    return (
        <Carousel className="w-full w-90">
            <CarouselContent className="-ml-1">
                {videos.map((video, index) => (
                    <CarouselItem key={video.key} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <div className="rounded-md overflow-hidden shadow-md">
                                <YouTubeEmbed videoid={video.key} />
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default CarouselVideo;


