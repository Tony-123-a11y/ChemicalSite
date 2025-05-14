import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/Features";
import ProductSection from "../components/ProductSection";
import SocialSideBar from "../components/SocialSideBar";

const Home = () => {
  return (
    <>
      <SocialSideBar />
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
    </>
  );
};

export default Home;
