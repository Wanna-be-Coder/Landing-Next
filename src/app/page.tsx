import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Service from "@/components/Service";
import YoutubeSection from "@/components/YoutubeSection";
import FlagComponent from "@/components/common/FlagComponent";
import ItemCard from "@/components/common/ItemCard";
import { US } from "country-flag-icons/react/3x2";
import Image from "next/image";
<link
  rel='stylesheet'
  href='https://cdn.jsdelivr.net/gh/lipis/flag-icons@6.11.0/css/flag-icons.min.css'
/>;

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col'>
      <Navbar />
      <Service />
      <HeroSection />
      <YoutubeSection />
      <div className='flex p-4'>
        <div className='w-1/2 p-2'>
          <h2 className='text-lg'>Lorem ipsum is placeholder</h2>
          <p>
            mauris in aliquam sem fringilla ut morbi tincidunt augue interdum
            velit euismod in pellentesque massa placerat duis ultricies lacus
            sed turpis tincidunt id aliquet risus feugiat in ante metus dictum
            at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio
            euismod lacinia at quis risus sed vulputate odio ut enim blandit
            volutpat maecenas volutpat blandit aliquam etiam erat velit
            scelerisque in dictum non consectetur a erat nam at lectus urna duis
            convallis convallis tellus id interdum velit laoreet id donec
            ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet
            nisl purus in mollis nunc sed id semper
          </p>
        </div>
        <div className='flex flex-wrap items-center w-1/2 p-2'>
          {[...Array(54)].map((i) => (
            <FlagComponent key={i} US={US} />
          ))}
        </div>
      </div>
      <div className='flex flex-wrap w-full p-4 justify-center'>
        {[...Array(18)].map((i) => (
          <ItemCard
            key={i}
            header={"Language Translator"}
            desc={"Upgrade your business with proficient call center support"}
          />
        ))}
      </div>
    </main>
  );
}
