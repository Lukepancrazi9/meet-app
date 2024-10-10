# Meet App 
My Meet App is a serverless, progressive web application built using React with a test-driven development technique. This application also uses the Google Calender API to fetch upcoming events. Users can search for a city and get a list of events hosted in that particular city. Users will be shown how many events are happening in the location and the popularity of event genres. 

## Dependencies
- Serverless
- Google Calendar API
- React
- Jest
- Puppeteer
- Recharts

## Features

### Feature 1 -  Filter Events by City 
As a user,
I should be able to filter events by city
So that I can see a list of events taking place in that city.

Scenario: User filters events by a selected city <br />
    - Given the user is on the events page <br />
    - When the user selects a specific city from the city filter dropdown <br />
    - Then the list of events should display only events happening in that particular city 

### Feature 2 - Show/Hide Event Details
As a user
I want to expand or collapse event details
So that I can see more or less information about the event

Scenario: User clicks to show event details <br />
    - Given the user is viewing a list of events <br />
    - When the user clicks on "Show Details" for an event <br />
    - Then the detailed information for that event should be displayed 

Scenario: User clicks to hide event details <br />
    - Given the user has already expanded the event details <br />
    - When the user clicks on "Hide Details" <br />
    - Then the detailed information should be collapsed

### Feature 3 - Specify Number of Events
As a user
I want to specify how many events are displayed at once
So that I can control the length of the events list

Scenario: User sets the number of events to display <br />
    - Given the user is on the events page <br />
    - When the user selects "10" from the number of events dropdown <br />
    - Then only 10 events should be displayed on the page

### Feature 4 - Use the App When Offline
As a user
I want to be able to use the app even when I am offline
So that I can still see previously loaded events

Scenario: User goes offline and uses the app <br />
    - Given the user loses internet connection while on the app <br />
    - When the user refreshes the page <br />
    - Then the previously loaded events should still be displayed
    And a message should be shown indicating the user is offline

### Feature 5 - Add an App Shortcut to the Home Screen
As a user
I want to add a shortcut for the app to my home screen
So that I can quickly access it

Scenario: User adds app shortcut to the home screen <br />
    - Given the user is using the app on a mobile device <br />
    - When the user selects "Add to Home Screen" from the browser options <br />
    - Then an app shortcut should be added to their home screen

### Feature 6 - Display Charts Visualizing Event Details 
As a user
I want to see charts that visualize event statistics
So that I can understand event trends better

Scenario: User views charts displaying event statistics <br />
    - Given the user is viewing an event's details <br />
    - When the user scrolls to the event statistics section <br />
    - Then a chart should be displayed showing the number of attendees over time

## Installation 

1. Clone the Repository:
```bash
git clone https://github.com/Lukepancrazi9/meet-app.git
```
2. Run the Application:
```bash
npm start
```
## Testing

- Integration Tests using Jest 
```bash
npm run test
```
- End-to-End Tests using Puppeteer (Switch headless mode to true in EndtoEnd.tests.js)
```bash
npm run test
```

## Link 

https://lukepancrazi9.github.io/meet-app/

