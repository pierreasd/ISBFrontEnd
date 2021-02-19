import React, { useState, useEffect } from "react";
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
import styles from "assets/jss/material-kit-react/views/articlePage.js";

// other dependencies
import axios from "axios";
import parse from "html-react-parser/dist/html-react-parser";
import moment from "moment";
import { Hidden } from "@material-ui/core";

// custom css for article after render
import "./article.css"

const useStyles = makeStyles(styles);

export default function ArticlePage(props) {
  window.scrollTo({ top: 0 });
  const classes = useStyles();
  const { ...rest } = props;
  const params = props.match.params;

  const [content, setContent] = useState({
    author: "",
    body: "",
    title: "",
    created_datetime: "",
  });

  function getData() {
    return axios
      .get(
        `http://${process.env.REACT_APP_API_URL}/getArticleDetails/` +
          `${params.id}`
      )
      .then((res) => {
        setContent(res.data.values[0]);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Header
        color="transparent"
        brand="PT Indotan Sumbawa Bangkit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark",
        }}
        {...rest}
      />

      <Parallax small filter image={require("assets/img/gold.png")} />

      <Hidden smDown>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={8} md={8} lg={8}>
                <div className={classes.profile}>
                  <div className={classes.title}>
                    <h3 className={classes.title}>{content.title}</h3>
                    <h6 className={classes.subtitle}>{content.author}</h6>
                    <h6 className={classes.subtitle}>
                      {moment(content.created_datetime).format("DD MMMM YYYY")}
                    </h6>
                  </div>
                </div>
              </GridItem>

              <GridItem xs={12} sm={8} md={8} lg={8}>
                <div className={classes.article}>
                  <p>{parse(content.body)}</p>
                </div>
              </GridItem>
            </GridContainer>

            <div className={classes.space70} />
          </div>
        </div>
      </Hidden>

      <Hidden mdUp>
        <div className={classNames(classes.main, classes.smRaised)}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={10} lg={10}>
                <div className={classes.profile}>
                  <div className={classes.title}>
                    <h3 className={classes.title}>{content.title}</h3>
                    <h6 className={classes.subtitle}>{content.author}</h6>
                    <h6 className={classes.subtitle}>
                      {moment(content.created_datetime).format("DD MMMM YYYY")}
                    </h6>
                  </div>
                </div>
              </GridItem>

              <GridItem xs={12} sm={12} md={10} lg={10}>
                <div className={classes.article}>
                  <p>{parse(content.body)}</p>
                </div>
              </GridItem>
            </GridContainer>

            <div className={classes.space70} />
          </div>
        </div>
      </Hidden>

      <Footer />
    </div>
  );
}
