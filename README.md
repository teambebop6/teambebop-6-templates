# Team Bebop 6 Template

- Express.js
- React.js
- Webpack.js

> Modified from [react-expressjs](https://github.com/tahnik/react-expressjs)

# Installation

Node Version: v6.11.5

Just clone this repo or download the zip file. `cd` into the directory and run

    npm install

## Developing App with [Hot Reload]
To develop your own react application, you can take advantage of React Hot Loader and Webpack Dev Server. To develop app with hot reload:

    npm run dev:server
    npm run dev:client

Now you can access your react application on http://localhost:8080

## Production build and Deploy
To make a production build of your project, run the following commands

    npm run build
  
This will create create two files: `index.js` in `server/public/js` and `server.js` in `server/bin`.

`server.js` will be used for serving the application on port 3000 and `index.js` is the actual react app itself.

Finally run

    npm start
