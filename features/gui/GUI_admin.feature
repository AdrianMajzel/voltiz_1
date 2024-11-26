Feature: GUI for administrator displays logo of sponsor CVI and navigation to modules

    Background:
        Given User navigates to cvislovakia webpage
        And User navigates to login
        And Login form appears on the page
        And User enters "valid admin" credentials to login form
        When User presses login button
        Then User is logged in and redirected to module Entries

    Scenario: Logo of sponsor CVISlovakia is visible in the GUI
        Then Logo of sponsor CVISlovakia is visible on the page

    Scenario: Logo of developer company GoHealth is visible in the GUI
        Then Logo of developer company GoHealth is visible on the page

    Scenario: Navigation to modules is available in the GUI
        Then Navigation to modules "Federations, Entries, Horses, Logout" are available on the page