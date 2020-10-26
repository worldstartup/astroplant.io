import Carousel from "../components/Carousel";
import MainLayout from "../components/layouts/MainLayout";
import Section from "../components/Section";
import CommunitySection from "../components/sections/CommunitySection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/sections/HeroSection";
import MainPartnersSection from "../components/sections/MainPartnersSection";
import PlatformSection from "../components/sections/PlatformSection";
import { getAchievements, getHome } from "../services/sanity";

/*const Loader = dynamic(
  () => import("react-preloaders").then((loaders) => loaders.Cube),
  {
    ssr: false,
  }
);*/

export default function Home({ data, achievements }) {
  console.log(achievements);
  return (
    <div className={"bg-gradient"}>
      <MainLayout
        pageName={"Home"}
        pageDescription={
          "AstroPlant, growing a new generation of urban and space farmers."
        }
        pages={["Home", "Community", "Contribute", "Shop"]}
      >
        {/*<Loader
        color={"var(--main-color)"}
        time={1000}
        animation="slide"
        background="linear-gradient(321deg, rgba(28,19,31,1) 0%, rgba(20,15,43,1) 100%)"
      />*/}
        <HeroSection
          title={data.heroTitle}
          description={data.heroDescription}
          imageUrl={data.planetImage}
          videoUrl={data.video}
        />
        <MainPartnersSection
          title={data.partnersTitle}
          partners={data.partners}
        />
        <CommunitySection
          title={data.communityTitle}
          description={data.communityDescription}
          images={data.communityImages}
        />
        <Section id="achievements">
          <Carousel content={achievements} />
        </Section>
        <PlatformSection
          title={data.platformTitle}
          description={data.platformDescription}
          image={data.platformImage}
        />
        <CTASection
          title={data.ctaTitle}
          description={data.ctaDescription}
          ctas={data.ctas}
        />
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      data: await getHome(),
      achievements: await getAchievements(),
    },
  };
}
