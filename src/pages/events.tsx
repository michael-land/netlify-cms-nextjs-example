import { Template } from "@/template";
import { GenericProps } from "@/type";
import React from "react";
import { attributes } from "../../content/page/event.md";

interface EventPage extends GenericProps {}

function EventPage({ className, children, ...other }: EventPage) {
  return <Template.WithContacts {...attributes} />;
}

export default EventPage;
