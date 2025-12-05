import Navbar from './Navbar';
import { ArrowDown, Sparkles, ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="bg-linear-90 from-white to-sky-100/50 h-80 sm:h-100 md:h-150">
      <Navbar />
      <div className="my-10 sm:mt-20 md:mt-30 animate-slide-up animation-delay-100">
        <a href="https://kingsch.at/h/" className="block text-[0.7rem] sm:text-base lg:text-lg w-fit mx-auto font-dm bg-sky-200/20 text-sky-500 py-1.5 px-4 rounded-full -translate-y-3 md:-translate-y-7">
          <Sparkles strokeWidth={1.5} className="inline size-5 md:size-7 pe-1" />
          <span>Find out more about KingsChat</span>
          <ArrowUpRight strokeWidth={1.5} className="inline size-5 md:size-7 ps-1" />
        </a>
        <h1 className="text-center font-dm text-xl sm:text-3xl md:text-5xl lg:text-7xl px-5 md:tracking-wider lg:tracking-normal bg-linear-180 from-sky-800/50 via-sky-700 to-sky-800/20 bg-clip-text text-transparent">Welcome to the future of God-powered innovations</h1>
      </div>
      <div className="flex justify-center gap-5 md:gap-10">
        <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://web.lwappstore.com/single/app/appId-d4738f8b60d119f706c2d7a8d73068d7&ved=2ahUKEwjZzqbBuaWRAxVCQkEAHVc5HfEQFnoECEYQAQ&usg=AOvVaw2Y5UObk9uSA33z1BqD-9cn" className="border border-sky-500 py-1 md:py-2 px-3 md:px-4 text-sky-600 rounded-md md:rounded-xl font-nunito text-sm sm:text-lg lg:text-2xl animate-slide-up animation-delay-200">Try for free</a>
        <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://web.lwappstore.com/single/app/appId-d4738f8b60d119f706c2d7a8d73068d7&ved=2ahUKEwjZzqbBuaWRAxVCQkEAHVc5HfEQFnoECEYQAQ&usg=AOvVaw2Y5UObk9uSA33z1BqD-9cn" className="bg-sky-500 py-1 md:py-2 px-3 md:px-4 font-dm text-sm sm:text-lg lg:text-2xl text-white rounded-md md:rounded-xl flex items-center gap-1 animate-slide-up animation-delay-300">
          <span>Download</span>
          <ArrowDown className="size-5" />
        </a>
      </div>
    </div>
  );
}