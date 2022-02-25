import Main from "../components/Main/Main";
import "../css/Main.module.css";
import React from "react";
import { Redirect } from "../lib/redirect";

const Index = (props) => {
  return <div>
    <Main />
    <Redirect/>
  </div>
};

export default Index;