import React, {useState} from "react"
import styles from "./SymbolCard.module.scss";
import classNames from "classnames"

export function SymbolCardForFunctional(props) {
  const [isOpen, setIsOpen] = useState(false);

  return(
      <div
        className={classNames(styles.card, { [styles.open]: isOpen })}
        onClick={() => setIsOpen(!isOpen)} >
        <div className={styles.front}>
          {props.message}
        </div>
        <div className={styles.back}></div>
      </div>
  )
}