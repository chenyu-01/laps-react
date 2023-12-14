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
2. install dependencies `npm install`, also when you pull the latest version, please run `npm install` to get the latest dependencies

### run the project

`npm run dev`

## Project Structure

- `src/` folder App.jsx is the main entry point for the application
- `src/components/` folder contains all the React pages.

For every page, please contain your React component within `<Layout><Layout/>` to have Header in every possible Page

## Test User Account

Email: `testuser@gmail.com`
Password: `yYjHDp)d~+]Pb`

## Pages to be Implemented

### Authentication Page - Chen Yu

- [x] Design a simple and intuitive login page and signup page.
  - Include fields for:
    - [x] Username.
    - [x] Password.
  - Add options for:
    - [x] New User Registration.

### Dashboard Navigator Page -Pretthi

- [ ] Create a dashboard for different user roles: Employee, Manager, Admin.
  - Employee:
    - [ ] Submit Leave Application
    - [ ] View Personal Leave History
    - [ ] Claim Compensation
  - Manager:
    - [ ] View Applications for Approval
    - [ ] View Employee Leave History
    - [ ] Approve/Reject Leave
    - [ ] Approve Compensation Claim
  - Admin:
    - [ ] Manage Leave Types
    - [ ] Manage Staff
    - [ ] Manage Leave Entitlement
    - [ ] Manage Approval Hierarchy

### Leave Application Form - Priya

- [ ] Design a form for leave application submission.
  - Include fields for:
    - [ ] Leave type.
    - [ ] Start and end date.
    - [ ] Reason for leave.
    - [ ] Contact information.

### Leave History Page - Liu Bao

- [ ] Design a page for employees to view their leave history.
  - [ ] Use a tabular format to list previous leave applications with:
    - [ ] Status.
    - [ ] Details.

### Admin Management Page - YU ZEJING

- [ ] Design a page for administrators to manage users, roles, and leave types.
  - [ ] Include options to:
    - [ ] Add employee records.
    - [ ] Edit employee records.
    - [ ] Delete employee records.

### Leave Approval Page for Managers - YU ZEJING

- [ ] Create a page for managers to view and manage leave applications.
  - [ ] Include options to:
    - [ ] Approve applications.
    - [ ] Reject applications.
    - [ ] Add comments.

## Development To-Do List

### Project Setup

- [x] Initialize React project with Vite
- [x] Install and configure Radix, Tailwind CSS, ESLint, Prettier

### Layout and Basic Components

- [ ] Create basic layout components (Header, Footer, Navigation)
- [ ] Design responsive layout with Tailwind CSS

### User Authentication

- [x] Implement Login and Registration components
- [x] Add user authentication handling (login/logout)

### Leave Application Functionality

- [ ] Develop Leave Application Form component
- [ ] Implement form validation and submission logic
- [ ] Create Leave History Page

### Admin Functionality

- [ ] Develop admin dashboard for leave request management
- [ ] Add functionalities for request approval/rejection

### Integration and Testing

- [ ] Integrate with back-end API services
- [ ] Write unit and integration tests

### Finalization and Deployment

- [ ] Conduct thorough testing and UI/UX refinement
- [x] Deploy to a GitHub Pages on pull request merge
