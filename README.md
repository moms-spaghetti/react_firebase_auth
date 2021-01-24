# React Firebase Auth

I created this using React combined with Firebase for testing various solutions to protect a site behind authentication.\
<br/>
[View Demo](https://moms-spaghetti-reactfirebaseauth.netlify.app/)\
You can test logging into the site by signing in with the following credentials:\

- testinguser@mail.com
- GreyHound123!

<br/>

## Details

This was built to test different solutions for logging into a site and also to protect different routes. It was one of two demos I made surrounding authentication.\
Admin users for this example are held in an array. These could be stored on a database and linked to a permissions table for a production environment.

<br/>

## Built With

- HTML
- CSS
- Javascript
- Create React App
- uuid
- Firebase
  <br/><br/>

## Getting Started

Clone the repo as instructed below and download npm modules.
<br/><br/>

## Prerequisites

Download and install npm modules.
A firebase account.
A .env file in the root folder
<br/><br/>

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/react_firebase_auth.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. Create a firebase account with a new application. One the account and project are created, create a realtime database with the default settings and a new web application. Name the application and take note of the details at the end. They are required for the .env file.
4. In firebase enable Email/Password as a sign-in method. Authentication > Sign-in method.
5. Still in firebase, create a new user. Authentication > Users.
6. Create a .env file in the root directory with the below entries. Fill in the details for each entry from the details provided at the end of step 3.
   ```sh
   REACT_APP_FIREBASE_KEY=
   REACT_APP_FIREBASE_DOMAIN=
   REACT_APP_FIREBASE_DATABASE=
   REACT_APP_FIREBASE_PROJECT_ID=
   REACT_APP_FIREBASE_STORAGE_BUCKET=
   REACT_APP_FIREBASE_SENDER_ID=
   REACT_APP_FIREBASE_APP_ID=
   ```
7. Start the application
   ```sh
   npm start
   ```
   <br/>

## Usage

After opening the page, log in using the details at the top of this readme file.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
