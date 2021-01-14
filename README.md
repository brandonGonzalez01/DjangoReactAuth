# DjangoReactAuth

Use Django with djangorestframework and React to start off any project. It also comes with authentication capabilities.

## Setup Python
use your favorite package manager to install the dependencies

## Setup npm

install npm if you dont already have it. Then run `npm install` to install all required packages

## Start the project

- Start up the python project. First run `python manage.py migrate` then start the server with `python manage.py runserver`
- In a new terminal then serve the react project with `npm run dev`.
- - Also run `npm run dev-noAuth` to turn off isPrivate variable in the ProtectedComponent react code.
- ps. Dont forget to create a super user! See django's doc for more.