import { Views } from "@/views";
import React from "react";
import { attributes } from "../../content/page/incentives.md";

interface Incentives {}

const Incentives = React.memo<Incentives>(function Incentives({ ...other }) {
  return (
    <Views.Detail {...attributes}>
      <div />
    </Views.Detail>
  );
});

export default Incentives;
