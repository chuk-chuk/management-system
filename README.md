# Getting started with the application

This project was bootstrapped with Create React App.
Technologies used:

- Typescript
- React
- ES6
- react-testing-library
- tailwind
- Context API

## How to

Clone the project. In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

## User stories

- I can see a list of existing users
- I can see a list of existing groups
- I can create users
- I can create groups
- I can assign users to a group they aren’t already part of
- I can remove users from a group
- I can delete groups when they no longer have members
- I can delete users
- I can see "group detail page" where it is possible to see a list of all users in a given group
- I can see "user detail page" where it is possible to see a list of all groups ids

Notes: On the `UserDetails` page you will find the ids of the groups, logic for displaying groups names and removing items is very similar to the one in the `GroupDetails` page. See for reference.
