import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";

// images
import rock from "assets/img/rock.jpg";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// custom styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(styles);

const animate = {};

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade bottom>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={12} lg={10}>
            <Hidden xsDown>
              <h2 className={classes.title}>About Us</h2>
            </Hidden>

            <Hidden smUp>
              <h3 className={classes.title}>About Us</h3>
            </Hidden>

            <div className={classes.description}>
              <img src={rock} className={classes.rock} />
            </div>

            <h5 className={classes.description}>
              The Taliwang property covers an area of 31,204 hectares and is
              located on the west coast of Sumbawa Island, Indonesia, in the
              Taliwangan sub-district, West Sumbawa Regency, about 15 km to the
              north of Newmont’s Batu Hijau porphyry copper-gold mine.
            </h5>

            <h5 className={classes.description}>
              Although the Taliwang property, the subject of Southern Arc’s
              exploration activities since 2005, host a number of prospects, to
              date the focus has been on three main targets: Lemonga, Jereweh or
              J3 and Semoan-Ramit-Raboya. Exploration has been mainly
              concentrated on the Lemonga gold-silver epithermal vein prospect
              which shows substantial potential exploration upside.
            </h5>
          </GridItem>
        </GridContainer>

        {/* <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Free Chat"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Chat}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Verified Users"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Fingerprint"
              description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Fingerprint}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div> */}
      </Fade>
    </div>
  );
}
