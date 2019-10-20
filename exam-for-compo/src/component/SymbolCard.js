import React from "react";
import styles from "./SymbolCard.module.scss";

export class SymbolCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.card}>
        <div className={styles.card_front}>{this.props.message}</div>
        <div className={styles.card_back}></div>
      </div>
    );
  }
}
