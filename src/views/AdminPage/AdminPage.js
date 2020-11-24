import React from "react";
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

import styles from "assets/jss/material-kit-react/views/adminPage.js";
import CustomInput from "components/CustomInput/CustomInput";

const useStyles = makeStyles(styles);

export default function AdminPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

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
                    id="regular"
                    inputProps={{
                      placeholder: "Judul",
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    outlined
                  />
                </GridItem>

                <GridItem xs={12} sm={12} md={12} lg={12}>
                  <CustomInput
                    id="regular"
                    inputProps={{
                      placeholder: "Text",
                    }}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    multiline
                    outlined
                  />
                </GridItem>

                <GridItem xs={12} sm={4} md={4} lg={3}>
                  <Button color="primary">Submit</Button>
                </GridItem>
              </GridContainer>
            </GridItem>

            <GridItem xs={12} sm={12} md={4} lg={4}>
              <GridContainer justify="flex-start">
                <GridItem xs={12} sm={12} md={12} lg={12}>

                  <h3 className={classes.title}>Artikel Anda</h3>
                  
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
