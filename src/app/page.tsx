'use client'
import Button from "../components/welcomePage/button/button";
import Guide from "../components/welcomePage/Guide/Guide";
import Link from "next/link";
import Head from "../components/welcomePage/head/Head";
import LoginBtn from "../components/welcomePage/login/button"
export default function Page() {

  return (

    <main className="flex flex-col justify-center items-center p-20">



      <div className="mt-8">
        <Head />
      </div>
      <br /><br />
      <div className="mt-4">
        <Button />
      </div>
      <br /><br /><br /><br />
      <div className="">
        <Guide />
      </div>


    </main>


  );
}
