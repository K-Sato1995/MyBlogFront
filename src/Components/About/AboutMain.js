import React from 'react';
import LeftContainer from './LeftPart/Container';
import RightContainer from './RightPart/Container';
import '../../Design/About/AboutMain.scss';

class AboutMain extends React.Component {
  render() {
    return (
      <div className='about-main-box clearfix'>
        <LeftContainer />
        <RightContainer />
      </div>
    )
  }
}

export default AboutMain;
