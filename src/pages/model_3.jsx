import React,{useState} from "react";
import model3 from "../../public/model-3/Model-3-Main-Hero.jpeg";
import skeleton from "../../public/model-3/model-3-body.jpeg";
import Image from "next/image";
import { BsPlusCircle, BsCloudSun } from "react-icons/bs";
import performance from "../../public/model-3/Model-3-Performance.jpeg";
import awd from "../../public/model-3/Model-3-AWD.jpeg";
import range from '../../public/model-3/Model-3-Range.jpeg'
import specs from '../../public/model-3/Model-3-Specs.jpeg'
import Footer from "@/components/Footer";

const Model_3 = () => {



  return (
    <div className='w-full text-white'>
      <section
        id='model3'
        style={{
          backgroundImage: `url(${model3.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full flex flex-col justify-between items-center'
      >
        <div className='pt-[35%] ss:pt-[20%] sm:pt-[15%] md:pt-[10%]'>
          <h1 className='text-center text-4xl'>Model 3</h1>
          <p className='text-center font-normal pt-2 underline'>
            Schedule a Demo Drive
          </p>
        </div>
        <div className='flex flex-col gap-4 justify-end items-center text-white pb-10'>
          <div className='flex gap-6 w-full items-center justify-between'>
            <div className=''>
              <p className='text-lg text-center'>3.1s</p>
              <span className='text-xs font-light text-center'>0-60 mph*</span>
            </div>
            <div className=''>
              <p className='text-lg text-center'>358mi</p>
              <span className='text-xs font-light text-center'>
                Range (EPA set.)
              </span>
            </div>
            <div className=''>
              <p className='text-lg text-center'>AWD</p>
              <span className='text-xs font-light text-center'>Dual Motor</span>
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
        id='performance'
        style={{
          backgroundImage: `url(${performance.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative text-white'
      >
        <div className='absolute left-0 bottom-0 w-full '>
          <div className='flex justify-evenly mx-auto items-end px-16 pb-5'>
            <div className='flex- flex-col '>
              <h3 className='text-xl pb-2'>3.1s</h3>
              <p className='font-light text-xs'>0-60 mph*</p>
            </div>
            <div className='flex- flex-col '>
              <h3 className='text-xl pb-2'>162 mph</h3>
              <p className='font-light text-xs'>Top Speed</p>
            </div>
            <div className='flex- flex-col '>
              <h3 className='text-xl pb-2'>AWD</h3>
              <p className='font-light text-xs'>Dual Motor</p>
            </div>
          </div>

          <div className='bg-white text-black w-full grid lg:grid-cols-3 px-6 py-8 gap-6'>
            <div className='lg:pl-28 lg:py-12'>
              <h3 className='font-light text-lg'>Performance</h3>
              <h1 className='text-2xl font-semibold pb-6'>
                Quickest Acceleration
              </h1>
              <div className='flex w-full justify-between'>
                <button className='flex items-center gap-2 text-sm'>
                  <BsPlusCircle size={30} /> Learn More
                </button>
                <button className='border-2 w-full mx-6 text-sm border-black py-[2px] hover:bg-black hover:text-white duration-300 rounded-md'>
                  Order Now
                </button>
              </div>
            </div>
            <div className='lg:col-span-2 lg:py-12 lg:pl-5 lg:pr-12'>
              <p className='text-sm text-gray-500 font-light'>
                Model 3 comes with the option of dual motor all-wheel drive, 20”
                Überturbine Wheels and Performance Brakes for total control in
                all weather conditions. A carbon fiber spoiler improves
                stability at high speeds, all allowing Model 3 to accelerate
                from 0-60 mph* in as little as 3.1 seconds. Chat with a Tesla
                Advisor to learn more about Model 3 or schedule a demo drive
                today.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id='AWD'
        style={{
          backgroundImage: `url(${awd.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative text-white'
      >
        <div className='absolute left-0 bottom-0 w-full'>
          <div className='flex justify-evenly mx-auto items-end  px-16 gap-2 pb-5'>
            <div className='flex- flex-col '>
              <h3 className='text-xl pb-2'>2</h3>
              <p className='font-light text-xs'>Independent Motors</p>
            </div>
            <div className='flex- flex-col g'>
              <h3 className='text-xl pb-2'>10ms</h3>
              <p className='font-light text-xs'>Torque Response</p>
            </div>
            <div className='flex- flex-col '>
              <h3 className='text-xl pb-2'>
                <BsCloudSun />
              </h3>
              <p className='font-light text-xs'>All-Weather Control</p>
            </div>
          </div>
          <div className='bg-white text-black w-full grid lg:grid-cols-3 px-6 py-8 gap-6'>
            <div className='lg:pl-28 lg:py-12'>
              <h3 className='font-light text-lg'>All-Wheel Drive</h3>
              <h1 className='text-2xl font-semibold pb-6'>Dual Motor</h1>
              <div className='flex w-full justify-between'>
                <button className='flex items-center gap-2 text-sm'>
                  <BsPlusCircle size={30} /> Learn More
                </button>
                <button className='border-2 w-full mx-6 text-sm border-black py-[2px] hover:bg-black hover:text-white duration-300 rounded-md'>
                  Order Now
                </button>
              </div>
            </div>
            <div className='lg:col-span-2 lg:py-12 lg:pl-5 lg:pr-12'>
              <p className='text-sm text-gray-500 font-light'>
                Tesla All-Wheel Drive has two independent motors for improved
                redundancy, each with only one moving part for minimal
                maintenance and maximum durability. Unlike traditional all-wheel
                drive systems, they digitally control torque to the front and
                rear wheels for far better handling and traction control.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id='range' className='grid lg:grid-cols-3'>
        <div
          style={{
            backgroundImage: `url(${range.src})`,
            height: "100%",
            width: "100%",
          }}
          className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative text-white lg:col-span-2'
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
        </div>
        <div className='bg-white text-black w-full gri px-6 lg:py-16 py-8 gap-6'>
          <div className='lg:pl-28 lg:py-12'>
            <h3 className='font-light text-lg'>Range</h3>
            <h1 className='text-2xl font-semibold pb-6'>Go Anywhere</h1>
            <div className='flex w-full justify-between'>
              <button className='flex items-center gap-2 text-sm'>
                <BsPlusCircle size={30} /> Learn More
              </button>
              <button className='border-2 w-full mx-6 text-sm border-black py-[2px] hover:bg-black hover:text-white duration-300 rounded-md'>
                Order Now
              </button>
            </div>
          </div>
          <div className='lg:col-span-2 lg:py-12 lg:pl-5 lg:pr-12'>
            <p className='text-sm text-gray-500 font-light'>
              Model 3 is fully electric, so you never need to visit a gas
              station again. If you charge overnight at home, you can wake up to
              a full battery every morning. And when you’re on the road, it’s
              easy to plug in along the way—at any public station or with the
              Tesla charging network. We currently have over 40,000
              Superchargers worldwide, with six new locations opening every
              week. Chat with a Tesla Advisor to learn more about Model 3 or
              schedule a demo drive today.
            </p>
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
        <h6 className="text-center py-5">Performance</h6>
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

export default Model_3;
