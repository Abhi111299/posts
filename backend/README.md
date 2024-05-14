# posts
This repository contains the code for the Posts web Application

Steps to setup and run the code.
1. Clone the repo on your machine
2. run `npm i`
3. Copy the `.env.example` as `.env` in the root of the project
4. Adjust the `.env  values as per described in the sample file named `.env.example`
5. run `npm run dev` to start the development server

APIS:

# Note** 
1. Always pass the `x-access-token` key in the header of (except the login API) the request and it should have the jwt Token.
2. Run the API server on Port 5000 as the frontend code on that assumption. 

## Users: 

Default User credentials: 
    email : `abhi261@gmail.com`
    password: `abhi261`

1. Create User: localhost:5000/api/v1/user Method POST

Sample Post Body => {
    "f_name" : "Abhishek",
    "l_name": "Yadav",
    "email": "abhi261@gmail.com",
    "password": "abhi261"
}

2. Get users List: localhost:5000/api/v1/user Method GET

## Auth
1. Login user and get the JWT Token: localhost:5000/api/v1/login Method POST
Sample Response on Successful Login:  {
    "status": true,
    "data": {
        "user": {
            "_id": "66439f0b0ce03830a48a3b2c",
            "f_name": "Abhishek",
            "l_name": "Yadav",
            "email": "abhi261@gmail.com",
            "email_confirmed": false,
            "timestamps": "2024-05-14T17:27:36.300Z",
            "__v": 0,
            `"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NDM5ZjBiMGNlMDM4MzBhNDhhM2IyYyIsImVtYWlsIjoiYWJoaTI2MUBnbWFpbC5jb20iLCJpYXQiOjE3MTU3MTcwNDQsImV4cCI6MTcxNTgwMzQ0NH0.SXVfZin2t9jJBih6sFtB9ojgoPwF98FmuNbqhQRszRE"`
        }
    }
}

## Posts
1. Create Posts: localhost:5000/api/v1/post Method POST
Sample Post Body: {
    "title" : "Tesla rehiring certain Supercharger team members after unexpected dissolution",
    "description" : "The @TeslaCharging account on X, a social media platform owned by Musk, expressed gratitude to charging site hosts, as well as suppliers for their patience during Tesla's internal restructuring on May 10."
}

Sample Response on Successful Creation: {
    "status": true,
    "data": {
        "post": {
            "title": "Tesla rehiring certain Supercharger team members after unexpected dissolution",
            "description": "The @TeslaCharging account on X, a social media platform owned by Musk, expressed gratitude to charging site hosts, as well as suppliers for their patience during Tesla's internal restructuring on May 10.",
            "timestamps": "2024-05-14T19:13:27.494Z",
            "_id": "6643c1a7a1a719d768a4146a",
            "__v": 0,
            "id": "6643c1a7a1a719d768a4146a"
        }
    }
}

2. Get Posts List: localhost:5000/api/v1/post Method GET
3. Get Post By Id: localhost:5000/api/v1/post/:id Method GET
4. Delete Post By Id: localhost:5000/api/v1/post/:id Method DELETE
5. Update PostBy Id: localhost:5000/api/v1/post/:id Method PUT

