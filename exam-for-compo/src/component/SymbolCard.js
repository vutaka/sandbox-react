import React from "react";

export class SymbolCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>{this.props.message}</div>
      </div>
    );
  }
}
