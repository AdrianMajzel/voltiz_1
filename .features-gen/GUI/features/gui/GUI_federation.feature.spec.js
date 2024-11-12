/** Generated from: features\gui\GUI_federation.feature */
import { test } from "playwright-bdd";

test.describe("GUI for user with federation role displays logo of sponsor CVI, navigation to modules and guide download link", () => {

  test.beforeEach(async ({ Given, page, And, When, Then }) => {
    await Given("User navigates to cvislovakia webpage", null, { page });
    await And("User navigates to login", null, { page });
    await And("Login form appears on the page", null, { page });
    await And("User enters \"valid federation\" credentials to login form", null, { page });
    await When("User presses login button", null, { page });
    await Then("User is logged in and redirected to module Entries", null, { page });
  });

  test("Verify logo of sponsor CVISlovakia", { tag: ["@feder_gui_sponsoring_cvis_logo"] }, async ({ Then, page }) => {
    await Then("Logo of sponsor CVISlovakia is visible on the page", null, { page });
  });

  test("Verify logo of developer company GoHealth", { tag: ["@feder_gui_developer_gohealth_logo"] }, async ({ Then, page }) => {
    await Then("Logo of developer company GoHealth is visible on the page", null, { page });
  });

  test("Verify navigation to modules is available in the GUI", { tag: ["@feder_gui_navigation_to_modules"] }, async ({ Then, page }) => {
    await Then("Navigation to modules \"My Entries, Additional Horses, All Entries, Guide\" are available on the page", null, { page });
  });

  test("Verify guide download link is available in the GUI", { tag: ["@feder_gui_guide_download_link"] }, async ({ Then, page }) => {
    await Then("Guide download link is available on the page", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features\\gui\\GUI_federation.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "Verify logo of sponsor CVISlovakia": {"pickleLocation":"13:5","tags":["@feder_gui_sponsoring_cvis_logo"],"ownTags":["@feder_gui_sponsoring_cvis_logo"]},
  "Verify logo of developer company GoHealth": {"pickleLocation":"17:5","tags":["@feder_gui_developer_gohealth_logo"],"ownTags":["@feder_gui_developer_gohealth_logo"]},
  "Verify navigation to modules is available in the GUI": {"pickleLocation":"21:5","tags":["@feder_gui_navigation_to_modules"],"ownTags":["@feder_gui_navigation_to_modules"]},
  "Verify guide download link is available in the GUI": {"pickleLocation":"25:5","tags":["@feder_gui_guide_download_link"],"ownTags":["@feder_gui_guide_download_link"]},
};