// import Image from "next/image";
import Header from "./_components/header/Header";
import Hero from "./_components/hero/Hero";
import Desc from "./_components/side/Desc";
import Qr from "./_components/side/Qr";

export default function Home() {
  return (
    <div className=" flex flex-col gap-6">
    <Header />
    <div className="mx-auto items-center gap-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap gap-3">
        <div className="flex gap-3 flex-col">
            <Desc />
            <Qr />
        </div>
        <Hero />
      </div>
    </div>
    </div>
  );
}
