# Clients-list

MERN assignment I've got before job interview - make a Full-stack app for clients list for the company.
It was a good brief, and I saw here an opportunity to learn important technology (TypeScript) and common modules in <b>NodeJS</b> and <b>ReactJS</b> - <b>Express, Mongoose, Redux.</b>

I've decided to add Unit Testing to the project (started with server side, to test the routes). Used Jest for this purpose.
Live sample of the project, can be found <a href="https://stormy-retreat-20506.herokuapp.com/">HERE</a>. 

The scripts to install and run the app could be found in package.json file, after the "clone" is done:

Install dependencies for both Server and Client<br>
`npm run install-all`

Run both the Server and the Client using "concurrently"<br>
`npm run dev`

Run the tests<br>
`npm run test` or `npm t`

### Important
**MongoDB instance has to be connected**<br>
You may rename the file `.env-cmdrc-sample` to `.env-cmdrc` and put the credentials for connection in the **dev** section.<br>
The script will run with `env-cmd -e dev` command which parses the file and adds the variables to GLOBAL env.<br>
Alternatively, you may run the export command in CLI:<br>
`export MONGO_USER=user MONGO_PASS=pass MONGO_HOST=localhost MONGO_PORT=27017 MONGO_DATABASE=clients-list MONGO_ADMIN_DB=admin` 
