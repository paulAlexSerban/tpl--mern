# React Apps Deployment

## Deployment Steps
1. Test Code: manually & with automated tests
   - make sure that you ship an application that you are ready to use
2. Optimize Code: optimize user experience & performance (tip: Lazy Loading is a good start)
   - look into the lazy loading concept
3. Build App: Run build process to parse, transform & optimize code 
4. Upload App: upload production code to hosting server
   - it is very important to make sure  server always reroutes to `index.html` file
   - this is because react-router uses client-side routing
   - example of how to reroute to `index.html` file in `nginx`:
     ```nginx
     location / {
       try_files $uri /index.html;
     }
     ```
   - example firebase hosting `firebase.json` file:
     ```json
     {
       "hosting": {
         "public": "build",
         "ignore": [
           "firebase.json",
           "**/.*",
           "**/node_modules/**"
         ],
         "rewrites": [
           {
             "source": "**",
             "destination": "/index.html"
           }
         ]
       }
     }
     ```
5. Configure Server: ensure app is server securely