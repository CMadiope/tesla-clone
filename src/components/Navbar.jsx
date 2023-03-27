import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/Logo2.png";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/router";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='min-w-full overflow-x-hidden'>
      <div
        className={`${
          (router.pathname === "/model_s") |
          "/model_3" |
          "model_x" |
          "model_y" |
          "solar_roof" |
          "solar_panels" |
          "/powerwall"
            ? "w-full absolute "
            : "fixed z-20 w-full"
        }`}
      >
        <div
          className={`${
            router.pathname === "/model_s" ||
            "/model_3" ||
            "model_x" ||
            "model_y" ||
            "solar_roof" ||
            "solar_panels" ||
            "/powerwall"
              ? "hidden "
              : "text-center py-3 bg-white text-gray-500 text-[14px] px-6 w-screen "
          }`}
        >
          New Model 3 and Model Y vehicles qualify for a federal tax credit for
          eligible buyers.{" "}
          <Link href='/' className='underline'>
            Learn More
          </Link>
        </div>
        <div className=' flex justify-between py-4  px-4 items-center z-10 lg:px-12 '>
          <Link href='/'>
            <Image src={logo} alt='logo' className='w-[120px]' />
          </Link>
          <div
            className={`${
              router.pathname === "/model_3" |
              "/model_y" |
              "/solar_roof" | "/powerwall"? "hidden lg:flex text-white"
                : "hidden lg:flex text-black"
            }`}
          >
            <ul className='flex gap-6 items-center font-medium'>
              <li>
                <Link href='/model_s'>Model S</Link>
              </li>
              <li>
                <Link href='/model_3'>Model 3</Link>
              </li>
              <li>
                <Link href='/model_x'>Model X</Link>
              </li>
              <li>
                <Link href='/model_y'>Model Y</Link>
              </li>
              <li>
                <Link href='/solar_roof'>Solar Roof</Link>
              </li>
              <li>
                <Link href='/solar_panels'>Solar Panels</Link>
              </li>
              <li>
                <Link href='/powerwall'>Powerwall</Link>
              </li>
            </ul>
          </div>
          <div className='flex  gap-6  items-center font-normal text-sm'>
            <div
              className={`${
                (router.pathname === "/model_3") |
                "/model_y" |
                "/solar_roof" |
                "/powerwall"
                  ? "text-white hidden lg:flex gap-6"
                  : "hidden lg:flex gap-6"
              }`}
            >
              <Link
                href='/shop'
                className='hover:bg-gray-400/80 py-1 px-2 rounded-lg duration-700'
              >
                Shop
              </Link>
              <Link
                href='/account'
                className='hover:bg-gray-400/80 py-1 px-2 rounded-lg duration-700'
              >
                Account
              </Link>
            </div>

            <button
              className={`${
                (router.pathname === "/model_3") |
                "/model_y" |
                "/solar_roof" |
                "/powerwall"
                  ? "text-white py-1 px-2 rounded-lg  max-lg:bg-gray-400/80  flex duration-700"
                  : "py-1 px-2 rounded-lg  max-lg:bg-slate-300 flex hover:bg-gray-400/80 duration-700"
              }`}
              onClick={handleMenu}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
      {/* side nav */}
      <div
        className={`fixed h-screen top-0 right-0 z-20  bg-white w-[320px] ease-in-out duration-300 overflow-y-scroll ${
          menu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className='flex justify-end pr-10 pt-6 cursor-pointer'
          onClick={handleMenu}
        >
          <RxCross1 />
        </div>
        <ul className='flex flex-col gap-3 items-start p-10'>
          <li>
            <Link href='/model_s'>Model S</Link>
          </li>
          <li>
            <Link href='/model_3'>Model 3</Link>
          </li>
          <li>
            <Link href='/model_x'>Model X</Link>
          </li>
          <li>
            <Link href='/model_y'>Model Y</Link>
          </li>
          <li>
            <Link href='/solar_roof'>Solar Roof</Link>
          </li>
          <li>
            <Link href='/solar_panels'>Solar Panels</Link>
          </li>
          <li>
            <Link href='/powerwall'>Powerwall</Link>
          </li>
          <li>
            <Link href='#'>Existing Inventory</Link>
          </li>
          <li>
            <Link href='#'>Used Inventory</Link>
          </li>
          <li>
            <Link href='#'>Trade-In</Link>
          </li>
          <li>
            <Link href='#'>Demo Drive</Link>
          </li>
          <li>
            <Link href='#'>Insurance</Link>
          </li>
          <li>
            <Link href='#'>Commercial Energy</Link>
          </li>
          <li>
            <Link href='#'>Utilities</Link>
          </li>
          <li>
            <Link href='#'>Charging</Link>
          </li>
          <li>
            <Link href='#'>Find Us</Link>
          </li>
          <li>
            <Link href='#'>Support</Link>
          </li>
          <li>
            <Link href='#'>Investor Relations</Link>
          </li>
          <li>
            <Link href='/shop'>Shop</Link>
          </li>
          <li>
            <Link href='#'>Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
