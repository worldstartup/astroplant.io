// import React from "react";
// import MainLayout from "../components/layouts/MainLayout";
// import ComponentsSection from "../components/sections/ComponentsSection";
// import FAQSection from "../components/sections/FAQSection";
// import FeaturesSection from "../components/sections/FeaturesSection";
// import GetKitSection from "../components/sections/GetKitSection";
// import KitHeroSection from "../components/sections/KitHeroSection";
// import ReviewsSection from "../components/sections/ReviewsSection";
// import SpecificationsSection from "../components/sections/SpecificationsSection";
// import { getFeaturedArticles, getKitFAQs } from "../services/community-api";
// import { getKitDetails, getShopContent } from "../services/sanity";

// export default function Shop({ kit, featuredArticles, faqs, shopDetails }) {
//   return (
//     <MainLayout
//       pageName={"Shop"}
//       pageDescription={
//         "The AstroPlant kit the best way ot contribute to space research"
//       }
//       featuredArticles={featuredArticles}
//       dark
//     >
//       <KitHeroSection
//         title={shopDetails.title}
//         description={shopDetails.description}
//         image={shopDetails.image}
//       />
//       <FeaturesSection features={kit.features} />
//       <ComponentsSection components={kit.components} />
//       <SpecificationsSection specs={kit.specifications} />
//       <GetKitSection />
//       <FAQSection faqs={faqs} />
//       <ReviewsSection reviews={kit.reviews} />
//     </MainLayout>
//   );
// }

// export async function getStaticProps() {
//   return {
//     props: {
//       kit: await getKitDetails(),
//       featuredArticles: await getFeaturedArticles(),
//       faqs: await getKitFAQs(),
//       shopDetails: await getShopContent(),
//     },
//     revalidate: 3000,
//   };
// }
