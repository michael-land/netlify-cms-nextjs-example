import TemplateWithContacts from "./TemplateWithContacts";
import TemplateSimple from "./TemplateSimple";

interface Template {
  WithContacts: TemplateWithContacts;
  Simple: TemplateSimple;
}

const Template = {
  WithContacts: TemplateWithContacts,
  Simple: TemplateSimple
};

export default Template;
