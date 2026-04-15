import Image from "next/image";
import Search from "./Search";

const HeroSection = () => {
  return (
    <section className="flex w-full min-h-[70vh]  flex-col items-center justify-center text-center gap-6 px-6">
      
      <div className="p-3 rounded-2xl bg-white shadow-md">
        <Image
          src="/web.png"
          alt="Stack Scribe Logo"
          width={60}
          height={60}
          className="rounded-xl"
        />
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
        Stack Scribe
      </h1>

      <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
        A modern platform for tech insights, tutorials, and developer-focused articles.
      </p>

      <Search id="hero-search" />
    </section>
  );
};

export default HeroSection;