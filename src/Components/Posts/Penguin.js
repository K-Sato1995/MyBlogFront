import React from 'react';

class Penguin extends React.Component {
  constructor() {
    super();
    this.state = {
      width: 300,
      height: 300,
      numOfPenguin: 1
    }
    this.makeItBigger = this.makeItBigger.bind(this);
    this.makeItSmaller = this.makeItSmaller.bind(this);
  }

  makeItBigger(){
    console.log(this.state.width)
    this.setState({
      width: this.state.width + 10,
      height: this.state.height + 10
    })
  }

  makeItSmaller() {
    console.log(this.state.width)
    this.setState({
      width: this.state.width - 100,
      height: this.state.height - 100
    })
  }

  render() {
    const penguin = {
      width: `${this.state.width}px`,
      height: `${this.state.height}px`
    }
    return (
      <div>
        <img alt={'PENGUIN'} src={require('./images/penguin.png')} style={penguin}/>
        {/* <button onClick={this.makeItBigger}>+</button>
        <button onClick={this.makeItSmaller}>-</button> */}
      </div>
    )
  }
}

export default Penguin;
