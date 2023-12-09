# LAPS Front-End Project

This is vite+reactjs which provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## UI Design To-Do List

### Login Page - Chen Yu

- [x] Design a simple and intuitive login page.
  - Include fields for:
    - [x] Username.
    - [x] Password.
  - Add options for:
    - [ ] Forgot Password.
    - [ ] New User Registration.

### Dashboard Page

- [ ] Create a dashboard for different user roles: Employee, Manager, Admin.
  - [ ] Incorporate navigation elements for:
    - [ ] Leave application.
    - [ ] Leave history.
    - [ ] Admin functionalities.

### Leave Application Form

- [ ] Design a form for leave application submission.
  - Include fields for:
    - [ ] Leave type.
    - [ ] Start and end date.
    - [ ] Reason for leave.
    - [ ] Contact information.

### Leave History Page

- [ ] Design a page for employees to view their leave history.
  - [ ] Use a tabular format to list previous leave applications with:
    - [ ] Status.
    - [ ] Details.

### Admin Management Page

- [ ] Design a page for administrators to manage users, roles, and leave types.
  - Include options to:
    - [ ] Add employee records.
    - [ ] Edit employee records.
    - [ ] Delete employee records.

### Leave Approval Page for Managers

- [ ] Create a page for managers to view and manage leave applications.
  - Include options to:
    - [ ] Approve applications.
    - [ ] Reject applications.
    - [ ] Add comments.

### Report Generation Page (Optional)

- [ ] Design a page for generating reports (if included).
  - Allow managers to:
    - [ ] Select criteria for report generation.
    - [ ] View/export the generated report.
##  Development To-Do List

### Project Setup
- [x] Initialize React project with Vite
- [x] Install and configure Radix, Tailwind CSS, ESLint, Prettier

### Layout and Basic Components
- [ ] Create basic layout components (Header, Footer, Navigation) using Radix & Tailwind
- [ ] Design responsive layout with Tailwind CSS

### User Authentication
- [ ] Implement Login and Registration components with Tailwind CSS for styling
- [ ] Add user authentication handling (login/logout)

### Leave Application Functionality
- [ ] Develop Leave Application Form component with Tailwind CSS
- [ ] Implement form validation and submission logic
- [ ] Create Leave History Page with Radix & Tailwind

### Admin Functionality
- [ ] Develop admin dashboard for leave request management using Radix & Tailwind
- [ ] Add functionalities for request approval/rejection

### Integration and Testing
- [ ] Integrate with back-end API services
- [ ] Write unit and integration tests

### Finalization and Deployment
- [ ] Conduct thorough testing and UI/UX refinement with Tailwind CSS
- [ ] Prepare for deployment
- [ ] Deploy to a web server

