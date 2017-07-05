import { EliotPage } from './app.po';

describe('eliot App', () => {
  let page: EliotPage;

  beforeEach(() => {
    page = new EliotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
