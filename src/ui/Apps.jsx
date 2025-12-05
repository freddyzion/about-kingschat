import KingsCloudLogo from '../assets/kingscloud-logo.png';
import KingsPayLogo from '../assets/kingspay-logo.jpg';
import { ArrowUpRight } from 'lucide-react';

export default function Apps() {
  return (
    <section className="bg-linear-90 from-white to-sky-100/50 my-5 py-5 md:py-10 lg:py-20 md:mt-10 lg:mt-20">
      <div className="mt-5 md:mt-10 px-5 text-center">
        <h2 className="text-center px-4 font-dm text-xl bg-linear-180 from-sky-800/50 via-sky-700 to-sky-800/50 text-transparent bg-clip-text md:text-2xl lg:text-6xl">Explore other apps associated with KingsChat</h2>
        {/*KingsCloud*/}
        <div id="cloud" className="my-20">
          <img src={KingsCloudLogo} alt="kingscloud image" className="mix-blend-multiply size-30 sm:size-50 md:size-80 mx-auto" />
          <h4 className="text-xl md:text-3xl lg:text-5xl font-dm text-sky-900 mb-4 md:mb-6">
            Introducing <span className="text-sky-500">Kings</span><span className="text-sky-700">Cloud</span>
          </h4>
          <p className="mb-5 md:mb-10 px-5 md:px-20 bg-linear-180 from-sky-800/80 via-sky-700 to-sky-800/70 bg-clip-text text-transparent text-center text-base font-nunito md:text-2xl lg:text-4xl">Free, fast and secure personal cloud storage — exclusive to KingsChat users! It’s coupled with a beautiful gallery that makes it lightning-fast and easy to view and share the photos, videos, voice notes and documents you’ve shared on KingsChat.</p>
          <a 
            href="https://kingsch.at/h/cloud.html" 
            className="bg-linear-190 from-sky-600 via-blue-400 to-sky-500 text-white font-dm w-fit font-medium px-3 py-2 rounded-xl text-sm md:text-lg lg:text-2xl">
            <span>Find out more</span> 
            <ArrowUpRight className="inline size-5 sm:size-6 md:size-8" />
          </a>
        </div>
        {/* KingsPay */}
        <div id="pay">
          <img src={KingsPayLogo} alt="kingspay image" className="mix-blend-multiply size-30 sm:size-50 md:size-80 mx-auto" />
          <h4 className="text-xl md:text-3xl lg:text-5xl font-dm text-sky-900 mb-4 md:mb-6">
            Meet <span className="text-sky-500">Kings</span><span className="text-sky-700">Pay</span>
          </h4>
          <p className="mb-5 md:mb-10 px-5 md:px-20 bg-linear-180 from-sky-800/80 via-sky-700 to-sky-800/70 bg-clip-text text-transparent text-center text-base font-nunito md:text-2xl lg:text-4xl">New, fast and reliable way for sending money to affiliate organizations - exclusive to KingsChat users! Backed by 128-bit encryption & top level security</p>
          <a 
            href="https://kingsch.at/h/pay.html" 
            className="bg-linear-190 from-sky-600 via-blue-400 to-sky-500 text-white font-dm w-fit font-medium px-3 py-2 rounded-xl text-sm md:text-lg lg:text-2xl">
            <span>Check it out</span> 
            <ArrowUpRight className="inline size-5 sm:size-6 md:size-8" />
          </a>
        </div>
      </div>
    </section>
  );
}