import React from "react";
import styles from "./Results.module.scss";
import Result from "../Result";

const Results = (props) => {
  const { results, openPopup } = props;

  return (
    <>
      <section className={styles.results}>
        {results.map((result) => (
          <Result key={result.imdbID} result={result} openPopup={openPopup} />
        ))}
      </section>
    </>
  );
};

export default Results;
