'use client'
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { HiOutlinePaperAirplane } from "react-icons/hi2";

type Inputs = {
    email: string,
};

export default function NewsLetter() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        mode: "onChange",

    });
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-10">
            <div className="font-bold text-white text-center">Subscribe to our newsletter</div>

            <div className="relative mt-2 flex items-center justify-center">

                <input  {...register("email", {
                    required: "Please enter a valid email!",
                    pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
                        message: "Please enter a valid email!"
                    }
                })}
                    className={`outline-none rounded-2xl backdrop-blur-md border-2 bg-white/10 mt-2 p-4 w-96 `}
                    placeholder="Enter your email"
                    style={{ borderColor: errors.email ? "red" : "green" }}


                >

                </input>
                <div className="absolute ml-80 mt-2">
                    <HiOutlinePaperAirplane className="size-7 text-red-500" style={{ color: errors.email ? "red" : "gray" }} />
                </div>
                

            </div>


            <div className="font-bold text-red-500 text-center mt-3" >{errors.email && errors.email.message}</div>


        </form>
    )
}