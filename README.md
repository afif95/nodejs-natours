
# Node.js project with express and mongoDB
# Project Description

### Tour Management Web Application
Welcome to the Tour Management Web Application! This comprehensive web application is designed and implemented with robust features to enhance user experience in managing and booking tours. The application includes user authentication, role-based access control, tour management, booking functionalities, a seamless review system, and more.

## Features
### Authentication and Authorization
**Sign Up**: Users can create an account with the application.

**Log In/Out**: Users can log in and log out of the application.

**Password Management**: Users can update and reset their passwords.

**User Profiles**: Users can update their general information, including username, photo, email, and other details.

**User Roles**: Users can be regular users, admins, lead guides, or guides.

### Tours
**Tour Creation and Management**: Admin users or lead guides can create, update, and delete tours.

**Visibility**: Tours are visible to all users.

**Map Integration**: Utilizes Mapbox to display different locations of each tour.

## Bookings
**Booking Process**: Only regular users can book tours and make payments securely using the Stripe API.

**Booking Restrictions**: Regular users cannot book the same tour twice.

**Booking History**: Regular users can view a list of all tours they have booked.

**Admin/Lead Guide Access**: Admin users or lead guides can view and manage all bookings, including manual creation without payment.

## Reviews
**User Reviews**: Only regular users can write reviews for tours they have booked.

**Review Management**: Regular users can edit and delete their own reviews.

**Admin Control**: Admins can delete any review.

## Favorite Tours
**Favorite Tour Feature**: Regular users can add booked tours to their list of favorite tours.

**User Control**: Regular users can remove tours from their list of favorite tours.

**Prevention of Duplicate Favorites**: Users cannot add the same tour to their favorites more than once.

## Credit Card Payment
**Secure Payment Process**: Implements a secure payment process using the Stripe API.

## Technologies Used
**Frontend**: HTML, CSS, Pug, JavaScript

**Backend**: NodeJS, Express

**Database**: MongoDB, Mongoose

**Authentication**: JSON Web Token (JWT)

**Bundling**: ParcelJS

**Payment Processing**: Stripe

**API Testing**: Postman

**Email**: NodeMailer, Mailtrap, Sendgrid

**Cloud Platforms**: MongoDB Atlas, Heroku

**Map Integration**: Mapbox

<img src="project screenshots/01.png" alt="drawing"/>
<img src="project screenshots/1.png" alt="drawing"/>
<img src="project screenshots/2.png" alt="drawing"/>
<img src="project screenshots/3.png" alt="drawing"/>
<img src="project screenshots/4.png" alt="drawing"/>
<img src="project screenshots/5.png" alt="drawing"/>
<img src="project screenshots/6.png" alt="drawing"/>
<img src="project screenshots/7.png" alt="drawing"/>
<img src="project screenshots/8.png" alt="drawing"/>
<img src="project screenshots/9.png" alt="drawing"/>
<img src="project screenshots/10.png" alt="drawing"/>
<img src="project screenshots/11.png" alt="drawing"/>
<img src="project screenshots/12.png" alt="drawing"/>
<img src="project screenshots/13.png" alt="drawing"/>
<img src="project screenshots/14.png" alt="drawing"/>
<img src="project screenshots/15.png" alt="drawing"/>
<img src="project screenshots/16.png" alt="drawing"/>
<img src="project screenshots/17.png" alt="drawing"/>
<img src="project screenshots/18.png" alt="drawing"/>
<img src="project screenshots/19.png" alt="drawing"/>


## How to run
clone the repository 

#### create a config.env file inside the directory and specify this variables

NODE_ENV=development


PORT=3000

#### mongodb atlas
DATABASE=

DATABASE_LOCAL=

DATABASE_PASSWORD=

#### JWT
JWT_SECRET=

JWT_EXPIRES_IN=""

JWT_COOKIE_EXPIRES_IN=

#### EMAIL (mailtrap)
EMAIL_USERNAME = 

EMAIL_PASSWORD = 

EMAIL_HOST = 

EMAIL_PORT = 

EMAIL_FROM = 

#### EMAIL (sendgrid)
SENDGRID_USERNAME=

SENDGRID_PASSWORD=

SENDGRID_EMAIL_FROM=

#### STRIPE (payment)
STRIPE_SECRET_KEY=

STRIPE_WEBHOOK_SECRET=

#### Commands to execute

npm i

npm run build:js

npm run start:dev

# Deployed project
https://abk-natours.onrender.com

It may take a while to load or not work all the time as it was deployed on a free tier

# Branch Containing the project: main
full project + 3 postman files and 4 mongodb collections are in this branch 
# postman published at:
https://documenter.getpostman.com/view/18431775/2s93kz65Xd#77b42496-5e12-45e2-b84f-c92671e02adb

# user account password (encrypted in users.json): 
test1234

only read access is enabled in mongodb atlas.
