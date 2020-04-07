import React from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { handleInput } = props;

  return (
    <>
      <section className={styles.searchboxWrap}>
        <input
          type="search"
          placeholder="Search for a movie..."
          className={styles.searchbox}
          onChange={handleInput}
        />
      </section>
    </>
  );
};

export default Search;
