import { browser, element, by } from 'protractor';

export class AppBookPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('as-root h1')).getText();
  }
}
