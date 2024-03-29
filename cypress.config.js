const { defineConfig } = require("cypress");

module.exports = defineConfig({
	projectId: 'h12cea',
	viewportWidth: 1920,
	viewportHeight: 1080,
	watchForFileChanges: false,
	chromeWebSecurity: false,
	// multi-reporters: one report.xml + mochawesome.json per file.
	reporter: 'cypress-multi-reporters',
	reporterOptions: {
		configFile: 'jsconfig.json',
	},
	retries: process.env.CI ? 2 : 0,
	video: false,
	// E2E Testing runner
	e2e: {
		// Glob pattern to determine what test files to load:
		specPattern: ['cypress/integration/**/*.cy.{js,jsx,ts,tsx,}'],
		baseUrl: 'https://internxt.com'
	},
});
