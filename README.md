# Airbnb-clone (server)

This is the backend for my individual Airbnb clone built with Typescript and TypeORM. In this app you can find a home to stay in, in any given city. As a user you can also add cities and homes to the database. 

The frontend (client) of this project must be running for the app to function correctly. You can find this repository here:
http://github.com/realbenfica/airbnb-clone-client

The API has these endpoints:

* `POST /users`: sign up as new user
* `POST /login`: log in and receive a JWT
* `POST /locations`: create a new location
* `GET /locations`: list all locations
* `GET /locations/:id`: one location
* `GET /homes`: list all homes
* `GET /homedetails/:id`: details of one home
* `GET /users`: list all users

## Running

* You need a working Postgres database that is preferrably empty (drop all the tables) and running 
* Install the dependencies using `npm install`
* Compile the app (Typescript > Javascript) using `npm compile` (during development you can use `npm watch`)
* `npm start`
