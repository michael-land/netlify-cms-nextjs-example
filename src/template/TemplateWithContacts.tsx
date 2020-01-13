import { Anchor, Hero, Markdown } from "@/components";
import { GenericProps } from "@/type";
import {
  Box,
  Container,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  SvgIcon,
  Typography
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles(theme => ({
  title: {
    textTransform: "uppercase",
    marginBottom: 48,
    marginTop: 48
  },
  iconButton: {
    "& svg": {
      width: 48,
      height: 48
    },
    marginLeft: -8,
    marginTop: 8
  },
  contactItem: {
    alignItems: "flex-start",
    flexDirection: "column",
    paddingBottom: 16
  },
  contactType: {
    minWidth: 80,
    fontWeight: 500,
    marginRight: 16,
    textTransform: "capitalize",
    "&:after": {
      content: "':'"
    }
  },
  contactItemSilbing: {
    visibility: "hidden"
  }
}));

interface TemplateWithContacts extends GenericProps {
  heroImage: string;
  sections: { title: string; description: string }[];
  contacts: { type: string; values: { value: string }[] }[];
}

const TemplateWithContacts = React.memo<TemplateWithContacts>(function TemplateWithContacts({
  sections,
  heroImage,
  contacts,
  children,
  ...other
}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Hero image={heroImage} />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            {sections.map(section => (
              <Box mb={8}>
                <Typography variant="h4" className={classes.title}>
                  {section.title}
                </Typography>
                <Markdown>{section.description}</Markdown>
              </Box>
            ))}
          </Grid>
          <Grid item md={1} implementation="css" smDown component={Hidden} />
          <Grid item xs={12} md={4}>
            <Typography variant="h4" className={classes.title}>
              contact
            </Typography>
            <div>
              {contacts.map(contact => (
                <div className={classes.contactItem}>
                  {contact.values.map(({ value }, index) => (
                    <div style={{ display: "flex" }}>
                      <Typography
                        className={clsx(classes.contactType, {
                          [classes.contactItemSilbing]: index > 0
                        })}
                        display="inline"
                      >
                        {contact.type}
                      </Typography>
                      <Typography display="inline">{value}</Typography>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <Anchor href="https://www.linkedin.com/company/xiangshan-global-studios">
              <IconButton className={classes.iconButton} size="small" color="inherit">
                <SvgIcon>
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z" />
                </SvgIcon>
              </IconButton>
            </Anchor>
          </Grid>
        </Grid>
      </Container>
      {children}
    </React.Fragment>
  );
});

export default TemplateWithContacts;
