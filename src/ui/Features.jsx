import TimelineImage from '../assets/timeline-image.jpeg';
import VoiceImage from '../assets/voice-image2@2x.jpeg';
import ShareImage from '../assets/share-image1@2x.jpeg';

export default function Features() {
  return (
    <section id="features" className="my-5 md:mt-10 lg:mt-20">
      <h2 className="animate-slide-up text-center font-dm text-xl bg-linear-180 from-sky-800/50 via-sky-700 to-sky-800/20 text-transparent bg-clip-text md:text-2xl lg:text-6xl">Create. Connect. And Share.</h2>
      <div className={`animate-slide-up animation-delay-100 overflow-hidden my-5 md:mt-10 lg:mt-20 bg-[url(${TimelineImage})] bg-center bg-cover w-9/10 md:w-9/11 mx-auto h-40 md:h-100 lg:h-150 rounded-2xl md:rounded-4xl relative`}>
        <p className="fade-in text-sm lg:text-5xl text-white font-nunito text-start md:grid place-self-center h-max px-5 absolute bottom-5 md:bottom-20 left-1 md:left-15 z-10"><span className="text-lg lg:text-6xl lg:font-bold text-sky-500">Create </span>stories and stunning visuals, having the world as your audience</p>
        <div className="size-full absolute bg-linear-200 from-20% from-transparent to-100% to-black" />
      </div>
      <div className={`animate-slide-up animation-delay-200 overflow-hidden my-5 md:mt-10 lg:mt-20 bg-[url(${VoiceImage})] bg-center bg-cover w-9/10 md:w-9/11 mx-auto h-40 md:h-100 lg:h-150 rounded-2xl md:rounded-4xl relative`}>
        <p className="fade-in text-sm lg:text-5xl text-white font-nunito text-start md:grid place-self-center h-max px-5 absolute bottom-5 md:bottom-20 left-1 md:left-15 z-10"><span className="text-lg lg:text-6xl lg:font-bold text-sky-500">Connect </span>to a world of infinite possibilities - from business, to family, to friends - it's all here!</p>
        <div className="size-full absolute bg-linear-200 from-20% from-transparent to-100% to-black" />
      </div>
      <div className={`animate-slide-up animation-delay-300 overflow-hidden my-5 md:mt-10 lg:mt-20 bg-[url(${ShareImage})] bg-center bg-cover w-9/10 md:w-9/11 mx-auto h-40 md:h-100 lg:h-150 rounded-2xl md:rounded-4xl relative`}>
        <p className="fade-in text-sm lg:text-5xl text-white font-nunito text-start md:grid place-self-center h-max px-5 absolute bottom-5 md:bottom-20 left-1 md:left-15 z-10"><span className="text-lg lg:text-6xl lg:font-bold text-sky-500">Share </span>what you've got with the world and get to know what others think about it</p>
        <div className="size-full absolute bg-linear-200 from-20% from-transparent to-100% to-black" />
      </div>
    </section>
  );
}