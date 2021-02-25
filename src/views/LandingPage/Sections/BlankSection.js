import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

// images
import pic from "assets/img/rock.jpg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// custom styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/blankStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
     
    </div>
  );
}
