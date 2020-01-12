import Hero from "@/components/Hero";
import Markdown from "@/components/Markdown";
import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
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
      {attributes.sections.map((section, index) => {
        return (
          <Box my={8} key={index}>
            <Container maxWidth="md">
              <Typography variant="h4" style={{ marginBottom: 48 }}>
                {section.title}
              </Typography>
              <Markdown>{section.description}</Markdown>
            </Container>
          </Box>
        );
      })}
    </>
  );
}
