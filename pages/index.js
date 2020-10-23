import MainLayout from "../components/layouts/MainLayout";
import CommunitySection from "../components/sections/CommunitySection";
import CTASection from "../components/sections/CTASection";
import HeroSection from "../components/sections/HeroSection";
import MainPartnersSection from "../components/sections/MainPartnersSection";
import { getHome } from "../services/sanity";

/*const Loader = dynamic(
  () => import("react-preloaders").then((loaders) => loaders.Cube),
  {
    ssr: false,
  }
);*/

export default function Home({ home }) {
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
        <HeroSection data={home} />
        <MainPartnersSection data={home} />
        <CommunitySection data={home} />
        <CTASection data={home} />
      </MainLayout>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      home: await getHome(),
    },
  };
}
