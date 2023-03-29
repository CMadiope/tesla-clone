import { useRef } from "react";
import { Carousel } from "@mantine/carousel";
import { RxDotFilled } from "react-icons/rx";
import image1 from "../../public/shop/Wall_Connector.avif";
import image2 from "../../public/shop/Floormats.avif";
import image3 from "../../public/shop/Chill_banner.avif";
import mobile from "../../public/shop/Wall_Connector_mobile.avif";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import Autoplay from "embla-carousel-autoplay";


const CarouselSlide = () => {
  const autoplay = useRef(Autoplay({ delay: 4000 }));
  return (
    <Carousel
      loop
      slideSize='100%'
      slidesToScroll='1'
      draggable
      align='start'
      withIndicators
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      nextControlIcon={
        <BsChevronCompactRight size={25} className='text-white' />
      }
      previousControlIcon={
        <BsChevronCompactLeft size={25} className='text-white' />
      }
    >
      <Carousel.Slide
        style={{
          backgroundImage: `url(${image1.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col relative'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center text-white pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl'>Wall Connector</h1>
            <p className='font-light text-sm py-2'>
              The most convenient way to charge at home
            </p>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide
        style={{
          backgroundImage: `url(${image2.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col justify-between items-center'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center text-white pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl'>All-Weather Interior Liners</h1>
            <p className='font-light text-sm py-2'>
              For maximum protection and durability
            </p>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </Carousel.Slide>
      <Carousel.Slide
        style={{
          backgroundImage: `url(${image3.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col justify-between items-center'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center text-white pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl'>Chill Collection</h1>
            <p className='font-light text-sm py-2'>
              Premium comfort for any season
            </p>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </Carousel.Slide>
    </Carousel>
  );
};

export default CarouselSlide;
