import { Box, Button, Grid, GridProps, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import Anchor from "../Anchor";

const useStyles = makeStyles(theme => ({
  image: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: "56.25%"
  }
}));

interface Card1 extends GridProps {
  image: string;
  title: string;
  description: string;
  url?: string;
}

const Card1 = React.memo<Card1>(function Card1({
  className,
  children,
  image,
  url,
  title,
  description,
  ...other
}) {
  const classes = useStyles();

  return (
    <Grid container spacing={4} justify="center" {...other}>
      <Grid item xs={12} sm={10} md={7}>
        <Paper
          elevation={10}
          className={classes.image}
          style={{ backgroundImage: `url(${image})` }}
        />
      </Grid>
      <Grid item xs={12} sm={10} md={5}>
        <Box py={4}>
          <Typography variant="h4" gutterBottom>
            {title}
          </Typography>
          <Typography paragraph>{description}</Typography>
          {url && (
            <Button href={url} variant="contained" color="primary" component={Anchor as any}>
              read more
            </Button>
          )}
        </Box>
      </Grid>
    </Grid>
  );
});

export default Card1;
