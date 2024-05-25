"use client"
import React from 'react';
import { SectionCarousel } from '../_landing/Section';
import { CarouselVideo } from './Carousel';
import { Tools, videosTechnologies } from '../Types/contains';

export default function Contains() {
  return (
    <>
      <SectionCarousel className='flex-cols-1 font-medium'>
        <h2 className='md:text-3xl sm:text-2lx'>Latest Technologies that you need to know {new Date().getMonth()}/{new Date().getFullYear() - 2000} </h2>
        <CarouselVideo videos={videosTechnologies} />
      </SectionCarousel>

      <SectionCarousel>
        <h2 className='md:text-3xl sm:text-2lx'>Tools that Company use Today {new Date().getMonth()}/{new Date().getFullYear() - 2000} </h2>
        <CarouselVideo videos={Tools} />
      </SectionCarousel>

      <SectionCarousel>
        <h2 className='md:text-3xl sm:text-2lx'>Create your guided project{new Date().getMonth()}/{new Date().getFullYear() - 2000} </h2>
        <CarouselVideo videos={Tools} />
      </SectionCarousel>

    </>
  );
}
