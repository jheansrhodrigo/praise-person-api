# praise-person-api

## Technologies
- This project was developed with the following technologies:
    
    - TypeScript
    - TypeORM
    - Express
    - PostgreSQL
    - JWT
    - SQL Editor Beekeeper Studio (Test assistant)
    - Insomia (Test assistant)

<hr>

## API to compliment coworkers
- This API allows you to give compliments to people during working hours.

## Run this project
- Clone the repository
- Install dependencies with `yarn`
- Start the server with `yarn dev`

The application can be accessed at `localhost:3000`.

<hr>

## General Rules
User registration

- it is not allowed to register user without email.

- it is not allowed to register more than one user with the same email.

Tag registration

- it is not allowed to register an unnamed tag.

- it is not allowed to register more than one tag with the same name.

- Only administrator users can perform tag registration.

Register of compliments

- a user is not allowed to register a compliment for himself.

- it is not allowed to register elegies for invalid users.

- the user must be authenticated in the application.