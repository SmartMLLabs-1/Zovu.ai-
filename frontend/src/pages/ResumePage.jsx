import ResumeBanner from "../component/Resume/ResumeBanner";
import AtsCheck from "../component/Resume/AtsCheck";
import ResumeHero from "../component/Resume/ResumeHero";
import ResumeNeed from "../component/Resume/ResumeNeed";
import RewriteResume from "../component/Resume/RewriteResume";
import Steps from "../component/Resume/Steps";
import Upload from "../component/Resume/Upload";
import BestBuilder from "../component/Resume/BestBuilder";

export default function ResumePage() {
  return (
    <div>
      <ResumeHero />
      <Steps />
      <ResumeNeed />
      <Upload />
      <RewriteResume />
      <AtsCheck />
      <BestBuilder />
      <ResumeBanner />
    </div>
  );
}
