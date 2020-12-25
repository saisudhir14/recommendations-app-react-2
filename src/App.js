import React, { useState } from "react";
import "./styles.css";

var TechStack = {
  Frontend: [
    {
      Title: "HTML/CSS/Bootstrap/SASS..",
      Description:
        "Commonly HTML,CSS are mainly used to create static content (for basic page structure, and content)can be used along with Bootstrap,SASS and other frameworks.. (for visual enhanced styling and appearance)",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png"
    },
    {
      Title: "React",
      Description:
        "React is an open-source, front end, JavaScript library for building user interfaces or UI components. It is maintained by FaceBook.. Everything is a component under React!",
      Image: "https://cdn.worldvectorlogo.com/logos/react-1.svg"
    },
    {
      Title: "Angular",
      Description:
        "Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
    }
  ],
  Backend: [
    {
      Title: "Java",
      Image:
        "https://images.vexels.com/media/users/3/166401/isolated/preview/b82aa7ac3f736dd78570dd3fa3fa9e24-java-programming-language-icon-by-vexels.png",
      Description:
        "Java is an Object Oriented Programming,platform independent programming language.Most often Java is used to build large enterprise class applications. Java works great within corporate environments, or if you're building a very large scale system. Java is also available open source. It is acquired by Oracle from Sun Microsystems."
    },

    {
      Title: ".Net",
      Description:
        "NET is an open source developer platform, created by Microsoft, for building many different types of applications.With .NET, you can use multiple languages, editors, and libraries to build for web, mobile, desktop, games, and IoT.",
      Image: "https://iconape.com/wp-content/files/pd/353150/svg/353150.svg"
    },

    {
      Title: "Python",
      Description:
        "Python is an interpreted, high-level and general-purpose programming language. Python's design philosophy emphasizes code readability with its notable use of significant whitespace.Follows object-oriented approach.",
      Image: "https://pluralsight2.imgix.net/paths/images/python-7be70baaac.png"
    }
  ],

  Database: [
    {
      Title: "MySQL",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Database-mysql.svg/1200px-Database-mysql.svg.png",
      Description:
        " The world's most popular open source available database. Easier to learn, one of the best RDBMS being used for developing various web-based software applications."
    },
    {
      Title: "Oracle RDBMS",
      Description:
        "This database technology is commonly used for running online transaction processing, Data warehousing and other common RDBMS functionalities..  ",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Oracle_Corporation_logo.svg/1200px-Oracle_Corporation_logo.svg.png"
    },
    {
      Title: "SQLite ",
      Image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Sqlite-square-icon.svg/1200px-Sqlite-square-icon.svg.png",
      Description:
        "SQLite is a popular choice as embedded database software for local/client storage in application software such as web browsers.Used today by several widespread browsers, operating systems(such as mobile phones)SQLite has bindings to many programming languages"
    }
  ]
};

var TechnologyName = Object.keys(TechStack);

export default function App() {
  var [TechnologyList, setTechnologyList] = useState(TechStack.Database);

  function skillClickHandler(skill) {
    var skills = TechStack[skill];
    setTechnologyList(skills);
  }

  function getSkills(skills) {
    var description = skills.Description;
    var imageUrl = skills.Image;
    var title = skills.Title;
    var htmlOfList = (
      <li>
        <img alt="skillImage" src={imageUrl} />
        <div style={{ padding: "0rem 1rem" }}>
          <h3>{title}</h3>

          <p>{description}</p>
        </div>
      </li>
    );
    return htmlOfList;
  }

  return (
    <div className="App">
      <h1>💻 Tech Stack !</h1>
      <p>Not sure the skills you know or learned fall under which category?</p>
      <br />
      <p>
        <p>Now worries!😊 </p> <br />
        <br />
        <p>
          <strong>P.S : </strong>
          <em>
            I have placed here vey here very few or well known or commonly used,
            mostly familiar or heard by most of us only..
          </em>
        </p>
        <br />
        Please click on the buttons below to know more!
      </p>
      <div>
        {TechnologyName.map((skill) => {
          return (
            <button
              key={skill}
              className="btn"
              onClick={() => skillClickHandler(skill)}
            >
              {skill}
            </button>
          );
        })}
      </div>

      <hr />
      <ul>
        {TechnologyList.map((skills) => {
          return getSkills(skills);
        })}
      </ul>
    </div>
  );
}
