import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import g1 from "assets/img/g1.JPG";
import g2 from "assets/img/g2.JPG";
import g3 from "assets/img/g3.JPG";
import g4 from "assets/img/g4.JPG";
import g5 from "assets/img/g5.JPG";
import g6 from "assets/img/g6.JPG";


import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const data = [{
    id: '1',
    title: 'Pak Robert Sedang Meeting',
    img: g1
  },
  {
    id: '2',
    title: 'Pak Robert Sedang Duduk',
    img: g2
  },
  {
    id: '3',
    title: 'Pak Ilham dengan Adan dan Ahmad',
    img: g3
  },
  {
    id: '4',
    title: 'Hutan',
    img: g4
  },
  {
    id: '5',
    title: 'Tim Rescue NHM',
    img: g5
  },
  {
    id: '6',
    title: 'Press Conference',
    img: g6
  },
];

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };

  const listItem = data.map((dummy) => 
    <div>
      <img src={dummy.img} alt="First slide" className="slick-image" />
      <div className="slick-caption">
        <h4>
          {dummy.title}
        </h4>
      </div>
    </div>
  );

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {listItem}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
