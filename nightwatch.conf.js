require('babel-register');

const seleniumServer = require('selenium-server');
const chromedriver = require('chromedriver');

const PKG = require('./package.json');

const REPORTS_PATH = `./node_modules/nightwatch/reports/${PKG.version}/`;
const SCREENSHOT_PATH = `./node_modules/nightwatch/screenshots/${PKG.version}/`;

const config = {
  src_folders: ['tests/ui'],
  output_folder: REPORTS_PATH,
  custom_commands_path: ['./tests/commands'],

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    log_path: '',
    port: 4444,
    cli_args: {
      'webdriver.chrome.driver': chromedriver.path,
    },
  },
  test_workers: {
    enabled: true,
    workers: 'auto',
  },
  test_settings: {
    default: {
      globals: {
        waitForConditionTimeout: 15000,
      },
      launch_url: 'http://localhost:3334',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      persist_globals: true,
      screenshots: {
        enabled: true,
        path: SCREENSHOT_PATH,
      },
      desiredCapabilities: {
        browserName: 'chrome',
        loggingPrefs: { browser: 'SEVERE' },
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ['window-size=1366,768', 'incognito'],
        },
      },
    },
    headless: {
      globals: {
        screenshotPrefix: 'chrome_headless_',
      },
      desiredCapabilities: {
        chromeOptions: {
          args: ['window-size=1366,768', 'incognito', 'headless'],
        },
      },
    },
    fullscreen: {
      globals: {
        screenshotPrefix: 'chrome_fullscreen_',
      },
      desiredCapabilities: {
        chromeOptions: {
          args: ['start-fullscreen', 'incognito'],
        },
      },
    },
    debug: {
      globals: {
        waitForConditionTimeout: 3600000,
      },
    },
  },
};

module.exports = config;
