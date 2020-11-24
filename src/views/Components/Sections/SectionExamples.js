import React from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
// @material-ui/icons
import Close from "@material-ui/icons/Close";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import SectionCarousel from "./SectionCarousel";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";
import g1 from "assets/img/g1.JPG";
import g2 from "assets/img/g2.JPG";
import g3 from "assets/img/g3.JPG";
import g4 from "assets/img/g4.JPG";
import g5 from "assets/img/g5.JPG";
import g6 from "assets/img/g6.JPG";
import SectionModal from "./SectionModal";

const data = [
  {
    id: "1",
    title: "Pak Robert Sedang Meeting",
    img: g1,
    article: "ini artikel11111",
  },
  {
    id: "2",
    title: "Pak Robert Sedang Duduk",
    img: g2,
    article: "ini artikel2222",
  },
  {
    id: "3",
    title: "Pak Ilham dengan Adan dan Ahmad",
    img: g3,
    article: "ini artikel333",
  },
  {
    id: "4",
    title: "Hutan",
    img: g4,
    article: "ini artikel4444",
  },
  {
    id: "5",
    title: "Tim Rescue NHM",
    img: g5,
    article: "ini artikel5555",
  },
  // {
  //   id: "6",
  //   title: "Press Conference",
  //   img: g6,
  //   article: "ini artikel123123",
  // },
];

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

Transition.displayName = "Transition";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  const [classicModal, setClassicModal] = React.useState(false);

  const listItem = data.map((dummy) => (
    <GridItem xs={12} sm={4} md={4}>
      <img
        src={dummy.img}
        alt="..."
        className={
          classes.imgRaised + " " + classes.imgRounded + " " + classes.imgFluid
        }
      />
      <Button
        color="gray"
        size="lg"
        simple
        onClick={() => setClassicModal(true)}
      >
        {dummy.title}
      </Button>

      <Dialog
        classes={{
          root: classes.center,
          paper: classes.modal,
        }}
        open={classicModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setClassicModal(false)}
        aria-labelledby="classic-modal-slide-title"
        aria-describedby="classic-modal-slide-description"
      >
        <DialogTitle
          id="classic-modal-slide-title"
          disableTypography
          className={classes.modalHeader}
        >
          <IconButton
            className={classes.modalCloseButton}
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={() => setClassicModal(false)}
          >
            <Close className={classes.modalClose} />
          </IconButton>
          {/* <h4 className={classes.modalTitle}>Modal title</h4> */}
        </DialogTitle>

        <DialogContent
          id="classic-modal-slide-description"
          className={classes.modalBody}
        >
          <SectionCarousel />
          {/* article goes here */}
          <p>{dummy.article}</p>
        </DialogContent>

        <DialogActions className={classes.modalFooter}>
          <Button onClick={() => setClassicModal(false)} color="danger" simple>
            Tutup
          </Button>
        </DialogActions>
      </Dialog>
    </GridItem>
  ));

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Articles</h2>
          </GridItem>
        </GridContainer>

        <GridContainer justify="flex-start">{listItem}</GridContainer>
      </div>
    </div>
  );
}
