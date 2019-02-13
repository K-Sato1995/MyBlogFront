import React from 'react';
import '../../../Design/About/AboutMain.scss';
import TabMain from './Tabs/TabMain';

class Container extends React.Component {
  render() {
    return (
      <div className='about-right-container'>
        <h2>Right</h2>
        <TabMain />
      </div>
    )
  }
}

export default Container;
