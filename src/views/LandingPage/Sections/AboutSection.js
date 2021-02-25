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
import styles from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.js";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade bottom cascade>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={12}>
            <Hidden xsDown>
              <h2 className={classes.title}>About Us</h2>
            </Hidden>

            <Hidden smUp>
              <h3 className={classes.title}>About Us</h3>
            </Hidden>

            <div className={classes.description}>
              <img src={pic} className={classes.rock} />

              <h5>
                The Taliwang property covers an area of 31,204 hectares and is
                located on the west coast of Sumbawa Island, Indonesia, in the
                Taliwangan sub-district, West Sumbawa Regency, about 15 km to
                the north of Newmont’s Batu Hijau porphyry copper-gold mine.
                Although the Taliwang property, the subject of Southern Arc’s
                exploration activities since 2005, host a number of prospects,
                to date the focus has been on three main targets: Lemonga,
                Jereweh or J3 and Semoan-Ramit-Raboya. Exploration has been
                mainly concentrated on the Lemonga gold-silver epithermal vein
                prospect which shows substantial potential exploration upside.
              </h5>
            </div>
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
