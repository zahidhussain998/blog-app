
"use client"
import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import "../../styles/globals.css";

type Inputs = {
  name: string;
  email: string;
  message: string;
  subject: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:zohaibhyd321@gmail.com?subject={formdata.subject}&body=Hi, my name is ${formdata.message} 
     ${formdata.name} ${formdata.email} (${formdata.subject});
    }`;
  };

  return (
    <div className="bg-slate-50 flex flex-col justify-center items-center md:flex-row md:space-x-5 md:text-left">
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Contact {""}
          <span className="decoration-[#F7AB0A]/50 underline">Us</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+923403107703</p>
          </div>
          <div className="flex items-center justify-center space-x-5">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse " />
            <p className="text-2xl text-center">Pakistan</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">zohaibhyd321@gmail.com</p>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
            <input  {...register('email')}  placeholder="Email" className="contactInput" type="email" />
          </div>
          <input  {...register('subject')}  placeholder="Subject" className="contactInput" type="text" />

          <textarea  {...register('message')}  placeholder="Message" className="contactInput" />

          <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-ls" >
            Submits
          </button>

        </form>
      </div>
    </div>
  );
};

export default ContactMe;