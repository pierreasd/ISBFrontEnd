import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

// assets
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import ProjectSection from "./Sections/ProjectSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel.js";
import SectionPills from "views/Components/Sections/SectionPills.js";
import SectionExamples from "views/Components/Sections/SectionExamples.js";

import g1 from "assets/img/g1.JPG";
import g2 from "assets/img/g2.JPG";
import g3 from "assets/img/g3.JPG";
import g4 from "assets/img/g4.JPG";
import g5 from "assets/img/g5.JPG";
import g6 from "assets/img/g6.JPG";
import { Hidden } from "@material-ui/core";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  window.scrollTo({ top: 0 });

  const pix = [
    {
      src: g1,
      caption: "Meeting",
    },
    {
      src: g2,
      caption: "Menjelaskan",
    },
    {
      src: g3,
      caption: "Pak Ilham",
    },
    {
      src: g4,
      caption: "Penambang Ilegal",
    },
    {
      src: g5,
      caption: "Safety",
    },
    {
      src: g6,
      caption: "Bertanya",
    },
  ];

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="PT Indotan Sumbawa Bangkit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "dark",
        }}
        {...rest}
      />
      <Parallax filter image={require("assets/img/gold.png")}>
        <div className={classes.container}>
          <GridContainer>
            <Hidden mdDown>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>PT Indotan Sumbawa Bangkit</h1>
                <h4>
                  PT. Indotan Sumbawa Bangkit holds an IUP Exploration covering
                  the Taliwang Gold Project which is a prospective gold, silver
                  and copper concession in Sumbawa, Indonesia.
                </h4>
              </GridItem>
            </Hidden>
            <Hidden lgUp>
              <GridItem xs={12} sm={12} md={6}>
                <h2 className={classes.title}>PT Indotan Sumbawa Bangkit</h2>
                <h4>
                  PT. Indotan Sumbawa Bangkit holds an IUP Exploration covering
                  the Taliwang Gold Project which is a prospective gold, silver
                  and copper concession in Sumbawa, Indonesia.
                </h4>
              </GridItem>
            </Hidden>
          </GridContainer>
        </div>
      </Parallax>

      <Hidden smDown>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {/* <SectionCarousel img={pix} /> */}
            <ProductSection />
            <ProjectSection />
            <SectionExamples />
            {/* <TeamSection /> */}
            {/* <SectionPills /> */}
            {/* <WorkSection /> */}
          </div>
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classNames(classes.main, classes.smRaised)}>
          <div className={classes.container}>
            {/* <SectionCarousel img={pix} /> */}
            <ProductSection />
            <ProjectSection />
            <SectionExamples />
            {/* <TeamSection /> */}
            {/* <SectionPills /> */}
            {/* <WorkSection /> */}
          </div>
        </div>
      </Hidden>

      <Footer />
    </div>
  );
}
