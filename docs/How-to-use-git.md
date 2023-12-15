# How to Use Git

This workflow helps maintain the stability of the main branch and ensures that new changes are reviewed and tested before integration. It also reduces the chances of complicated merge conflicts and keeps the main branch deployable at all times.

## **Pull the Latest Changes from the Main Branch**

- Before starting work on your feature or fix, it's important to ensure that your local main branch is up to date with the remote main branch. This step reduces the likelihood of conflicts later on.
- You can do this with:
  ```bash
  git checkout main
  git pull
  npm install # Install any new dependencies
  ```

## **Create a New Branch for Your Work**

- After updating your main branch, create a new branch from it. This is where you'll do your work.
- Use:
  ```bash
  git checkout -b [your-new-branch] # Create a new branch and switch to it
  # Naming convention: [your-name]/[feature-or-fix-name]
  ```
  Replace `[your-new-branch]` with a suitable name for your branch.

## **Work on Your Branch and Commit Changes**

- Make your changes in this new branch. Regularly commit your work with meaningful messages.
- For committing, use:
  ```bash
  git add .
  git commit -m "Your commit message"
  ```

## **Pull the Latest Changes from Main Again (Optional but Recommended)**

- Before you merge your branch or create a pull request, it’s a good idea to pull the latest changes from the main branch again, especially if some time has passed or if others are also contributing to the repository.
- This can be done with:
  ```bash
  git checkout main
  git pull
  npm install # Install any new dependencies
  git checkout [your-new-branch]
  git merge main
  ```
- Resolve any merge conflicts if they occur.

## **Push Your Branch to the Remote Repository**

- Once your branch is up to date and you've committed all your changes, push your branch to the remote repository.
- Use:
  ```bash
  git push origin [your-new-branch]
  ```

## **Create a Pull Request**

- Go to the remote repository on the web (e.g., GitHub, GitLab) and create a pull request from your branch to the main branch.
- This will typically involve selecting your branch and the main branch, and then filling out some details about your pull request.

## **Review and Merge**

- Your team members will review the pull request. They might suggest changes or approve it.
- Once approved, you or someone else with the right permissions can merge your branch into the main branch.
- **After merging, you can delete your branch.**
