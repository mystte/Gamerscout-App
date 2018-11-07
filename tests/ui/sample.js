export default {
  beforeEach: (browser) => {
    browser.open();
  },

  'Open demo activity': (browser) => {
    browser
      .waitForElementVisible('body', 1000)
      .assert.title('Activity')
      .assert.containsText('body', 'Test button')
      .end();
  },
};
