<h1 align="center">Collaborative Project at Adalab</h1> 
<h2 align="center">Awesome Profile Cards Server</h2>

<h3 align="center">Table of Contents</h3>
<h5 align="center">1. Introduction</h5>
<h5 align="center">2. Installation</h5>
<h5 align="center">3. Specifications</h5>
<h5 align="center">4. User Stories</h5>
<h5 align="center">5. Team members</h5>

---

<h3 align="left">1. Introduction</h3>
<p align="left">

This repository includes the team project of Module 4 of the Web Development bootcamp of Adalab, a Front-End development course focused on women without previous programming knowledge.

This project has been carried out by 4 students and it has been our 4th collaborative website developed. In this project we have developed our first web server. During module 3 we developed a website using a server created by Adalab teachers. Until now we did not know how it worked inside.
Now we have created a server that has the same functionality as the server created by the Adalab teachers.

To know that the new server is well programmed, it must respond with exactly the same data and files as the server created by the Adalab teachers.

---

   <h3 align="left">2. Installation</h3>
   
It requires node.js

Download this repository in zip or clone the repository on your device.
Open a terminal in the root folder of your repository.
Install the local dependencies by running the command in the terminal:

```bash
   # installs dependencies
  npm install
```

Open the web folder and run the npm install command again.

Start the project:

1. Start the front end by executing the following command in the web folder:

```bash
  npm start
```

2. Start the back end by executing the following command in the root folder:

```bash
  npm run dev
```

---

<h3 align="left">3. Specifications</h3>

Previously we have used a server developed by Adalab teachers. Since the purpose of this project is to replicate the functionality of this server, we are going to use it as a guide to know what we should develop.
If we analyze the communications between the web and the server developed by the Adalab teachers of the Awesome profile cards project, we can see that:

- <h4 align="left">Create a new card via the API</h4>

  The web sends a request with data to the server to create a card. The information of this request can be seen in the attachment of the project of module 2. For each of these requests the server must:
  Check that the data received from the browser are correct.
  In case the data are not correct, the server must return an error response.
  In case the data is correct, the server must:
  Store the data in a database.
  Generate a unique id or uuid for the new card.
  Generate a URL with the id or uuid so that when it is accessed, the card created by the user is displayed.
  Return a response to the browser with this URL.

- <h4 align="left">Displaying an existing card using the template engine</h4>
  Each time a card is created from the web, the server associates a URL to each card.
  An example of a URL created by the Adalab server is https://awesome-profile-cards.herokuapp.com/card/19591613152820696. An example of a URL created by our server is something like https://url-de-nuestro-servidor/card/19591613152820696.
  When this URL is accessed the server should display a page with the card data:
  User data
  User's photo
  Card colors

- <h4 align="left">Static server</h4>
  In module 3 we used the GitHub Pages server to publish our websites. Now we are going to create our own server. It doesn't make sense to use GitHub Pages for the front end and another server for the back end, so we have merged everything in our own server.
  We have moved into our server the files of our web page made in module 3 with React.
  In module 3 the web communicated with the server programmed by the teachers of Adalab, with https://awesome-profile-cards.herokuapp.com.
  Now the web communicates with the server we have created, with https://our-server-url.

- <h4 align="left">Production server</h4>
  The server is deployed on a real server, so that any user can access our page.
  We have deployed our server on Heroku, which is a server for front and back.

- <h4 align="left">Technological stack used in this project:</h4>

HTML5, CSS3, Flexbox, SASS, BEM, Javascript,React, Node JS, Express JS, SQLite

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://gulpjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/gulp/gulp-plain.svg" alt="gulp" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>

<p align="left"> <a href="https://www.javascript.com/" target="_blank" rel="noreferrer"> <img src="https://i.imgur.com/84IfG7c.png" alt="JS" width="40" height="40"/> </a>
<a href="https://www.sqlite.org/index.html" target="_blank" rel="noreferrer"> <img src="https://www.aprendexojo.com/wp-content/uploads/2018/03/Sqlite.png" alt="gulp" width="40" height="40"/> </a> 
<a href="https://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://miro.medium.com/max/1400/1*XP-mZOrIqX7OsFInN2ngRQ.png" alt="html5" width="70" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://www.pngfind.com/pngs/m/638-6386507_10-years-of-experience-react-native-logo-svg.png" alt="html5" width="40" height="40"/> </a></p>

- <h4 align="left">Details</h4>

In the development of this web application we have used the following technologies:

- Advanced use of HTML forms
- Layout using advanced CSS, like flex
- Use of mediaqueries so that the design is adaptable to the device using the mobile first strategy
- Event management in the browser
- Access and send data to a server
- Local storage using LocalStorage
- Node JS
- Express JS
- React
- SQLite
- Using git for project version control
- Publishing the result to the Internet using GitHub Pages
- Publishing the result to the Internet using Heroku
- Handling of Slack, GitHub, GitHub projects, GitHub pages, VSCode, Gulp, Terminal, Zeplin.

- <h4 align="left">Working methodology:</h4>

1. Planning and executing projects under the Scrum/Agile framework.
2. Using git for project version control as a team
3. Publishing the result to the Internet using GitHub Pages and Heroku
4. Implementation of Scrum as a reference framework for product development, always based on Agile values as key points of teamwork and continuous improvement
5. Fluid communication among team members

- <h4 align="left">How it works</h4>

The application works by following these steps:

- Allow the user to choose the style of the card, choosing a color palette
- Allow the user that, by entering information in a form, this text is displayed automatically laid out in a box similar to a business card, which will be the sample of the final result
- Allow the user to create a website with their card and share it on Twitter

Both pages have an established design. The design is made for 3 device sizes:

**1. Mobile, under 768px**
**2. Tablet, from 768px to 1200px**
**3. Desktop, from 1200px**

---

<h3 align="left">4. User Stories</h3>
<p align="left">

For project management, we used user stories, which is a tool to define the features of a product.

**1. First. API**
-Create a basic server.
-Create a Rest API to be able to create cards, saving them in an array on the server.

**2. Second. Static server**
-Create a static server to be able to serve the module 3 web page from the new server.

**3. Third. Template engine**
-Create a template engine to be able to visualize the cards created.

**4. Fourth. Database**
-In the first user story we have saved the cards created in an array on the server. In this user story we must save the cards in a database.
When a user views a card we must retrieve that information from the database in order to display it.

</p>

---

 <h3 align="left">5. Team members</h3>
<p align="left">

[Rosa Donoso](https://github.com/Rouseta)

[Sara Palomo](https://github.com/sarapalcam)

[Marta Rubio](https://github.com/martarubio93)

[Norma Rivas](https://github.com/NormaDeveloper)
