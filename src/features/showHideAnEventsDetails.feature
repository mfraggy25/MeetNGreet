Feature: Show/Hide An Events Details

    Scenario:  An event element is collapsed by default
        Given there are a list of events to view
        When there are no details shown
        Then only the names of the events are shown while the elements are collapsed

    Scenario: User can expand an event to see its details
        Given the user wants to learn more about a particular event 
        When the user clicks on an event 
        Then the user can view the details 

    Scenario: User can collapse an event to hide its details 
        Given the user opens the app
        And the user has finished reading the details of an event 
        When the user clicks on the event again 
        Then the event elements are collapsed 