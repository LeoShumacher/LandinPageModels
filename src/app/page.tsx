import LandingPage, {
  LandingPageHeader,
  LandingPageHeaderNav,
  LandingPageMainContent,
  LandingPageSection,
} from "@/components/LandingPage";
import { FaceIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <LandingPage>
      <LandingPageHeader logo={<FaceIcon className="h-6 w-6" />}>
        <LandingPageHeaderNav>
          <ul className="flex gap-1">
            <li>btn1</li>
            <li>btn1</li>
            <li>btn1</li>
            <li>btn1</li>
          </ul>
        </LandingPageHeaderNav>
      </LandingPageHeader>
      <LandingPageMainContent>
        <LandingPageSection>
          <section>main section</section>
        </LandingPageSection>
      </LandingPageMainContent>
    </LandingPage>
  );
}
