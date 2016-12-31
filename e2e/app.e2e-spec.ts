import { AppBookPage } from './app.po';

describe('app-book App', function() {
  let page: AppBookPage;

  beforeEach(() => {
    page = new AppBookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
