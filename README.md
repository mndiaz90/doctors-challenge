## The Task
You just received a task for fixing a HTML page index.html , but you don't have access to the main HTML file, or
can change how the data is served from the server. The only resources you can use are CSS and JavaScript. The page
consists of informations about the clinic doctors and their availability for appointments. There is only a list of doctors
with their information.

## The Solution
As the access to the html and how tha data is served was resctricted, the solution was to parse the static content in index.ejs to retrieve the information of the doctors and merge it with the data coming from the backend. After that the static content was replaced with a React managed page.
This solution allowed:
- Bring together the zip code and city (from the static html) with the doctors availability(from server) into a single doctors array with the whole information
- Breakdown the page into components
- Manage the lifecycle of the page in a dynamic way
- Change the availability of the doctors
- Filter the doctors using UPIN or name
- Filter the doctors by availability

_Note: This solution relays in the same given structure, it only adds dependencies in `packages.json`, some configurations for those new packages and a new command to run the tests_

_Note: The `--id` param passed to json-server (in `package.json`) was not working properly. It was changed to the explicit desired value of `upin`_
### 🛠 Techcologies
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)

# How to use
1. Clone the project `git clone git@github.com:mndiaz90/oowlish-challenge.git`
2. Move into it `cd oowlish-challenge`
3. Run `npm install` to install dependencies
4. Run `npm start` and voilà!

### Run the tests
- Run `npm test`

### Deploy
Make shure your deploy runs the `npm run build` command, it will minify and optimize the code for production in the `/dist` folder
### Author
---
<sub><b>Mayler Navarro</b></sub> </br>

[![Twitter Badge](https://img.shields.io/badge/-@mndiaz-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/mndiaz90)](https://twitter.com/mndiaz90) [![Linkedin Badge](https://img.shields.io/badge/-mndiaz-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mndiaz90/)](https://www.linkedin.com/in/mndiaz90/) 
[![Gmail Badge](https://img.shields.io/badge/-mayler900123@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mayler900123@gmail.com)](mailto:mayler900123@gmail.com)
