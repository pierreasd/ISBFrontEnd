import React, { useState, useEffect } from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"

// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles"
// @material-ui/icons

// Text editor
import { CKEditor } from "@ckeditor/ckeditor5-react"
import ClassicEditor from "@ckeditor/ckeditor5-build-classic"

// core components
import Header from "components/Header/Header.js"
import Footer from "components/Footer/Footer.js"
import Button from "components/CustomButtons/Button.js"
import GridContainer from "components/Grid/GridContainer.js"
import GridItem from "components/Grid/GridItem.js"
import HeaderLinks from "components/Header/HeaderLinks.js"
import CustomInput from "components/CustomInput/CustomInput"

import styles from "assets/jss/material-kit-react/views/adminPage.js"
import "./config.css"
// import { DesktopWindows } from "@material-ui/icons"

const useStyles = makeStyles(styles)

export default function AdminPage(props) {
  const classes = useStyles()
  const history = useHistory()
  const { ...rest } = props
  const login =
    localStorage.getItem("login") == null
      ? null
      : JSON.parse(localStorage.getItem("login"))

  axios.defaults.headers.common = {
    Authorization: `Bearer ${login.accessToken}`,
  }

  const [myArticles, setMyArticles] = useState([])

  const [imgUpload, setImgUpload] = useState([
    {
      img: "",
    },
  ])

  const [articleForm, setArticleForm] = useState({
    files: "",
    title: "",
    body: "",
    author: login.author,
  })

  const handleFormChange = (e) => {
    setArticleForm({
      ...articleForm,
      [e.target.name]: e.target.value,
    })
  }

  const getArticle = () => {
    axios
      .get(`http://${process.env.REACT_APP_API_URL}/getMyArticles`)
      .then((res) => {
        if (res.status === 200) setMyArticles(res.data.values)
        else window.location.reload()
      })
      .catch((res) => {
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: false,
            accessToken: null,
          })
        )
      })
  }

  const submitArticle = () => {
    axios.post(`http://${process.env.REACT_APP_API_URL}/postArticle`, articleForm).then((res) => {
      if (res.data.status === 200) {
        alert("Berhasil menambahkan artikel")
        window.location.reload()
      }
    })
  }

  const logout = () => {
    axios
      .delete(`http://${process.env.REACT_APP_API_URL}/users/logout`, {
        token: login.refreshToken,
      })
      .then(history.push("/login-page"))
  }

  window.scrollTo({ top: 0 })

  useEffect(() => {
    getArticle()
  }, [])

  return (
    <div>
      <Header
        color="dark"
        brand={
          login.login ? (
            <div>
              Halo, {login.author}{" "}
              <Link onClick={() => logout()}>(logout)</Link>
            </div>
          ) : null
        }
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
                      onChange={(res, editor) => {
                        const data = editor.getData()

                        setArticleForm({
                          ...articleForm,
                          body: data,
                        })

                        console.log(data)
                      }}
                      config={{
                        ckfinder: {
                          uploadUrl: "http://localhost:8080/uploadImages"
                        },
                        image: {
                          styles: [
                              'alignLeft', 'alignCenter', 'alignRight'
                          ],
                        }
                      }}
                    />
                  </GridItem>

                  <GridItem xs={12} sm={4} md={4} lg={3}>
                    <Button
                      color="warning"
                      disabled={
                        articleForm.title === undefined ||
                        articleForm.title === "" ||
                        articleForm.body === undefined ||
                        articleForm.body === ""
                      }
                      onClick={() => submitArticle()}
                    >
                      Tambahkan Artikel
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
  )
}
