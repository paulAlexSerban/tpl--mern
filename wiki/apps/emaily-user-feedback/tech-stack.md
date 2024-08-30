# Tech Stack

1. User signs up or logs in to the app via Google OAuth.
   1. Express server handles OAuth flow.
   2. Passport.js library used to authenticate users.
   3. User data stored in MongoDB.
2. User pays for email credits via Stripe.
   1. Stripe API used to handle payment processing.
   2. User data stored in MongoDB.
3. User creates a new campaign.
   1. React front-end sends request to Express server.
   2. Redux used to manage state.
   3. Express server creates new campaign in MongoDB.
4. User enters list of emails to send survey to.
   1. React front-end sends list of emails to Express server.
   2. Redux used to manage state.
   3. Redux Form used to manage form state.
5. We send email to list of surveyees.
   1. Email provider (SendGrid) used to send emails.
6. Surveyees click on link in email to provide feedback.
   1. Email provider (SendGrid) used to handle link clicks.
   2. Express server handles feedback from surveyees.
   3. Surveyee feedback stored in MongoDB.
7. We tabulate feedback from surveyees.
   1. MongoDB used to store surveyee feedback.
8. User can see report of all survey responses.
   1. MongoDB used to store surveyee feedback.
   2. React front-end sends request to Express server.
   3. Redux used to manage state.