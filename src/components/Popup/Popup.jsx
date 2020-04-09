import React from "react";
import styles from "./Popup.module.scss";

const Popup = (props) => {
  const { selected, closePopup } = props;

  return (
    <section className={styles.popup}>
      <div className={styles.content}>
        <h2>
          {selected.Title} <span>({selected.Year})</span>
        </h2>
        <p className={styles.rating}>Rating: {selected.imdbRating}</p>
        <div className={styles.plot}>
          <img src={selected.Poster} />
          <p>{selected.Plot}</p>
        </div>
        <button className={styles.close} onClick={closePopup}>
          Close
        </button>
      </div>
    </section>
  );
};
export default Popup;
