import Plan from "../component/Pricing/Plan";
import PriceHero from "../component/Pricing/PriceHero";
import PricingBanner from "../component/Pricing/PricingBanner";

export default function PricingPage() {
  return (
    <div>
      <PriceHero />
      <Plan />
      <PricingBanner />
    </div>
  );
}
