#!/bin/bash
# mkdir project-name
# cd project-name
# npm init -y

# structure
# mkdir src
# mkdir src/api
# mkdir src/startup
# touch src/startup/routes.js
# cp -r ./project-name ./DestFolder


cd project-name

# install dependecies
npm install --save @hapi/joi
npm install --save app-root-path
npm install --save bcryptjs
npm install --save body-parser
npm install --save compression
npm install --save express
npm install --save express-async-errors
npm install --save helmet
npm install --save jsonwebtoken
npm install --save morgan
npm install --save nodemailer
npm install --save winston

# install dev-dependecies
npm install --save-dev jest
npm install --save-dev dotenv