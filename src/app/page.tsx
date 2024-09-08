import DonationCounter from "@/components/home/donation-counter";
import FeaturedProjects from "@/components/home/featured-projects";
import Hero from "@/components/home/hero";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturedProjects />
      <DonationCounter />
    </div>
  );
};

export default Home;
