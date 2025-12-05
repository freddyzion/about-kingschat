import Logo from '../assets/kingschat-logo.png';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  return (
    <div className="px-5 sm:px-10 lg:px-0 pt-6 md:pt-7 lg:pt-10 max-w-5xl mx-auto grid grid-cols-3 md:grid-cols-4 justify-center items-center md:gap-10 animate-slide-up">
      <a href="https://kingsch.at/h/" className="flex items-center col-span-2 md:col-span-1">
        <img 
          src={Logo} 
          alt="kingschat-logo" 
          className="size-8 sm:size-12 lg:size-14" />
        <span className="bg-linear-170 from-sky-800/50 via-sky-600 to-sky-800/50 text-transparent bg-clip-text font-semibold font-dm tracking-tighter pt-1.5 text-lg sm:text-2xl lg:text-4xl">KingsChat</span>
      </a>
      <ul className="col-span-2 hidden md:flex space-x-5 grow font-nunito text-sm sm:text-base lg:text-2xl text-sky-700 hover:text-sky-900/50 font-medium justify-center">
        <li><a href="#features">Features</a></li>
        <li><a href="#cloud">Cloud</a></li>
        <li><a href="#pay">Pay</a></li>
        <li><a href="#ratings">Ratings</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
      <a 
        href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://web.lwappstore.com/single/app/appId-d4738f8b60d119f706c2d7a8d73068d7&ved=2ahUKEwjZzqbBuaWRAxVCQkEAHVc5HfEQFnoECEYQAQ&usg=AOvVaw2Y5UObk9uSA33z1BqD-9cn" 
        className="-ms-5 justify-self-end bg-linear-190 from-sky-600 via-blue-400 to-sky-500 text-white font-dm w-fit font-medium px-3 py-2 rounded-xl text-sm md:text-lg lg:text-2xl">
        <span>Start now</span> 
        <ArrowRight className="inline size-5 sm:size-6 md:size-8" />
      </a>
    </div>
  );
}