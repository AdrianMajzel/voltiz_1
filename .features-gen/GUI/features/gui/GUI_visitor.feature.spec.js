/** Generated from: features\gui\GUI_visitor.feature */
import { test } from "playwright-bdd";

test.describe("GUI for visitor of the application displays valid elements", () => {

  test.beforeEach(async ({ Given, page, And }) => {
    await Given("User navigates to cvislovakia webpage", null, { page });
    await And("User lands on home page containing the Entries module", null, { page });
  });

  test("Welcome text is visible in the GUI", { tag: ["@visit_gui_welcome_text"] }, async ({ Then, page }) => {
    await Then("Welcome text is visible on the page", null, { page });
  });

  test("Logo of sponsor CVISlovakia is visible in the GUI", { tag: ["@visit_gui_sponsoring_cvis_logo"] }, async ({ Then, page }) => {
    await Then("Logo of sponsor CVISlovakia is visible on the page", null, { page });
  });

  test("Logo of developer company GoHealth is visible in the GUI", { tag: ["@visit_gui_developer_gohealth_logo"] }, async ({ Then, page }) => {
    await Then("Logo of developer company GoHealth is visible on the page", null, { page });
  });

  test("Navigation to modules is available in the GUI", { tag: ["@visit_gui_navigation_to_modules"] }, async ({ Then, page }) => {
    await Then("Navigation to modules \"Home, Login\" are available on the page", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\gui\\GUI_visitor.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Welcome text is visible in the GUI": {"pickleLocation":"8:5","tags":["@visit_gui_welcome_text"],"ownTags":["@visit_gui_welcome_text"]},
  "Logo of sponsor CVISlovakia is visible in the GUI": {"pickleLocation":"12:5","tags":["@visit_gui_sponsoring_cvis_logo"],"ownTags":["@visit_gui_sponsoring_cvis_logo"]},
  "Logo of developer company GoHealth is visible in the GUI": {"pickleLocation":"16:5","tags":["@visit_gui_developer_gohealth_logo"],"ownTags":["@visit_gui_developer_gohealth_logo"]},
  "Navigation to modules is available in the GUI": {"pickleLocation":"20:5","tags":["@visit_gui_navigation_to_modules"],"ownTags":["@visit_gui_navigation_to_modules"]},
};