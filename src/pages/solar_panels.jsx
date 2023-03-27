import React from "react";
import hero from "../../public/solar-panels/_25-Hero.jpeg";
import { MdSolarPower } from "react-icons/md";
import design from "../../public/solar-panels/Design.jpeg";
import Image from "next/image";
import inverterHero from "../../public/solar-panels/PW-Inverter-Hero.jpeg";
import efficiency from "../../public/solar-panels/efficiency.jpeg";
import app from "../../public/solar-roof/SR-tesla-app.jpeg";
import specs from '../../public/solar-panels/specs.jpeg'


const solar_panels = () => {
  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${hero.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col justify-between items-center'
      >
        <div className='pt-[35%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%] '>
          <h1 className='text-center text-3xl md:text-4xl'>
            Solar for Existing Roofs
          </h1>
        </div>
        <div className='flex flex-col gap-4 justify-end items-center text-white pb-10'>
          <div className='flex gap-6 w-full items-center justify-between'>
            <div className='flex flex-col items-center gap-px'>
              <MdSolarPower size={25} />
              <span className='text-xs font-light text-center'>Beautiful</span>
              <span className='text-xs font-light text-center'>Solar</span>
            </div>
            <div className='flex flex-col'>
              <p className='text-lg text-center'>$</p>
              <span className='text-xs font-light text-center'>
                Guaranteed Lowest
              </span>
              <span className='text-xs font-light text-center'>
                Price for Solar
              </span>
            </div>
            <div className=''>
              <p className='text-lg text-center'>27/7</p>
              <span className='text-xs font-light text-center'>Energy</span>
              <span className='text-xs font-light text-center'>Monitoring</span>
            </div>
          </div>
          <div className='flex flex-row  gap-2 justify-center  w-full text-sm'>
            <button className='py-2 px-6 border-2 w-full rounded-md hover:text-black hover:bg-white duration-500'>
              Order Now
            </button>
          </div>
        </div>
      </section>
      <section className='flex flex-col-reverse md:grid md:grid-cols-3'>
        <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
          <div className=' '>
            <h4 className='text-gray-400 font-light text-lg'>Savings</h4>
            <h1 className='text-2xl font-semibold'>Electricity For Less</h1>
          </div>
          <div>
            <p className='text-gray-400 text-sm text-justify py-3'>
              Use solar energy to power your home and reduce your dependence on
              the grid. Purchase solar at the lowest price of any national
              provider with Tesla's price match guarantee and take control of
              your monthly electricity bill.
            </p>
          </div>
          <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm md:pt-40'>
            <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
              See Your Savings
            </button>
          </div>
        </div>
        <div className='md:col-span-2  '>
          <video
            width='100%'
            height='100%'
            playsInline
            loop
            controls
            muted
            className=' bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full  '
          >
            <source src='/solar-panels/Savings.mp4' type='video/mp4' />
          </video>
        </div>
      </section>
      <section className='flex flex-col-reverse md:grid md:grid-cols-3'>
        <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
          <div className=' '>
            <h4 className='text-gray-400 font-light text-lg'>Design</h4>
            <h1 className='text-2xl font-semibold'>Sleek and Durable</h1>
          </div>
          <div>
            <p className='text-gray-400 text-sm text-justify py-3'>
              Our solar panels are low-profile and durable — quietly converting
              sunlight to energy for decades to come. Integrated hardware and
              simple design achieve this by securing the panels close to your
              roof and to each other for a minimalist aesthetic.
            </p>
          </div>
          <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm md:pt-40'>
            <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
              Order Now
            </button>
          </div>
        </div>
        <div className='md:col-span-2  '>
          <Image src={design} alt='/' />
        </div>
      </section>
      <div className='pt-3'>
        <Image src={inverterHero} alt='/' />
      </div>
      <div className='grid sm:grid-cols-2 p-6  md:py-12 md:px-32'>
        <div className=' '>
          <h4 className='text-gray-400 font-light text-lg'>Powerwall</h4>
          <h1 className='text-2xl font-semibold'>Home Battery Backup</h1>
        </div>
        <div>
          <p className='text-gray-400 text-sm text-justify py-3'>
            Your Powerwall can be bundled with solar, allowing you to generate
            clean energy and store it for use anytime—at night or during an
            outage.
          </p>
        </div>
        <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm lg:flex-row lg:justify-start lg:pt-4'>
          <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
            Order Now
          </button>
          <button className='ss:w-60 py-2 px-6 bg-black/50 text-white/90 rounded-md hover:bg-black/30 duration-500'>
            Learn More
          </button>
        </div>
      </div>
      <div className='  '>
        <video
          width='100%'
          height='100%'
          playsInline
          loop
          controls
          muted
          className=' bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full  '
        >
          <source src='/solar-panels/solar-assessment.mp4' type='video/mp4' />
        </video>
      </div>
      <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
        <div className=' '>
          <h4 className='text-gray-400 font-light text-lg'>Power On</h4>
          <h1 className='text-2xl font-semibold'>Order and Installation</h1>
        </div>
        <div>
          <p className='text-gray-400 text-sm text-justify py-3'>
            From permitting to powering on, we’ll take care of everything. After
            you order, we’ll gather remote aerial imagery of your home, design
            your system, take care of any necessary permits and schedule your
            installation. Chat with a Tesla Advisor or request a call to learn
            more.
          </p>
        </div>
        <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm md:pt-40'>
          <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
            Order Now
          </button>
        </div>
      </div>
      <section className='flex flex-col-reverse md:grid md:grid-cols-3'>
        <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
          <div className=' '>
            <h4 className='text-gray-400 font-light text-lg'>Efficiency</h4>
            <h1 className='text-2xl font-semibold'>Maximum Solar Production</h1>
          </div>
          <div>
            <p className='text-gray-400 text-sm text-justify py-3'>
              Tesla solar panels are designed to be highly efficient, delivering
              maximum solar production year-round, even on roofs with
              complicated angles. Powered by Tesla Solar Inverter, your fully
              integrated system is safe and reliable.
            </p>
          </div>
          <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm md:pt-40'>
            <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
              Order Now
            </button>
          </div>
        </div>
        <div className='md:col-span-2'>
          <Image src={efficiency} alt='/' />
        </div>
      </section>
      <div>
        <Image src={app} alt='/' />
      </div>
      <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
        <div className=' '>
          <h4 className='text-gray-400 font-light text-lg'>Experience</h4>
          <h1 className='text-2xl font-semibold'>24/7 Monitoring</h1>
        </div>
        <div>
          <p className='text-gray-400 text-sm text-justify py-3'>
            Manage your solar system from anywhere in the world with 24/7 mobile
            monitoring. Watch your energy in real time or set your preferences
            to optimize for energy independence.
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
          <Image src={specs} alt='/' />
        </div>
        <div className='text-white '>
          <h1 className='font-semibold text-2xl text-left '>
            Solar Panel <span className='font-light'>Specs</span>
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
    </div>
  );
};

export default solar_panels;
