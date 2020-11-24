import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";

import studio1 from "assets/img/examples/studio-1.jpg";
import studio2 from "assets/img/examples/studio-2.jpg";
import studio3 from "assets/img/examples/studio-3.jpg";
import studio4 from "assets/img/examples/studio-4.jpg";
import studio5 from "assets/img/examples/studio-5.jpg";
import work1 from "assets/img/examples/olu-eletu.jpg";
import work2 from "assets/img/examples/clem-onojeghuo.jpg";
import work3 from "assets/img/examples/cynthia-del-rio.jpg";
import work4 from "assets/img/examples/mariya-georgieva.jpg";
import work5 from "assets/img/examples/clem-onojegaw.jpg";

import styles from "assets/jss/material-kit-react/views/articlePage.js";

const useStyles = makeStyles(styles);

export default function ArticlePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} lg={12}>
              <div className={classes.profile}>
                <div className={classes.title}>
                  <h3 className={classes.title}>Article Title</h3>
                  <h6>By Pierre Gerungan</h6>
                </div>
              </div>
            </GridItem>
          </GridContainer>

          <div className={classes.article}>
            <p>
              JAKARTA, Indonesia–Indonesia’s government has given a permit to
              the local unit of U.S. mining company Newmont Mining Corp. to
              export a total of 350,000 metric tons of copper concentrate within
              three years, a government official said Tuesday. “For this year,
              they plan to (export) 160,000 tons,” said Raden Sukhyar, director
              general of minerals and coal at the Ministry of Energy and Mineral
              Resources. “We will increase the quota depending on their
              seriousness in building a smelter.” PT Newmont Nusa Tenggara said
              Monday it expects to resume exporting copper concentrate from
              Indonesia later this week. The company said it had received a
              permit after a nine-month halt following the country’s
              introduction of new export rules and a disagreement over new
              taxes. Earlier this month, the company agreed to pay export duties
              of 7.5% on copper concentrate, and pay higher royalties of 4% for
              copper, 3.75% for gold, and 3.25% for silver. Newmont will also
              provide a $25 million assurance bond to demonstrate its support
              for smelter development in Indonesia. The country is pushing
              companies to refine mineral products domestically, part of a drive
              to build up the resource-rich nation’s “value-added” economy. The
              company declined to provide a forecast for its exports or say when
              operations would resume at full capacity, but said all employees
              would be recalled within eight weeks. Prior to the introduction of
              the export rules in January, the company had forecast copper
              concentrate output of up to 125,000 metric tons from its Batu
              Hijau copper and gold mine in eastern Indonesia this year.
            </p>
          </div>

          <div className={classes.space70} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
