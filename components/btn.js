// components/Btn.js
import React from "react";
import { withRouter } from "next/router";

// Obj styled
const BtnStyle = {
  width: "100px",
  height: "36px",
  border: "0px solid #fff",
  color: "#FFF",
  background: "#2980b9",
  cursor: "pointer"
};

const Btn = (
  { href, onClick, children, router } // prop is injected by withRouter HOC
) => (
  <span>
    <button
      onClick={onClick}
      style={{
        fontWeight: router.pathname === href ? "bold" : "",
        ...BtnStyle
      }}
    >
      {children}
    </button>
  </span>
);

export default withRouter(Btn);
