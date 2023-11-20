# UniversalDates

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.5.

## Development server

Run `npm install` to install all the dependencies and after that run `npm start` to run the JSON-server and the front, you can access the page through localhost:4000

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## About the project

This project is a universal date application, the main purpose of this application is to test using different regions timezone into one application, to do that this application converts all the timezone of the user into GMT-0 time to save on the database and when recovering this time, shows it on the application with PST timezone, also we are saving the original GMT of the user so we can be able to show the original date and time of the user based on his GMT.
This application uses Intl Javascript object, custom pipes to deal with date and some utils services to achieve this result.
