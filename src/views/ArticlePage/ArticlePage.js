import React, { useState, useEffect } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "assets/jss/material-kit-react/views/articlePage.js";
import SectionCarousel from "views/Components/Sections/SectionCarousel";

// other dependencies
import axios from "axios";
import parse from "html-react-parser/dist/html-react-parser";
import ReactPlayer from "react-player";

// images for mock data
import g1 from "assets/img/g1.JPG";
import g2 from "assets/img/g2.JPG";

const useStyles = makeStyles(styles);

export default function ArticlePage(props) {
  window.scrollTo({ top: 0 });
  const classes = useStyles();
  const { ...rest } = props;
  const params = props.match.params;

  // const content = {
  //   id: `${params.id}`,
  //   title:
  //     "INDONESIA ALLOWS NEWMONT TO EXPORT 350,000 TONS OF COPPER CONCENTRATE OVER THREE YEARS",
  //   body:
  //     "JAKARTA, Indonesia–Indonesia’s government has given a permit to the local unit of U.S. mining company Newmont Mining Corp. to export a total of 350,000 metric tons of copper concentrate within three years, a government official said Tuesday. For this year, they plan to (export) 160,000 tons,” said Raden Sukhyar, director general of minerals and coal at the Ministry of Energy and Mineral Resources. “We will increase the quota depending on their seriousness in building a smelter.” PT Newmont Nusa Tenggara said Monday it expects to resume exporting copper concentrate from Indonesia later this week. The company said it had received a permit after a nine-month halt following the country’s introduction of new export rules and a disagreement over new taxes. Earlier this month, the company agreed to pay export duties of 7.5% on copper concentrate, and pay higher royalties of 4% for copper, 3.75% for gold, and 3.25% for silver. Newmont will also provide a $25 million assurance bond to demonstrate its support for smelter development in Indonesia. The country is pushing companies to refine mineral products domestically, part of a drive to build up the resource-rich nation’s “value-added” economy. he company declined to provide a forecast for its exports or say when operations would resume at full capacity, but said all employees would be recalled within eight weeks. Prior to the introduction of the export rules in January, the company had forecast copper concentrate output of up to 125,000 metric tons from its Batu Hijau copper and gold mine in eastern Indonesia this year.",
  //   author: "Pierre G",
  //   created_datetime: "25 November 2011 14:10",
  //   img: [
  //     {
  //       src: g1,
  //       caption: "Ini Caption 1",
  //     },
  //     {
  //       src: g2,
  //       caption: "Ini Caption 2",
  //     },
  //   ],
  // };

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
    });
  }

  useEffect(() => {
    getData();
  }, []);

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
                <p>{console.log(content.body)}</p>
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
