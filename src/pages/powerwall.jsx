import React from "react";
import Image from "next/image";
import hero from "../../public/powerwall/PW-Inverter.jpeg";
import { ImPower } from "react-icons/im";
import { MdHouse, MdOutlineSolarPower } from "react-icons/md";
import security from "../../public/powerwall/Powerwall-Security.webp";
import { TbRecharging } from "react-icons/tb";
import app from "../../public/solar-roof/SR-tesla-app.jpeg";
import design from "../../public/powerwall/Design.jpeg";
import specs from "../../public/powerwall/specs.jpeg";

const powerwall = () => {
  return (
    <div className='text-white'>
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
              <MdHouse size={25} />
              <span className='text-xs font-light text-center'>
                Backup Energy
              </span>
              <span className='text-xs font-light text-center'>Storage</span>
            </div>
            <div className='flex flex-col'>
              <p className='text-lg text-center'>24/7</p>
              <span className='text-xs font-light text-center'>Outage</span>
              <span className='text-xs font-light text-center'>Protection</span>
            </div>
            <div className='flex flex-col items-center gap-px'>
              <MdHouse size={25} />
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
      <section
        style={{
          backgroundImage: `url(${security.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex justify-evenly w-full mx-auto items-end absolute px-16 bottom-[40px]'>
          <div className='flex flex-col items-center gap-px'>
            <ImPower size={25} />
            <span className='text-xs font-light text-center'>Use Energy</span>
            <span className='text-xs font-light text-center'>
              During Outages
            </span>
          </div>
          <div className='flex flex-col items-center gap-px'>
            <TbRecharging size={25} />
            <span className='text-xs font-light text-center'>Recharge</span>
            <span className='text-xs font-light text-center'>With Solar</span>
          </div>
          <div className='flex flex-col items-center gap-px'>
            <MdOutlineSolarPower size={25} />
            <span className='text-xs font-light text-center'>
              Keeping Appliances
            </span>
            <span className='text-xs font-light text-center'>Running</span>
          </div>
        </div>
      </section>
      <div className='grid sm:grid-cols-2 p-6  md:py-12 md:px-32'>
        <div className=' '>
          <h4 className='text-gray-400 font-light text-lg'>Security</h4>
          <h1 className='text-2xl text-black font-semibold'>
            Backup Protection
          </h1>
        </div>
        <div>
          <p className='text-gray-400 text-sm text-justify py-3'>
            Powerwall is an integrated battery system that stores your solar
            energy for backup protection, so when the grid goes down your power
            stays on. Your system detects outages and automatically recharges
            with sunlight to keep your appliances running for days.
          </p>
        </div>
        <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm lg:flex-row lg:justify-start lg:pt-4'>
          <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
            Order Now
          </button>
        </div>
      </div>
      <section className='bg-black text-white'>
        <div className='grid sm:grid-cols-2 p-6  md:py-12 md:px-32'>
          <div className=' '>
            <h4 className='text-gray-400 font-light text-lg'>Security</h4>
            <h1 className='text-2xl font-semibold'>Backup Protection</h1>
          </div>
          <div>
            <p className='text-gray-400 text-sm text-justify py-3'>
              Powerwall is an integrated battery system that stores your solar
              energy for backup protection, so when the grid goes down your
              power stays on. Your system detects outages and automatically
              recharges with sunlight to keep your appliances running for days.
            </p>
          </div>
        </div>
        <div className='py-12'>
          <video
            width='100%'
            height='100%'
            playsInline
            loop
            controls
            muted
            className=' bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full sm:px-8 md:rounded-xl '
          >
            <source src='/powerwall/PowerFlow.mp4' type='video/mp4' />
          </video>
        </div>
      </section>
      <div>
        <Image src={app} alt='/' />
      </div>
      <div className='grid sm:grid-cols-2 p-6  md:py-12 md:px-32'>
        <div className=' '>
          <h4 className='text-gray-400 font-light text-lg'>Control</h4>
          <h1 className='text-2xl text-black font-semibold'>
            Monitor and Optimize
          </h1>
        </div>
        <div>
          <p className='text-gray-400 text-sm text-justify py-3'>
            With the Tesla app, you can monitor your solar energy in real time.
            Set your preferences to optimize for energy independence, outage
            protection or savings. Control your system from anywhere with remote
            access and instant alerts.
          </p>
        </div>
        <div className='flex flex-col  mx-auto gap-2 justify-center ss:items-center w-full text-sm lg:flex-row lg:justify-start lg:pt-4'>
          <button className='ss:w-60 py-2 px-6 bg-transparent text-black rounded-md hover:bg-black hover:text-white duration-500 w-full border-2 border-black'>
            Order Now
          </button>
        </div>
      </div>
      <section className='flex flex-col-reverse md:grid md:grid-cols-3'>
        <div className='grid sm:grid-cols-2 p-6 md:grid-cols-1 md:px-10'>
          <div className=' '>
            <h4 className='text-gray-400 font-light text-lg'>Design</h4>
            <h1 className='text-2xl font-semibold text-black'>Modern Design</h1>
          </div>
          <div>
            <p className='text-gray-400 text-sm text-justify py-3'>
              With easy installation and a minimalist design, Powerwall
              complements a variety of home styles and solar systems. The
              compact, all-in-one construction features versatile mounting
              options for indoor or outdoor spaces. Chat with an energy advisor
              to ask any questions about Tesla Powerwall.
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
      <section className='bg-black flex flex-col justify-evenly mx-auto ss:flex-row p-10 items-center'>
        <div className='md:w-1/2'>
          <Image src={specs} alt='/' />
        </div>
        <div className='text-white '>
          <h1 className='font-semibold text-2xl text-left '>
            Powerwall <span className='font-light'>Specs</span>
          </h1>

          <div className='grid grid-cols-2  gap-6  pt-12 text-left'>
            <div className=''>
              <p>Energy Capacity</p>
              <p className='text-sm font-light'>13.5 kWh*</p>
            </div>
            <div>
              <p>On-Grid Power</p>
              <p className='text-sm font-light'>7.6kVA / 5.8kVA</p>
            </div>
            <div>
              <p>Backup Power</p>
              <p className='text-sm font-light'>9.6kW / 7kW continuous†</p>
              <p className='text-sm font-light'>22kW / 10kW peak†</p>
            </div>
            <div>
              <p>Size and Weight</p>
              <p className='text-sm font-light'>L x W x D</p>
            </div>
            <div>
              <p>Inverter</p>
              <p className='text-sm font-light'>Efficiency 97.5%</p>
            </div>
            <div>
              <p>Installation</p>
              <p className='text-sm font-light'>
                Integrated inverter and system
              </p>
            </div>
            <div>
              <p>Certifications</p>
              <p className='text-sm font-light'>Meets North American safety</p>
            </div>
            <div>
              <p>Warranty</p>
              <p className='text-sm font-light'>10 years</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default powerwall;
