import "../css/Main.module.css";
import React from "react";
import Main from "../components/Main/Main";
import { Redirect } from "../lib/redirect";

const Index = (props) => {
  return <><Main />
    <Redirect /></>
};

export default Index;