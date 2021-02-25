import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Hidden } from "@material-ui/core";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";
import Location from "@material-ui/icons/LocationOn";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

// custom styles
import styles from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.js";
import Fade from "react-reveal/Fade";

const useStyles = makeStyles(styles);

export default function ContactSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <Fade bottom>
        <h2 className={classes.title}>Contact Us</h2>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Phone"
              description="(+6221)66677788"
              icon={Phone}
              iconColor="info"
              vertical
              darkMode
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Email"
              description="info@ptisb.com"
              icon={Email}
              iconColor="success"
              vertical
              darkMode
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Address"
              description="Taman Pluit Putri Blok E No.1, Jakarta Utara 14450."
              icon={Location}
              iconColor="danger"
              vertical
              darkMode
            />
          </GridItem>
        </GridContainer>
      </Fade>
    </div>
  );
}
