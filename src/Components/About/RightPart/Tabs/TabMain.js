import React from 'react';
import TabIntro from './TabIntro';
import TabWork from './TabWork';
import TabButton from './TabButton';

class TabMain extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: 1
    }
    this.activeWork = this.activeWork.bind(this);
    this.activeIntro = this.activeIntro.bind(this);
  }
  activeIntro () {
    this.setState ({ activeTab: 1 })
  }
  activeWork () {
    this.setState ({ activeTab: 2 })
  }
  render() {
    let ActiveTab;
    if (this.state.activeTab === 1) {
      ActiveTab = <TabIntro />
    }else if (this.state.activeTab === 2) {
      ActiveTab = <TabWork />
    }

    return (
      <div>
        <h1>TabMain</h1>
        <TabButton changeTab = {this.activeIntro} name='About'/>
        <TabButton changeTab = {this.activeWork} name='Work'/>
        { ActiveTab }
      </div>
    )
  }
}

export default TabMain;
