import React from "react";
import { Carousel } from "@mantine/carousel";
import raven from "../../public/shop/image-slider/raven.avif";
import modelS from "../../public/shop/image-slider/model_s.avif";
import modelY from "../../public/shop/image-slider/model_y.avif";
import tesla from "../../public/shop/image-slider/tesla.gif";
import chill from "../../public/shop/image-slider/chill_crew.avif";
import wall from "../../public/shop/image-slider/wall_connector.avif";
import charger from "../../public/shop/image-slider/wireless_charger.avif";
import Image from "next/image";


const ImageSlider = () => {
  return (
    <Carousel
      slideGap='md'
      loop
      mx='auto'
      align='center'
      draggable
      slideSize='33.333333%'
      withIndicators
      breakpoints={[
        { maxWidth: "md", slideSize: "50%" },
        { maxWidth: "sm", slideSize: "100%", slideGap: 0 },
      ]}
      className='w-full px-8'
    >
      <Carousel.Slide>
        <Image
          src={raven}
          alt='/'
          className=' sm:w-[426px] sm:h-[426px] h-[384px] w-[384px]'
        />
        <h3 className='text-xs sm:text-sm font-bold p-4'>
          Men's Raven Lightweight Zip Up Bomber Jacket
        </h3>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src={modelS}
          alt='/'
          className=' sm:w-[426px] sm:h-[426px] h-[384px] w-[384px]'
        />
        <h3 className='text-xs sm:text-sm font-bold p-4'>
          Model S Roof Rack - Glass Roof
        </h3>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src={modelY}
          alt='/'
          className=' sm:w-[426px] sm:h-[426px] h-[384px] w-[384px]'
        />
        <h3 className='text-xs sm:text-sm font-bold p-4'>
          Model S All-Weather Interior Liners
        </h3>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src={tesla}
          alt='/'
          className=' sm:w-[426px] sm:h-[426px] h-[384px] w-[384px]'
        />
        <h3 className='text-xs sm:text-sm font-bold p-4'>
          Tesla Shop Gift Card
        </h3>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src={chill}
          alt='/'
          className=' sm:w-[426px] sm:h-[426px] h-[384px] w-[384px]'
        />
        <h3 className='text-xs sm:text-sm font-bold p-4'>
          Men’s Chill Crew Neck Sweatshirt
        </h3>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src={wall}
          alt='/'
          className=' sm:w-[426px] sm:h-[426px] h-[384px] w-[384px]'
        />
        <h3 className='text-xs sm:text-sm font-bold p-4'>Wall Connector</h3>
      </Carousel.Slide>
      <Carousel.Slide>
        <Image
          src={charger}
          alt='/'
          className=' sm:w-[426px] sm:h-[426px] h-[384px] w-[384px]'
        />
        <h3 className='text-xs sm:text-sm font-bold p-4'>Wall Connector</h3>
      </Carousel.Slide>
    </Carousel>
  );
};

export default ImageSlider;
