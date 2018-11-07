export default {
  beforeEach: (browser) => {
    browser.open();
  },

  'Open demo app': (browser) => {
    browser
      .waitForElementVisible('body', 1000)
      .assert.title('App')
      .assert.containsText('body', 'Test button')
      .end();
  },
};
