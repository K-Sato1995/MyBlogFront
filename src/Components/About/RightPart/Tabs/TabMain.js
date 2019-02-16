import React from 'react';
import TabIntro from './TabIntro';
import TabWork from './TabWork/TabWork';
import TabButton from './TabButton';
import TabContact from './TabContact/TabContact';
import TabSkills from './TabSkills';
import TabInterests from './TabInterests';

class TabMain extends React.Component {
  constructor() {
    super()
    this.state = {
      activeTab: 1
    }
    this.activeWork = this.activeWork.bind(this);
    this.activeIntro = this.activeIntro.bind(this);
    this.activeContact = this.activeContact.bind(this);
    this.activeSkills = this.activeSkills.bind(this);
    this.activeInterests = this.activeInterests.bind(this);
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
  activeSkills(){
    this.setState ({activeTab: 4})
  }
  activeInterests(){
    this.setState ({activeTab: 5})
  }

  render() {
    let ActiveTab;
    if (this.state.activeTab === 1) {
      ActiveTab = <TabWork />
    }else if (this.state.activeTab === 2) {
      ActiveTab = <TabIntro />
    }else if (this.state.activeTab === 3) {
      ActiveTab = <TabContact />
    }else if(this.state.activeTab === 4) {
      ActiveTab = <TabSkills />
    }else if(this.state.activeTab === 5) {
      ActiveTab = <TabInterests />
    }

    return (
      <div>
        <ul className='tab-button-list'>
          <li><TabButton changeTab = {this.activeWork} name='Projects' activeTab={this.state.activeTab} value={1}/></li>
          <li><TabButton changeTab = {this.activeIntro} name='Self-Intro' activeTab={this.state.activeTab} value={2}/></li>
          <li><TabButton changeTab = {this.activeContact} name='Contact Me' activeTab={this.state.activeTab} value={3}/></li>
          <li><TabButton changeTab = {this.activeSkills} name='Skills' activeTab={this.state.activeTab} value={4}/></li>
          <li><TabButton changeTab = {this.activeInterests} name='Interests' activeTab={this.state.activeTab} value={5}/></li>
        </ul>
        { ActiveTab }
      </div>
    )
  }
}

export default TabMain;
