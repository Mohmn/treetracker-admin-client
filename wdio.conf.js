exports.config = {
  runner: 'local',
  specs: ['./features/**/*.feature'],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--disable-gpu', '--no-sandbox'],
      },
    },
  ],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost:3001',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    [
      'chromedriver',
      {
        chromedriverCustomPath: './.drivers/chromedriver',
      },
    ],
  ],
  framework: '@wdio/cucumber-framework',
  reporters: ['spec'],
  cucumberOpts: {
    require: ['./features/step-definitions/**/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    snippets: true,
    source: true,
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false,
  },
};
