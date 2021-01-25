import React, { useState, useEffect } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import g1 from "assets/img/g1.JPG";
import g2 from "assets/img/g2.JPG";
import g3 from "assets/img/g3.JPG";
import g4 from "assets/img/g4.JPG";
import g5 from "assets/img/g5.JPG";
import g6 from "assets/img/g6.JPG";

// other dependencies
import axios from "axios";

const articles = [
  {
    id: "1",
    title: "Pak Robert Sedang Meeting",
    img: g1
  },
  {
    id: "2",
    title: "Pak Robert Sedang Duduk",
    img: g2
  },
  {
    id: "3",
    title: "Pak Ilham dengan Adan dan Ahmad",
    img: g3
  },
  {
    id: "4",
    title: "Hutan",
    img: g4
  },
  {
    id: "5",
    title: "Tim Rescue NHM",
    img: g5
  },
  {
    id: "6",
    title: "Press Conference",
    img: g6
  },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();

  const [articles, setArticles] = useState([]);

  const truncateTitle = (title) => {
    var string = title
    if(string.length > 20){
      string = string.substring(0, 19) + " ..."
    }

    return string
  }
  const getData = () => {
    return axios.get("http://localhost:8080/getArticles/")
    .then((res) =>  {
      setArticles(res.data.values);
    });
  }

  useEffect(() => {
    getData();
  }, []);
  
  const listItem = articles.map((data) => (
    <GridItem xs={12} sm={4} md={4}>
      <Link to={`/article/${data.id}`}>
        {/* <img
          src={data.img}
          alt="..."
          className={
            classes.imgRaised +
            " " +
            classes.imgRounded +
            " " +
            classes.imgFluid
          }
        /> */}
        <Button color="gray" size="lg" simple fullWidth>
          {truncateTitle(data.title)}
        </Button>
      </Link>
    </GridItem>
  ));

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Latest Articles</h2>
          </GridItem>
        </GridContainer>

        <GridContainer justify="flex-start">{listItem}</GridContainer>
      </div>
    </div>
  );
}
