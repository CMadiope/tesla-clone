import React from "react";
import hero from "../../public/solar-roof/Solar-Roof-Hero.webp";
import { MdSolarPower } from "react-icons/md";
import design from "../../public/solar-roof/Solar-Roof-Design.webp";
import Image from "next/image";
import energy from "../../public/solar-roof/Solar-Roof-Energy.webp";
import inverter from "../../public/solar-roof/Inverter_V8_D.jpeg";
import app from "../../public/solar-roof/SR-tesla-app.jpeg";
import panel from "../../public/solar-roof/PanelMeasure.png";
import Navbar from "@/components/Navbar";

const solar_roof = () => {
  return (
    <div className='w-full  '>
      <section
        style={{
          backgroundImage: `url(${hero.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col justify-between items-center'
      >
        <div className='pt-[35%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%] text-white'>
          <h1 className='text-center text-4xl'>Solar Roof</h1>
        </div>
        <div className='flex flex-col gap-4 justify-end items-center text-white pb-10'>
          <div className='flex gap-6 w-full items-center justify-between'>
            <div className='flex flex-col items-center gap-px'>
              <MdSolarPower size={25} />
              <span className='text-xs font-light text-center'>Beautiful</span>
              <span className='text-xs font-light text-center'>Solar</span>
            </div>
            <div className='flex flex-col'>
              <p className='text-lg text-center'>25-Year</p>
              <span className='text-xs font-light text-center'>Title</span>
              <span className='text-xs font-light text-center'>Warranty</span>
            </div>
            <div className=''>
              <p className='text-lg text-center'>27/7</p>
              <span className='text-xs font-light text-center'>Outage</span>
              <span className='text-xs font-light text-center'></span>
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
      <div>
        <Image src={design} alt='/' />
      </div>
      <div className='grid md:grid-cols-2 p-6 md:pl-40 md:pt-12'>
        <div className=' '>
          <h4 className='text-gray-400 font-light text-lg'>Design</h4>
          <h1 className='text-2xl font-semibold'>
            Complete Your Home's Aesthetic
          </h1>
        </div>
        <div>
          <p className='text-gray-400 text-sm text-justify py-3'>
            Install Solar Roof and power your home with a fully integrated solar
            and energy storage system. The glass solar tiles and steel roofing
            tiles look great up close and from the street, complementing your
            home’s natural styling.
          </p>
        </div>
        <div className=''>
          <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
            Order Now
          </button>
        </div>
      </div>
      <section className='flex flex-col-reverse md:grid  md:grid-cols-3 items-start '>
        <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
          <div className=' '>
            <h4 className='text-gray-400 font-light text-lg'>Energy Storage</h4>
            <h1 className='text-2xl font-semibold'>
              Protection Against Outages
            </h1>
          </div>
          <div>
            <p className='text-gray-400 text-sm text-justify py-3'>
              Powerwall is a compact home battery that is bundled with Solar
              Roof, providing you with 24/7 energy security. It stores the
              energy you produce with Solar Roof so you can power your home
              anytime—at night or during an outage.
            </p>
          </div>
          <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm md:pt-40'>
            <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
              Order Now
            </button>
            <button className='ss:w-60 py-2 px-6 bg-black/50 text-white/90 rounded-md hover:bg-black/30 duration-500'>
              Learn More
            </button>
          </div>
        </div>
        <div className='md:col-span-2'>
          <Image src={energy} alt='/' />
        </div>
      </section>
      <section className='grid md:grid  md:grid-cols-3'>
        <div className='md:col-span-2'>
          <video
            width='100%'
            height='100%'
            playsInline
            loop
            controls
            muted
            className=' bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full  '
          >
            <source src='/solar-roof/SR-Durability.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
          <div className=' '>
            <h4 className='text-gray-400 font-light text-lg'>Durability</h4>
            <h1 className='text-2xl font-semibold'>Take on the Elements</h1>
          </div>
          <div>
            <p className='text-gray-400 text-sm text-justify py-3'>
              Solar Roof is comprised of both glass solar tiles and steel
              roofing tiles. Glass solar tiles produce energy, while
              architectural-grade steel tiles add longevity and corrosion
              resistance to your roof. Both are durable, strong and engineered
              for all-weather protection. With a 25-year warranty, Solar Roof
              will continue to produce clean energy and protect your home for
              decades to come.
            </p>
          </div>
          <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm md:pt-40'>
            <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
              Order Now
            </button>
          </div>
        </div>
      </section>
      <div className='grid sm:grid-cols-2 p-6 md:px-10 '>
        <div className=' '>
          <h4 className='text-gray-400 font-light text-lg'>Durability</h4>
          <h1 className='text-2xl font-semibold'>Take on the Elements</h1>
        </div>
        <div>
          <p className='text-gray-400 text-sm text-justify py-3'>
            Solar Roof is comprised of both glass solar tiles and steel roofing
            tiles. Glass solar tiles produce energy, while architectural-grade
            steel tiles add longevity and corrosion resistance to your roof.
            Both are durable, strong and engineered for all-weather protection.
            With a 25-year warranty, Solar Roof will continue to produce clean
            energy and protect your home for decades to come.
          </p>
        </div>
        <div className='flex  mx-auto gap-2 justify-center ss:items-center w-full text-sm sm:justify-start '>
          <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
            Order Now
          </button>
        </div>
      </div>
      <div className='md:col-span-2 sm:p-8 md:p-16 '>
        <video
          width='100%'
          height='100%'
          playsInline
          loop
          controls
          muted
          className=' bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full md:rounded-3xl '
        >
          <source src='/solar-roof/Carousel_Design.mp4' type='video/mp4' />
        </video>
      </div>
      <section className='flex flex-col-reverse md:grid  md:grid-cols-3 '>
        <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
          <div className=' '>
            <h4 className='text-gray-400 font-light text-lg'>Efficiency</h4>
            <h1 className='text-2xl font-semibold'>Maximum Solar Production</h1>
          </div>
          <div>
            <p className='text-gray-400 text-sm text-justify py-3'>
              Generate the most energy possible, even on roofs with complicated
              angles and intermittent sunlight. Glass solar tiles and
              architectural-grade steel tiles, vent covers and ridge caps come
              together to form a roof that is both durable and powerful. With
              Tesla Solar Inverter, your fully integrated system is safe,
              reliable and outage ready. And built-in connectivity ensures Tesla
              Solar Inverter continues to improve with each over-the-air
              software update.
            </p>
          </div>
          <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm md:pt-40'>
            <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
              Order Now
            </button>
          </div>
        </div>
        <div className='md:col-span-2'>
          <Image src={inverter} alt='/' />
        </div>
      </section>
      <div>
        <Image src={app} alt='/' />
      </div>
      <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
        <div className=' '>
          <h4 className='text-gray-400 font-light text-lg'>Control</h4>
          <h1 className='text-2xl font-semibold'>Monitor and Optimize</h1>
        </div>
        <div>
          <p className='text-gray-400 text-sm text-justify py-3'>
            With the Tesla app, you can monitor your energy production in real
            time. Control your system from anywhere with instant alerts and
            remote access.
          </p>
        </div>
        <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm md:pt-40'>
          <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
            Order Now
          </button>
        </div>
      </div>
      <section className='bg-black flex flex-col justify-evenly mx-auto ss:flex-row p-10 items-center'>
        <div className='md:w-1/2'>
          <Image src={panel} alt='/' />
        </div>
        <div className='text-white '>
          <h1 className='font-semibold text-2xl text-left '>
            Solar Roof <span className='font-light'>Specs</span>
          </h1>

          <div className='grid grid-cols-2  gap-6  pt-12 text-left'>
            <div className=''>
              <p>Tile and Power Warranty</p>
              <p className='text-sm font-light'>25 years</p>
            </div>
            <div>
              <p>Solar Glass Tiles</p>
              <p className='text-sm font-light'>75 W</p>
            </div>
            <div>
              <p>Steel Tiles</p>
              <p className='text-sm font-light'>Corrosion and weather</p>
              <p className='text-sm font-light'>resistant</p>
            </div>
            <div>
              <p>Wind Rating</p>
              <p className='text-sm font-light'>Class F (highest rating)</p>
            </div>
            <div>
              <p>Fire Rating</p>
              <p className='text-sm font-light'>Class A (highest rating)</p>
            </div>
            <div>
              <p>Hail Rating</p>
              <p className='text-sm font-light'>Class 3</p>
            </div>
            <div>
              <p>Roof Pitch</p>
              <p className='text-sm font-light'>≥ 2:12</p>
            </div>
            <div>
              <p>Supercharging Max/Payment Type</p>
              <p className='text-sm font-light'>250 kW MAx, PAy Per Use</p>
            </div>
          </div>
        </div>
      </section>
      <Navbar />
    </div>
  );
};

export default solar_roof;
