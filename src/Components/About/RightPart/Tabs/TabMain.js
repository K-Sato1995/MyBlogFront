import React from 'react';
import TabIntro from './TabIntro';
import TabWork from './TabWork';
import TabButton from './TabButton';
import TabContact from './TabContact';

class TabMain extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: 1
    }
    this.activeWork = this.activeWork.bind(this);
    this.activeIntro = this.activeIntro.bind(this);
    this.activeContact = this.activeContact.bind(this);
  }
  activeIntro () {
    this.setState ({ activeTab: 1 })
  }
  activeWork () {
    this.setState ({ activeTab: 2 })
  }
  activeContact() {
    this.setState ({activeTab: 3})
  }

  render() {
    let ActiveTab;
    if (this.state.activeTab === 1) {
      ActiveTab = <TabIntro />
    }else if (this.state.activeTab === 2) {
      ActiveTab = <TabWork />
    }else if (this.state.activeTab === 3) {
      ActiveTab = <TabContact />
    }

    return (
      <div>
        <h1>TabMain</h1>
        <TabButton changeTab = {this.activeIntro} name='About'/>
        <TabButton changeTab = {this.activeWork} name='Work'/>
        <TabButton changeTab = {this.activeContact} name='Contact'/>
        { ActiveTab }
      </div>
    )
  }
}

export default TabMain;
