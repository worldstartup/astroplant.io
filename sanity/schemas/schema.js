import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";
import achievement from "./achievement";
import cta from "./cta";

import home from "./pages/home";
import partner from "./partner";
import roadmapStep from "./roadmapStep";
import teamMember from "./teamMember";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    home,
    partner,
    teamMember,
    achievement,
    roadmapStep,
    cta,
  ]),
});
