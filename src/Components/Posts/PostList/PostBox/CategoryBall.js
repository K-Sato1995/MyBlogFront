import React from 'react';
import '../../../../Design/Posts/PostList/PostBox.scss';

class CategoryBall extends React.Component {
  render() {
    let category;
    if(this.props.category === 1) {
      category = 'Ruby';
    }else if(this.props.category === 2){
      category = 'Go';
    }else if(this.props.category === 3){
      category = 'JavaScript';
    }else if(this.props.category === 5){
      category = 'React';
    }else if(this.props.category === 6){
      category = 'Rails';
    }else if(this.props.category === 7){
      category = 'Others';
    }else if(this.props.category === 8){
      category = 'Life';
    }

    return (
      <div className={category}>
      </div>
    )
  }
}

export default CategoryBall;
