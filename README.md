# LAPS Front-End Project

This is vite+reactjs which provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, the project is using React ^18.2.0, Vite ^5.0.0, and Tailwind CSS ^3.3.6. The project require Node.js version to be above 20.0.0

Every Commit You should have the eslint and prettier check passed, if not, please fix it before commit.

Run ESLint Separately for Debugging: If the commit error happens, you might want to run ESLint separately to debug any configuration issues. Use the command `npx eslint` in project's root directory to check for any ESLint-specific errors.

## Project Setup

### download git repository

- `git clone https://github.com/chenyu-01/laps-react.git`
- if you have already downloaded the repository, please run `git pull` to get the latest version

### install dependencies

1. go to project directory `cd laps-react`
2. install dependencies `npm install`

### run the project

`npm run dev`

## Project Structure

- `src/` folder App.jsx is the main entry point for the application
- `src/components/` folder contains all the React pages.

For every page, please contain your React component within `<Layout><Layout/>` to have Header in every possible Page

## Development

- Before you start your work, please make sure you have the latest version of the project and check if dependencies are installed correctly. For more information about how to use git, please refer to [How to Use Git](docs/How-to-use-git.md)
- Here is a guide for how to use [React Context API](docs/React-context-api.md) in our project.
- Since it is the front end part, we will also have to run the back end part to test the whole project. Please refer to [LAPS Back-End Project](https://github.com/chenyu-01/LAPS-Back-End.git) for more information.

## Test User Account

Email: `testuser@gmail.com`
Password: `yYjHDp)d~+]Pb`
