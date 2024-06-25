"use client";
import { useState } from "react";
import EyeIcon from "../icons/EyeIcon";
import ThunderIcon from "../icons/ThunderIcon";

function FormContact() {
  const [expectation, setExpectation] = useState("");

  return (
    <form className="grid gap-4 lg:w-[528px] lg:shadow-[0px_4px_32.5px_0px_#9F53FF40] lg:bg-white lg:px-20 lg:py-[50px]">
      <div className="grid gap-2">
        <label
          htmlFor="fullName"
          className="text-sm font-bold text-white lg:text-black"
        >
          Your full name
        </label>
        <div className="relative">
          <input
            type="text"
            id="fullName"
            name="fullName"
            className="px-3 py-2 rounded-xl text-[#94A3B7] border border-[#D2D2D2] text-sm w-full pr-10"
            placeholder="Enter your name"
          />
          <EyeIcon className="absolute top-1/2 -translate-y-1/2 right-4" />
        </div>
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="companyName"
          className="text-sm font-bold text-white lg:text-black"
        >
          Your company name
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          className="px-3 py-2 rounded-xl text-[#94A3B7] border border-[#D2D2D2] text-sm"
          placeholder="Enter company name"
        />
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="email"
          className="text-sm font-bold text-white lg:text-black"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="px-3 py-2 rounded-xl text-[#94A3B7] border border-[#D2D2D2] text-sm"
          placeholder="Enter your email"
        />
      </div>
      <div className="grid gap-2">
        <label
          htmlFor="expectation"
          className="text-sm font-bold text-white lg:text-black flex justify-between items-center"
        >
          Your expectation{" "}
          <span className="font-normal">{expectation.length}/1000</span>
        </label>
        <textarea
          id="expectation"
          name="expectation"
          className="px-3 py-2 rounded-xl text-[#94A3B7] border border-[#D2D2D2] text-sm min-h-[100px]"
          placeholder="Enter your expectation"
          onChange={(e) => setExpectation(e.target.value)}
        />
      </div>
      <div className="grid gap-2">
        <label className="text-sm font-bold text-white lg:text-black">
          Date & time
        </label>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="date"
            className="p-3 rounded-xl text-sm text-[#94A3B7] border border-[#D2D2D2]"
          />
          <input
            type="time"
            className="p-3 rounded-xl text-sm text-[#94A3B7] border border-[#D2D2D2]"
          />
        </div>
      </div>
      <div className="gap-3 flex items-center">
        <input type="checkbox" className="w-5 h-5" />
        <p className="text-sm font-normal text-white lg:text-[#27272A]">
          Yes, I accept to receive Newsletters from HeyDevs
        </p>
      </div>
      <button className="flex items-center gap-2 bg-white text-[#7000FF] justify-center rounded-lg py-2 lg:border-[3px] lg:border-[#7000FF] lg:rounded-xl lg:shadow-[-5px_5px_0px_0px_#7000FF]">
        <ThunderIcon /> Send an appointment
      </button>
    </form>
  );
}

export default function BookAppointment() {
  return (
    <div className="relative px-8 py-[55px] lg:px-14 min-[1440px]:px-[128px] min-[1920px]:px-[415px] bg-gradient-to-b from-[#B08FDE] to-[#7A17FA] lg:bg-none">
      <img
        src="/images/book-appointment.svg"
        alt=""
        className="absolute -top-[73px] right-0 lg:hidden"
      />
      <div className="w-full h-[500px] absolute bottom-0 left-0 lg:bg-linear">
        <div className="max-lg:hidden absolute -top-12 lg:right-[56px] xl:right-[20%] min-[1920px]:right-[324px]">
          <p className="text-[30px] min-[1440px]:text-[40px] min-[1440px]:leading-[52px] font-semibold text-[#1E293A]">
            An Expansive Talent Pool
          </p>
          <p className="text-[30px] min-[1440px]:text-[40px] min-[1440px]:leading-[52px] font-semibold text-white">
            For Every Type of Hire
          </p>
          <img
            src="/images/book-appointment.svg"
            alt=""
            className="absolute -top-4 -right-[100px] max-xl:hidden"
          />
        </div>
      </div>
      <div className="relative grid gap-4 lg:flex flex-col lg:pb-[93px]">
        <p className="text-white text-2xl font-bold lg:hidden">
          Book an appointment
        </p>
        <FormContact />
      </div>
    </div>
  );
}
