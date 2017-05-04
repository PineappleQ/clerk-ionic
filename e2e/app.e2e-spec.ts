import { ClerkIonicPage } from './app.po';

describe('clerk-ionic App', () => {
  let page: ClerkIonicPage;

  beforeEach(() => {
    page = new ClerkIonicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
