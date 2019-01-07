

# Reads



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) 
to develop an React application to display a Reddit Post alike to see posts, comments for a given post and be able to edit,delete and create new ones.



## Installation
It is required that you have already installed [npm](https://www.npmjs.com/get-npm).

This project uses the server from the repo from [Readable Server](https://github.com/udacity/reactnd-project-readable-starter).
To install and run the server:
* `git clone https://github.com/udacity/reactnd-project-readable-starter.git`
* `cd api-server`
* `npm i`
* `node server`
To install the project use another terminal interface to run these commands :
* `git clone https://github.com/gtyamamoto/readableIUdacity.git`
* `cd ./reactnd-project-myreads-starter`
* `npm install`
* and finally to run it every time `npm start`

## Project Structure
```bash

├── README.md - This file.

├── package.json # npm package manager file contains all the dependencies from the project

├── src
    ├── App.css # Main styles from the app, in comparison from the base repo, was added some styling for the alert component.
    ├── App.js # root app component and the routing system 
  
    ├── BooksAPI.js # inherited API file from the main repo
    ├── Actions # Folder containing all the actions from the application, using redux saga approach for async data
    ├── components # Folder containg all the specifics components from the application
    ├── reducers # all the reducers (active post, posts, categories and comments) from redux part
    ├── middleware # saga and logger used as middlewares
    ├── utils # includes all the request generator to communicate with the API

```

Others ommited files are similar or very equal to the main [repo](https://github.com/udacity/reactnd-project-myreads-starter)

## Dependencies

To improve the UX,validations,logging,state management and javascript operation functions it is used in this project:

* [`Tachyons`](http://tachyons.io/docs/)
* [`lodash`](https://lodash.com/docs/4.17.10)
* [`Redux Saga`](https://redux-saga.js.org/)
* [`Redux`](https://redux.js.org/)
* [`Redux Logger`](https://github.com/LogRocket/redux-logger)




## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).



