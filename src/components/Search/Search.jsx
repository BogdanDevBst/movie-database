import React from "react";
import styles from "./Search.module.scss";

const Search = (props) => {
  const { handleInput, search } = props;

  return (
    <>
      <section className={styles.searchboxWrap}>
        <input
          type="search"
          placeholder="Search for a movie..."
          className={styles.searchbox}
          onChange={handleInput}
          onKeyPress={search}
        />
      </section>
    </>
  );
};

export default Search;
