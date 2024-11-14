import Home from "../component/Home/Home.jsx";
import Services from "../component/Home/Services";
import DesignTemplate from "../component/Home/DesignTemplate.jsx";
import HiringPotential from "../component/Home/HiringPotential.jsx";
import KeyFeatures from "../component/Home/KeyFeatures.jsx";
import HomeBanner from "../component/Home/HomeBanner.jsx";
export default function HomePage() {
  return (
    <div>
      <Home />
      <Services />
      <DesignTemplate />
      <HiringPotential />
      <KeyFeatures />
      <HomeBanner />
    </div>
  );
}
