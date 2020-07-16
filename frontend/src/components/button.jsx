import React from "react";
import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";

export default withStyles({
    background: "linear-gradient(135deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 500,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
})(Button);