# Deployment Checklist


- [ ] Dynamic port binding
   Heroku tels us which port out app will use, so we need to make sure we listen to the port they tell us to use.
   
- [ ] Specify node version
  We want to use a specific version of Node.js, so we need to tell heroku which version we want to use.

- [ ] Specify start script
  Instruct heroku what command to run to start our app.

- [ ] Create .gitignore file
  We don't want to push our node_modules folder to heroku, so we need to make sure it's in our .gitignore file.
