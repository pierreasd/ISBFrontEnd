import { keys } from "@material-ui/core/styles/createBreakpoints";
import { title } from "assets/jss/material-kit-react.js";

const contactStyle = {
  section: {
    padding: "30px 10px 60px",
    textAlign: "center",
    backgroundColor: "#212121",
    borderRadius: "5px !important"
  },
  title: {
    ...title,
    marginBottom: "10px",
    marginTop: "10px",
    minHeight: "32px",
    textDecoration: "none",
    color: "#DEDEDE"
  },
  description: {
    color: "#777"
  },
  rock: {
    margin: "20px 0",
    borderRadius: "6px !important",
    maxWidth: "100%",
  }
};

export default contactStyle;
