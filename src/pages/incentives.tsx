import { Template } from "@/template";
import React from "react";
import { attributes } from "../../content/page/incentives.md";

interface IncentivesPage {}

const IncentivesPage = React.memo<IncentivesPage>(function IncentivesPage({ ...other }) {
  return (
    <Template.WithContacts {...attributes}>
      <div />
    </Template.WithContacts>
  );
});

export default IncentivesPage;
