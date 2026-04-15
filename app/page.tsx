import HeroSection from "./_home/HeroSection";
import BlogPage from "./blog/page";


export default function Home() {
  return (
    <main className="min-h-screen w-full ">
      <HeroSection/>
      <BlogPage/>
    </main>
  );
}