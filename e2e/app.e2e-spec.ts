import { CollectorAvtivityReportPage } from './app.po';

describe('collector-avtivity-report App', () => {
  let page: CollectorAvtivityReportPage;

  beforeEach(() => {
    page = new CollectorAvtivityReportPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
