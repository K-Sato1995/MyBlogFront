import React from 'react';
import '../../../Design/PostList.scss';
import { Link } from 'react-router-dom';
import CategoryTag from './Category/CategoryTag';

class PostBox extends React.Component {
  formatDate(date){
    const dateObject = new Date(date)
    const month = dateObject.getMonth() + 1
    const day = dateObject.getDate()
    const year = dateObject.getFullYear();
    return `${year}/${month}/${day}`
  }
  render() {
    const categoryId = this.props.category;
    let category;

    switch(categoryId) {
      case 1:
        category = <CategoryTag value='1' name='Ruby' updateCategory={this.props.updateCategory} key={this.props.index}/>;
        break;
      case 2:
        category = <CategoryTag value='2' name='Go' updateCategory={this.props.updateCategory} key={this.props.index}/>;
        break;
      case 3:
        category = <CategoryTag value='3' name='Javascript' updateCategory={this.props.updateCategory} key={this.props.index}/>;
        break;
      case 5:
        category = <CategoryTag value='5' name='React' updateCategory={this.props.updateCategory} key={this.props.index}/>;
        break;
      case 6:
        category = <CategoryTag value='6' name='Rails' updateCategory={this.props.updateCategory} key={this.props.index}/>;
        break;
      case 8:
        category = <CategoryTag value='8' name='Life' updateCategory={this.props.updateCategory} key={this.props.index}/>;
      break;
      default:
        category = <CategoryTag value='7' name='Others' updateCategory={this.props.updateCategory} key={this.props.index}/>;
    }

    return (
      <div className="post-box">
        <h3><Link to= {`/Post/${this.props.id}`} className='post-title'>{this.props.title}</Link></h3>
         <span>{ this.formatDate(this.props.created_at) }</span>
         { category }
      </div>
    )
  }
}

export default PostBox;
