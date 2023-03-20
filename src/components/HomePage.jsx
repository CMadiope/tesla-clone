import React from "react";
import Image from "next/image";
import modelS from "../../public/home/model-s.png";
import modelY from "../../public/home/model-y.png";
import model3 from '../../public/home/model3.jpeg'
import modelx from '../../public/home/modelx.jpeg'
import panels from '../../public/home/solarpanels.jpeg'
import roof from '../../public/home/solar-roof.webp'
import accessories from '../../public/home/accessories.jpeg'
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className='w-full relative snap-y snap-mandatory h-screen overflow-scroll'>
      <section
        style={{
          backgroundImage: `url(${modelS.src})`,
          height: "100%",
          width: "100%",
        }}
        className='pb-10 min-h-screen bg-center bg-cover bg-no-repeat snap-start snap-always transition-all duration-200 ease-in-out w-full'
      >
        <div className='pt-[25%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Model 3</h1>
          <p className='text-center font-light pt-2'>Leasing starting at $349/mo</p>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${modelY.src})`,
          height: "100%",
          width: "100%",
        }}
        className='pb-10 min-h-screen bg-center bg-cover bg-no-repeat snap-start snap-always transition-all duration-200 ease-in-out w-full'
      >
        <div className='pt-[25%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Model S</h1>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${model3.src})`,
          height: "100%",
          width: "100%",
        }}
        className='pb-10 min-h-screen bg-center bg-cover bg-no-repeat snap-start snap-always transition-all duration-200 ease-in-out w-full'
      >
        <div className='pt-[25%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Model Y</h1>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${modelx.src})`,
          height: "100%",
          width: "100%",
        }}
        className='pb-10 min-h-screen bg-center bg-cover bg-no-repeat snap-start snap-always transition-all duration-200 ease-in-out w-full'
      >
        <div className='pt-[25%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Model X</h1>
          <p className='text-center underline font-light pt-2'>Schedule a Demo Drive</p>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${panels.src})`,
          height: "100%",
          width: "100%",
        }}
        className='pb-10 min-h-screen bg-center bg-cover bg-no-repeat snap-start snap-always transition-all duration-200 ease-in-out w-full'
      >
        <div className='pt-[25%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Solar Panels</h1>
          <p className='text-center font-light pt-2'>Lowest Cost Solar Panels in America</p>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${roof.src})`,
          height: "100%",
          width: "100%",
        }}
        className='pb-10 min-h-screen bg-center bg-cover bg-no-repeat snap-start snap-always transition-all duration-200 ease-in-out w-full'
      >
        <div className='pt-[25%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Solar Roof</h1>
          <p className='text-center font-light pt-2'>Produce CLean Energy From Your Roof</p>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${accessories.src})`,
          height: "100%",
          width: "100%",
        }}
        className='pb-10 min-h-screen bg-center bg-cover bg-no-repeat snap-start snap-always transition-all duration-200 ease-in-out w-full '
      >
        <div className='pt-[25%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Accessories</h1>
          
        </div>
      </section>
      <div className='flex max-ss:flex-col flex-row mx-auto gap-2 justify-center ss:items-center fixed left-[0%] bottom-16 w-full '>
        <button className='ss:w-60 py-2 bg-black/70 text-white rounded-lg mx-6 cursor-pointer'>
          Custom Order
        </button>
        <button className='ss:w-60 py-2 bg-white/80 text-black rounded-lg mx-6 cursor-pointer'>
          Demo Drive
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default HomePage;
