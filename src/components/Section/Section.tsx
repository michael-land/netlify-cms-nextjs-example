import { Box, BoxProps, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({}));

interface Section extends BoxProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section = React.memo<Section>(function Section({
  className,
  title,
  subtitle,
  children,
  ...other
}) {
  return (
    <Box {...other}>
      {(title || subtitle) && (
        <Box my={6}>
          {title && (
            <Typography variant="h3" align="center">
              {title}
            </Typography>
          )}
          {subtitle && <Typography>{subtitle}</Typography>}
        </Box>
      )}
      {children}
    </Box>
  );
});

export default Section;
