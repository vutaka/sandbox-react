import React from "react";
import styles from "./SymbolCard.module.scss";
import classNames from "classnames"

export class SymbolCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  reverse = () => {
    this.setState({isOpen: !this.state.isOpen})
  }
  render() {
    return (
      <div
        className={classNames(styles.card, { [styles.open]: this.state.isOpen })}
        onClick={this.reverse} >
        <div className={styles.front}>
          {this.props.message}
        </div>
        <div className={styles.back}></div>
      </div>
    );
  }
}
