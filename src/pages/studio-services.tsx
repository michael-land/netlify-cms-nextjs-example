import { Template } from "@/template";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import { attributes } from "../../content/page/studio-services.md";

interface StudioServicePage {}

const StudioServicePage = React.memo<StudioServicePage>(function StudioServicePage(props) {
  return (
    <Template.WithContacts {...attributes}>
      <Box my={20}>
        <Container>
          <Typography variant="h4" align="center" style={{ textTransform: "uppercase" }}>
            {attributes.extra.title}
          </Typography>
          <Box maxWidth={500} margin="auto" mt={8}>
            <Grid container spacing={2}>
              {attributes.extra.services.map(service => (
                <Grid item xs={6} key={service.value}>
                  <Button fullWidth variant="outlined" style={{ padding: 40, height: "100%" }}>
                    {service.value}
                  </Button>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Template.WithContacts>
  );
});

export default StudioServicePage;
