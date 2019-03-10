import React from "react";
import WorkBox from "./WorkBox";

class TabWork extends React.Component {
  render() {
    return (
      <div className="tab-work-box">
        <WorkBox
          title="MyBlog"
          description="This is the backend of this blog built with Ruby on Rails."
          language="Ruby"
          href="https://github.com/K-Sato1995/MyBlog"
        />
        <WorkBox
          title="GraphqlApi"
          description="An API buil with Ruby on Rails and class based GraphQL."
          language="Ruby"
          href="https://github.com/K-Sato1995/GraphqlApi"
        />
        <WorkBox
          title="MyBlogFront"
          description="This is the frontkend of this blog built with React.js."
          language="JavaScript"
          href="https://github.com/K-Sato1995/MyBlogFront"
        />
        <WorkBox
          title="Finance"
          description="A simple personal financial management app built with RoR and React.js."
          language="JavaScript"
          href="https://github.com/K-Sato1995/Finance"
        />
        <WorkBox
          title="Spell Generator"
          description="This is a silly gem that automatically creates spells."
          language="Ruby"
          href="https://github.com/K-Sato1995/spell_generator"
        />

        <WorkBox
          title="Pinboard"
          description="This is a clone of Pinterest I created to practice Ruby on Rails."
          language="Ruby"
          href="https://github.com/K-Sato1995/Pinboard"
        />
      </div>
    );
  }
}

export default TabWork;
