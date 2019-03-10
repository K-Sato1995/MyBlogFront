import React from "react";

class TabButton extends React.Component {
  render() {
    const TabButton =
      this.props.activeTab === this.props.value ? (
        <button onClick={this.props.changeTab} className="tab-button-active">
          {this.props.name}
        </button>
      ) : (
        <button onClick={this.props.changeTab} className="tab-button">
          {this.props.name}
        </button>
      );

    return <div>{TabButton}</div>;
  }
}

export default TabButton;
