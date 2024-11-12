Feature: GUI for visitor of the application displays valid elements

    Background:
        Given User navigates to cvislovakia webpage
        And User lands on home page containing the Entries module

    @visit_gui_welcome_text
    Scenario: Welcome text is visible in the GUI
        Then Welcome text is visible on the page

    @visit_gui_sponsoring_cvis_logo
    Scenario: Logo of sponsor CVISlovakia is visible in the GUI
        Then Logo of sponsor CVISlovakia is visible on the page

    @visit_gui_developer_gohealth_logo
    Scenario: Logo of developer company GoHealth is visible in the GUI
        Then Logo of developer company GoHealth is visible on the page

    @visit_gui_navigation_to_modules
    Scenario: Navigation to modules is available in the GUI
        Then Navigation to modules "Home, Login" are available on the page
