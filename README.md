# MurMur - API

Welcome to MurMur - API, our request-handler connecting the MurMur-Travel Guide to our database.

Find our API @ https://murmur-backend.herokuapp.com/

## MurMur - API & MongoDB

Our API handles request and connects to a Database on MongoDB.
We are currently using two collections.

## Collection: murmurs

This collection is using the following schema:

    {   
        user_id: String,
        city: {type:String, required: true},
        tip: {type:String, required: true},
        picture: String,
        address: String,
        date: {type: Date, default: Date.now},
        tags: [{type:String, required: true}],
        comments: [{username: String, body: String, date: Date}],
        upvotes: [{username: String}], 
        downvotes:[{username: String}],
    }

## Collection: users

This collection is using the following schema:

    {   
        username: {type:String, required:true, unique:true},
        email: {type:String, required:true, unique:true},
        password: {type:String, required:true, select: false},
        picture: String,
        accountlikes: Number,
    }

### users Endpoints

--https://murmur-backend.herokuapp.com/api/users/register

accepts POST requests for creating a new user

--https://murmur-backend.herokuapp.com/api/users/login

accepts POST requests for login / authentification

--https://murmur-backend.herokuapp.com/api/users/verify

accepts GET requests for token verification

--https://murmur-backend.herokuapp.com/api/users/:id

accepts GET requests, delivers non-protected user information

### users PROTECTED Endpoints

Requires successful Authentification

--https://murmur-backend.herokuapp.com/api/protected/me

accepts GET requests, delivers user e-mail

### murmur Endpoints

--https://murmur-backend.herokuapp.com/api/murmur

accepts POST requests for creating new murmurs

--https://murmur-backend.herokuapp.com/api/murmur/:cityname

accepts GET requests and delivers murmurs for the corresponding cityname

--https://murmur-backend.herokuapp.com/api/murmur/id/:id

accepts GET requests and delivers the one murmur with that id

--https://murmur-backend.herokuapp.com/api/murmur/upvote

accepts PUT requests and updates the murmurs upvote counter

--https://murmur-backend.herokuapp.com/api/murmur/downvote

accepts PUT requests and updates the murmurs downvote counter


## Technologies used:

"bcrypt": "^5.0.1",
"cors": "^2.8.5",
"dotenv": "^16.0.1",
"express": "^4.18.1",
"jsonwebtoken": "^8.5.1",
"mongoose": "^6.4.0"

### MurMur Frontend-App

github @ https://github.com/paul-ludwigs/MurMur-Frontend

hosted @ https://murmur-travel.netlify.app/

## Contributers

Mehtap, Paul, Philipp

## Special Thanks

Julia

