import { browser, element, by } from 'protractor';

export class ProtractorPage {
  navigateTo() {
    return browser.get('/')
      .then(() => browser.waitForAngular());
  }

  getPageTitleText() {
    return browser.getTitle();
  }

  getHomePageNewsText() {
    return element(by.css('ds-home-news')).getText();
  }
}
