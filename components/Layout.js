import React from "react";
import Top from "./Top.js";

function Layout(props) {
  return (
    <>
      {props.children}
      <Top />
    </>
  );
}

export default Layout;
