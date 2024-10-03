import LandingPage, {
  LandingPageHeader,
  LandingPageHeaderNav,
  LandingPageIconCarrousel,
  LandingPageMainContent,
  LandingPageSection,
} from "@/components/LandingPage";
import IntroductionTexts from "@/components/LandingPage/Atoms/Title";
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
          <IntroductionTexts
            title={
              "A Solução Que Você Precisava para a Falta de Tempo e Produtividade"
            }
            subtitle={
              "Descubra Como o TempoSmart Pode Transformar Seu Dia a Dia em Pouco Tempo"
            }
            buttonText={"Button"}
          />
        </LandingPageSection>
        <LandingPageIconCarrousel>
          <div></div>
        </LandingPageIconCarrousel>
      </LandingPageMainContent>
    </LandingPage>
  );
}
