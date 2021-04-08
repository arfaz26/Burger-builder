import React from "react";
import classes from "./Order.module.css";

const order = () => {
  return (
    <div className={classes.Order}>
      <p>Ingredients:</p>
      <p>
        Price <strong>USD 6.0</strong>
      </p>
    </div>
  );
};

export default order;
