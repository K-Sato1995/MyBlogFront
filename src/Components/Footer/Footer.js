import React from 'react';
import '../../Design/Footer/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-container'>
          <div className='footer-box1'>
            <h4>K-Sato's Blog</h4>
            <p>This is my personal blog where I write mostly about programming and my daily life. Some are kinda usefull and some are garbage.</p>
          </div>
          <div className='footer-box2'>
            <h4>K-Sato</h4>
            <p>I'm into baseball, language-learning, programming and cute dogs lol. I speak English and Japanese and write Ruby, Javascript and Go. </p>
          </div>
          <div className='footer-box3'>
            <h4>Links</h4>
            <ul>
              <li><a href='https://dev.to/ksato1995'>My Profile on DEV.to</a></li>
              <li><a href='https://github.com/K-Sato1995'>My GitHub Account (Profile Page)</a></li>
              <li><a href='https://github.com/K-Sato1995/MyBlog'>Code of this Blog (server-side)</a></li>
              <li><a href='https://github.com/K-Sato1995/MyBlogFront'>Code of this Blog (front-side)</a></li>
            </ul>
          </div>
        </div>
        <div className='footer-container2'>
          <h5>This blog is powered by <a href='https://pages.github.com/'>GitHubPages</a>, <a href='https://www.heroku.com/'>Heroku</a>  and <a href='https://www.flaticon.com/home'>FLATICON</a></h5>
        </div>
      </div>
    )
  }
}

export default Footer;
