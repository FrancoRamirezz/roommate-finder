
# RoomMe! Roommate Finder
### ITC 2023 Web Application Development Case

Team camel_case:
Gabriel Soto,
Giselle Avila,
Francisco Ramirez,
Shavleen Singh

## Description

RoomMe! is a platform made for college students in the CSU and UC system to find roommates. Users can create an account with some basic information and interests and start being recommended, and be recommended to, other users. Features of the current version include:

### Instant recommendations 
- Based on searched University and matching interests

### Profile page
- See all information visible to other users

### Profile settings
- Manage all public information

## Technologies

- ReactJS
- ExpressJS
- TailwindCSS
- MySQL

## Requirements

- NodeJS

## Installation

Open Folder in a Terminal and Write:

`C:\...\roommate-finder> cd Client`

`C:\...\roommate-finder\Client> npm install`

### Installs node dependencies in Client Folder

`C:\...\roommate-finder\Client> cd ..`

`C:\...\roommate-finder> cd Server`

`C:\...\roommate-finder\Server> npm install`

### Installs node dependencies in Server Folder

`C:\...\roommate-finder\Server> cd ..`

`C:\...\roommate-finder> npm install`

### Installs node dependencies in the root folder

### Finally run `npm start` from root folder to execute

## Design

Client-Server Model
### Client:
- Web Page Display
- Routing
- User Input Collection
- HTTP Requests to Server

### Server:
- User Input Processing
- Building and Exceution of SQL queries
- New User Creation
- Retrieval of User Info
- HTTP Responses to Client

### Database:
- Single Users Table
- User Info Held In One Row

## Known Issues
Profile picture not displayed on navbar, profile, or settings\
Implementation of filters incomplete\
Navbar only updates after sign in when refreshing the page\
Settings page not updating profile info\
Responsiveness incomplete for medium and small screens

## Future Changes
Encrypt sensitive user data\
Save profile pictures in bucket instead of database\
Create rooms table in database\
Room management and verification for Hosts\
Carousel of random users on home page\
Different search results for Scouts and Hosts\
Search for only Scouts or only Hosts\
Improve color scheme\
Improve font choice\
Messenger and notifications\
Personality Quiz\
Preferences Quiz
