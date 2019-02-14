import React from 'react';
import TabIntro from './TabIntro';
import TabWork from './TabWork/TabWork';
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
  activeWork () {
    this.setState ({ activeTab: 1 })
  }
  activeIntro () {
    this.setState ({ activeTab: 2 })
  }
  activeContact() {
    this.setState ({activeTab: 3})
  }

  render() {
    let ActiveTab;
    if (this.state.activeTab === 1) {
      ActiveTab = <TabWork />
    }else if (this.state.activeTab === 2) {
      ActiveTab = <TabIntro />
    }else if (this.state.activeTab === 3) {
      ActiveTab = <TabContact />
    }

    return (
      <div>
        <ul className='tab-button-list'>
          <li><TabButton changeTab = {this.activeWork} name='Work' activeTab={this.state.activeTab} value={1}/></li>
          <li><TabButton changeTab = {this.activeIntro} name='About' activeTab={this.state.activeTab} value={2}/></li>
          <li><TabButton changeTab = {this.activeContact} name='Contact' activeTab={this.state.activeTab} value={3}/></li>
        </ul>
        { ActiveTab }
      </div>
    )
  }
}

export default TabMain;
