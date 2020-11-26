import React, { useState } from "react";
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
import CustomInput from "components/CustomInput/CustomInput";

import styles from "assets/jss/material-kit-react/views/adminPage.js";

const useStyles = makeStyles(styles);

export default function AdminPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  const [articleForm, setArticleForm] = useState({});

  const handleFormChange = (e) => {
    console.log(e.target.name)
    setArticleForm({
      ...articleForm,
      [e.target.name]: e.target.name !== "img" ? e.target.value : e.target.files,
    });
  };

  window.scrollTo({ top: 0 });

  return (
    <div>
      <Header
        color="dark"
        brand="Halaman Admin"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />

      <div className={classes.space160} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="flex-start" direction="row">
            <GridItem xs={12} sm={12} md={8} lg={8}>
              <GridContainer direction="column">
                <GridItem xs={12} sm={12} md={8} lg={8}>
                  <h3 className={classes.title}>Tulis Artikel</h3>
                </GridItem>

                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <CustomInput
                    id="title"
                    inputProps={{
                      placeholder: "Judul",
                      name: "title",
                      onChange: handleFormChange,
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    outlined
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <CustomInput
                    id="body"
                    inputProps={{
                      placeholder: "Text",
                      name: "body",
                      onChange: handleFormChange,
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    multiline
                    outlined
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={6} lg={4}>
                  {/* <CustomInput
                    id="img"
                    type="file"
                    inputProps={{
                      placeholder: "Upload",
                      name: "img",
                      onChange: handleFormChange
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    outlined
                  /> */}
                  <input
                    id="img"
                    name="img"
                    accept="image/*"
                    className={classes.input}
                    // style={{ display: "none" }}
                    id="raised-button-file"
                    multiple
                    type="file"
                    onChange={handleFormChange}
                  />

                  <p>Upload gambar max. 1MB</p>
                </GridItem>

                <GridItem xs={12} sm={4} md={4} lg={3}>
                  <Button
                    color="primary"
                    // disabled={
                    //   articleForm.title === undefined || articleForm.title === ""
                    //   || articleForm.body === undefined || articleForm.body === ""
                    //   || articleForm.img === undefined || articleForm.body === ""
                    // }
                    onClick={() => console.log(articleForm)}
                  >
                    Submit
                  </Button>
                </GridItem>
              </GridContainer>
            </GridItem>

            <GridItem xs={12} sm={12} md={4} lg={4}>
              <GridContainer justify="flex-start">
                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <h3 className={classes.title}>Artikel Anda</h3>
                </GridItem>

                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <p className={classes.articles}>INDOTAN PTISB</p>
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
        </div>
        <div className={classes.space50} />
      </div>
      <Footer />
    </div>
  );
}
