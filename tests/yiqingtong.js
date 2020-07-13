const config = require('../config');

module.exports = {
    'YiQingTong': (browser) => {
        browser
            .init()
            .waitForElementVisible('body', 1000)
            
            // Login Page 
            .setValue('input[type=text]', config.username)
            .pause(100)
            .setValue('input[type=password]', config.password)
            .pause(100)
            .click('div.btn')
            .waitForElementVisible('body', 1000)

            // Main Page
            // Geolocation
            .click('div[name=area] > input[readonly=readonly]')
            .waitForElementNotVisible('div.page-loading-container', 2000)
            .pause(100)

            // Submit
            .click('div.footers > a')
            .waitForElementVisible('div.wapcf-inner', 500)
            .pause(100)
            // Confirm
            .click('div.wapcf-btn-ok')
            .waitForElementVisible('div.wapat-inner', 500)
            .end()
    },
    after: (browser) => {
        browser.end()
    }
};