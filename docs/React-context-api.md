# Using `AuthContext` in Our Project

## Overview

Our project uses React's [Context API](https://react.dev/reference/react/useContext) for managing authentication state. The [AuthContext.jsx](../src/context/AuthContext.jsx) file defines `AuthContext` and its provider `AuthProvider`. This document will guide you on how to use `AuthContext` effectively in our project.

## `AuthContext` Structure

- `AuthContext` provides the following state and functionality:
  - `isAuthenticated`: A boolean indicating if the user is authenticated.
  - `setIsAuthenticated`: A function to update the `isAuthenticated` state.
  - `userData`: An object containing user data. This is `null` if the user is not authenticated.
  - `logout`: A function to handle user logout.

## How to Consume `AuthContext`

To use `AuthContext` in a component:

1. **Import the Context**

   ```jsx
   import { AuthContext } from 'path/to/AuthContext';
   ```

2. **Consume the Context**
   Use the `useContext` hook to access the context values.

   ```jsx
   const { isAuthenticated, userData, logout } = useContext(AuthContext);
   ```

3. **Example Usage**
   - **Checking Authentication Status**
     ```jsx
     if (isAuthenticated) {
       console.log('User is authenticated');
     }
     ```
   - **Using User Data**
     - example file: [Dashboard.jsx](../src/components/Test/DashBoard.jsx)
       ```jsx
       console.log(userData.role, userData.name, userData.email);
       ```
   - **Handling Logout**
     ```jsx
     const handleLogout = () => {
       logout();
     };
     ```

## Best Practices

- **Use Context Sparingly**: Avoid overusing the context in components where it's not needed.
- **Update Auth State Responsibly**: Only use provided functions (`login`, `logout`, `checkAuthStatus`) to update authentication-related state.
- **Securing Routes**: For routes that require authentication, use `isAuthenticated` to conditionally render components or redirect users.

## Further Notes

- Our component tree is already wrapped with `AuthProvider` in the root of your application, do not try to change the `AuthProvider` in `AppRouts.jsx`!
- Always test the authentication flows after making changes related to authentication.

For any questions or further clarifications, feel free to reach out to the team.
