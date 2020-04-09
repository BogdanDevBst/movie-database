import React from "react";
import styles from "./Result.module.scss";

const Result = (props) => {
  const { result, openPopup } = props;

  return (
    <>
      <div className={styles.result} onClick={() => openPopup(result.imdbID)}>
        <img src={result.Poster} alt="" />
        <h3>{result.Title}</h3>
      </div>
    </>
  );
};

export default Result;
