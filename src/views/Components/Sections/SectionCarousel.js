import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const { img } = props;

  // const listItem = data.map((dummy) => (
  //   <div>
  //     <img src={dummy.img} alt="First slide" className="slick-image" />
  //     <div className="slick-caption">
  //       <h4>{dummy.title}</h4>
  //     </div>
  //   </div>
  // ))

  const listImg = img.map((data) => (
    <div>
      <img src={data.src} alt="First slide" className="slick-image" />
      <div className="slick-caption">
        <h4>{data.caption}</h4>
      </div>
    </div>
  ));

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {listImg}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}

SectionCarousel.propTypes = {
  img: PropTypes.array,
};
