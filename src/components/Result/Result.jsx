import React from "react";
import styles from "./Result.module.scss";

const Result = (props) => {
  const { result } = props;

  return (
    <>
      <div className={styles.result}>
        <h2>{result.Title}</h2>
        <h3>{result.Year}</h3>
        <img src={result.Poster} alt="" />
      </div>
    </>
  );
};

export default Result;
