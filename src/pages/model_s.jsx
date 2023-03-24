import React from "react";
import modelS from "../../public/home/model-s-detail.jpeg";
import interio1 from "../../public/model-S/Model-S-Interior-Hero-.jpeg";
import grid1 from "../../public/model-S/grid-1.jpeg";
import grid3 from "../../public/model-S/grid-3.jpeg";
import Image from "next/image";
import blue from "../../public/model-S/blue-hero.jpeg";
import train from "../../public/model-S/Powertrain.jpeg";
import exterior from "../../public/model-S/Model-S-Exterior.jpeg";
import Footer from "@/components/Footer";

const Model_S = () => {
  return (
    <div className='w-full text-white'>
      <section
        style={{
          backgroundImage: `url(${modelS.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col justify-between items-center'
      >
        <div className='pt-[25%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Model S</h1>
          <p className='text-center font-normal pt-2'>Plaid</p>
        </div>
        <div className='flex flex-col gap-4 justify-end items-center text-white pb-10'>
          <div className='flex gap-6 w-full items-center justify-between'>
            <div className=''>
              <p className='text-lg text-center'>306 mi</p>
              <span className='text-xs font-light text-center'>
                Range (Epa est.)
              </span>
            </div>
            <div className=''>
              <p className='text-lg text-center'>1.99s</p>
              <span className='text-xs font-light text-center'>0-60 mph*</span>
            </div>
            <div className=''>
              <p className='text-lg text-center'>200mph</p>
              <span className='text-xs font-light text-center'>Top Speed*</span>
            </div>
          </div>
          <div className='flex max-ss:flex-col flex-row mx-auto gap-2 justify-center ss:items-center w-full text-sm'>
            <button className='py-2 px-6 border-2 ss:w-60 rounded-md hover:text-black hover:bg-white duration-500'>
              View Inventory
            </button>
            <button className='ss:w-60 py-2 px-6 bg-black/50 text-white/90 rounded-md hover:bg-black/30 duration-500'>
              Order Now
            </button>
          </div>
        </div>
      </section>
      <div className='h-56 w-full bg-black backdrop-blur-xl text-white text-center pt-[90px] text-2xl '>
        Interior of the Future
      </div>
      <section
        style={{
          backgroundImage: `url(${interio1.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full '
      ></section>
      <div className='w-full  bg-black text-white'>
        <video
          width='100%'
          height='100%'
          playsInline
          loop
          muted
          className='ss:p-20 py-20 rounded-lg'
        >
          <source
            src='/model-S/Model-S-Interior-Carousel-1.mp4'
            type='video/mp4'
          />
        </video>
        <div className='px-6 '>
          <h6 className='pb-6 text-center'>Cinematic Experience</h6>
          <p className='text-sm text-center pb-4'>
            A 17” touchscreen with left-right tilt offers 2200 x 1300
            resolution, true colors and exceptional responsiveness for gaming,
            movies and more.
          </p>
        </div>
      </div>
      <div className='grid ss:grid-cols-2 bg-black w-full p-12 md:p-20 gap-6 mx-auto'>
        <div>
          <Image src={grid1} alt='/' />
        </div>
        <div className='px-6 pt-4 ss:pt-8 md:pt-16'>
          <h4 className='font-light md:text-lg'>Stay Connected</h4>
          <p className='font-light text-sm md:text-base py-2'>
            Instantly connect with multi-device Bluetooth, or fast charge
            devices with wireless and 36-watt USB-C charging.
          </p>
        </div>
        <div>
          <video playsInline loop muted>
            <source src='/model-S/grid-2.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='px-6 pt-4 ss:pt-8 md:pt-16'>
          <h4 className='font-light md:text-lg'>Immersive Sound</h4>
          <p className='font-light text-sm md:text-base py-2'>
            A 22-speaker, 960-watt audio system with Active Road Noise Reduction
            offers immersive listening and studio-grade sound quality.
          </p>
        </div>
        <div>
          <Image src={grid3} alt='/' />
        </div>
        <div className='px-6 pt-4 ss:pt-8 md:pt-16'>
          <h4 className='font-light md:text-lg'>Roamfor Everything</h4>
          <p className='font-light text-sm md:text-base py-2'>
            With front and rear trunks and fold-flat seats you can fit your bike
            without taking the wheel off—and your luggage too.
          </p>
        </div>
      </div>
      <section
        style={{
          backgroundImage: `url(${blue.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex justify-evenly mx-auto items-end absolute left-0 bottom-[40px] w-full px-16'>
          <div className='flex- flex-col '>
            <h3 className='text-xl pb-2'>1,020 hp</h3>
            <p className='font-light text-xs'>Peak Power</p>
          </div>
          <div className='flex- flex-col '>
            <h3 className='text-xl pb-2'>9.23s</h3>
            <p className='font-light text-xs'>@155 mph 1/4 mile</p>
          </div>
          <div className='flex- flex-col '>
            <h3 className='text-xl pb-2'>1.99s</h3>
            <p className='font-light text-xs'>0-60 mph*</p>
          </div>
        </div>
      </section>
      <div className='bg-white text-black grid sm:grid-cols-3 w-full p-8'>
        <div className=''>
          <h3 className='text-lg font-light'>Plaid</h3>
          <h2 className='py-px text-xl font-semibold'>Beyond Ludicrous</h2>
        </div>
        <div className='sm:col-span-2 sm:p-6'>
          <p className='pt-4 text-sm font-light '>
            Model S Plaid has the quickest acceleration of any vehicle in
            production. Updated battery architecture for all Model S trims
            enables back-to-back track runs without performance degradation.
            Chat with a Tesla Advisor to learn more about Model S or schedule a
            demo drive today.
          </p>
        </div>
        <div className='w-full grid gap-4 py-8 md:py-0 ss:grid-cols-2'>
          <button className='border-2 border-black py-[5px] hover:bg-black hover:text-white duration-300 rounded-md'>
            Order Now
          </button>
          <button className='py-[5px] duration-300 bg-[#393c41]/10 hover:bg-[#393c41]/30 rounded-md'>
            View Inventory
          </button>
        </div>
      </div>
      <section className='w-full bg-[#393c41]/10 text-black '>
        <h1 className='pt-32 sm:pl-32 text-2xl px-8  pb-6'>
          Electric Powertrain
        </h1>
        <p className='text-sm sm:pl-32 font-light px-8  text-left max-w-[800px]'>
          Model S platforms unite powertrain and battery technologies for
          unrivaled performance, range and efficiency. New module and pack
          thermal architecture allows faster charging and gives you more power
          and endurance in all conditions.
        </p>
        <div className='py-16 ss:px-4 sm:px-8 md:px-16'>
          <Image src={train} alt='/' className='md:rounded-2xl' />
        </div>
        <div className='flex flex-col sm:flex-row justify-evenly w-full mx-auto gap-8'>
          <div className='px-10 border-t-2 border-black mx-8 '>
            <h4 className='text-lg pt-3'>Model S</h4>
            <p className='text-sm font-light py-4'>
              Dual motor All-Wheel Drive unlocks more range than any other
              vehicle in our current luneup, with insane power and maximum
              control
            </p>
            <div className='py-3'>
              <p className='text-lg'>3.1s</p>
              <p className='text-xs text-gray-500'>0-60 mph*</p>
            </div>
            <div className='py-3'>
              <p className='text-lg'>450 mi</p>
              <p className='text-xs text-gray-500'>Range (EPA est.)</p>
            </div>
            <div className='py-3'>
              <p className='text-lg'>670 hp</p>
              <p className='text-xs text-gray-500'>Peak Power</p>
            </div>
          </div>
          <div className='px-10 border-t-2 border-black mx-8'>
            <h4 className='text-lg pt-3'>Model S Plaid</h4>
            <p className='text-sm font-light py-4'>
              Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor
              All-Wheel Drive, featuring torque vectoring and three independent
              carbon-sleeved rotors
            </p>
            <div className='py-3'>
              <p className='text-lg'>1.99s</p>
              <p className='text-xs text-gray-500'>0-60 mph*</p>
            </div>
            <div className='py-3'>
              <p className='text-lg'>396 mi</p>
              <p className='text-xs text-gray-500'>Range (EPA est.)</p>
            </div>
            <div className='py-3'>
              <p className='text-lg'>1020 hp</p>
              <p className='text-xs text-gray-500'>Peak Power</p>
            </div>
          </div>
        </div>
        <p className='text-sm text-center text-gray-500 py-8'>
          *With rollout subtracted
        </p>
      </section>
      <section
        style={{
          backgroundImage: `url(${exterior.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full '
      ></section>
      <Footer/>
    </div>
  );
};

export default Model_S;
