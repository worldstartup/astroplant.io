import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import achievement from "./achievement";
import contentBlock from "./contentBlock";
import cta from "./cta";
import component from "./kit/component";
import feature from "./kit/feature";
import kit from "./kit/kit";
import review from "./kit/review";
import specification from "./kit/specification";
import link from "./link";
import milestone from "./milestone";
import aboutUs from "./pages/aboutUs";
import contribute from "./pages/contribute";
import goals from "./pages/goals";
import home from "./pages/home";
import shop from "./pages/shop";
import partner from "./partner";
import teamMember from "./teamMember";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    //Objects
    contentBlock,
    component,
    feature,
    review,
    specification,
    link,

    //Documents
    home,
    aboutUs,
    contribute,
    goals,
    shop,
    partner,
    teamMember,
    achievement,
    milestone,
    cta,
    kit,
  ]),
});
