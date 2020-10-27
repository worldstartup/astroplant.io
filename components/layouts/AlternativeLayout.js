import PropTypes from "prop-types";
import React from "react";
import IntroductionSection from "../sections/IntroductionSection";
import JoinUsSection from "../sections/JoinUsSection";
import MainLayout from "./MainLayout";

export default function AlternativeLayout({
  pageTitle,
  introduction,
  children,
  ...props
}) {
  return (
    <MainLayout pageName={pageTitle} pageDescription={introduction} {...props}>
      <IntroductionSection title={pageTitle} introduction={introduction} />
      {children}
      <JoinUsSection />
    </MainLayout>
  );
}

AlternativeLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  introduction: PropTypes.string.isRequired,
};
