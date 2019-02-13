import React from 'react';

class TabButton extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.changeTab}>{ this.props.name}</button>
      </div>
    )
  }
}

export default TabButton;
