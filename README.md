1. ### START PROJECT BY: " npm run dev "
1. ### CREATE DATABASE USING "DATABASE.SQL" IN PROJECT WITH MENTIONED TABLE

1. ### USE POSTMAN TO TEST THIS ENDPOINTS:
 * **GET GROUP MEMBERS AT (GET METHOD) "http://localhost:2004/members"**

 * **GET ALL USERS IN DATABASE (GET METHOD) "http://localhost:2004/allUsers"**

 * **GET SPECIFIED USER WITH USER ID (GET METHOD) "http://localhost:2004/user/<id>" eg "http://localhost:2004/user/1"**

 * **POST USER (Create User) USING (POST METHOD) "http://localhost:2004/newUser" WITH 'BODY' JSON (USE BODY -> RAW AS JSON )** EG: 
``` 
{ 
       "email": "unix@gmail.com", 
       "username": "Barometer kikis",
       "password": "DooomsDay" 
 } 
```

 * **UPDATE EXISTING USER BY (PUT METHOD) "http://localhost:2004/user/2?email=marand@gmail.com&password=1234&username=maxwell USING SEARCH PARAMS**

 * **DELETE EXISTING USER (DELETE METHOD) "http://localhost:2004/user/1"**