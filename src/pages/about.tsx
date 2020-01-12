import { Box, Container, List, ListItem, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import Hero from "@/components/Hero";
import { attributes } from "../../content/page/about.md";

export default function AboutUsPage() {
  return (
    <>
      <Hero anchor="center" image={attributes.heroImage}>
        <Box color="white" textAlign="center">
          <Typography variant="h2" color="inherit" paragraph>
            {attributes.title}
          </Typography>
        </Box>
      </Hero>
      <Box my={20}>
        {attributes.sections.map(section => (
          <Box my={8}>
            <Container maxWidth="md">
              <Typography variant="h4" component="h1" gutterBottom>
                {section.title}
              </Typography>
              <Typography>{section.description}</Typography>
            </Container>
          </Box>
        ))}
        {/* <Box my={8}>
          <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
              ABOUT US
            </Typography>
            <Typography>
              Xiangshan County is located in the southern edge of Yangtze River Delta &amp; the east
              coast of hedging Province. It is situated between Xiangshan Harbor &amp; Sandmen Bay,
              surrounded by the sea on there sides &amp; embraced by two ports.
            </Typography>
            <List>
              <ListItem>
                <ListItemText>
                  - Fishing is the leading industry in Xiangshan, alongside the film &amp;
                  television industry.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  - 1,382 km&sup2; or 341,506 acres land area with 549,000 population
                </ListItemText>
              </ListItem>
            </List>
            <Typography>
              Subtropical monsoon climate zone provides long summers and warm winters in Xiangshan
              with frost-free season for 248 days annually. Average with dew point of
              23&deg;C(73&deg;F)in summer and 8&deg;C(46&deg;F) in winter(based on Rh 80%). Average
              rain for 1400mm(55in) annually. Wind Direction: April to October South East; November
              to March North West. Elevation for the studio is less than 5m(16ft) with less than
              3°slope.
            </Typography>
          </Container>
        </Box>
        <Box my={8} id="mission">
          <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
              OUR MISSION
            </Typography>
            <Typography>
              The mission of Xiangshan Global Studios is to provide each of our clients with
              exceptional service and unsurpassed production facilities; to embrace new technologies
              and anticipate changing production needs; and to provide a friendly, attractive
              environment which brings together the best creative talent. Our success is based on a
              spirit of teamwork among people who value each other, the work they do, and the
              clients they serve.
            </Typography>
          </Container>
        </Box>
        <Box my={8} id="giving-back">
          <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
              GIVING BACK
            </Typography>
            <Typography>
              Xiangshan Global Studios is committed to creating positive change within our Xiangshan
              community by reaching out in the local area yearly though our Community programs that
              we offer on the studio lot.
            </Typography>
          </Container>
        </Box>
        <Box my={8} id="sustainability">
          <Container maxWidth="md">
            <Typography variant="h4" component="h1" gutterBottom>
              SUSTAINABILITY
            </Typography>
            <Typography>
              Xiangshan Global Studios is commitment to sustainability and green studio business
              practices. Today, our efforts include energy efficiency programs, renewable energy
              investments, green building projects, green production practices, waste reduction
              efforts and more. Through strong leadership, continual innovation and company-wide
              participation, our goal is to further integrate sustainability into all aspects of our
              business for greater operational efficiency, cost savings and a healthier environment
              for our employees and community. We also recognize that more can be done; that’s why
              we continually strive to improve our environmental performance.
            </Typography>
          </Container>
        </Box> */}
      </Box>
    </>
  );
}
