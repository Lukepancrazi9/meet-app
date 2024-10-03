Feature: Show/Hide Event Details
    Scenario:  An event element is collapsed by default
        Given user is on the app
        When the app displays a list of events
        Then the user should see the details element collapsed by default.

    Scenario: User can expand an event to see details
        Given the app is viewed and event details are hidden
        When the user clicks the show details button
        Then the user should see the hidden details expand to view.

    Scenario: User can collapse an event to hide details.
        Given the event is expanded and it's visible
        When user clicks the hide details button
        Then user should see the details collape and hidden