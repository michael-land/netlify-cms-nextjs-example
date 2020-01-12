import {
  makeStyles,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import { title } from "process";
import { GenericProps } from "@/type";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  media: {
    paddingTop: "56.25%", // 16:9
    backgroundPosition: "center",
    backgroundSize: "cover"
  },
  content: {
    flexGrow: 1
  },
  area: {
    height: "100%"
  }
}));

interface Card2 extends GenericProps {
  image?: string;
  title?: string;
  description?: string;
}

const Card2 = React.memo<Card2>(function Card2({
  className,
  children,
  image,
  title: titleProp,
  description: descriptionProp,
  ...other
}) {
  const classes = useStyles();
  const title = titleProp ? (
    <Typography gutterBottom variant="h6" component="h2">
      {titleProp}
    </Typography>
  ) : null;

  const description = descriptionProp ? (
    <Typography variant="body2">{descriptionProp}</Typography>
  ) : null;

  return (
    <Card className={clsx(classes.root, className)} {...other}>
      <CardActionArea className={classes.area}>
        {image && <CardMedia className={classes.media} image={image} title="Image title" />}
        <CardContent className={classes.content}>
          {title}
          {description}
        </CardContent>
      </CardActionArea>
    </Card>
  );
});

export default Card2;
