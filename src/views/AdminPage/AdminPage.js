import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// Text editor
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import CustomInput from "components/CustomInput/CustomInput";

import styles from "assets/jss/material-kit-react/views/adminPage.js";
import "./config.css"

const useStyles = makeStyles(styles);

export default function AdminPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const { ...rest } = props;
  const login =
    localStorage.getItem("login") == null
      ? null
      : JSON.parse(localStorage.getItem("login"));
  axios.defaults.headers.common = {
    Authorization: `Bearer ${login.accessToken}`,
  };

  const [myArticles, setMyArticles] = useState([]);

  const [articleForm, setArticleForm] = useState({
    title: "",
    body: "",
    author: login.author,
  });
  // const [imageUpload, setImageUpload] = useState({
  //   img_upload: [],
  // });

  const handleFormChange = (e) => {
    setArticleForm({
      ...articleForm,
      [e.target.name]: e.target.value,
    });
  };

  // const handleImageUpload = (e) => {
  //   // for (var i of e.target.files) {
  //   //   setImageUpload(e.target.files);
  //   // }

  //   setImageUpload({
  //     ...imageUpload,
  //     img_upload: [...e.target.files],
  //   });
  // };

  const getArticle = () => {
    axios
      .get("http://localhost:8080/getMyArticles")
      .then((res) => {
        if (res.status === 200) setMyArticles(res.data.values);
      })
      .catch((res) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: false,
            accessToken: null,
          })
        );
      });
  };

  const submitArticle = () => {
    // e.preventDefault();
    // const data = new FormData();

    // console.log(imageUpload.img_upload);
    // data.append("img_upload", imageUpload.img_upload[0]);
    // data.append("article_title", articleForm.title);
    // data.append("article_body", articleForm.body);

    // axios
    //   .post("https://httpbin.org/anything", data)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    // axios.post(`http://localhost:8080/uploadImage`, data);

    // For test Purposes
    // console.log(articleForm);
    axios.post(`http://localhost:8080/postArticle`, articleForm);
  };

  const logout = () => {
    axios
      .delete(`http://localhost:8080/users/logout`, {
        token: login.refreshToken,
      })
      .then(history.push("/login-page"));
  };

  window.scrollTo({ top: 0 });

  useEffect(() => {
    getArticle();
  }, []);

  return (
    <div>
      <Header
        color="dark"
        brand={login.login ? `Hello, ${login.author}` : null}
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />

      <div className={classes.space160} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {login.login === null || login.login === false ? (
            <div>
              <h3 className={classes.title}>
                Your session has expired, please{" "}
                <Link to="/login-page/">login</Link> again.
              </h3>
            </div>
          ) : (
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
                    <CKEditor
                      editor={ClassicEditor}
                      data={articleForm.body}
                      config={{
                        height: "500px"
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        setArticleForm({
                          ...articleForm,
                          body: data,
                        });
                      }}
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
                    {/* <form>
                    <input
                      id="img"
                      type="file"
                      name="img_upload"
                      accept="image/*"
                      className={classes.input}
                      // style={{ display: "none" }}
                      id="raised-button-file"
                      onChange={handleImageUpload}
                    />
                  </form> */}

                    <p>Upload gambar max. 1MB</p>
                  </GridItem>

                  <GridItem xs={12} sm={4} md={4} lg={3}>
                    <Button
                      color="primary"
                      // disabled={
                      //   articleForm.title === undefined
                      //   || articleForm.title === ""
                      //   || articleForm.body === undefined
                      //   || articleForm.body === ""
                      //   || imageUpload.img_upload.length === 0
                      // }
                      onClick={() => submitArticle()}
                    >
                      Submit
                    </Button>
                  </GridItem>

                  <GridItem xs={12} sm={4} md={4} lg={3}>
                    <Button
                      color="primary"
                      // disabled={
                      //   articleForm.title === undefined
                      //   || articleForm.title === ""
                      //   || articleForm.body === undefined
                      //   || articleForm.body === ""
                      //   || imageUpload.img_upload.length === 0
                      // }
                      onClick={() => logout()}
                    >
                      Logout
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
                    {myArticles.length === 0 ? (
                      <p className={classes.articles}>
                        Anda belum memiliki artikel.
                      </p>
                    ) : (
                      myArticles.map((myArticle) => (
                        <Link to={`/article/${myArticle.id}`}>
                          <p className={classes.articles}>{myArticle.title}</p>
                        </Link>
                      ))
                    )}
                  </GridItem>
                </GridContainer>
              </GridItem>
            </GridContainer>
          )}
        </div>

        <div className={classes.space50} />
      </div>
      <Footer />
    </div>
  );
}
