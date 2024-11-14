import CoverBanner from "../component/Cover/CoverBanner";
import CoverHero from "../component/Cover/CoverHero";
import CoverNeed from "../component/Cover/CoverNeed";
import Download from "../component/Cover/Download";
import EasyDesign from "../component/Cover/EasyDesign";
import FAQSection from "../component/Cover/FAQSection";
import SpellCheck from "../component/Cover/SpellCheck";
import Upload from "../component/Resume/Upload";

export default function CoverPage() {
  return (
    <div>
      <CoverHero />
      <CoverNeed />
      <Upload />
      <EasyDesign />
      <SpellCheck />
      <Download />
      <FAQSection />
      <CoverBanner />
    </div>
  );
}
