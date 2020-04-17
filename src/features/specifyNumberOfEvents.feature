Feature: Specify Number Of Events

    Scenario: When user hasn’t specified a number, 30 is the default number 
        Given the user hasn’t specified a number of events 
        When they are viewing the events 
        Then the number of events will default to 30 

    Scenario: User can change the number of events they want to see 
        Given the user wants to change number of events they can see 
        When they are currently at the default list 
        Then the specific number of events will change by the user’s request