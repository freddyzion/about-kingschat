import Hero from './ui/Hero';
import Features from './ui/Features';
import Apps from './ui/Apps';
import Ratings from './ui/Ratings';
import Support from './ui/Support';

export default function App() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />
      <Apps />
      <Ratings />
      <Support />
      <div className="flex text-xs font-nunito md:text-base lg:text-lg justify-center items-center flex-wrap gap-5 text-gray-500 pb-5">
        <p>MIT Licensed</p>
        <p>About KingsChat v1.0.0</p>
        <p>Reviews culled from Google Play Store</p>
      </div>
    </div>
  );
}