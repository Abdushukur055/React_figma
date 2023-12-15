import React, { Component } from "react";
// import Header from "./Component/Header/header";
// import Main from "./Component/Main/main"
import Header from "../Header/header";
import Main from "../Main/main";
import Section from "../section/section";
import Finish from "../Finish section/finish";
import Footer from "../Footer/footer";

class Folders extends Component {
  state = {};

  render() {
    return (
      <h1>
        <Header />
        <Main />
        <Section/>
        <Finish/>
        <Footer/>
      </h1>
    );
  }
}

export default Folders;
