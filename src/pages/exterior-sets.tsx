import { Anchor, ChipArray } from "@/components";
import { Template } from "@/template";
import {
  Box,
  Card,
  CardMedia,
  Chip,
  Container,
  Grid,
  makeStyles,
  Typography
} from "@material-ui/core";
import React from "react";
import { attributes } from "../../content/page/exterior-sets.md";
const useStyles = makeStyles(theme => ({}));

interface ExteriorSetsPage {}

const ExteriorSetsPage = React.memo<ExteriorSetsPage>(function ExteriorSetsPage({ ...other }) {
  const classes = useStyles();

  return (
    <Template.WithContacts {...attributes}>
      <Box my={20}>
        <Container maxWidth="lg">
          <Box my={10}>
            {attributes.lots.map(({ title, subtitle, images }) => (
              <React.Fragment>
                <Box my={6}>
                  <Typography variant="h4">{title}</Typography>
                  <Typography>{subtitle}</Typography>
                </Box>
                <Grid container spacing={2}>
                  {images.map(tile => (
                    <Grid key={tile.image} item xs={12} sm={4}>
                      <Anchor href={tile.image} target="_blank">
                        <Card>
                          <CardMedia style={{ height: 200 }} image={tile.image} />
                        </Card>
                      </Anchor>
                    </Grid>
                  ))}
                </Grid>
              </React.Fragment>
            ))}
          </Box>
          <Box my={5}>
            <Typography variant="h3">Off the lot</Typography>
          </Box>
          <ChipArray>
            {attributes.offTheLots.map(tag => (
              <Chip label={tag} variant="outlined" />
            ))}
          </ChipArray>
        </Container>
      </Box>
    </Template.WithContacts>
  );
});

export default ExteriorSetsPage;
