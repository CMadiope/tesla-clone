import React from "react";
import main from "../../public/model-X/Model-X-Main-Hero.jpeg";
import interior from "../../public/model-X/Model-X-Interior.jpeg";
import grid1 from "../../public/model-X/MX-Interior-Grid-B.jpeg";
import grid2 from "../../public/model-X/MX-Interior-Grid-C.jpeg";
import Image from "next/image";
import performance from "../../public/model-X/Model-X-Performance-Hero.jpeg";
import train from "../../public/model-S/Powertrain.jpeg";
import blue from "../../public/model-X/Model-X-Utility.jpeg";
import {SiTesla} from 'react-icons/si'
import skeleton from '../../public/model-3/model-3-body.jpeg'
import { BsPlusCircle } from "react-icons/bs";
import specs from "../../public/model-3/Model-3-Specs.jpeg";
import Footer from "@/components/Footer";


const Model_x = () => {
  return (
    <div className='w-full'>
      <section
        style={{
          backgroundImage: `url(${main.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col justify-between items-center'
      >
        <div className='pt-[35%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Model X</h1>
          <p className='text-center font-normal pt-2 '>Plaid</p>
        </div>
        <div className='flex flex-col gap-4 justify-end items-center text-white pb-10'>
          <div className='flex gap-6 w-full items-center justify-between'>
            <div className=''>
              <p className='text-lg text-center'>333 mi</p>
              <span className='text-xs font-light text-center'>
                Range (EPA set.)
              </span>
            </div>
            <div className=''>
              <p className='text-lg text-center'>2.5s</p>
              <span className='text-xs font-light text-center'>0-60 mph*</span>
            </div>
            <div className=''>
              <p className='text-lg text-center'>9.9s</p>
              <span className='text-xs font-light text-center'>1/4 mile</span>
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
          backgroundImage: `url(${interior.src})`,
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
          controls
          muted
          className='ss:p-20 py-20 rounded-lg'
        >
          <source
            src='/model-X/Model-X-Interior-Carousel.mp4'
            type='video/mp4'
          />
        </video>
        <div className='px-6 '>
          <h6 className='pb-6 text-center'>Yoke Steering</h6>
          <p className='text-sm text-center pb-4'>
            A bold new approach to steering offers better feel and an
            unobstructed view of the road ahead. Tap the brake and Model X
            automatically selects the correct direction to start your trip.
          </p>
        </div>
      </div>
      <div className='grid ss:grid-cols-2 bg-black w-full p-12 md:p-20 gap-6 mx-auto text-white'>
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
          <Image src={grid2} alt='/' />
        </div>
        <div className='px-6 pt-4 ss:pt-8 md:pt-16'>
          <h4 className='font-light md:text-lg'>Sublime Sound</h4>
          <p className='font-light text-sm md:text-base py-2'>
            A 22-speaker, 960-watt audio system with Active Road Noise Reduction
            offers the best listening experience wherever you are.
          </p>
        </div>
      </div>
      <section
        style={{
          backgroundImage: `url(${performance.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex justify-evenly mx-auto items-end absolute left-0 bottom-[40px] w-full px-16 text-white'>
          <div className='flex- flex-col '>
            <h3 className='text-xl pb-2'>1,020 hp</h3>
            <p className='font-light text-xs'>Peak Power</p>
          </div>
          <div className='flex- flex-col '>
            <h3 className='text-xl pb-2'>9.9s</h3>
            <p className='font-light text-xs'>1/4 mile</p>
          </div>
          <div className='flex- flex-col '>
            <h3 className='text-xl pb-2'>2.5s</h3>
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
            With the most power and quickest acceleration of any SUV, Model X
            Plaid is the highest performing SUV ever built. Updated battery
            architecture enables both Long Range and Plaid configurations to
            complete back-to-back track runs without performance degradation.
            Chat with a Tesla Advisor to learn more about Model X or schedule a
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
          Model X platforms unite powertrain and battery technologies for an
          unrivaled combination of performance, range and efficiency. New module
          and pack thermal architecture allows for faster charging and gives you
          more power and endurance in all conditions.
        </p>
        <div className='py-16 ss:px-4 sm:px-8 md:px-16'>
          <Image src={train} alt='/' className='md:rounded-2xl' />
        </div>
        <div className='flex flex-col sm:flex-row justify-evenly w-full mx-auto gap-8'>
          <div className='px-10 border-t-2 border-black mx-8 '>
            <h4 className='text-lg pt-3'>Model X</h4>
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
            <h4 className='text-lg pt-3'>Model X Plaid</h4>
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
      <section className='grid lg:grid-cols-3'>
        <div className='bg-white text-black w-full gri px-6 lg:py-16 py-8 gap-6'>
          <div className='lg:pl-28 lg:py-12'>
            <h3 className='font-light text-lg'>Utility</h3>
            <h1 className='text-2xl font-semibold pb-6'>even More Capable</h1>
          </div>
          <div className='lg:col-span-2 lg:py-12 lg:pl-5 lg:pr-12'>
            <p className='text-sm text-gray-500 font-light'>
              With ample storage and 5,000 lbs of towing capacity, Model X is
              built for maximum utility. Front doors open and close
              automatically, Falcon Wing rear doors allow for easier loading and
              a trailer hitch comes standard, so you can bring your gear with
              you wherever you go.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${blue.src})`,
            height: "100%",
            width: "100%",
          }}
          className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative text-white lg:col-span-2'
        >
          <div className='flex justify-evenly mx-auto items-end absolute left-0 bottom-[40px] w-full px-16'>
            <div className='flex- flex-col '>
              <h3 className='text-xl pb-2'>
                92 ft<sup>3</sup>
              </h3>
              <p className='font-light text-xs'>
                Up to 92 ft<sup>3</sup>
              </p>
              <p className='font-light text-xs'>of Storage</p>
            </div>
            <div className='flex- flex-col '>
              <h3 className='text-xl pb-2'>5,000lbs</h3>
              <p className='font-light text-xs'>Tow up to</p>
              <p className='font-light text-xs'>5,000 lbs</p>
            </div>
            <div className='flex- flex-col '>
              <h3 className='text-xl pb-2'>
                <SiTesla />
              </h3>
              <p className='font-light text-xs'>Falcon Wing Doors</p>
            </div>
          </div>
        </div>
      </section>
      <section id='safety' className='w-full grid lg:grid-cols-3 text-black'>
        <div className='lg:col-span-2'>
          <Image src={skeleton} alt='/' />
        </div>
        <div className='px-8 py-8 lg:py-12'>
          <h3 className='font-light'>Safety</h3>
          <h1 className='font-semibold text-xl'>Built For Safety</h1>
          <p className='text-sm text-gray-500 font-light py-4'>
            Safety is the most important part of every Tesla. We design our
            vehicles to exceed safety standards.
          </p>
          <p>5-Star Rating</p>
          <p className='text-sm text-gray-500 font-light pb-4'>
            Model 3 achieved NHTSA 5-star safety ratings in every category and
            subcategory.
          </p>
          <p>Top Safety Pick</p>
          <p className='text-sm text-gray-500 font-light pb-4'>
            Model 3 received the IIHS Top Safety Pick+ award, with top ratings
            in all crashworthiness and front crash prevention categories.
          </p>
          <div className='flex w-full justify-between'>
            <button className='flex items-center gap-2 text-sm'>
              <BsPlusCircle size={30} /> Learn More
            </button>
            <button className='border-2 w-full mx-6 text-sm border-black py-[2px] hover:bg-black hover:text-white duration-300 rounded-md'>
              Order Now
            </button>
          </div>
        </div>
      </section>
      <section
        id='specs'
        style={{
          backgroundImage: `url(${specs.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col text-white'
      >
        <h1 className='font-semibold text-2xl text-center py-8'>
          Model 3 <span className='font-light'>Specs</span>
        </h1>
        <h6 className='text-center py-5'>Performance</h6>
        <div className='grid grid-cols-2 mx-auto gap-6 px-8 pt-12'>
          <div>
            <p>Battery</p>
            <p className='text-sm font-light'>Long Range</p>
          </div>
          <div>
            <p>Weight</p>
            <p className='text-sm font-light'>4,048 lbs</p>
          </div>
          <div>
            <p>*Acceleration</p>
            <p className='text-sm font-light'>3.1s 0-60 mph</p>
            <p className='text-sm font-light'>with rollout subtracted</p>
          </div>
          <div>
            <p>Cargo</p>
            <p className='text-sm font-light'>23 cu ft</p>
          </div>
          <div>
            <p>Range</p>
            <p className='text-sm font-light'>315 miles (EPA est.)</p>
          </div>
          <div>
            <p>Display</p>
            <p className='text-sm font-light'>15" Center screen</p>
          </div>
          <div>
            <p>Drive</p>
            <p className='text-sm font-light'>Dual All-Wheel Drive</p>
          </div>
          <div>
            <p>Supercharging Max/Payment Type</p>
            <p className='text-sm font-light'>250 kW MAx, PAy Per Use</p>
          </div>
          <div>
            <p>Seating</p>
            <p className='text-sm font-light'>5 Adults</p>
          </div>
          <div>
            <p>Onboard Charger Max</p>
            <p className='text-sm font-light'>11.5 kW max (48A)</p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Model_x;
