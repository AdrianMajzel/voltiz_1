
Feature: GUI for user with federation role displays logo of sponsor CVI, navigation to modules and guide download link

    Background:
        Given User navigates to cvislovakia webpage
        And User navigates to login
        And Login form appears on the page
        And User enters "valid federation" credentials to login form
        When User presses login button
        Then User is logged in and redirected to module Entries

    @feder_gui_sponsoring_cvis_logo
    Scenario: Verify logo of sponsor CVISlovakia
        Then Logo of sponsor CVISlovakia is visible on the page

    @feder_gui_developer_gohealth_logo
    Scenario: Verify logo of developer company GoHealth
        Then Logo of developer company GoHealth is visible on the page

    @feder_gui_navigation_to_modules
    Scenario: Verify navigation to modules is available in the GUI
        Then Navigation to modules "My Entries, Additional Horses, All Entries, Guide" are available on the page

    @feder_gui_guide_download_link
    Scenario: Verify guide download link is available in the GUI
        Then Guide download link is available on the page
