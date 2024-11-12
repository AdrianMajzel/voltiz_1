import { defineConfig } from '@playwright/test';
import { defineBddConfig, defineBddProject } from 'playwright-bdd';

export default defineConfig({
  projects: [
    {
      ...defineBddProject({
        name: 'GUI',
        features: ['features/gui/GUI_visitor.feature', 'features/gui/GUI_federation.feature'],
        steps: ['steps/gui.steps.ts', 'steps/authentication.steps.ts'],

      }),
      use: { browserName: 'chromium' },
    }
  ],
  reporter: 'html',
  use: {
    trace: 'retain-on-failure',
  }
});
