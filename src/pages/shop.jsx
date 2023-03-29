import React, { useState } from "react";
import Image from "next/image";
import Carousel from "@/components/Carousel";
import ImageSlider from "@/components/ImageSlider";
import ms from "../../public/shop/MS_Hero.avif";
import m3 from "../../public/shop/M3_web.avif";
import mx from "../../public/shop/MX_web.avif";
import my from "../../public/shop/MY_web.avif";
import charging from "../../public/shop/Charging_web.avif";
import men from "../../public/shop/Men_web.avif";
import women from "../../public/shop/Women_web.avif";
import kids from "../../public/shop/Kids_web.avif";
import life from '../../public/shop/Lifestyle.avif'
import Footer from "@/components/Footer";

const shop = () => {
  return (
    <div className='w-full'>
      <Carousel />
      <section className='py-10'>
        <h1 className='text-xl font-bold pl-10 pb-8'>Best Sellers</h1>
        <ImageSlider />
      </section>
      <section
        style={{
          backgroundImage: `url(${ms.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl'>Mode S Accessories</h1>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${m3.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl'>Mode 3 Accessories</h1>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${mx.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl'>Mode X Accessories</h1>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${my.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl'>Mode Y Accessories</h1>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${charging.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl text-white'>Charging</h1>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <section className='grid sm:grid-cols-3 gap-6'>
        <div
          style={{
            backgroundImage: `url(${men.src})`,
            height: "100%",
            width: "100%",
          }}
          className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative '
        >
          <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
            <div className='text-center py-6'>
              <h1 className='text-2xl md:text3xl '>Men's Apparel</h1>
            </div>

            <div className='flex flex-row  gap-2 justify-center  w-full text-sm '>
              <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500  border-black'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${women.src})`,
            height: "100%",
            width: "100%",
          }}
          className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
        >
          <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
            <div className='text-center py-6'>
              <h1 className='text-2xl md:text3xl '>Women's Apparel</h1>
            </div>

            <div className='flex flex-row  gap-2 justify-center  w-full text-sm '>
              <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500  border-black'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${kids.src})`,
            height: "100%",
            width: "100%",
          }}
          className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
        >
          <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
            <div className='text-center py-6'>
              <h1 className='text-2xl md:text3xl '>Kids' Apparel</h1>
            </div>

            <div className='flex flex-row  gap-2 justify-center  w-full text-sm '>
              <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500  border-black'>
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundImage: `url(${life.src})`,
          height: "100%",
          width: "100%",
        }}
        className='min-h-screen bg-center bg-cover bg-no-repeat duration-200 ease-in-out w-full relative'
      >
        <div className='flex flex-col gap-4 justify-evenly mx-auto items-center  pb-10 absolute bottom-[40px] w-full px-16'>
          <div className='text-center py-6'>
            <h1 className='text-2xl md:text3xl'>Lifestyle</h1>
          </div>

          <div className='flex flex-row  gap-2 justify-center  w-full text-sm ss:px-[20%] sm:px-[30%] md:px-[35%]'>
            <button className='py-2 px-6 border-2 w-full rounded-md text-black bg-white duration-500'>
              Shop Now
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default shop;
