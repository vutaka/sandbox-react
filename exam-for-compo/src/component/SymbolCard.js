import React from "react";
import styles from "./SymbolCard.module.scss";

export class SymbolCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.symbol_card}>
        <div>{this.props.message}</div>
      </div>
    );
  }
}
