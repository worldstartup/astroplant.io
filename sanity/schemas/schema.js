import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import achievement from "./achievement";
import cta from "./cta";
import aboutUs from "./pages/aboutUs";
import contribute from "./pages/contribute";
import goals from "./pages/goals";

import home from "./pages/home";
import partner from "./partner";
import milestone from "./milestone";
import teamMember from "./teamMember";
import contentBlock from "./contentBlock";
import component from "./kit/component";
import feature from "./kit/feature";
import review from "./kit/review";
import specification from "./kit/specification";
import kit from "./kit/kit";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    //Objects
    contentBlock,
    component,
    feature,
    review,
    specification,

    //Documents
    home,
    aboutUs,
    contribute,
    goals,
    partner,
    teamMember,
    achievement,
    milestone,
    cta,
    kit,
  ]),
});
