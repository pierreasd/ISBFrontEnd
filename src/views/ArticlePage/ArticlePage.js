import React, { useState, useEffect } from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
// @material-ui/icons

// core components
import Header from "components/Header/Header.js"
import Footer from "components/Footer/Footer.js"
import Button from "components/CustomButtons/Button.js"
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import HeaderLinks from "components/Header/HeaderLinks.js"
import Parallax from "components/Parallax/Parallax.js"
import styles from "assets/jss/material-kit-react/views/articlePage.js"
import SectionCarousel from "views/Components/Sections/SectionCarousel"

// other dependencies
import axios from "axios";
import parse from "html-react-parser/dist/html-react-parser"
import ReactPlayer from "react-player"

// images for mock data
import g1 from "assets/img/g1.JPG"
import g2 from "assets/img/g2.JPG"

const useStyles = makeStyles(styles)

export default function ArticlePage(props) {
  window.scrollTo({ top: 0 })
  const classes = useStyles()
  const { ...rest } = props
  const params = props.match.params

  const [content, setContent] = useState({
    author: "",
    body: "",
    title: "",
    created_datetime: ""
  });

  function getData() {
    return axios.get("http://localhost:8080/getArticleDetails/" + `${params.id}`)
    .then((res) =>  {
      setContent(res.data.values[0]);
    }) 
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <div>
      <Header
        color="transparent"
        brand="PT INDOTAN SUMBAWA BANGKIT"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "dark",
        }}
        {...rest}
      />

      <Parallax small filter image={require("assets/img/gold.png")} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} lg={8}>
              <div className={classes.profile}>
                <div className={classes.title}>
                  <h3 className={classes.title}>{content.title} </h3>
                  <h6 className={classes.subtitle}>{content.author}</h6>
                  <h6 className={classes.subtitle}>
                    {content.created_datetime}
                  </h6>
                </div>
              </div>
            </GridItem>

            <GridItem xs={12} sm={12} md={6} lg={12}>
              {/* <SectionCarousel img={content.img} /> */}
            </GridItem>

            <GridItem xs={12} sm={12} md={6} lg={8}>
              <div className={classes.article}>
                <p>{parse(content.body)}</p>
              </div>
            </GridItem>
          </GridContainer>

          <div className={classes.space70} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
