import { Card1, Card2, Hero, Section, Carousel, ChipArray } from "@/components";
import Markdown from "@/components/Markdown";
import { Box, Container, Grid, makeStyles, Typography, Paper, Chip } from "@material-ui/core";
import React from "react";
import { attributes } from "../../content/page/home.md";

interface HomePage {}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },

  img: {
    width: "100%",
    display: "block",
    overflow: "hidden",
    zIndex: -1,
    borderRadius: 8,
    boxShadow: theme.shadows[4],
    userSelect: "none",
    pointerEvents: "none"
  },
  stepper: {
    position: "relative",
    top: -32,
    backgroundColor: "transparent"
  },
  buttonsContainer: {
    position: "absolute",
    height: "100%",
    width: "100%"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    alignItems: "center"
  },
  button: {
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "white",
    margin: "0 8px"
  }
}));

const HomePage = React.memo<HomePage>(function HomePage({ ...other }) {
  const classes = useStyles();

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

          <Markdown>{attributes.section1.description}</Markdown>
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
      <Container maxWidth="md">
        <Section title="ON THE LOT">
          <Box my={10}>
            <Typography>
              Our stages have hosted many of history’s most beloved, award-winning movie
              blockbusters and TV hits. Today, movie and television talent continues to come to
              Paramount from around the world to create their celebrated productions. The people you
              will see passing by on bicycles, enjoying lunch at the Café, or reviewing scripts in
              Production Park, are the same talent, producers, and crew from these productions. Look
              below to see who currently calls Paramount their home.
            </Typography>
          </Box>
          <Carousel>
            {attributes.onTheLots.map((item, index) => (
              <Grid container key={item.title} alignItems="center">
                <Grid item xs={12} md={6}>
                  <img className={classes.img} src={item.image} alt={item.title} />
                </Grid>
                <Grid item xs={12} md={6} style={{ zIndex: 99999 }}>
                  <Box p={4}>
                    <Typography variant="h4" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography gutterBottom>{item.description}</Typography>
                    <Box my={2}>
                      <Typography variant="subtitle2" gutterBottom>
                        Stars
                      </Typography>
                      <ChipArray>
                        {item.stars.map(star => (
                          <Chip key={star} label={star} size="small" />
                        ))}
                      </ChipArray>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Carousel>
        </Section>

        <Section title="PAST PRODUCTIONS">
          <Carousel>
            {attributes.onTheLots.map((item, index) => (
              <Grid container key={item.title} alignItems="center">
                <Grid item xs={12} md={6}>
                  <img className={classes.img} src={item.image} alt={item.title} />
                </Grid>
                <Grid item xs={12} md={6} style={{ zIndex: 99999 }}>
                  <Box p={4}>
                    <Typography variant="h4" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography gutterBottom>{item.description}</Typography>
                    <Box my={2}>
                      <Typography variant="subtitle2" gutterBottom>
                        Stars
                      </Typography>
                      <ChipArray>
                        {item.stars.map(star => (
                          <Chip key={star} label={star} size="small" />
                        ))}
                      </ChipArray>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Carousel>
        </Section>
      </Container>
    </>
  );
});

export default HomePage;
