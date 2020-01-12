import { Card1, Card2, Hero, Section } from "@/components";
import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { attributes } from "../../content/page/home.md";
import { Head } from "next/document";
console.log(attributes);
const useStyles = makeStyles(theme => ({}));

interface HomePage {}

const HomePage = React.memo<HomePage>(function HomePage({ ...other }) {
  return (
    <>
      <Hero anchor="bottom" image={attributes.heroImage}>
        <Box py={2} textAlign="center" bgcolor="#000" color="#fff">
          <Typography variant="subtitle1" gutterBottom>
            {attributes.notification}
          </Typography>
        </Box>
      </Hero>

      <Box pt={8} pb={6}>
        <Container maxWidth="md">
          <Box my={4}>
            <Typography variant="h4" align="center" gutterBottom>
              {attributes.section1.title}
            </Typography>
          </Box>

          <Typography paragraph>{attributes.section1.description}</Typography>
        </Container>
      </Box>

      <Container maxWidth="md">
        <Section title="Recent News">
          <Grid container spacing={4} justify="center">
            {attributes.news.map(({ content, image, title }) => (
              <Grid item key={title} xs={12} sm={10} md={4}>
                <Card2 title={title} description={content} image={image} />
              </Grid>
            ))}
          </Grid>
        </Section>
        <Section py={10}>
          {attributes.articles.map(({ content, image, title, readmore }, index) => (
            <Box my={12} key={title}>
              <Card1
                title={title}
                description={content}
                image={image}
                url={readmore}
                direction={index % 2 === 0 ? "row-reverse" : "row"}
              />
            </Box>
          ))}
        </Section>
      </Container>
    </>
  );
});

export default HomePage;
